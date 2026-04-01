import { mkdir, writeFile } from "node:fs/promises";

const outputDirectory = new URL("../dist/", import.meta.url);
const outputFile = new URL("./scheduled-run.txt", outputDirectory);
const executedAt = new Date().toISOString();

await mkdir(outputDirectory, { recursive: true });
await writeFile(outputFile, `executedAt=${executedAt}\n`, "utf8");

console.log(`Wrote ${outputFile.pathname} at ${executedAt}`);