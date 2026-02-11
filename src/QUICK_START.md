# ⚡ Quick Start - GemLab Platform

Guia rápido para colocar o projeto no GitHub em 5 minutos.

---

## 🚀 Passo a Passo Rápido

### 1️⃣ Configure o Git (primeira vez apenas)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### 2️⃣ Crie o repositório no GitHub

**Via Web:**
1. Acesse [github.com/new](https://github.com/new)
2. Nome: `gemlab-platform`
3. Descrição: `Plataforma de rastreabilidade e certificação de esmeraldas`
4. Público ou Privado (sua escolha)
5. **NÃO** marque "Initialize with README"
6. Clique em "Create repository"

**Ou via CLI:**
```bash
gh repo create gemlab-platform --public --source=. --remote=origin
```

### 3️⃣ Inicialize e faça o primeiro commit

```bash
# Inicialize o Git
git init

# Adicione todos os arquivos
git add .

# Faça o commit inicial
git commit -m "feat: initial commit - GemLab Platform v1.1.0

- Landing page completa com hero e seções
- Dashboard Gemólogo com wizard de certificação
- Marketplace com filtros avançados
- Painel Garimpeiro com simulador
- Painel Administrativo completo
- Documentação técnica navegável
- Design system verde esmeralda
- Efeitos hover suaves nas imagens
- Contraste otimizado WCAG AAA
- 40+ componentes customizados"
```

### 4️⃣ Conecte ao GitHub e envie

```bash
# Conecte ao repositório remoto (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/gemlab-platform.git

# Renomeie para main
git branch -M main

# Envie para o GitHub
git push -u origin main
```

---

## 🎉 Pronto!

Seu projeto agora está no GitHub!

**URL:** `https://github.com/SEU-USUARIO/gemlab-platform`

---

## 📝 Atualizações Futuras

Sempre que fizer mudanças:

```bash
# 1. Adicione as mudanças
git add .

# 2. Faça o commit (use prefixos: feat, fix, docs, style)
git commit -m "feat: adiciona nova funcionalidade"

# 3. Envie para o GitHub
git push origin main
```

---

## 🌐 Deploy Rápido

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Netlify

```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 📚 Documentação Completa

Para mais detalhes, consulte:

- 📖 **README.md** - Documentação principal
- 🚀 **DEPLOY_INSTRUCTIONS.md** - Instruções detalhadas de deploy
- 📝 **CHANGELOG.md** - Histórico de mudanças
- 🤝 **CONTRIBUTING.md** - Guia de contribuição
- 🏗️ **PROJECT_OVERVIEW.md** - Arquitetura técnica

---

## 🆘 Problemas Comuns

### "Permission denied (publickey)"
Configure SSH: [docs.github.com/ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### "Remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/SEU-USUARIO/gemlab-platform.git
```

### Erro de autenticação HTTPS
Use Personal Access Token: [docs.github.com/tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

---

##  Checklist

- [ ] Git configurado
- [ ] Repositório criado no GitHub
- [ ] Primeiro commit feito
- [ ] Push para o GitHub realizado
- [ ] URL do repositório anotada
- [ ] Deploy configurado (opcional)

---

**💎 GemLab - Agora no GitHub e pronto para o mundo! 💎**

Para dúvidas: **DEPLOY_INSTRUCTIONS.md** tem todos os detalhes.
