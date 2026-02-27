import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { NavigationProvider } from "../contexts/NavigationContext";
import { InstitutionalPage } from "./institutional/InstitutionalPage";
import { CertifiedGemsRegistry } from "./registry/CertifiedGemsRegistry";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { SolutionSection } from "./SolutionSection";
import { ProcessSteps } from "./ProcessSteps";
import { LatestCertifications } from "./LatestCertifications";
import { Footer } from "./Footer";

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
  | "emerald-verification";

const ALLOWED_PAGES: Page[] = ["home", "institutional", "marketplace"];

const isAllowedPage = (value: string | null): value is Page =>
  Boolean(value && ALLOWED_PAGES.includes(value as Page));

const withSection = (sectionId: string) => {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function MainApp() {
  const { setOnAuthSuccess } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [pageHistory, setPageHistory] = useState<Page[]>([]);

  const syncPublicUrl = (page: Page) => {
    if (page === "institutional") {
      window.history.replaceState({}, "", "/?page=institutional");
      return;
    }

    if (page === "marketplace") {
      window.history.replaceState({}, "", "/?page=marketplace");
      return;
    }

    window.history.replaceState({}, "", "/");
  };

  const navigateToPage = (page: Page) => {
    if (!ALLOWED_PAGES.includes(page)) {
      return;
    }

    if (page !== currentPage) {
      setPageHistory((prev) => [...prev, currentPage]);
      setCurrentPage(page);
      syncPublicUrl(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goBack = () => {
    setPageHistory((prev) => {
      if (prev.length === 0) {
        return prev;
      }

      const nextHistory = [...prev];
      const previousPage = nextHistory.pop();
      if (previousPage) {
        setCurrentPage(previousPage);
        syncPublicUrl(previousPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return nextHistory;
    });
  };

  useEffect(() => {
    setOnAuthSuccess(() => () => {
      navigateToPage("marketplace");
    });
  }, [setOnAuthSuccess]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get("page");
    const sectionParam = params.get("section");

    if (isAllowedPage(pageParam)) {
      setCurrentPage(pageParam);
    } else if (pageParam) {
      window.history.replaceState({}, "", "/");
      setCurrentPage("home");
    }

    if (sectionParam) {
      window.setTimeout(() => withSection(sectionParam), 450);
    }
  }, []);

  const sharedNavbarProps = {
    currentPage,
    showBackButton: pageHistory.length > 0,
    onGoBack: goBack,
    onNavigateToHome: () => navigateToPage("home"),
    onNavigateToInstitutional: () => navigateToPage("institutional"),
    onNavigateToMarketplace: () => navigateToPage("marketplace"),
  };

  const renderPage = () => {
    if (currentPage === "institutional") {
      return (
        <>
          <Navbar {...sharedNavbarProps} />
          <InstitutionalPage />
        </>
      );
    }

    if (currentPage === "marketplace") {
      return (
        <>
          <Navbar {...sharedNavbarProps} />
          <CertifiedGemsRegistry />
        </>
      );
    }

    return (
      <>
        <Navbar {...sharedNavbarProps} />
        <main>
          <Hero onNavigateToVerification={() => navigateToPage("marketplace")} />
          <SolutionSection />
          <ProcessSteps />
          <LatestCertifications
            onViewAll={() => navigateToPage("marketplace")}
            onViewDetails={() => navigateToPage("marketplace")}
          />
        </main>
        <Footer />
      </>
    );
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
