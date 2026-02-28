# GEMLAB Protocol - Infraestrutura de Confianca para Ativos Gemologicos

![Status](https://img.shields.io/badge/Status-Centelha%20Fase%202-006b4f)
![Deploy](https://img.shields.io/badge/Deploy-Vercel%20Prod-111111?logo=vercel)
![TRL](https://img.shields.io/badge/TRL-4--5%20atual%20%7C%205--6%20meta-f59e0b)
![Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Solidity-0ea5e9)
![Attestation](https://img.shields.io/badge/Ethereum-EAS%20Attestation-627eea)
![Security](https://img.shields.io/badge/Security-Preflight%20%2B%20Secret%20Scan-16a34a)

Repositorio oficial do GEMLAB para a Fase 2 do Programa Centelha GO.  
Objetivo: certificar e rastrear esmeraldas com trilha auditavel (`Raman -> SpectralHash -> EAS -> Certificado + QR`).

## Links Rapidos

- Plataforma institucional (Vercel): https://gemlab-platform.vercel.app
- Whitepaper PDF: `public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.pdf`
- Whitepaper fonte: `public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.md`
- Apresentacao executiva: `src/GEMLAB_PROJECT_PRESENTATION.md`
- GO/NO-GO tecnico: `docs/CENTELHA_SUBMISSION_GO_NO_GO_2026-02-27.md`
- Hardening GitHub publico: `docs/GITHUB_PUBLIC_HARDENING_CHECKLIST.md`

## O que um jurado deve encontrar aqui

1. Tese clara de problema e oportunidade.
2. Arquitetura tecnica verificavel sem exposicao de segredos.
3. Evidencias de maturidade (documentos, deploy, checklist, scripts).
4. Coerencia entre tecnologia, modelo de negocio e limites regulatorios.
5. Capacidade de execucao da equipe em contexto real (Campos Verdes-GO).

## Resumo do Pitch (executivo)

- Problema: cadeia com baixa padronizacao tecnica e fragilidade documental.
- Solucao: infraestrutura B2B de certificacao/rastreabilidade com prova de integridade on-chain.
- Diferencial: separacao rigorosa entre dado sensivel off-chain e attestation on-chain.
- Mercado: Labs, cooperativas, mineradoras, joalherias e compradores institucionais.
- Roadmap: MVP validado em campo e demonstracao publica na Feira das Esmeraldas 2026.

## Arquitetura Tecnica (alto nivel)

Fluxo:

`Origem do lote -> Analise Raman -> SpectralHash -> EAS Attestation -> Certificado digital + QR -> Verificacao institucional`

Invariantes:

- Determinismo: mesma entrada normalizada gera mesmo hash.
- Auditabilidade: cada alteracao gera evento verificavel.
- Segregacao: dados sensiveis off-chain; prova de integridade on-chain.

## Modelo de Negocio e Limites

Modelo: `Lab-as-a-Service B2B + compliance middleware`.

Receita:

- Certificacao por unidade/lote.
- Assinatura SaaS de operacao.
- Relatorios tecnicos para diligencia.

Limites regulatorios:

- Nao e oferta publica de investimento.
- Nao promete rentabilidade.
- Nao atua como instituicao financeira.

## Capacidade de Execucao (track record tecnico)

Equipe executora Centelha:

- Diego Guedes (Founder/CTO/Produto)
- Carlos Vaz (articulacao institucional)
- Raiane Coelho (conformidade ambiental)
- Caroline Miranda (licenciamento e governanca hidrica)
- Marcelo Silva (governanca regulatoria e risco)

Evidencias objetivas de execucao Web3:

- Engaja Rap Club (BNB): https://github.com/DGuedz/dgstore-bnb-hackathon
- Beechain (Scroll/Campos Verdes): repositorio privado institucional `Beechainbrazil`
- Flow Cash (Scroll/L2): repositorio privado institucional `blackmindzflowcash`
- TorceHolder (Chiliz/SPFC): repositorio privado institucional `torceholder`
- PayHub (XRPL): https://github.com/DGuedz/payhub-v3

## Seguranca e Boas Praticas

Rode os gates antes de qualquer release publico:

```bash
SKIP_BUILD=1 bash scripts/preflight_release.sh
bash scripts/security_audit_history.sh
bash scripts/pii_audit_public.sh
```

## Execucao Local

```bash
npm install
npm run dev
npm run build
```

## Licenciamento e Uso

Este repositorio possui **licenciamento segmentado**:

- **Conteudo editorial/documental** (textos de apresentacao, whitepaper, materiais institucionais):  
  Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
- **Codigo-fonte e artefatos tecnicos**: uso restrito conforme politica do projeto e contratos aplicaveis.

Detalhes em: `LICENSING.md`

### Aviso Creative Commons (conteudo)

<a href="https://gemlab-platform.vercel.app/">GEMLAB</a> © 2025 by <a href="https://github.com/DGuedz/Gemlab">Diego Guedes Da Silva</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International</a>.

## Nota de Escopo

Este repositorio publico mostra maturidade tecnica para avaliacao institucional.  
Operacoes sensiveis de backend (chaves, pipelines privados e governanca interna) permanecem segregadas.
