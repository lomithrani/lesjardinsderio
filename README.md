# Les Jardins de Rio

Site vitrine trilingue (PT-BR / EN / FR) — maison d'hôtes & lieu d'événements à Cosme Velho, Rio de Janeiro.

- **Framework** : [Astro 5](https://astro.build), sortie 100 % statique
- **Hébergement** : GitHub Pages, déploiement automatique à chaque push sur `main`
- **Staging** : https://lomithrani.github.io/lesjardinsderio/
- **Réservation chambres** : NoBeds — moteur de réservation par chambre (`book=1`), ouvert dans un overlay (iframe `Beta`) sur la page Chambres (cf. `nobedsBooking()` dans `src/config.ts`)
- **Contact** : WhatsApp + mailto (pas de backend)

## Développement

```bash
npm install
npm run dev      # prépare les assets puis lance le serveur de dev
npm run build    # prépare les assets puis build de production dans dist/
```

## Pipeline d'assets binaires

Le MCP GitHub ne transporte que du texte ; les images suivent donc un canal dédié :

- `assets-src/` — **source de vérité des binaires** (photos, logo, favicon), committée
  dans le repo. Pour ajouter/mettre à jour des images : upload via l'interface GitHub
  (« Add file → Upload files ») ou commit git classique.
- `assets-b64/` — canal de secours : fichiers `*.b64` (base64) poussables via le MCP,
  décodés au build.
- `scripts/prepare-assets.mjs` — exécuté automatiquement avant `dev`/`build`
  (`prebuild`/`predev`) : copie `assets-src/` et décode `assets-b64/` vers
  `src/assets/` (+ `public/favicon.png`). Ces destinations sont ignorées par git.

## Structure

```
src/
  config.ts          # coordonnées, routes localisées, NoBeds (base Beta + params), STAGING_NOINDEX
  images.ts          # résolution des images par nom
  i18n/ui.ts         # textes des pages ×3 langues
  i18n/rooms.ts      # données des 8 suites ×3 langues
  styles/global.css  # design tokens + composants
  components/        # Curve (séparateur signature) + Carousel
  layouts/Base.astro # head SEO + hreflang + header/footer + JSON-LD
  templates/         # 1 template par page logique
  pages/             # pt/ en/ fr/ — pages fines (slugs localisés) + redirection racine
```

## ⛑ Placeholders à remplacer

| Quoi | Où |
|---|---|
| Paramètres du moteur NoBeds | `src/config.ts` → `SITE.NOBEDS_BETA_PARAMS` |
| Domaine définitif | `astro.config.mjs` (`site`, retirer `base`, ajouter `public/CNAME`) + DNS |
| Indexation | `src/config.ts` → `STAGING_NOINDEX = false` au lancement |
| Surfaces suites Red / Garden View | `src/i18n/rooms.ts` |

## Déploiement & vérification automatique

GitHub Pages est configuré en source **« Deploy from a branch » → `gh-pages`**.
`.github/workflows/deploy.yml` publie sur cette branche :

- **push sur `main`** → build déployé à la **racine** de `gh-pages`
  (staging : https://lomithrani.github.io/lesjardinsderio/) ;
- **PR ouverte / mise à jour** → build déployé en preview sur
  `https://lomithrani.github.io/lesjardinsderio/preview/pr-<n°>/`
  (`noindex` forcé) + commentaire automatique sur la PR avec le lien ;
- **PR fermée / mergée** → suppression automatique de sa preview.

Dans tous les cas :

1. **deploy** — install → prepare assets → `astro build` → push sur `gh-pages`.
   Échec = badge rouge.
2. **verify** — chaque page embarque `<meta name="build" content="<sha> <date>">` ;
   ce job attend (retry 3 min) que l'URL cible serve **le SHA du commit**, puis
   vérifie que les pages clés des 3 langues répondent HTTP 200.

**Badge vert = le build passe ET les changements sont réellement en ligne.**

Workflow de contribution : jamais de commit direct sur `main` — branche
`feat/<sujet>` ou `fix/<sujet>`, PR, validation sur la preview, merge.

[![Deploy](https://github.com/lomithrani/lesjardinsderio/actions/workflows/deploy.yml/badge.svg)](https://github.com/lomithrani/lesjardinsderio/actions/workflows/deploy.yml)
