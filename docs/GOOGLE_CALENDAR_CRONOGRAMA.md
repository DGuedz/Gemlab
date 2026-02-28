# Google Calendar - Cronograma GEMLAB (12 meses)

Este fluxo cria os marcos M1-M12 do projeto no Google Calendar usando API.

## 1) Preparar credenciais Google

1. Crie um projeto no Google Cloud.
2. Ative a API `Google Calendar API`.
3. Crie uma **Service Account** e gere a chave JSON.
4. Compartilhe o calendario com o e-mail da Service Account com permissao de edicao.

## 2) Variaveis de ambiente

Preencha no `.env`:

```env
GOOGLE_CALENDAR_ID="seu_calendar_id@group.calendar.google.com"
GEMLAB_PROJECT_START_DATE="2026-06-01"
GOOGLE_SERVICE_ACCOUNT_FILE="/caminho/seguro/google-service-account.json"
```

Alternativa para CI/CD:

```env
GOOGLE_SERVICE_ACCOUNT_KEY_BASE64="<json_base64>"
```

## 3) Testar sem gravar

```bash
npm run calendar:dry-run
```

## 4) Sincronizar de fato

```bash
npm run calendar:sync
```

O script usa `--replace`, removendo eventos antigos com prefixo `GEMLAB |` dentro da janela de 12 meses.

## 5) Eventos criados

- M1-M2 Estruturacao Tecnica e Governanca
- M3-M4 Desenvolvimento MVP + Testnet
- M5-M6 Validacao Tecnica e Piloto Operacional
- M7 Marco Feira das Esmeraldas 2026
- M8-M9 Expansao do Piloto
- M10-M11 Preparacao Comercial GTM
- M12 Lancamento GTM e Encerramento

## Observacoes de seguranca

- Nao commitar arquivo JSON da Service Account.
- Use `.env` local ou segredo no pipeline.
- Revogue e regenere chave se houver suspeita de exposicao.
