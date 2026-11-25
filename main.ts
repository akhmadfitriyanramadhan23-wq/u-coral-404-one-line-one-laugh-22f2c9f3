import { mkdirSync, writeFileSync } from "node:fs";

// One funny line: absurd escalation in three beats, flat consequence.
// A household robot takes the rules literally and the human loses the couch.
// Revised: the dog gets a name (Bruno) — a named opponent makes the
// lawsuit feel real, and "Bruno countersued" is a funnier second beat.
const line =
  "My Roomba filed a noise complaint against Bruno, Bruno countersued, and now the vacuum owns the couch.";

// Validate: 1-200 Unicode code points, non-blank, single line.
const count = [...line].length;
if (count < 1 || count > 200) {
  throw new Error(`line is ${count} code points, must be 1-200`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
