import { GenericUnderDevelopmentPage } from "./GenericUnderDevelopmentPage";
import { Database } from "lucide-react";

export function RegistryPage() {
  return (
    <GenericUnderDevelopmentPage 
      titulo="Registry de Gemas Certificadas"
      descricao="Explore todas as esmeraldas certificadas pelo Protocolo GEMLAB com histórico de custódia completo on-chain. Página em desenvolvimento."
      icon={Database}
    />
  );
}
