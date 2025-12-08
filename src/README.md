# 💎 GEMLAB - Protocolo de Confiança para Mineração 4.0

![GEMLAB Logo](https://via.placeholder.com/800x200/006b4f/ffffff?text=GEMLAB+Protocol)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)](https://ethereum.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🌟 **Resumo Executivo**

O **GEMLAB** é o **Protocolo de Confiança para Mineração 4.0**, uma infraestrutura tecnológica e de certificação científica que combate a **evasão fiscal sistêmica** na mineração artesanal de esmeraldas através da **Tríade de Confiança EAS**:

### 🔐 **Tríade de Confiança**

1. **🏛️ Prova de Origem** → Prefeitura de Campos Verdes como **Oracle Fiscal** (emissão de Notas Fiscais on-chain)
2. **🔬 Prova de Ciência** → **SpectralHash** (assinatura espectral Raman única e imutável)
3. **🔗 Prova de Custódia** → **EAS Protocol** (atestações on-chain imutáveis em blockchain público)

---

## 🎯 **Posicionamento**

**ANTES (Pivot):** Plataforma de Investimento/Crypto  
**AGORA:** **Empresa de Tecnologia e Certificação Científica**

O GEMLAB é o **Regente de Contratos** e **Oráculo Científico** do **Projeto Campos Verdes 2050**, operando como:

- ✅ **Infraestrutura de Rastreabilidade** (SpectralHash + Blockchain)
- ✅ **Certificação Gemológica Científica** (Espectroscopia Raman)
- ✅ **Compliance Fiscal** (Oracle Fiscal + ANM + CVM)
- ✅ **Protocolo de Confiança** (EAS Attestations)

---

## 🏗️ **Arquitetura do Sistema**

### **Frontend Stack**

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animation:** Framer Motion (motion/react)
- **Icons:** Lucide React
- **Charts:** Recharts

### **Backend & Blockchain**

- **Blockchain:** Ethereum (Base Network - Layer 2)
- **Attestation Protocol:** EAS (Ethereum Attestation Service)
- **Storage:** IPFS (InterPlanetary File System)
- **Backend:** Supabase (PostgreSQL + Edge Functions)

### **Certification Technology**

- **SpectralHash:** Proprietary Raman spectroscopy signature algorithm
- **QR Code Verification:** Public certificate validation
- **Digital Certificates:** IPFS + on-chain attestations

---

## 📁 **Estrutura de Diretórios (Feature-Based)**

```
gemlab/
├── components/              # Componentes React organizados por domínio
│   ├── verification/        # Sistema de verificação (SpectralHash, EAS)
│   ├── governance/          # Governança fiscal e compliance
│   ├── certificates/        # Certificação e compartilhamento
│   ├── institutional/       # Páginas institucionais
│   ├── pages/              # Páginas principais (4 Pilares)
│   ├── ui/                 # shadcn/ui components
│   └── ...
├── features/               # Features organizadas por domínio (arquitetura modular)
│   ├── verification/       # Feature: Verificação e autenticação
│   ├── governance/         # Feature: Governança fiscal
│   ├── certificates/       # Feature: Certificação gemológica
│   ├── sustainability/     # Feature: ESG e sustentabilidade
│   └── traceability/       # Feature: Rastreabilidade
├── contexts/               # React Context (Auth, DarkMode)
├── utils/                  # Utilities (analytics, supabase client)
├── types/                  # TypeScript type definitions
├── styles/                 # CSS global e tokens Tailwind
├── docs/                   # Documentação técnica
├── supabase/              # Configurações Supabase
└── public/                # Assets estáticos
```

---

## 🚀 **Como Rodar o Projeto**

### **Pré-requisitos**

- Node.js >= 18.x
- npm ou yarn ou pnpm
- Supabase CLI (opcional para desenvolvimento local)

### **Instalação**

```bash
# Clone o repositório
git clone https://github.com/gemlab-protocol/gemlab.git
cd gemlab

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais Supabase e chaves de API

# Inicie o servidor de desenvolvimento
npm run dev
```

O app estará disponível em `http://localhost:5173`

### **Scripts Disponíveis**

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria build de produção
npm run preview      # Preview do build de produção
npm run lint         # Roda o linter (ESLint)
npm run type-check   # Verifica tipos TypeScript
```

---

## 🌐 **Deploy**

O GEMLAB está hospedado em:

- **Frontend:** Vercel / Netlify
- **Backend:** Supabase (PostgreSQL + Edge Functions)
- **Blockchain:** Base Network (Ethereum L2)
- **Storage:** IPFS (Pinata)

---

## 🎨 **Design System**

### **Paleta de Cores**

```css
--emerald-primary: #006b4f;    /* Verde Esmeralda */
--emerald-dark: #014733;       /* Verde Escuro */
--gold-soft: #caa34b;          /* Dourado Soft */
--mineral-black: #1b1b1b;      /* Preto Mineral */
--white-pure: #ffffff;         /* Branco Puro */
--technical-gray: #e5e7eb;     /* Cinza Técnico */
```

### **Tipografia**

- **Headings:** Montserrat (font-['Montserrat'])
- **Body:** Inter (font-['Inter'])

### **Princípios de Design**

- ✅ **Minimalismo Técnico** - Muito espaço em branco (whitespace)
- ✅ **Alta Joalheria** - Estética premium e sofisticada
- ✅ **Transparência** - Informações claras e acessíveis
- ✅ **Responsividade** - Mobile-first design

---

## 📚 **Documentação**

- [Auth System](./docs/AUTH_SYSTEM.md) - Sistema de autenticação
- [Analytics & A11y](./docs/ANALYTICS_A11Y_PERFORMANCE.md) - Analytics e acessibilidade
- [Oracle Fiscal](./ORACLE_FISCAL_DOCUMENTATION.md) - Documentação do Oracle Fiscal
- [Design System](./DESIGN_SYSTEM_REFERENCE.md) - Referência do Design System
- [Contributing](./CONTRIBUTING.md) - Guia de contribuição

---

## 🤝 **Contribuindo**

Contribuições são bem-vindas! Por favor, leia o [CONTRIBUTING.md](./CONTRIBUTING.md) para detalhes sobre nosso código de conduta e processo de submissão de pull requests.

---

## 📊 **4 Pilares da Plataforma**

### 1. **🔍 Rastreabilidade**
Sistema completo de rastreabilidade desde a jazida até o varejo, usando SpectralHash e blockchain.

### 2. **🏛️ Governança Fiscal**
Integração com Prefeitura de Campos Verdes como Oracle Fiscal, combatendo evasão fiscal sistêmica.

### 3. **🌿 Sustentabilidade ESG**
Rastreamento de métricas ambientais, sociais e de governança, com foco em Economia Circular.

### 4. **👥 Equipe & Parceiros**
Equipe interdisciplinar com expertise em tecnologia, mineração, meio ambiente e impacto social.

---

## 🏆 **Parceiros Estratégicos**

- **COOPESMERALDA** - Cooperativa de Mineradores de Esmeraldas (340+ garimpeiros)
- **Prefeitura de Campos Verdes - GO** - Oracle Fiscal oficial
- **Associação Benjamim Cristã (ABC)** - Pilar social e comunitário
- **Universidade Federal de Goiás (UFG)** - Pesquisa e desenvolvimento
- **ANM** - Agência Nacional de Mineração

---

## 📄 **Licença**

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](./LICENSE) para detalhes.

---

## 📧 **Contato**

- **Website:** [https://gemlab.com.br](https://gemlab.com.br)
- **Email:** contato@gemlab.com.br
- **LinkedIn:** [GEMLAB Protocol](https://linkedin.com/company/gemlab)
- **Twitter:** [@gemlabprotocol](https://twitter.com/gemlabprotocol)

---

<div align="center">

**Desenvolvido com 💚 pela Equipe GEMLAB**

*Transformando a mineração artesanal através de tecnologia, ciência e confiança.*

</div>
