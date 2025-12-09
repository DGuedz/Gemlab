# 💎 Protocolo GEMLAB: Rastreabilidade Mineral e Imunidade Política

![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Pilot%20Launch-yellow)
![Blockchain](https://img.shields.io/badge/blockchain-Ethereum-blue)
![EAS](https://img.shields.io/badge/EAS-Integrated-purple)
![Compliance](https://img.shields.io/badge/compliance-IN%20RFB%202.291%2F2025-brightgreen)
![Language](https://img.shields.io/badge/language-Português%20%7C%20English-orange)

> **Enterprise-grade blockchain protocol for emerald traceability, scientific certification, and fiscal compliance.**

## Visão Geral do Projeto

O **Protocolo GEMLAB** estabelece o primeiro **Protocolo Nativo de Conformidade Mineral** do Brasil. Nossa missão é transformar esmeraldas brutas de Campos Verdes (GO) em **Ativos do Mundo Real (RWA)** totalmente auditáveis, líquidos e compatíveis com a regulamentação brasileira, incluindo a **Instrução Normativa RFB nº 2.291/2025 (DeCripto/CARF)**.

A arquitetura centraliza a **mitigação absoluta de riscos** (físicos, geológicos e regulatórios) através da segregação clara de responsabilidades, garantindo:
*   **Segurança Jurídica:** A validade do ativo é inscrita no código, assegurando a continuidade do projeto contra a instabilidade política.
*   **Precisão Científica:** Uso de ciência de ponta para autenticar a gema.
*   **Conformidade Fiscal:** Reporte de impostos automatizado e em conformidade com o padrão global CARF/OCDE.

## 🏗️ Arquitetura de Tripla Blindagem (Triple Shielding)

A blindagem do RWA Mineral ocorre em três camadas interligadas, utilizando a rede Ethereum (EVM) e o **Ethereum Attestation Service (EAS)**. O ativo digital é representado como um **Token ERC-721 (NFT)**.

### 🔒 Camada 1: Blindagem Física e Fiscal
**(Ator: COOPESMERALDA - Oráculo Operacional e Custodiante)**

A Cooperativa Mista dos Garimpeiros de Esmeralda (**COOPESMERALDA**) atua como a âncora do mundo real, provendo a **Prova de Existência**.

*   **Custódia:** Garante a custódia física do ativo mineral no **Underground Vault** (cofre na mina), para segregação do ativo.
*   **Origem:** Emite a **Nota Fiscal Eletrônica (NFe)** de origem e registra o *hash* dessa NFe, criando o **Atestado de Origem (EAS #1)** na *blockchain*.
*   **Risco Mitigado:** Fraude de volume e origem ilícita.

### 🔬 Camada 2: Blindagem Científica e Política
**(Ator: GEMLAB Tech - Regente de Contratos e Auditor Digital)**

O GEMLAB é o **Oráculo Científico e Auditor Fiscal Digital**, responsável por criar a Prova Científica e a Prova Tributária.

*   **Prova Científica (EAS #2):** A esmeralda é submetida à **Espectroscopia Raman**, gerando o **SpectralHash** (assinatura molecular única). O GEMLAB emite o **Atestado Científico (EAS #2)** na *blockchain*, provando a autenticidade e qualidade mineral.
*   **Prova Tributária (EAS #5 - Imunidade Política):** O GEMLAB atesta que o pagamento do **CFEM e do ISS** foi calculado e protocolado (ancorando o *hash* do DARF/GUIA).
*   **Regra Inabalável:** O Smart Contract (ERC-721) possui uma **regra IMUTÁVEL** que o torna **inválido e intransferível** se os três atestados (**EAS #1, #2 e #5**) não estiverem ativos. A arrecadação não pode ser desligada politicamente.

### 💳 Camada 3: Blindagem Financeira e Regulatória
**(Ator: VASP Parceiro - Gatekeeper de Liquidez)**

O **VASP Parceiro** (como a Liqi) assume a custódia fiduciária, o KYC/AML e a liquidação financeira, blindando o ecossistema contra regulamentações bancárias.

*   **Gatekeeper de Transferência:** O Smart Contract restringe a compra do NFT a carteiras com **Atestado *on-chain* de KYC/AML validado** (padrões como ERC-3643/1400).
*   **Compliance DeCripto/CARF:** Para transações acima de **R$ 35.000**, o sistema integra **Zero-Knowledge Proofs (ZKPs)**. Um *ZK Proof of Transaction* é gerado para certificar o reporte obrigatório à Receita Federal (**DeCripto**) sem expor a margem de lucro e a identidade do vendedor (privacidade estratégica).

## 🚀 Impacto Social e Governança Regenerativa

O protocolo garante que parte da receita retorne para o desenvolvimento local, criando o **Lastro Social** do RWA. O impacto é medido e registrado via EAS:
*   **Projeto Mãos de Pedra (R$ 100.000,00):** Focado na capacitação de jovens e adultos em lapidação, design e formação de **Operadores Raman**.
*   **Projeto Mineração nas Escolas (R$ 140.000,00):** Promove a **transformação cultural** e a educação em Geociências e Mineração Sustentável, mitigando o risco social (ESG) e garantindo um *pipeline* de futuros técnicos.
*   **Métrica de Sucesso:** O GEMLAB utiliza o EAS para criar um **Atestado de Impacto Educacional (EAS Schema)**, registrando o número de alunos alcançados e kits entregues anualmente.

## 🛠️ Ferramentas para Desenvolvedores (EAS SDK)

O Ethereum Attestation Service (EAS) é a infraestrutura de confiança fundamental para o projeto. Os desenvolvedores podem interagir com os atestados usando as seguintes ferramentas:

### 📦 Instalação do SDK (TypeScript/JavaScript)

Para integrar o EAS em seu projeto, use o comando abaixo para instalar a biblioteca:

```bash
yarn add @ethereum-attestation-service/eas-sdk
# ou npm install @ethereum-attestation-service/eas-sdk
```

### 💻 Contratos e Endpoints

A EAS funciona com dois contratos principais: `SchemaRegistry.sol` (define a estrutura de dados) e `EAS.sol` (cria os atestados).

A API **GraphQL** é o meio flexível para consultar dados de atestação.

| Rede | Endpoint GraphQL de Exemplo |
| :--- | :--- |
| Ethereum (Mainnet) | `https://easscan.org/graphql` |
| Ethereum (Sepolia) | `https://sepolia.easscan.org/graphql` |

O SDK é usado para:
*   Criar atestações *on-chain* e *off-chain*.
*   Verificar atestações fora da cadeia.
*   Registrar um esquema.
*   Revogar atestações.

---

## 📚 Documentação Adicional

Confira as variações especializadas deste README:

- **[README-DEV.md](./README-DEV.md)** - Documentação técnica para desenvolvedores
- **[README-EXECUTIVE.md](./README-EXECUTIVE.md)** - Visão executiva para investidores e parceiros
- **[README-COMPLIANCE.md](./README-COMPLIANCE.md)** - Documentação regulatória e de compliance

---

## 🌐 Conclusão

O **Protocolo GEMLAB** é mais do que um ativo tokenizado; é uma infraestrutura de governança que utiliza o código para automatizar a lei fiscal e a ciência mineral, tornando Campos Verdes um **Modelo Global de Mineração Regenerativa 2050**.

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

O EAS (Ethereum Attestation Service) é um **protocolo de bem público** e de **código aberto** que visa catalisar a inovação.

## 📞 Contato

Para mais informações sobre o projeto ou a arquitetura, entre em contato com o time do GEMLAB.

**GEMLAB Tech** - Campos Verdes, Goiás, Brasil  
Website: [Em desenvolvimento]  
Email: contato@gemlab.tech

---

**Built with ❤️ for transparent and sustainable mining**