import { Sparkles } from "lucide-react";

export function SolutionSection() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header Minimalista */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006b4f]/10 border border-[#006b4f]/20 mb-6">
            <Sparkles className="h-4 w-4 text-[#006b4f]" />
            <span className="font-['Inter'] text-sm text-[#006b4f] font-medium">
              Solução Completa
            </span>
          </div>
          <h2 className="font-['Montserrat'] text-4xl lg:text-5xl text-[#1b1b1b] mb-6">
            Como Funciona o GEMLAB
          </h2>
          <p className="font-['Inter'] text-lg text-[#1b1b1b] max-w-3xl mx-auto leading-relaxed">
            A primeira solução completa de certificação, rastreabilidade e
            tokenização de esmeraldas. Integrando ciência gemológica, blockchain
            e gestão minerária para transformar Campos Verdes em referência global.
          </p>
        </div>

        {/* Grid Minimalista - 3 colunas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="group">
            <div className="h-1 w-12 bg-gradient-to-r from-[#006b4f] to-[#caa34b] mb-4 group-hover:w-full transition-all duration-500" />
            <h3 className="font-['Inter'] text-xl font-semibold text-[#1b1b1b] mb-3">
              Rastreabilidade Total
            </h3>
            <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
              Cada lote recebe código único (batchId) em blockchain, criando trilha
              digital imutável da mina ao mercado.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group">
            <div className="h-1 w-12 bg-gradient-to-r from-[#006b4f] to-[#caa34b] mb-4 group-hover:w-full transition-all duration-500" />
            <h3 className="font-['Inter'] text-xl font-semibold text-[#1b1b1b] mb-3">
              Identidade Óptica
            </h3>
            <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
              Análise gemológica completa gera spectralHash — digital óptica única e
              impossível de falsificar para cada pedra.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group">
            <div className="h-1 w-12 bg-gradient-to-r from-[#006b4f] to-[#caa34b] mb-4 group-hover:w-full transition-all duration-500" />
            <h3 className="font-['Inter'] text-xl font-semibold text-[#1b1b1b] mb-3">
              NFT Gemológico
            </h3>
            <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
              Certificado digital ERC-721 com metadata, spectralHash, laudo técnico
              e histórico completo de custódia.
            </p>
          </div>
        </div>

        {/* Processo Linear - 6 etapas */}
        <div className="relative">
          {/* Linha de conexão */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gradient-to-r from-[#006b4f] via-[#caa34b] to-[#006b4f] hidden lg:block" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {[
              { num: "01", text: "Lote Mineral" },
              { num: "02", text: "Análise Raman" },
              { num: "03", text: "IPFS Storage" },
              { num: "04", text: "Mint NFT" },
              { num: "05", text: "Compliance" },
              { num: "06", text: "Registry" },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#006b4f] mx-auto mb-3 flex items-center justify-center z-10 relative">
                  <span className="font-['Inter'] text-sm font-semibold text-[#006b4f]">
                    {step.num}
                  </span>
                </div>
                <p className="font-['Inter'] text-xs text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final Minimalista */}
        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-4 bg-gradient-to-r from-[#006b4f] to-[#014733] rounded-2xl">
            <p className="font-['Inter'] text-sm text-white/90 max-w-2xl">
              <span className="text-[#caa34b]">Proveniência comprovada</span> +{" "}
              <span className="text-[#caa34b]">Certificação técnica</span> +{" "}
              <span className="text-[#caa34b]">Identidade digital</span>
              <br />
              <span className="text-white">
                Conectando a tradição de Campos Verdes ao futuro da mineração global
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}