import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Slider } from "../ui/slider";
import {
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Grid3x3,
  List,
  SlidersHorizontal,
  Eye,
  Lock,
  ChevronDown,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface CertifiedEmerald {
  id: string;
  spectralHash: string;
  image: string;
  weight: number;
  color: string;
  clarity: string;
  cut: string;
  origin: string;
  certificationDate: string;
  batchId: string;
  status: "Disponível" | "Reservado" | "Custodiado";
  availability: "Público" | "Credenciado";
  easUID?: string;
}

export function RegistryGalleryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);
  const [selectedOrigin, setSelectedOrigin] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedClarity, setSelectedClarity] = useState("all");
  const [weightRange, setWeightRange] = useState([0, 10]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Mock data - esmeraldas certificadas
  const certifiedEmeralds: CertifiedEmerald[] = [
    {
      id: "GML-ESM-2024-00001",
      spectralHash: "0x7f3a...",
      image: "https://images.unsplash.com/photo-1605821771565-35e0d046a2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwZ2Vtc3RvbmUlMjBqZXdlbHJ5fGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 2.45,
      color: "Verde Intenso",
      clarity: "VS1",
      cut: "Esmeralda",
      origin: "COOPESMERALDA - Lote A-001",
      certificationDate: "15/12/2024",
      batchId: "#3184",
      status: "Disponível",
      availability: "Público",
      easUID: "0x4f2d3a1b5c6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
    },
    {
      id: "GML-ESM-2024-00002",
      spectralHash: "0x8b4c...",
      image: "https://images.unsplash.com/photo-1669867660200-810bd0921333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVtZXJhbGQlMjBjcnlzdGFsfGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 4.12,
      color: "Verde Médio",
      clarity: "VVS2",
      cut: "Oval",
      origin: "COOPESMERALDA - Lote A-001",
      certificationDate: "14/12/2024",
      batchId: "#3184",
      status: "Disponível",
      availability: "Público",
    },
    {
      id: "GML-ESM-2024-00003",
      spectralHash: "0x2e9f...",
      image: "https://images.unsplash.com/photo-1676617481869-613bc310c0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwc3RvbmUlMjBnZW9sb2d5fGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 3.87,
      color: "Verde Vivo",
      clarity: "VS2",
      cut: "Redondo",
      origin: "COOPESMERALDA - Lote B-015",
      certificationDate: "13/12/2024",
      batchId: "#3598",
      status: "Custodiado",
      availability: "Público",
    },
    {
      id: "GML-ESM-2024-00004",
      spectralHash: "0x5d7a...",
      image: "https://images.unsplash.com/photo-1667419941709-7db68fe7828f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaW91cyUyMGdlbXN0b25lJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjY2OTMyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 1.95,
      color: "Verde Intenso",
      clarity: "VVS1",
      cut: "Esmeralda",
      origin: "COOPESMERALDA - Lote C-007",
      certificationDate: "12/12/2024",
      batchId: "#3752",
      status: "Disponível",
      availability: "Credenciado",
    },
    {
      id: "GML-ESM-2024-00005",
      spectralHash: "0x1c4b...",
      image: "https://images.unsplash.com/photo-1605821771565-35e0d046a2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwZ2Vtc3RvbmUlMjBqZXdlbHJ5fGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 5.23,
      color: "Verde Médio",
      clarity: "VS1",
      cut: "Oval",
      origin: "COOPESMERALDA - Lote D-022",
      certificationDate: "11/12/2024",
      batchId: "#3184",
      status: "Reservado",
      availability: "Credenciado",
    },
    {
      id: "GML-ESM-2024-00006",
      spectralHash: "0x9e2d...",
      image: "https://images.unsplash.com/photo-1669867660200-810bd0921333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVtZXJhbGQlMjBjcnlzdGFsfGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 2.78,
      color: "Verde Vivo",
      clarity: "VVS2",
      cut: "Redondo",
      origin: "COOPESMERALDA - Lote A-001",
      certificationDate: "10/12/2024",
      batchId: "#3598",
      status: "Disponível",
      availability: "Público",
    },
    {
      id: "GML-ESM-2024-00007",
      spectralHash: "0x6a8f...",
      image: "https://images.unsplash.com/photo-1676617481869-613bc310c0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwc3RvbmUlMjBnZW9sb2d5fGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 3.45,
      color: "Verde Intenso",
      clarity: "VS2",
      cut: "Esmeralda",
      origin: "COOPESMERALDA - Lote B-015",
      certificationDate: "09/12/2024",
      batchId: "#3752",
      status: "Custodiado",
      availability: "Público",
    },
    {
      id: "GML-ESM-2024-00008",
      spectralHash: "0x3b5e...",
      image: "https://images.unsplash.com/photo-1667419941709-7db68fe7828f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaW91cyUyMGdlbXN0b25lJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjY2OTMyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      weight: 4.67,
      color: "Verde Médio",
      clarity: "VVS1",
      cut: "Oval",
      origin: "COOPESMERALDA - Lote C-007",
      certificationDate: "08/12/2024",
      batchId: "#3184",
      status: "Disponível",
      availability: "Público",
    },
  ];

  // Filtering logic
  const filteredEmeralds = certifiedEmeralds.filter((emerald) => {
    const matchesSearch =
      emerald.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emerald.spectralHash.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emerald.origin.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesOrigin =
      selectedOrigin === "all" || emerald.origin.includes(selectedOrigin);
    const matchesColor =
      selectedColor === "all" || emerald.color === selectedColor;
    const matchesClarity =
      selectedClarity === "all" || emerald.clarity === selectedClarity;
    const matchesWeight =
      emerald.weight >= weightRange[0] && emerald.weight <= weightRange[1];

    return (
      matchesSearch &&
      matchesOrigin &&
      matchesColor &&
      matchesClarity &&
      matchesWeight
    );
  });

  // Pagination
  const totalPages = Math.ceil(filteredEmeralds.length / itemsPerPage);
  const paginatedEmeralds = filteredEmeralds.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1b1b1b] via-[#014733] to-[#006b4f] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-none">
              <Sparkles className="h-3 w-3 mr-1" />
              Registry Público de Certificações
            </Badge>
            <h1 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold mb-4">
              Galeria de Esmeraldas Certificadas
            </h1>
            <p className="font-['Inter'] text-xl text-gray-200 leading-relaxed">
              Explore o catálogo completo de esmeraldas certificadas cientificamente
              pelo GEMLAB com rastreabilidade verificada desde a origem
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Row Removed for Simplification */}


        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <aside className="lg:w-80 space-y-6">
              {/* Search */}
              <Card className="p-6 border-2 border-[#e5e7eb]">
                <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-4">
                  Buscar
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="ID, SpectralHash, Origem..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 font-['Inter']"
                  />
                </div>
              </Card>

              {/* Filters */}
              <Card className="p-6 border-2 border-[#e5e7eb]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-['Inter'] font-bold text-[#1b1b1b]">
                    Filtros Avançados
                  </h3>
                  <SlidersHorizontal className="h-4 w-4 text-[#006b4f]" />
                </div>

                <div className="space-y-4">
                  {/* Origin Filter */}
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                      Origem
                    </label>
                    <Select value={selectedOrigin} onValueChange={setSelectedOrigin}>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas as origens" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as origens</SelectItem>
                        <SelectItem value="Lote A-001">Lote A-001</SelectItem>
                        <SelectItem value="Lote B-015">Lote B-015</SelectItem>
                        <SelectItem value="Lote C-007">Lote C-007</SelectItem>
                        <SelectItem value="Lote D-022">Lote D-022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Color Filter */}
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                      Cor
                    </label>
                    <Select value={selectedColor} onValueChange={setSelectedColor}>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas as cores" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as cores</SelectItem>
                        <SelectItem value="Verde Intenso">Verde Intenso</SelectItem>
                        <SelectItem value="Verde Médio">Verde Médio</SelectItem>
                        <SelectItem value="Verde Vivo">Verde Vivo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Clarity Filter */}
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                      Clareza
                    </label>
                    <Select value={selectedClarity} onValueChange={setSelectedClarity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas as claridades" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as claridades</SelectItem>
                        <SelectItem value="VVS1">VVS1</SelectItem>
                        <SelectItem value="VVS2">VVS2</SelectItem>
                        <SelectItem value="VS1">VS1</SelectItem>
                        <SelectItem value="VS2">VS2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Weight Range */}
                  <div>
                    <label className="font-['Inter'] text-sm font-medium text-gray-700 mb-2 block">
                      Peso (quilates): {weightRange[0]}ct - {weightRange[1]}ct
                    </label>
                    <Slider
                      min={0}
                      max={10}
                      step={0.1}
                      value={weightRange}
                      onValueChange={setWeightRange}
                      className="mt-2"
                    />
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedOrigin("all");
                    setSelectedColor("all");
                    setSelectedClarity("all");
                    setWeightRange([0, 10]);
                  }}
                >
                  Limpar Filtros
                </Button>
              </Card>

              {/* CTA Card */}
              <Card className="p-6 border-2 border-[#006b4f] bg-gradient-to-br from-[#006b4f]/5 to-white">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#006b4f] mx-auto flex items-center justify-center">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-['Inter'] font-bold text-[#1b1b1b]">
                    Acesso Comercial
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Joalheiros e varejistas credenciados têm acesso a funcionalidades
                    comerciais exclusivas
                  </p>
                  <Button className="w-full bg-[#006b4f] text-white hover:bg-[#014733]">
                    Solicitar Credenciamento
                  </Button>
                </div>
              </Card>
            </aside>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={
                    viewMode === "grid"
                      ? "bg-[#006b4f] text-white"
                      : "border-[#e5e7eb] text-gray-600"
                  }
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={
                    viewMode === "list"
                      ? "bg-[#006b4f] text-white"
                      : "border-[#e5e7eb] text-gray-600"
                  }
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden border-[#e5e7eb] text-gray-600"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </div>

              <p className="font-['Inter'] text-sm text-gray-600">
                Mostrando {paginatedEmeralds.length} de {filteredEmeralds.length}{" "}
                resultados
              </p>
            </div>

            {/* Grid View */}
            {viewMode === "grid" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedEmeralds.map((emerald) => (
                  <Card
                    key={emerald.id}
                    className="overflow-hidden border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300 hover:shadow-xl group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-56 bg-gradient-to-br from-[#006b4f]/5 to-white overflow-hidden">
                      <ImageWithFallback
                        src={emerald.image}
                        alt={`Esmeralda ${emerald.id}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      {/* Status Badge */}
                      <Badge
                        className={`absolute top-3 right-3 ${getStatusColor(emerald.status)}`}
                      >
                        {emerald.status}
                      </Badge>
                      {/* Availability Badge */}
                      {emerald.availability === "Credenciado" && (
                        <Badge className="absolute top-3 left-3 bg-[#caa34b] text-white">
                          <Lock className="h-3 w-3 mr-1" />
                          Credenciado
                        </Badge>
                      )}
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
                        {emerald.easUID && (
                          <div className="flex items-center gap-1 mt-1">
                            <CheckCircle2 className="h-3 w-3 text-[#caa34b]" />
                            <span className="font-['Inter'] text-[10px] text-[#caa34b] font-medium">
                              EAS Verified
                            </span>
                          </div>
                        )}
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
                          <p className="font-['Inter'] text-xs text-gray-500">
                            Clareza
                          </p>
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

                      {/* Origin */}
                      <div className="pt-3 border-t border-[#e5e7eb]">
                        <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                          Origem
                        </p>
                        <p className="font-['Inter'] text-sm text-[#1b1b1b]">
                          {emerald.origin}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full bg-[#006b4f] text-white hover:bg-[#014733]">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Certificação
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <div className="space-y-4">
                {paginatedEmeralds.map((emerald) => (
                  <Card
                    key={emerald.id}
                    className="overflow-hidden border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300 hover:shadow-lg group cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image */}
                      <div className="relative sm:w-48 h-48 bg-gradient-to-br from-[#006b4f]/5 to-white overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={emerald.image}
                          alt={`Esmeralda ${emerald.id}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {emerald.availability === "Credenciado" && (
                          <Badge className="absolute top-3 left-3 bg-[#caa34b] text-white">
                            <Lock className="h-3 w-3 mr-1" />
                            Credenciado
                          </Badge>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1 space-y-3">
                            {/* Header */}
                            <div className="flex items-start justify-between">
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
                                {emerald.easUID && (
                                  <div className="flex items-center gap-1 mt-1">
                                    <CheckCircle2 className="h-3 w-3 text-[#caa34b]" />
                                    <span className="font-['Inter'] text-[10px] text-[#caa34b] font-medium">
                                      EAS Verified
                                    </span>
                                  </div>
                                )}
                              </div>
                              <Badge className={getStatusColor(emerald.status)}>
                                {emerald.status}
                              </Badge>
                            </div>

                            {/* Details */}
                            <div className="flex flex-wrap gap-4">
                              <div>
                                <p className="font-['Inter'] text-xs text-gray-500">
                                  Peso
                                </p>
                                <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                                  {emerald.weight.toFixed(2)} ct
                                </p>
                              </div>
                              <div>
                                <p className="font-['Inter'] text-xs text-gray-500">
                                  Cor
                                </p>
                                <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                                  {emerald.color}
                                </p>
                              </div>
                              <div>
                                <p className="font-['Inter'] text-xs text-gray-500">
                                  Clareza
                                </p>
                                <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                                  {emerald.clarity}
                                </p>
                              </div>
                              <div>
                                <p className="font-['Inter'] text-xs text-gray-500">
                                  Corte
                                </p>
                                <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                                  {emerald.cut}
                                </p>
                              </div>
                            </div>

                            {/* Origin */}
                            <div>
                              <p className="font-['Inter'] text-xs text-gray-500">
                                Origem
                              </p>
                              <p className="font-['Inter'] text-sm text-[#1b1b1b]">
                                {emerald.origin}
                              </p>
                            </div>
                          </div>

                          {/* CTA */}
                          <Button className="sm:w-auto bg-[#006b4f] text-white hover:bg-[#014733]">
                            <Eye className="h-4 w-4 mr-2" />
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="border-[#e5e7eb]"
                >
                  Anterior
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? "bg-[#006b4f] text-white"
                        : "border-[#e5e7eb] text-gray-600"
                    }
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="border-[#e5e7eb]"
                >
                  Próximo
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <Card className="mt-12 p-8 border-2 border-[#006b4f] bg-gradient-to-br from-[#006b4f]/5 to-white">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b]">
              Interessado em Acesso Comercial?
            </h3>
            <p className="font-['Inter'] text-gray-600">
              Joalheiros e varejistas credenciados têm acesso a informações comerciais,
              sistema de reserva de consulta e contato direto com a COOPESMERALDA
            </p>
            <Button
              size="lg"
              className="bg-[#006b4f] text-white hover:bg-[#014733]"
            >
              Solicitar Credenciamento Comercial
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
