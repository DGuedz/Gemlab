# 🤝 Guia de Contribuição - GemLab

Obrigado por considerar contribuir com o GemLab! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Posso Contribuir?](#como-posso-contribuir)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)

---

## 📜 Código de Conduta

Este projeto segue um código de conduta para garantir um ambiente acolhedor e respeitoso para todos. Ao participar, você concorda em seguir as seguintes diretrizes:

- ✅ Seja respeitoso e cortês
- ✅ Aceite críticas construtivas
- ✅ Foque no que é melhor para a comunidade
- ✅ Mostre empatia com outros membros
- ❌ Não use linguagem ofensiva ou inapropriada
- ❌ Não faça ataques pessoais ou políticos
- ❌ Não assédio público ou privado

---

## 🎯 Como Posso Contribuir?

### 1. Reportando Bugs

Se você encontrou um bug, por favor:

1. **Verifique** se o bug já não foi reportado nas [Issues](https://github.com/seu-usuario/gemlab-platform/issues)
2. **Crie uma nova issue** com os seguintes detalhes:
   - Título claro e descritivo
   - Passos para reproduzir o bug
   - Comportamento esperado vs atual
   - Screenshots (se aplicável)
   - Ambiente (navegador, OS, versão)

### 2. Sugerindo Melhorias

Para sugerir melhorias:

1. **Verifique** se a sugestão já não existe nas Issues
2. **Crie uma issue** com tag `enhancement`
3. **Descreva** claramente o problema que a sugestão resolve
4. **Explique** por que essa melhoria seria útil

### 3. Contribuindo com Código

#### Setup do Ambiente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/gemlab-platform.git
cd gemlab-platform

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

#### Fluxo de Trabalho

1. **Fork** o projeto
2. **Crie uma branch** para sua feature:
   ```bash
   git checkout -b feature/minha-feature
   ```
3. **Faça suas mudanças** seguindo os padrões de código
4. **Commit** suas mudanças:
   ```bash
   git commit -m "feat: adiciona minha feature"
   ```
5. **Push** para sua branch:
   ```bash
   git push origin feature/minha-feature
   ```
6. **Abra um Pull Request**

---

## 🏗️ Estrutura do Projeto

```
gemlab-platform/
├── components/           # Componentes React
│   ├── ui/              # Componentes Shadcn/ui
│   ├── dashboard/       # Dashboards de usuários
│   ├── marketplace/     # Marketplace
│   ├── miner/           # Painel do garimpeiro
│   ├── admin/           # Painel administrativo
│   └── institutional/   # Documentação oficial
├── styles/              # Estilos globais
├── guidelines/          # Documentação técnica
└── App.tsx             # Entry point
```

---

## 📝 Padrões de Código

### TypeScript

- ✅ Use TypeScript para todos os novos arquivos
- ✅ Defina tipos explícitos para props
- ✅ Evite `any` - use tipos específicos
- ✅ Use interfaces para objetos complexos

```typescript
// ✅ Bom
interface StoneProps {
  id: string;
  weight: number;
  color: string;
}

export function Stone({ id, weight, color }: StoneProps) {
  // ...
}

// ❌ Evite
export function Stone({ id, weight, color }: any) {
  // ...
}
```

### React

- ✅ Use functional components
- ✅ Use hooks apropriados (useState, useEffect, useMemo)
- ✅ Extraia lógica complexa em custom hooks
- ✅ Memoize componentes pesados com React.memo

```typescript
// ✅ Bom
export function MyComponent() {
  const [state, setState] = useState(0);
  
  return <div>{state}</div>;
}

// ❌ Evite
export class MyComponent extends React.Component {
  // ...
}
```

### Tailwind CSS

- ✅ Use classes utilitárias do Tailwind
- ✅ Siga a paleta de cores definida:
  - Verde Esmeralda: `text-[#006b4f]` ou `bg-[#006b4f]`
  - Verde Escuro: `text-[#014733]` ou `bg-[#014733]`
  - Dourado: `text-[#caa34b]` ou `bg-[#caa34b]`
  - Preto Mineral: `text-[#1b1b1b]` ou `bg-[#1b1b1b]`
- ✅ Use `text-gray-700/800` para textos em fundos brancos
- ❌ **NÃO** use classes de tipografia (text-xl, font-bold, leading-*) a menos que explicitamente necessário

```tsx
// ✅ Bom
<div className="p-4 bg-white border-2 border-[#e5e7eb]">
  <h2 className="text-[#1b1b1b] mb-2">Título</h2>
  <p className="text-gray-700">Descrição</p>
</div>

// ❌ Evite sobrescrever tipografia global
<div className="p-4 bg-white">
  <h2 className="text-3xl font-bold">Título</h2>
  <p className="text-base leading-relaxed">Descrição</p>
</div>
```

### Acessibilidade

- ✅ Use elementos semânticos (button, nav, section)
- ✅ Adicione atributos ARIA quando necessário
- ✅ Garanta contraste WCAG AAA (7:1 para textos normais)
- ✅ Teste com leitores de tela

```tsx
// ✅ Bom
<button
  className="bg-[#006b4f] text-white"
  aria-label="Comprar esmeralda"
  onClick={handleBuy}
>
  Comprar
</button>

// ❌ Evite
<div onClick={handleBuy}>Comprar</div>
```

### Nomenclatura

- **Componentes:** PascalCase (`MyComponent.tsx`)
- **Funções:** camelCase (`handleClick`)
- **Constantes:** UPPER_SNAKE_CASE (`MAX_WEIGHT`)
- **Arquivos:** kebab-case para não-componentes (`use-stone-data.ts`)

### Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: adiciona filtro de cor no marketplace
fix: corrige cálculo do SpectralHash
docs: atualiza README com instruções de deploy
style: ajusta contraste dos cards
refactor: extrai lógica de certificação em hook
perf: otimiza rendering da timeline
test: adiciona testes para o wizard
chore: atualiza dependências
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação (não afeta lógica)
- `refactor`: Refatoração de código
- `perf`: Melhoria de performance
- `test`: Testes
- `chore`: Tarefas de manutenção

---

## 🔄 Processo de Pull Request

### Antes de Submeter

- ✅ Seu código segue os padrões do projeto
- ✅ Você testou as mudanças em diferentes navegadores
- ✅ Você testou em mobile e desktop
- ✅ Você atualizou a documentação (se necessário)
- ✅ Seus commits seguem o padrão Conventional Commits

### Template de PR

```markdown
## Descrição
[Descreva as mudanças de forma clara e concisa]

## Tipo de Mudança
- [ ] 🐛 Bug fix
- [ ] ✨ Nova funcionalidade
- [ ] 💥 Breaking change
- [ ] 📝 Documentação

## Como Testar
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

## Checklist
- [ ] Meu código segue os padrões do projeto
- [ ] Testei em Chrome, Firefox e Safari
- [ ] Testei em mobile e desktop
- [ ] Atualizei a documentação
- [ ] Não há warnings no console

## Screenshots
[Adicione screenshots se aplicável]
```

### Revisão

- Seu PR será revisado por pelo menos um mantenedor
- Responda aos comentários de forma construtiva
- Faça as alterações solicitadas
- Aguarde aprovação e merge

---

## 🐛 Reportando Bugs

### Template de Bug Report

```markdown
**Descrição do Bug**
[Descrição clara e concisa do bug]

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Scroll até '...'
4. Veja o erro

**Comportamento Esperado**
[O que deveria acontecer]

**Comportamento Atual**
[O que realmente acontece]

**Screenshots**
[Adicione screenshots do problema]

**Ambiente:**
- OS: [ex: Windows 10, macOS 14]
- Navegador: [ex: Chrome 120, Safari 17]
- Versão do Projeto: [ex: 1.1.0]

**Informações Adicionais**
[Qualquer outra informação relevante]
```

---

## 💡 Sugerindo Melhorias

### Template de Feature Request

```markdown
**Qual problema essa funcionalidade resolve?**
[Descrição clara do problema]

**Solução Proposta**
[Descrição da solução que você gostaria de ver]

**Alternativas Consideradas**
[Outras soluções que você considerou]

**Por que isso é importante?**
[Explique o valor dessa funcionalidade]

**Informações Adicionais**
[Mockups, exemplos, referências]
```

---

## 🎨 Design System

Ao criar novos componentes, siga o design system:

### Cores
```css
--emerald-green: #006b4f;
--emerald-dark: #014733;
--gold-soft: #caa34b;
--mineral-black: #1b1b1b;
--technical-gray: #e5e7eb;
```

### Tipografia
- Interface: font-['Inter']
- Código: font-mono

### Espaçamento
- Pequeno: p-2, gap-2
- Médio: p-4, gap-4
- Grande: p-6, gap-6
- Extra Grande: p-8, gap-8

### Bordas
- Cards: rounded-xl (12px)
- Botões: rounded-lg (8px)
- Badges: rounded-full

---

## 📞 Contato

Dúvidas sobre contribuição?

- 💬 Discord: [discord.gg/gemlab](https://discord.gg/gemlab)
- 📧 Email: dev@gemlab.com.br
- 🐦 Twitter: [@gemlab_oficial](https://twitter.com/gemlab_oficial)

---

## 🙏 Reconhecimento

Todos os contribuidores serão reconhecidos no README.md e no site oficial do projeto.

**Obrigado por contribuir com o GemLab! 💎**
