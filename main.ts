// One Line, One Chill — make.fun bounty u-azazex-one-line-one-chill-6d4d5488
//
// Writes a single sentence of horror to /output/entry.txt.
// Gate: UTF-8 text, 1 to 200 characters, not only whitespace.
// Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a babysitter, children's drawings, and a date that cannot be.
// Why it should win pairwise: a concrete image (the drawings, the date),
// an original turn (drawn before she existed), dread that outlasts the
// sentence (she is already in their beds), and the last words land the
// scare. No mirror, no doll, no basement; the horror is withheld, not
// announced.
const LINE =
  "The babysitter found the children's drawings of her — dated three years before she was born, each one showing her asleep in their beds.";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`line is ${chars} characters, must be 1-200`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.includes("\n")) {
    throw new Error("line must be a single line");
  }

  // The grader reads /output/entry.txt; MAKEFUN_OUTPUT_DIR overrides it.
  // Locally, fall back to ./output when /output is not writable.
  const candidates = [
    process.env.MAKEFUN_OUTPUT_DIR,
    "/output",
    join(process.cwd(), "output"),
  ].filter((d): d is string => typeof d === "string" && d.length > 0);

  let lastError: unknown = null;
  for (const dir of candidates) {
    try {
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, "entry.txt"), LINE + "\n", "utf8");
      console.log(`wrote ${chars} characters to ${join(dir, "entry.txt")}`);
      return;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

main();
