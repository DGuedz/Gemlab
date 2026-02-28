# 🔧 Guia de Correção de Erros de Autenticação - GemLab

## ❌ Erros Comuns

Se você está encontrando estes erros:

```
Error signing up: Error: Um usuário com este email já está registrado. Por favor, faça login.
Error signing in: AuthApiError: Invalid login credentials
```

## 🎯 Causa do Problema

Esses erros ocorrem quando há **inconsistência entre o KV Store e o Supabase Auth**:
- O usuário foi criado no Supabase Auth mas o perfil do KV Store falhou
- Ou o perfil do KV Store foi criado mas o Supabase Auth falhou
- Ou há dados órfãos de testes anteriores

## ✅ Soluções Implementadas

### 🔄 **Solução Automática** (Recomendada)

O sistema agora possui **auto-recuperação**! Durante o signup, ele:
1. Detecta dados órfãos no KV Store
2. Verifica se o usuário existe no Supabase Auth
3. Remove automaticamente dados inconsistentes
4. Permite retry do cadastro

### 🛠️ **Solução Manual** (Dev Tools)

Criamos um painel **Dev Tools** no canto inferior esquerdo com 2 opções:

#### Opção 1: Limpar Dados Órfãos
```
Endpoint: POST /auth/cleanup
```
- Sincroniza KV Store com Supabase Auth
- Remove usuários órfãos do KV
- Cria perfis KV para usuários Auth sem perfil

**Como usar:**
1. Clique em **"Limpar Dados Órfãos"**
2. Aguarde a mensagem de sucesso
3. Tente criar a conta novamente

#### Opção 2: Deletar Usuário Específico
```
Endpoint: DELETE /auth/user/:email
```
- Remove completamente um usuário por email
- Deleta do KV Store E do Supabase Auth

**Como usar:**
1. Digite o email no campo
2. Clique no ícone da **lixeira**
3. Aguarde confirmação
4. Crie a conta novamente

## 📋 Passo a Passo Completo

### Se receber "usuário já registrado":

```bash
1. ✅ Abra o painel Dev Tools (canto inferior esquerdo)
2. ✅ Clique em "Limpar Dados Órfãos"
3. ✅ Aguarde: "Limpeza concluída!"
4. ✅ Tente criar a conta novamente
```

### Se receber "invalid credentials":

```bash
1. ✅ Abra o painel Dev Tools
2. ✅ Digite seu email
3. ✅ Clique no ícone de lixeira
4. ✅ Aguarde: "Usuário removido do sistema"
5. ✅ Crie a conta novamente com a MESMA senha
```

## 🔍 Endpoints Disponíveis

### 1. **POST** `/auth/cleanup`
Sincroniza KV Store com Supabase Auth

**Response:**
```json
{
  "success": true,
  "message": "Limpeza concluída",
  "stats": {
    "orphanedKvUsers": 0,
    "orphanedAuthUsers": 0,
    "synced": 1
  }
}
```

### 2. **DELETE** `/auth/user/:email`
Remove usuário completamente

**Response:**
```json
{
  "success": true,
  "message": "Usuário removido do sistema"
}
```

### 3. **POST** `/auth/signup`
Agora com auto-recuperação integrada!

**Auto-recuperação:**
- ✅ Detecta dados órfãos
- ✅ Limpa KV Store automaticamente
- ✅ Valida no Supabase Auth
- ✅ Permite retry

## 🎨 UI Components

### ErrorFix Component
Banner que aparece automaticamente com instruções (pode ser dispensado)

### DevTools Component
Painel fixo no canto inferior esquerdo com ferramentas de desenvolvimento

## 🚀 Melhorias Implementadas

1. ✅ **Auto-recuperação** no signup
2. ✅ **Endpoint de cleanup** para sincronização
3. ✅ **Endpoint de delete** para remoção completa
4. ✅ **DevTools UI** para fácil acesso
5. ✅ **ErrorFix banner** com instruções
6. ✅ **Mensagens de erro melhoradas** no AuthModal
7. ✅ **Logging detalhado** no backend

## 📝 Notas Importantes

- ⚠️ Os endpoints de cleanup e delete são **APENAS PARA DESENVOLVIMENTO**
- ⚠️ Em produção, remova ou proteja estes endpoints
- ✅ O sistema de auto-recuperação é seguro para produção

## 🔐 Segurança

- Dev Tools usa `publicAnonKey` (não expõe service_role_key)
- Endpoints administrativos devem ser protegidos em produção
- Auto-recuperação valida sempre no Supabase Auth

---

**Desenvolvido para GemLab - Plataforma de Certificação Científica de Esmeraldas** 💎
