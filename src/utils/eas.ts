import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";

export const EAS_CONFIG = {
  // Sepolia Addresses (exemplo)
  EAS_CONTRACT_ADDRESS: "0xC2679fBD37d54388Ce493F1DB75320D236e1815e",
  SCHEMA_REGISTRY_ADDRESS: "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0",
  
  // Schemas do GEMLAB
  SCHEMAS: {
    GEM_CERTIFICATION: "0x...", // UID do Schema de Certificação
    TAX_COMPLIANCE: "0x...",    // UID do Schema de Prova Tributária
    ORIGIN_PROOF: "0x...",      // UID do Schema de Prova de Origem
  }
};

export const getEAS = (signer: ethers.Signer) => {
  const eas = new EAS(EAS_CONFIG.EAS_CONTRACT_ADDRESS);
  eas.connect(signer);
  return eas;
};

export const encodeGemCertification = (data: {
  stoneRef: string;
  weight: number;
  color: string;
  clarity: string;
  spectralHash: string;
}) => {
  const schemaEncoder = new SchemaEncoder("string stoneRef, uint256 weight, string color, string clarity, string spectralHash");
  return schemaEncoder.encodeData([
    { name: "stoneRef", value: data.stoneRef, type: "string" },
    { name: "weight", value: data.weight, type: "uint256" },
    { name: "color", value: data.color, type: "string" },
    { name: "clarity", value: data.clarity, type: "string" },
    { name: "spectralHash", value: data.spectralHash, type: "string" },
  ]);
};
