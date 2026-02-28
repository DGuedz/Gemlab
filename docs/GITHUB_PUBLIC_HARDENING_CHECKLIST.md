# GitHub Public Hardening Checklist (GEMLAB)

Purpose: keep the public repo review-safe for jurors and secure against secret/PII exposure.

## 1) Pre-push mandatory checks

Run from repo root:

```bash
SKIP_BUILD=1 bash scripts/preflight_release.sh
bash scripts/security_audit_history.sh
bash scripts/pii_audit_public.sh
```

If either command fails, do not push.

## 2) Branch protection (required)

- Protect `main` and `release/*`.
- Require pull request (no direct push).
- Require CI status checks (build + secret scan).
- Restrict force-push and branch deletion.

## 3) Never commit these files

- `.env`, `.env.local`, `.env.generated`
- `gcp-oauth.keys.json`, `.gdrive-server-credentials.json`
- `*.pem`, `*.key`
- Any file containing private keys, PATs, or cloud secrets

## 4) Secret rotation matrix (if leak is suspected)

1. GitHub PAT: revoke immediately, issue new scoped token.
2. AWS keys: deactivate old key pair, rotate IAM credentials.
3. Supabase keys: rotate service role and JWT secrets.
4. RPC/API providers: rotate project keys and limit allowed origins.
5. Vercel project env vars: replace and redeploy.

Target response time: under 30 minutes from detection.

Incident flow reference:

- `security/INCIDENT_RESPONSE_PLAYBOOK.md`

## 5) PII hygiene before public release

Run a quick scan and manually review hits:

```bash
git ls-files -z | xargs -0 rg -n -S '([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}|\+?55\s?\(?[0-9]{2}\)?\s?[0-9]{4,5}-?[0-9]{4})'
```

Public repo rule: no CPF, personal phone, personal email unless strictly required.

## 6) Juror-facing release mode

- Keep only evaluation-relevant routes/pages public.
- Expose evidence and read-only verification, never operator backoffice.
- Keep legal/compliance links active and consistent with submission text.

## 7) Release gate (GO / NO-GO)

GO only if all are true:

- Preflight passed
- History audit passed
- CI secret scan green
- PII scan reviewed
- Route allowlist aligned with evaluation scope
- `npm audit --audit-level=high --omit=dev` passed
