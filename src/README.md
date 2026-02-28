# GEMLAB Source Guide

Este diretorio contem o frontend institucional e os componentes de demonstracao tecnica do GEMLAB.

## Referencias principais

- Visao institucional e evidencias para avaliacao: `../README.md`
- Whitepaper (PDF): `../public/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.pdf`
- Apresentacao do projeto: `./GEMLAB_PROJECT_PRESENTATION.md`
- Checklist tecnico de submissao: `../docs/CENTELHA_SUBMISSION_GO_NO_GO_2026-02-27.md`

## Estrutura resumida

- `components/institutional/`: pagina institucional para jurado e parceiros
- `components/registry/`: consulta/verificacao de registros
- `components/blog/`: artigos tecnicos/comerciais de apoio
- `components/dashboard/`: fluxos internos de operacao (modo restrito)

## Regra de publicacao

Nao expor segredos, chaves, pipelines privados ou detalhes sensiveis de backend na camada publica.
Toda publicacao deve passar pelos gates de seguranca em `../scripts/`.
