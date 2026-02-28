import { AlertTriangle, Scale } from "lucide-react";
import { Card } from "./ui/card";

export function CVMDisclaimer() {
  return (
    <Card className="p-6 bg-yellow-50 border-2 border-yellow-300 dark:bg-yellow-900/20 dark:border-yellow-700">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/40 flex items-center justify-center">
            <Scale className="h-6 w-6 text-yellow-700 dark:text-yellow-500" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-5 w-5 text-yellow-700 dark:text-yellow-500" />
            <h3 className="font-['Montserrat'] font-bold text-yellow-900 dark:text-yellow-200">
              Disclaimer Legal e Regulatório (CVM)
            </h3>
          </div>
          <div className="space-y-3 font-['Inter'] text-sm text-yellow-800 dark:text-yellow-300 leading-relaxed">
            <p>
              <span className="font-bold">O GEMLAB é um provedor de infraestrutura tecnológica SaaS de certificação científica.</span>{" "}
              Não realizamos oferta pública de valores mobiliários nem operamos como plataforma de investimento.
            </p>
            <p>
              Os tokens ERC-721 emitidos pelo protocolo são{" "}
              <span className="font-bold">representações digitais de certificados gemológicos</span>{" "}
              emitidos pela{" "}
              <span className="font-bold font-mono">Cooperativa Credenciada do APL</span>,
              Oráculo Operacional e Custodiante autorizado.
            </p>
            <p>
              <span className="font-bold">Nosso modelo de negócio:</span> Fornecimento de infraestrutura Web3 + laboratório gemológico
              para rastreabilidade científica de esmeraldas. As taxas cobradas referem-se exclusivamente aos{" "}
              <span className="font-bold">serviços de certificação, espectrometria Raman e registro blockchain</span>.
            </p>
            <p className="pt-2 border-t border-yellow-300 dark:border-yellow-700">
              <span className="font-bold">Posicionamento Institucional:</span> Empresa de Tecnologia e Certificação Científica,
              não marketplace. Compliance total com regulamentações CVM e ANM.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
