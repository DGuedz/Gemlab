import { useState, useEffect } from "react";
import { OracleFiscalDashboard } from "./oracle/OracleFiscalDashboard";
import { GovernancePage } from "./governance/GovernancePage";
import { ProjectsPage } from "./projects/ProjectsPage";
import { CoopDashboard } from "./coop/CoopDashboard";
import LabPortal from "../LabPortal";
import { useAuth } from "../contexts/AuthContext";
import { NavigationProvider } from "../contexts/NavigationContext";
import { Button } from "./ui/button";
import { Menu, X, BookOpen, Gem, Microscope, ShoppingBag, Mountain, Shield } from "lucide-react";
import { InstitutionalPage } from "./institutional/InstitutionalPage";
import { GemologistDashboard } from "./dashboard/GemologistDashboard";
import { CertifiedGemsRegistry } from "./registry/CertifiedGemsRegistry";
import { MinerDashboard } from "./miner/MinerDashboard";
import { AdminPanel } from "./admin/AdminPanel";
import { UserDashboard } from "./dashboard/UserDashboard";
import { GemDetailPage } from "./GemDetailPage";
import { RoadmapPage } from "./RoadmapPage";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { DashboardAccessCard } from "./DashboardAccessCard";
import { SolutionSection } from "./SolutionSection";
import { ProcessSteps } from "./ProcessSteps";
import { TokenizationFlow } from "./TokenizationFlow";
import { LifecycleTimeline } from "./LifecycleTimeline";
import { WhyCamposVerdes } from "./WhyCamposVerdes";
import { EconomicImpact } from "./EconomicImpact";
import { MunicipalFund } from "./MunicipalFund";
import { ComplianceSection } from "./ComplianceSection";
import { LatestCertifications } from "./LatestCertifications";
import { Footer } from "./Footer";
import { EcosystemPage } from "./ecosystem/EcosystemPage";
import { MuseumPage } from "./museum/MuseumPage";
import { MarketplacePage } from "./infrastructure/MarketplacePage";
import { TourismRoutesPage } from "./infrastructure/TourismRoutesPage";
import { DigitalPlatformPage } from "./infrastructure/DigitalPlatformPage";
import { MunicipalMarketPage } from "./projects/MunicipalMarketPage";
import { EmeraldVerification } from "./verification/EmeraldVerification";
import { PremiumTeamPage } from "./team/PremiumTeamPage";

type Page = "home" | "institutional" | "lab-portal" | "gemologist" | "marketplace" | "miner" | "admin" | "user-dashboard" | "gem-detail" | "ecosystem" | "oracle-dashboard" | "governance" | "projects" | "coop-dashboard" | "museum" | "marketplace-infrastructure" | "tourism-routes" | "digital-platform" | "municipal-market" | "roadmap" | "emerald-verification" | "premium-team";

export function MainApp() {
  const { user, setOnAuthSuccess } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedGemId, setSelectedGemId] = useState<string | null>(null);
  const [pageHistory, setPageHistory] = useState<Page[]>([]);
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);

  // Setup auth success callback to navigate to user dashboard
  useEffect(() => {
    setOnAuthSuccess(() => () => {
      navigateToPage("user-dashboard");
    });
  }, [setOnAuthSuccess]);

  // Função para navegar com histórico
  const navigateToPage = (page: Page, gemId?: string) => {
    if (gemId) {
      setSelectedGemId(gemId);
    }
    if (page !== currentPage) {
      setPageHistory([...pageHistory, currentPage]);
      setCurrentPage(page);
      // Scroll to top quando navegar para nova página
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
        // Scroll to top quando voltar para página anterior
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "institutional":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <InstitutionalPage />
          </>
        );
      case "lab-portal":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <LabPortal onNavigate={(page) => setCurrentPage(page as Page)} />
          </>
        );
      case "gemologist":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <GemologistDashboard 
              onNavigateToHome={() => navigateToPage("home")}
              onNavigateToRegistry={() => navigateToPage("marketplace")}
              onNavigateToMiner={() => navigateToPage("miner")}
              onNavigateToAdmin={() => navigateToPage("admin")}
            />
          </>
        );
      case "marketplace":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <CertifiedGemsRegistry />
          </>
        );
      case "miner":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <MinerDashboard />
          </>
        );
      case "admin":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <AdminPanel />
          </>
        );
      case "user-dashboard":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <UserDashboard />
          </>
        );
      case "gem-detail":
        return selectedGemId ? (
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <GemDetailPage gemId={selectedGemId} onBack={goBack} />
          </>
        ) : null;
      case "ecosystem":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <EcosystemPage />
          </>
        );
      case "oracle-dashboard":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <OracleFiscalDashboard />
          </>
        );
      case "governance":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <GovernancePage 
              onNavigateToEcosystem={() => navigateToPage("ecosystem")}
              onNavigateToInstitutional={() => navigateToPage("institutional")}
            />
          </>
        );
      case "projects":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <ProjectsPage 
              onNavigateToGovernance={() => navigateToPage("governance")}
              onNavigateToEcosystem={() => navigateToPage("ecosystem")}
              onNavigateToMuseum={() => navigateToPage("museum")}
              onNavigateToMarketplace={() => navigateToPage("marketplace-infrastructure")}
              onNavigateToTourism={() => navigateToPage("tourism-routes")}
              onNavigateToDigitalPlatform={() => navigateToPage("digital-platform")}
              onNavigateToMunicipalMarket={() => navigateToPage("municipal-market")}
            />
          </>
        );
      case "coop-dashboard":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <CoopDashboard 
              onNavigateToProjects={() => navigateToPage("projects")}
              onNavigateToEcosystem={() => navigateToPage("ecosystem")}
              onNavigateToGovernance={() => navigateToPage("governance")}
            />
          </>
        );
      case "museum":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <MuseumPage />
          </>
        );
      case "marketplace-infrastructure":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <MarketplacePage onBack={goBack} />
          </>
        );
      case "tourism-routes":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <TourismRoutesPage onBack={goBack} />
          </>
        );
      case "digital-platform":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <DigitalPlatformPage onBack={goBack} />
          </>
        );
      case "municipal-market":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <MunicipalMarketPage />
          </>
        );
      case "roadmap":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
              onNavigateToPremiumTeam={() => navigateToPage("premium-team")}
            />
            <RoadmapPage />
          </>
        );
      case "premium-team":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
              onNavigateToPremiumTeam={() => navigateToPage("premium-team")}
            />
            <PremiumTeamPage />
          </>
        );
      case "emerald-verification":
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
              onNavigateToAdmin={() => navigateToPage("admin")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <EmeraldVerification onNavigate={(page) => navigateToPage(page as Page)} />
          </>
        );
      case "home":
      default:
        return (
          <>
            <Navbar 
              currentPage={currentPage}
              onNavigateToHome={() => navigateToPage("home")}
              onNavigateToInstitutional={() => navigateToPage("institutional")}
              onNavigateToLabPortal={() => navigateToPage("lab-portal")}
              onNavigateToEcosystem={() => navigateToPage("ecosystem")}
              onNavigateToProjects={() => navigateToPage("projects")}
              onNavigateToRoadmap={() => navigateToPage("roadmap")}
              onNavigateToUserDashboard={() => navigateToPage("user-dashboard")}
            />
            <main>
              <Hero onNavigateToVerification={() => navigateToPage("emerald-verification")} />
              {user && (
                <DashboardAccessCard
                  userName={user.name}
                  onAccessDashboard={() => setCurrentPage("user-dashboard")}
                />
              )}
              <SolutionSection />
              <ProcessSteps />
              <TokenizationFlow />
              <LifecycleTimeline />
              <WhyCamposVerdes />
              <EconomicImpact />
              <MunicipalFund 
                onNavigateToOracleDashboard={() => setCurrentPage("oracle-dashboard")} 
                onNavigateToGovernance={() => setCurrentPage("governance")}
                onNavigateToProjects={() => setCurrentPage("projects")}
              />
              <ComplianceSection />
              <LatestCertifications onViewDetails={(gemId) => navigateToPage("gem-detail", gemId)} />
            </main>
            <Footer />
            
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
      <NavigationProvider
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageHistory={pageHistory}
        setPageHistory={setPageHistory}
      >
        {renderPage()}
      </NavigationProvider>
    </div>
  );
}
