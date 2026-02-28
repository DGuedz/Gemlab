#!/usr/bin/env bash

set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

echo "== GEMLAB release preflight =="
echo "Repo: $ROOT"
echo "Branch: $(git branch --show-current)"

echo
echo "[1/7] Checking tracked secret files..."
if git ls-files | rg -q '(^|/)\.env$|(^|/)\.env\.generated$'; then
  echo "ERROR: .env file is tracked. Remove it from Git before release."
  exit 1
fi
echo "OK: no tracked .env files."

echo
echo "[2/7] Checking untracked sensitive files..."
SENSITIVE_UNTRACKED="$(git status --porcelain | awk '/^\?\? /{print $2}' | rg '(^|/)\.env($|\.|$)|gcp-oauth.keys.json|\.gdrive-server-credentials.json|\.pem$|\.key$' || true)"
if [[ -n "$SENSITIVE_UNTRACKED" ]]; then
  echo "WARNING: sensitive untracked files detected:"
  echo "$SENSITIVE_UNTRACKED"
else
  echo "OK: no obvious untracked sensitive files."
fi

echo
echo "[3/7] Scanning tracked files for credential patterns..."
SECRET_REGEX='(github_pat_[A-Za-z0-9_]{20,}|ghp_[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|figd_[A-Za-z0-9_-]{20,}|AIza[0-9A-Za-z\-_]{35}|-----BEGIN (RSA|EC|OPENSSH|PRIVATE KEY)-----)'
SCAN_OUTPUT="$(git ls-files -z | xargs -0 rg -n -S "$SECRET_REGEX" 2>/dev/null || true)"
if [[ -n "$SCAN_OUTPUT" ]]; then
  echo "ERROR: potential secret(s) found in tracked files:"
  echo "$SCAN_OUTPUT"
  exit 1
fi
echo "OK: no high-confidence credential patterns in tracked files."

echo
echo "[3.1/7] Scanning for filled sensitive env vars in tracked files..."
ENV_ASSIGN_REGEX='(PRIVATE_KEY|GEMLAB_PRIVATE_KEY|AWS_SECRET_ACCESS_KEY|SUPABASE_SERVICE_ROLE_KEY|GITHUB_PERSONAL_ACCESS_TOKEN)\s*=\s*["'\'']?[^"'\''[:space:]#]+'
ENV_SCAN_OUTPUT="$(git ls-files -z | xargs -0 rg -n -S "$ENV_ASSIGN_REGEX" 2>/dev/null || true)"
if [[ -n "$ENV_SCAN_OUTPUT" ]]; then
  SAFE_PLACEHOLDERS='(0x\.\.\.|<YOUR_|YOUR_|SUA_|mock-secret-key|mock-access-key|""$)'
  SAFE_PATHS='^(scripts/generate_wallet\.js|test-offchain-flow\.ts):'
  FILTERED_ENV_SCAN="$(echo "$ENV_SCAN_OUTPUT" | rg -v "$SAFE_PLACEHOLDERS" | rg -v "$SAFE_PATHS" || true)"
  if [[ -n "$FILTERED_ENV_SCAN" ]]; then
    echo "ERROR: filled sensitive env var(s) found in tracked files:"
    echo "$FILTERED_ENV_SCAN"
    exit 1
  fi
fi
echo "OK: no filled sensitive env vars in tracked files."

echo
echo "[4/7] Checking deploy-critical files..."
CRITICAL_FILES=(
  "src/components/Hero.tsx"
  "src/components/Footer.tsx"
  "src/components/institutional/InstitutionalPage.tsx"
  "src/components/institutional/assets/whitepaper-cover.svg"
  "public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.md"
)
for file in "${CRITICAL_FILES[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "ERROR: missing file: $file"
    exit 1
  fi
done
echo "OK: deploy-critical files present."

echo
echo "[5/7] NPM dependency check..."
if [[ ! -f "package-lock.json" ]]; then
  echo "ERROR: package-lock.json not found."
  exit 1
fi
if [[ ! -d "node_modules" ]]; then
  echo "WARNING: node_modules not found. Run npm ci before build/deploy."
else
  echo "OK: lockfile and node_modules present."
fi

echo
echo "[6/7] Build check (set SKIP_BUILD=1 to skip)..."
if [[ "${SKIP_BUILD:-0}" == "1" ]]; then
  echo "SKIPPED: build check."
else
  npm run build
fi

echo
echo "[7/7] Dependency security gate (high/critical)..."
if [[ "${SKIP_AUDIT:-0}" == "1" ]]; then
  echo "SKIPPED: npm audit gate."
else
  npm audit --audit-level=high --omit=dev
fi

echo
echo "Preflight completed."
