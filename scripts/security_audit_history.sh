#!/usr/bin/env bash

set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

REPORT_DIR="security/reports"
mkdir -p "$REPORT_DIR"
TS="$(date +%Y%m%d_%H%M%S)"
REPORT_FILE="$REPORT_DIR/history_secret_scan_${TS}.txt"

# High-confidence patterns only.
declare -a RULES=(
  "GitHub PAT|github_pat_[A-Za-z0-9_]{20,}"
  "GitHub classic token|ghp_[A-Za-z0-9]{20,}"
  "AWS access key|AKIA[0-9A-Z]{16}"
  "Google API key|AIza[0-9A-Za-z_-]{35}"
  "Figma token|figd_[A-Za-z0-9_-]{20,}"
  "Private key block|-----BEGIN (RSA|EC|OPENSSH|PRIVATE KEY)-----"
)

ALLOW_PATH_REGEX='(\.env\.example$|docs/DEPLOY_SEPOLIA_CHECKLIST.*\.md$|test-offchain-flow\.ts$|test-kms-capabilities\.ts$|src/ORACLE_FISCAL_DOCUMENTATION\.md$)'
ALLOW_VALUE_REGEX='(0x\.\.\.|<YOUR_[A-Z0-9_]+>|YOUR_[A-Z0-9_]+|SUA_[A-Z0-9_]+|mock-secret-key|mock-access-key)'

{
  echo "# GEMLAB history secret audit"
  echo "generated_at=$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
  echo "branch=$(git branch --show-current)"
  echo "commit_head=$(git rev-parse --short HEAD)"
  echo
} > "$REPORT_FILE"

total_hits=0
clean_hits=0

while IFS='|' read -r label regex; do
  [[ -n "${label:-}" ]] || continue
  echo "## Rule: $label" >> "$REPORT_FILE"

  raw_hits="$(
    while IFS= read -r commit; do
      git grep -n -E -e "$regex" "$commit" -- . 2>/dev/null || true
    done < <(git rev-list --all)
  )"

  if [[ -z "$raw_hits" ]]; then
    echo "no_hits" >> "$REPORT_FILE"
    echo >> "$REPORT_FILE"
    continue
  fi

  total_rule_hits="$(echo "$raw_hits" | sed '/^$/d' | wc -l | tr -d ' ')"
  total_hits=$((total_hits + total_rule_hits))

  filtered_hits="$(echo "$raw_hits" | rg -v "$ALLOW_PATH_REGEX" | rg -v "$ALLOW_VALUE_REGEX" || true)"
  if [[ -z "$filtered_hits" ]]; then
    echo "hits_found=$total_rule_hits" >> "$REPORT_FILE"
    echo "status=allowlisted" >> "$REPORT_FILE"
    echo >> "$REPORT_FILE"
    continue
  fi

  clean_rule_hits="$(echo "$filtered_hits" | sed '/^$/d' | wc -l | tr -d ' ')"
  clean_hits=$((clean_hits + clean_rule_hits))

  echo "hits_found=$total_rule_hits" >> "$REPORT_FILE"
  echo "hits_after_allowlist=$clean_rule_hits" >> "$REPORT_FILE"
  echo "$filtered_hits" >> "$REPORT_FILE"
  echo >> "$REPORT_FILE"
done < <(printf '%s\n' "${RULES[@]}")

{
  echo "summary:"
  echo "total_hits=$total_hits"
  echo "clean_hits=$clean_hits"
} >> "$REPORT_FILE"

echo "History audit report: $REPORT_FILE"
echo "total_hits=$total_hits"
echo "clean_hits=$clean_hits"

if [[ "$clean_hits" -gt 0 ]]; then
  echo "ERROR: possible exposed credentials found in history."
  exit 1
fi

echo "OK: no non-allowlisted critical secrets found in history."
