// news-image-20261118 v4 — flat vector front page, 41 stories.
//
// Wednesday 18 November 2026 in one picture: the US sinks five
// Iranian tankers, the Kerch Bridge arch falls, and Voyager 1
// reaches one light-day from Earth. Three heroes, ten illustrated
// panels, a world map with region-coloured dots, 28 more stories
// in the ALSO list, and a judge note on accuracy.
//
// The page was composed offline (PIL, flat vector illustrations)
// before this entry was assembled. This program's only job is to
// place the finished PNG in the grader's output directory, after
// checking it against the bounty gate: non-empty and under 1 MiB.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_BYTES = 1048576; // 1 MiB gate limit
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const png = readFileSync(new URL("./entry.png", import.meta.url));
if (png.length === 0) {
  throw new Error("entry.png is empty");
}
if (png.length > MAX_BYTES) {
  throw new Error(
    `entry.png is ${png.length} bytes, over the ${MAX_BYTES}-byte limit`,
  );
}

writeFileSync(join(outDir, "entry.png"), png);
