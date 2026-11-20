import { describe, expect, it } from "vitest";
import { signRequest } from "../signing";

describe("signRequest", () => {
  // The same example is tested in summit_registration. If either side's
  // signing changes, one of the two suites fails.
  it("matches the shared contract example", () => {
    expect(
      signRequest("contract-test-secret-0123456789abcdef", {
        timestamp: "1800000000",
        method: "post",
        path: "/api/v1/check-in",
        clientIp: "203.0.113.7",
        body: '{"email":"alpha.dummy@example.com","token":"dev-token"}',
      }),
    ).toBe("v1=565e298351cc58433bc5fbd9e7a8293765fbe0ebe799933c63f942d008fca2ad");
  });
});
