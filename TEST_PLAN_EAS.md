# Plano de Testes EAS e Emissão de Certificados

Este documento descreve o fluxo para testar a integração do EAS (Ethereum Attestation Service) e a emissão de certificados no GEMLAB.

## 1. Pré-requisitos

*   Node.js v18+
*   Carteira Metamask ou similar (para testes de frontend futuros)
*   Chave Privada de Teste (para backend/scripts) configurada em `.env`

## 2. Estrutura de Schemas (EAS)

Os schemas já estão definidos no script `scripts/deploy_schemas.js`. Eles garantem a conformidade com as regras de **Economia de Dados** do VSC.

| Schema | UID (Sepolia) | Estrutura |
| :--- | :--- | :--- |
| **Origin** | `TBD` | `bytes32 originUID, bytes32 invoiceHash, uint64 timestamp` |
| **Science** | `TBD` | `bytes32 spectralHash, bytes32 analysisCID, uint64 timestamp` |
| **Custody** | `TBD` | `bytes32 vaultID, bytes32 proofCID, uint64 expirationTime` |

## 3. Fluxo de Teste (Mock/Frontend)

Atualmente, o frontend utiliza um `MockCertificationService` para simular o comportamento da blockchain e permitir o desenvolvimento da UI sem depender de uma rede de teste ativa.

1.  **Acesse o Portal Lab**: Navegue até `/lab-portal` e selecione "Gemólogo".
2.  **Inicie Nova Análise**: Clique no botão "Nova Análise".
3.  **Preencha os Dados**: Siga o wizard de 7 passos.
4.  **Simule a Emissão**:
    *   No passo 3, clique em "Gerar SpectralHash". O mock retornará um hash simulado.
    *   No passo 6, clique em "Gerar Atestado EAS". O mock retornará um UID simulado.
    *   No passo 7, clique em "Enviar e Tokenizar". O mock retornará um CID IPFS e Token ID simulados.

## 4. Próximos Passos para Integração Real

Para conectar com a rede de teste (Sepolia):

1.  **Deploy dos Contratos**: Executar `npx hardhat run scripts/deploy_contracts.js --network sepolia`.
2.  **Registro de Schemas**: Executar `npx hardhat run scripts/deploy_schemas.js --network sepolia` e anotar os UIDs gerados.
3.  **Configuração de Backend**:
    *   Atualizar `.env` com `RPC_URL`, `PRIVATE_KEY` e endereços dos contratos/EAS.
    *   Implementar `RealCertificationService` em `src/services/certificationService.ts` que faça chamadas para o backend (que por sua vez usa `KMSFactory`).
4.  **Backend API**: Criar endpoints (via Supabase Edge Functions ou servidor Node) que importem `backend/services/attestation/*.ts` e usem o `LocalKMS` para assinar transações reais.

## 5. Comandos Úteis

*   **Compilar Contratos**: `npx hardhat compile`
*   **Rodar Testes de Contrato**: `npx hardhat test`
*   **Rodar Frontend**: `npm run dev`
