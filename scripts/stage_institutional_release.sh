#!/usr/bin/env bash

set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

FILES=(
  ".gitignore"
  ".vercelignore"
  "package.json"
  "scripts/preflight_release.sh"
  "src/components/Hero.tsx"
  "src/components/Footer.tsx"
  "src/components/institutional/InstitutionalPage.tsx"
  "src/components/institutional/assets/whitepaper-cover.svg"
  "src/components/institutional/assets/whitepaper-flow.svg"
  "public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.md"
)

echo "Staging institutional release files..."
for f in "${FILES[@]}"; do
  if [[ -e "$f" ]]; then
    git add "$f"
    echo "  + $f"
  else
    echo "  - missing (skipped): $f"
  fi
done

echo
echo "Staged files:"
git diff --cached --name-only
