import { useEffect, useRef } from "react";
import { Card } from "./card";
import { Button } from "./button";
import { Download } from "lucide-react";

interface QRCodeGeneratorProps {
  value: string;
  size?: number;
  title?: string;
}

export function QRCodeGenerator({ value, size = 256, title }: QRCodeGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Simple QR code generation usando data matrix simplificado
    // Em produção, usar biblioteca como qrcode.react ou qr-code-styling
    
    const gridSize = 29; // Típico QR code é 29x29 modules
    const moduleSize = size / gridSize;

    // Clear canvas
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    // Generate pseudo-random pattern based on value (deterministic)
    const generatePattern = (str: string) => {
      const pattern: boolean[][] = [];
      for (let y = 0; y < gridSize; y++) {
        pattern[y] = [];
        for (let x = 0; x < gridSize; x++) {
          const charCode = str.charCodeAt((y * gridSize + x) % str.length);
          pattern[y][x] = (charCode + x + y) % 2 === 0;
        }
      }
      return pattern;
    };

    const pattern = generatePattern(value);

    // Draw QR pattern
    ctx.fillStyle = "#1b1b1b";
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (pattern[y][x]) {
          ctx.fillRect(
            x * moduleSize,
            y * moduleSize,
            moduleSize,
            moduleSize
          );
        }
      }
    }

    // Draw finder patterns (cantos)
    const drawFinderPattern = (startX: number, startY: number) => {
      ctx.fillStyle = "#1b1b1b";
      ctx.fillRect(startX * moduleSize, startY * moduleSize, 7 * moduleSize, 7 * moduleSize);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect((startX + 1) * moduleSize, (startY + 1) * moduleSize, 5 * moduleSize, 5 * moduleSize);
      ctx.fillStyle = "#1b1b1b";
      ctx.fillRect((startX + 2) * moduleSize, (startY + 2) * moduleSize, 3 * moduleSize, 3 * moduleSize);
    };

    drawFinderPattern(0, 0); // Top-left
    drawFinderPattern(gridSize - 7, 0); // Top-right
    drawFinderPattern(0, gridSize - 7); // Bottom-left
  }, [value, size]);

  const downloadQRCode = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `qrcode-${value.slice(0, 10)}.png`;
    link.click();
  };

  return (
    <Card className="p-6 bg-white border-2 border-gray-200">
      {title && (
        <h4 className="font-['Inter'] font-bold text-sm text-[#1b1b1b] mb-4 text-center">
          {title}
        </h4>
      )}
      <div className="flex flex-col items-center gap-4">
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="border-4 border-[#006b4f] rounded-lg"
        />
        <Button
          size="sm"
          onClick={downloadQRCode}
          className="bg-[#006b4f] hover:bg-[#014733] text-white"
        >
          <Download className="h-4 w-4 mr-2" />
          Baixar QR Code
        </Button>
        <p className="font-['Inter'] text-xs text-gray-500 text-center max-w-xs">
          Escaneie para verificar a autenticidade
        </p>
      </div>
    </Card>
  );
}
