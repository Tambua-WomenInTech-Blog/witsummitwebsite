import { describe, expect, it } from "vitest";
import { maskEmail } from "../mask-email";

describe("maskEmail", () => {
  it("keeps only the first character and the domain", () => {
    expect(maskEmail("alpha.dummy@example.com")).toBe("a***@example.com");
  });

  it("reveals nothing when the value has no local part", () => {
    expect(maskEmail("not-an-email")).toBe("***");
    expect(maskEmail("@example.com")).toBe("***");
  });
});
