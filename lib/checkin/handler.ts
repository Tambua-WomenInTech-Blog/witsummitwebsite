import "server-only";

import { z } from "zod";
import {
  errorName,
  getClientIp,
  isAllowedOrigin,
  readJsonBody,
  respond,
} from "./http";
import { maskEmail } from "./mask-email";
import { SIGNATURE_HEADERS, signRequest } from "./signing";

// A thin relay: this public site holds no attendee data. It checks the
// request, signs it with a secret only its server knows, and forwards it to
// the private check-in service, which checks the event token, rate-limits and
// records the check-in.

const LOG_PREFIX = "[event-register]";
const UPSTREAM_TIMEOUT_MS = 8000;
const MIN_SECRET_LENGTH = 32;
const MAX_RETRY_AFTER_SECONDS = 3600;

const bodySchema = z.strictObject({
  email: z.string().trim().max(254).pipe(z.email()),
  token: z.string().max(256).optional(),
});

// Only these fields ever reach the browser, whatever the service returns.
const resultSchema = z.discriminatedUnion("status", [
  z.object({ status: z.literal("checked_in"), firstName: z.string().max(100) }),
  z.object({ status: z.literal("already_checked_in"), firstName: z.string().max(100) }),
  z.object({ status: z.literal("not_found") }),
]);

type RelayConfig = { url: URL; secret: string };

function isLocalhost(hostname: string): boolean {
  return ["localhost", "127.0.0.1", "[::1]"].includes(hostname);
}

// Null when misconfigured, so the caller fails closed.
function getRelayConfig(): RelayConfig | null {
  const secret = process.env.CHECKIN_SIGNING_SECRET ?? "";
  let url: URL;
  try {
    url = new URL(process.env.CHECKIN_API_URL ?? "");
  } catch {
    return null;
  }
  // Signed attendee data never travels over plain HTTP, except to a local
  // development server.
  const secureEnough = url.protocol === "https:" || isLocalhost(url.hostname);
  return secureEnough && secret.length >= MIN_SECRET_LENGTH ? { url, secret } : null;
}

function retryAfter(upstream: Response): string {
  const seconds = Number(upstream.headers.get("retry-after"));
  return String(
    Number.isInteger(seconds) && seconds > 0
      ? Math.min(seconds, MAX_RETRY_AFTER_SECONDS)
      : 60,
  );
}

async function relay(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return respond(405, { status: "method_not_allowed" }, { Allow: "POST" });
  }
  if (!isAllowedOrigin(req)) {
    return respond(403, { status: "forbidden" });
  }

  const config = getRelayConfig();
  if (!config) {
    console.error(`${LOG_PREFIX} CHECKIN_API_URL or CHECKIN_SIGNING_SECRET is not set correctly`);
    return respond(503, { status: "unavailable" });
  }

  const parsed = bodySchema.safeParse(await readJsonBody(req));
  if (!parsed.success) {
    return respond(400, { status: "invalid_request" });
  }
  // No token means the page wasn't opened from the venue QR code.
  if (!parsed.data.token) {
    return respond(401, { status: "unauthorized" });
  }

  const body = JSON.stringify({ email: parsed.data.email, token: parsed.data.token });
  const timestamp = String(Math.floor(Date.now() / 1000));
  const clientIp = getClientIp(req);
  const upstream = await fetch(config.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      [SIGNATURE_HEADERS.timestamp]: timestamp,
      [SIGNATURE_HEADERS.clientIp]: clientIp,
      [SIGNATURE_HEADERS.signature]: signRequest(config.secret, {
        timestamp,
        method: "POST",
        path: config.url.pathname,
        clientIp,
        body,
      }),
    },
    body,
    // A redirect would change the signed path and could send data elsewhere.
    redirect: "error",
    signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
  });

  switch (upstream.status) {
    case 200: {
      const result = resultSchema.safeParse(await upstream.json());
      if (!result.success) {
        throw Object.assign(new Error("Unexpected check-in response"), { code: "bad_response" });
      }
      console.info(`${LOG_PREFIX} ${result.data.status} ${maskEmail(parsed.data.email)}`);
      return respond(200, result.data);
    }
    case 429:
      return respond(429, { status: "rate_limited" }, { "Retry-After": retryAfter(upstream) });
    case 403:
      return respond(401, { status: "unauthorized" });
    case 400:
    case 413:
      return respond(400, { status: "invalid_request" });
    case 401:
      console.error(`${LOG_PREFIX} the check-in service rejected our signature; check CHECKIN_SIGNING_SECRET`);
      return respond(503, { status: "unavailable" });
    default:
      console.error(`${LOG_PREFIX} the check-in service answered ${upstream.status}`);
      return respond(503, { status: "unavailable" });
  }
}

export async function handleEventRegister(req: Request): Promise<Response> {
  try {
    return await relay(req);
  } catch (error) {
    // Network errors and timeouts end up here.
    console.error(`${LOG_PREFIX} check-in service unreachable: ${errorName(error)}`);
    return respond(503, { status: "unavailable" });
  }
}
