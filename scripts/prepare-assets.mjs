// Prépare les assets binaires avant le build. Sources acceptées, par priorité croissante :
// 1. images à plat à la RACINE du repo (cas de l'upload web GitHub qui ne préserve
//    pas les dossiers) — routées par nom : suite[s]-* → rooms/, logo-* → assets/,
//    favicon.png → public/, le reste → photos/
// 2. assets-src/** (arborescence canonique)
// 3. assets-b64/**.b64 (canal texte pour le MCP GitHub), décodés
// Fallbacks : favicon absent → copie du logo ; suite-white absente → téléchargée
// depuis le CDN du site actuel (réseau libre sur les runners GitHub Actions).
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

function place(rel, write) {
  const out = outPath(rel);
  mkdirSync(dirname(out), { recursive: true });
  write(out);
  return out;
}

let count = 0;

// 1. Images à plat à la racine du repo
for (const f of readdirSync('.')) {
  if (!/\.(jpe?g|png)$/i.test(f) || !statSync(f).isFile()) continue;
  let rel;
  if (/^favicon\.png$/i.test(f)) rel = 'favicon.png';
  else if (/^logo-/i.test(f)) rel = f;
  else if (/^suites?-/i.test(f)) rel = join('rooms', f);
  else rel = join('photos', f);
  place(rel, (out) => copyFileSync(f, out));
  count++;
}

// 2. Arborescence canonique assets-src/
if (existsSync('assets-src')) {
  for (const file of walk('assets-src')) {
    place(relative('assets-src', file), (out) => copyFileSync(file, out));
    count++;
  }
}

// 3. Canal base64 assets-b64/
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

// Fallback distant : suite-white (en attendant son ajout dans le repo)
const REMOTE_FALLBACKS = {
  'rooms/suite-white.jpg':
    'https://d14tal8bchn59o.cloudfront.net/Q56ektZrIes7uw4rxYfV3bY4IChm6vNi99S0UeAD6no/rs:fill:960:960:1/plain/https%3A%2F%2F02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com%2Fsites%2F110430%2Fphotos%2F23039211%2FPHOTO-2025-08-10-15-04-05_%25281%2529_original.jpg',
};
for (const [rel, url] of Object.entries(REMOTE_FALLBACKS)) {
  const out = outPath(rel);
  if (existsSync(out)) continue;
  console.log(`ℹ ${rel} absent → téléchargement depuis le CDN…`);
  const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`Téléchargement échoué (${res.status}) pour ${rel}`);
  const buf = Buffer.from(await res.arrayBuffer());
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, buf);
  count++;
}

console.log(`✓ ${count} assets préparés`);
