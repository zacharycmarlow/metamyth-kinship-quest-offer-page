#!/usr/bin/env bash
# Rebuild the gh-pages branch from the "Metamyth Offer Deck" directory on main.
# Run from the repo root after pulling Cataleya's latest changes:
#   bash scripts/deploy-gh-pages.sh
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
SRC="$REPO_ROOT/Metamyth Offer Deck"
WORK="$(mktemp -d)"

git -C "$REPO_ROOT" fetch origin gh-pages 2>/dev/null || true
git clone -q --depth 1 --branch gh-pages "$REPO_ROOT" "$WORK" 2>/dev/null || {
  git -C "$WORK" init -q -b gh-pages
  git -C "$WORK" remote add origin "$(git -C "$REPO_ROOT" remote get-url origin)"
}
# Clean the published tree but keep .git
find "$WORK" -mindepth 1 -maxdepth 1 -not -name .git -exec rm -rf {} +
cp -r "$SRC/." "$WORK/"

# Clean-URL copies (GitHub Pages serves them extensionless)
cp "$WORK/Kinship Quest.html" "$WORK/kinship.html"
cp "$WORK/Expedition.html"    "$WORK/expedition.html"
cp "$WORK/Journey.html"       "$WORK/journey.html"
cp "$WORK/Journey Map.html"   "$WORK/journey-map.html"

# Point internal nav links at the clean URLs
for f in "$WORK"/*.html; do
  sed -i 's|/Kinship%20Quest.html?v=[a-zA-Z0-9-]*|kinship|g' "$f"
  sed -i 's|href="Journey Map.html"|href="journey-map"|g' "$f"
  sed -i 's|href="Journey.html"|href="journey"|g' "$f"
  sed -i 's|href="Expedition.html"|href="expedition"|g' "$f"
done

echo metamyth.quest > "$WORK/CNAME"
touch "$WORK/.nojekyll"

git -C "$WORK" add -A
git -C "$WORK" -c user.name="Devin" -c user.email="devin@cognition.ai" \
  commit -qm "Redeploy offer deck $(date +%F)" || { echo "no changes"; exit 0; }
git -C "$WORK" push origin gh-pages
rm -rf "$WORK"
echo "Pushed gh-pages. Site: https://metamyth.quest (preview: https://zacharycmarlow.github.io/metamyth-kinship-quest-offer-page/)"
