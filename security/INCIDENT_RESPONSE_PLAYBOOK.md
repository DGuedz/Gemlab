# GEMLAB Incident Response Playbook

Objetivo: conter exposicao de segredos e reduzir impacto operacional em ate 30 minutos.

## 1) Classificacao rapida

- `SEV-1`: segredo exposto publicamente (GitHub, log, build, screenshot).
- `SEV-2`: suspeita de uso indevido sem confirmacao.
- `SEV-3`: alerta preventivo sem evidencia de comprometimento.

## 2) Acao imediata (0-15 min)

1. Congelar deploys (`main` e `release/*`).
2. Revogar/rotacionar credenciais potencialmente expostas:
   - GitHub PAT / App token
   - AWS IAM / KMS related access keys
   - RPC provider keys
   - Supabase service keys
   - Vercel environment secrets
3. Invalidar sessoes e reemitir chaves com escopo minimo (least privilege).

## 3) Contencao tecnica (15-30 min)

1. Executar scans:
   - `bash scripts/security_audit_history.sh`
   - `bash scripts/pii_audit_public.sh`
   - `npm run preflight:release` (com gate de audit)
2. Remover dado sensivel de arquivos rastreados.
3. Se necessario, limpar historico com estrategia de seguranca aprovada pela equipe.

## 4) Recuperacao

1. Atualizar segredos no secret manager (nunca em arquivo versionado).
2. Rebuild + redeploy.
3. Validar comportamento funcional e logs.
4. Registrar hash do commit de recuperacao e horario UTC.

## 5) Pos-incidente (obrigatorio)

1. RCA (root cause analysis) em ate 24h.
2. Definir acao corretiva permanente:
   - nova regra de CI
   - ajuste de `.gitignore`
   - revogacao de acessos legados
3. Atualizar este playbook.

## 6) Checklist de saida do incidente

- [ ] Segredos antigos revogados
- [ ] Novos segredos com menor privilegio
- [ ] CI de seguranca verde
- [ ] Repositorio sem exposicao detectada
- [ ] Deploy restaurado e validado

