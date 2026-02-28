#!/usr/bin/env bash

set -euo pipefail

OWNER_REPO="${1:-DGuedz/Gemlab}"
RELEASE_BRANCH="${2:-release/institutional-2026-02-27}"

TMP_JSON="$(mktemp)"
trap 'rm -f "$TMP_JSON"' EXIT

cat > "$TMP_JSON" <<'JSON'
{
  "required_status_checks": null,
  "enforce_admins": true,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 1
  },
  "restrictions": null,
  "required_conversation_resolution": true,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_linear_history": true
}
JSON

apply_protection() {
  local branch="$1"
  local route="repos/${OWNER_REPO}/branches/${branch}/protection"

  echo "Applying branch protection: ${OWNER_REPO} -> ${branch}"
  if ! gh api --method PUT -H "Accept: application/vnd.github+json" "$route" --input "$TMP_JSON" >/tmp/gh_branch_protect.out 2>/tmp/gh_branch_protect.err; then
    echo "ERROR applying protection on ${branch}" >&2
    cat /tmp/gh_branch_protect.err >&2
    if rg -q "Upgrade to GitHub Pro or make this repository public" /tmp/gh_branch_protect.err; then
      echo "INFO: This repository is private and plan-restricted for branch protection." >&2
      echo "INFO: Make repo public (or upgrade plan), then re-run this script." >&2
    fi
    return 1
  fi

  gh api -H "Accept: application/vnd.github+json" "$route" --jq '{protected,required_linear_history:.required_linear_history.enabled,allow_force_pushes:.allow_force_pushes.enabled,allow_deletions:.allow_deletions.enabled,required_conversation_resolution:.required_conversation_resolution.enabled,required_approving_review_count:.required_pull_request_reviews.required_approving_review_count}'
}

# URL-encode slash for REST route
ENC_RELEASE_BRANCH="${RELEASE_BRANCH//\//%2F}"

apply_protection "main"
apply_protection "$ENC_RELEASE_BRANCH"

echo "Branch protection configured successfully."
