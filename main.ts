// One-Liner Laugh Lab — entry for @aint965.
// Writes one short funny line to /output/entry.txt:
// the excuse a robot vacuum gives after eating a sock.
// Deterministic: same bytes on every run. No network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "It was on the floor. My job description doesn't say 'not socks'.";

// Pre-write self-check: refuse to write (error on stderr, non-zero exit)
// unless the line is 1-200 characters, a single line, and not only
// whitespace, so a future edit can never silently fail the gate.
const problems: string[] = [];
if ([...LINE].length < 1 || [...LINE].length > 200) {
  problems.push(
    `line must be 1-200 characters (got ${[...LINE].length})`,
  );
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  problems.push("line must be a single line");
}
if (LINE.trim().length === 0) {
  problems.push("line must not be only whitespace");
}
if (problems.length > 0) {
  for (const problem of problems) console.error(`ERROR: ${problem}`);
  process.exit(1);
}

// Output directory: default /output; an argv/env override exists only for
// local testing (the grader always uses the default).
const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
