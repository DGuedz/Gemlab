import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Slider } from "../ui/slider";
import {
  Search,
  Filter,
  Sparkles,
  Eye,
  ShoppingCart,
  Download,
  ExternalLink,
  QrCode,
  Fingerprint,
  CheckCircle2,
  Award,
  SlidersHorizontal,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "../ui/sheet";

interface Stone {
  id: string;
  tokenId: number;
  stoneRef: string;
  weight: number;
  color: string;
  clarity: string;
  price: number;
  spectralHash: string;
  ipfsCid: string;
  certifier: string;
  status: "Certificado" | "Tokenizado" | "Listado";
  images: number;
}

export function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    color: "all",
    clarity: "all",
    certifier: "all",
    priceMin: 0,
    priceMax: 200000,
    weightMin: 0,
    weightMax: 10,
  });
  const [sortBy, setSortBy] = useState("recent");

  const stones: Stone[] = [
    {
      id: "GEM-2024-1247",
      tokenId: 1247,
      stoneRef: "CV-GO-2024-1247",
      weight: 3.42,
      color: "Verde Intenso",
      clarity: "VS1",
      price: 45800,
      spectralHash: "0x7f3a92c4",
      ipfsCid: "QmX7f3a92c4",
      certifier: "GemLab Certificado",
      status: "Listado",
      images: 12,
    },
    {
      id: "GEM-2024-1246",
      tokenId: 1246,
      stoneRef: "CV-GO-2024-1246",
      weight: 2.18,
      color: "Verde Médio",
      clarity: "VVS2",
      price: 28500,
      spectralHash: "0x4b2d81f3",
      ipfsCid: "QmX4b2d81f3",
      certifier: "GemLab Certificado",
      status: "Listado",
      images: 10,
    },
    {
      id: "GEM-2024-1245",
      tokenId: 1245,
      stoneRef: "CV-GO-2024-1245",
      weight: 5.67,
      color: "Verde Intenso",
      clarity: "VS2",
      price: 89200,
      spectralHash: "0x9c5e73a1",
      ipfsCid: "QmX9c5e73a1",
      certifier: "GemLab Certificado",
      status: "Tokenizado",
      images: 15,
    },
    {
      id: "GEM-2024-1244",
      tokenId: 1244,
      stoneRef: "CV-GO-2024-1244",
      weight: 1.85,
      color: "Verde Claro",
      clarity: "VVS1",
      price: 22300,
      spectralHash: "0x2f7b94e2",
      ipfsCid: "QmX2f7b94e2",
      certifier: "Lab Internacional",
      status: "Listado",
      images: 8,
    },
    {
      id: "GEM-2024-1243",
      tokenId: 1243,
      stoneRef: "CV-GO-2024-1243",
      weight: 4.12,
      color: "Verde Intenso",
      clarity: "VS1",
      price: 62400,
      spectralHash: "0x8a3c62d5",
      ipfsCid: "QmX8a3c62d5",
      certifier: "GemLab Certificado",
      status: "Listado",
      images: 11,
    },
    {
      id: "GEM-2024-1242",
      tokenId: 1242,
      stoneRef: "CV-GO-2024-1242",
      weight: 2.95,
      color: "Verde Médio",
      clarity: "VS2",
      price: 35700,
      spectralHash: "0x6d4e91b3",
      ipfsCid: "QmX6d4e91b3",
      certifier: "Lab Internacional",
      status: "Certificado",
      images: 9,
    },
  ];

  const FilterSection = () => (
    <div className="space-y-6">
      <div>
        <Label className="mb-3 block">Cor</Label>
        <Select value={filters.color} onValueChange={(value) => setFilters({ ...filters, color: value })}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Cores</SelectItem>
            <SelectItem value="verde-claro">Verde Claro</SelectItem>
            <SelectItem value="verde-medio">Verde Médio</SelectItem>
            <SelectItem value="verde-intenso">Verde Intenso</SelectItem>
            <SelectItem value="verde-escuro">Verde Escuro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="mb-3 block">Clareza</Label>
        <Select value={filters.clarity} onValueChange={(value) => setFilters({ ...filters, clarity: value })}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Claridades</SelectItem>
            <SelectItem value="FL">FL (Flawless)</SelectItem>
            <SelectItem value="IF">IF</SelectItem>
            <SelectItem value="VVS1">VVS1</SelectItem>
            <SelectItem value="VVS2">VVS2</SelectItem>
            <SelectItem value="VS1">VS1</SelectItem>
            <SelectItem value="VS2">VS2</SelectItem>
            <SelectItem value="SI1">SI1</SelectItem>
            <SelectItem value="SI2">SI2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="mb-3 block">Certificadora</Label>
        <Select value={filters.certifier} onValueChange={(value) => setFilters({ ...filters, certifier: value })}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="gemlab">GemLab Certificado</SelectItem>
            <SelectItem value="international">Lab Internacional</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="mb-3 block">
          Faixa de Preço: R$ {filters.priceMin.toLocaleString()} - R$ {filters.priceMax.toLocaleString()}
        </Label>
        <Slider
          value={[filters.priceMin, filters.priceMax]}
          min={0}
          max={200000}
          step={1000}
          onValueChange={(values) =>
            setFilters({ ...filters, priceMin: values[0], priceMax: values[1] })
          }
          className="mt-2"
        />
      </div>

      <div>
        <Label className="mb-3 block">
          Peso (quilates): {filters.weightMin} - {filters.weightMax} ct
        </Label>
        <Slider
          value={[filters.weightMin, filters.weightMax]}
          min={0}
          max={10}
          step={0.1}
          onValueChange={(values) =>
            setFilters({ ...filters, weightMin: values[0], weightMax: values[1] })
          }
          className="mt-2"
        />
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() =>
          setFilters({
            color: "all",
            clarity: "all",
            certifier: "all",
            priceMin: 0,
            priceMax: 200000,
            weightMin: 0,
            weightMax: 10,
          })
        }
      >
        Limpar Filtros
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#006b4f] to-[#014733] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-['Inter'] text-3xl lg:text-4xl font-bold mb-3">
            Marketplace de Esmeraldas Certificadas
          </h1>
          <p className="font-['Inter'] text-lg text-gray-200">
            Ativos tokenizados com rastreabilidade completa e autenticidade garantida
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Buscar por ID, referência, SpectralHash..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Mais Recentes</SelectItem>
                <SelectItem value="price-asc">Menor Preço</SelectItem>
                <SelectItem value="price-desc">Maior Preço</SelectItem>
                <SelectItem value="weight-asc">Menor Peso</SelectItem>
                <SelectItem value="weight-desc">Maior Peso</SelectItem>
              </SelectContent>
            </Select>
            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                  <SheetDescription className="sr-only">
                    Configure os filtros para refinar sua busca por esmeraldas certificadas
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSection />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <Card className="p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5 text-[#006b4f]" />
                <h3 className="font-['Inter'] font-semibold text-[#1b1b1b]">
                  Filtros
                </h3>
              </div>
              <FilterSection />
            </Card>
          </div>

          {/* Stones Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-['Inter'] text-sm text-gray-600">
                {stones.length} esmeraldas encontradas
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Grid
                </Button>
                <Button variant="ghost" size="sm">
                  Lista
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {stones.map((stone) => (
                <Card
                  key={stone.id}
                  className="overflow-hidden border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300 hover:shadow-xl group"
                >
                  {/* Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-[#006b4f] to-[#014733] p-8 flex items-center justify-center">
                    <Sparkles className="h-24 w-24 text-[#caa34b] group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-3 right-3">
                      <Badge
                        className={
                          stone.status === "Listado"
                            ? "bg-green-100 text-green-700"
                            : stone.status === "Tokenizado"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                        }
                      >
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        {stone.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
                        {stone.images} fotos
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <code className="font-['Inter'] text-xs font-mono text-gray-500">
                          {stone.id}
                        </code>
                        <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mt-1">
                          {stone.stoneRef}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="font-['Inter'] text-xs text-gray-500">Preço</div>
                        <div className="font-['Inter'] text-xl font-bold text-[#006b4f]">
                          R$ {(stone.price / 1000).toFixed(1)}k
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                          Peso
                        </div>
                        <div className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                          {stone.weight} ct
                        </div>
                      </div>
                      <div>
                        <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                          Cor
                        </div>
                        <div className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                          {stone.color}
                        </div>
                      </div>
                      <div>
                        <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                          Clareza
                        </div>
                        <div className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                          {stone.clarity}
                        </div>
                      </div>
                      <div>
                        <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                          Token ID
                        </div>
                        <div className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                          #{stone.tokenId}
                        </div>
                      </div>
                    </div>

                    {/* SpectralHash */}
                    <div className="pt-3 border-t border-[#e5e7eb]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-['Inter'] text-xs text-gray-500 flex items-center gap-1">
                          <Fingerprint className="h-3 w-3" />
                          SpectralHash
                        </span>
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          Verificar
                        </Button>
                      </div>
                      <code className="font-['Inter'] text-xs font-mono text-[#006b4f] block truncate">
                        {stone.spectralHash}
                      </code>
                    </div>

                    {/* Certifier */}
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-[#caa34b]" />
                      <span className="font-['Inter'] text-xs text-gray-600">
                        {stone.certifier}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#006b4f] text-[#006b4f]"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Detalhes
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#006b4f] text-white hover:bg-[#014733]"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Comprar
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}