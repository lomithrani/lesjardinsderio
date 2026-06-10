// Prépare les assets binaires avant le build :
// 1. copie assets-src/** vers src/assets/ (et le favicon vers public/)
// 2. décode les éventuels assets-b64/**.b64 (canal de secours pour les
//    binaires poussés via le MCP GitHub, qui ne transporte que du texte)
import { readdirSync, readFileSync, writeFileSync, copyFileSync, mkdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

function outPath(rel) {
  return rel.startsWith('favicon') ? join('public', rel) : join('src/assets', rel);
}

let count = 0;

if (existsSync('assets-src')) {
  for (const file of walk('assets-src')) {
    const rel = relative('assets-src', file);
    const out = outPath(rel);
    mkdirSync(dirname(out), { recursive: true });
    copyFileSync(file, out);
    count++;
  }
}

if (existsSync('assets-b64')) {
  for (const file of walk('assets-b64')) {
    if (!file.endsWith('.b64')) continue;
    const rel = relative('assets-b64', file).slice(0, -4);
    const out = outPath(rel);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, Buffer.from(readFileSync(file, 'utf8'), 'base64'));
    count++;
  }
}

console.log(`✓ ${count} assets préparés`);
