# GEMLAB Security Baseline (2026-02-28)

Objetivo: registrar estado de seguranca antes da insercao de segredos de producao.

## 1) Controles implementados

- Secret scan no CI: `.github/workflows/secret-scan.yml`
- Security gate no CI: `.github/workflows/security-gate.yml`
- Preflight local com:
  - varredura de segredos
  - validacao de arquivos criticos
  - gate de `npm audit --audit-level=high --omit=dev`
- Playbook de incidente: `security/INCIDENT_RESPONSE_PLAYBOOK.md`

## 2) Comando unico de validacao

```bash
npm run security:check
```

Este comando executa:

1. `SKIP_BUILD=1 bash scripts/preflight_release.sh`
2. `bash scripts/security_audit_history.sh`
3. `bash scripts/pii_audit_public.sh`

## 3) Politica de segredos

- Nunca commitar `.env` ou JSON de service account.
- Segredos apenas em secret manager (Vercel/AWS/GitHub Secrets).
- Rotacao obrigatoria em suspeita de exposicao.

## 4) Risco residual atual

- Sem vulnerabilidades `critical/high` bloqueantes em runtime de producao no gate configurado.
- Dependencias de tooling Web3 (Hardhat/ecossistema legacy) ainda trazem advisories `low/moderate`.
- Correcao total dessas dependencias exige migrao major de stack e sera executada em branch dedicada de hardening.

## 5) Condicao GO para adicionar chaves

- [ ] `npm run security:check` passou.
- [ ] Workflows de CI verdes em `main`.
- [ ] Nenhum segredo detectado em historico/working tree.
- [ ] Escopo minimo de credenciais definido.

