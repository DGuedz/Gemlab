import { Search, Shield, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";

export function SpectralHashSearch() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="relative bg-gradient-to-br from-[#006b4f] via-[#014733] to-[#1b1b1b] text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-white/20 border border-white/30 text-white px-6 py-2 backdrop-blur-sm">
            <Shield className="h-4 w-4 mr-2" />
            SaaS de Certificação Científica
          </Badge>

          {/* Título Principal */}
          <h1 className="font-['Montserrat'] text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Rastreabilidade Absoluta.{' '}
            <span className="text-[#caa34b]">Imunidade Política.</span>
          </h1>

          {/* Subtítulo */}
          <p className="font-['Inter'] text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Busque certificados por{' '}
            <span className="font-bold text-[#caa34b]">SpectralHash</span> ou ID
            para verificar autenticidade molecular, origem e compliance tributário
            em tempo real.
          </p>

          {/* Campo de Busca Premium */}
          <Card className="p-8 bg-white/15 backdrop-blur-md border-2 border-white/30 shadow-2xl mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                <input
                  type="text"
                  placeholder="Digite o SpectralHash ou ID do certificado..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder:text-white/50 font-['Inter'] text-lg focus:outline-none focus:border-[#caa34b] transition-all backdrop-blur-sm"
                />
              </div>
              <Button
                size="lg"
                className="bg-[#caa34b] text-white hover:bg-[#b8923f] px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Verificar Autenticidade
              </Button>
            </div>

            {/* Exemplo de busca */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="font-['Inter'] text-sm text-white/70">
                Exemplo:
              </span>
              <button
                onClick={() => setSearchValue('0x7a8f9c...')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-['Inter'] text-sm text-white/90 transition-all font-mono"
              >
                0x7a8f9c...
              </button>
              <button
                onClick={() => setSearchValue('GEM-2024-1247')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-['Inter'] text-sm text-white/90 transition-all font-mono"
              >
                GEM-2024-1247
              </button>
            </div>
          </Card>

          {/* Stats de Confiança */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl font-bold text-[#caa34b] mb-2">
                1,247
              </div>
              <div className="font-['Inter'] text-sm text-white/80">
                Esmeraldas Certificadas
              </div>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl font-bold text-[#caa34b] mb-2">100%</div>
              <div className="font-['Inter'] text-sm text-white/80">
                Rastreabilidade Verificada
              </div>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl font-bold text-[#caa34b] mb-2">
                R$ 240K
              </div>
              <div className="font-['Inter'] text-sm text-white/80">
                Investido em Capital Social
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
