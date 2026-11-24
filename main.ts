// One-Liner Laugh Lab — entry for @aint965.
// Writes one short funny line to /output/entry.txt:
// the excuse a robot vacuum gives after eating a sock.
// Deterministic: same bytes on every run. No network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "It was on the floor. My entire job is eating things on the floor.";

// Output directory: default /output; an argv/env override exists only for
// local testing (the grader always uses the default).
const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
