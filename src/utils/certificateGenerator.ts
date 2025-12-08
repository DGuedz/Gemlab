// Utility para gerar certificado PDF (versão simplificada sem jspdf - usar window.print() estilizado)

export interface CertificateData {
  gemId: string;
  weight: string;
  color: string;
  clarity: string;
  origin: string;
  spectralHash: string;
  certificationDate: string;
  nftContract?: string;
  tokenId?: string;
}

export function generateCertificatePDF(data: CertificateData) {
  // Criar uma nova janela com conteúdo print-friendly
  const printWindow = window.open('', '_blank');
  
  if (!printWindow) {
    alert('Por favor, permita pop-ups para baixar o certificado');
    return;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Certificado ${data.gemId} - GEMLAB</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          padding: 40px;
          background: white;
        }
        
        .certificate {
          max-width: 800px;
          margin: 0 auto;
          border: 4px solid #006b4f;
          padding: 40px;
        }
        
        .header {
          text-align: center;
          border-bottom: 2px solid #006b4f;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        
        .header h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 36px;
          color: #006b4f;
          margin-bottom: 10px;
        }
        
        .header p {
          font-size: 14px;
          color: #666;
        }
        
        .gem-id {
          text-align: center;
          font-size: 28px;
          font-weight: 700;
          color: #1b1b1b;
          margin: 20px 0;
        }
        
        .details {
          margin: 30px 0;
        }
        
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .detail-label {
          font-weight: 600;
          color: #666;
        }
        
        .detail-value {
          font-weight: 700;
          color: #1b1b1b;
        }
        
        .hash-section {
          background: #f9fafb;
          padding: 20px;
          margin: 30px 0;
          border-left: 4px solid #6b21a8;
        }
        
        .hash-section h3 {
          font-family: 'Montserrat', sans-serif;
          color: #6b21a8;
          margin-bottom: 10px;
        }
        
        .hash-value {
          font-family: monospace;
          font-size: 11px;
          color: #1b1b1b;
          word-break: break-all;
          line-height: 1.6;
        }
        
        .footer {
          margin-top: 40px;
          text-align: center;
          font-size: 12px;
          color: #666;
          border-top: 2px solid #006b4f;
          padding-top: 20px;
        }
        
        .verification-note {
          background: #ecfdf5;
          border: 2px solid #10b981;
          padding: 15px;
          margin: 20px 0;
          border-radius: 8px;
        }
        
        .verification-note strong {
          color: #047857;
        }
        
        @media print {
          body {
            padding: 0;
          }
          .no-print {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="certificate">
        <div class="header">
          <h1>GEMLAB</h1>
          <p>Certificado de Autenticidade e Rastreabilidade</p>
          <p>Campos Verdes - Goiás, Brasil</p>
        </div>
        
        <div class="gem-id">
          ${data.gemId}
        </div>
        
        <div class="details">
          <div class="detail-row">
            <span class="detail-label">Peso:</span>
            <span class="detail-value">${data.weight}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Cor:</span>
            <span class="detail-value">${data.color}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Clareza:</span>
            <span class="detail-value">${data.clarity}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Origem:</span>
            <span class="detail-value">${data.origin}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Data de Certificação:</span>
            <span class="detail-value">${data.certificationDate}</span>
          </div>
          ${data.nftContract ? `
          <div class="detail-row">
            <span class="detail-label">NFT Contract:</span>
            <span class="detail-value" style="font-size: 10px; font-family: monospace;">${data.nftContract}</span>
          </div>
          ` : ''}
          ${data.tokenId ? `
          <div class="detail-row">
            <span class="detail-label">Token ID:</span>
            <span class="detail-value">#${data.tokenId}</span>
          </div>
          ` : ''}
        </div>
        
        <div class="hash-section">
          <h3>🔬 SpectralHash (SHA-256)</h3>
          <div class="hash-value">${data.spectralHash}</div>
        </div>
        
        <div class="verification-note">
          <strong>✓ Verificação Blockchain:</strong> Este certificado pode ser verificado publicamente em 
          <strong>https://gemlab.tech/certificate/${data.gemId}</strong>
        </div>
        
        <div class="footer">
          <p><strong>GEMLAB - Protocolo de Confiança para Mineração 4.0</strong></p>
          <p>Tecnologia de Certificação Científica via Espectrometria Raman</p>
          <p>Rastreabilidade Completa - Blockchain Ethereum (Base Network)</p>
          <p style="margin-top: 10px; font-size: 10px;">
            Este documento é válido apenas quando verificado através do link acima.<br/>
            Ethereum Attestation Service (EAS) - Atestações On-Chain Verificáveis
          </p>
        </div>
      </div>
      
      <div class="no-print" style="text-align: center; margin-top: 30px;">
        <button 
          onclick="window.print()" 
          style="
            background: #006b4f;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-right: 10px;
          "
        >
          🖨️ Imprimir / Salvar como PDF
        </button>
        <button 
          onclick="window.close()" 
          style="
            background: #6b7280;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          "
        >
          Fechar
        </button>
      </div>
    </body>
    </html>
  `;
  
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
