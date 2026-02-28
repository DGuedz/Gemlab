#!/usr/bin/env bash

set -euo pipefail

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
if [[ -z "${ROOT}" ]]; then
  echo "ERROR: rode este script dentro de um repositorio git (Gemlab)."
  exit 1
fi
cd "$ROOT"

PR_NUMBER="${PR_NUMBER:-5}"
BRANCH_NAME="${BRANCH_NAME:-chore/readme-intro-split-2026-02-28}"

echo "== GEMLAB bootstrap =="
echo "Repo: $ROOT"
echo "PR: #$PR_NUMBER"
echo "Branch: $BRANCH_NAME"
echo

echo "[1/5] Status atual do PR/checks"
gh pr view "$PR_NUMBER" --json number,url,state,headRefName,baseRefName
gh pr checks "$PR_NUMBER" || true
gh run list --branch "$BRANCH_NAME" --limit 10 || true
echo

if [[ "${RERUN_LAST_RUN:-0}" == "1" ]]; then
  echo "[2/5] Re-run do ultimo workflow da branch"
  LAST_RUN_ID="$(gh run list --branch "$BRANCH_NAME" --limit 1 --json databaseId -q '.[0].databaseId' || true)"
  if [[ -n "${LAST_RUN_ID}" && "${LAST_RUN_ID}" != "null" ]]; then
    gh run rerun "$LAST_RUN_ID"
    if [[ "${WATCH_RUN:-1}" == "1" ]]; then
      gh run watch "$LAST_RUN_ID" || true
    fi
  else
    echo "Nenhum run encontrado para rerun."
  fi
  echo
fi

echo "[3/5] Security check local"
npm run security:check
echo

echo "[4/5] Configurar GitHub Secrets (opcional)"
if [[ "${SET_GITHUB_SECRETS:-0}" == "1" ]]; then
  : "${GOOGLE_CALENDAR_ID:?Defina GOOGLE_CALENDAR_ID}"
  : "${GOOGLE_SERVICE_ACCOUNT_KEY_BASE64:?Defina GOOGLE_SERVICE_ACCOUNT_KEY_BASE64}"
  : "${AWS_REGION:?Defina AWS_REGION}"
  : "${AWS_ACCESS_KEY_ID:?Defina AWS_ACCESS_KEY_ID}"
  : "${AWS_SECRET_ACCESS_KEY:?Defina AWS_SECRET_ACCESS_KEY}"
  : "${AWS_KMS_KEY_ID:?Defina AWS_KMS_KEY_ID}"

  gh secret set GOOGLE_CALENDAR_ID --body "$GOOGLE_CALENDAR_ID"
  gh secret set GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 --body "$GOOGLE_SERVICE_ACCOUNT_KEY_BASE64"
  gh secret set AWS_REGION --body "$AWS_REGION"
  gh secret set AWS_ACCESS_KEY_ID --body "$AWS_ACCESS_KEY_ID"
  gh secret set AWS_SECRET_ACCESS_KEY --body "$AWS_SECRET_ACCESS_KEY"
  gh secret set AWS_KMS_KEY_ID --body "$AWS_KMS_KEY_ID"
  echo "GitHub Secrets configurados."
else
  echo "SKIPPED: SET_GITHUB_SECRETS=0"
fi
echo

echo "[5/5] Configurar Vercel env (opcional)"
if [[ "${SET_VERCEL_SECRETS:-0}" == "1" ]]; then
  : "${GOOGLE_CALENDAR_ID:?Defina GOOGLE_CALENDAR_ID}"
  : "${GOOGLE_SERVICE_ACCOUNT_KEY_BASE64:?Defina GOOGLE_SERVICE_ACCOUNT_KEY_BASE64}"
  : "${AWS_REGION:?Defina AWS_REGION}"
  : "${AWS_ACCESS_KEY_ID:?Defina AWS_ACCESS_KEY_ID}"
  : "${AWS_SECRET_ACCESS_KEY:?Defina AWS_SECRET_ACCESS_KEY}"
  : "${AWS_KMS_KEY_ID:?Defina AWS_KMS_KEY_ID}"

  printf "%s\n" "$GOOGLE_CALENDAR_ID" | vercel env add GOOGLE_CALENDAR_ID production
  printf "%s\n" "$GOOGLE_SERVICE_ACCOUNT_KEY_BASE64" | vercel env add GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 production
  printf "%s\n" "$AWS_REGION" | vercel env add AWS_REGION production
  printf "%s\n" "$AWS_ACCESS_KEY_ID" | vercel env add AWS_ACCESS_KEY_ID production
  printf "%s\n" "$AWS_SECRET_ACCESS_KEY" | vercel env add AWS_SECRET_ACCESS_KEY production
  printf "%s\n" "$AWS_KMS_KEY_ID" | vercel env add AWS_KMS_KEY_ID production
  echo "Vercel env configuradas."
else
  echo "SKIPPED: SET_VERCEL_SECRETS=0"
fi

echo
echo "Concluido."
echo "Observacao: se workflows falharem com billing lock, desbloqueie primeiro em github.com/settings/billing."

