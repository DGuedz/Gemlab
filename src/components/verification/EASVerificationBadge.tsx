import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip";
import { Building, Microscope, Vault, ExternalLink, CheckCircle2, Shield, AlertCircle } from "lucide-react";
import { useState } from "react";
import { VerifiedBadge } from "../icons/VerifiedBadge";

interface Attestation {
  type: "origin" | "science" | "custody";
  status: "active" | "pending" | "expired";
  attester: string;
  timestamp: string;
  txHash: string;
  easUid: string;
}

interface EASVerificationBadgeProps {
  attestations: Attestation[];
  compact?: boolean;
  loading?: boolean;
}

export function EASVerificationBadge({ attestations, compact = false, loading = false }: EASVerificationBadgeProps) {
  const [expanded, setExpanded] = useState(false);

  // Loading state
  if (loading) {
    return (
      <Card className="p-6 border-2 border-gray-200 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-6 w-6 bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-80 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border-2 border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-5 w-16 bg-gray-100 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  const getAttestationIcon = (type: string) => {
    switch (type) {
      case "origin":
        return Building;
      case "science":
        return Microscope;
      case "custody":
        return Vault;
      default:
        return Shield;
    }
  };

  const getAttestationColor = (type: string) => {
    switch (type) {
      case "origin":
        return { bg: "bg-[#006b4f]", text: "text-[#006b4f]", border: "border-[#006b4f]" };
      case "science":
        return { bg: "bg-purple-600", text: "text-purple-600", border: "border-purple-600" };
      case "custody":
        return { bg: "bg-[#caa34b]", text: "text-[#caa34b]", border: "border-[#caa34b]" };
      default:
        return { bg: "bg-gray-600", text: "text-gray-600", border: "border-gray-600" };
    }
  };

  const getAttestationLabel = (type: string) => {
    switch (type) {
      case "origin":
        return "Prova de Origem";
      case "science":
        return "Prova Científica";
      case "custody":
        return "Prova de Custódia";
      default:
        return "Atestação";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle2 className="h-4 w-4" />;
      case "pending":
        return <AlertCircle className="h-4 w-4" />;
      case "expired":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Shield className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "expired":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const allActive = attestations.every(a => a.status === "active");

  if (compact) {
    return (
      <div className="flex gap-2">
        {attestations.map((attestation, index) => {
          const Icon = getAttestationIcon(attestation.type);
          const colors = getAttestationColor(attestation.type);
          
          return (
            <Badge 
              key={index}
              className={`${colors.bg} text-white border-2`}
              title={`${getAttestationLabel(attestation.type)} - ${attestation.status}`}
            >
              <Icon className="h-3 w-3 mr-1" />
              {attestation.status === "active" ? "✓" : "⚠"}
            </Badge>
          );
        })}
      </div>
    );
  }

  return (
    <Card className={`p-6 border-2 ${allActive ? "border-green-500 bg-green-50" : "border-yellow-500 bg-yellow-50"}`}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <VerifiedBadge size={32} />
            <h3 className="font-['Montserrat'] text-xl font-bold text-[#1b1b1b] flex items-center gap-2">
              Verificação EAS (Ethereum Attestation Service)
              <Tooltip content="EAS (Ethereum Attestation Service) é um protocolo blockchain que permite criar atestações verificáveis e imutáveis. Cada prova (Origem, Ciência, Custódia) é registrada on-chain com timestamp e assinatura digital do atestador." />
            </h3>
          </div>
          <p className="font-['Inter'] text-sm text-gray-600">
            {allActive 
              ? "Todas as atestações estão ativas e verificadas on-chain" 
              : "Algumas atestações necessitam renovação ou validação"}
          </p>
        </div>
        <Badge className={allActive ? "bg-green-600 text-white" : "bg-yellow-600 text-white"}>
          {allActive ? "✓ Verificado" : "⚠ Atenção"}
        </Badge>
      </div>

      {/* Attestations Summary */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {attestations.map((attestation, index) => {
          const Icon = getAttestationIcon(attestation.type);
          const colors = getAttestationColor(attestation.type);
          
          return (
            <Card key={index} className={`p-4 border-2 ${colors.border} bg-white`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`${colors.bg} p-2 rounded-lg`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-['Inter'] font-bold text-sm text-[#1b1b1b]">
                    {getAttestationLabel(attestation.type)}
                  </div>
                  <Badge className={`text-xs mt-1 ${getStatusColor(attestation.status)}`}>
                    {getStatusIcon(attestation.status)}
                    <span className="ml-1 capitalize">{attestation.status}</span>
                  </Badge>
                </div>
              </div>
              {expanded && (
                <div className="space-y-2 pt-3 border-t border-gray-200">
                  <div>
                    <div className="font-['Inter'] text-xs text-gray-500">Atestador</div>
                    <div className="font-['Inter'] text-xs font-mono text-gray-700 truncate">
                      {attestation.attester}
                    </div>
                  </div>
                  <div>
                    <div className="font-['Inter'] text-xs text-gray-500">Data</div>
                    <div className="font-['Inter'] text-xs text-gray-700">
                      {attestation.timestamp}
                    </div>
                  </div>
                  <div>
                    <div className="font-['Inter'] text-xs text-gray-500">EAS UID</div>
                    <div className="font-['Inter'] text-xs font-mono text-gray-700 truncate">
                      {attestation.easUid}
                    </div>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="space-y-4 pt-4 border-t border-gray-300">
          <h4 className="font-['Inter'] font-bold text-sm text-[#1b1b1b]">
            Transações On-Chain
          </h4>
          {attestations.map((attestation, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div className="flex-1">
                <div className="font-['Inter'] text-xs font-bold text-gray-700 mb-1">
                  {getAttestationLabel(attestation.type)}
                </div>
                <div className="font-['Inter'] text-xs font-mono text-gray-500 truncate">
                  {attestation.txHash}
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white ml-3"
                onClick={() => window.open(`https://base.blockscout.com/tx/${attestation.txHash}`, '_blank')}
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                Ver na Base
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <div className="mt-4 text-center">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setExpanded(!expanded)}
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          {expanded ? "Ocultar Detalhes" : "Ver Detalhes Completos"}
          <ExternalLink className="h-3 w-3 ml-2" />
        </Button>
      </div>
    </Card>
  );
}