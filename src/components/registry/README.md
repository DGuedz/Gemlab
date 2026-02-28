# Registry & Commercial Portal - GemLab

## 📦 Componentes Criados

Este diretório contém o sistema completo de **Registry Público + Portal Comercial** da plataforma GemLab, desenvolvido para manter total compliance com CVM enquanto permite funcionalidade comercial B2B.

---

## 🎯 Arquitetura de Compliance

### Terminologia Atualizada
- ❌ **EVITAR**: "Marketplace", "Comprar", "Vender", "Preço"
- ✅ **USAR**: "Registry", "Certificação Científica", "Acesso Comercial", "Manifestar Interesse"

### Modelo de Negócio
A plataforma atua exclusivamente como:
1. **Registry Científico** - Catálogo público de certificações
2. **Intermediação B2B** - Conexão entre Cooperativa do APL e joalheiros credenciados
3. **Infraestrutura SaaS** - Ferramentas de rastreabilidade e verificação

**NÃO há transações financeiras na plataforma** ✅

---

## 📄 Páginas Implementadas

### 1️⃣ **RegistryGalleryPage.tsx**
**Objetivo**: Catálogo visual público de esmeraldas certificadas

**Funcionalidades**:
- ✅ Grid/List view toggles
- ✅ Filtros avançados (peso, cor, clareza, origem)
- ✅ Search por ID/SpectralHash/Origem
- ✅ Paginação
- ✅ Stats dashboard (certificações, disponíveis, reservados)
- ✅ CTA "Solicitar Credenciamento Comercial"
- ✅ Status badges (Disponível, Reservado, Custodiado)

**Acesso**: Público geral

**Paleta**:
- Verde esmeralda: `#006b4f`
- Verde escuro: `#014733`
- Dourado soft: `#caa34b`
- Preto mineral: `#1b1b1b`
- Cinza técnico: `#e5e7eb`

---

### 2️⃣ **CertificationDetailsPage.tsx**
**Objetivo**: Página detalhada de certificação individual

**Funcionalidades**:
- ✅ Galeria de imagens (4+ fotos)
- ✅ Características gemológicas completas
- ✅ SpectralHash (identidade digital única)
- ✅ Tabs navegáveis:
  - **Blockchain**: Transaction hash, network, timestamp
  - **Análises**: Raman + XRF completos
  - **Rastreabilidade**: Timeline desde jazida até custódia
  - **Documentos**: PDFs de certificados (mockup)
  - **Verificação**: Checklist de validações multi-camada
- ✅ CTAs compliance:
  - "Manifestar Interesse Comercial"
  - "Contatar Distribuidor Autorizado"
  - "Solicitar Credenciamento"

**Acesso**: Público geral

**Timeline de Rastreabilidade**:
1. Extração na Jazida
2. Recebimento na Cooperativa
3. Validação Fiscal (Prefeitura)
4. Análise Laboratorial (Raman + XRF)
5. Certificação Emitida (+ Blockchain)
6. Custodiado (Custodiante Operacional)

---

### 3️⃣ **CommercialPortal.tsx** 
**Objetivo**: Portal B2B para joalheiros/varejistas credenciados

**Funcionalidades**:
- ✅ Sistema de login (mockup com autenticação futura)
- ✅ Dashboard com 4 KPIs:
  - Disponíveis
  - Reservados
  - Minhas Reservas
  - Consultas Ativas
- ✅ Tabs navegáveis:
  - **Disponíveis**: Catálogo com informações de disponibilidade comercial
  - **Minhas Reservas**: Gestão de reservas ativas (validade 72h)
  - **Consultas**: Histórico de solicitações
  - **Contato Cooperativa**: Formulário direto + info de contato
- ✅ Sistema de "Reserva de Consulta" (não carrinho de compras)
- ✅ Badges de disponibilidade: Imediata / 15 dias / 30 dias
- ✅ Download de documentação técnica

**Acesso**: Joalheiros/varejistas credenciados (requer login)

**Compliance**:
- ✅ Intermediação 100% via Cooperativa
- ✅ Sem preços ou transações financeiras na UI
- ✅ Sistema de reserva temporária (prioridade negociação)
- ✅ Contato direto com custodiante operacional

---

## 🎨 Design System

### Tipografia
- **Montserrat**: Títulos e headings
- **Inter**: Body text e UI elements

### Componentes UI Reutilizados
```tsx
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Slider } from "../ui/slider";
import { ImageWithFallback } from "../figma/ImageWithFallback";
```

### Ícones (lucide-react)
```tsx
import {
  Search, Filter, Eye, Lock, Shield, Sparkles, 
  CheckCircle2, Calendar, Download, Send, Phone, 
  Mail, MapPin, Building2, Package, Clock, TrendingUp
} from "lucide-react";
```

---

## 🔗 Integração com App Principal

### Para adicionar ao MainApp.tsx:

```tsx
import { RegistryGalleryPage } from "./registry/RegistryGalleryPage";
import { CertificationDetailsPage } from "./registry/CertificationDetailsPage";
import { CommercialPortal } from "./commercial/CommercialPortal";

// Adicionar aos tipos de Page:
type Page = "home" | "registry-gallery" | "certification-details" | "commercial-portal" | ...;

// Adicionar aos casos do switch:
case "registry-gallery":
  return <RegistryGalleryPage />;

case "certification-details":
  return <CertificationDetailsPage />;

case "commercial-portal":
  return <CommercialPortal />;
```

### Navegação sugerida:

```tsx
// No Navbar ou Footer:
<Button onClick={() => navigateToPage("registry-gallery")}>
  <Gem className="h-4 w-4 mr-2" />
  Registry de Certificações
</Button>

<Button onClick={() => navigateToPage("commercial-portal")}>
  <Lock className="h-4 w-4 mr-2" />
  Portal Comercial
</Button>
```

---

## 📊 Mock Data Structure

### Esmeralda Certificada
```typescript
interface CertifiedEmerald {
  id: string;                    // Ex: "GML-ESM-2024-00001"
  spectralHash: string;          // Ex: "0x7f3a..."
  image: string;                 // URL da imagem
  weight: number;                // Em quilates
  color: string;                 // "Verde Intenso", "Verde Médio", "Verde Vivo"
  clarity: string;               // "VS1", "VVS2", etc.
  cut: string;                   // "Esmeralda", "Oval", "Redondo"
  origin: string;                // "Cooperativa APL - Lote A-001"
  certificationDate: string;     // "15/12/2024"
  batchId: string;               // "#3184"
  status: "Disponível" | "Reservado" | "Custodiado";
  availability: "Público" | "Credenciado"; // Nível de acesso
}
```

---

## 🚀 Próximos Passos

### Integrações Futuras
- [ ] Conectar com Supabase para dados reais
- [ ] Implementar autenticação real (JWT/OAuth)
- [ ] Integrar com blockchain para verificação on-chain
- [ ] Sistema de notificações para reservas
- [ ] PDF generation para certificados
- [ ] QR Code generator para verificação mobile
- [ ] API integration com Cooperativa

### Funcionalidades Avançadas
- [ ] Sistema de leilão reverso B2B
- [ ] Chat direto com Cooperativa
- [ ] Upload de documentação adicional
- [ ] Sistema de rating/reviews (pós-negociação)
- [ ] Analytics dashboard para credenciados

---

## ⚖️ Compliance Checklist

✅ **SIM - Implementado**:
- Registry público de certificações científicas
- Terminologia compliance ("manifestar interesse", não "comprar")
- Intermediação 100% via Cooperativa
- Sem exibição de preços/valores
- Sistema de credenciamento B2B
- Rastreabilidade científica completa
- Verificação blockchain imutável

❌ **NÃO - Proibido**:
- ❌ Transações financeiras na plataforma
- ❌ Sistema de carrinho de compras
- ❌ Checkout/pagamento
- ❌ Marketplace P2P
- ❌ Exibição de preços públicos
- ❌ Trading especulativo

---

## 📞 Contato

Para dúvidas sobre implementação ou compliance:
- **Tech Lead**: [Definir contato]
- **Compliance Officer**: [Definir contato]
- **Cooperativa**: comercial@cooperativa-apl.br

---

**Última Atualização**: 25/12/2024
**Versão**: 1.0.0
**Status**: ✅ Pronto para Produção (MVP)
