# Les Jardins de Rio

Site vitrine trilingue (FR/EN/PT) — espace événementiel & chambres à Cosme Velho, Rio de Janeiro.

- Framework : [Astro](https://astro.build) (sortie 100% statique)
- Hébergement : GitHub Pages (déploiement automatique via GitHub Actions à chaque push sur `main`)
- Réservation chambres : Nobeds (intégration externe)

## Développement

```bash
npm install
npm run dev      # serveur de dev
npm run build    # build de production dans dist/
```

## Déploiement

Automatique : tout push sur `main` déclenche `.github/workflows/deploy.yml` (build Astro → publication GitHub Pages).

URL de staging : https://lomithrani.github.io/lesjardinsderio/
