import { useState } from "react";

interface GovernancePageProps {
  onNavigateToEcosystem?: () => void;
  onNavigateToInstitutional?: () => void;
}

export function GovernancePage({ onNavigateToEcosystem, onNavigateToInstitutional }: GovernancePageProps = {}) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f0fdf4] to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#e5e7eb]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #006b4f 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#006b4f]/10 rounded-full border border-[#006b4f]/20"
            >
              <Scale className="h-4 w-4 text-[#006b4f]" />
              <span className="font-['Inter'] text-sm text-[#006b4f]">
                Arquitetura de Governança Delegada
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="font-['Montserrat'] text-4xl lg:text-5xl xl:text-6xl text-[#1b1b1b]">
              O Selo de <span className="text-[#006b4f]">Confiança Institucional</span>
            </h1>

            {/* Subtitle */}
            <p className="font-['Inter'] text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Prefeitura como Beneficiária Inerente e COOPESMERALDA como Oráculo Operacional: 
              a arquitetura que elimina risco político e garante integridade perpétua do ecossistema mineral
            </p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto"
            >
              <Card className="p-4 border-[#006b4f]/20 bg-white/80 backdrop-blur">
                <div className="text-center space-y-1">
                  <div className="font-['Montserrat'] text-3xl text-[#006b4f]">100%</div>
                  <div className="font-['Inter'] text-sm text-gray-600">Imunidade Política</div>
                </div>
              </Card>
              <Card className="p-4 border-[#caa34b]/20 bg-white/80 backdrop-blur">
                <div className="text-center space-y-1">
                  <div className="font-['Montserrat'] text-3xl text-[#caa34b]">2 Camadas</div>
                  <div className="font-['Inter'] text-sm text-gray-600">Validação Institucional</div>
                </div>
              </Card>
              <Card className="p-4 border-[#014733]/20 bg-white/80 backdrop-blur">
                <div className="text-center space-y-1">
                  <div className="font-['Montserrat'] text-3xl text-[#014733]">0 Burocracia</div>
                  <div className="font-['Inter'] text-sm text-gray-600">Velocidade RWA</div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Evolution Context */}
      <section className="py-16 lg:py-20 border-b border-[#e5e7eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
                Contexto da Evolução
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                A Evolução da Governança em Campos Verdes
              </h2>
            </div>

            <Card className="p-6 lg:p-8 border-[#006b4f]/20 bg-gradient-to-br from-white to-[#f0fdf4]">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Network className="h-4 w-4 text-[#006b4f]" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-['Inter'] text-lg text-[#1b1b1b]">
                      Arquitetura de Blindagem
                    </h3>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed">
                      Para garantir a <strong>integridade</strong> e a <strong>rastreabilidade absoluta</strong> do ecossistema mineral, 
                      o Projeto GEMLAB implementou uma <strong>Arquitetura de Blindagem</strong> que retira do político o poder de desligar o sistema.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#caa34b]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-[#caa34b]" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-['Inter'] text-lg text-[#1b1b1b]">
                      Governança Delegada
                    </h3>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed">
                      Este modelo resolveu o risco de <strong>baixa velocidade operacional</strong> e <strong>risco regulatório</strong> que 
                      existia quando o Poder Público atuava como Oráculo Ativo direto. O mercado global de RWA exige validação em minutos, não em dias.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#014733]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4 text-[#014733]" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-['Inter'] text-lg text-[#1b1b1b]">
                      Separação de Responsabilidades
                    </h3>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed">
                      A chave é a <strong>separação de responsabilidades</strong>: a Prefeitura garante a legitimidade institucional, 
                      enquanto a COOPESMERALDA garante a integridade operacional e física do ativo.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Two Pillars Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
              Duas Chaves de Validação
            </Badge>
            <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
              As Duas Chaves da Integridade
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
              Um modelo de governança dual que combina agilidade operacional com legitimidade institucional
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* COOPESMERALDA Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full p-6 lg:p-8 border-2 border-[#006b4f]/30 hover:border-[#006b4f] transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-[#f0fdf4]">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#006b4f] flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <Badge className="bg-[#006b4f] text-white mb-3">Chave 1 - Operacional</Badge>
                      <h3 className="font-['Montserrat'] text-2xl text-[#1b1b1b] mb-2">
                        COOPESMERALDA
                      </h3>
                      <p className="font-['Inter'] text-sm text-[#006b4f]">
                        Oráculo Operacional e Custodiante
                      </p>
                      <p className="font-['Inter'] text-xs text-gray-500 mt-1">
                        CNPJ: 34.926.901/0001-20
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-['Inter'] text-gray-600 leading-relaxed">
                    A <strong>Cooperativa de Gemas e Pedras Preciosas</strong> é a entidade legalmente constituída 
                    como <strong>único emissor de Nota Fiscal no protocolo</strong>, tornando-se indispensável para a rastreabilidade.
                  </p>

                  {/* Functions */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CircleDot className="h-5 w-5 text-[#006b4f] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-['Inter'] text-sm text-[#1b1b1b]">
                          <strong>Gestão de Campo:</strong> Único ponto de contato para o garimpeiro, 
                          recebe o ativo físico no Underground Vault e custodia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CircleDot className="h-5 w-5 text-[#006b4f] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-['Inter'] text-sm text-[#1b1b1b]">
                          <strong>Emissão Fiscal:</strong> Emite NFe de origem e Título (CPR) lastreado na pedra
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CircleDot className="h-5 w-5 text-[#006b4f] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-['Inter'] text-sm text-[#1b1b1b]">
                          <strong>Atestado EAS #1:</strong> Assina atestado de Prova de Origem, 
                          validando lote, hash da NFe e lastro físico
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Point */}
                  <div className="p-4 bg-[#006b4f]/5 rounded-lg border border-[#006b4f]/20">
                    <p className="font-['Inter'] text-sm text-[#006b4f]">
                      <strong>Chave Operacional:</strong> Valida a existência física e fiscal da esmeralda
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Prefeitura Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full p-6 lg:p-8 border-2 border-[#caa34b]/30 hover:border-[#caa34b] transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-[#fefbf4]">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#caa34b] flex items-center justify-center">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <Badge className="bg-[#caa34b] text-white mb-3">Chave 2 - Institucional</Badge>
                      <h3 className="font-['Montserrat'] text-2xl text-[#1b1b1b] mb-2">
                        Prefeitura de Campos Verdes
                      </h3>
                      <p className="font-['Inter'] text-sm text-[#caa34b]">
                        Beneficiária Inerente e Garantidora Institucional
                      </p>
                      <p className="font-['Inter'] text-xs text-gray-500 mt-1">
                        Secretaria da Fazenda Municipal
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-['Inter'] text-gray-600 leading-relaxed">
                    A Prefeitura foi <strong>transformada de Oráculo Ativo para Beneficiário On-Chain Inerente</strong>, 
                    removendo risco de interferência política. Sua autoridade é substituída pela <strong>Obrigação de Receita</strong>.
                  </p>

                  {/* Functions */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CircleDot className="h-5 w-5 text-[#caa34b] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-['Inter'] text-sm text-[#1b1b1b]">
                          <strong>Obrigação Legal:</strong> Recebe CFEM (Compensação Financeira pela Exploração Mineral) 
                          e ISS, obrigações constitucionais
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CircleDot className="h-5 w-5 text-[#caa34b] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-['Inter'] text-sm text-[#1b1b1b]">
                          <strong>Endosso de Legitimidade (EAS #4):</strong> Emite selo institucional que 
                          valida a legitimidade da Cooperativa como Oráculo Operacional
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CircleDot className="h-5 w-5 text-[#caa34b] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-['Inter'] text-sm text-[#1b1b1b]">
                          <strong>Auditoria Fiscal:</strong> Utiliza GEMLAB Tech como "Olho de Deus" 
                          para auditar produção em tempo real e garantir arrecadação
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Point */}
                  <div className="p-4 bg-[#caa34b]/5 rounded-lg border border-[#caa34b]/20">
                    <p className="font-['Inter'] text-sm text-[#caa34b]">
                      <strong>Garante Institucional:</strong> Força legal de arrecadação como mecanismo de segurança
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Triple Proof System */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#f0fdf4] to-white border-t border-[#e5e7eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
                Blindagem e Integridade
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                O Regime Fiscal Automatizado
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600">
                A integridade garantida pela Regra de Tríplice Prova
              </p>
            </div>

            {/* Triple Proof Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 border-[#006b4f]/20 hover:border-[#006b4f] transition-all duration-300 hover:shadow-lg">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                    <FileCheck className="h-6 w-6 text-[#006b4f]" />
                  </div>
                  <div>
                    <Badge className="bg-[#006b4f]/10 text-[#006b4f] mb-2">EAS #1</Badge>
                    <h3 className="font-['Inter'] text-lg text-[#1b1b1b] mb-2">
                      Origem Existe
                    </h3>
                    <p className="font-['Inter'] text-sm text-gray-600">
                      Cooperativa atestou o fato e a custódia física do ativo
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-[#006b4f]/20 hover:border-[#006b4f] transition-all duration-300 hover:shadow-lg">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-[#006b4f]" />
                  </div>
                  <div>
                    <Badge className="bg-[#006b4f]/10 text-[#006b4f] mb-2">EAS #2</Badge>
                    <h3 className="font-['Inter'] text-lg text-[#1b1b1b] mb-2">
                      Ciência Existe
                    </h3>
                    <p className="font-['Inter'] text-sm text-gray-600">
                      GEMLAB Tech atestou qualidade via SpectralHash Raman
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-[#caa34b]/20 hover:border-[#caa34b] transition-all duration-300 hover:shadow-lg">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#caa34b]/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-[#caa34b]" />
                  </div>
                  <div>
                    <Badge className="bg-[#caa34b]/10 text-[#caa34b] mb-2">EAS #5</Badge>
                    <h3 className="font-['Inter'] text-lg text-[#1b1b1b] mb-2">
                      Tributação Paga
                    </h3>
                    <p className="font-['Inter'] text-sm text-gray-600">
                      GEMLAB Tech atestou que CFEM/ISS foi protocolado
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Immunity Mechanism */}
            <Card className="p-6 lg:p-8 border-2 border-[#014733]/30 bg-gradient-to-br from-[#014733]/5 to-white">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#014733] flex items-center justify-center">
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-['Montserrat'] text-xl text-[#1b1b1b]">
                    Como a Imunidade Política Funciona
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#014733]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-['Montserrat'] text-sm text-[#014733]">1</span>
                    </div>
                    <div className="space-y-1 flex-1">
                      <h4 className="font-['Inter'] text-sm text-[#1b1b1b]">Remoção do Veto Político</h4>
                      <p className="font-['Inter'] text-sm text-gray-600">
                        Se um novo gestor tentar bloquear o projeto, ele interrompe a Prova Tributária (EAS #5), 
                        o token perde validade globalmente e a arrecadação fiscal para imediatamente
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#014733]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-['Montserrat'] text-sm text-[#014733]">2</span>
                    </div>
                    <div className="space-y-1 flex-1">
                      <h4 className="font-['Inter'] text-sm text-[#1b1b1b]">Incentivo Perpétuo</h4>
                      <p className="font-['Inter'] text-sm text-gray-600">
                        Para continuar recebendo impostos (CFEM/ISS) que financiam projetos sociais como 
                        "Mineração nas Escolas", o governo é legalmente obrigado a manter o sistema funcionando
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#014733]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-['Montserrat'] text-sm text-[#014733]">3</span>
                    </div>
                    <div className="space-y-1 flex-1">
                      <h4 className="font-['Inter'] text-sm text-[#1b1b1b]">Blindagem Criptográfica</h4>
                      <p className="font-['Inter'] text-sm text-gray-600">
                        A validade do Token (passaporte para liquidez global) está codificada no smart contract, 
                        criando um regime imune à descontinuidade política
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#014733]/10 rounded-lg border-2 border-[#014733]/20 mt-6">
                  <p className="font-['Inter'] text-sm text-[#014733] text-center">
                    <strong>Resultado:</strong> O Direito Tributário e o Código Criptográfico se fundem para criar 
                    um Regime Fiscal Automatizado, blindando o fluxo de liquidez contra interferência política
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 lg:py-20 border-t border-[#e5e7eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/30 bg-gradient-to-br from-white via-[#f0fdf4] to-white">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#006b4f] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#1b1b1b]">
                    A Sinergia Institucional
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-[#006b4f]/5 rounded-xl border border-[#006b4f]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Building2 className="h-6 w-6 text-[#006b4f]" />
                      <h3 className="font-['Inter'] text-lg text-[#006b4f]">COOPESMERALDA</h3>
                    </div>
                    <p className="font-['Inter'] text-sm text-gray-600">
                      <strong>Agilidade Operacional</strong> e ponto de origem da verdade. 
                      Garante velocidade do mercado RWA global com validação em minutos.
                    </p>
                  </div>

                  <div className="p-6 bg-[#caa34b]/5 rounded-xl border border-[#caa34b]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="h-6 w-6 text-[#caa34b]" />
                      <h3 className="font-['Inter'] text-lg text-[#caa34b]">Prefeitura</h3>
                    </div>
                    <p className="font-['Inter'] text-sm text-gray-600">
                      <strong>Garante Institucional</strong> cuja força legal de arrecadação 
                      é usada como mecanismo de segurança perpétua do sistema.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="font-['Inter'] text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    Juntas, essas duas instituições criam um <strong className="text-[#006b4f]">ecossistema blindado</strong> onde 
                    a continuidade operacional está garantida pela própria estrutura de incentivos tributários e validação técnica, 
                    tornando o sistema <strong className="text-[#014733]">imune à descontinuidade política</strong>.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#006b4f] to-[#014733] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-['Montserrat'] text-3xl lg:text-4xl">
              A Governança que o RWA Global Exige
            </h2>
            <p className="font-['Inter'] text-lg opacity-90">
              Conheça todo o Ecossistema Campos Verdes 2050 e entenda como a certificação científica 
              e a tecnologia blockchain trabalham juntas para criar ativos digitais de esmeraldas verdadeiramente confiáveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-[#006b4f] hover:bg-gray-100"
                onClick={onNavigateToEcosystem}
              >
                Explorar Ecossistema
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10"
                onClick={onNavigateToInstitutional}
              >
                Documentação Técnica
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}