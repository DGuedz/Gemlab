# GEMLAB Source Guide (Detailed)

Este diretorio contem o frontend institucional e os componentes de demonstracao tecnica do GEMLAB.

## Visao Geral

- Repositorio oficial do GEMLAB para Fase 2 do Programa Centelha GO.
- Objetivo: certificar e rastrear esmeraldas com trilha auditavel (`Raman -> SpectralHash -> EAS -> Certificado + QR`).
- Este README e o guia detalhado; a raiz (`../README.md`) e a versao intro executiva.

## Links Principais

- Intro executiva: `../README.md`
- Plataforma institucional (Vercel): https://gemlab-platform.vercel.app
- Whitepaper PDF: `../public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.pdf`
- Whitepaper fonte: `../public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.md`
- Apresentacao executiva: `./GEMLAB_PROJECT_PRESENTATION.md`
- GO/NO-GO tecnico: `../docs/CENTELHA_SUBMISSION_GO_NO_GO_2026-02-27.md`
- Hardening GitHub publico: `../docs/GITHUB_PUBLIC_HARDENING_CHECKLIST.md`

## O que um jurado deve encontrar

1. Tese clara de problema e oportunidade.
2. Arquitetura tecnica verificavel sem exposicao de segredos.
3. Evidencias de maturidade (documentos, deploy, checklist, scripts).
4. Coerencia entre tecnologia, modelo de negocio e limites regulatorios.
5. Capacidade de execucao da equipe em contexto real (Campos Verdes-GO).

## Resumo do Pitch (executivo)

- Problema: cadeia com baixa padronizacao tecnica e fragilidade documental.
- Solucao: infraestrutura B2B de certificacao/rastreabilidade com prova de integridade on-chain.
- Diferencial: separacao rigorosa entre dado sensivel off-chain e attestation on-chain.
- Mercado: labs, cooperativas, mineradoras, joalherias e compradores institucionais.
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

## Estrutura resumida do `src/`

- `components/institutional/`: pagina institucional para jurado e parceiros
- `components/registry/`: consulta/verificacao de registros
- `components/blog/`: artigos tecnicos/comerciais de apoio
- `components/dashboard/`: fluxos internos de operacao (modo restrito)

## Seguranca e Boas Praticas

Rode os gates antes de qualquer release publico:

```bash
SKIP_BUILD=1 bash ../scripts/preflight_release.sh
bash ../scripts/security_audit_history.sh
bash ../scripts/pii_audit_public.sh
```

## Regra de Publicacao

Nao expor segredos, chaves, pipelines privados ou detalhes sensiveis de backend na camada publica.
Toda publicacao deve passar pelos gates de seguranca em `../scripts/`.

## Licenciamento e Uso

Este repositorio possui licenciamento segmentado:

- Conteudo editorial/documental: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
- Codigo-fonte e artefatos tecnicos: uso restrito conforme politica do projeto e contratos aplicaveis.

Detalhes em `../LICENSING.md`.
