# Les Jardins de Rio

Site vitrine trilingue (PT-BR / EN / FR) — maison d'hôtes & lieu d'événements à Cosme Velho, Rio de Janeiro.

- **Framework** : [Astro 5](https://astro.build), sortie 100 % statique
- **Hébergement** : GitHub Pages, déploiement automatique à chaque push sur `main`
- **Staging** : https://lomithrani.github.io/lesjardinsderio/
- **Réservation chambres** : NoBeds (lien externe — URL à fournir)
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
  config.ts          # coordonnées, routes localisées, ⛑ NOBEDS_URL, STAGING_NOINDEX
  images.ts          # résolution des images par nom
  i18n/ui.ts         # textes des pages ×3 langues
  i18n/rooms.ts      # données des 8 suites ×3 langues
  styles/global.css  # design tokens + composants
  components/        # Curve (séparateur signature)
  layouts/Base.astro # head SEO + hreflang + header/footer + JSON-LD
  templates/         # 1 template par page logique
  pages/             # pt/ en/ fr/ — pages fines (slugs localisés) + redirection racine
```

## ⛑ Placeholders à remplacer

| Quoi | Où |
|---|---|
| URL du moteur NoBeds | `src/config.ts` → `SITE.NOBEDS_URL` |
| Domaine définitif | `astro.config.mjs` (`site`, retirer `base`, ajouter `public/CNAME`) + DNS |
| Indexation | `src/config.ts` → `STAGING_NOINDEX = false` au lancement |
| Surfaces suites Red / Garden View | `src/i18n/rooms.ts` |

## Déploiement

Automatique : tout push sur `main` déclenche `.github/workflows/deploy.yml`
(install → prebuild assets → build Astro → publication Pages, ~1 min).
