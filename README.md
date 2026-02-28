# GEMLAB PROTOCOL (VSC Core)

![Status](https://img.shields.io/badge/status-Public%20Evaluation-0a7a5a)
![Architecture](https://img.shields.io/badge/architecture-VSC%20Compliant-blue)
![Security](https://img.shields.io/badge/security-Preflight%20%2B%20Secret%20Scan-16a34a)
![Deploy](https://img.shields.io/badge/deploy-Vercel-111111?logo=vercel)

> **Economy-First Blockchain Protocol for Real World Assets (RWA)**

Repositorio oficial do GEMLAB para avaliacao tecnica-institucional (Centelha Fase 2).

---

## VSC (Value-Separated Control) Architecture

1. **Value Layer (The Truth):** validacao cientifica off-chain (Raman) ancorada por hash criptografico.
2. **Control Layer (The Rules):** smart contracts e attestation para integridade, rastreabilidade e compliance.
3. **Interface Layer (The View):** interfaces desacopladas para verificacao publica e operacao segura.

### Core Features

- **Fail-Fast Validation:** fluxo invalido falha quando faltam attestations obrigatorias.
- **Data Economy:** dados pesados off-chain; somente provas (`bytes32`) on-chain.
- **Zero-Trust Security:** segregacao de papeis, gates de release e varredura de segredos.

---

## Quick Access

- Plataforma institucional (Vercel): https://gemlab-platform.vercel.app
- Whitepaper (PDF): `public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.pdf`
- Arquitetura EAS: `docs/EAS_GEMLAB_ARQUITETURA.md`
- Checklist GO/NO-GO: `docs/CENTELHA_SUBMISSION_GO_NO_GO_2026-02-27.md`
- Hardening publico: `docs/GITHUB_PUBLIC_HARDENING_CHECKLIST.md`

## Documentacao Completa

Para narrativa completa (pitch, roadmap, equipe, modelo de negocio, licenciamento e operacao):
- `src/README.md`

## Licenciamento

Licenciamento segmentado em `LICENSING.md`.

