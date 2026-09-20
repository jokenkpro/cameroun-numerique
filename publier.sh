#!/usr/bin/env bash
# Publie le dossier v2/ (Cameroun numérique) sur GitHub. À lancer DEPUIS le dossier v2/.
set -euo pipefail
REPO="git@github.com:jokenkpro/cameroun-numerique.git"   # ou https://github.com/jokenkpro/cameroun-numerique.git
BRANCHE="main"

# 1) Copier les sources de composants du projet parent (facultatif mais recommandé pour la réutilisation)
if [ -d "../components" ]; then
  rm -rf composants-sources && mkdir -p composants-sources
  cp -R ../components/. composants-sources/
  echo "Sources des composants copiées dans composants-sources/ (référence ; le runtime utilise _ds_bundle.js)."
fi

# 2) Initialiser et pousser
git init -b "$BRANCHE"
git add -A
git -c user.name="Johan Kenneth Nken" -c user.email="jokenkpro@gmail.com" commit -m "Cameroun numérique — langage de conception de l'État (v2.1) sous CC BY-NC-SA 4.0"
git remote add origin "$REPO" 2>/dev/null || git remote set-url origin "$REPO"
git push -u origin "$BRANCHE"

echo
echo "Pousse terminé. Activez ensuite GitHub Pages :"
echo "  Settings → Pages → Source: Deploy from a branch → Branch: $BRANCHE / (root) → Save"
echo "  L'accueil sera https://jokenkpro.github.io/cameroun-numerique/"
