## Objetivos
- Implementar contratos GEMLAB (ERC-1155/721, Resolver, Validator, FiscalOracle, Metadata)
- Registrar e operar Schemas EAS (Origem, Ciência, Custódia) com RBAC
- Backend de emissão/consulta de atestados e integração com UI
- Garantir verificação on-chain e mintagem condicional do NFT

## Escopo e Coordenadas
- Diretórios: `contracts/`, `scripts/`, `test/`, `backend/`
- Rede alvo inicial: Sepolia (EAS: `0xC2679fBD...e1815e`)
- Frontend: substituir mocks por hooks/serviços que consultam EAS e contratos

## Fase 1 — Contratos Solidity
- GemlabBatch (ERC-1155): `mint/split/merge`
- GemlabNFT (ERC-721): `mintWithProof`, armazenamento `originUID/scienceUID/custodyUID`
- GemlabMetadata: `tokenURI` dinâmico com UIDs EAS
- GemlabResolver: resolver EAS + RBAC por `schemaUID`
- TokenValidator: `requireValidAttestations`, `getStatus`, leitura de UIDs por `tokenId`
- FiscalOracle: `onTrade` (CFEM/ISS, Fundo 2050)
- Entregáveis: 6 contratos + 15 testes (Hardhat) + `hardhat.config.ts`

## Fase 2 — Registro EAS + RBAC
- Script `scripts/deploy_schemas.ts`: registrar 3 schemas no `SchemaRegistry`
- Script `scripts/configure_rbac.ts`: apontar `GemlabResolver` e roles (Prefeitura, GEMLAB Tech, Vault)
- Entregáveis: 3 `schemaUIDs` válidos, RBAC ativo, logs de UIDs

## Fase 3 — Backend de Atestações
- Serviço `backend/services/attestation/*` (Origin/Science/Custody)
- Uso de `@ethereum-attestation-service/eas-sdk` + `SchemaEncoder`
- Rotas REST: `POST /api/attest/origin`, `POST /api/attest/science`, `POST /api/attest/custody`
- Integração com carteiras institucionais (signers) e validação de dados (CNPJ/NFe)
- Entregáveis: API funcional + UID real retornado + auditoria de transações

## Fase 4 — Integração Frontend
- Hook `useEASAttestation(tokenId)`: ler UIDs do `GemlabNFT` e consultar EAS
- Atualizar `EASVerificationBadge`, `QRVerificationSystem`, `OracleFiscalDashboard` para usar dados reais
- Substituir SCHEMA/UID placeholders por valores do deploy
- Entregáveis: UI conectada à blockchain, status dinâmico por atestados

## Fase 5 — Auditoria e Segurança
- Revisão de RBAC, revogação, pausas e estados (`Legal/Risco/Inválido`)
- Testes de revogação/expiração (Custódia), tentativas de atestar indevidas (Resolver)
- Auditoria de gas/cobertura de testes; checagem de overflow/underflow e reentrância

## Fase 6 — Deploy e Operação
- Deploy em Sepolia (contratos + schemas + RBAC), scripts de verificação
- Integração CI (GitHub Actions) para build/test/deploy
- Documentar addresses/UIDs no repo e atualizar `GemlabMetadata`

## Dependências e Ferramentas
- Hardhat + OpenZeppelin + EAS SDK
- Node.js backend (ethers.js); carteira institucional
- GraphQL EAS (`https://sepolia.easscan.org/graphql`) para verificação

## Entregáveis por Fase
- F1: Contratos + testes + config Hardhat
- F2: Schemas registrados + RBAC
- F3: API de atestação + logs/UID real
- F4: UI conectada + hooks reais
- F5: Relatório de auditoria + correções
- F6: Deploy Sepolia + CI + documentação de endpoints/addresses

## Métricas de Sucesso
- `mintWithProof` só executa com Origem/Ciência válidos
- `getStatus(tokenId)` reflete revogação/expiração de Custódia
- UI mostra UIDs/attesters/timestamps reais (EAS)

## Próximas Ações (Imediatas)
- Criar estrutura `contracts/`, `scripts/`, `test/`, `backend/`
- Inicializar Hardhat e instalar EAS SDK
- Esboçar `TokenValidator` e `GemlabResolver` primeiro; depois `GemlabNFT`

Confirma se devo iniciar pela Fase 1 com criação dos contratos e configuração do Hardhat no repositório.