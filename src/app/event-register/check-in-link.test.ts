import { describe, expect, it } from "vitest";
import { tokenFromScannedText } from "./check-in-link";

describe("tokenFromScannedText", () => {
  it.each([
    ["https://site.example/event-register/?k=abc", "abc"],
    ["https://site.example/event-register?k=abc", "abc"],
    ["  https://site.example/event-register/?k=a%20b&x=1\n", "a b"],
    ["http://localhost:8888/event-register/?k=dev-token", "dev-token"],
  ])("reads the token from %j", (text, token) => {
    expect(tokenFromScannedText(text)).toBe(token);
  });

  it.each([
    ["plain text", "hello"],
    ["another page", "https://site.example/staff/?k=abc"],
    ["a lookalike path", "https://site.example/event-register-x/?k=abc"],
    ["a missing token", "https://site.example/event-register/"],
    ["an empty token", "https://site.example/event-register/?k="],
    ["a javascript link", "javascript:alert(1)//event-register?k=abc"],
    ["a data link", "data:text/html,/event-register?k=abc"],
    ["an oversized token", `https://site.example/event-register/?k=${"a".repeat(257)}`],
  ])("rejects %s", (_name, text) => {
    expect(tokenFromScannedText(text)).toBeNull();
  });
});
