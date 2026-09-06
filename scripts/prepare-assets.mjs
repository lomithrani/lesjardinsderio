// Prépare les assets binaires avant le build. Sources acceptées, par priorité croissante :
// 1. assets-src/** (arborescence canonique des collections — SOURCE DE VÉRITÉ ;
//    pour ajouter une photo à un carrousel : déposer le fichier dans le bon
//    dossier assets-src/<collection>/, c'est tout). Les éventuels logo-* / favicon.png
//    posés à plat à la racine du repo y sont aussi pris en charge (legacy logo/favicon).
// 2. assets-b64/**.b64 (canal texte pour le MCP GitHub), décodés.
// Fallback : favicon absent → copie du logo.
// Recadrage : assets-src/crops.json déclare, par identifiant de photo, des pixels à
// retirer par bord ; appliqué à la copie (sharp) sans toucher au fichier source.
import { readdirSync, readFileSync, writeFileSync, copyFileSync, mkdirSync, statSync, existsSync, rmSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import sharp from 'sharp';

const IMG_RE = /\.(jpe?g|png|webp)$/i;

// Repartir d'un état propre : src/assets/ est entièrement régénéré à chaque run,
// sinon une photo supprimée des sources resterait « fantôme » en dev local.
rmSync('src/assets', { recursive: true, force: true });

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

function outPath(rel) {
  return rel.startsWith('favicon') ? join('public', rel) : join('src/assets', rel);
}

function place(rel, write) {
  const out = outPath(rel);
  mkdirSync(dirname(out), { recursive: true });
  write(out);
  return out;
}

let count = 0;

// Recadrages déclaratifs : { "<id photo>": { left?, top?, right?, bottom? } } (pixels).
const CROPS_FILE = 'assets-src/crops.json';
const crops = existsSync(CROPS_FILE) ? JSON.parse(readFileSync(CROPS_FILE, 'utf8')) : {};
delete crops._comment;

// Copie une image en retirant les bords déclarés dans crops.json (copie brute sinon).
async function copyImage(src, out, id) {
  const c = crops[id];
  if (!c) { copyFileSync(src, out); return; }
  const { width, height } = await sharp(src).metadata();
  const left = c.left ?? 0, top = c.top ?? 0;
  const w = width - left - (c.right ?? 0), h = height - top - (c.bottom ?? 0);
  if (w <= 0 || h <= 0) throw new Error(`crops.json : recadrage invalide pour « ${id} »`);
  await sharp(src).extract({ left, top, width: w, height: h }).jpeg({ quality: 92 }).toFile(out);
  console.log(`✂ ${id} : ${width}×${height} → ${w}×${h}`);
}

// 1a. logo-* / favicon.png encore posés à plat à la racine (legacy logo/favicon).
for (const f of readdirSync('.')) {
  if (!IMG_RE.test(f) || !statSync(f).isFile()) continue;
  if (/^favicon\.png$/i.test(f)) { place('favicon.png', (out) => copyFileSync(f, out)); count++; }
  else if (/^logo-/i.test(f)) { place(f, (out) => copyFileSync(f, out)); count++; }
  // tout autre jpg à la racine est ignoré : la source de vérité est assets-src/.
}

// 1b. Arborescence canonique assets-src/
if (existsSync('assets-src')) {
  for (const file of walk('assets-src')) {
    if (!IMG_RE.test(file)) continue; // ignore .gitkeep, README, crops.json, etc.
    const rel = relative('assets-src', file);
    const id = rel.replace(IMG_RE, '');
    const out = outPath(rel);
    mkdirSync(dirname(out), { recursive: true });
    await copyImage(file, out, id);
    count++;
  }
}

// 2. Canal base64 assets-b64/
if (existsSync('assets-b64')) {
  for (const file of walk('assets-b64')) {
    if (!file.endsWith('.b64')) continue;
    const rel = relative('assets-b64', file).slice(0, -4);
    place(rel, (out) => writeFileSync(out, Buffer.from(readFileSync(file, 'utf8'), 'base64')));
    count++;
  }
}

// Fallback favicon : réutiliser le logo si aucun favicon fourni
if (!existsSync('public/favicon.png') && existsSync('src/assets/logo-noir.png')) {
  place('favicon.png', (out) => copyFileSync('src/assets/logo-noir.png', out));
  console.log('ℹ favicon.png absent → copie de logo-noir.png');
  count++;
}

console.log(`✓ ${count} assets préparés`);
