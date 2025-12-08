import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Sparkles,
  Shield,
  TrendingUp,
  Users,
  Award,
  Leaf,
  BookOpen,
} from "lucide-react";

export function ManifestoSection() {
  const pillars = [
    {
      icon: Shield,
      title: "Prova de Conhecimento",
      color: "#006b4f",
      description:
        "Blockchain pública como infraestrutura de confiança, garantindo rastreabilidade completa desde a jazida.",
    },
    {
      icon: Sparkles,
      title: "SpectralHash Único",
      color: "#caa34b",
      description:
        "Espectrometria Raman gera identidade óptica impossível de falsificar, vinculada ao certificado digital da pedra.",
    },
    {
      icon: TrendingUp,
      title: "Prêmio de Mercado 15-40%",
      color: "#10b981",
      description:
        "Certificação de origem ética e rastreável reconhecida com prêmio no mercado internacional de gemas.",
    },
    {
      icon: Users,
      title: "Capital Humano",
      color: "#014733",
      description:
        "Formação de gemólogos digitais, lapidários e ourives para operar o ecossistema.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f9fafb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#006b4f] text-white">
            Manifesto GEMLAB
          </Badge>
          <h2 className="font-['Inter'] text-3xl lg:text-5xl font-bold text-[#1b1b1b] mb-6">
            Campos Verdes: Vanguarda Global da Gema Ética e Digital
          </h2>
          <p className="font-['Inter'] text-xl text-gray-600 leading-relaxed">
            Transformando o extrativismo em uma{" "}
            <span className="text-[#006b4f] font-semibold">
              indústria inteligente, rastreável e certificável
            </span>
          </p>
        </div>

        {/* Main Manifesto */}
        <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/20 mb-16">
          <div className="prose prose-lg max-w-none">
            <div className="flex items-start gap-4 mb-8">
              <BookOpen className="h-8 w-8 text-[#006b4f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-4">
                  O Desafio da Confiança e da Valorização
                </h3>
                <p className="font-['Inter'] text-gray-700 leading-relaxed mb-4">
                  Historicamente, a riqueza mineral careceu de transparência,
                  impedindo a comprovação da origem ética e sustentável e
                  limitando o alcance do{" "}
                  <strong className="text-[#006b4f]">valor justo</strong> no
                  mercado internacional. Para reposicionar as esmeraldas de
                  Campos Verdes — e impulsionar o{" "}
                  <strong>Projeto Avança Campos Verdes</strong> — é fundamental
                  transformar o extrativismo em uma indústria inteligente,
                  rastreável e certificável.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#006b4f] to-[#014733] text-white p-8 rounded-2xl mb-8">
              <h3 className="font-['Inter'] text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="h-7 w-7 text-[#caa34b]" />
                GEMLAB: A Prova de Conhecimento na Blockchain
              </h3>
              <p className="font-['Inter'] text-gray-100 leading-relaxed mb-4">
                O{" "}
                <strong className="text-[#caa34b]">
                  GEMLAB – Laboratório Comunitário de Certificação e
                  Rastreabilidade Mineral
                </strong>{" "}
                é a infraestrutura tecnológica que cumpre essa missão. O projeto
                integra análise gemológica, certificação digital e blockchain
                pública para formalizar e digitalizar a cadeia produtiva.
              </p>
              <p className="font-['Inter'] text-gray-100 leading-relaxed">
                Essa tecnologia é a nossa{" "}
                <strong className="text-[#caa34b]">
                  "prova de conhecimento"
                </strong>{" "}
                na cadeia de custódia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-[#f9fafb] border-2 border-[#e5e7eb]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#014733]/10 flex items-center justify-center">
                    <span className="font-['Inter'] text-lg font-bold text-[#014733]">
                      1
                    </span>
                  </div>
                  <h4 className="font-['Inter'] font-semibold text-[#1b1b1b]">
                    Lotes Minerais (ERC-1155)
                  </h4>
                </div>
                <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
                  Cada <strong>lote extraído</strong> (run-of-mine) é registrado
                  como token ERC-1155. Este modelo rastreia o material em massa,
                  registrando a extração, peso bruto e árvore de proveniência
                  durante o beneficiamento.
                </p>
              </Card>

              <Card className="p-6 bg-[#f9fafb] border-2 border-[#e5e7eb]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#006b4f]/10 flex items-center justify-center">
                    <span className="font-['Inter'] text-lg font-bold text-[#006b4f]">
                      2
                    </span>
                  </div>
                  <h4 className="font-['Inter'] font-semibold text-[#1b1b1b]">
                    Peças Individuais (NFT ERC-721)
                  </h4>
                </div>
                <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
                  Após a triagem, cada <strong>pedra selecionada</strong> é
                  cunhada como <strong>NFT ERC-721</strong>. Este NFT atua como
                  passaporte digital registrando peso inicial, vínculo ao lote e
                  todos os eventos subsequentes.
                </p>
              </Card>
            </div>

            <div className="mb-8">
              <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-4 flex items-center gap-3">
                <Sparkles className="h-7 w-7 text-[#caa34b]" />
                Certificação On-Chain e Espectrometria Raman
              </h3>
              <p className="font-['Inter'] text-gray-700 leading-relaxed mb-4">
                O GEMLAB é o ponto de validação científica da gema, utilizando
                tecnologia de ponta para garantir a autenticidade e identidade
                única de cada esmeralda.
              </p>
              <Card className="p-6 bg-[#006b4f]/5 border-2 border-[#006b4f]/20">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#006b4f] mt-2" />
                    <div>
                      <strong className="font-['Inter'] text-[#006b4f]">
                        Espectrometria Raman:
                      </strong>
                      <span className="font-['Inter'] text-gray-700">
                        {" "}
                        A análise no espectrômetro Raman gera um{" "}
                        <strong>código único (spectralHash)</strong> — impossível
                        de falsificar. O GEMLAB automatiza o processamento do
                        espectro para gerar o{" "}
                        <code className="font-mono text-xs bg-white px-2 py-1 rounded">
                          spectralHash SHA-256
                        </code>
                        , que é inserido no NFT, fornecendo identidade óptica
                        permanente.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#006b4f] mt-2" />
                    <div>
                      <strong className="font-['Inter'] text-[#006b4f]">
                        Laudo Autenticado:
                      </strong>
                      <span className="font-['Inter'] text-gray-700">
                        {" "}
                        O laboratório comunitário emite laudos de autenticidade, e
                        a <strong>Prefeitura</strong> atua como{" "}
                        <strong>Validadora de Origem</strong>, autenticando
                        laudos e NF digital para confirmar procedência.
                      </span>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="mb-8">
              <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-4 flex items-center gap-3">
                <Users className="h-7 w-7 text-[#014733]" />
                O Ponto de Partida: Investimento em Capital Humano
              </h3>
              <p className="font-['Inter'] text-gray-700 leading-relaxed mb-6">
                A verdadeira inovação exige um ecossistema de profissionais
                altamente qualificados. A formação é o ponto de partida
                estratégico do projeto.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-5 border-2 border-[#e5e7eb]">
                  <h5 className="font-['Inter'] font-semibold text-[#014733] mb-2">
                    Novos Gemólogos
                  </h5>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Gemólogos digitais capazes de operar espectrômetro Raman e
                    gerenciar fluxo de dados até o mint do NFT.
                  </p>
                </Card>
                <Card className="p-5 border-2 border-[#e5e7eb]">
                  <h5 className="font-['Inter'] font-semibold text-[#caa34b] mb-2">
                    Lapidação Premium
                  </h5>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Formação de lapidários e ourives para atuar no Centro
                    Integrado da Mineração.
                  </p>
                </Card>
                <Card className="p-5 border-2 border-[#e5e7eb]">
                  <h5 className="font-['Inter'] font-semibold text-[#006b4f] mb-2">
                    Fundo On-Chain
                  </h5>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Financiamento da capacitação através do Fundo Municipal,
                    criando ecossistema circular.
                  </p>
                </Card>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#caa34b]/10 to-[#006b4f]/10 p-8 rounded-2xl border-2 border-[#caa34b]/20">
              <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-4 flex items-center gap-3">
                <Award className="h-7 w-7 text-[#caa34b]" />
                Campos Verdes na Vanguarda da Inovação
              </h3>
              <p className="font-['Inter'] text-gray-700 leading-relaxed mb-4">
                Ao vincular a excelência profissional (Gemologia, Lapidação,
                Design de Joias) à transparência da blockchain, o GEMLAB
                transforma o perfil econômico da região.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#006b4f] mt-2" />
                  <p className="font-['Inter'] text-sm text-gray-700">
                    <strong>Arrecadação Fiscal:</strong> Oracle Fiscal garante
                    cálculo automático de taxas (CFEM/ISS)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#006b4f] mt-2" />
                  <p className="font-['Inter'] text-sm text-gray-700">
                    <strong>Prêmio de Origem:</strong> Certificação reconhecida com prêmio de 15-40% no
                    mercado internacional
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#006b4f] mt-2" />
                  <p className="font-['Inter'] text-sm text-gray-700">
                    <strong>RWA Mineral Puro:</strong> NFT com histórico do
                    subsolo ao varejo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#006b4f] mt-2" />
                  <p className="font-['Inter'] text-sm text-gray-700">
                    <strong>Indicação Geográfica:</strong> Suporte à busca por
                    reconhecimento oficial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300 hover:shadow-lg text-center"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${pillar.color}15` }}
              >
                <pillar.icon className="h-8 w-8" style={{ color: pillar.color }} />
              </div>
              <h3
                className="font-['Inter'] text-lg font-bold mb-3"
                style={{ color: pillar.color }}
              >
                {pillar.title}
              </h3>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Conclusion */}
        <Card className="mt-16 p-8 bg-gradient-to-r from-[#1b1b1b] to-[#014733] text-white">
          <div className="flex items-start gap-4">
            <Leaf className="h-8 w-8 text-[#caa34b] flex-shrink-0" />
            <div>
              <h3 className="font-['Inter'] text-2xl font-bold mb-4">
                Marco Institucional
              </h3>
              <p className="font-['Inter'] text-gray-100 leading-relaxed">
                O Protocolo GEMLAB é o <strong>marco institucional</strong> que
                une tecnologia e desenvolvimento humano, garantindo que as
                esmeraldas de Campos Verdes sejam sinônimo de{" "}
                <strong className="text-[#caa34b]">
                  confiança, ética e inovação
                </strong>{" "}
                em Goiás, no Brasil e no cenário mineral global.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}