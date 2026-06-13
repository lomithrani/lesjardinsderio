#!/usr/bin/env bash
# Renomme les photos des carrousels en 01-<collection>.jpg, 02-…, par dossier.
# - Ne touche QUE rooms/ spaces/ experiences/ spa/ (pas photos/, qui est la galerie).
# - Conserve le format (jpg/png/webp), normalise .jpeg -> .jpg.
# - Laisse les .heic/.tif tranquilles et les signale (le build les ignore).
# Usage : bash renommer-photos.sh [racine]   (défaut : assets-src)
set -euo pipefail
shopt -s nullglob nocaseglob

ROOT="${1:-assets-src}"

for group in rooms spaces experiences spa; do
  for dir in "$ROOT/$group"/*/; do
    [ -d "$dir" ] || continue
    slug="$(basename "$dir")"

    # Images web prises en charge, triées naturellement (IMG_2 avant IMG_10).
    mapfile -t imgs < <(
      for f in "$dir"*.jpg "$dir"*.jpeg "$dir"*.png "$dir"*.webp; do
        [ -e "$f" ] && printf '%s\n' "$f"
      done | sort -V
    )

    # Formats ignorés par prepare-assets.mjs -> à convertir avant.
    others=()
    for f in "$dir"*.heic "$dir"*.tif "$dir"*.tiff; do
      [ -e "$f" ] && others+=("$f")
    done
    if [ "${#others[@]}" -gt 0 ]; then
      echo "[!] $dir : ${#others[@]} fichier(s) HEIC/TIF a convertir en JPG (sinon perdus) :"
      printf '      %s\n' "${others[@]}"
    fi

    [ "${#imgs[@]}" -eq 0 ] && continue

    # Passe 1 : noms temporaires (aucun risque d'ecrasement).
    i=0
    for f in "${imgs[@]}"; do
      i=$((i+1)); mv -- "$f" "$dir.__tmp_$i"
    done
    # Passe 2 : noms finaux, format d'origine conserve.
    i=0
    for f in "${imgs[@]}"; do
      i=$((i+1))
      ext="${f##*.}"; ext="$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')"
      [ "$ext" = "jpeg" ] && ext="jpg"
      mv -- "$dir.__tmp_$i" "$dir$(printf '%02d' "$i")-$slug.$ext"
    done
    echo "[ok] $dir : $i photo(s) renommee(s)"
  done
done
