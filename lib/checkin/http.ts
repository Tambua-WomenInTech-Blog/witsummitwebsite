import "server-only";

import { isIP } from "node:net";

export const MAX_BODY_BYTES = 1024;

export function respond(
  httpStatus: number,
  body: Record<string, unknown>,
  headers: Record<string, string> = {},
): Response {
  return Response.json(body, {
    status: httpStatus,
    headers: {
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
      ...headers,
    },
  });
}

function parseOrigin(value: string): string | undefined {
  try {
    return new URL(value).origin;
  } catch {
    return undefined;
  }
}

export function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (origin === null) {
    return true;
  }
  const configured = (process.env.CHECKIN_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => parseOrigin(value.trim()));
  return [parseOrigin(req.url), ...configured].includes(origin);
}

// x-nf-client-connection-ip is set by Netlify and can't be spoofed by clients.
// x-forwarded-for is only the fallback for local development. The check-in
// service rate-limits by this address, so it must be a real IP.
export function getClientIp(req: Request): string {
  const ip =
    req.headers.get("x-nf-client-connection-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "";
  return isIP(ip) ? ip : "0.0.0.0";
}

export async function readJsonBody(req: Request): Promise<unknown> {
  if (Number(req.headers.get("content-length")) > MAX_BODY_BYTES) {
    return undefined;
  }
  const bytes = await req.arrayBuffer();
  if (bytes.byteLength > MAX_BODY_BYTES) {
    return undefined;
  }
  try {
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return undefined;
  }
}

// The error's name plus a plain code if it has one. Never the message: it
// could carry request data.
export function errorName(error: unknown): string {
  if (!(error instanceof Error)) {
    return "UnknownError";
  }
  const code = (error as { code?: unknown }).code;
  return typeof code === "string" && /^[A-Za-z0-9_]{1,64}$/.test(code)
    ? `${error.name} (${code})`
    : error.name;
}
