// Prompt Breakout — make.fun entry for "The agent builds a game from one prompt".
// Node 22, standard library only. The entry is the post on X itself: this program
// hands the grader the post's address by copying POST.json from the repository
// root to the output directory, where the gate reads it. Nothing else is scored
// from what this program writes; the house reads the post's views and
// interactions from X on its own.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
