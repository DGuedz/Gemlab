# Checklist de Deploy Institucional - GEMLAB (Sepolia Testnet)

## 1. Pré-Requisitos de Infraestrutura
- [ ] **AWS KMS Key**: Validar se a chave existe e está configurada como `ECC_SECG_P256K1` (Sign and Verify).
- [ ] **Variáveis de Ambiente**:
    - [ ] `KMS_PROVIDER="aws"`
    - [ ] `AWS_REGION`
    - [ ] `AWS_KMS_KEY_ID`
    - [ ] `AWS_ACCESS_KEY_ID` (ou Role IAM configurada)
    - [ ] `AWS_SECRET_ACCESS_KEY`
    - [ ] `RPC_URL` (Infura/Alchemy Sepolia HTTPS)
- [ ] **EAS Contracts (Sepolia)**:
    - [ ] EAS: `0xC2679fBD37d54388Ce493F1DB75320D236e1815e`
    - [ ] Schema Registry: `0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0`

## 2. Smart Contracts (Deploy)
- [ ] **Compilação**: Garantir que os contratos estão compilados com `viaIR: true` (se necessário) e sem erros.
- [ ] **Deploy GemlabNFT**:
    - [ ] Construtor: Passar endereço do `TokenValidator`.
    - [ ] Verificar source code no Etherscan.
- [ ] **Deploy GemlabResolver**:
    - [ ] Configurar Role de Admin.
- [ ] **Deploy TokenValidator**:
    - [ ] Configurar endereço do EAS e SchemaRegistry.

## 3. Configuração Pós-Deploy
- [ ] **Schema Registration**: Registrar os schemas no EAS Registry apontando para o `GemlabResolver`.
- [ ] **Grant Roles**: Dar permissão `SCHEMA_ROLE` no Resolver para os atestadores autorizados (ex: endereço do KMS).
- [ ] **Pausable Check**: Testar `pause()` e `unpause()` para garantir controle de emergência.

## 4. Integração Backend
- [ ] Atualizar `.env` com os novos endereços de contrato (`GEMLAB_NFT_ADDRESS`, `GEMLAB_RESOLVER_ADDRESS`).
- [ ] Reiniciar serviço Backend.
- [ ] Verificar endpoint `/health`.
- [ ] Verificar endpoint `/system/status` (deve retornar `contractsPaused: false`).

## 5. Validação E2E (Smoke Test)
- [ ] **Fluxo Offchain**: Gerar Attestation Offchain via API (validar assinatura KMS).
- [ ] **Fluxo Onchain**: Mintar 1 NFT de teste via API.
- [ ] **Verificação**: Confirmar no Sepolia Etherscan se o NFT foi mintado e se os metadados IPFS estão corretos.

## 6. Frontend
- [ ] Atualizar `VITE_API_URL` para o endpoint de produção/staging.
- [ ] Verificar se o banner de manutenção aparece ao pausar o contrato (teste manual).
