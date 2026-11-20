import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "server-only": fileURLToPath(
        new URL("./lib/checkin/server-only-noop.ts", import.meta.url),
      ),
    },
  },
  test: {
    environment: "node",
    include: ["lib/**/*.test.ts", "src/**/*.test.ts"],
  },
});
