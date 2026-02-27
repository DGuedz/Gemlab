# GEMLAB - Infraestrutura de Confianca para Ativos Gemologicos Rastreaveis

![Status](https://img.shields.io/badge/Status-Centelha%20Fase%202-006b4f)
![Deploy](https://img.shields.io/badge/Deploy-Vercel%20Prod-111111?logo=vercel)
![Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Solidity-0ea5e9)
![EAS](https://img.shields.io/badge/Attestation-Ethereum%20EAS-627eea)
![Network](https://img.shields.io/badge/Network-Sepolia%20Testnet-f59e0b)
![Security](https://img.shields.io/badge/Security-Secret%20Scan%20Enabled-16a34a)

Repositorio tecnico do projeto GEMLAB na Fase 2 do Programa Centelha GO.
A proposta integra ciencia aplicada (Raman), criptografia deterministica (SpectralHash), atestacao EAS e trilha auditavel para certificacao de esmeraldas.

## 1) Tese do Projeto

A cadeia de esmeraldas em Campos Verdes-GO sofre com baixa padronizacao tecnica, fragilidade documental e dificuldade de due diligence.
O GEMLAB atua como infraestrutura B2B de certificacao e rastreabilidade, com separacao entre dado sensivel off-chain e prova de integridade on-chain.

## 2) Arquitetura Tecnica (Resumo)

Fluxo alvo de verificacao:

`Origem do lote -> Analise Raman -> SpectralHash -> EAS Attestation -> Certificado digital + QR -> Verificacao institucional`

Invariantes do protocolo:
- Determinismo: mesma entrada normalizada gera mesmo hash.
- Auditabilidade: atualizacao de status gera novo evento verificavel.
- Segregacao: dado tecnico sensivel off-chain, prova de integridade on-chain.

## 3) Evidencias Publicas

- Whitepaper tecnico: `public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.pdf`
- Whitepaper (fonte): `public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.md`
- Apresentacao do projeto: `src/GEMLAB_PROJECT_PRESENTATION.md`
- Pitchdeck operacional: consolidado no dossie de submissao Centelha (ambiente interno de operacao).
- Checklist de submissao (GO/NO-GO): `docs/CENTELHA_SUBMISSION_GO_NO_GO_2026-02-27.md`
- Deploy institucional: https://gemlab-platform.vercel.app

## 4) Modelo de Negocio e Limites

Modelo: Lab-as-a-Service B2B + compliance middleware.

Linhas de receita:
- Certificacao por unidade/lote.
- Assinatura SaaS para operacao recorrente.
- Relatorios tecnicos para diligencia institucional.

Limite regulatorio explicito:
- Nao e oferta de investimento.
- Nao promete rentabilidade.
- Nao atua como instituicao financeira.

## 5) Maturidade Tecnologica (TRL)

Posicionamento atual (estimado): TRL 4-5
- Arquitetura definida e prototipo funcional em ambiente de teste.
- Componentes de integracao e trilha de evidencias em consolidacao.

Meta Centelha (M1-M7): TRL 5-6
- Piloto com lotes reais e verificacao publica orientada por QR.

## 6) Capacidade de Execucao

Equipe executora cadastrada no Centelha:
- Diego Guedes (Founder/CTO/Produto)
- Carlos Vaz (articulacao institucional)
- Raiane Coelho (conformidade ambiental)
- Caroline Miranda (licenciamento e governanca hidrica)
- Marcelo Silva (governanca regulatoria e risco)

Sobre lideranca tecnica:
- A capacidade do projeto e demonstrada por entregas tecnicas verificaveis (repo, deploy, whitepaper, scripts de seguranca).
- Track record do fundador inclui execucao competitiva em Web3/IA (5+ hackathons em 2025, conforme dossie institucional).

## 7) Seguranca e Boas Praticas

Gates operacionais para release publico:

```bash
SKIP_BUILD=1 bash scripts/preflight_release.sh
bash scripts/security_audit_history.sh
bash scripts/pii_audit_public.sh
```

Documentacao de hardening:
- `docs/GITHUB_PUBLIC_HARDENING_CHECKLIST.md`
- `docs/CENTELHA_SUBMISSION_GO_NO_GO_2026-02-27.md`

## 8) Execucao Local

```bash
npm install
npm run dev
npm run build
```

## 9) Nota de Escopo

Este repositorio publico mostra evidencias de maturidade tecnica para avaliacao institucional.
Operacoes sensiveis de backend (chaves, pipelines privados, governanca interna) permanecem segregadas e fora da superficie publica.
