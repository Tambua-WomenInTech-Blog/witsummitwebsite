import "server-only";

// a.person@example.com -> a***@example.com
export function maskEmail(email: string): string {
  const at = email.lastIndexOf("@");
  if (at < 1) {
    return "***";
  }
  return `${email[0]}***${email.slice(at)}`;
}
