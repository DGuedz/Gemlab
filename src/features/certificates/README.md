# Feature: Certificates (Certificação)

## Descrição
Sistema de certificação gemológica e geração de certificados digitais compartilháveis.

## Componentes
- `ShareCertificateModal` - Modal de compartilhamento de certificados
- `CertificationWizard` - Wizard de criação de certificados
- `CertifiedGemsRegistry` - Registro público de gemas certificadas

## Responsabilidades
- Geração de certificados gemológicos digitais
- Compartilhamento de certificados (social, QR Code, download)
- Registro público e auditável de certificações
- Integração com SpectralHash para autenticidade

## APIs e Integrações
- IPFS para armazenamento permanente de certificados
- EAS Protocol para atestações de certificação
- QR Code generation para verificação pública
- Social Share APIs (Twitter, LinkedIn, WhatsApp)
