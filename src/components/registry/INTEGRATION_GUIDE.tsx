/**
 * INTEGRATION GUIDE - Registry & Commercial Portal
 * 
 * Este arquivo contém exemplos de como integrar as novas páginas
 * do Registry + Portal Comercial no MainApp.tsx
 */

import { RegistryGalleryPage } from "./registry/RegistryGalleryPage";
import { CertificationDetailsPage } from "./registry/CertificationDetailsPage";
import { CommercialPortal } from "./commercial/CommercialPortal";

// ============================================================
// 1. ADICIONAR AO TYPE PAGE (linha ~40 do MainApp.tsx)
// ============================================================

/*
type Page = 
  | "home" 
  | "institutional" 
  | "lab-portal" 
  | "gemologist" 
  | "marketplace" 
  | "miner" 
  | "admin" 
  | "user-dashboard" 
  | "gem-detail" 
  | "ecosystem" 
  | "oracle-dashboard" 
  | "governance" 
  | "projects" 
  | "coop-dashboard" 
  | "museum" 
  | "marketplace-infrastructure" 
  | "tourism-routes" 
  | "digital-platform" 
  | "municipal-market" 
  | "roadmap" 
  | "emerald-verification"
  | "registry-gallery"          // NOVO ✅
  | "certification-details"     // NOVO ✅
  | "commercial-portal";        // NOVO ✅
*/

// ============================================================
// 2. ADICIONAR AO SWITCH renderPage() (linha ~83 do MainApp.tsx)
// ============================================================

/*
const renderPage = () => {
  switch (currentPage) {
    // ... casos existentes ...
    
    case "registry-gallery":
      return (
        <>
          <Navbar 
            currentPage={currentPage}
            showBackButton={pageHistory.length > 0}
            onGoBack={goBack}
            onNavigateToHome={() => navigateToPage("home")}
            onNavigateToInstitutional={() => navigateToPage("institutional")}
            onNavigateToLabPortal={() => navigateToPage("lab-portal")}
            onNavigateToEcosystem={() => navigateToPage("ecosystem")}
            onNavigateToProjects={() => navigateToPage("projects")}
            onNavigateToRoadmap={() => navigateToPage("roadmap")}
            onNavigateToGemologist={() => navigateToPage("gemologist")}
            onNavigateToMarketplace={() => navigateToPage("marketplace")}
            onNavigateToMiner={() => navigateToPage("miner")}
          />
          <RegistryGalleryPage />
          <Footer 
            onNavigateToInstitutional={() => navigateToPage("institutional")}
            onNavigateToEcosystem={() => navigateToPage("ecosystem")}
            onNavigateToProjects={() => navigateToPage("projects")}
          />
        </>
      );

    case "certification-details":
      return (
        <>
          <Navbar 
            currentPage={currentPage}
            showBackButton={pageHistory.length > 0}
            onGoBack={goBack}
            onNavigateToHome={() => navigateToPage("home")}
            onNavigateToInstitutional={() => navigateToPage("institutional")}
            onNavigateToLabPortal={() => navigateToPage("lab-portal")}
            onNavigateToEcosystem={() => navigateToPage("ecosystem")}
            onNavigateToProjects={() => navigateToPage("projects")}
            onNavigateToRoadmap={() => navigateToPage("roadmap")}
            onNavigateToGemologist={() => navigateToPage("gemologist")}
            onNavigateToMarketplace={() => navigateToPage("marketplace")}
            onNavigateToMiner={() => navigateToPage("miner")}
          />
          <CertificationDetailsPage />
          <Footer 
            onNavigateToInstitutional={() => navigateToPage("institutional")}
            onNavigateToEcosystem={() => navigateToPage("ecosystem")}
            onNavigateToProjects={() => navigateToPage("projects")}
          />
        </>
      );

    case "commercial-portal":
      // Nota: Commercial Portal não precisa de Navbar/Footer pois tem UI própria
      return <CommercialPortal />;

    // ... outros casos ...
  }
};
*/

// ============================================================
// 3. ADICIONAR BOTÕES DE NAVEGAÇÃO NO HERO/NAVBAR/FOOTER
// ============================================================

/*
// Exemplo para Hero.tsx ou seção principal:
<Button 
  onClick={() => navigateToPage("registry-gallery")}
  className="bg-[#006b4f] text-white hover:bg-[#014733]"
  size="lg"
>
  <Gem className="h-5 w-5 mr-2" />
  Explorar Registry de Certificações
</Button>

// Exemplo para Navbar.tsx (adicionar ao menu):
<button
  onClick={onNavigateToRegistryGallery}
  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
>
  <Gem className="h-4 w-4 inline mr-2" />
  Registry de Certificações
</button>

// Exemplo para Footer.tsx (seção de links):
<div>
  <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-3">
    Registry Público
  </h4>
  <ul className="space-y-2">
    <li>
      <button
        onClick={onNavigateToRegistryGallery}
        className="font-['Inter'] text-sm text-gray-600 hover:text-[#006b4f]"
      >
        Galeria de Certificações
      </button>
    </li>
    <li>
      <button
        onClick={onNavigateToCommercialPortal}
        className="font-['Inter'] text-sm text-gray-600 hover:text-[#006b4f]"
      >
        Portal Comercial
      </button>
    </li>
  </ul>
</div>
*/

// ============================================================
// 4. ATUALIZAR NAVBAR.TSX PROPS INTERFACE
// ============================================================

/*
interface NavbarProps {
  // ... props existentes ...
  onNavigateToRegistryGallery?: () => void;    // NOVO ✅
  onNavigateToCommercialPortal?: () => void;   // NOVO ✅
}
*/

// ============================================================
// 5. CONECTAR COM LatestCertifications.tsx
// ============================================================

/*
// No componente LatestCertifications.tsx, atualizar os botões:

// Botão "Ver Todas":
<Button
  variant="outline"
  className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
  onClick={() => navigateToPage("registry-gallery")}
>
  Ver Todas
  <ExternalLink className="ml-2 h-4 w-4" />
</Button>

// Botão "Ver Detalhes" em cada card:
<Button
  className="w-full bg-[#006b4f] text-white hover:bg-[#014733]"
  onClick={() => navigateToPage("certification-details")}
>
  Ver Detalhes
</Button>
*/

// ============================================================
// 6. EXEMPLO DE FLUXO DE NAVEGAÇÃO COMPLETO
// ============================================================

/*
FLUXO DO USUÁRIO:

1. Home → Hero Section
   ↓ Click "Explorar Registry"
   
2. Registry Gallery Page
   ↓ Filtros + busca
   ↓ Click em um card de esmeralda
   
3. Certification Details Page
   ↓ Ver informações completas
   ↓ Click "Manifestar Interesse Comercial"
   
4. Se não credenciado:
   → Modal de credenciamento
   
   Se credenciado:
   → Commercial Portal (login)
   ↓
5. Commercial Portal
   ↓ Dashboard
   ↓ "Reservar Consulta"
   ↓ Contato com COOPESMERALDA
*/

// ============================================================
// 7. INTEGRAÇÃO COM SUPABASE (FUTURO)
// ============================================================

/*
// Exemplo de query para buscar esmeraldas certificadas:

const { data: emeralds, error } = await supabase
  .from('certified_emeralds')
  .select('*')
  .eq('status', 'Disponível')
  .order('certification_date', { ascending: false })
  .range(0, 11); // Primeiros 12 resultados

// Exemplo de mutation para criar reserva de consulta:

const { data, error } = await supabase
  .from('consultation_reservations')
  .insert({
    emerald_id: selectedEmerald.id,
    user_id: user.id,
    company_name: 'Joalheria Premium LTDA',
    status: 'pending',
    expires_at: new Date(Date.now() + 72 * 60 * 60 * 1000), // 72h
  });
*/

// ============================================================
// 8. TYPES COMPARTILHADOS (criar em /types/registry.ts)
// ============================================================

/*
export interface CertifiedEmerald {
  id: string;
  spectral_hash: string;
  image_url: string;
  weight: number;
  color: string;
  clarity: string;
  cut: string;
  origin: string;
  certification_date: string;
  batch_id: string;
  status: "Disponível" | "Reservado" | "Custodiado";
  availability: "Público" | "Credenciado";
  blockchain_tx?: string;
  created_at: string;
  updated_at: string;
}

export interface ConsultationReservation {
  id: string;
  emerald_id: string;
  user_id: string;
  company_name: string;
  status: "pending" | "approved" | "rejected" | "expired";
  message?: string;
  expires_at: string;
  created_at: string;
  updated_at: string;
}
*/

export {};
