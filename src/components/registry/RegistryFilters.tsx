import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Sliders,
  X,
  Calendar,
  MapPin,
  Weight,
  Filter,
} from "lucide-react";

interface RegistryFiltersProps {
  onApplyFilters: (filters: any) => void;
  onClearFilters: () => void;
}

export function RegistryFilters({
  onApplyFilters,
  onClearFilters,
}: RegistryFiltersProps) {
  const handleApply = () => {
    // Mock filters - poderia ser expandido com state real
    onApplyFilters({});
  };

  return (
    <Card className="p-6 border-2 border-[#e5e7eb] bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sliders className="h-5 w-5 text-[#006b4f]" />
          <h3 className="font-['Inter'] font-semibold text-[#1b1b1b]">
            Filtros Avançados
          </h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="text-gray-600 hover:text-[#1b1b1b]"
        >
          <X className="h-4 w-4 mr-2" />
          Limpar
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Peso Mínimo */}
        <div className="space-y-2">
          <Label
            htmlFor="minWeight"
            className="flex items-center gap-2 text-sm"
          >
            <Weight className="h-4 w-4 text-gray-500" />
            Peso Mín. (ct)
          </Label>
          <Input
            id="minWeight"
            type="number"
            step="0.01"
            placeholder="0.00"
            className="font-['Inter']"
          />
        </div>

        {/* Peso Máximo */}
        <div className="space-y-2">
          <Label
            htmlFor="maxWeight"
            className="flex items-center gap-2 text-sm"
          >
            <Weight className="h-4 w-4 text-gray-500" />
            Peso Máx. (ct)
          </Label>
          <Input
            id="maxWeight"
            type="number"
            step="0.01"
            placeholder="10.00"
            className="font-['Inter']"
          />
        </div>

        {/* Data Início */}
        <div className="space-y-2">
          <Label
            htmlFor="startDate"
            className="flex items-center gap-2 text-sm"
          >
            <Calendar className="h-4 w-4 text-gray-500" />
            Data Início
          </Label>
          <Input
            id="startDate"
            type="date"
            className="font-['Inter']"
          />
        </div>

        {/* Data Fim */}
        <div className="space-y-2">
          <Label htmlFor="endDate" className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-gray-500" />
            Data Fim
          </Label>
          <Input
            id="endDate"
            type="date"
            className="font-['Inter']"
          />
        </div>
      </div>

      {/* Origem */}
      <div className="space-y-2 mb-6">
        <Label htmlFor="origin" className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-gray-500" />
          Origem / Localização
        </Label>
        <Input
          id="origin"
          placeholder="Ex: COOPESMERALDA, Setor A-001, Campos Verdes..."
          className="font-['Inter']"
        />
      </div>

      {/* Status Tags */}
      <div className="space-y-2 mb-6">
        <Label className="flex items-center gap-2 text-sm">
          <Filter className="h-4 w-4 text-gray-500" />
          Status
        </Label>
        <div className="flex flex-wrap gap-2">
          <Badge
            className="bg-[#006b4f] text-white cursor-pointer hover:bg-[#014733] transition-colors"
          >
            Certificado
          </Badge>
          <Badge
            className="bg-[#caa34b] text-white cursor-pointer hover:bg-[#b8923f] transition-colors"
          >
            Validado
          </Badge>
          <Badge
            className="bg-gray-400 text-white cursor-pointer hover:bg-gray-500 transition-colors"
          >
            Em Análise
          </Badge>
        </div>
      </div>

      {/* Apply Button */}
      <Button
        onClick={handleApply}
        className="w-full bg-[#006b4f] text-white hover:bg-[#014733]"
      >
        <Sliders className="h-4 w-4 mr-2" />
        Aplicar Filtros
      </Button>
    </Card>
  );
}
