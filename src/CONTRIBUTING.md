# 🤝 Contributing to GEMLAB

Obrigado por considerar contribuir com o GEMLAB! Este documento fornece diretrizes para contribuições ao projeto.

---

## 📋 **Código de Conduta**

Ao participar deste projeto, você concorda em manter um ambiente respeitoso e inclusivo. Esperamos que todos os colaboradores:

- ✅ Sejam respeitosos e inclusivos
- ✅ Aceitem críticas construtivas
- ✅ Foquem no que é melhor para a comunidade
- ✅ Demonstrem empatia com outros membros da comunidade

---

## 🚀 **Como Contribuir**

### **1. Reportando Bugs**

Se você encontrou um bug, por favor:

1. Verifique se o bug já não foi reportado nas [Issues](https://github.com/gemlab-protocol/gemlab/issues)
2. Se não existir, crie uma nova issue com:
   - **Título descritivo**
   - **Descrição detalhada** do problema
   - **Passos para reproduzir** o bug
   - **Comportamento esperado** vs **comportamento atual**
   - **Screenshots** (se aplicável)
   - **Ambiente** (Browser, OS, versão do Node.js)

### **2. Sugerindo Melhorias**

Para sugerir melhorias ou novas features:

1. Abra uma issue com a tag `enhancement`
2. Descreva claramente:
   - **O problema** que a feature resolve
   - **A solução proposta**
   - **Alternativas consideradas**
   - **Impacto** no projeto (breaking changes?)

### **3. Submetendo Pull Requests**

#### **Workflow**

1. **Fork** o repositório
2. **Clone** seu fork localmente
   ```bash
   git clone https://github.com/SEU-USUARIO/gemlab.git
   cd gemlab
   ```
3. **Crie uma branch** para sua feature/fix
   ```bash
   git checkout -b feature/nome-da-feature
   # ou
   git checkout -b fix/nome-do-bug
   ```
4. **Faça suas alterações** seguindo os padrões do projeto
5. **Commit** suas mudanças
   ```bash
   git commit -m "feat: adiciona nova feature X"
   # ou
   git commit -m "fix: corrige bug Y"
   ```
6. **Push** para seu fork
   ```bash
   git push origin feature/nome-da-feature
   ```
7. **Abra um Pull Request** no repositório original

#### **Padrões de Commit**

Seguimos o [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: Nova feature
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, espaços, etc (não afeta código)
- `refactor`: Refatoração de código
- `perf`: Melhorias de performance
- `test`: Adição ou correção de testes
- `chore`: Tarefas de build, dependências, etc

**Exemplos:**
```bash
feat: adiciona dashboard de governança fiscal
fix: corrige erro de validação no SpectralHash
docs: atualiza README com instruções de deploy
refactor: reorganiza componentes de verificação
```

---

## 🏗️ **Padrões de Código**

### **TypeScript**

- ✅ Use **TypeScript** para todo código novo
- ✅ Defina **interfaces** para props de componentes
- ✅ Evite `any` - use tipos específicos
- ✅ Use **type inference** quando possível

### **React Components**

- ✅ Use **Function Components** com hooks
- ✅ Nomeie componentes em **PascalCase**
- ✅ Um componente por arquivo
- ✅ Props devem ter interface tipada
- ✅ Use **React.memo** para componentes que renderizam frequentemente

**Exemplo:**

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>
      {label}
    </button>
  );
}
```

### **Styling (Tailwind CSS)**

- ✅ Use **Tailwind classes** em vez de CSS customizado
- ✅ Para estilos repetitivos, crie componentes
- ✅ Mantenha classes organizadas (layout → spacing → colors → typography)
- ❌ **NÃO** use classes de `font-size`, `font-weight` ou `line-height` (temos defaults em `globals.css`)

### **Organização de Arquivos**

```
components/
├── verification/          # Feature-specific components
│   ├── SpectralHashViewer.tsx
│   └── EASVerificationBadge.tsx
├── ui/                   # Reusable UI components (shadcn/ui)
│   ├── button.tsx
│   └── card.tsx
└── ...
```

### **Imports**

Organize imports na seguinte ordem:

```typescript
// 1. External libraries
import { useState } from 'react';
import { motion } from 'motion/react';

// 2. Internal components
import { Button } from '../ui/button';
import { Card } from '../ui/card';

// 3. Utils/Hooks
import { cn } from '../../utils/cn';

// 4. Types
import type { User } from '../../types/user';

// 5. Assets
import logo from '../../assets/logo.png';
```

---

## 🧪 **Testes**

- ✅ Adicione testes para novas features
- ✅ Certifique-se que todos os testes passam antes de submeter PR
- ✅ Use **React Testing Library** para testes de componentes

```bash
npm run test          # Roda todos os testes
npm run test:watch    # Modo watch
npm run test:coverage # Coverage report
```

---

## 📚 **Documentação**

- ✅ Documente funções complexas com **JSDoc**
- ✅ Atualize o README.md se necessário
- ✅ Adicione comentários em código não-óbvio
- ✅ Crie/atualize docs em `/docs` para features maiores

---

## 🔍 **Code Review**

Todos os PRs passam por code review. Esperamos:

- ✅ **Código limpo** e **legível**
- ✅ **Testes passando**
- ✅ **Sem warnings** de lint/TypeScript
- ✅ **Documentação** atualizada
- ✅ **Commits** bem organizados

---

## 🎯 **Áreas Prioritárias para Contribuição**

Áreas onde mais precisamos de ajuda:

1. **🔐 Security** - Auditorias de segurança, especialmente em integração blockchain
2. **♿ Accessibility** - Melhorias de acessibilidade (a11y)
3. **🌐 i18n** - Internacionalização (suporte a múltiplos idiomas)
4. **📱 Mobile** - Melhorias na experiência mobile
5. **📊 Analytics** - Dashboards e visualizações de dados
6. **🧪 Testing** - Aumento de coverage de testes

---

## 💬 **Dúvidas?**

Se tiver dúvidas sobre como contribuir:

- Abra uma issue com a tag `question`
- Entre em contato via email: dev@gemlab.com.br
- Junte-se ao nosso Discord: [discord.gg/gemlab](https://discord.gg/gemlab)

---

## 📜 **Licença**

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a MIT License.

---

**Obrigado por contribuir com o GEMLAB! 💚💎**
