# 📝 Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.1.0] - 2024-11-16

### ✨ Adicionado
- **Efeitos hover suaves nas imagens** - Zoom 110% + rotação 2° em transições de 700ms
  - Hero: Card de certificação principal
  - LatestCertifications: 4 cards de esmeraldas no marketplace
  - ProcessSteps: 4 cards do processo de certificação
  - RamanSpectroscopy: Imagem hero do laboratório e imagem do gemólogo
- **Cursor pointer** em todas as imagens interativas para melhor UX
- **Grupos hover isolados** usando Tailwind `group/name` para evitar conflitos

### 🎨 Melhorado
- **Contraste otimizado** em todos os cards com fundo branco
  - Alterados textos de `text-gray-500/600` para `text-gray-700/800` onde necessário
  - Textos principais usando `text-[#1b1b1b]` para máxima legibilidade
  - Badge de status com melhor contraste visual
- **Removidos fundos pretos/escuros** dos cards de certificação
  - Gradientes verde escuro substituídos por `bg-white`
  - Overlays pretos removidos das imagens
  - Preços ajustados para verde esmeralda com fundo branco translúcido

### 🔧 Técnico
- Import do Motion (Framer Motion) adicionado ao Hero.tsx
- Classes Tailwind otimizadas para performance
- Transições CSS suaves com `ease-out` para movimento natural

---

## [1.0.0] - 2024-11-15

### 🎉 Release Inicial - MVP Completo

#### 📄 Páginas Implementadas

**1. Landing Page (Home)**
- Hero section com estatísticas em tempo real
- Processo detalhado em 4 etapas
- Fluxo de tokenização técnico (ERC-1155 → ERC-721)
- Ciclo de vida completo dos ativos (8 estados)
- Seção "Por que Campos Verdes"
- Impacto econômico e social
- Fundo Municipal On-Chain com alocação detalhada
- Compliance e segurança (KYC/AML)
- Vitrine de últimas certificações (4 cards)
- Footer completo com links institucionais

**2. Dashboard do Gemólogo**
- Visão geral com estatísticas
- Cards de análises pendentes
- Histórico de certificações
- **Wizard de Certificação em 6 Etapas:**
  1. Identificação da pedra
  2. Upload multimídia (macro, micro, 360°)
  3. Upload espectro Raman + geração SpectralHash
  4. Preenchimento gemológico (cor, clareza, inclusões)
  5. Revisão e assinatura digital
  6. Pin IPFS + Mint NFT
- Preview visual em tempo real
- Validação de formulários
- Estados de progresso

**3. Marketplace**
- Busca e filtros avançados:
  - Cor (dropdown)
  - Clareza (dropdown)
  - Peso (slider: 0.5-10 ct)
  - Preço (slider: R$ 1k-100k)
  - Certificadora (multi-select)
- Grid responsivo de esmeraldas certificadas
- **Página de Detalhes Completa:**
  - Galeria de imagens de alta resolução
  - Especificações gemológicas detalhadas
  - Histórico de proveniência (timeline)
  - Documentos verificáveis (certificado, espectro, metadata)
  - SpectralHash verificável
  - QR Code para validação mobile
  - Links para blockchain explorer
  - Informações do vendedor
  - Botão de compra com escrow

**4. Painel do Garimpeiro**
- Dashboard com estatísticas pessoais
- **Simulador de Lote Avançado:**
  - Input: peso, localização, fotos
  - Output: estimativa de valor
  - Distribuição de qualidade (VS, VVS, SI, I)
  - Recomendações automatizadas
  - Visualização de dados em cards e gráficos
- Histórico de lotes enviados
- Status de certificação em tempo real
- Cards com últimas atividades

**5. Painel Administrativo**
- Estatísticas do sistema em tempo real
- **Gestão de Roles:**
  - ADMIN_ROLE
  - LAB_ROLE
  - MINER_ROLE
  - CUSTODIAN_ROLE
  - ORACLE_ROLE
  - Grant/Revoke permissions
  - Status de usuários
- **Whitelist Management:**
  - Aprovação de solicitações KYC
  - Status de compliance
  - Níveis de verificação
- **Contratos Deployados:**
  - Status e versões
  - EmeraldBatch (ERC-1155)
  - EmeraldNFT (ERC-721)
  - AccessControl
  - MunicipalFund
  - Marketplace
  - Endereços verificáveis
- **Monitoramento:**
  - Transações recentes
  - Eventos on-chain
  - Health check do sistema
  - Logs de atividade

**6. Documentação Técnica Oficial**
- **7 Seções Navegáveis:**
  1. **Manifesto** - Visão do protocolo GEMLAB
  2. **Tokenização e Governança** - Arquitetura técnica completa
  3. **Espectrometria Raman** - SpectralHash explicado em detalhes
  4. **Ciclo de Vida** - 8 estados dos ativos
  5. **Simulações** - Mockups interativos
  6. **Rastreabilidade** - Visualização de proveniência
  7. **Fundo Municipal** - Impacto econômico e social

#### 🎨 Design System Completo

**Paleta de Cores:**
- Verde Esmeralda (#006b4f) - Primária
- Verde Escuro (#014733) - Secundária
- Dourado Soft (#caa34b) - Destaque/Luxo
- Preto Mineral (#1b1b1b) - Textos
- Branco Puro (#ffffff) - Fundos
- Cinza Técnico (#e5e7eb) - Bordas

**Tipografia:**
- Interface: Inter (400, 500, 600, 700)
- Código: Monospace (hashes, addresses)

**Componentes:**
- 40+ componentes customizados
- 30+ componentes Shadcn/ui
- Botões (solid, outline, ghost)
- Cards com hover states
- Badges de status
- Progress bars
- Timeline vertical
- Tabs para navegação
- Modals/Sheets
- Tables responsivas
- Tooltips
- Alerts

#### 🛠️ Componentes Principais

**UI Components (Shadcn/ui):**
- Button, Card, Badge
- Input, Label, Textarea, Select
- Tabs, Dialog, Sheet, Alert
- Table, Progress, Slider
- Tooltip, Popover, Dropdown
- Checkbox, Radio, Switch
- Calendar, Form, Command
- Accordion, Collapsible
- Breadcrumb, Pagination
- Avatar, Separator

**Custom Components:**
- Hero.tsx
- Navbar.tsx (com Quick Access Menu)
- ProcessSteps.tsx
- TokenizationFlow.tsx
- LifecycleTimeline.tsx
- LatestCertifications.tsx
- WhyCamposVerdes.tsx
- EconomicImpact.tsx
- MunicipalFund.tsx
- ComplianceSection.tsx
- Footer.tsx
- GemologistDashboard.tsx
- CertificationWizard.tsx (multi-step)
- MarketplacePage.tsx
- StoneDetailPage.tsx
- MinerDashboard.tsx (com Simulador)
- AdminPanel.tsx
- RealTimeStats.tsx
- DocumentationSection.tsx
- RamanSpectroscopy.tsx
- TraceabilityMockup.tsx

#### 🚀 Funcionalidades Técnicas

- **Upload de Arquivos:** Imagens, CSV, PDF, vídeo 360°
- **Wizard Multi-Step:** 6 etapas com validação
- **Filtros Avançados:** Sliders, dropdowns, multi-select
- **Timeline de Proveniência:** Visualização histórica
- **QR Code Generation:** Validação mobile
- **Clipboard Copy:** Hashes e endereços
- **Responsive Design:** Mobile-first approach
- **Menu de Acesso Rápido:** Colapsável no canto inferior direito
- **Navegação por Tabs:** Documentação e dashboards
- **Estados de Loading:** Skeleton screens
- **Validação de Formulários:** Client-side validation
- **Mock Data:** Dados realistas para demonstração

#### 📱 Responsividade

- **Mobile:** < 768px (otimizado)
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px
- **4K:** > 1920px

#### 🔐 Segurança e Compliance

- **KYC/AML:** Interface completa (mockup)
- **Whitelist:** Gestão de permissões
- **RBAC:** Role-based access control
- **Hash Verification:** SpectralHash verificável
- **Provenance:** Histórico imutável
- **LGPD:** Tratamento de dados sensíveis

#### 📊 Dados e Estatísticas

**Mock Data Implementado:**
- 1,247 pedras certificadas
- 23 laboratórios credenciados
- 342 lotes rastreados
- R$ 8,2 Mi em receita estimada
- R$ 1,6 Mi em arrecadação municipal
- 450+ empregos gerados
- 150+ garimpeiros formalizados

#### 🎯 Diferenciais Técnicos

1. **SpectralHash** - Impressão digital molecular única
2. **Tokenização Híbrida** - Duas camadas (lote + pedra)
3. **Rastreabilidade Total** - Do subsolo ao varejo
4. **Oracle Fiscal** - Integração com prefeitura
5. **Fundo Municipal** - Transparente e auditável
6. **Compliance Automatizado** - KYC/AML + cálculo de taxas
7. **Documentação Completa** - 7 seções técnicas navegáveis

#### 📝 Documentação

- **README.md** - Visão geral e instalação
- **PROJECT_OVERVIEW.md** - Arquitetura técnica completa
- **PLATFORM_COMPLETE.md** - Status de conclusão
- **CHANGELOG.md** - Histórico de mudanças
- **Guidelines.md** - Guias de desenvolvimento
- **Attributions.md** - Créditos e licenças

#### 🧪 Testes e Qualidade

- TypeScript para type safety
- Componentes modulares e reutilizáveis
- Código limpo e documentado
- Performance otimizada
- Acessibilidade (WCAG AAA)
- SEO ready

---

## [0.1.0] - 2024-11-01

### 🎬 Início do Projeto
- Setup inicial do repositório
- Configuração do ambiente de desenvolvimento
- Estrutura base de pastas
- Primeiros componentes de teste

---

## 📌 Convenções

### Tipos de Mudanças
- **✨ Adicionado** - Novas funcionalidades
- **🎨 Melhorado** - Melhorias em funcionalidades existentes
- **🔧 Técnico** - Mudanças técnicas/refatorações
- **🐛 Corrigido** - Correções de bugs
- **🔒 Segurança** - Correções de vulnerabilidades
- **📝 Documentação** - Apenas documentação
- **♻️ Refatorado** - Refatoração de código
- **⚡ Performance** - Melhorias de performance
- **🗑️ Removido** - Funcionalidades removidas/depreciadas

### Versionamento
- **MAJOR** (X.0.0) - Mudanças incompatíveis com versões anteriores
- **MINOR** (0.X.0) - Novas funcionalidades compatíveis
- **PATCH** (0.0.X) - Correções de bugs compatíveis

---

**Última atualização:** 16 de Novembro de 2024  
**Versão atual:** 1.1.0  
**Status:** Beta - Pronto para deploy
