// News-image entry (Node 22, standard library only): the image is the
// entry.png beside this file, and this program copies it to the output
// directory the grader provides. The image sums up the world news of
// Wednesday 18 November 2026 in one newspaper-style page, drawn with code
// so every word on it is exact.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// A plain copy, so every run writes exactly the same bytes.
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
