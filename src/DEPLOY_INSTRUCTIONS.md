# 🚀 Instruções de Deploy - GemLab Platform

Este documento contém as instruções passo a passo para fazer o deploy do projeto GemLab no GitHub e outras plataformas.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- ✅ Git instalado (versão 2.0+)
- ✅ Conta no GitHub
- ✅ Node.js 18+ instalado
- ✅ npm ou yarn configurado

---

## 🔧 Configuração Inicial do Git

### 1. Configure suas credenciais

```bash
# Configure seu nome de usuário
git config --global user.name "Seu Nome"

# Configure seu email
git config --global user.email "seu.email@exemplo.com"

# Verifique as configurações
git config --list
```

---

## 📦 Preparando o Projeto

### 1. Verifique os arquivos

Certifique-se de que os seguintes arquivos foram criados:

```bash
✅ README.md              # Documentação principal
✅ CHANGELOG.md           # Histórico de mudanças
✅ .gitignore             # Arquivos a ignorar
✅ CONTRIBUTING.md        # Guia de contribuição
✅ PROJECT_OVERVIEW.md    # Visão técnica completa
✅ PLATFORM_COMPLETE.md   # Status de conclusão
```

### 2. Verifique a estrutura

```bash
# Liste todos os arquivos do projeto
ls -la

# Verifique se o .gitignore está funcionando
git status
```

---

## 🌐 Criando Repositório no GitHub

### Opção 1: Via Interface Web (Recomendado)

1. Acesse [github.com](https://github.com)
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha os dados:
   - **Repository name:** `gemlab-platform`
   - **Description:** `Plataforma completa de rastreabilidade e certificação de esmeraldas - Campos Verdes/GO`
   - **Visibility:** Public ou Private (sua escolha)
   - **NÃO marque:** "Initialize this repository with a README"
5. Clique em **"Create repository"**

### Opção 2: Via GitHub CLI

```bash
# Instale o GitHub CLI (se ainda não tiver)
# macOS: brew install gh
# Windows: winget install GitHub.cli
# Linux: Veja https://github.com/cli/cli#installation

# Autentique-se
gh auth login

# Crie o repositório
gh repo create gemlab-platform --public --source=. --remote=origin
```

---

## 💾 Primeira Atualização (Initial Commit)

### 1. Inicialize o repositório Git local

```bash
# Inicialize o Git (se ainda não foi inicializado)
git init

# Verifique o status
git status
```

### 2. Adicione todos os arquivos

```bash
# Adicione todos os arquivos ao staging
git add .

# Ou adicione arquivos específicos
git add README.md CHANGELOG.md .gitignore
git add components/
git add styles/
git add App.tsx

# Verifique o que será commitado
git status
```

### 3. Faça o primeiro commit

```bash
# Commit inicial com todos os arquivos
git commit -m "feat: initial commit - GemLab Platform v1.1.0

- ✨ Landing page institucional completa
- ✨ Dashboard do Gemólogo com wizard de 6 etapas
- ✨ Marketplace com filtros avançados
- ✨ Painel do Garimpeiro com simulador
- ✨ Painel Administrativo completo
- ✨ Documentação técnica (7 seções navegáveis)
- 🎨 Design system consistente (verde esmeralda)
- 🎨 Efeitos hover suaves nas imagens
- 🎨 Contraste otimizado WCAG AAA
- 📝 40+ componentes customizados
- 📝 Documentação completa (README, CHANGELOG, CONTRIBUTING)"
```

### 4. Conecte ao repositório remoto

```bash
# Adicione o repositório remoto
git remote add origin https://github.com/SEU-USUARIO/gemlab-platform.git

# Ou use SSH (recomendado)
git remote add origin git@github.com:SEU-USUARIO/gemlab-platform.git

# Verifique se foi adicionado corretamente
git remote -v
```

### 5. Envie para o GitHub

```bash
# Renomeie a branch para main (se necessário)
git branch -M main

# Faça o push inicial
git push -u origin main

# Se der erro de autenticação, use um Personal Access Token
# Veja: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
```

---

## 🔄 Atualizações Futuras

### Fluxo de trabalho normal

```bash
# 1. Verifique o status
git status

# 2. Adicione arquivos modificados
git add .
# ou arquivos específicos
git add components/Hero.tsx

# 3. Faça o commit (use Conventional Commits)
git commit -m "feat: adiciona filtro de peso no marketplace"

# 4. Envie para o GitHub
git push origin main
```

### Trabalhando com Branches

```bash
# Crie uma nova branch para uma feature
git checkout -b feature/nova-funcionalidade

# Faça suas mudanças e commits
git add .
git commit -m "feat: implementa nova funcionalidade"

# Envie a branch para o GitHub
git push origin feature/nova-funcionalidade

# No GitHub, abra um Pull Request
# Após aprovação, merge para main
```

---

## 🏷️ Criando Releases

### Via Interface Web

1. Vá para o repositório no GitHub
2. Clique em **"Releases"** → **"Create a new release"**
3. Preencha:
   - **Tag version:** `v1.1.0`
   - **Release title:** `v1.1.0 - Hover Effects & Contrast Improvements`
   - **Description:** Cole o conteúdo relevante do CHANGELOG.md
4. Clique em **"Publish release"**

### Via Git Tags

```bash
# Crie uma tag anotada
git tag -a v1.1.0 -m "Release v1.1.0 - Hover Effects & Contrast Improvements"

# Envie a tag para o GitHub
git push origin v1.1.0

# Ou envie todas as tags
git push --tags
```

---

## 🌍 Deploy em Plataformas

### Vercel (Recomendado para React)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Importe seu repositório do GitHub
4. Configure:
   - **Framework Preset:** Vite (ou Auto-detect)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **"Deploy"**

**Via CLI:**

```bash
# Instale o Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Conecte ao GitHub e selecione o repositório
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Clique em **"Deploy site"**

**Via CLI:**

```bash
# Instale o Netlify CLI
npm i -g netlify-cli

# Faça login
netlify login

# Deploy
netlify deploy

# Deploy para produção
netlify deploy --prod
```

### GitHub Pages

```bash
# Instale o gh-pages
npm install --save-dev gh-pages

# Adicione no package.json:
# "homepage": "https://SEU-USUARIO.github.io/gemlab-platform",
# "scripts": {
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"
# }

# Deploy
npm run deploy
```

---

## 🔒 Configurando Proteção de Branches

### No GitHub

1. Vá para **Settings** → **Branches**
2. Clique em **"Add rule"**
3. Configure:
   - **Branch name pattern:** `main`
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
4. Salve as alterações

---

## 📊 Configurando GitHub Actions (CI/CD)

Crie `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Test
      run: npm test
```

---

## 🔍 Comandos Úteis

### Verificar histórico

```bash
# Ver commits recentes
git log --oneline

# Ver mudanças em um commit
git show <commit-hash>

# Ver diferenças antes de commitar
git diff
```

### Desfazer mudanças

```bash
# Desfazer mudanças não commitadas
git checkout -- <arquivo>

# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer último commit (descarta mudanças)
git reset --hard HEAD~1
```

### Sincronizar com remoto

```bash
# Baixar mudanças
git pull origin main

# Ver branches remotas
git branch -r

# Limpar branches antigas
git fetch --prune
```

---

## 🆘 Troubleshooting

### Erro: "Permission denied (publickey)"

Configure SSH keys:

```bash
# Gere uma nova SSH key
ssh-keygen -t ed25519 -C "seu.email@exemplo.com"

# Adicione a key ao ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copie a key pública
cat ~/.ssh/id_ed25519.pub

# Adicione em GitHub → Settings → SSH Keys
```

### Erro: "fatal: remote origin already exists"

```bash
# Remova o remote existente
git remote remove origin

# Adicione novamente
git remote add origin git@github.com:SEU-USUARIO/gemlab-platform.git
```

### Conflitos de merge

```bash
# Veja os arquivos em conflito
git status

# Edite os arquivos e remova os marcadores de conflito
# Depois:
git add <arquivos-resolvidos>
git commit -m "fix: resolve merge conflicts"
```

---

## 📞 Suporte

Se precisar de ajuda:

- 📚 [Git Documentation](https://git-scm.com/doc)
- 📚 [GitHub Docs](https://docs.github.com)
- 💬 Discord: [discord.gg/gemlab](https://discord.gg/gemlab)
- 📧 Email: dev@gemlab.com.br

---

## ✅ Checklist Final

Antes de fazer o push:

- [ ] Todos os arquivos necessários foram adicionados
- [ ] O .gitignore está configurado corretamente
- [ ] O código foi testado localmente
- [ ] A documentação está atualizada
- [ ] O CHANGELOG foi atualizado
- [ ] As credenciais sensíveis foram removidas
- [ ] O commit message segue o padrão Conventional Commits

---

**🎉 Pronto! Seu projeto está no GitHub e pronto para ser compartilhado com o mundo!**

**URL do repositório:** `https://github.com/SEU-USUARIO/gemlab-platform`  
**URL do deploy:** Configure após deploy no Vercel/Netlify  

💎 **GemLab - Transformando a mineração regional em uma indústria inteligente, rastreável e investível** 💎
