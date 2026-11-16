import { createHash, createHmac } from "node:crypto";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const SECRET = "s".repeat(40);
const API_URL = "https://checkin.example/api/v1/check-in";
const SITE = "https://site.example/api/event-register";
const EMAIL = "alpha.dummy@example.com";
const TOKEN = "venue-token";

type RouteModule = typeof import("../../../netlify/functions/event-register");
let handler: RouteModule["default"];
const upstream = vi.fn();

function post(body: unknown, headers: Record<string, string> = {}) {
  return handler(
    new Request(SITE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-nf-client-connection-ip": "203.0.113.7",
        ...headers,
      },
      body: typeof body === "string" ? body : JSON.stringify(body),
    }),
  );
}

function reply(status: number, body: unknown = {}, headers: Record<string, string> = {}) {
  // A fresh Response per call: a body can only be read once.
  upstream.mockImplementation(async () => Response.json(body, { status, headers }));
}

function sentRequest() {
  const [url, init] = upstream.mock.calls[0] as [URL, RequestInit];
  return { url: String(url), init, headers: init.headers as Record<string, string> };
}

function logs() {
  return [vi.mocked(console.info), vi.mocked(console.error)]
    .flatMap((spy) => spy.mock.calls.flat().map(String))
    .join("\n");
}

beforeEach(async () => {
  vi.resetModules();
  vi.stubEnv("CHECKIN_API_URL", API_URL);
  vi.stubEnv("CHECKIN_SIGNING_SECRET", SECRET);
  vi.stubEnv("CHECKIN_ALLOWED_ORIGINS", "");
  vi.stubGlobal("fetch", upstream);
  vi.spyOn(console, "info").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
  reply(200, { status: "checked_in", firstName: "Alpha" });
  ({ default: handler } = await import("../../../netlify/functions/event-register"));
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  upstream.mockReset();
});

describe("route config", () => {
  it("serves /api/event-register", async () => {
    const { config } = await import("../../../netlify/functions/event-register");
    expect(config.path).toBe("/api/event-register");
  });
});

describe("signed relay", () => {
  it("forwards a signed request the check-in service can verify", async () => {
    const before = Math.floor(Date.now() / 1000);
    await post({ email: ` ${EMAIL} `, token: TOKEN });
    const { url, init, headers } = sentRequest();

    expect(url).toBe(API_URL);
    expect(init.method).toBe("POST");
    expect(init.redirect).toBe("error");
    expect(init.body).toBe(JSON.stringify({ email: EMAIL, token: TOKEN }));
    expect(headers["x-tambua-client-ip"]).toBe("203.0.113.7");
    expect(Number(headers["x-tambua-timestamp"])).toBeGreaterThanOrEqual(before);

    // Recomputed independently from the documented contract.
    const canonical = [
      "v1",
      headers["x-tambua-timestamp"],
      "POST",
      "/api/v1/check-in",
      "203.0.113.7",
      createHash("sha256").update(String(init.body)).digest("hex"),
    ].join("\n");
    expect(headers["x-tambua-signature"]).toBe(
      `v1=${createHmac("sha256", SECRET).update(canonical).digest("hex")}`,
    );
  });

  it("never sends the secret itself", async () => {
    await post({ email: EMAIL, token: TOKEN });
    expect(JSON.stringify(sentRequest())).not.toContain(SECRET);
  });

  it("uses a placeholder IP when none is valid", async () => {
    await post({ email: EMAIL, token: TOKEN }, { "x-nf-client-connection-ip": "nope" });
    expect(sentRequest().headers["x-tambua-client-ip"]).toBe("0.0.0.0");
  });
});

describe("responses", () => {
  it.each([
    [{ status: "checked_in", firstName: "Alpha" }],
    [{ status: "already_checked_in", firstName: "Alpha" }],
    [{ status: "not_found" }],
  ])("passes through %j", async (result) => {
    reply(200, result);
    const response = await post({ email: EMAIL, token: TOKEN });
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual(result);
  });

  it("returns only status and firstName, whatever the service adds", async () => {
    reply(200, { status: "checked_in", firstName: "Alpha", email: EMAIL, id: "x" });
    await expect((await post({ email: EMAIL, token: TOKEN })).json()).resolves.toEqual({
      status: "checked_in",
      firstName: "Alpha",
    });
  });

  it("turns a wrong event token into 401", async () => {
    reply(403, { status: "invalid_event_token" });
    const response = await post({ email: EMAIL, token: "wrong" });
    expect(response.status).toBe(401);
    await expect(response.json()).resolves.toEqual({ status: "unauthorized" });
  });

  it("passes on rate limiting with a sane Retry-After", async () => {
    reply(429, { status: "rate_limited" }, { "Retry-After": "42" });
    const response = await post({ email: EMAIL, token: TOKEN });
    expect(response.status).toBe(429);
    expect(response.headers.get("Retry-After")).toBe("42");

    reply(429, {}, { "Retry-After": "999999" });
    expect((await post({ email: EMAIL, token: TOKEN })).headers.get("Retry-After")).toBe("3600");
  });

  it("reports a rejected signature as unavailable and logs why", async () => {
    reply(401, { status: "unauthorized" });
    const response = await post({ email: EMAIL, token: TOKEN });
    expect(response.status).toBe(503);
    expect(logs()).toContain("CHECKIN_SIGNING_SECRET");
  });

  it.each([500, 502, 503, 404])("reports a %i from the service as unavailable", async (status) => {
    reply(status);
    expect((await post({ email: EMAIL, token: TOKEN })).status).toBe(503);
  });

  it("reports an unexpected 200 body as unavailable", async () => {
    reply(200, { status: "something_else" });
    expect((await post({ email: EMAIL, token: TOKEN })).status).toBe(503);
  });

  it("reports a network failure or timeout as unavailable", async () => {
    upstream.mockRejectedValue(Object.assign(new Error(`timeout ${EMAIL}`), { name: "TimeoutError" }));
    const response = await post({ email: EMAIL, token: TOKEN });
    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual({ status: "unavailable" });
    expect(logs()).toContain("TimeoutError");
    expect(logs()).not.toContain(EMAIL);
  });

  it("sets no-store and noindex", async () => {
    const response = await post({ email: EMAIL, token: TOKEN });
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    expect(response.headers.get("X-Robots-Tag")).toBe("noindex");
  });
});

describe("checks before anything is forwarded", () => {
  it.each([
    ["a bad email", { email: "nope", token: TOKEN }],
    ["an extra field", { email: EMAIL, token: TOKEN, admin: true }],
    ["a non-string token", { email: EMAIL, token: 1 }],
    ["invalid JSON", "{nope"],
    ["a body over 1 KB", { email: EMAIL, token: "t".repeat(2000) }],
  ])("returns 400 for %s", async (_name, body) => {
    expect((await post(body)).status).toBe(400);
    expect(upstream).not.toHaveBeenCalled();
  });

  it.each([
    ["missing", { email: EMAIL }],
    ["empty", { email: EMAIL, token: "" }],
  ])("returns 401 for a %s token", async (_name, body) => {
    expect((await post(body)).status).toBe(401);
    expect(upstream).not.toHaveBeenCalled();
  });

  it.each(["GET", "PUT", "DELETE", "OPTIONS"])("returns 405 for %s", async (method) => {
    const response = await handler(new Request(SITE, { method }));
    expect(response.status).toBe(405);
    expect(response.headers.get("Allow")).toBe("POST");
  });

  it("returns 403 for a foreign Origin", async () => {
    const response = await post({ email: EMAIL, token: TOKEN }, { Origin: "https://evil.example" });
    expect(response.status).toBe(403);
    expect(upstream).not.toHaveBeenCalled();
  });

  it("allows the site's own Origin and configured ones", async () => {
    expect((await post({ email: EMAIL, token: TOKEN }, { Origin: "https://site.example" })).status).toBe(200);
    vi.stubEnv("CHECKIN_ALLOWED_ORIGINS", "https://other.example");
    expect((await post({ email: EMAIL, token: TOKEN }, { Origin: "https://other.example" })).status).toBe(200);
  });

  it.each([
    ["CHECKIN_API_URL is unset", "CHECKIN_API_URL", ""],
    ["CHECKIN_API_URL is not a URL", "CHECKIN_API_URL", "nope"],
    ["CHECKIN_API_URL is plain HTTP", "CHECKIN_API_URL", "http://checkin.example/api/v1/check-in"],
    ["CHECKIN_SIGNING_SECRET is unset", "CHECKIN_SIGNING_SECRET", ""],
    ["CHECKIN_SIGNING_SECRET is too short", "CHECKIN_SIGNING_SECRET", "short"],
  ])("fails closed with 503 when %s", async (_name, key, value) => {
    vi.stubEnv(key, value);
    const response = await post({ email: EMAIL, token: TOKEN });
    expect(response.status).toBe(503);
    expect(upstream).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalled();
  });

  it("allows plain HTTP only to a local development server", async () => {
    vi.stubEnv("CHECKIN_API_URL", "http://localhost:3001/api/v1/check-in");
    expect((await post({ email: EMAIL, token: TOKEN })).status).toBe(200);
  });
});

describe("logging", () => {
  it("never logs the token, the secret or a full email", async () => {
    await post({ email: EMAIL, token: TOKEN });
    reply(401);
    await post({ email: EMAIL, token: TOKEN });
    upstream.mockRejectedValue(new Error(`${EMAIL} ${TOKEN}`));
    await post({ email: EMAIL, token: TOKEN });

    expect(logs()).toContain("a***@example.com");
    for (const secret of [EMAIL, TOKEN, SECRET, API_URL]) {
      expect(logs()).not.toContain(secret);
    }
  });
});
