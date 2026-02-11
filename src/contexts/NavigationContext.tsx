import { createContext, useContext, useState, ReactNode } from 'react';

type Page = "home" | "institutional" | "lab-portal" | "gemologist" | "marketplace" | "miner" | "admin" | "user-dashboard" | "gem-detail" | "ecosystem" | "oracle-dashboard" | "governance" | "projects" | "coop-dashboard" | "museum" | "marketplace-infrastructure" | "tourism-routes" | "digital-platform" | "municipal-market" | "roadmap" | "emerald-verification";

interface NavigationContextType {
  currentPage: Page;
  navigateTo: (page: Page) => void;
  goBack: () => void;
  pageHistory: Page[];
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ 
  children,
  currentPage,
  setCurrentPage,
  pageHistory,
  setPageHistory
}: { 
  children: ReactNode;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  pageHistory: Page[];
  setPageHistory: (history: Page[]) => void;
}) {
  const navigateTo = (page: Page) => {
    setPageHistory([...pageHistory, currentPage]);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (pageHistory.length > 0) {
      const newHistory = [...pageHistory];
      const previousPage = newHistory.pop();
      setPageHistory(newHistory);
      if (previousPage) {
        setCurrentPage(previousPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo, goBack, pageHistory }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
