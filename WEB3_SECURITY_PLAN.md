# GemLab Web3 Security Plan

Este documento descreve as estratégias e práticas de segurança ativa para o protocolo GemLab, cobrindo Smart Contracts, Backend/API e Infraestrutura.

## 1. Segurança On-Chain (Smart Contracts)

### 1.1 Controle de Acesso e Governança
- **Role-Based Access Control (RBAC):**
  - Implementado via `AccessControl` do OpenZeppelin em `GemlabResolver`.
  - Separação estrita de responsabilidades:
    - `ADMIN_ROLE`: Gerencia permissões.
    - `ATTESTER_ROLE`: Permite emitir atestados específicos (Ciência, Origem).
    - `MINTER_ROLE`: Permissão exclusiva para o contrato de mintagem.
- **Ownable:**
  - Uso restrito a funções de configuração inicial ou emergência no `GemlabNFT`.

### 1.2 Mecanismos de Emergência (Circuit Breakers)
- **Pausable:**
  - Todos os contratos críticos devem herdar `Pausable` (OpenZeppelin).
  - Permite congelar operações de mintagem e transferência em caso de detecção de vulnerabilidade ou ataque.
  - A função `pause()` deve ser restrita a uma multisig de segurança.

### 1.3 Validação de Dados On-Chain
- **Verificação de Atestados:**
  - O contrato `GemlabNFT` (`mintWithProof`) deve validar não apenas a existência, mas a revogabilidade e a validade temporal dos atestados EAS vinculados.
  - Prevenção de reutilização de atestados (Replay Attack) através do mapeamento 1:1 entre `tokenId` e `UID`.

## 2. Segurança Off-Chain (Backend & API)

### 2.1 Gestão de Chaves (Key Management)
- **KMS (Key Management Service):**
  - **PROIBIDO:** Armazenar chaves privadas em texto plano, repositórios git ou variáveis de ambiente simples em produção.
  - **SOLUÇÃO:** Uso de AWS KMS, Google Cloud KMS ou HashiCorp Vault para assinar transações sem expor a chave privada.
  - A interface `IKMS` já foi definida para abstrair essa implementação.

### 2.2 Validação de Input (Input Validation)
- **Zod Schemas:**
  - Todas as rotas da API devem validar o corpo da requisição usando `zod`.
  - Sanitização de campos como `spectralHash` para garantir formato hex `0x...`.
  - Validação de tipos e limites de tamanho para metadados.

### 2.3 Rate Limiting e Proteção DDOS
- Implementar limitação de taxa por IP/API Key para evitar exaustão de recursos e flood de transações na blockchain (que custariam gas à carteira do relayer).

## 3. Segurança do Protocolo e Negócio

### 3.1 Integridade dos Dados Espectrais
- O hash espectral (`spectralHash`) deve ser gerado de forma determinística e verificável.
- Implementar assinatura digital do gemologista (PGP/EIP-712) no frontend antes de enviar ao backend, garantindo não-repúdio.

### 3.2 Auditoria e Monitoramento
- Implementar logs estruturados para todas as operações de atestação e mintagem.
- Monitoramento ativo de eventos on-chain (ex: OpenZeppelin Defender ou Tenderly) para alertas de atividades suspeitas.

## Plano de Implementação Imediata

1. **Hardening do Backend:**
   - [ ] Instalar `zod` e `@hono/zod-validator`.
   - [ ] Implementar schemas de validação para rotas de certificação.
   - [ ] Adicionar middleware de Rate Limiting básico.

2. **Revisão de Contratos:**
   - [ ] Adicionar `Pausable` ao `GemlabNFT`.
   - [ ] Refinar validação no `TokenValidator`.

3. **CI/CD Security:**
   - [ ] Adicionar `slither` (análise estática) ao pipeline de CI.
