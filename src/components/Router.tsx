import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainApp } from "./MainApp";
import { ComoFuncionaPage } from "./pages/ComoFuncionaPage";
import { SobrePage } from "./pages/SobrePage";
import { ContatoPage } from "./pages/ContatoPage";
import { WhitepaperPage } from "./pages/WhitepaperPage";
import { PrivacidadePage } from "./pages/PrivacidadePage";
import { TermosPage } from "./pages/TermosPage";
import { CarreirasPage } from "./pages/CarreirasPage";
import { RegistryPage } from "./pages/RegistryPage";
import { GemologosPage } from "./pages/GemologosPage";
import { GarimpeirosPage } from "./pages/GarimpeirosPage";
import { ParceirosPage } from "./pages/ParceirosPage";
import { CertificacoesPage } from "./pages/CertificacoesPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal - MainApp gerencia navegação interna */}
        <Route path="/" element={<MainApp />} />
        
        {/* Rotas de páginas institucionais */}
        <Route path="/como-funciona" element={<ComoFuncionaPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/whitepaper" element={<WhitepaperPage />} />
        <Route path="/privacidade" element={<PrivacidadePage />} />
        <Route path="/termos" element={<TermosPage />} />
        <Route path="/carreiras" element={<CarreirasPage />} />
        
        {/* Rotas de produto */}
        <Route path="/registry" element={<RegistryPage />} />
        <Route path="/gemologos" element={<GemologosPage />} />
        <Route path="/garimpeiros" element={<GarimpeirosPage />} />
        
        {/* Rotas institucionais */}
        <Route path="/parceiros" element={<ParceirosPage />} />
        <Route path="/certificacoes" element={<CertificacoesPage />} />
        
        {/* Catch-all: redireciona para home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
