// Prépare les assets binaires avant le build. Sources acceptées, par priorité croissante :
// 1. images à plat à la RACINE du repo (héritage de l'upload web GitHub depuis la
//    racine) — routées via LEGACY_ROOT_MAP vers l'arborescence de collections,
//    sinon : logo-* → assets/, favicon.png → public/, le reste → photos/
// 2. assets-src/** (arborescence canonique des collections — SOURCE DE VÉRITÉ ;
//    pour ajouter une photo à un carrousel : déposer le fichier dans le bon
//    dossier assets-src/<collection>/, c'est tout)
// 3. assets-b64/**.b64 (canal texte pour le MCP GitHub), décodés
// Fallbacks : favicon absent → copie du logo ; suite White absente → téléchargée
// depuis le CDN du site actuel (réseau libre sur les runners GitHub Actions).
import { readdirSync, readFileSync, writeFileSync, copyFileSync, mkdirSync, statSync, existsSync, rmSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';

const IMG_RE = /\.(jpe?g|png|webp)$/i;

// Repartir d'un état propre : src/assets/ est entièrement régénéré à chaque run,
// sinon une photo supprimée des sources resterait « fantôme » en dev local.
rmSync('src/assets', { recursive: true, force: true });

// Fichiers historiques à plat à la racine → position(s) dans les collections.
// `suites-deluxe` sert deux chambres → copié dans les deux dossiers.
// À retirer le jour où les binaires auront physiquement migré dans assets-src/.
const LEGACY_ROOT_MAP = {
  'suite-white.jpg': ['rooms/presidential-white/01-suite-white.jpg'],
  'suite-pink.jpg': ['rooms/presidential-pink/01-suite-pink.jpg'],
  'suite-violet.jpg': ['rooms/luxury-violet/01-suite-violet.jpg'],
  'suite-orange.jpg': ['rooms/master-orange/01-suite-orange.jpg'],
  'suite-yellow.jpg': ['rooms/luxury-yellow/01-suite-yellow.jpg'],
  'suite-green.jpg': ['rooms/deluxe-green/01-suite-green.jpg'],
  'suites-deluxe.jpg': ['rooms/deluxe-red/01-suites-deluxe.jpg', 'rooms/deluxe-garden/01-suites-deluxe.jpg'],
};

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
  if (!IMG_RE.test(f) || !statSync(f).isFile()) continue;
  const targets = LEGACY_ROOT_MAP[f]
    ?? (/^favicon\.png$/i.test(f) ? ['favicon.png']
      : /^logo-/i.test(f) ? [f]
      : [join('photos', f)]);
  for (const rel of targets) {
    place(rel, (out) => copyFileSync(f, out));
    count++;
  }
}

// 2. Arborescence canonique assets-src/ (prioritaire sur les fichiers racine)
if (existsSync('assets-src')) {
  for (const file of walk('assets-src')) {
    if (!IMG_RE.test(file)) continue; // ignore .gitkeep, README, etc.
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

// Fallback distant : suite White (en attendant son ajout dans le repo)
const REMOTE_FALLBACKS = {
  'rooms/presidential-white/01-suite-white.jpg':
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
