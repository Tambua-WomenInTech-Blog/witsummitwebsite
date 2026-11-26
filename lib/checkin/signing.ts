import "server-only";

import { createHash, createHmac } from "node:crypto";

// Signs calls to the private check-in service. Must stay identical to
// signRequest() in summit_registration/src/lib/server/signing.ts; both repos
// test the same fixed example so a mismatch fails CI on either side.
//
// canonical string = "v1\n" + timestamp + "\n" + METHOD + "\n" + path + "\n"
//                    + clientIp + "\n" + hex SHA-256 of the raw body
export const SIGNATURE_HEADERS = {
  timestamp: "x-tambua-timestamp",
  clientIp: "x-tambua-client-ip",
  signature: "x-tambua-signature",
} as const;

type SignedParts = {
  timestamp: string;
  method: string;
  path: string;
  clientIp: string;
  body: string;
};

export function signRequest(secret: string, parts: SignedParts): string {
  const bodyHash = createHash("sha256").update(parts.body).digest("hex");
  const canonical = [
    "v1",
    parts.timestamp,
    parts.method.toUpperCase(),
    parts.path,
    parts.clientIp,
    bodyHash,
  ].join("\n");
  return `v1=${createHmac("sha256", secret).update(canonical).digest("hex")}`;
}
