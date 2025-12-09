# 💻 GEMLAB Protocol - Developer Documentation

![Solidity](https://img.shields.io/badge/Solidity-0.8.20-363636?logo=solidity)
![Hardhat](https://img.shields.io/badge/Hardhat-2.19-yellow?logo=ethereum)
![Test Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen)
![Security Audit](https://img.shields.io/badge/audit-Quantstamp-blue)
![EAS SDK](https://img.shields.io/badge/EAS%20SDK-v2.5-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Overview for Developers

This document provides **technical implementation details** for blockchain developers, smart contract engineers, and integration partners building on the GEMLAB Protocol.

The GEMLAB Protocol is an **EVM-compatible RWA tokenization infrastructure** that combines:
- **ERC-721 NFTs** for asset representation
- **Ethereum Attestation Service (EAS)** for off-chain oracle verification
- **Zero-Knowledge Proofs** for privacy-preserving tax compliance
- **Multi-signature custody** for physical asset security

---

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    GEMLAB RWA Protocol Stack                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   ERC-721    │  │  EAS Oracle  │  │  ZK Circuit  │          │
│  │  NFT Token   │  │  Attestation │  │  (Tax Proof) │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│         │                  │                  │                 │
│         └──────────────────┼──────────────────┘                 │
│                            │                                     │
│  ┌─────────────────────────▼────────────────────────┐           │
│  │      GemLabRWA.sol (Main Smart Contract)         │           │
│  │  - Conditional Validity (EAS #1, #2, #5)         │           │
│  │  - KYC-Gated Transfer (ERC-3643 compatible)      │           │
│  │  - Automated Tax Calculation (CFEM + ISS)        │           │
│  └──────────────────────────────────────────────────┘           │
│                            │                                     │
│  ┌─────────────────────────▼────────────────────────┐           │
│  │           Ethereum Mainnet / Layer 2              │           │
│  └───────────────────────────────────────────────────┘           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

        ▲                      ▲                      ▲
        │                      │                      │
┌───────┴───────┐      ┌───────┴───────┐      ┌──────┴──────┐
│ COOPESMERALDA │      │  GEMLAB Tech  │      │ VASP Partner │
│  (Custodian)  │      │ (Science Lab) │      │  (KYC/AML)   │
└───────────────┘      └───────────────┘      └─────────────┘
   NFe Hash              SpectralHash           Wallet KYC
   (EAS #1)              (EAS #2)               (EAS #3)
```

---

## 🔧 Core Smart Contracts

### 1. **GemLabRWA.sol** (ERC-721 NFT)

The main contract representing tokenized emeralds with built-in compliance logic.

#### Key Features:
- **Conditional Validity:** Token becomes invalid if any required EAS attestation is revoked
- **Transfer Restrictions:** Only KYC-verified wallets can receive tokens
- **Metadata Storage:** IPFS hash pointing to gemological certificate + SpectralHash

#### Contract Interface:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";

contract GemLabRWA is ERC721, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");
    
    IEAS public easContract;
    
    struct EmeraldAsset {
        bytes32 originAttestationUID;    // EAS #1 (COOPESMERALDA NFe)
        bytes32 scienceAttestationUID;   // EAS #2 (SpectralHash)
        bytes32 taxAttestationUID;       // EAS #5 (CFEM/ISS Payment)
        string ipfsMetadataHash;         // Certificate + photos
        uint256 caratWeight;             // Weight in carats (×100 for precision)
        uint256 valuationBRL;            // Appraisal value in BRL cents
        uint256 mintTimestamp;
    }
    
    mapping(uint256 => EmeraldAsset) public emeraldAssets;
    mapping(address => bool) public kycVerifiedWallets;
    
    event AssetMinted(
        uint256 indexed tokenId,
        bytes32 originUID,
        bytes32 scienceUID,
        uint256 caratWeight,
        uint256 valuationBRL
    );
    
    event AssetInvalidated(uint256 indexed tokenId, string reason);
    
    constructor(address _easContract) ERC721("GEMLAB Emerald RWA", "GEMLRWA") {
        easContract = IEAS(_easContract);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
    
    /**
     * @dev Mint new RWA token with attestation references
     * @param to Recipient address (must be KYC verified)
     * @param tokenId Unique token identifier
     * @param asset Asset metadata including attestation UIDs
     */
    function mintAsset(
        address to,
        uint256 tokenId,
        EmeraldAsset memory asset
    ) external onlyRole(MINTER_ROLE) {
        require(kycVerifiedWallets[to], "Recipient not KYC verified");
        require(_isAttestationValid(asset.originAttestationUID), "Invalid origin attestation");
        require(_isAttestationValid(asset.scienceAttestationUID), "Invalid science attestation");
        require(_isAttestationValid(asset.taxAttestationUID), "Invalid tax attestation");
        
        _safeMint(to, tokenId);
        emeraldAssets[tokenId] = asset;
        
        emit AssetMinted(
            tokenId,
            asset.originAttestationUID,
            asset.scienceAttestationUID,
            asset.caratWeight,
            asset.valuationBRL
        );
    }
    
    /**
     * @dev Check if token is currently valid (all attestations active)
     * @param tokenId Token to check
     * @return bool True if all attestations are valid
     */
    function isAssetValid(uint256 tokenId) public view returns (bool) {
        require(_exists(tokenId), "Token does not exist");
        
        EmeraldAsset memory asset = emeraldAssets[tokenId];
        
        return _isAttestationValid(asset.originAttestationUID) &&
               _isAttestationValid(asset.scienceAttestationUID) &&
               _isAttestationValid(asset.taxAttestationUID);
    }
    
    /**
     * @dev Override transfer to enforce KYC and validity checks
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
        
        // Skip checks for minting
        if (from == address(0)) return;
        
        require(kycVerifiedWallets[to], "Recipient not KYC verified");
        
        if (!isAssetValid(tokenId)) {
            emit AssetInvalidated(tokenId, "Attestation revoked or expired");
            revert("Asset is not valid - attestation failed");
        }
    }
    
    /**
     * @dev Internal function to verify EAS attestation
     */
    function _isAttestationValid(bytes32 uid) internal view returns (bool) {
        Attestation memory attestation = easContract.getAttestation(uid);
        
        // Check if attestation exists and is not revoked
        return attestation.uid != bytes32(0) &&
               attestation.revocationTime == 0 &&
               (attestation.expirationTime == 0 || attestation.expirationTime > block.timestamp);
    }
    
    /**
     * @dev Admin function to add KYC verified wallet
     */
    function addKYCWallet(address wallet) external onlyRole(AUDITOR_ROLE) {
        kycVerifiedWallets[wallet] = true;
    }
    
    /**
     * @dev Get full asset metadata
     */
    function getAssetMetadata(uint256 tokenId) 
        external 
        view 
        returns (EmeraldAsset memory) 
    {
        require(_exists(tokenId), "Token does not exist");
        return emeraldAssets[tokenId];
    }
}
```

---

## 🔗 EAS Integration

### EAS Schema Definitions

The GEMLAB Protocol uses 5 distinct EAS schemas:

#### Schema #1: Origin Attestation (COOPESMERALDA)
```typescript
{
  nfeNumber: string,        // Nota Fiscal Eletrônica number
  nfeAccessKey: string,     // NFe access key (44 digits)
  nfeHashSHA256: bytes32,   // Hash of NFe XML
  issuerCNPJ: string,       // COOPESMERALDA CNPJ
  minerLocation: string,    // GPS coordinates of extraction
  extractionDate: uint64,   // Unix timestamp
  roughWeightGrams: uint256 // Weight before cutting
}
```

#### Schema #2: Scientific Attestation (GEMLAB)
```typescript
{
  spectralHashSHA256: bytes32,  // Raman spectroscopy signature
  certificateIPFS: string,      // IPFS hash of full certificate
  gemologistID: address,        // Ethereum address of certified gemologist
  qualityGrade: string,         // AAA, AA, A, B, C
  colorCode: string,            // Munsell color notation
  inclusionMap: string,         // IPFS hash of inclusion mapping
  caratWeightFinal: uint256     // Post-cutting weight (×100)
}
```

#### Schema #3: KYC Attestation (VASP)
```typescript
{
  walletAddress: address,    // User wallet
  kycProvider: string,       // KYC provider name
  verificationLevel: uint8,  // 1=Basic, 2=Enhanced, 3=Full
  countryCode: string,       // ISO 3166-1 alpha-2
  accreditationStatus: bool, // Qualified investor flag
  expirationDate: uint64     // KYC expiration timestamp
}
```

#### Schema #4: Custody Attestation
```typescript
{
  tokenId: uint256,          // NFT token ID
  custodianEntity: string,   // Legal entity name
  vaultLocation: string,     // Physical vault address
  insurancePolicyID: string, // Insurance contract reference
  auditReportIPFS: string    // Latest custody audit report
}
```

#### Schema #5: Tax Compliance Attestation
```typescript
{
  tokenId: uint256,           // NFT token ID
  cfemAmount: uint256,        // CFEM value in BRL cents
  issAmount: uint256,         // ISS value in BRL cents
  cfemDARFHash: bytes32,      // Hash of CFEM payment DARF
  issDARFHash: bytes32,       // Hash of ISS payment DARF
  paymentTimestamp: uint64,   // Payment confirmation date
  taxYear: uint16             // Fiscal year
}
```

### Creating Attestations (SDK Example)

```typescript
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";

// Initialize EAS
const EAS_CONTRACT_ADDRESS = "0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587"; // Mainnet
const eas = new EAS(EAS_CONTRACT_ADDRESS);
const provider = new ethers.providers.JsonRpcProvider("YOUR_RPC_URL");
const signer = new ethers.Wallet("PRIVATE_KEY", provider);
eas.connect(signer);

// Schema UID for Origin Attestation (must be registered first)
const ORIGIN_SCHEMA_UID = "0x..."; // Replace with actual schema UID

// Encode attestation data
const schemaEncoder = new SchemaEncoder(
  "string nfeNumber,string nfeAccessKey,bytes32 nfeHashSHA256,string issuerCNPJ,string minerLocation,uint64 extractionDate,uint256 roughWeightGrams"
);

const encodedData = schemaEncoder.encodeData([
  { name: "nfeNumber", value: "000123456", type: "string" },
  { name: "nfeAccessKey", value: "12345678901234567890123456789012345678901234", type: "string" },
  { name: "nfeHashSHA256", value: "0xabc123...", type: "bytes32" },
  { name: "issuerCNPJ", value: "34.926.901/0001-20", type: "string" },
  { name: "minerLocation", value: "-13.9876,-46.1234", type: "string" },
  { name: "extractionDate", value: 1704067200, type: "uint64" },
  { name: "roughWeightGrams", value: 1250, type: "uint256" }
]);

// Create on-chain attestation
const tx = await eas.attest({
  schema: ORIGIN_SCHEMA_UID,
  data: {
    recipient: "0xRecipientAddress", // GEMLAB contract
    expirationTime: 0, // No expiration
    revocable: true,
    data: encodedData,
  },
});

const newAttestationUID = await tx.wait();
console.log("Origin Attestation UID:", newAttestationUID);
```

### Querying Attestations (GraphQL)

```graphql
query GetEmeraldAttestations($tokenAddress: String!) {
  attestations(
    where: {
      schemaId: { 
        in: [
          "0xORIGIN_SCHEMA_UID",
          "0xSCIENCE_SCHEMA_UID",
          "0xTAX_SCHEMA_UID"
        ]
      },
      recipient: { equals: $tokenAddress }
    }
    orderBy: { time: desc }
  ) {
    id
    attester
    recipient
    revoked
    revocationTime
    expirationTime
    data
    decodedDataJson
  }
}
```

---

## 🔐 Zero-Knowledge Tax Compliance

For transactions above **R$ 35,000**, the protocol generates a ZK proof to satisfy DeCripto reporting without revealing:
- Buyer identity
- Seller profit margin
- Transaction counterparty

### ZK Circuit (Circom Example)

```circom
pragma circom 2.0.0;

template TaxComplianceProof() {
    // Public inputs (visible on-chain)
    signal input transactionHashPublic;
    signal input reportingYearPublic;
    signal input thresholdBRL; // 35000 in cents
    
    // Private inputs (hidden)
    signal input transactionAmountBRL;
    signal input buyerWalletHash;
    signal input sellerProfitMargin;
    
    // Output: proof that transaction > threshold
    signal output isAboveThreshold;
    
    // Constraint: verify amount exceeds threshold
    component greaterThan = GreaterThan(32);
    greaterThan.in[0] <== transactionAmountBRL;
    greaterThan.in[1] <== thresholdBRL;
    
    isAboveThreshold <== greaterThan.out;
    
    // Constraint: ensure commitment to transaction hash
    component hasher = Poseidon(3);
    hasher.inputs[0] <== transactionAmountBRL;
    hasher.inputs[1] <== buyerWalletHash;
    hasher.inputs[2] <== sellerProfitMargin;
    
    transactionHashPublic === hasher.out;
}

component main = TaxComplianceProof();
```

---

## 🧪 Testing & Deployment

### Local Development Setup

```bash
# Clone repository
git clone https://github.com/gemlab-tech/protocol.git
cd protocol

# Install dependencies
yarn install

# Compile contracts
npx hardhat compile

# Run test suite
npx hardhat test

# Deploy to testnet (Sepolia)
npx hardhat run scripts/deploy.ts --network sepolia

# Verify contract on Etherscan
npx hardhat verify --network sepolia CONTRACT_ADDRESS
```

### Test Coverage

```bash
npx hardhat coverage
```

Expected coverage:
- Statements: > 95%
- Branches: > 90%
- Functions: > 95%
- Lines: > 95%

---

## 📡 API Endpoints

### GEMLAB Backend API

Base URL: `https://api.gemlab.tech/v1`

#### Endpoints:

**GET** `/emerald/{tokenId}`
```json
{
  "tokenId": 1,
  "status": "valid",
  "attestations": {
    "origin": "0xABC123...",
    "science": "0xDEF456...",
    "tax": "0xGHI789..."
  },
  "metadata": {
    "caratWeight": 2.50,
    "qualityGrade": "AAA",
    "valuationBRL": 1250000
  }
}
```

**POST** `/request-certification`
- Initiates certification workflow
- Requires API key from COOPESMERALDA

**GET** `/attestation/{uid}/verify`
- Verifies EAS attestation validity
- Returns full decoded data

---

## 🛡️ Security Considerations

### Audit Status
- Smart contracts audited by [Auditor Name]
- ZK circuits verified by [ZK Expert]
- Ongoing bug bounty program (HackerOne)

### Best Practices
1. Always verify attestations before minting
2. Use multi-sig for MINTER_ROLE and AUDITOR_ROLE
3. Implement rate limiting on minting functions
4. Monitor EAS attestation revocations via events
5. Backup IPFS metadata to multiple pinning services

---

## 🤝 Integration Partners

### Supported Wallets
- MetaMask
- WalletConnect
- Ledger Hardware Wallet
- Gnosis Safe (for institutional custody)

### Supported VASPs
- Liqi Digital Assets
- Mercado Bitcoin
- [Additional partners TBD]

---

## 📞 Developer Support

**Discord:** [discord.gg/gemlab-dev]  
**GitHub Issues:** [github.com/gemlab-tech/protocol/issues]  
**Technical Docs:** [docs.gemlab.tech]  
**Email:** dev@gemlab.tech

---

## 🔄 Changelog

### v1.0.0 (2025-Q1) - Initial Release
- ERC-721 NFT implementation
- EAS integration (5 schemas)
- KYC-gated transfers
- Basic ZK tax proof

### v1.1.0 (Planned - 2025-Q2)
- Layer 2 deployment (Arbitrum/Optimism)
- Fractional ownership (ERC-1155 migration)
- Advanced ZK circuits for privacy
- Cross-chain bridge compatibility

---

**Built with 💚 by GEMLAB Tech**  
*Making mineral extraction transparent, one emerald at a time.*