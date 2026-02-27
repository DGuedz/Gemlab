import { useState, useEffect } from "react";
import { OracleFiscalDashboard } from "./oracle/OracleFiscalDashboard";
import { GovernancePage } from "./governance/GovernancePage";
import { ProjectsPage } from "./projects/ProjectsPage";
import { CoopDashboard } from "./coop/CoopDashboard";
import LabPortal from "../LabPortal";
import { useAuth } from "../contexts/AuthContext";
import { NavigationProvider } from "../contexts/NavigationContext";
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
import { SolutionSection } from "./SolutionSection";
import { ProcessSteps } from "./ProcessSteps";
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
  const { setOnAuthSuccess } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedGemId, setSelectedGemId] = useState<string | null>(null);
  const [pageHistory, setPageHistory] = useState<Page[]>([]);

  const syncPublicUrl = (page: Page) => {
    switch (page) {
      case "institutional":
        window.history.replaceState({}, "", "/?page=institutional");
        break;
      case "marketplace":
        window.history.replaceState({}, "", "/?page=marketplace");
        break;
      case "home":
        window.history.replaceState({}, "", "/");
        break;
      default:
        break;
    }
  };

  // Setup auth success callback to navigate to user dashboard
  useEffect(() => {
    setOnAuthSuccess(() => () => {
      navigateToPage("user-dashboard");
    });
  }, [setOnAuthSuccess]);

  // Deep links públicos para avaliação (institucional/blog/verificação)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get("page");
    const sectionParam = params.get("section");

    if (pageParam === "institutional" || pageParam === "marketplace" || pageParam === "home") {
      setCurrentPage(pageParam as Page);
    }

    if (sectionParam) {
      window.setTimeout(() => {
        const target = document.getElementById(sectionParam);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 450);
    }
  }, []);

  // Função para navegar com histórico
  const navigateToPage = (page: Page, gemId?: string) => {
    if (gemId) {
      setSelectedGemId(gemId);
    }
    if (page !== currentPage) {
      setPageHistory([...pageHistory, currentPage]);
      setCurrentPage(page);
      syncPublicUrl(page);
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
        syncPublicUrl(previousPage);
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
              <SolutionSection />
              <ProcessSteps />
              <LatestCertifications onViewDetails={(gemId) => navigateToPage("gem-detail", gemId)} />
            </main>
            <Footer />
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
