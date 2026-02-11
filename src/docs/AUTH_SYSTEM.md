# 🔐 Sistema de Account Abstraction - GemLab

## 📋 Visão Geral

O sistema de autenticação da plataforma GemLab implementa **Account Abstraction** com múltiplas opções de login e criação automática de wallets efêmeras para novos usuários.

---

## ✨ Funcionalidades

### 1️⃣ **Cadastro via Email**
-  Criação de conta com email e senha
-  **Wallet efêmera** gerada automaticamente
-  Armazenamento seguro no Supabase
-  Confirmação automática de email (para prototipagem)

### 2️⃣ **Login via Email**
-  Autenticação com email/senha
-  Sessão persistente
-  Acesso ao perfil do usuário

### 3️⃣ **Conexão via Wallet**
-  Suporte para MetaMask
-  Assinatura de mensagem para autenticação
-  Criação automática de conta se wallet não existir
-  Vinculação de wallet a conta existente

### 4️⃣ **Wallet Efêmera**
-  Gerada automaticamente para cada nova conta via email
-  Permite acesso imediato às funcionalidades blockchain
-  Usuário pode conectar wallet própria posteriormente

---

## 🎯 Como Usar

### **Acessar o Modal de Autenticação**

1. Clique no botão **"Entrar"** no Navbar (desktop ou mobile)
2. O modal de autenticação será aberto com duas abas:
   - **Entrar**: Para usuários existentes
   - **Criar Conta**: Para novos usuários

---

## 📝 Fluxo de Cadastro (Email)

```
1. Usuário clica em "Criar Conta"
2. Preenche: Nome, Email, Senha (mínimo 6 caracteres)
3. Sistema cria:
   - Conta no Supabase Auth
   - Wallet efêmera (endereço + chave pública)
   - Perfil no KV Store
4. Login automático após cadastro
5. Perfil exibido na página principal
```

### **Dados da Wallet Efêmera:**
```typescript
{
  address: "0x...",          // Endereço Ethereum
  publicKey: "0x...",        // Chave pública
  createdAt: "2024-11-17"    // Data de criação
}
```

---

## 🔑 Fluxo de Login (Email)

```
1. Usuário clica em "Entrar"
2. Insere email e senha
3. Sistema autentica via Supabase
4. Carrega perfil do usuário
5. Exibe informações da conta e wallet
```

---

## 🦊 Fluxo de Conexão (MetaMask)

```
1. Usuário clica em "Conectar Wallet (MetaMask)"
2. MetaMask abre solicitando conexão
3. Usuário aprova conexão
4. Sistema solicita assinatura de mensagem
5. Usuário assina mensagem
6. Backend verifica assinatura
7. Se wallet já existe → Login
8. Se wallet não existe → Cria nova conta
```

### **Mensagem de Assinatura:**
```
GemLab Authentication

Sign this message to prove you own this wallet.

Address: 0x...
Timestamp: 1700179200000
```

---

## 🏗️ Arquitetura

### **Frontend**
```
/contexts/AuthContext.tsx        → Estado global de autenticação
/components/AuthModal.tsx        → Modal de login/cadastro
/components/UserProfile.tsx      → Exibição do perfil
/components/Navbar.tsx           → Botão "Entrar"
/types/ethereum.d.ts             → Tipos TypeScript para MetaMask
```

### **Backend**
```
/supabase/functions/server/auth.tsx   → Endpoints de autenticação
/supabase/functions/server/index.tsx  → Servidor principal
```

### **Endpoints API**

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/make-server-6272b4ab/auth/signup` | Criar nova conta via email |
| GET | `/make-server-6272b4ab/auth/profile` | Obter perfil do usuário |
| POST | `/make-server-6272b4ab/auth/wallet-signin` | Login/cadastro via wallet |
| POST | `/make-server-6272b4ab/auth/link-wallet` | Vincular wallet a conta existente |

---

## 💾 Estrutura de Dados (KV Store)

### **Perfil de Usuário**
```typescript
{
  id: "uuid",
  email: "usuario@email.com",
  name: "Nome Completo",
  wallet?: "0x...",                    // Wallet conectada (opcional)
  ephemeralWallet: {
    address: "0x...",
    publicKey: "0x...",
    createdAt: "2024-11-17"
  },
  kycStatus: "pending" | "approved" | "rejected",
  createdAt: "2024-11-17"
}
```

### **Índices no KV Store**
```
user:{userId}                    → Perfil completo
user:email:{email}              → userId por email
user:wallet:{address}           → userId por endereço de wallet
```

---

## 🎨 Componente de Perfil

O componente `UserProfile` exibe:

-  Nome do usuário
-  Email
-  Wallet efêmera (com botão copiar)
-  Wallet conectada (se houver)
-  Status KYC (Pendente/Aprovado/Rejeitado)
-  Botão "Sair"

**Localização:** Aparece na página principal logo após o Hero, **apenas quando usuário está logado**.

---

## 🔒 Segurança

### **Boas Práticas Implementadas:**
-  Senha com mínimo de 6 caracteres
-  Token JWT via Supabase Auth
-  Service Role Key **nunca** exposta ao frontend
-  Verificação de autorização em rotas protegidas
-  CORS configurado corretamente
-  Assinatura de mensagem para autenticação via wallet

### **⚠️ Importante:**
> O Figma Make **não é adequado** para coletar informações pessoalmente identificáveis (PII) ou dados sensíveis em produção. Esta implementação é para **prototipagem e demonstração**.

---

## 🚀 Próximos Passos

### **Para Produção:**

1. **Configurar Email Transacional**
   - Remover `email_confirm: true`
   - Configurar SMTP no Supabase
   - Implementar fluxo de confirmação de email

2. **Fortalecer Segurança**
   - Implementar verificação real de assinatura (ethers.js)
   - Adicionar rate limiting
   - Implementar 2FA

3. **KYC/AML Completo**
   - Integrar com provedor KYC (Sumsub, Onfido, etc.)
   - Workflow de aprovação de documentos
   - Compliance com regulamentações locais

4. **Wallet Efêmera Segura**
   - Usar biblioteca criptográfica robusta
   - Implementar backup/recovery
   - Considerar smart contract wallets

5. **Social Login**
   - Google OAuth
   - Facebook Login
   - GitHub Login

---

## 📚 Dependências

```json
{
  "@supabase/supabase-js": "^2.x",
  "react": "^18.x",
  "typescript": "^5.x"
}
```

### **Extensões Necessárias:**
- MetaMask (para conexão via wallet)

---

## 🐛 Troubleshooting

### **Erro: "MetaMask não está instalado"**
- Instale a extensão MetaMask no navegador
- Recarregue a página

### **Erro: "Não autorizado"**
- Verifique se o token não expirou
- Faça logout e login novamente

### **Erro: "Conexão cancelada pelo usuário"**
- Usuário rejeitou conexão no MetaMask
- Tente novamente

---

## 📖 Referências

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [MetaMask Documentation](https://docs.metamask.io/)
- [Account Abstraction (ERC-4337)](https://eips.ethereum.org/EIPS/eip-4337)

---

## 👨‍💻 Suporte

Para dúvidas ou problemas, consulte a documentação técnica completa do Protocolo GEMLAB.

**Versão:** 1.0.0  
**Data:** 17 de Novembro de 2024  
**Plataforma:** GemLab - Campos Verdes, GO
