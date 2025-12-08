# 🏗️ Arquitetura do GEMLAB

## Visão Geral

O GEMLAB segue uma **arquitetura modular baseada em features** (Feature-Based Architecture), organizando código por domínio funcional em vez de camadas técnicas.

---

## 📐 Princípios de Design

### 1. **Separation of Concerns** (Separação de Preocupações)
Cada feature/módulo tem responsabilidade única e bem definida.

### 2. **Modularity** (Modularidade)
Features são independentes e podem ser desenvolvidas/testadas isoladamente.

### 3. **Scalability** (Escalabilidade)
Arquitetura preparada para crescimento do projeto.

### 4. **Type Safety** (Segurança de Tipos)
TypeScript em 100% do código para prevenir erros em runtime.

---

## 🗂️ Estrutura de Diretórios

```
gemlab/
│
├── components/              # Componentes React
│   ├── verification/        # Verificação (SpectralHash, EAS)
│   ├── governance/          # Governança fiscal
│   ├── certificates/        # Certificação gemológica
│   ├── institutional/       # Páginas institucionais
│   ├── pages/              # Páginas dos 4 Pilares
│   ├── ui/                 # shadcn/ui components
│   ├── animated/           # Componentes com animação
│   ├── admin/              # Admin dashboard
│   ├── dashboard/          # User dashboards
│   ├── marketplace/        # Marketplace de gemas
│   └── ...
│
├── features/               # Features organizadas por domínio
│   ├── verification/       # Feature: Verificação
│   ├── governance/         # Feature: Governança
│   ├── certificates/       # Feature: Certificação
│   ├── sustainability/     # Feature: ESG
│   └── traceability/       # Feature: Rastreabilidade
│
├── lib/                    # Utilitários e hooks
│   ├── utils.ts           # Funções utilitárias
│   ├── hooks.ts           # Custom React hooks
│   └── constants.ts       # Constantes da aplicação
│
├── contexts/              # React Context
│   ├── AuthContext.tsx    # Autenticação
│   └── DarkModeContext.tsx # Dark mode
│
├── utils/                 # Utilities específicas
│   ├── analytics.ts       # Google Analytics
│   ├── certificateGenerator.ts # Geração de certificados
│   └── supabase/          # Supabase client
│
├── types/                 # TypeScript types
│   ├── ethereum.d.ts      # Ethereum types
│   └── ...
│
├── styles/                # CSS global
│   └── globals.css        # Tailwind + Design tokens
│
├── docs/                  # Documentação
│   ├── ARCHITECTURE.md    # Este arquivo
│   ├── AUTH_SYSTEM.md     # Sistema de autenticação
│   └── ...
│
└── supabase/             # Configurações Supabase
    ├── config.toml        # Config do Supabase
    └── functions/         # Edge Functions
```

---

## 🎯 Features (Domínios Funcionais)

### 1. **Verification** (Verificação)

**Responsabilidade:** Autenticação e verificação de esmeraldas

**Componentes:**
- `SpectralHashViewer` - Visualização de assinatura espectral
- `EASVerificationBadge` - Badge de verificação on-chain
- `QRVerificationSystem` - Sistema de QR Code

**Tecnologias:**
- SpectralHash (Raman Spectroscopy)
- EAS Protocol (Ethereum Attestation Service)
- IPFS (armazenamento de dados espectrais)

---

### 2. **Governance** (Governança Fiscal)

**Responsabilidade:** Compliance fiscal e integração com Oracle Fiscal

**Componentes:**
- `OracleFiscalDashboard` - Dashboard da Prefeitura
- `GovernancePage` - Página de governança
- `ComplianceDashboard` - Métricas fiscais

**Tecnologias:**
- API Prefeitura de Campos Verdes (Oracle Fiscal)
- Sistema de Notas Fiscais Eletrônicas
- EAS Protocol (atestações fiscais on-chain)

---

### 3. **Certificates** (Certificação)

**Responsabilidade:** Geração e compartilhamento de certificados gemológicos

**Componentes:**
- `ShareCertificateModal` - Modal de compartilhamento
- `CertificationWizard` - Wizard de criação
- `CertifiedGemsRegistry` - Registro público

**Tecnologias:**
- IPFS (armazenamento permanente)
- QR Code generation
- Social Share APIs

---

### 4. **Sustainability** (Sustentabilidade ESG)

**Responsabilidade:** Rastreamento de métricas ESG

**Componentes:**
- `SustentabilidadePage` - Página ESG
- `ImpactDashboard` - Dashboard de impacto
- `EconomicImpact` - Métricas econômicas

**Tecnologias:**
- Sensores IoT
- APIs de Carbon Credits
- Relatórios GRI

---

### 5. **Traceability** (Rastreabilidade)

**Responsabilidade:** Rastreamento do ciclo de vida das gemas

**Componentes:**
- `RastreabilidadePage` - Página de rastreabilidade
- `LifecycleTimeline` - Timeline do ciclo de vida
- `TrackingTimeline` - Timeline de eventos

**Tecnologias:**
- Blockchain (Ethereum/Base)
- IPFS (evidências)
- GPS tracking

---

## 🔄 Fluxo de Dados

```
┌─────────────┐
│   User UI   │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│   React App     │
│  (Components)   │
└──────┬──────────┘
       │
       ▼
┌──────────────────────────────┐
│  State Management            │
│  (React Context + Hooks)     │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  API Layer                   │
│  - Supabase Client           │
│  - Ethereum Provider         │
│  - EAS SDK                   │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  External Services           │
│  - Supabase (PostgreSQL)     │
│  - Blockchain (Base Network) │
│  - IPFS (Pinata)             │
│  - Oracle Fiscal API         │
└──────────────────────────────┘
```

---

## 🛡️ Segurança

### **Autenticação**
- Supabase Auth (email/password, magic link)
- JWT tokens
- Row Level Security (RLS) no PostgreSQL

### **Blockchain**
- Wallet connection via MetaMask/WalletConnect
- Transaction signing client-side
- EAS attestations para imutabilidade

### **Data Privacy**
- LGPD compliance
- Dados pessoais apenas no Supabase (não on-chain)
- Encryption at rest e in transit

---

## 🚀 Performance

### **Frontend**
- Code splitting por rota
- Lazy loading de componentes pesados
- Image optimization (WebP, lazy load)
- Tailwind CSS purge para CSS mínimo

### **Backend**
- Supabase Edge Functions (Deno runtime)
- PostgreSQL indexing otimizado
- CDN para assets estáticos (Vercel)

### **Blockchain**
- Batch transactions quando possível
- Layer 2 (Base Network) para custos baixos
- IPFS para dados grandes (off-chain)

---

## 📊 Monitoramento

- **Analytics:** Google Analytics 4
- **Error Tracking:** Sentry (planejado)
- **Performance:** Web Vitals
- **Logs:** Supabase Logs + Vercel Analytics

---

## 🔮 Roadmap de Arquitetura

### **Q1 2025**
- [ ] Implementar cache layer (Redis)
- [ ] Migrar para Next.js 15 (App Router)
- [ ] Adicionar testes E2E (Playwright)

### **Q2 2025**
- [ ] Multi-chain support (Ethereum + Polygon)
- [ ] GraphQL API (substituir REST)
- [ ] Microservices para processamento pesado

### **Q3 2025**
- [ ] Mobile app (React Native)
- [ ] Offline-first architecture (PWA)
- [ ] Real-time collaboration (WebSockets)

---

## 📚 Referências

- [React Best Practices](https://react.dev/learn/thinking-in-react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [EAS Protocol Docs](https://docs.attest.sh/)
- [Supabase Docs](https://supabase.com/docs)
