# 🏛️ Documentação Técnica: Dashboard Oracle Fiscal

## Protocolo GEMLAB - Prefeitura de Campos Verdes

**Versão:** 1.0.0  
**Data:** Novembro 2024  
**Autor:** GEMLAB Tech  
**Licença:** Proprietário - Protocolo GEMLAB

---

## 📑 Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura do Sistema](#arquitetura-do-sistema)
3. [Módulos do Dashboard](#módulos-do-dashboard)
4. [Integração com EAS SDK](#integração-com-eas-sdk)
5. [Fluxos de Processo](#fluxos-de-processo)
6. [Guia de Implementação](#guia-de-implementação)
7. [Segurança e Compliance](#segurança-e-compliance)
8. [FAQ Técnico](#faq-técnico)
9. [Referências](#referências)

---

## 🎯 Visão Geral

### O que é o Dashboard Oracle Fiscal?

O **Dashboard Oracle Fiscal** é uma interface administrativa desenvolvida para a **Prefeitura Municipal de Campos Verdes - GO** que permite ao município atuar como **Validador de Origem (Oracle Fiscal)** no Protocolo GEMLAB.

### Papel no Ecossistema

A Prefeitura funciona como o **primeiro elo da cadeia de confiança**, emitindo **Atestados de Prova de Origem** que certificam a legalidade fiscal e a proveniência de lotes de esmeraldas extraídos no município.

### Tecnologias Utilizadas

- **React** 18+ com TypeScript
- **Ethereum Attestation Service (EAS)** v0.26+
- **Ethers.js** v5.7+
- **Tailwind CSS** v4.0
- **Shadcn UI** (componentes)
- **Sonner** (notificações)

---

## 🏗️ Arquitetura do Sistema

### Componentes Principais

```
/components/oracle/OracleFiscalDashboard.tsx
├── Header (Identidade do Oracle)
├── Módulo I: Emissão de Prova de Origem
├── Módulo II: Incentivos Fiscais
├── Módulo III: Rastreabilidade e Auditoria
├── Módulo IV: Integração Técnica (SDK EAS)
└── Dialog de Processamento (Modal)
```

### Fluxo de Dados

```
┌─────────────────┐
│  Formulário NFe │
│  (Input Forms)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Validação     │
│   Frontend      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  EAS SDK        │
│  (Codificação)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Signer         │
│  (Prefeitura)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Blockchain     │
│  (Sepolia/Main) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Atestado UID   │
│  (On-Chain)     │
└─────────────────┘
```

---

## 📦 Módulos do Dashboard

### Módulo I: Emissão de Prova de Origem

#### Descrição
Formulário para criação de **Atestados de Prova de Origem (Schema #1)**, que funcionam como a "Certidão de Nascimento" fiscal do ativo.

#### Campos Obrigatórios

| Campo | Tipo | Formato | Descrição |
|-------|------|---------|-----------|
| `batchId` | `string` | Numérico | ID do lote de minério (ERC-1155) |
| `invoiceHash` | `bytes32` | `0x...` (64 hex) | Hash SHA-256 da NFe (PDF off-chain) |
| `minerCNPJ` | `uint256` | Numérico puro | CNPJ do Produtor Mineral/Cooperativa |
| `mineLocationID` | `string` | Alfanumérico | ID da Jazida registrado na ANM |
| `extractionDate` | `uint48` | Unix timestamp | Data/hora da lavra |

#### Validações Implementadas

```typescript
const validateForm = () => {
  if (!formData.batchId) {
    toast.error("Por favor, preencha o Batch ID");
    return false;
  }
  if (!formData.invoiceHash) {
    toast.error("Por favor, preencha o Hash da NFe");
    return false;
  }
  // ... validações adicionais
  return true;
};
```

#### Controle de Acesso (RBAC)

O Smart Contract `GemlabResolver` garante que **apenas a wallet oficial da Prefeitura** pode emitir atestados neste Schema:

```solidity
// Pseudocódigo do Resolver
modifier onlyPrefeitura() {
    require(msg.sender == PREFEITURA_WALLET, "Unauthorized attester");
    _;
}
```

---

### Módulo II: Incentivos Fiscais

#### Descrição
Exibe métricas em tempo real dos **incentivos fiscais automáticos** gerados pelo Protocolo GEMLAB, provando o alinhamento de incentivos do sistema.

#### Métricas Monitoradas

##### 1. Arrecadação de CFEM/ISS (Mensal)
- **Valor:** R$ 145.890,22
- **Fonte:** Smart Contract de liquidação
- **Cálculo:** Automático via eventos `AssetTransferred`

##### 2. Fundo de Desenvolvimento 2050
- **Valor:** R$ 48.630,07
- **Porcentagem:** ~33,3% da arrecadação
- **Destino:** Escola de Lapidação, infraestrutura, cooperativas

##### 3. Total de Ativos Validados
- **Quantidade:** 1.204 pedras gema
- **Tipo:** NFTs ERC-721 com Atestado de Origem válido
- **Status:** 100% com "Certidão de Nascimento" fiscal

##### 4. Taxa de Conformidade
- **Porcentagem:** 100%
- **Significado:** Todas as extrações reportadas possuem Prova de Origem

#### Insight: Code is Law

> "O sistema utiliza o **código** para garantir o repasse do fundo, não dependendo da 'boa vontade' de pagar impostos ou taxas. O desconto é **automático e imutável**."

```javascript
// Pseudocódigo do Smart Contract
event AssetTransferred(address indexed from, address indexed to, uint256 tokenId, uint256 value);

function transferWithTaxes(address to, uint256 tokenId) public {
    uint256 cfem = calculateCFEM(tokenId);
    uint256 iss = calculateISS(tokenId);
    uint256 fund2050 = (cfem + iss) * 3333 / 10000; // 33.33%
    
    // Transferências automáticas
    payable(PREFEITURA_WALLET).transfer(cfem + iss);
    payable(FUND_2050_ADDRESS).transfer(fund2050);
    
    // ... lógica de transferência do NFT
}
```

---

### Módulo III: Rastreabilidade e Auditoria

#### Descrição
Tabela de **Log de Atestados** que exibe a "Teia de Confiança" em ação, mostrando o status de todos os atestados emitidos pelos diferentes atores do protocolo.

#### Estrutura da Tabela

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| UID do Atestado | `bytes32` | Identificador único do atestado on-chain |
| Schema | `string` | Tipo do atestado (Origem/Científica/Custódia) |
| Ativo / Dados Chave | `mixed` | Dados principais do atestado |
| Atribuidor (Attester) | `address` | Entidade que emitiu o atestado |
| Status | `enum` | Válido / Expirado / Revogado |

#### Tipos de Schema

```typescript
enum SchemaType {
  PROVA_DE_ORIGEM = "0x8f43b395...",     // Prefeitura
  PROVA_CIENTIFICA = "0x4a92c5d1...",    // GEMLAB Tech
  PROVA_DE_CUSTODIA = "0x7e6f8b2a..."   // Underground Vault
}
```

#### Lógica de Status do Token

```typescript
function getTokenStatus(tokenId: uint256): TokenStatus {
    bool hasOrigin = hasValidAttestation(tokenId, PROVA_DE_ORIGEM);
    bool hasScience = hasValidAttestation(tokenId, PROVA_CIENTIFICA);
    bool hasCustody = hasValidAttestation(tokenId, PROVA_DE_CUSTODIA);
    
    if (hasOrigin && hasScience && hasCustody) {
        return TokenStatus.LEGAL_E_AUTENTICO;
    } else if (hasOrigin && hasScience && !hasCustody) {
        return TokenStatus.RISCO; // Custódia expirada
    } else {
        return TokenStatus.INVALIDO;
    }
}
```

#### Revogação de Atestados

**Cenário:** A Prefeitura emitiu um atestado com erro no CNPJ.

**Processo:**
1. Prefeitura revoga o atestado antigo via `eas.revoke(uid)`
2. Sistema marca o atestado com status `REVOKED` (imutável)
3. Prefeitura emite novo atestado com dados corretos
4. **Rastro de auditoria permanece visível** para análise

```javascript
// Revogar atestado (EAS SDK)
const tx = await eas.revoke({
  schema: ORIGIN_SCHEMA_UID,
  data: { uid: "0x1c8b...A1D1FE" }
});

await tx.wait();
console.log("Atestado revogado. Histórico preservado on-chain.");
```

---

### Módulo IV: Integração Técnica (SDK EAS)

#### Descrição
Exibe **código de exemplo real** da integração com o Ethereum Attestation Service SDK, demonstrando como a Prefeitura assina e emite atestados.

#### Código Completo de Emissão

```javascript
// 1. Inicialização do SDK EAS
import { EAS, SchemaEncoder, NO_EXPIRATION } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";

const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26
const signer = /* Objeto ethers.Signer da Prefeitura */;
const eas = new EAS(EASContractAddress);
eas.connect(signer);

// 2. Definição e Codificação do Esquema de Prova de Origem
const schemaString = "uint256 minerCNPJ, bytes32 invoiceHash, uint48 extractionDate, string mineLocationID";
const schemaEncoder = new SchemaEncoder(schemaString);
const ORIGIN_SCHEMA_UID = "0x8f43b395b2bd2d37dd0f6e4148ac6b9e7ed22f2215107958f95cc1489e4e6289";

// 3. Codificação dos Dados Fiscais
const encodedData = schemaEncoder.encodeData([
    { name: "minerCNPJ", value: 12345678000190, type: "uint256" },
    { name: "invoiceHash", value: "0x3e23b395b2bd2d37dd0f6e4148ac6b9e7ed22f2215107958f95cc1489e4e6289", type: "bytes32" },
    { name: "extractionDate", value: 1709251200, type: "uint48" }, // Unix timestamp
    { name: "mineLocationID", value: "ANM-2023-XYZ", type: "string" }
]);

// 4. Emissão do Atestado
const tokenRecipientAddress = "0xAbCd...7890"; // Endereço do Token NFT

const transaction = await eas.attest({
    schema: ORIGIN_SCHEMA_UID,
    data: {
        recipient: tokenRecipientAddress,
        expirationTime: NO_EXPIRATION, // 0 = nunca expira
        revocable: true, // Prefeitura pode revogar se necessário
        refUID: ethers.constants.HashZero, // Não referencia outro atestado
        data: encodedData,
    },
});

// 5. Aguardar Confirmação
const newAttestationUID = await transaction.wait();

console.log(" ATESTADO DE ORIGEM EMITIDO COM SUCESSO");
console.log("Novo UID:", newAttestationUID);
console.log("Attester:", await signer.getAddress());
```

#### Variáveis de Ambiente Necessárias

```bash
# .env.local
NEXT_PUBLIC_EAS_CONTRACT_ADDRESS=0xC2679fBD37d54388Ce493F1DB75320D236e1815e
NEXT_PUBLIC_ORIGIN_SCHEMA_UID=0x8f43b395b2bd2d37dd0f6e4148ac6b9e7ed22f2215107958f95cc1489e4e6289
PREFEITURA_PRIVATE_KEY=0x... # Nunca expor em frontend!
RPC_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
```

---

## 🔄 Fluxos de Processo

### Fluxo 1: Emissão de Atestado (Happy Path)

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Usuário preenche formulário de NFe                       │
│    - Batch ID: 8881                                         │
│    - Hash NFe: 0x3e23b395...                                │
│    - CNPJ: 12.345.678/0001-90                               │
│    - Geolocalização: ANM-2023-XYZ                           │
│    - Data: 2024-03-01T10:30:00                              │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Sistema valida campos obrigatórios                       │
│    ✓ Todos os campos preenchidos                            │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Modal de simulação abre                                  │
│    - Título: "Simulação: Emissão de Atestado..."           │
│    - Progress bar: 0/4 passos                               │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Usuário clica "Iniciar Processo de Assinatura"          │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. PASSO 1: Configuração do Schema (3s)                    │
│    [SDK] Inicializando EAS...                               │
│    [SDK] Contract conectado: 0xC2679f...                    │
│    [SDK] Signer: Prefeitura (0xGovt...)                    │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 6. PASSO 2: Codificação dos Dados (2s)                     │
│    [ENCODER] Codificando dados fiscais...                   │
│    [ENCODER] minerCNPJ: 12345678000190 (uint256)           │
│    [ENCODER] invoiceHash: 0x3e23b395... (bytes32)          │
│    [ENCODER] ✓ Dados codificados                            │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 7. PASSO 3: Assinatura e Transação (3.5s)                  │
│    [SIGNER] Solicitando assinatura...                       │
│    [SIGNER] ✓ Assinatura confirmada                         │
│    [TX] Transmitindo para blockchain...                     │
│    [TX] ✓ Transação confirmada!                             │
│    [TX] Gas Used: 93,456 units                              │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 8. PASSO 4: Confirmação                                     │
│     ATESTADO DE ORIGEM EMITIDO COM SUCESSO                │
│    Novo UID: 0x7f8c4e2a...d3b9106f                          │
│    Attester: 0xGovt...AE4C170eD35f4Cf77797                  │
│    Schema: ORIGIN_SCHEMA_UID                                │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 9. Toast de sucesso aparece                                 │
│    "Atestado de Origem emitido com sucesso!"                │
│    UID: 0x7f8c4e2a...                                       │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 10. Usuário clica "Concluir" e modal fecha                 │
└─────────────────────────────────────────────────────────────┘
```

### Fluxo 2: Validação de Erro

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Usuário clica "Assinar e Emitir" sem preencher campos   │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Sistema valida formulário                                │
│    ✗ Campo "Batch ID" está vazio                            │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Toast de erro aparece                                    │
│    🔴 "Por favor, preencha o Batch ID"                      │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Foco retorna para o campo vazio                          │
│    - Modal NÃO abre                                         │
│    - Processo NÃO inicia                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Guia de Implementação

### Pré-requisitos

#### 1. Instalação de Dependências

```bash
npm install @ethereum-attestation-service/eas-sdk ethers@^5.7.0
npm install sonner lucide-react
```

#### 2. Configuração do Provider

```typescript
// lib/ethereum.ts
import { ethers } from "ethers";

export const getProvider = () => {
  if (typeof window !== "undefined" && window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  }
  // Fallback para RPC público
  return new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_RPC_URL
  );
};

export const getSigner = async () => {
  const provider = getProvider();
  await provider.send("eth_requestAccounts", []);
  return provider.getSigner();
};
```

#### 3. Registro do Schema (Uma Única Vez)

```typescript
// scripts/registerSchema.ts
import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";

const schemaRegistryAddress = "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0"; // Sepolia
const schemaRegistry = new SchemaRegistry(schemaRegistryAddress);
schemaRegistry.connect(signer);

const schema = "uint256 minerCNPJ, bytes32 invoiceHash, uint48 extractionDate, string mineLocationID";
const resolverAddress = "0x..."; // Endereço do GemlabResolver
const revocable = true;

const transaction = await schemaRegistry.register({
  schema,
  resolverAddress,
  revocable,
});

const schemaUID = await transaction.wait();
console.log("Schema UID:", schemaUID);
// Salvar este UID nas variáveis de ambiente!
```

### Integração no Dashboard

#### Estrutura de Arquivos

```
/components/oracle/
├── OracleFiscalDashboard.tsx       # Componente principal
├── AttestationForm.tsx             # Formulário isolado (opcional)
├── AttestationModal.tsx            # Modal de processo (opcional)
└── useEASIntegration.ts            # Hook customizado (recomendado)
```

#### Hook Customizado (Recomendado)

```typescript
// components/oracle/useEASIntegration.ts
import { useState } from "react";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { getSigner } from "@/lib/ethereum";

export const useEASIntegration = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const emitAttestation = async (formData: FormData) => {
    setIsProcessing(true);
    setError(null);

    try {
      const signer = await getSigner();
      const eas = new EAS(process.env.NEXT_PUBLIC_EAS_CONTRACT_ADDRESS!);
      eas.connect(signer);

      const schemaEncoder = new SchemaEncoder(
        "uint256 minerCNPJ, bytes32 invoiceHash, uint48 extractionDate, string mineLocationID"
      );

      const encodedData = schemaEncoder.encodeData([
        { name: "minerCNPJ", value: formData.minerCNPJ, type: "uint256" },
        { name: "invoiceHash", value: formData.invoiceHash, type: "bytes32" },
        { name: "extractionDate", value: formData.extractionDate, type: "uint48" },
        { name: "mineLocationID", value: formData.mineLocationID, type: "string" }
      ]);

      const tx = await eas.attest({
        schema: process.env.NEXT_PUBLIC_ORIGIN_SCHEMA_UID!,
        data: {
          recipient: formData.tokenAddress,
          expirationTime: 0,
          revocable: true,
          data: encodedData,
        },
      });

      const newAttestationUID = await tx.wait();
      setIsProcessing(false);
      return { success: true, uid: newAttestationUID };
    } catch (err: any) {
      setError(err.message);
      setIsProcessing(false);
      return { success: false, error: err.message };
    }
  };

  return { emitAttestation, isProcessing, error };
};
```

---

## 🔐 Segurança e Compliance

### Controle de Acesso

#### Nível 1: Smart Contract (On-Chain)

```solidity
// contracts/GemlabResolver.sol
pragma solidity ^0.8.19;

import { IEAS, Attestation } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { SchemaResolver } from "@ethereum-attestation-service/eas-contracts/contracts/resolver/SchemaResolver.sol";

contract GemlabResolver is SchemaResolver {
    address public constant PREFEITURA_WALLET = 0x...; // Wallet oficial
    
    constructor(IEAS eas) SchemaResolver(eas) {}
    
    function onAttest(Attestation calldata attestation, uint256 /*value*/) internal override returns (bool) {
        // Apenas a Prefeitura pode atestar
        require(msg.sender == PREFEITURA_WALLET, "Unauthorized: Only Prefeitura can attest");
        return true;
    }
    
    function onRevoke(Attestation calldata attestation, uint256 /*value*/) internal override returns (bool) {
        // Apenas a Prefeitura pode revogar seus próprios atestados
        require(msg.sender == PREFEITURA_WALLET, "Unauthorized: Only Prefeitura can revoke");
        return true;
    }
}
```

#### Nível 2: Backend (Off-Chain)

```typescript
// middleware/auth.ts
import { verifyMessage } from "ethers/lib/utils";

export const authenticatePrefeitura = async (req, res, next) => {
  const { signature, message, address } = req.body;
  
  // Verificar assinatura
  const recoveredAddress = verifyMessage(message, signature);
  
  if (recoveredAddress.toLowerCase() !== process.env.PREFEITURA_WALLET.toLowerCase()) {
    return res.status(403).json({ error: "Unauthorized: Invalid signature" });
  }
  
  // Verificar timestamp (proteção contra replay attacks)
  const messageData = JSON.parse(message);
  const timestamp = messageData.timestamp;
  const now = Date.now();
  
  if (now - timestamp > 300000) { // 5 minutos
    return res.status(403).json({ error: "Signature expired" });
  }
  
  next();
};
```

### Auditoria e Logging

#### Sistema de Logs

```typescript
// utils/auditLog.ts
import { supabase } from "@/lib/supabase";

export const logAttestationEvent = async (event: {
  type: "ISSUED" | "REVOKED" | "FAILED",
  uid?: string,
  batchId: string,
  attester: string,
  gasUsed?: number,
  error?: string,
  metadata?: any
}) => {
  await supabase.from("attestation_audit_log").insert({
    event_type: event.type,
    attestation_uid: event.uid,
    batch_id: event.batchId,
    attester_address: event.attester,
    gas_used: event.gasUsed,
    error_message: event.error,
    metadata: event.metadata,
    timestamp: new Date().toISOString(),
  });
};
```

### Conformidade com CVM

#### Princípios Aplicados

1. **Rastreabilidade Total**: Todos os atestados são imutáveis e auditáveis on-chain
2. **Segregação de Funções**: Prefeitura valida origem, GEMLAB valida ciência, Underground valida custódia
3. **Transparência**: Dashboard público permite auditoria em tempo real
4. **Revogabilidade Controlada**: Atestados podem ser revogados apenas pelo emissor original, com rastro permanente
5. **Não-Custódia de Valores**: Prefeitura não gerencia fundos, apenas valida proveniência

---

## ❓ FAQ Técnico

### P1: O que acontece se a wallet da Prefeitura for comprometida?

**R:** O Protocolo GEMLAB possui um mecanismo de **atualização de Resolver** que permite migrar para uma nova wallet oficial:

```solidity
function updatePrefeituraWallet(address newWallet) external onlyOwner {
    require(newWallet != address(0), "Invalid address");
    PREFEITURA_WALLET = newWallet;
    emit WalletUpdated(PREFEITURA_WALLET, newWallet);
}
```

Todos os atestados antigos permanecem válidos, mas novos atestados devem ser emitidos pela nova wallet.

---

### P2: Como revogar um atestado emitido com erro?

**R:** Utilize a função `revoke` do EAS SDK:

```typescript
import { EAS } from "@ethereum-attestation-service/eas-sdk";

const eas = new EAS(EASContractAddress);
eas.connect(signer);

const tx = await eas.revoke({
  schema: ORIGIN_SCHEMA_UID,
  data: { uid: "0x1c8b...A1D1FE" }
});

await tx.wait();
```

**Importante:** O atestado revogado permanece visível on-chain com status `REVOKED`, garantindo auditoria completa.

---

### P3: Qual o custo de gas para emitir um atestado?

**R:** Em média:
- **Mainnet Ethereum:** ~120.000 gas (~$30-50 USD dependendo do preço do gas)
- **Sepolia Testnet:** ~120.000 gas (gratuito, ETH de teste)
- **Polygon:** ~120.000 gas (~$0.01-0.05 USD)
- **Optimism/Arbitrum:** ~120.000 gas (~$0.50-2.00 USD)

**Recomendação:** Para produção, considere usar Layer 2 (Polygon, Optimism) para reduzir custos.

---

### P4: Como integrar com sistema de Nota Fiscal Eletrônica existente?

**R:** Crie um webhook que escuta eventos da SEFAZ:

```typescript
// api/webhook/nfe.ts
export default async function handler(req, res) {
  const { chaveNFe, cnpj, dataEmissao, xml } = req.body;
  
  // 1. Validar assinatura SEFAZ
  const isValid = await validateSEFAZSignature(req.headers["x-sefaz-signature"], req.body);
  if (!isValid) return res.status(401).json({ error: "Invalid signature" });
  
  // 2. Calcular hash do XML
  const invoiceHash = ethers.utils.keccak256(xml);
  
  // 3. Emitir atestado automaticamente
  const result = await emitAttestation({
    batchId: extractBatchIdFromNFe(xml),
    invoiceHash,
    minerCNPJ: cnpj,
    // ... outros campos
  });
  
  res.json({ success: true, uid: result.uid });
}
```

---

### P5: É possível emitir atestados em lote (batch)?

**R:** Sim! O EAS SDK suporta atestados múltiplos:

```typescript
const multiAttestations = await eas.multiAttest([
  {
    schema: ORIGIN_SCHEMA_UID,
    data: [
      { recipient: token1, data: encodedData1 },
      { recipient: token2, data: encodedData2 },
      { recipient: token3, data: encodedData3 },
    ]
  }
]);
```

Isso reduz custos de gas e melhora eficiência para grandes volumes.

---

### P6: Como garantir que o Hash da NFe é autêntico?

**R:** Utilize a **API da SEFAZ** para validação:

```typescript
import axios from "axios";

async function validateNFeHash(chaveNFe: string, expectedHash: string) {
  const response = await axios.get(
    `https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?chNFe=${chaveNFe}`
  );
  
  const xmlContent = response.data;
  const calculatedHash = ethers.utils.keccak256(xmlContent);
  
  return calculatedHash === expectedHash;
}
```

---

### P7: Como consultar atestados emitidos por uma wallet específica?

**R:** Utilize o GraphQL endpoint do EAS:

```graphql
query AttestationsByAttester {
  attestations(
    where: {
      attester: { equals: "0xGovt...AE4C170eD35f4Cf77797" }
      schemaId: { equals: "0x8f43b395..." }
    }
    orderBy: { time: desc }
  ) {
    id
    recipient
    attester
    time
    data
    revoked
  }
}
```

---

### P8: O Dashboard funciona em mobile?

**R:** Sim! O dashboard é **totalmente responsivo** usando Tailwind CSS:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Cards responsivos */}
</div>
```

Para mobile, recomenda-se usar **WalletConnect** para assinatura de transações:

```typescript
import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({
  rpc: {
    11155111: process.env.NEXT_PUBLIC_RPC_URL, // Sepolia
  },
});

await provider.enable();
const web3Provider = new ethers.providers.Web3Provider(provider);
```

---

## 📚 Referências

### Documentação Oficial

- [Ethereum Attestation Service (EAS)](https://attest.sh/)
- [EAS SDK Documentation](https://docs.attest.sh/docs/quick-start/contracts)
- [Ethers.js v5 Documentation](https://docs.ethers.org/v5/)
- [Shadcn UI Components](https://ui.shadcn.com/)

### Contratos Inteligentes

- **EAS Contract (Sepolia):** `0xC2679fBD37d54388Ce493F1DB75320D236e1815e`
- **Schema Registry (Sepolia):** `0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0`
- **GemlabResolver (Custom):** `[A ser implantado]`

### Exploradores de Blockchain

- [Etherscan Sepolia](https://sepolia.etherscan.io/)
- [EAS Explorer](https://sepolia.easscan.org/)

### Repositórios

- [EAS SDK GitHub](https://github.com/ethereum-attestation-service/eas-sdk)
- [EAS Contracts GitHub](https://github.com/ethereum-attestation-service/eas-contracts)

---

## 📝 Changelog

### Versão 1.0.0 (Novembro 2024)
-  Implementação inicial do Dashboard Oracle Fiscal
-  Integração completa com EAS SDK
-  Sistema de validação de formulários
-  Modal de processamento com 4 passos
-  Terminal de logs em tempo real
-  Toast notifications
-  Documentação técnica completa

---

## 📧 Suporte

Para suporte técnico, entre em contato:

- **Email:** dev@gemlab.tech
- **Discord:** [GEMLAB Community](https://discord.gg/gemlab)
- **GitHub Issues:** [GEMLAB Protocol Issues](https://github.com/gemlab/protocol/issues)

---

## ⚖️ Licença

Este software é proprietário e parte do **Protocolo GEMLAB**. Todos os direitos reservados.

**Copyright © 2024 GEMLAB Tech - Campos Verdes, GO, Brasil**

---

**🏛️ Dashboard Oracle Fiscal - Transformando Burocracia em Código** 💚⛓️
