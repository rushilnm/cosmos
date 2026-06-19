/**
 * Walks public/ and writes public/asset-manifest.json.
 * Runs automatically via predev / prebuild scripts.
 */
import { readdir, writeFile } from "fs/promises";
import { join, relative } from "path";
import { fileURLToPath } from "url";

const root = fileURLToPath(new URL("..", import.meta.url));
const publicDir = join(root, "public");
const outFile = join(publicDir, "asset-manifest.json");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const paths = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) paths.push(...(await walk(full)));
    else paths.push(full);
  }
  return paths;
}

const all = await walk(publicDir);
const manifest = {};
for (const p of all) {
  const rel = "/" + relative(publicDir, p).replace(/\\/g, "/");
  if (rel === "/asset-manifest.json") continue;
  manifest[rel] = true;
}

await writeFile(outFile, JSON.stringify(manifest, null, 2));
console.log(`[scan-assets] ${Object.keys(manifest).length} entries → public/asset-manifest.json`);
