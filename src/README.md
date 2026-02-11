# 💎 GemLab - Rastreabilidade e Certificação de Esmeraldas

<div align="center">

![GemLab](https://img.shields.io/badge/GemLab-Campos%20Verdes-006b4f?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Beta-caa34b?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**Plataforma completa de rastreabilidade, certificação gemológica e tokenização de esmeraldas de Campos Verdes - GO**

[Demo](https://gemlab.app) • [Documentação](#-documentação) • [Roadmap](#-roadmap) • [Contribuir](#-como-contribuir)

</div>

---

## 📋 Sobre o Projeto

O **GemLab** é um ecossistema completo que implementa o **Protocolo GEMLAB** para certificação e rastreabilidade de esmeraldas desde a jazida até o varejo, utilizando tecnologia blockchain para garantir autenticidade, origem ética e transparência total.

### 🎯 Problema que Resolvemos

- ❌ Mineração informal sem transparência
- ❌ Dificuldade em comprovar origem ética
- ❌ Falta de acesso a mercados internacionais
- ❌ Baixo valor de mercado devido à falta de certificação
- ❌ Impossibilidade de rastrear a proveniência das gemas

### ✅ Nossa Solução

- ✅ **Rastreabilidade Completa** - Do subsolo ao varejo com eventos on-chain
- ✅ **Certificação Digital** - Laudos gemológicos com SpectralHash único
- ✅ **Tokenização Híbrida** - ERC-1155 (lotes) → ERC-721 (pedras individuais)
- ✅ **Governança Transparente** - Oracle Fiscal e Fundo Municipal On-Chain
- ✅ **Compliance Total** - KYC/AML integrado e automatizado

---

## 🏗️ Arquitetura Técnica

### Tokenização em Duas Camadas

```
┌─────────────────────────────────────────────────────────┐
│  FASE 1: Lote Mineral (ERC-1155)                       │
│  • Georreferenciamento                                  │
│  • Licenças ambientais                                  │
│  • Peso bruto → concentrado                            │
│  Eventos: RawExtraction, BatchProcessed, PreGrading    │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│  FASE 2: Pedra Individual (ERC-721)                    │
│  • SpectralHash (impressão digital molecular)          │
│  • Características gemológicas completas                │
│  • Fotos macro/micro + vídeo 360°                      │
│  Eventos: StoneMinted, CutPerformed, GemCertified      │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│  FASE 3: Compliance (ERC-3643)                         │
│  • KYC/AML verificado                                   │
│  • Marketplace com escrow                               │
│  • Oracle Fiscal + Fundo Municipal                      │
│  Eventos: BuyerWhitelisted, AssetTransferred           │
└─────────────────────────────────────────────────────────┘
```

### SpectralHash - Impressão Digital Molecular

Utilizamos **Espectrometria Raman** para gerar uma assinatura espectral única de cada esmeralda:

1. **Laser interage** com a estrutura cristalina da pedra
2. **Espalhamento Raman** captura as vibrações moleculares
3. **Espectro único** é processado e gera um hash SHA-256
4. **Hash ancorado** permanentemente no NFT ERC-721

> 🔬 **Impossível de falsificar** - Cada pedra tem uma "impressão digital" molecular única

---

## 🚀 Funcionalidades Principais

### 1️⃣ Landing Page Institucional
- Hero com estatísticas em tempo real
- Processo detalhado em 4 etapas
- Explicação técnica da tokenização
- Ciclo de vida completo dos ativos
- Impacto econômico e Fundo Municipal
- Vitrine de últimas certificações

### 2️⃣ Dashboard do Gemólogo
**Wizard de Certificação em 6 Etapas:**
1. ✅ Identificação da pedra
2. 📸 Upload multimídia (macro, micro, 360°)
3. 🔬 Upload espectro Raman → Geração SpectralHash
4. 💎 Preenchimento gemológico (cor, clareza, inclusões)
5. ✍️ Revisão e assinatura digital
6. 🔗 Pin IPFS + Mint NFT

### 3️⃣ Marketplace
- 🔍 Busca e filtros avançados (cor, clareza, preço, peso)
- 📊 Grid de esmeraldas certificadas
- 🖼️ Galeria de imagens de alta resolução
- 📄 Documentos verificáveis (certificado, espectro, metadata)
- 🔐 SpectralHash verificável
- 📱 QR Code para validação mobile
- 🔗 Links para blockchain explorer

### 4️⃣ Painel do Garimpeiro
- 📈 Estatísticas pessoais
- 🎰 **Simulador de Lote** - Estimativa de valor e qualidade
- 📤 Submissão de novos lotes
- 📋 Histórico e status de certificação

### 5️⃣ Painel Administrativo
- 🎛️ Estatísticas do sistema em tempo real
- 👥 Gestão de Roles (ADMIN, LAB, MINER, CUSTODIAN, ORACLE)
- ✅ Whitelist Management (KYC/AML)
- 📜 Status de contratos deployados
- 🔍 Monitoramento de transações e eventos

### 6️⃣ Documentação Técnica Oficial
**7 seções navegáveis:**
- 📖 Manifesto do Protocolo GEMLAB
- 🏛️ Tokenização e Governança
- 🔬 Espectrometria Raman
- 🔄 Ciclo de Vida Completo
- 📊 Simulações Interativas
- 🧪 Mockup de Rastreabilidade
- 💰 Fundo Municipal e Impacto

---

## 🎨 Design System

### Paleta de Cores

```css
--emerald-green: #006b4f;    /* Primária - Confiança e natureza */
--emerald-dark: #014733;     /* Secundária - Profundidade */
--gold-soft: #caa34b;        /* Destaque - Exclusividade premium */
--mineral-black: #1b1b1b;    /* Textos e backgrounds */
--technical-gray: #e5e7eb;   /* Bordas e fundos neutros */
```

### Tipografia
- **Interface:** Inter (clean e técnica)
- **Títulos:** Inter Semibold/Bold
- **Código:** Monospace (hashes, addresses, eventos)

### Princípios de Design
✨ **Contraste otimizado** - WCAG AAA compliance  
🎯 **Hierarquia clara** - Leitura fluida e profissional  
💎 **Precisão técnica** - Dados gemológicos destacados  
🌊 **Movimento suave** - Hover effects elegantes nas imagens  
📱 **Mobile-first** - Responsivo em todos os breakpoints  

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** + **TypeScript**
- **Tailwind CSS 4.0** - Sistema de design moderno
- **Shadcn/ui** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones consistentes
- **Motion (Framer Motion)** - Animações fluidas

### Componentes Principais
```
components/
├── Hero.tsx                    # Hero section com animações
├── Navbar.tsx                  # Navegação principal
├── ProcessSteps.tsx            # 4 etapas do processo
├── TokenizationFlow.tsx        # Fluxo de tokenização
├── LifecycleTimeline.tsx       # Ciclo de vida dos ativos
├── LatestCertifications.tsx    # Vitrine de certificações
├── MunicipalFund.tsx           # Fundo municipal detalhado
├── ComplianceSection.tsx       # Segurança e compliance
├── dashboard/
│   ├── GemologistDashboard.tsx
│   └── CertificationWizard.tsx # Wizard multi-step
├── marketplace/
│   ├── MarketplacePage.tsx
│   └── StoneDetailPage.tsx
├── miner/
│   └── MinerDashboard.tsx      # Dashboard + Simulador
├── admin/
│   ├── AdminPanel.tsx
│   └── RealTimeStats.tsx
└── institutional/
    ├── DocumentationSection.tsx # 7 seções navegáveis
    ├── RamanSpectroscopy.tsx   # Explicação técnica
    └── TraceabilityMockup.tsx  # Simulação visual
```

---

## 💰 Impacto Econômico e Social

### Econômico
- 💵 **R$ 1,6 Mi/ano** em arrecadação municipal
- 📈 **R$ 8,2 Mi/ano** em receita total estimada
- 👥 **450+ empregos** gerados na cadeia completa
- 📊 **260% de valorização** (do bruto ao certificado)
- 🌍 **15-40% prêmio** no mercado internacional

### Social
- 👨‍🔧 **150+ garimpeiros** formalizados
- 🎓 Capacitação técnica contínua
- 🏘️ Desenvolvimento regional sustentável
- 🤝 Inclusão financeira e acesso a crédito

### Ambiental
- 🌳 **30% do fundo** para reabilitação ambiental
- ♻️ Mineração responsável e rastreável
- 🌱 Reflorestamento e recuperação de áreas degradadas

### Fundo Municipal On-Chain

**Alocação Transparente:**
- 🌳 **30%** - Reabilitação Ambiental
- 🔬 **25%** - Pesquisa Geológica
- 🎓 **25%** - Capacitação Técnica
- 🏗️ **20%** - Infraestrutura (Centro Integrado da Mineração)

---

## 📦 Instalação e Uso

### Pré-requisitos
```bash
Node.js >= 18.x
npm >= 9.x ou yarn >= 1.22
```

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/gemlab-platform.git
cd gemlab-platform

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Estrutura de Arquivos

```
gemlab-platform/
├── App.tsx                    # Entry point principal
├── components/                # Componentes React
│   ├── ui/                   # Shadcn/ui components
│   ├── dashboard/            # Dashboards de usuários
│   ├── marketplace/          # Marketplace e detalhes
│   ├── miner/                # Painel do garimpeiro
│   ├── admin/                # Painel administrativo
│   ├── institutional/        # Documentação oficial
│   └── figma/                # Utils (ImageWithFallback)
├── styles/
│   └── globals.css           # Estilos globais + Tailwind
├── guidelines/               # Guias de desenvolvimento
├── PROJECT_OVERVIEW.md       # Visão geral técnica completa
├── PLATFORM_COMPLETE.md      # Status de conclusão
└── README.md                 # Este arquivo
```

---

## 📈 Roadmap

### ✅ Fase 1: MVP (Concluída)
- [x] Landing page institucional completa
- [x] Dashboard Gemólogo + Wizard de certificação
- [x] Marketplace com filtros avançados
- [x] Painel Garimpeiro + Simulador de lote
- [x] Admin Panel com gestão completa
- [x] Documentação técnica oficial (7 seções)
- [x] Design system consistente e acessível
- [x] Animações e interações premium

### 🚧 Fase 2: Integração Blockchain (Em Progresso)
- [ ] Deploy dos contratos inteligentes
  - [ ] ERC-1155 (EmeraldBatch)
  - [ ] ERC-721 (EmeraldNFT)
  - [ ] AccessControl
  - [ ] MunicipalFund
  - [ ] Marketplace
- [ ] Integração com carteiras (MetaMask, WalletConnect)
- [ ] IPFS/Arweave pinning real
- [ ] Oracle Fiscal implementado

### 📅 Fase 3: Produção (Q2 2025)
- [ ] KYC/AML real com parceiros certificados
- [ ] Sistema de escrow e pagamentos
- [ ] Marketplace ao vivo com transações reais
- [ ] Fundo Municipal ativo e auditável

### 🚀 Fase 4: Expansão (Q3-Q4 2025)
- [ ] Mobile app (iOS + Android)
- [ ] Indicação Geográfica (IG) oficial
- [ ] Expansão para outras gemas brasileiras
- [ ] Integração com joalherias e exportadores
- [ ] API pública para desenvolvedores

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Guidelines de Contribuição
- Siga o design system estabelecido
- Mantenha contraste WCAG AAA para textos
- Documente componentes complexos
- Teste em mobile e desktop
- Use TypeScript para type safety

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

**GemLab - Protocolo GEMLAB**

- 🌐 Website: [gemlab.com.br](https://gemlab.com.br)
- 📧 Email: contato@gemlab.com.br
- 📍 Localização: Campos Verdes - GO, Brasil
- 💬 Discord: [discord.gg/gemlab](https://discord.gg/gemlab)
- 🐦 Twitter: [@gemlab_oficial](https://twitter.com/gemlab_oficial)

---

## 🙏 Agradecimentos

- Comunidade de garimpeiros de Campos Verdes
- Laboratórios gemológicos credenciados
- Prefeitura Municipal de Campos Verdes
- Desenvolvedores e contribuidores open source

---

<div align="center">

**💎 Transformando a mineração regional em uma indústria inteligente, rastreável e investível 💎**

Desenvolvido com 💚 em Campos Verdes - GO

[![GitHub](https://img.shields.io/badge/GitHub-GemLab-006b4f?style=for-the-badge&logo=github)](https://github.com/seu-usuario/gemlab-platform)
[![License](https://img.shields.io/badge/License-MIT-caa34b?style=for-the-badge)](LICENSE)

</div>
