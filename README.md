# GEMLAB PROTOCOL (VSC Core)

![Status](https://img.shields.io/badge/status-Public%20Evaluation-0a7a5a)
![Architecture](https://img.shields.io/badge/architecture-VSC%20Compliant-blue)
![TRL](https://img.shields.io/badge/TRL-4--5%20atual%20%7C%205--6%20meta-f59e0b)
![Security](https://img.shields.io/badge/security-Preflight%20%2B%20Secret%20Scan-16a34a)
![Deploy](https://img.shields.io/badge/deploy-Vercel-111111?logo=vercel)

> Infraestrutura de confianca para ativos gemologicos com trilha verificavel: `Raman -> SpectralHash -> EAS -> Certificado + QR`.

## Painel Executivo (1 tela)

| Bloco | Sintese objetiva |
| --- | --- |
| Problema | Cadeia de esmeraldas com baixa padronizacao tecnica e fragilidade documental, elevando risco comercial e de diligencia. |
| Solucao | Infraestrutura B2B com prova de integridade: `Origem -> Raman -> SpectralHash -> EAS -> Certificado + QR`. |
| Evidencias | [Plataforma live](https://gemlab-platform.vercel.app) · [Whitepaper PDF](./public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.pdf) · [Arquitetura EAS](./docs/EAS_GEMLAB_ARQUITETURA.md) · [GO/NO-GO](./docs/CENTELHA_SUBMISSION_GO_NO_GO_2026-02-27.md) |
| TRL e meta | TRL atual **4-5** (prototipo funcional + validacao tecnica). Meta **5-6** com piloto operacional ate a Feira das Esmeraldas 2026. |

## Comece Aqui (Jurado)

1. **Visao rapida (3 min):** [`JURORS_START_HERE.md`](./JURORS_START_HERE.md)
2. **Plataforma institucional (live):** https://gemlab-platform.vercel.app
3. **Whitepaper tecnico (PDF):** [`public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.pdf`](./public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.pdf)
4. **Checklist de prontidao:** [`docs/CENTELHA_SUBMISSION_GO_NO_GO_2026-02-27.md`](./docs/CENTELHA_SUBMISSION_GO_NO_GO_2026-02-27.md)

## O que este repositorio prova

- Arquitetura VSC e separacao entre dados sensiveis off-chain e provas on-chain.
- Implementacao com EAS para atestacao e trilha auditavel.
- Coerencia tecnica/comercial/regulatoria para avaliacao Centelha.
- Boas praticas de seguranca para publicacao publica.

## Links tecnicos essenciais

- Arquitetura EAS: [`docs/EAS_GEMLAB_ARQUITETURA.md`](./docs/EAS_GEMLAB_ARQUITETURA.md)
- Hardening publico: [`docs/GITHUB_PUBLIC_HARDENING_CHECKLIST.md`](./docs/GITHUB_PUBLIC_HARDENING_CHECKLIST.md)
- Guia detalhado de projeto: [`src/README.md`](./src/README.md)
- Licenciamento segmentado: [`LICENSING.md`](./LICENSING.md)
