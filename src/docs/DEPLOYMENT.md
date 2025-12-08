# 🚀 Deployment Guide - GEMLAB

Este documento descreve o processo de deploy do GEMLAB em produção.

---

## 📋 Pré-requisitos

- [ ] Conta no Vercel ou Netlify
- [ ] Projeto Supabase configurado
- [ ] Wallet Ethereum (para deploy de contracts)
- [ ] Conta Pinata (IPFS)
- [ ] Domínio configurado (opcional)

---

## 🌐 Deploy Frontend (Vercel)

### **1. Conectar Repositório**

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe o repositório GitHub `gemlab-protocol/gemlab`
4. Configure o projeto:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### **2. Configurar Variáveis de Ambiente**

No painel do Vercel, adicione as seguintes environment variables:

```bash
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Blockchain
VITE_RPC_URL=https://mainnet.base.org
VITE_EAS_CONTRACT_ADDRESS=0x4200000000000000000000000000000000000021
VITE_EAS_SCHEMA_UID_CERTIFICATION=0x...
VITE_EAS_SCHEMA_UID_FISCAL=0x...

# IPFS
VITE_PINATA_API_KEY=your-api-key
VITE_PINATA_SECRET_KEY=your-secret
VITE_IPFS_GATEWAY=https://gateway.pinata.cloud

# Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Oracle Fiscal
VITE_ORACLE_FISCAL_API_URL=https://api.prefeitura.camposverdes.go.gov.br
VITE_ORACLE_FISCAL_API_KEY=your-api-key

# App Config
VITE_APP_NAME=GEMLAB
VITE_APP_URL=https://gemlab.com.br
VITE_APP_ENV=production
```

### **3. Deploy**

```bash
# Via CLI (alternativa)
npm install -g vercel
vercel --prod
```

### **4. Configurar Domínio**

1. No painel do Vercel, vá em "Settings" → "Domains"
2. Adicione seu domínio customizado
3. Configure os DNS records conforme instruído

---

## 🗄️ Deploy Backend (Supabase)

### **1. Criar Projeto Supabase**

1. Acesse [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Escolha a região (South America - São Paulo)

### **2. Configurar Database**

Execute as migrations SQL no SQL Editor:

```sql
-- Criar tabela de certificados
CREATE TABLE certificates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  gem_id VARCHAR(255) UNIQUE NOT NULL,
  spectral_hash VARCHAR(255) NOT NULL,
  owner_address VARCHAR(42) NOT NULL,
  eas_attestation_uid VARCHAR(66),
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar Row Level Security (RLS)
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Policy: Usuários autenticados podem ler
CREATE POLICY "Certificates are viewable by authenticated users"
  ON certificates FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Apenas owner pode atualizar
CREATE POLICY "Users can update their own certificates"
  ON certificates FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = owner_address);

-- Índices para performance
CREATE INDEX idx_certificates_gem_id ON certificates(gem_id);
CREATE INDEX idx_certificates_spectral_hash ON certificates(spectral_hash);
CREATE INDEX idx_certificates_owner ON certificates(owner_address);
```

### **3. Configurar Storage**

1. No painel Supabase, vá em "Storage"
2. Crie um bucket `certificates`
3. Configure as políticas de acesso:

```sql
-- Policy: Leitura pública
CREATE POLICY "Certificate images are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'certificates');

-- Policy: Upload apenas para autenticados
CREATE POLICY "Authenticated users can upload certificates"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'certificates');
```

### **4. Deploy Edge Functions**

```bash
# Instalar Supabase CLI
npm install -g supabase

# Login
supabase login

# Link ao projeto
supabase link --project-ref your-project-ref

# Deploy functions
supabase functions deploy
```

---

## ⛓️ Deploy Blockchain (EAS Schemas)

### **1. Conectar Wallet**

```bash
# Instalar Foundry (se não tiver)
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

### **2. Criar EAS Schemas**

Acesse [easscan.org](https://base.easscan.org/schema/create) e crie os schemas:

**Schema: Certificação Gemológica**
```json
{
  "gemId": "string",
  "spectralHash": "string",
  "weight": "uint256",
  "clarity": "string",
  "color": "string",
  "cut": "string",
  "origin": "string",
  "certificateIpfsHash": "string"
}
```

**Schema: Nota Fiscal (Oracle Fiscal)**
```json
{
  "nfeNumber": "string",
  "gemId": "string",
  "issueDate": "uint256",
  "cfemValue": "uint256",
  "municipalTaxValue": "uint256",
  "issuerAddress": "address",
  "verified": "bool"
}
```

### **3. Salvar Schema UIDs**

Copie os Schema UIDs gerados e adicione ao `.env`:

```bash
VITE_EAS_SCHEMA_UID_CERTIFICATION=0x123...
VITE_EAS_SCHEMA_UID_FISCAL=0x456...
```

---

## 📊 Configurar Analytics

### **Google Analytics 4**

1. Acesse [analytics.google.com](https://analytics.google.com)
2. Crie uma propriedade GA4
3. Copie o Measurement ID (formato: `G-XXXXXXXXXX`)
4. Adicione ao `.env`:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🔒 Configurar CORS

### **Supabase**

No painel Supabase, vá em "Settings" → "API" → "CORS":

```
https://gemlab.com.br
https://www.gemlab.com.br
http://localhost:5173
```

### **Pinata (IPFS)**

Configure CORS no painel Pinata para permitir requests do domínio.

---

## ✅ Checklist Final de Deploy

- [ ] Frontend deployado no Vercel/Netlify
- [ ] Domínio configurado e SSL ativo
- [ ] Supabase database configurado com RLS
- [ ] Storage bucket criado e configurado
- [ ] Edge Functions deployadas
- [ ] EAS Schemas criados na Base Network
- [ ] Variáveis de ambiente configuradas
- [ ] Analytics configurado e testado
- [ ] CORS configurado corretamente
- [ ] Testes E2E passando em produção

---

## 🔄 CI/CD Automation

O projeto usa GitHub Actions para deploy automático:

1. **Push para `main`** → Deploy em produção (Vercel)
2. **Push para `develop`** → Deploy em staging
3. **Pull Request** → Deploy preview automático

---

## 📈 Monitoring

### **Serviços Recomendados**

- **Uptime:** [UptimeRobot](https://uptimerobot.com)
- **Error Tracking:** [Sentry](https://sentry.io)
- **Performance:** Vercel Analytics + Web Vitals
- **Logs:** Supabase Logs + Vercel Logs

---

## 🆘 Troubleshooting

### **Build falhando no Vercel**

```bash
# Verificar localmente
npm run build

# Checar type errors
npm run type-check

# Checar lint errors
npm run lint
```

### **Supabase RLS bloqueando requests**

Verifique as políticas de RLS no SQL Editor:

```sql
SELECT * FROM pg_policies WHERE tablename = 'certificates';
```

### **EAS attestations falhando**

- Verifique se tem ETH suficiente na wallet
- Confirme que o Schema UID está correto
- Verifique a network (Base Mainnet)

---

## 📞 Suporte

Em caso de problemas:

- **Email:** dev@gemlab.com.br
- **GitHub Issues:** [github.com/gemlab-protocol/gemlab/issues](https://github.com/gemlab-protocol/gemlab/issues)
- **Discord:** [discord.gg/gemlab](https://discord.gg/gemlab)
