const MAX_TOKEN_LENGTH = 256;

// Reads the event token from a scanned check-in link. Only the token is used:
// the caller always stays on this site, so a planted QR code can't send people
// anywhere else. Any other QR content returns null.
export function tokenFromScannedText(text: string): string | null {
  let url: URL;
  try {
    url = new URL(text.trim());
  } catch {
    return null;
  }

  const isWebLink = url.protocol === "https:" || url.protocol === "http:";
  const isCheckInPage = url.pathname.replace(/\/$/, "") === "/event-register";
  const token = url.searchParams.get("k");
  if (!isWebLink || !isCheckInPage || !token || token.length > MAX_TOKEN_LENGTH) {
    return null;
  }
  return token;
}
