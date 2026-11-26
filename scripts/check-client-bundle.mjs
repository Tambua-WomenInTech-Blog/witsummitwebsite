// Fails if server-only check-in settings reached browser-facing output.
// Checks the variable names always, and their values when they're set.
// Run after a build, or use `npm run test:bundle`.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIRS = [".next/static", "out"];
const NAMES = ["CHECKIN_SIGNING_SECRET", "CHECKIN_API_URL", "x-tambua-signature"];
const values = ["CHECKIN_SIGNING_SECRET", "CHECKIN_API_URL"]
  .map((name) => process.env[name] ?? "")
  .filter((value) => value.length >= 8);
const needles = [...NAMES, ...values].map((needle) => needle.toLowerCase());

const files = OUTPUT_DIRS.filter(existsSync).flatMap((dir) =>
  readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => join(entry.parentPath, entry.name)),
);

if (files.length === 0) {
  console.error("No build output found. Run `npm run build` first.");
  process.exit(1);
}

const leaks = files.filter((file) => {
  const contents = readFileSync(file, "latin1").toLowerCase();
  return needles.some((needle) => contents.includes(needle));
});

if (leaks.length > 0) {
  console.error("Server-only check-in settings found in browser output:");
  leaks.forEach((file) => console.error(`  ${file}`));
  process.exit(1);
}

console.log(`Checked ${files.length} files: no server-only settings in browser output.`);
