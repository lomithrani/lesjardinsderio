# Tri des photos & vérification des carrousels

Document de travail pour la session du 12/06/2026.

## Comment ça marche

Chaque carrousel lit **un dossier** sous `assets-src/<collection>/`.
Déposer une photo dans le bon dossier suffit pour qu'elle apparaisse.
L'ordre d'affichage = ordre alphabétique des noms → préfixer `01-`, `02-`, …

- Un carrousel n'affiche ses flèches + pastilles qu'à partir de **2 photos**.
  En dessous, il rend une seule image fixe (comportement normal).

## Collections qui alimentent un carrousel

| Page | Dossier | Clés / suites | État actuel |
|---|---|---|---|
| Chambres + accueil | `assets-src/rooms/<id>/` | presidential-white, presidential-pink, luxury-violet, master-orange, luxury-yellow, deluxe-red, deluxe-garden, deluxe-green | 1 photo chacune (white = repli CDN) |
| Accueil — Espaces | `assets-src/spaces/<key>/` | lounge, rooftop, janus, piscine, evenementiel | vides (repli 1 photo) |
| Expériences | `assets-src/experiences/<key>/` | dayuse, workshops, gastronomy | vides (repli 1 photo) |
| Spa | `assets-src/spa/<key>/` | soins, eau, yoga | vides (repli 1 photo) |

> ⚠️ Les dossiers `rooms/<id>/` n'ont **pas de repli** : un dossier de chambre
> vide casse le build. Chaque suite doit garder au moins une photo.
> `presidential-white` est aujourd'hui vide et dépend d'un repli téléchargé
> depuis le CDN — à remplacer par de vraies photos.

La page **Galerie** et les visuels de l'**accueil** puisent dans
`assets-src/photos/` (grille + héros, pas des carrousels).

## Checklist de session

- [ ] Photos triées et déposées par collection (préfixes `01-`, `02-`…)
- [ ] Chaque suite a au moins une vraie photo (presidential-white incluse)
- [ ] Build local OK
- [ ] Carrousels vérifiés sur la preview (flèches, pastilles, cycle) en 3 langues
- [ ] Responsive mobile/desktop OK
