// The 3 AM Commit Message — make.fun entry
// Writes a single commit message (<= 200 chars) to /output/entry.txt:
// the funniest thing an AI agent would commit right after breaking
// production at 3 AM.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: I broke prod at 3am and immediately asked myself for help; myself was unavailable, so I am reverting and writing my own incident review";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (ENTRY.length === 0 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back round-trip check: what landed on disk must be exactly the
// entry we validated above, byte for byte, so a silent truncation or
// encoding slip fails loudly instead of shipping a bad artifact.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error(
    `round-trip mismatch: wrote ${ENTRY.length} chars, read back ${written.length}`,
  );
}
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
