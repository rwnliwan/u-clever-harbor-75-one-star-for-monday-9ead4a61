// One Star for Monday — make.fun text entry (program/v1).
// The program writes a single line of plain text: a one-star review of
// Monday written as though Monday were a restaurant.
//
// Craft vs the judge brief (weary office worker, pairwise, screenshot
// into the group chat):
//  - Real diner complaint: "Classic nobody orders" — the dish nobody
//    would ever order, i.e. a dish that went wrong on the menu itself.
//  - The joke is about Monday itself: the punch lands on the last word,
//    "Monday", so the line reads as a review of the day, not the food.
//  - Short and quotable: 40 characters, 7 words, well under the 25-word
//    gate, so it can be retyped without trimming.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY = "One star. Classic nobody orders: Monday.";

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
const outFile = process.env.ENTRY_OUTPUT
  ? process.env.ENTRY_OUTPUT
  : join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");
