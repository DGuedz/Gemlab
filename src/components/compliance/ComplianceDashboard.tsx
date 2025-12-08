import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Shield,
  FileCheck,
  Download,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Clock,
  FileText,
  TrendingUp,
  Database,
  Link as LinkIcon
} from "lucide-react";
import { motion } from "motion/react";

// Tipos
interface AuditLog {
  id: string;
  timestamp: string;
  action: string;
  entity: string;
  oracle: string;
  status: "success" | "pending" | "failed";
  txHash: string;
}

interface FiscalReport {
  id: string;
  period: string;
  type: string;
  value: number;
  cfem: number;
  status: "approved" | "pending";
}

export function ComplianceDashboard() {
  const [activeTab, setActiveTab] = useState("auditoria");

  // Dados mockados de auditoria
  const auditLogs: AuditLog[] = [
    {
      id: "AUD-001",
      timestamp: "2024-12-07 14:32:15",
      action: "Certificação Emitida",
      entity: "Esmeralda #GEM-2024-580",
      oracle: "Prefeitura Campos Verdes",
      status: "success",
      txHash: "0x7f9f...3a2b"
    },
    {
      id: "AUD-002",
      timestamp: "2024-12-07 13:18:42",
      action: "Validação SpectralHash",
      entity: "Esmeralda #GEM-2024-579",
      oracle: "Lab GemLab",
      status: "success",
      txHash: "0x4c8e...9f1d"
    },
    {
      id: "AUD-003",
      timestamp: "2024-12-07 11:05:28",
      action: "Nota Fiscal Registrada",
      entity: "NFe 45231.1234567890",
      oracle: "Prefeitura Campos Verdes",
      status: "success",
      txHash: "0x2a1f...7c4e"
    },
    {
      id: "AUD-004",
      timestamp: "2024-12-07 09:42:11",
      action: "Transfer NFT",
      entity: "Token #580",
      oracle: "Blockchain Oracle",
      status: "pending",
      txHash: "0x9b3c...5d8a"
    },
    {
      id: "AUD-005",
      timestamp: "2024-12-06 16:55:33",
      action: "Atestação EAS",
      entity: "Schema 0x1a2b...8f9e",
      oracle: "Ethereum Attestation Service",
      status: "success",
      txHash: "0x6e4d...2c1b"
    }
  ];

  // Dados de relatórios fiscais
  const fiscalReports: FiscalReport[] = [
    {
      id: "REL-Q4-2024",
      period: "Q4 2024 (Out-Dez)",
      type: "CFEM Trimestral",
      value: 1850000,
      cfem: 55500,
      status: "approved"
    },
    {
      id: "REL-Q3-2024",
      period: "Q3 2024 (Jul-Set)",
      type: "CFEM Trimestral",
      value: 1375000,
      cfem: 41250,
      status: "approved"
    },
    {
      id: "REL-Q2-2024",
      period: "Q2 2024 (Abr-Jun)",
      type: "CFEM Trimestral",
      value: 993000,
      cfem: 29790,
      status: "approved"
    },
    {
      id: "REL-Q1-2024",
      period: "Q1 2024 (Jan-Mar)",
      type: "CFEM Trimestral",
      value: 483000,
      cfem: 14490,
      status: "approved"
    }
  ];

  // Estatísticas de compliance
  const complianceStats = {
    totalCertifications: 580,
    auditedTransactions: 1247,
    easAttestations: 580,
    fiscalReports: 4,
    complianceRate: 97.8,
    oraclesActive: 3
  };

  const exportPDF = (type: string) => {
    alert(`Exportando ${type} em PDF...`);
  };

  const exportExcel = (type: string) => {
    alert(`Exportando ${type} em Excel...`);
  };

  const viewOnBlockchain = (txHash: string) => {
    alert(`Abrindo transação ${txHash} no explorador de blockchain...`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="font-['Montserrat'] text-[#1b1b1b] mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Compliance Dashboard
          </h1>
          <p className="text-[#1b1b1b]/70">
            Auditoria pública, relatórios fiscais e rastreabilidade completa para ANM e Receita Federal
          </p>
        </div>
        <Badge className="bg-[#006b4f] text-white px-4 py-2 text-sm">
          <Shield className="h-4 w-4 mr-2" />
          {complianceStats.complianceRate}% Conformidade
        </Badge>
      </div>

      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-[#1b1b1b]/70">Certificações</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-['Montserrat'] text-[#006b4f]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                {complianceStats.totalCertifications}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-[#1b1b1b]/70">Transações</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-['Montserrat'] text-[#caa34b]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                {complianceStats.auditedTransactions}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-[#1b1b1b]/70">Atestações EAS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-['Montserrat'] text-[#014733]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                {complianceStats.easAttestations}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-[#1b1b1b]/70">Relatórios</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-['Montserrat']" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                {complianceStats.fiscalReports}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-[#1b1b1b]/70">Taxa Conformidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-['Montserrat'] text-[#006b4f]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                {complianceStats.complianceRate}%
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-[#1b1b1b]/70">Oracles Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-['Montserrat'] text-[#caa34b]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                {complianceStats.oraclesActive}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Tabs de Conteúdo */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[600px]">
          <TabsTrigger value="auditoria">Auditoria Pública</TabsTrigger>
          <TabsTrigger value="fiscal">Relatórios Fiscais</TabsTrigger>
          <TabsTrigger value="api">API Fiscalização</TabsTrigger>
        </TabsList>

        {/* Tab Auditoria Pública */}
        <TabsContent value="auditoria" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-[#006b4f]" />
                    Log de Auditoria Blockchain
                  </CardTitle>
                  <CardDescription>
                    Registro imutável de todas as transações e certificações no protocolo
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm"
                    onClick={() => exportPDF("auditoria")}
                    className="bg-[#006b4f] hover:bg-[#014733] text-white gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    PDF
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    onClick={() => exportExcel("auditoria")}
                    className="border-[#caa34b] text-[#caa34b] hover:bg-[#caa34b] hover:text-white gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Excel
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Ação</TableHead>
                      <TableHead>Entidade</TableHead>
                      <TableHead>Oracle</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">TX Hash</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {auditLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="text-sm text-[#1b1b1b]/70">{log.timestamp}</TableCell>
                        <TableCell className="font-['Montserrat']" style={{ fontWeight: 600 }}>{log.action}</TableCell>
                        <TableCell className="text-sm">{log.entity}</TableCell>
                        <TableCell className="text-sm text-[#006b4f]">{log.oracle}</TableCell>
                        <TableCell>
                          {log.status === "success" && (
                            <Badge className="bg-[#006b4f] text-white gap-1">
                              <CheckCircle2 className="h-3 w-3" />
                              Sucesso
                            </Badge>
                          )}
                          {log.status === "pending" && (
                            <Badge variant="outline" className="gap-1">
                              <Clock className="h-3 w-3" />
                              Pendente
                            </Badge>
                          )}
                          {log.status === "failed" && (
                            <Badge variant="destructive" className="gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              Falha
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => viewOnBlockchain(log.txHash)}
                            className="gap-1 text-[#006b4f] hover:text-[#014733]"
                          >
                            {log.txHash}
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Card de Integração EAS */}
          <Card className="border-[#006b4f] border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#006b4f]" />
                Integração Ethereum Attestation Service (EAS)
              </CardTitle>
              <CardDescription>
                Todas as certificações são atestadas via EAS Schema on-chain para imutabilidade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-[#1b1b1b]/70">Schema ID</p>
                  <code className="block p-2 bg-[#1b1b1b]/5 rounded text-xs break-all">
                    0x1a2b3c4d5e6f7890abcdef
                  </code>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#1b1b1b]/70">Chain</p>
                  <Badge className="bg-[#014733] text-white">Ethereum Sepolia</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#1b1b1b]/70">Total Atestações</p>
                  <p className="font-['Montserrat'] text-[#006b4f]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    {complianceStats.easAttestations}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Relatórios Fiscais */}
        <TabsContent value="fiscal" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-[#caa34b]" />
                    Relatórios CFEM para ANM
                  </CardTitle>
                  <CardDescription>
                    Declarações trimestrais de Compensação Financeira pela Exploração Mineral
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm"
                    onClick={() => exportPDF("cfem")}
                    className="bg-[#caa34b] hover:bg-[#caa34b]/90 text-white gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Exportar Todos PDF
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    onClick={() => exportExcel("cfem")}
                    className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Excel
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID Relatório</TableHead>
                      <TableHead>Período</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead className="text-right">Valor Bruto</TableHead>
                      <TableHead className="text-right">CFEM (3%)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fiscalReports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="font-['Montserrat']" style={{ fontWeight: 600 }}>
                          {report.id}
                        </TableCell>
                        <TableCell>{report.period}</TableCell>
                        <TableCell className="text-sm">{report.type}</TableCell>
                        <TableCell className="text-right">
                          R$ {report.value.toLocaleString('pt-BR')}
                        </TableCell>
                        <TableCell className="text-right text-[#caa34b]" style={{ fontWeight: 600 }}>
                          R$ {report.cfem.toLocaleString('pt-BR')}
                        </TableCell>
                        <TableCell>
                          {report.status === "approved" && (
                            <Badge className="bg-[#006b4f] text-white gap-1">
                              <CheckCircle2 className="h-3 w-3" />
                              Aprovado
                            </Badge>
                          )}
                          {report.status === "pending" && (
                            <Badge variant="outline" className="gap-1">
                              <Clock className="h-3 w-3" />
                              Pendente
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => exportPDF(report.id)}
                            className="gap-1"
                          >
                            <Download className="h-3 w-3" />
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Resumo Anual */}
          <Card className="border-[#caa34b] border-2 bg-gradient-to-br from-[#caa34b]/5 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#caa34b]" />
                Resumo Anual CFEM 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-[#1b1b1b]/70">Valor Bruto Total</p>
                  <p className="font-['Montserrat'] text-[#1b1b1b]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    R$ {fiscalReports.reduce((acc, r) => acc + r.value, 0).toLocaleString('pt-BR')}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#1b1b1b]/70">CFEM Total Arrecadado</p>
                  <p className="font-['Montserrat'] text-[#caa34b]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    R$ {fiscalReports.reduce((acc, r) => acc + r.cfem, 0).toLocaleString('pt-BR')}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#1b1b1b]/70">Crescimento Trimestral</p>
                  <p className="font-['Montserrat'] text-[#006b4f]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    +304%
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#1b1b1b]/70">Taxa de Conformidade</p>
                  <p className="font-['Montserrat'] text-[#006b4f]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    100%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab API Fiscalização */}
        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-[#006b4f]" />
                API para Órgãos de Fiscalização
              </CardTitle>
              <CardDescription>
                Webhooks e endpoints REST para integração com ANM, Receita Federal e Prefeitura
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Endpoint 1 */}
              <div className="space-y-3 p-4 bg-[#1b1b1b]/5 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#006b4f] text-white">GET</Badge>
                    <code className="text-sm">/api/v1/certifications</code>
                  </div>
                  <Button size="sm" variant="outline" className="gap-1">
                    <FileText className="h-3 w-3" />
                    Documentação
                  </Button>
                </div>
                <p className="text-sm text-[#1b1b1b]/70">
                  Retorna lista de todas as certificações com filtros por data, status e tipo
                </p>
              </div>

              {/* Endpoint 2 */}
              <div className="space-y-3 p-4 bg-[#1b1b1b]/5 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#006b4f] text-white">GET</Badge>
                    <code className="text-sm">/api/v1/fiscal/cfem/:period</code>
                  </div>
                  <Button size="sm" variant="outline" className="gap-1">
                    <FileText className="h-3 w-3" />
                    Documentação
                  </Button>
                </div>
                <p className="text-sm text-[#1b1b1b]/70">
                  Retorna relatório CFEM de um período específico em formato JSON ou PDF
                </p>
              </div>

              {/* Endpoint 3 */}
              <div className="space-y-3 p-4 bg-[#1b1b1b]/5 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#caa34b] text-white">POST</Badge>
                    <code className="text-sm">/api/v1/webhook/nfe</code>
                  </div>
                  <Button size="sm" variant="outline" className="gap-1">
                    <FileText className="h-3 w-3" />
                    Documentação
                  </Button>
                </div>
                <p className="text-sm text-[#1b1b1b]/70">
                  Webhook para receber notificações de emissão de NFe validadas pela Prefeitura
                </p>
              </div>

              {/* Endpoint 4 */}
              <div className="space-y-3 p-4 bg-[#1b1b1b]/5 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#006b4f] text-white">GET</Badge>
                    <code className="text-sm">/api/v1/audit/blockchain/:txHash</code>
                  </div>
                  <Button size="sm" variant="outline" className="gap-1">
                    <FileText className="h-3 w-3" />
                    Documentação
                  </Button>
                </div>
                <p className="text-sm text-[#1b1b1b]/70">
                  Retorna detalhes de uma transação blockchain específica com prova criptográfica
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card de Segurança */}
          <Card className="border-[#006b4f] border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#006b4f]" />
                Autenticação e Segurança
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#006b4f] mt-0.5" />
                  <div>
                    <p className="font-['Montserrat']" style={{ fontWeight: 600 }}>Autenticação OAuth 2.0</p>
                    <p className="text-sm text-[#1b1b1b]/70">
                      Credenciais exclusivas para cada órgão fiscalizador (ANM, Receita, Prefeitura)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#006b4f] mt-0.5" />
                  <div>
                    <p className="font-['Montserrat']" style={{ fontWeight: 600 }}>Rate Limiting</p>
                    <p className="text-sm text-[#1b1b1b]/70">
                      Limite de 1000 requisições/hora para proteger a infraestrutura
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#006b4f] mt-0.5" />
                  <div>
                    <p className="font-['Montserrat']" style={{ fontWeight: 600 }}>Logs de Acesso</p>
                    <p className="text-sm text-[#1b1b1b]/70">
                      Todas as consultas são registradas com timestamp e IP para auditoria
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#006b4f] mt-0.5" />
                  <div>
                    <p className="font-['Montserrat']" style={{ fontWeight: 600 }}>Webhook Verificado</p>
                    <p className="text-sm text-[#1b1b1b]/70">
                      Assinatura HMAC-SHA256 para validar origem das notificações
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
