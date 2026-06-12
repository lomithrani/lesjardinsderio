# Photos du site — mode d'emploi

**Un dossier = un carrousel.** Pour ajouter une photo à une chambre, un espace,
une expérience : déposer le fichier (`.jpg`, `.png`, `.webp`) dans le bon
dossier ci-dessous — rien d'autre à faire, le site se reconstruit tout seul.

Depuis GitHub : naviguer dans le dossier voulu → **Add file → Upload files**.

```
rooms/<id-chambre>/      → carrousel de la chambre (page Chambres + vignette Accueil)
spaces/<espace>/         → carrousel de l'espace événementiel (Accueil)
experiences/<clé>/       → carrousel de la carte Expériences
spa/<clé>/               → carrousel de la carte Spa
photos/                  → photos générales (héros, galerie, sections)
```

**Ordre des photos** : alphabétique → préfixer `01-`, `02-`, `03-`…
La **première** photo du dossier sert de couverture (vignettes de l'Accueil).

**Réutiliser une photo ailleurs** : chaque photo a un identifiant = son chemin
sans extension (ex. `rooms/deluxe-green/01-suite-green`). Dans le code :
`image('rooms/deluxe-green/01-suite-green')`. On référence, on ne duplique pas.

Si un dossier de chambre est vide, le build échoue volontairement : une chambre
sans photo est un bug de contenu.
