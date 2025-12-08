import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Search,
  ChevronRight,
  Database,
  Users,
  Layers,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Filter,
  TrendingUp,
  Eye,
} from "lucide-react";
import { RegistryFilters } from "./RegistryFilters";
import { GemDetailModal } from "./GemDetailModal";
import { EmeraldGlow } from "../icons/EmeraldGlow";

interface CertifiedGem {
  uid: string;
  spectralHash: string;
  origin: string;
  weight: number;
  status: "Certificado" | "Em Análise" | "Validado";
  timestamp: string;
  batchId: string;
  certificationDate: string;
}

export function CertifiedGemsRegistry() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedGem, setSelectedGem] = useState<CertifiedGem | null>(null);

  // Mock data - exemplo de gemas certificadas
  const certifiedGems: CertifiedGem[] = [
    {
      uid: "0x2f8f5fa9bc2f572ac297...",
      spectralHash: "#SHA256",
      origin: "COOPESMERALDA - Lote A-001",
      weight: 2.45,
      status: "Certificado",
      timestamp: "há 1 hora",
      batchId: "#3184",
      certificationDate: "24/11/2024",
    },
    {
      uid: "0x1fe3c673a3d8d72d634...",
      spectralHash: "#SHA256",
      origin: "COOPESMERALDA - Lote A-001",
      weight: 1.87,
      status: "Certificado",
      timestamp: "há 1 hora",
      batchId: "#3184",
      certificationDate: "24/11/2024",
    },
    {
      uid: "0x1adb61c480a15ed10bc...",
      spectralHash: "#SHA256",
      origin: "COOPESMERALDA - Lote A-001",
      weight: 3.12,
      status: "Certificado",
      timestamp: "há 2 horas",
      batchId: "#3184",
      certificationDate: "24/11/2024",
    },
    {
      uid: "0x4b8cb3373581947c0a5...",
      spectralHash: "#SHA256",
      origin: "COOPESMERALDA - Lote B-015",
      weight: 4.23,
      status: "Validado",
      timestamp: "há 3 horas",
      batchId: "#3598",
      certificationDate: "24/11/2024",
    },
    {
      uid: "0x2bea1916c327f3171a4c...",
      spectralHash: "#SHA256",
      origin: "COOPESMERALDA - Lote B-015",
      weight: 1.96,
      status: "Validado",
      timestamp: "há 5 horas",
      batchId: "#3598",
      certificationDate: "23/11/2024",
    },
    {
      uid: "0xec10610a2c44b81cbb4...",
      spectralHash: "#SHA256",
      origin: "COOPESMERALDA - Lote C-007",
      weight: 2.78,
      status: "Certificado",
      timestamp: "há 7 horas",
      batchId: "#3598",
      certificationDate: "23/11/2024",
    },
    {
      uid: "0x91d0e7f35417c877ad4...",
      spectralHash: "#SHA256",
      origin: "Garimpeiro Independente - CV",
      weight: 5.41,
      status: "Em Análise",
      timestamp: "há 8 horas",
      batchId: "#97",
      certificationDate: "23/11/2024",
    },
    {
      uid: "0xd15d24693a78459eabd...",
      spectralHash: "#SHA256",
      origin: "COOPESMERALDA - Lote D-022",
      weight: 3.65,
      status: "Certificado",
      timestamp: "há 9 horas",
      batchId: "#3752",
      certificationDate: "22/11/2024",
    },
  ];

  const stats = [
    {
      label: "Total de Certificações",
      value: "51,988",
      icon: Database,
    },
    {
      label: "Lotes Registrados",
      value: "3,788",
      icon: Layers,
    },
    {
      label: "Garimpeiros Validados",
      value: "2,384",
      icon: Users,
    },
  ];

  const filteredGems = certifiedGems.filter(
    (gem) =>
      gem.uid.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gem.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gem.batchId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Certificado":
        return "bg-[#006b4f] text-white";
      case "Validado":
        return "bg-[#caa34b] text-white";
      case "Em Análise":
        return "bg-gray-400 text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1b1b1b] to-[#014733] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-[#caa34b] text-white border-none">
              Registry Público
            </Badge>
            <h1 className="font-['Inter'] text-4xl lg:text-5xl font-bold mb-4">
              Registro de Certificações Gemológicas
            </h1>
            <p className="font-['Inter'] text-xl text-gray-300 leading-relaxed">
              Consulta pública de esmeraldas certificadas pelo GEMLAB com
              rastreabilidade completa e identidade digital verificada
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Dashboard */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-['Inter'] text-sm text-gray-600 mb-1">
                    {stat.label}
                  </p>
                  <p className="font-['Inter'] text-3xl font-bold text-[#1b1b1b]">
                    {stat.value}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-[#006b4f]" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Search Bar */}
        <Card className="p-6 mb-8 border-2 border-[#e5e7eb]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por UID, origem, lote..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-['Inter']"
              />
            </div>
            <Button className="bg-[#006b4f] hover:bg-[#014733] text-white">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>
        </Card>

        {/* Registry Table */}
        <Card className="border-2 border-[#e5e7eb] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f9fafb] border-b-2 border-[#e5e7eb]">
                <tr>
                  <th className="px-6 py-4 text-left font-['Inter'] text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    UID
                  </th>
                  <th className="px-6 py-4 text-left font-['Inter'] text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Lote
                  </th>
                  <th className="px-6 py-4 text-left font-['Inter'] text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Origem
                  </th>
                  <th className="px-6 py-4 text-left font-['Inter'] text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Peso (ct)
                  </th>
                  <th className="px-6 py-4 text-left font-['Inter'] text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left font-['Inter'] text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-4 text-left font-['Inter'] text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#e5e7eb]">
                {filteredGems.map((gem, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#f9fafb] transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <EmeraldGlow size={20} className="flex-shrink-0" />
                        <code className="font-['Inter'] text-sm text-[#006b4f] font-mono">
                          {gem.uid}
                        </code>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        className="bg-[#5b7ce6] text-white font-['Inter'] text-xs"
                        variant="secondary"
                      >
                        {gem.batchId}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-['Inter'] text-sm text-gray-900 max-w-xs truncate">
                        {gem.origin}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="font-['Inter'] text-sm font-semibold text-gray-900">
                        {gem.weight.toFixed(2)} ct
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge className={`${getStatusColor(gem.status)} font-['Inter'] text-xs`}>
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        {gem.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="font-['Inter'] text-sm text-gray-600">
                        {gem.timestamp}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#006b4f] hover:text-[#014733] hover:bg-[#006b4f]/10"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        <span className="font-['Inter'] text-xs">Ver Certificado</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-[#f9fafb] px-6 py-4 border-t-2 border-[#e5e7eb] flex items-center justify-center">
            <Button
              variant="ghost"
              className="text-[#006b4f] hover:text-[#014733] font-['Inter']"
            >
              Ver todas as certificações
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="p-6 border-2 border-[#006b4f]/20 bg-gradient-to-br from-[#006b4f]/5 to-white">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#006b4f]/10 flex items-center justify-center">
                <Database className="h-5 w-5 text-[#006b4f]" />
              </div>
              <div>
                <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-1">
                  Registro Imutável
                </h3>
                <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                  Cada certificação é registrada permanentemente na blockchain
                  pública com hash criptográfico do espectro Raman
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-[#caa34b]/20 bg-gradient-to-br from-[#caa34b]/5 to-white">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#caa34b]/10 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-[#caa34b]" />
              </div>
              <div>
                <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-1">
                  Validação Municipal
                </h3>
                <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                  Prefeitura de Campos Verdes atua como Oracle Fiscal validando
                  origem e emitindo NF digital
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}