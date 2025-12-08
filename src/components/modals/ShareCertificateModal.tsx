import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  X, 
  Copy, 
  Download, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Mail,
  CheckCircle2,
  QrCode,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

interface ShareCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  gemId: string;
  spectralHash: string;
  certificationDate: string;
}

export function ShareCertificateModal({ 
  isOpen, 
  onClose, 
  gemId,
  spectralHash,
  certificationDate 
}: ShareCertificateModalProps) {
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  if (!isOpen) return null;

  const certificateUrl = `https://gemlab.tech/certificate/${gemId}`;
  const shareText = `Esmeralda Certificada GEMLAB ${gemId} - Rastreabilidade 100% Verificada via Blockchain`;

  const copyToClipboard = (text: string, setter: (value: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  const shareOnSocial = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(certificateUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(certificateUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(certificateUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${certificateUrl}`)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <Card className="w-full max-w-2xl bg-white shadow-2xl border-2 border-[#006b4f] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#006b4f] to-[#014733] text-white p-6 rounded-t-lg">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-['Montserrat'] text-2xl font-bold mb-2">
                Compartilhar Certificado
              </h2>
              <p className="font-['Inter'] text-sm text-white/80">
                Compartilhe a autenticidade verificada desta esmeralda
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Certificate Info */}
          <div className="mb-8">
            <Badge className="bg-[#006b4f] text-white mb-4">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              Certificado Verificado
            </Badge>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-['Inter'] text-sm text-gray-600">ID do Certificado:</span>
                <span className="font-['Inter'] font-bold text-[#1b1b1b]">{gemId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-['Inter'] text-sm text-gray-600">Data de Certificação:</span>
                <span className="font-['Inter'] font-bold text-[#1b1b1b]">{certificationDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-['Inter'] text-sm text-gray-600">SpectralHash:</span>
                <span className="font-['Inter'] font-mono text-xs text-[#1b1b1b] truncate max-w-xs">
                  {spectralHash}
                </span>
              </div>
            </div>
          </div>

          {/* Share Link */}
          <div className="mb-8">
            <label className="font-['Inter'] text-sm font-semibold text-gray-700 mb-2 block">
              Link de Verificação Pública
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={certificateUrl}
                readOnly
                className="flex-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg font-['Mono'] text-sm text-gray-700"
              />
              <Button
                onClick={() => copyToClipboard(certificateUrl, setCopied)}
                className="bg-[#006b4f] hover:bg-[#014733] text-white"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copiar
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="mb-8">
            <label className="font-['Inter'] text-sm font-semibold text-gray-700 mb-4 block">
              Compartilhar em Redes Sociais
            </label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => shareOnSocial('twitter')}
                variant="outline"
                className="border-2 border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white"
              >
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button
                onClick={() => shareOnSocial('linkedin')}
                variant="outline"
                className="border-2 border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                onClick={() => shareOnSocial('facebook')}
                variant="outline"
                className="border-2 border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button
                onClick={() => shareOnSocial('whatsapp')}
                variant="outline"
                className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Email Template */}
          <div className="mb-8">
            <label className="font-['Inter'] text-sm font-semibold text-gray-700 mb-2 block">
              Template para E-mail
            </label>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
              <p className="font-['Inter'] text-sm text-gray-700 mb-4 leading-relaxed">
                Olá,<br/><br/>
                Gostaria de compartilhar a certificação oficial desta esmeralda rastreável:<br/><br/>
                <strong>ID:</strong> {gemId}<br/>
                <strong>Data:</strong> {certificationDate}<br/>
                <strong>Verificação:</strong> {certificateUrl}<br/><br/>
                Esta esmeralda possui certificação científica GEMLAB com rastreabilidade 100% verificada via blockchain (Ethereum Attestation Service).
              </p>
              <Button
                onClick={() => copyToClipboard(
                  `Olá,\n\nGostaria de compartilhar a certificação oficial desta esmeralda rastreável:\n\nID: ${gemId}\nData: ${certificationDate}\nVerificação: ${certificateUrl}\n\nEsta esmeralda possui certificação científica GEMLAB com rastreabilidade 100% verificada via blockchain (Ethereum Attestation Service).`,
                  setEmailCopied
                )}
                variant="outline"
                className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
              >
                {emailCopied ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Template Copiado!
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Copiar Template
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Download Options */}
          <div className="mb-8">
            <label className="font-['Inter'] text-sm font-semibold text-gray-700 mb-4 block">
              Baixar Certificado
            </label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="border-2 border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                PDF Oficial
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
              >
                <QrCode className="h-4 w-4 mr-2" />
                QR Code
              </Button>
            </div>
          </div>

          {/* Verification Link */}
          <Card className="p-4 bg-emerald-50 border-2 border-emerald-200">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-['Inter'] text-sm text-emerald-900 leading-relaxed">
                  <strong>Verificação Pública:</strong> Qualquer pessoa pode verificar a autenticidade 
                  deste certificado acessando o link acima. Todos os dados estão registrados imutavelmente 
                  na blockchain Ethereum via EAS.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-3 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                  onClick={() => window.open(certificateUrl, '_blank')}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Abrir Página de Verificação
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-6 rounded-b-lg border-t-2 border-gray-200">
          <Button
            onClick={onClose}
            className="w-full bg-[#006b4f] hover:bg-[#014733] text-white"
          >
            Fechar
          </Button>
        </div>
      </Card>
    </div>
  );
}
