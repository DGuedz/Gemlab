# 🚀 GEMLAB Protocol - Deploy Checklist

## Checklist de Deploy para Produção

Use este checklist antes de fazer deploy para produção.

---

## 📋 Pré-Deploy

### Código & Build
- [ ] Todo código commitado e pushed para `main`
- [ ] CI/CD pipeline passou com sucesso (todos os checks verdes)
- [ ] Versão atualizada em `package.json`
- [ ] `CHANGELOG.md` atualizado com release notes
- [ ] Build local funcionando: `npm run build`
- [ ] Preview build testado: `npm run preview`
- [ ] TypeScript sem erros: `npm run type-check`
- [ ] Linter sem erros: `npm run lint`

### Testes
- [ ] Testes manuais em desenvolvimento completados
- [ ] Testado em múltiplos navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Testado em mobile (iOS + Android)
- [ ] Testado fluxo completo de autenticação
- [ ] Testado integração com wallet (MetaMask, WalletConnect)
- [ ] Testado em testnet (Sepolia)

### Segurança
- [ ] `npm audit` sem vulnerabilidades críticas/high
- [ ] Nenhum secret/API key hardcoded
- [ ] Arquivo `.env` NÃO commitado
- [ ] `.env.example` atualizado
- [ ] CORS configurado corretamente
- [ ] Headers de segurança configurados (CSP, HSTS, etc)
- [ ] Rate limiting configurado (se aplicável)

### Documentação
- [ ] `README.md` atualizado
- [ ] Documentação técnica atualizada (`/docs`)
- [ ] API documentation atualizada (se aplicável)
- [ ] Comentários de código revisados

---

## 🔧 Configuração de Ambiente

### Variáveis de Ambiente (Produção)
- [ ] `VITE_SUPABASE_URL` configurada (produção)
- [ ] `VITE_SUPABASE_ANON_KEY` configurada (produção)
- [ ] `VITE_ETHEREUM_RPC_URL` configurada (mainnet ou testnet)
- [ ] `VITE_EAS_CONTRACT_ADDRESS` configurada (mainnet)
- [ ] `VITE_SCHEMA_REGISTRY_ADDRESS` configurada (mainnet)
- [ ] `VITE_ENABLE_TESTNET` = `false` (para produção)
- [ ] Analytics configurado (Google Analytics, se habilitado)
- [ ] Feature flags revisadas

### Supabase
- [ ] Banco de dados em produção configurado
- [ ] RLS (Row Level Security) habilitado
- [ ] Políticas de segurança configuradas
- [ ] Autenticação configurada (providers ativos)
- [ ] Email templates personalizados
- [ ] Storage buckets configurados
- [ ] Backup automático habilitado
- [ ] Edge Functions deployadas (se aplicável)

### Blockchain
- [ ] Smart contracts deployados em mainnet (se aplicável)
- [ ] Contratos verificados no Etherscan
- [ ] Esquemas EAS registrados
- [ ] Endereços de contrato atualizados no frontend
- [ ] Oracle fiscal configurado (COOPESMERALDA)
- [ ] Gas price strategy configurada

---

## 🌐 Deploy

### Plataforma de Hosting
Escolha sua plataforma (marque a escolhida):

#### Vercel
- [ ] Projeto criado no Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Custom domain configurado
- [ ] SSL/TLS ativo
- [ ] Build settings corretos (`npm run build`, output: `dist`)

#### Netlify
- [ ] Projeto criado no Netlify
- [ ] Variáveis de ambiente configuradas
- [ ] Custom domain configurado
- [ ] SSL/TLS ativo
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Redirects configurados (`_redirects` ou `netlify.toml`)

#### AWS Amplify
- [ ] App criada no Amplify
- [ ] Repositório conectado
- [ ] Build settings configurados
- [ ] Variáveis de ambiente configuradas
- [ ] Custom domain configurado

#### Outros (GitHub Pages, Render, etc)
- [ ] Plataforma configurada
- [ ] Build settings corretos
- [ ] Variáveis de ambiente (se suportado)
- [ ] Custom domain (se aplicável)

### DNS & Domínio
- [ ] Domínio registrado (`gemlab.com.br`)
- [ ] DNS records configurados
- [ ] SSL certificado ativo e válido
- [ ] WWW e root domain funcionando
- [ ] Email MX records configurados (se aplicável)

---

## ✅ Pós-Deploy

### Verificação Imediata
- [ ] Site acessível via URL de produção
- [ ] SSL funcionando (HTTPS, cadeado verde)
- [ ] Homepage carregando corretamente
- [ ] Todas as rotas funcionando
- [ ] Assets (imagens, SVGs) carregando
- [ ] Console sem erros críticos

### Funcionalidades Core
- [ ] Autenticação funcionando (signup, login, logout)
- [ ] Dashboard carregando dados
- [ ] Marketplace exibindo ativos
- [ ] Wallet connection funcionando
- [ ] Certificados sendo gerados
- [ ] QR codes funcionando
- [ ] Download de certificados PDF

### Integrações
- [ ] Supabase conectado e funcionando
- [ ] Blockchain RPC respondendo
- [ ] EAS attestations funcionando
- [ ] Analytics tracking (se habilitado)
- [ ] Email transacional funcionando (Supabase)

### Performance
- [ ] Lighthouse score verificado (>90 recomendado)
- [ ] Core Web Vitals aceitáveis
- [ ] Tempo de carregamento < 3s
- [ ] Imagens otimizadas
- [ ] JavaScript bundle size razoável

### SEO & Metadata
- [ ] Meta tags corretas (`<title>`, `<description>`)
- [ ] Open Graph tags para social sharing
- [ ] Favicon presente
- [ ] `robots.txt` configurado
- [ ] `sitemap.xml` gerado (se aplicável)

---

## 📊 Monitoramento

### Configurar Alertas
- [ ] Error tracking (Sentry, LogRocket, ou similar)
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Analytics configurado
- [ ] Logs centralizados
- [ ] Alertas de erro configurados

### Métricas para Monitorar
- [ ] Uptime (deve ser >99.9%)
- [ ] Response time
- [ ] Error rate
- [ ] User engagement
- [ ] Wallet connections
- [ ] Attestation creation rate
- [ ] Certificate downloads

---

## 🔄 Rollback Plan

Em caso de problemas críticos:

### Passos de Rollback
1. [ ] Identificar a issue (logs, monitoring)
2. [ ] Comunicar time e stakeholders
3. [ ] Reverter para última versão estável
   - Vercel/Netlify: Rollback via dashboard
   - Git: `git revert` ou deploy de commit anterior
4. [ ] Verificar que rollback funcionou
5. [ ] Investigar root cause
6. [ ] Fix em desenvolvimento
7. [ ] Re-deploy com fix

### Contatos de Emergência
- DevOps Lead: [email/phone]
- CTO: [email/phone]
- Supabase Support: support@supabase.com
- Vercel Support: support@vercel.com

---

## 📢 Comunicação

### Pré-Deploy
- [ ] Time técnico notificado
- [ ] Stakeholders informados (se deploy major)
- [ ] Usuários avisados (se downtime esperado)

### Pós-Deploy
- [ ] Time confirmado sucesso
- [ ] Release notes publicadas
- [ ] Changelog atualizado
- [ ] Anúncio em redes sociais (se relevante)
- [ ] Email para usuários (se features importantes)

---

## 🎯 Compliance & Legal (GEMLAB Específico)

### Regulatório
- [ ] Termos de uso atualizados
- [ ] Política de privacidade atualizada
- [ ] LGPD compliance verificado
- [ ] CVM compliance mantido (não oferece investimento)
- [ ] Disclaimers legais presentes

### Smart Contracts (Se Deploy de Contratos)
- [ ] Auditoria de segurança completada
- [ ] Multi-sig wallet configurado
- [ ] Pausable/upgradeability considerado
- [ ] Documentação on-chain atualizada
- [ ] Contratos verificados no explorer

---

## 📝 Notas de Deploy

**Deploy Date:** _______________  
**Version:** _______________  
**Deployed by:** _______________  
**Environment:** Production / Staging  

**Issues encontradas:**
- 
- 

**Follow-up necessário:**
- 
- 

---

## ✅ Checklist Final

Antes de marcar como completo:

- [ ] Todos os itens acima verificados
- [ ] Nenhuma issue crítica pendente
- [ ] Monitoring ativo e funcionando
- [ ] Rollback plan testado e pronto
- [ ] Documentação de deploy atualizada

**Status:** ☐ Pronto para Deploy | ☐ Deploy em Progresso | ☐ Deploy Completo

---

**🎉 Deploy bem-sucedido! Monitore por 24h para garantir estabilidade.**
