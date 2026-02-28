import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Lock,
  Shield,
  Sparkles,
  Eye,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Building2,
  Phone,
  Mail,
  User,
  FileText,
  Package,
  Clock,
  TrendingUp,
  Download,
  Send,
  MapPin,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface CommercialEmerald {
  id: string;
  spectralHash: string;
  image: string;
  weight: number;
  color: string;
  clarity: string;
  cut: string;
  origin: string;
  certificationDate: string;
  status: "Disponível" | "Reservado" | "Custodiado";
  availability: "Imediata" | "15 dias" | "30 dias";
  reservedBy?: string;
  reservedUntil?: string;
}

export function CommercialPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedEmerald, setSelectedEmerald] = useState<CommercialEmerald | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  // Mock data - esmeraldas com informações comerciais
  const commercialEmeralds: CommercialEmerald[] = [
    {
      id: "GML-ESM-2024-00001",
      spectralHash: "0x7f3a...",
      image: "https://images.unsplash.com/photo-1605821771565-35e0d046a2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwZ2Vtc3RvbmUlMjBqZXdlbHJ5fGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 2.45,
      color: "Verde Intenso",
      clarity: "VS1",
      cut: "Esmeralda",
      origin: "Cooperativa APL - Lote A-001",
      certificationDate: "15/12/2024",
      status: "Disponível",
      availability: "Imediata",
    },
    {
      id: "GML-ESM-2024-00002",
      spectralHash: "0x8b4c...",
      image: "https://images.unsplash.com/photo-1669867660200-810bd0921333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVtZXJhbGQlMjBjcnlzdGFsfGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 4.12,
      color: "Verde Médio",
      clarity: "VVS2",
      cut: "Oval",
      origin: "Cooperativa APL - Lote A-001",
      certificationDate: "14/12/2024",
      status: "Disponível",
      availability: "15 dias",
    },
    {
      id: "GML-ESM-2024-00003",
      spectralHash: "0x2e9f...",
      image: "https://images.unsplash.com/photo-1676617481869-613bc310c0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwc3RvbmUlMjBnZW9sb2d5fGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 3.87,
      color: "Verde Vivo",
      clarity: "VS2",
      cut: "Redondo",
      origin: "Cooperativa APL - Lote B-015",
      certificationDate: "13/12/2024",
      status: "Reservado",
      availability: "30 dias",
      reservedBy: "Joalheria Premium LTDA",
      reservedUntil: "30/12/2024",
    },
    {
      id: "GML-ESM-2024-00004",
      spectralHash: "0x5d7a...",
      image: "https://images.unsplash.com/photo-1667419941709-7db68fe7828f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaW91cyUyMGdlbXN0b25lJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjY2OTMyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 1.95,
      color: "Verde Intenso",
      clarity: "VVS1",
      cut: "Esmeralda",
      origin: "Cooperativa APL - Lote C-007",
      certificationDate: "12/12/2024",
      status: "Disponível",
      availability: "Imediata",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponível":
        return "bg-[#006b4f] text-white";
      case "Reservado":
        return "bg-[#caa34b] text-white";
      case "Custodiado":
        return "bg-[#1b1b1b] text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Imediata":
        return "text-[#006b4f]";
      case "15 dias":
        return "text-[#caa34b]";
      case "30 dias":
        return "text-gray-600";
      default:
        return "text-gray-400";
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1b1b1b] via-[#014733] to-[#006b4f] flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 border-2 border-[#e5e7eb]">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#006b4f] mx-auto flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b] mb-2">
              Portal Comercial GEMLAB
            </h1>
            <p className="font-['Inter'] text-sm text-gray-600">
              Acesso exclusivo para joalheiros e varejistas credenciados
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                E-mail Corporativo
              </label>
              <Input
                type="email"
                placeholder="contato@suajoalheria.com"
                className="font-['Inter']"
              />
            </div>

            <div>
              <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                Senha
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                className="font-['Inter']"
              />
            </div>

            <Button
              type="button"
              className="w-full bg-[#006b4f] text-white hover:bg-[#014733]"
              onClick={() => setIsAuthenticated(true)}
            >
              <Shield className="h-4 w-4 mr-2" />
              Acessar Portal
            </Button>

            <div className="text-center text-sm text-gray-600">
              <a href="#" className="text-[#006b4f] hover:underline">
                Esqueci minha senha
              </a>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-[#e5e7eb]">
            <p className="font-['Inter'] text-sm text-gray-600 text-center mb-4">
              Ainda não é credenciado?
            </p>
            <Button
              variant="outline"
              className="w-full border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
            >
              <FileText className="h-4 w-4 mr-2" />
              Solicitar Credenciamento
            </Button>
          </div>

          <div className="mt-6 p-4 bg-[#f9fafb] rounded-lg">
            <p className="font-['Inter'] text-xs text-gray-600 text-center">
              <Shield className="h-3 w-3 inline mr-1" />
              Sistema protegido com autenticação multi-fator
            </p>
          </div>
        </Card>
      </div>
    );
  }

  // Authenticated Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1b1b1b] via-[#014733] to-[#006b4f] text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-3 bg-white/20 backdrop-blur-sm text-white border-none">
                <Shield className="h-3 w-3 mr-1" />
                Acesso Credenciado
              </Badge>
              <h1 className="font-['Montserrat'] text-3xl lg:text-4xl font-bold mb-2">
                Portal Comercial
              </h1>
              <p className="font-['Inter'] text-lg text-gray-200">
                Bem-vindo, Joalheria Premium LTDA
              </p>
            </div>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#006b4f]"
              onClick={() => setIsAuthenticated(false)}
            >
              <Lock className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Dashboard Removed */}

        {/* Main Content Tabs */}
        <Tabs defaultValue="available" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="available">Disponíveis</TabsTrigger>
            <TabsTrigger value="reserved">Minhas Reservas</TabsTrigger>
            <TabsTrigger value="consultations">Consultas</TabsTrigger>
            <TabsTrigger value="contact">Contato Cooperativa</TabsTrigger>
          </TabsList>

          {/* Available Tab */}
          <TabsContent value="available" className="space-y-6">
            <Card className="p-4 border-2 border-[#006b4f]/20 bg-gradient-to-br from-[#006b4f]/5 to-white">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-[#006b4f] mt-0.5" />
                <div>
                  <p className="font-['Inter'] text-sm text-gray-700">
                    <strong>Importante:</strong> As reservas de consulta têm validade de 72
                    horas. Durante este período, você terá prioridade para negociação
                    direta com a Cooperativa.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialEmeralds
                .filter((e) => e.status === "Disponível")
                .map((emerald) => (
                  <Card
                    key={emerald.id}
                    className="overflow-hidden border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300 hover:shadow-xl group"
                  >
                    {/* Image */}
                    <div className="relative h-56 bg-gradient-to-br from-[#006b4f]/5 to-white overflow-hidden">
                      <ImageWithFallback
                        src={emerald.image}
                        alt={`Esmeralda ${emerald.id}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <Badge
                        className={`absolute top-3 right-3 ${getStatusColor(emerald.status)}`}
                      >
                        {emerald.status}
                      </Badge>
                      <Badge className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1b1b1b]">
                        <Clock className="h-3 w-3 mr-1" />
                        {emerald.availability}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-4">
                      {/* ID */}
                      <div>
                        <p className="font-['Inter'] text-xs font-mono text-gray-500 mb-1">
                          {emerald.id}
                        </p>
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-3 w-3 text-[#006b4f]" />
                          <code className="font-['Inter'] text-xs font-mono text-[#006b4f]">
                            {emerald.spectralHash}
                          </code>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="font-['Inter'] text-xs text-gray-500">Peso</p>
                          <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                            {emerald.weight.toFixed(2)} ct
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter'] text-xs text-gray-500">Cor</p>
                          <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                            {emerald.color}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter'] text-xs text-gray-500">Clareza</p>
                          <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                            {emerald.clarity}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter'] text-xs text-gray-500">Corte</p>
                          <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                            {emerald.cut}
                          </p>
                        </div>
                      </div>

                      {/* Availability Badge */}
                      <div className="pt-3 border-t border-[#e5e7eb]">
                        <div className="flex items-center justify-between">
                          <span className="font-['Inter'] text-xs text-gray-500">
                            Disponibilidade
                          </span>
                          <span
                            className={`font-['Inter'] text-sm font-medium ${getAvailabilityColor(emerald.availability)}`}
                          >
                            {emerald.availability}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-[#006b4f] text-white hover:bg-[#014733]"
                          size="sm"
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          Reservar Consulta
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                          onClick={() => setSelectedEmerald(emerald)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Reserved Tab */}
          <TabsContent value="reserved" className="space-y-6">
            <Card className="p-6 border-2 border-[#caa34b]/20 bg-gradient-to-br from-[#caa34b]/5 to-white">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="h-5 w-5 text-[#caa34b] mt-0.5" />
                <div>
                  <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-1">
                    Minhas Reservas Ativas
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Você possui 2 reservas de consulta ativas. Entre em contato com a
                    Cooperativa para prosseguir com a negociação.
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              {commercialEmeralds
                .filter((e) => e.status === "Reservado")
                .map((emerald) => (
                  <Card
                    key={emerald.id}
                    className="overflow-hidden border-2 border-[#caa34b] hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image */}
                      <div className="relative sm:w-48 h-48 bg-gradient-to-br from-[#006b4f]/5 to-white overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={emerald.image}
                          alt={`Esmeralda ${emerald.id}`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <p className="font-['Inter'] text-sm font-mono text-gray-500">
                              {emerald.id}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Sparkles className="h-3 w-3 text-[#006b4f]" />
                              <code className="font-['Inter'] text-xs font-mono text-[#006b4f]">
                                {emerald.spectralHash}
                              </code>
                            </div>
                          </div>
                          <Badge className={getStatusColor(emerald.status)}>
                            {emerald.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="font-['Inter'] text-xs text-gray-500">Peso</p>
                            <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                              {emerald.weight.toFixed(2)} ct
                            </p>
                          </div>
                          <div>
                            <p className="font-['Inter'] text-xs text-gray-500">Cor</p>
                            <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                              {emerald.color}
                            </p>
                          </div>
                          <div>
                            <p className="font-['Inter'] text-xs text-gray-500">Clareza</p>
                            <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                              {emerald.clarity}
                            </p>
                          </div>
                          <div>
                            <p className="font-['Inter'] text-xs text-gray-500">Corte</p>
                            <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                              {emerald.cut}
                            </p>
                          </div>
                        </div>

                        {emerald.reservedUntil && (
                          <div className="p-3 bg-[#caa34b]/10 rounded-lg mb-4">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-[#caa34b]" />
                              <p className="font-['Inter'] text-sm text-[#1b1b1b]">
                                Reserva válida até: <strong>{emerald.reservedUntil}</strong>
                              </p>
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Button className="bg-[#006b4f] text-white hover:bg-[#014733]">
                            <Phone className="h-4 w-4 mr-2" />
                            Contatar Cooperativa
                          </Button>
                          <Button variant="outline" className="border-[#e5e7eb]">
                            <Download className="h-4 w-4 mr-2" />
                            Download Docs
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Consultations Tab */}
          <TabsContent value="consultations" className="space-y-6">
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-4">
                Histórico de Consultas
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: "GML-ESM-2024-00001",
                    date: "20/12/2024",
                    status: "Em Análise",
                    type: "Reserva de Consulta",
                  },
                  {
                    id: "GML-ESM-2024-00005",
                    date: "18/12/2024",
                    status: "Respondida",
                    type: "Solicitação de Informações",
                  },
                  {
                    id: "GML-ESM-2024-00012",
                    date: "15/12/2024",
                    status: "Finalizada",
                    type: "Reserva de Consulta",
                  },
                ].map((consultation, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border-2 border-[#e5e7eb] rounded-lg hover:border-[#006b4f] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#006b4f]/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-[#006b4f]" />
                      </div>
                      <div>
                        <p className="font-['Inter'] text-sm font-mono text-[#1b1b1b]">
                          {consultation.id}
                        </p>
                        <p className="font-['Inter'] text-xs text-gray-500">
                          {consultation.type} • {consultation.date}
                        </p>
                      </div>
                    </div>
                    <Badge
                      className={
                        consultation.status === "Em Análise"
                          ? "bg-[#caa34b] text-white"
                          : "bg-[#006b4f] text-white"
                      }
                    >
                      {consultation.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-6">
            <Card className="p-6 border-2 border-[#006b4f]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006b4f] flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-1">
                    Contato Direto com a Cooperativa
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Entre em contato para negociações comerciais e esclarecimento de dúvidas
                  </p>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                      Nome Completo
                    </label>
                    <Input placeholder="Seu nome" className="font-['Inter']" />
                  </div>
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                      Empresa
                    </label>
                    <Input
                      placeholder="Nome da sua empresa"
                      className="font-['Inter']"
                      defaultValue="Joalheria Premium LTDA"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="font-['Inter']"
                    />
                  </div>
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                      Telefone
                    </label>
                    <Input placeholder="(00) 00000-0000" className="font-['Inter']" />
                  </div>
                </div>

                <div>
                  <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                    Assunto
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reservation">Reserva de Consulta</SelectItem>
                      <SelectItem value="negotiation">Negociação Comercial</SelectItem>
                      <SelectItem value="info">Solicitação de Informações</SelectItem>
                      <SelectItem value="support">Suporte Técnico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                    ID da Esmeralda (opcional)
                  </label>
                  <Input
                    placeholder="GML-ESM-2024-XXXXX"
                    className="font-['Inter'] font-mono"
                  />
                </div>

                <div>
                  <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Descreva sua solicitação em detalhes..."
                    rows={6}
                    className="font-['Inter']"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#006b4f] text-white hover:bg-[#014733]"
                  size="lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 border-2 border-[#e5e7eb] text-center">
                <Phone className="h-8 w-8 text-[#006b4f] mx-auto mb-3" />
                <p className="font-['Inter'] text-sm text-gray-600 mb-1">Telefone</p>
                <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                  (62) 3000-0000
                </p>
              </Card>

              <Card className="p-4 border-2 border-[#e5e7eb] text-center">
                <Mail className="h-8 w-8 text-[#006b4f] mx-auto mb-3" />
                <p className="font-['Inter'] text-sm text-gray-600 mb-1">E-mail</p>
                <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                  comercial@cooperativa-apl.br
                </p>
              </Card>

              <Card className="p-4 border-2 border-[#e5e7eb] text-center">
                <MapPin className="h-8 w-8 text-[#006b4f] mx-auto mb-3" />
                <p className="font-['Inter'] text-sm text-gray-600 mb-1">Endereço</p>
                <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                  Campos Verdes - GO
                </p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
