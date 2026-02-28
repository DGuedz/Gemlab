#!/usr/bin/env bash

set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

REPORT_DIR="security/reports"
mkdir -p "$REPORT_DIR"
TS="$(date +%Y%m%d_%H%M%S)"
REPORT_FILE="$REPORT_DIR/pii_audit_public_${TS}.txt"

PII_REGEX='([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}|\+?55\s?\(?[0-9]{2}\)?\s?[0-9]{4,5}-?[0-9]{4})'

ALLOW_PATH_REGEX='(^src/COMMIT_GUIDE\.md:|^src/DEPLOY_INSTRUCTIONS\.md:|^src/QUICK_START\.md:|^src/docs/AUTH_SYSTEM\.md:|^src/components/AuthModal\.tsx:|^src/components/commercial/CommercialPortal\.tsx:|^src/components/registry/README\.md:|^edital_text\.txt:|^package-lock\.json:)'
ALLOW_VALUE_REGEX='(seu@email\.com|seu\.email@exemplo\.com|usuario@email\.com|contato@suajoalheria\.com|comercial@cooperativa-apl\.br|contato@programacentelha\.com\.br|atendimento\.fapeg@goias\.gov\.br|i@izs\.me|contato@gemlab\.com\.br|dev@gemlab\.com\.br|dev@gemlab\.tech|\+55\s?\(?62\)?\s?3000-?0000)'

raw_hits="$(git ls-files -z | xargs -0 rg -n -S "$PII_REGEX" 2>/dev/null || true)"

{
  echo "# GEMLAB public PII audit"
  echo "generated_at=$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
  echo "branch=$(git branch --show-current)"
  echo "commit_head=$(git rev-parse --short HEAD)"
  echo
} > "$REPORT_FILE"

if [[ -z "$raw_hits" ]]; then
  {
    echo "summary:"
    echo "total_hits=0"
    echo "non_allowlisted_hits=0"
    echo "status=clean"
  } >> "$REPORT_FILE"
  echo "PII audit report: $REPORT_FILE"
  echo "total_hits=0"
  echo "non_allowlisted_hits=0"
  exit 0
fi

total_hits="$(echo "$raw_hits" | sed '/^$/d' | wc -l | tr -d ' ')"
non_allowlisted="$(echo "$raw_hits" | rg -v "$ALLOW_PATH_REGEX" | rg -v "$ALLOW_VALUE_REGEX" || true)"

if [[ -z "$non_allowlisted" ]]; then
  non_allowlisted_hits=0
else
  non_allowlisted_hits="$(echo "$non_allowlisted" | sed '/^$/d' | wc -l | tr -d ' ')"
fi

{
  echo "## all_hits"
  echo "$raw_hits"
  echo
  echo "## non_allowlisted_hits"
  if [[ "$non_allowlisted_hits" -eq 0 ]]; then
    echo "none"
  else
    echo "$non_allowlisted"
  fi
  echo
  echo "summary:"
  echo "total_hits=$total_hits"
  echo "non_allowlisted_hits=$non_allowlisted_hits"
} >> "$REPORT_FILE"

echo "PII audit report: $REPORT_FILE"
echo "total_hits=$total_hits"
echo "non_allowlisted_hits=$non_allowlisted_hits"

if [[ "$non_allowlisted_hits" -gt 0 ]]; then
  echo "ERROR: non-allowlisted PII-like values detected."
  exit 1
fi

echo "OK: no non-allowlisted PII-like values detected."
