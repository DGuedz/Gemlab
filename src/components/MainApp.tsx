import { useState } from "react";
import { OracleFiscalDashboard } from "./oracle/OracleFiscalDashboard";
import { GovernancePage } from "./governance/GovernancePage";
import { ProjectsPage } from "./projects/ProjectsPage";
import { CoopDashboard } from "./coop/CoopDashboard";
import LabPortal from "../LabPortal";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Gem, Home, Microscope, ShoppingBag, Mountain, Shield, BookOpen, Menu, X, ArrowLeft } from "lucide-react";
import logo from "figma:asset/cde6329a6c4b255a7d190dd68be01f6589014264.png";
import { InstitutionalPage } from "./institutional/InstitutionalPage";
import { GemologistDashboard } from "./dashboard/GemologistDashboard";
import { CertifiedGemsRegistry } from "./registry/CertifiedGemsRegistry";
import { MinerDashboard } from "./miner/MinerDashboard";
import { AdminPanel } from "./admin/AdminPanel";
import { UserDashboard } from "./dashboard/UserDashboard";
import { GemDetailPage } from "./GemDetailPage";
import { EcosystemPage } from "./ecosystem/EcosystemPage";
import { HomePage } from "./HomePage";
import { RastreabilidadePage } from "./pages/RastreabilidadePage";
import { GovernancaFiscalPage } from "./pages/GovernancaFiscalPage";
import { SustentabilidadePage } from "./pages/SustentabilidadePage";
import { EquipeParcerosPage } from "./pages/EquipeParcerosPage";
import { ImpactDashboard } from "./impact/ImpactDashboard";
import { ROICalculator } from "./calculators/ROICalculator";
import { ComplianceDashboard } from "./compliance/ComplianceDashboard";
import { QRVerificationSystem } from "./verification/QRVerificationSystem";
import { SocialProofPage } from "./social-proof/SocialProofPage";
import { AnalyticsDashboard } from "./analytics/AnalyticsDashboard";
import { HeaderComponent } from "./HeaderComponent";

type Page = "home" | "institutional" | "lab-portal" | "gemologist" | "marketplace" | "miner" | "admin" | "user-dashboard" | "gem-detail" | "ecosystem" | "oracle-dashboard" | "governance" | "projects" | "coop-dashboard" | "rastreabilidade" | "governanca-fiscal" | "sustentabilidade" | "equipe-parceiros" | "impact-dashboard" | "roi-calculator" | "compliance-dashboard" | "qr-verification" | "social-proof" | "analytics-dashboard";

export function MainApp() {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedGemId, setSelectedGemId] = useState<string | null>(null);
  const [pageHistory, setPageHistory] = useState<Page[]>(["home"]);
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Função para navegar com histórico
  const navigateToPage = (page: Page, gemId?: string) => {
    if (gemId) {
      setSelectedGemId(gemId);
    }
    if (page !== currentPage) {
      setPageHistory([...pageHistory, currentPage]);
      setCurrentPage(page);
    }
  };

  // Função para voltar
  const goBack = () => {
    if (pageHistory.length > 0) {
      const newHistory = [...pageHistory];
      const previousPage = newHistory.pop();
      setPageHistory(newHistory);
      if (previousPage) {
        setCurrentPage(previousPage);
      }
    }
  };

  const renderNavigation = () => {
    // Páginas que NÃO mostram header (já têm HeaderComponent próprio)
    if (currentPage === "home" || currentPage === "rastreabilidade" || currentPage === "governanca-fiscal" || currentPage === "sustentabilidade" || currentPage === "equipe-parceiros") {
      return null;
    }
    
    // Demais páginas mostram HeaderComponent padronizado
    return (
      <HeaderComponent 
        onNavigateToRegistry={() => navigateToPage("marketplace")}
        onNavigateToInstitutional={() => navigateToPage("institutional")}
        onNavigateToEcosystem={() => navigateToPage("ecosystem")}
        onNavigateToProjects={() => navigateToPage("projects")}
        onNavigateToRastreabilidade={() => navigateToPage("rastreabilidade")}
        onNavigateToGovernancaFiscal={() => navigateToPage("governanca-fiscal")}
        onNavigateToSustentabilidade={() => navigateToPage("sustentabilidade")}
        onNavigateToEquipeParceiros={() => navigateToPage("equipe-parceiros")}
        onNavigateBack={goBack}
        isHomePage={currentPage === "home"}
      />
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case "impact-dashboard":
        return <ImpactDashboard />;
      case "roi-calculator":
        return <ROICalculator />;
      case "compliance-dashboard":
        return <ComplianceDashboard />;
      case "qr-verification":
        return <QRVerificationSystem />;
      case "social-proof":
        return <SocialProofPage />;
      case "analytics-dashboard":
        return <AnalyticsDashboard />;
      case "rastreabilidade":
        return <RastreabilidadePage 
          onNavigateToInstitutional={() => navigateToPage("institutional")}
          onNavigateToEcosystem={() => navigateToPage("ecosystem")}
          onNavigateToProjects={() => navigateToPage("projects")}
          onNavigateToRegistry={() => navigateToPage("marketplace")}
          onNavigateToRastreabilidade={() => navigateToPage("rastreabilidade")}
          onNavigateToGovernancaFiscal={() => navigateToPage("governanca-fiscal")}
          onNavigateToSustentabilidade={() => navigateToPage("sustentabilidade")}
          onNavigateToEquipeParceiros={() => navigateToPage("equipe-parceiros")}
          onNavigateBack={goBack}
        />;
      case "governanca-fiscal":
        return <GovernancaFiscalPage 
          onNavigateToInstitutional={() => navigateToPage("institutional")}
          onNavigateToEcosystem={() => navigateToPage("ecosystem")}
          onNavigateToProjects={() => navigateToPage("projects")}
          onNavigateToRegistry={() => navigateToPage("marketplace")}
          onNavigateToRastreabilidade={() => navigateToPage("rastreabilidade")}
          onNavigateToGovernancaFiscal={() => navigateToPage("governanca-fiscal")}
          onNavigateToSustentabilidade={() => navigateToPage("sustentabilidade")}
          onNavigateToEquipeParceiros={() => navigateToPage("equipe-parceiros")}
          onNavigateBack={goBack}
        />;
      case "sustentabilidade":
        return <SustentabilidadePage 
          onNavigateToInstitutional={() => navigateToPage("institutional")}
          onNavigateToEcosystem={() => navigateToPage("ecosystem")}
          onNavigateToProjects={() => navigateToPage("projects")}
          onNavigateToRegistry={() => navigateToPage("marketplace")}
          onNavigateToRastreabilidade={() => navigateToPage("rastreabilidade")}
          onNavigateToGovernancaFiscal={() => navigateToPage("governanca-fiscal")}
          onNavigateToSustentabilidade={() => navigateToPage("sustentabilidade")}
          onNavigateToEquipeParceiros={() => navigateToPage("equipe-parceiros")}
          onNavigateBack={goBack}
        />;
      case "equipe-parceiros":
        return <EquipeParcerosPage 
          onNavigateToInstitutional={() => navigateToPage("institutional")}
          onNavigateToEcosystem={() => navigateToPage("ecosystem")}
          onNavigateToProjects={() => navigateToPage("projects")}
          onNavigateToRegistry={() => navigateToPage("marketplace")}
          onNavigateToRastreabilidade={() => navigateToPage("rastreabilidade")}
          onNavigateToGovernancaFiscal={() => navigateToPage("governanca-fiscal")}
          onNavigateToSustentabilidade={() => navigateToPage("sustentabilidade")}
          onNavigateToEquipeParceiros={() => navigateToPage("equipe-parceiros")}
          onNavigateBack={goBack}
        />;
      case "institutional":
        return <InstitutionalPage />;
      case "lab-portal":
        return <LabPortal onNavigate={(page) => setCurrentPage(page as Page)} />;
      case "gemologist":
        return <GemologistDashboard 
          onNavigateToHome={() => navigateToPage("home")}
          onNavigateToRegistry={() => navigateToPage("marketplace")}
          onNavigateToMiner={() => navigateToPage("miner")}
          onNavigateToAdmin={() => navigateToPage("admin")}
        />;
      case "marketplace":
        return <CertifiedGemsRegistry />;
      case "miner":
        return <MinerDashboard />;
      case "admin":
        return <AdminPanel />;
      case "user-dashboard":
        return <UserDashboard />;
      case "gem-detail":
        return selectedGemId ? (
          <GemDetailPage gemId={selectedGemId} onBack={goBack} />
        ) : null;
      case "ecosystem":
        return <EcosystemPage />;
      case "oracle-dashboard":
        return <OracleFiscalDashboard />;
      case "governance":
        return <GovernancePage 
          onNavigateToEcosystem={() => navigateToPage("ecosystem")}
          onNavigateToInstitutional={() => navigateToPage("institutional")}
        />;
      case "projects":
        return <ProjectsPage 
          onNavigateToGovernance={() => navigateToPage("governance")}
          onNavigateToEcosystem={() => navigateToPage("ecosystem")}
        />;
      case "coop-dashboard":
        return <CoopDashboard 
          onNavigateToProjects={() => navigateToPage("projects")}
          onNavigateToEcosystem={() => navigateToPage("ecosystem")}
          onNavigateToGovernance={() => navigateToPage("governance")}
        />;
      case "home":
      default:
        return (
          <>
            <HomePage 
              onNavigateToInstitutional={() => navigateToPage("institutional")}
              onNavigateToLabPortal={() => navigateToPage("lab-portal")}
              onNavigateToEcosystem={() => navigateToPage("ecosystem")}
              onNavigateToProjects={() => navigateToPage("projects")}
              onViewGemDetails={(gemId) => navigateToPage("gem-detail", gemId)}
              userName={user?.name}
              onAccessDashboard={() => navigateToPage("user-dashboard")}
              onNavigateToRastreabilidade={() => navigateToPage("rastreabilidade")}
              onNavigateToGovernancaFiscal={() => navigateToPage("governanca-fiscal")}
              onNavigateToSustentabilidade={() => navigateToPage("sustentabilidade")}
              onNavigateToEquipeParceiros={() => navigateToPage("equipe-parceiros")}
              onNavigateToImpactDashboard={() => navigateToPage("impact-dashboard")}
              onNavigateToROICalculator={() => navigateToPage("roi-calculator")}
              onNavigateToComplianceDashboard={() => navigateToPage("compliance-dashboard")}
              onNavigateToQRVerification={() => navigateToPage("qr-verification")}
              onNavigateToSocialProof={() => navigateToPage("social-proof")}
              onNavigateToAnalyticsDashboard={() => navigateToPage("analytics-dashboard")}
            />
            
            {/* Quick Access Panel - Mobile Optimized */}
            <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
              {!quickMenuOpen ? (
                // Minimized - Single Icon
                <button
                  onClick={() => setQuickMenuOpen(true)}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#006b4f] text-white shadow-2xl hover:bg-[#014733] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-[#e5e7eb]"
                  aria-label="Abrir menu de acesso rápido"
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              ) : (
                // Expanded - Full Menu (Mobile Optimized)
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#e5e7eb] p-3 sm:p-4 space-y-2 animate-in slide-in-from-bottom-5 duration-300 max-w-[260px] sm:max-w-none">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="font-['Inter'] text-[10px] sm:text-xs font-semibold text-gray-500">
                      Acesso Rápido
                    </div>
                    <button
                      onClick={() => setQuickMenuOpen(false)}
                      className="w-6 h-6 rounded-full hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center transition-colors"
                      aria-label="Fechar menu"
                    >
                      <X className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                  <Button
                    onClick={() => {
                      navigateToPage("institutional");
                      setQuickMenuOpen(false);
                    }}
                    className="w-full bg-[#014733] text-white hover:bg-[#006b4f] active:bg-[#003d2e] justify-start text-xs sm:text-sm"
                    size="sm"
                  >
                    <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                    Portal Institucional
                  </Button>
                  <Button
                    onClick={() => {
                      navigateToPage("lab-portal");
                      setQuickMenuOpen(false);
                    }}
                    className="w-full bg-[#006b4f] text-white hover:bg-[#014733] active:bg-[#003d2e] justify-start text-xs sm:text-sm"
                    size="sm"
                  >
                    <Gem className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                    Portal Lab
                  </Button>
                  <Button
                    onClick={() => {
                      navigateToPage("gemologist");
                      setQuickMenuOpen(false);
                    }}
                    className="w-full bg-[#006b4f] text-white hover:bg-[#014733] active:bg-[#003d2e] justify-start text-xs sm:text-sm"
                    size="sm"
                  >
                    <Microscope className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                    Dashboard Gemólogo
                  </Button>
                  <Button
                    onClick={() => {
                      navigateToPage("marketplace");
                      setQuickMenuOpen(false);
                    }}
                    className="w-full bg-[#014733] text-white hover:bg-[#006b4f] active:bg-[#003d2e] justify-start text-xs sm:text-sm"
                    size="sm"
                  >
                    <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                    Registry
                  </Button>
                  <Button
                    onClick={() => {
                      navigateToPage("miner");
                      setQuickMenuOpen(false);
                    }}
                    className="w-full bg-[#caa34b] text-white hover:bg-[#b8923f] active:bg-[#a67f30] justify-start text-xs sm:text-sm"
                    size="sm"
                  >
                    <Mountain className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                    Painel Garimpeiro
                  </Button>
                  <Button
                    onClick={() => {
                      navigateToPage("admin");
                      setQuickMenuOpen(false);
                    }}
                    className="w-full bg-[#1b1b1b] text-white hover:bg-[#2d2d2d] active:bg-[#0a0a0a] justify-start text-xs sm:text-sm"
                    size="sm"
                  >
                    <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                    Admin
                  </Button>
                </div>
              )}
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderNavigation()}
      
      {/* Botões de Navegação Flutuantes */}
      {currentPage !== "home" && (
        <div className="fixed top-24 left-4 sm:left-8 z-40 flex flex-col gap-3">
          {/* Botão Voltar - Aparece quando há histórico */}
          {pageHistory.length > 0 && (
            <button
              onClick={goBack}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#006b4f] text-[#006b4f] shadow-lg hover:bg-[#006b4f] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
              aria-label="Voltar à página anterior"
              title="Voltar"
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute left-14 sm:left-16 whitespace-nowrap bg-[#1b1b1b] text-white px-3 py-1.5 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Voltar
              </span>
            </button>
          )}
          
          {/* Botão Home - Sempre visível (exceto na home) */}
          <button
            onClick={() => navigateToPage("home")}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#caa34b] text-[#caa34b] shadow-lg hover:bg-[#caa34b] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
            aria-label="Ir para a página inicial"
            title="Página Inicial"
          >
            <Home className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="absolute left-14 sm:left-16 whitespace-nowrap bg-[#1b1b1b] text-white px-3 py-1.5 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Página Inicial
            </span>
          </button>
        </div>
      )}
      
      {renderPage()}
    </div>
  );
}