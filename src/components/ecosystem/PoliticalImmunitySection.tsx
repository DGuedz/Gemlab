import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Shield, Lock, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export function PoliticalImmunitySection() {
  const proofs = [
    {
      number: "1",
      title: "Prova de Origem",
      actor: "Cooperativa do APL",
      cnpj: "Entidade Credenciada",
      description:
        "Atestado de que a esmeralda foi extraída legalmente em Campos Verdes - GO",
      color: "#006b4f",
      icon: Shield,
    },
    {
      number: "2",
      title: "Prova Científica",
      actor: "GEMLAB Tech",
      cnpj: "Laboratório Certificado",
      description:
        "SpectralHash (Raman) garante identidade molecular única, eliminando fraude de substituição",
      color: "#caa34b",
      icon: Shield,
    },
    {
      number: "5",
      title: "Prova Tributária",
      actor: "Prefeitura de Campos Verdes",
      cnpj: "Oracle Fiscal",
      description:
        "Validação on-chain de que CFEM/ISS foram pagos. Sem esta prova, o token é PAUSADO",
      color: "#dc2626",
      icon: Lock,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[var(--emerald-green)] to-[#014733]/50 border-t border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-white/20 border border-white/30 text-white mb-6 px-6 py-2.5 text-sm">
            <Shield className="h-4 w-4 mr-2" />
            Blindagem Anti-Corrupção
          </Badge>
          <h2 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-white mb-6">
            🛡️ Imunidade Política Absoluta
          </h2>
          <p className="font-['Inter'] text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            O Token ERC-721 só é{" "}
            <span className="font-bold text-[#caa34b]">transferível</span> se as{" "}
            <span className="font-bold text-[#caa34b]">3 Provas EAS</span>{" "}
            estiverem ativas. Se a{" "}
            <span className="font-bold text-[#caa34b]">Prova Tributária</span>{" "}
            falhar, o sistema expõe o risco em{" "}
            <span className="font-bold text-[#caa34b]">tempo real</span>.
          </p>
        </div>

        {/* Regra de Tríplice Prova */}
        <Card className="p-10 mb-12 border-2 border-white/30 bg-white/15 backdrop-blur-md shadow-2xl">
          <h3 className="font-['Montserrat'] text-3xl font-bold text-white mb-8 text-center">
            Regra de Tríplice Prova (Tax-Conditional Token)
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {proofs.map((proof, idx) => (
              <Card
                key={idx}
                className="p-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[#caa34b] hover:bg-white/15 transition-all duration-300 h-full flex flex-col group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-['Montserrat'] text-xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: proof.color }}
                  >
                    {proof.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-['Montserrat'] text-xl font-bold text-white">
                      {proof.title}
                    </h4>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-['Inter'] font-bold text-white mb-1">
                    {proof.actor}
                  </p>
                  <p className="font-['Inter'] text-sm text-white/70 font-mono">
                    {proof.cnpj}
                  </p>
                </div>

                <p className="font-['Inter'] text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                  {proof.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Fluxo de Validação */}
          <div className="bg-white/5 rounded-xl p-8 border border-white/20">
            <h4 className="font-['Montserrat'] text-xl font-bold text-white mb-6 text-center">
              Fluxo de Validação do Smart Contract
            </h4>

            <div className="space-y-4">
              {/* Cenário 1: Tudo OK */}
              <div className="flex items-start gap-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Inter'] font-bold text-white mb-1">
                    ✅ Cenário 1: Todas as Provas Válidas
                  </p>
                  <p className="font-['Inter'] text-sm text-white/80">
                    Token{" "}
                    <span className="font-bold text-green-400">
                      TRANSFERÍVEL
                    </span>
                    . Investidor pode negociar livremente. Sistema operando
                    normalmente.
                  </p>
                </div>
              </div>

              {/* Cenário 2: Prova Tributária Falhou */}
              <div className="flex items-start gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Inter'] font-bold text-white mb-1">
                    ❌ Cenário 2: Prova Tributária Inválida (CFEM/ISS não pago)
                  </p>
                  <p className="font-['Inter'] text-sm text-white/80">
                    Token{" "}
                    <span className="font-bold text-red-400">
                      PAUSADO AUTOMATICAMENTE
                    </span>
                    . Exposição de risco em tempo real para investidor e CVM.
                    Prefeitura perde receita, criando{" "}
                    <span className="font-bold text-white">
                      incentivo político perpétuo
                    </span>{" "}
                    para manter compliance.
                  </p>
                </div>
              </div>

              {/* Cenário 3: Custódia Falhou */}
              <div className="flex items-start gap-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Inter'] font-bold text-white mb-1">
                    ⚠️ Cenário 3: Prova de Custódia Expirada
                  </p>
                  <p className="font-['Inter'] text-sm text-white/80">
                    Se o Underground Vault falhar em renovar o atestado, o token{" "}
                    <span className="font-bold text-yellow-400">
                      perde lastro físico
                    </span>
                    . Sistema alerta investidores e pausa transferências.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Benefícios da Blindagem */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[#caa34b] transition-all">
            <Lock className="h-12 w-12 text-[#caa34b] mb-6" />
            <h4 className="font-['Montserrat'] text-xl font-bold text-white mb-4">
              Imunidade Política
            </h4>
            <p className="font-['Inter'] text-sm text-white/80 leading-relaxed">
              Nenhum gestor público pode desviar ou bloquear tributos. O smart
              contract força o cumprimento automático, independente de vontade
              política.
            </p>
          </Card>

          <Card className="p-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[#caa34b] transition-all">
            <Shield className="h-12 w-12 text-[#caa34b] mb-6" />
            <h4 className="font-['Montserrat'] text-xl font-bold text-white mb-4">
              Proteção ao Investidor
            </h4>
            <p className="font-['Inter'] text-sm text-white/80 leading-relaxed">
              Transparência total via blockchain. Qualquer falha de compliance é
              detectada em tempo real, protegendo o capital investido.
            </p>
          </Card>

          <Card className="p-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[#caa34b] transition-all">
            <CheckCircle2 className="h-12 w-12 text-[#caa34b] mb-6" />
            <h4 className="font-['Montserrat'] text-xl font-bold text-white mb-4">
              Auditabilidade CVM
            </h4>
            <p className="font-['Inter'] text-sm text-white/80 leading-relaxed">
              Todos os atestados são imutáveis e publicamente auditáveis. A CVM
              pode verificar compliance sem depender de relatórios manuais.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
