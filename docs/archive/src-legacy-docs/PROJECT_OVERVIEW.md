# 🟩 GemLab - Plataforma de Rastreabilidade e Certificação de Esmeraldas

## Visão Geral

GemLab é uma plataforma completa de rastreabilidade, certificação gemológica e tokenização de esmeraldas de Campos Verdes - GO, utilizando tecnologia blockchain para garantir autenticidade, origem ética e valor agregado.

## 🎯 Objetivos do Protocolo

### Problema
- Mineração informal sem transparência
- Dificuldade em comprovar origem ética
- Falta de acesso a crédito e exportação
- Baixo valor de mercado devido à falta de certificação

### Solução
O GEMLAB transforma a cadeia produtiva através de:
- **Rastreabilidade Completa**: Do subsolo ao varejo
- **Certificação Digital**: Laudos on-chain com SpectralHash único
- **Tokenização em Duas Camadas**: ERC-1155 (lotes) → ERC-721 (pedras individuais)
- **Governança Transparente**: Oracle Fiscal e Fundo Municipal On-Chain

## 🏗️ Arquitetura Técnica

### Tokenização em Duas Camadas

#### Fase 1: Lote Mineral (ERC-1155)
**Eventos:**
- `RawExtraction` - Registro do lote extraído
- `BatchProcessed` - Processamento e beneficiamento
- `PreGrading` - Classificação preliminar

**Dados Registrados:**
- Georreferenciamento da extração
- Licenças ambientais (hash)
- Peso bruto e concentrado
- Splits e merges do lote

#### Fase 2: Pedra Individual (ERC-721)
**Eventos:**
- `StoneMinted` - NFT único da pedra
- `CutPerformed` - Lapidação e corte
- `GemCertified` - Certificação gemológica
- `ValuationUpdated` - Avaliação atualizada
- `RoyaltyComputed` - Cálculo de taxas

**Dados Registrados:**
- ID único e vínculo ao lote
- Peso em quilates (ct)
- Características: cor/clareza/inclusões
- SpectralHash (assinatura única)
- Fotos, vídeos 360°, laudos (IPFS/Arweave)

#### Fase 3: Compliance (ERC-3643)
**Eventos:**
- `BuyerWhitelisted` - KYC/AML verificado
- `ListingCreated` - Listagem para venda
- `AssetTransferred` - Transferência e liquidação
- `FundDeposit` - Depósito no fundo municipal

## 📊 Ciclo de Vida dos Ativos

1. **Descoberto** - Minério identificado na jazida
2. **Extraído** - Lote extraído e processado (Mint ERC-1155)
3. **Classificado** - Pedras selecionadas (Mint ERC-721)
4. **Lapidado** - Corte e lapidação profissional
5. **Certificado** - Laudo gemológico completo + SpectralHash
6. **Avaliado** - Precificação e compliance
7. **Listado** - Disponível no marketplace
8. **Vendido** - Transferência concluída

## 💰 Governança Municipal

### Oracle Fiscal (Prefeitura)
- Emissão de Notas Fiscais Digitais
- Hash da NF enviado à blockchain
- Cálculo automático de:
  - CFEM (Compensação Financeira pela Exploração Mineral)
  - ISS (Imposto Sobre Serviços)
  - Royalties da certificação

### Fundo Municipal On-Chain
**Arrecadação Projetada:** R$ 1,6 milhões/ano

**Alocação:**
- 30% - Reabilitação Ambiental
- 25% - Pesquisa Geológica
- 25% - Capacitação Técnica
- 20% - Infraestrutura (Centro Integrado da Mineração)

## 🎨 Estrutura da Aplicação

### Páginas Principais

#### 1. Landing Page (Home)
- Hero com estatísticas
- Processo em 4 etapas
- Tokenização técnica detalhada
- Ciclo de vida dos ativos
- Por que Campos Verdes
- Impacto econômico
- Fundo Municipal
- Compliance & Segurança
- Vitrine de certificações

#### 2. Dashboard do Gemólogo
**Funcionalidades:**
- Análises pendentes
- Histórico de certificações
- **Wizard de Certificação em 6 Etapas:**
  1. Identificação da pedra
  2. Upload multimídia (macro, micro, 360°)
  3. Upload espectro + geração SpectralHash
  4. Preenchimento gemológico (cor, clareza, inclusões)
  5. Revisão e assinatura digital
  6. Pin IPFS + Mint NFT

#### 3. Marketplace
**Funcionalidades:**
- Busca e filtros avançados (cor, clareza, preço, peso, certificadora)
- Grid de esmeraldas certificadas
- Página de detalhes completa:
  - Galeria de imagens
  - Especificações gemológicas
  - Histórico de proveniência
  - Documentos (certificado, espectro, metadata)
  - SpectralHash verificável
  - QR Code para validação
  - Links blockchain explorer

#### 4. Painel do Garimpeiro
**Funcionalidades:**
- Estatísticas pessoais
- **Simulador de Lote:**
  - Input: peso, localização, fotos
  - Output: estimativa de valor, quantidade de pedras, distribuição de qualidade
  - Recomendações automatizadas
- Histórico de lotes enviados
- Status de certificação

#### 5. Painel Administrativo
**Funcionalidades:**
- Estatísticas do sistema
- **Gestão de Roles:**
  - ADMIN_ROLE
  - LAB_ROLE
  - MINER_ROLE
  - CUSTODIAN_ROLE
  - ORACLE_ROLE
  - Grant/Revoke permissions
- **Whitelist Management:**
  - Aprovação de solicitações KYC
  - Status de compliance
- **Contratos Deployados:**
  - Status e versões
  - EmeraldBatch (ERC-1155)
  - EmeraldNFT (ERC-721)
  - AccessControl
  - MunicipalFund
  - Marketplace
- **Monitoramento:**
  - Transações recentes
  - Eventos on-chain
  - Health check do sistema

## 🎨 Design System

### Paleta de Cores
```css
--emerald-green: #006b4f    /* Primária */
--emerald-dark: #014733     /* Secundária */
--gold-soft: #caa34b        /* Destaque/Luxo */
--mineral-black: #1b1b1b    /* Textos/Backgrounds */
--technical-gray: #e5e7eb   /* Bordas/Fundos */
```

### Tipografia
- **Interface Técnica:** Inter
- **Títulos:** Inter (semibold/bold)
- **Código:** Monospace (hashes, addresses, eventos)

### Componentes
- Cards com border-radius 12-16px
- Sombras suaves (hover states)
- Botões sólidos e outline
- Badges para status
- Progress bars
- Timeline vertical
- Tabs para navegação
- Modals/Sheets para formulários
- Tables para dados tabulares

## 🛠️ Tecnologias Utilizadas

### Frontend
- React + TypeScript
- Tailwind CSS v4.0
- Shadcn/ui components
- Lucide React (ícones)

### Componentes Shadcn Utilizados
- Button, Card, Badge
- Input, Label, Textarea, Select
- Tabs, Dialog, Sheet, Alert
- Table, Progress, Slider
- Tooltip, Popover

### Funcionalidades Especiais
- Upload de arquivos (imagens, CSV, PDF, vídeo)
- Wizard multi-step com validação
- Filtros avançados com sliders
- Timeline de proveniência
- QR Code generation
- Clipboard copy
- Responsive design (mobile-first)

## 📱 Fluxos de Usuário

### Gemólogo
1. Login → Dashboard
2. Ver análises pendentes
3. Iniciar nova certificação (wizard 6 etapas)
4. Upload de documentos e espectro
5. Gerar SpectralHash
6. Revisar e assinar
7. Pin IPFS + Mint NFT
8. Certificação concluída

### Garimpeiro
1. Login → Dashboard
2. Ver estatísticas pessoais
3. Usar simulador de lote
4. Enviar novo lote para certificação
5. Acompanhar status
6. Receber pagamento

### Comprador
1. Acessar Marketplace
2. Filtrar esmeraldas (cor, clareza, preço, peso)
3. Ver detalhes da pedra
4. Verificar SpectralHash
5. Baixar certificados
6. Realizar compra (escrow)
7. Receber NFT

### Administrador
1. Login → Painel Admin
2. Monitorar sistema
3. Aprovar whitelists
4. Gerenciar roles
5. Verificar contratos
6. Auditar transações

## 🌟 Diferenciais do Protocolo

### 1. SpectralHash
Assinatura espectral única baseada em análise espectroscópica, impossível de falsificar.

### 2. Rastreabilidade Completa
Cada esmeralda tem histórico completo desde a jazida, com eventos on-chain verificáveis.

### 3. Compliance Automatizado
KYC/AML integrado, cálculo automático de taxas, NF digital on-chain.

### 4. Transparência Total
Fundo Municipal público e auditável, todas as transações verificáveis.

### 5. Valorização
Prêmio de 15-40% no mercado internacional devido à certificação ética.

## 📈 Impacto Esperado

### Econômico
- R$ 1,6 Mi/ano em arrecadação municipal
- R$ 8,2 Mi/ano em receita total estimada
- 450+ empregos gerados
- 260% de valorização (do bruto ao certificado)

### Social
- 150+ garimpeiros formalizados
- Capacitação técnica contínua
- Desenvolvimento regional sustentável

### Ambiental
- 30% do fundo para reabilitação ambiental
- Rastreabilidade garante mineração responsável
- Reflorestamento e recuperação de áreas

## 🔐 Segurança e Compliance

### Armazenamento de Dados
- **On-chain:** Hashes, eventos, metadata básica
- **Off-chain (IPFS/Arweave):** Documentos, imagens, vídeos, laudos

### Privacidade
- Dados sensíveis protegidos (LGPD)
- ZK proofs para atributos verificáveis
- KYC off-chain, apenas hash on-chain

### Auditoria
- Todas as transações públicas
- Eventos rastreáveis
- Proveniência imutável

## 🚀 Roadmap

### Fase 1: MVP (Concluída)
- ✅ Landing page institucional
- ✅ Dashboard Gemólogo + Wizard
- ✅ Marketplace com filtros
- ✅ Painel Garimpeiro + Simulador
- ✅ Admin Panel completo

### Fase 2: Integração Blockchain
- [ ] Deploy dos contratos (ERC-1155, ERC-721)
- [ ] Integração com carteiras (MetaMask, WalletConnect)
- [ ] IPFS/Arweave pinning real
- [ ] Oracle Fiscal implementado

### Fase 3: Produção
- [ ] KYC/AML real
- [ ] Escrow e pagamentos
- [ ] Marketplace ao vivo
- [ ] Fundo Municipal ativo

### Fase 4: Expansão
- [ ] Mobile app
- [ ] Indicação Geográfica
- [ ] Expansão para outras gemas
- [ ] Integração com joalherias

## 📞 Contato

**GemLab - Campos Verdes**
- Email: contato@gemlab.com.br
- Localização: Campos Verdes - GO, Brasil
- Website: [gemlab.com.br](#)

---

**Desenvolvido com foco em:**
- Rastreabilidade ética
- Transparência total
- Desenvolvimento sustentável
- Inovação tecnológica
- Impacto social positivo

*Transformando a mineração regional em uma indústria inteligente, rastreável e investível.*
