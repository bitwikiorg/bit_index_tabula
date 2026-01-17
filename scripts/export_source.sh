#!/usr/bin/env bash
set -euo pipefail

SRC_ROOT="volume-1"
DEST_TEX="site/source/tex"
DEST_MD="site/source/md"

rm -rf "$DEST_TEX" "$DEST_MD"
mkdir -p "$DEST_TEX" "$DEST_MD"

find "$SRC_ROOT" -type f -name '*.tex' -print0 | while IFS= read -r -d '' file; do
  rel="$file"
  dest_tex="$DEST_TEX/$rel"
  dest_md="$DEST_MD/${rel%.tex}.md"
  mkdir -p "$(dirname "$dest_tex")" "$(dirname "$dest_md")"
  cp "$file" "$dest_tex"
  cp "$file" "$dest_md"
  
  # Ensure Unix line endings in markdown copies
  sed -i 's/\r$//' "$dest_md"
  sed -i 's/\r$//' "$dest_tex"
done

echo "Exported TeX and MD sources to site/source."