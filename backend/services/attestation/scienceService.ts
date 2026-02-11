import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { Wallet, JsonRpcProvider } from "ethers";

export async function emitScienceAttestation(cfg: {
  rpcUrl: string;
  privateKey: string;
  easAddress: string;
  schemaUID: string;
  recipient: string;
  spectralHash: string;
  ramanSignature: string;
  qualityGrade: number;
}) {
  const provider = new JsonRpcProvider(cfg.rpcUrl);
  const signer = new Wallet(cfg.privateKey, provider);
  const eas = new EAS(cfg.easAddress);
  eas.connect(signer);
  const enc = new SchemaEncoder("bytes32 spectralHash, string ramanSignature, uint8 qualityGrade");
  const data = enc.encodeData([
    { name: "spectralHash", value: cfg.spectralHash, type: "bytes32" },
    { name: "ramanSignature", value: cfg.ramanSignature, type: "string" },
    { name: "qualityGrade", value: cfg.qualityGrade, type: "uint8" }
  ]);
  const tx = await eas.attest({ schema: cfg.schemaUID, data: { recipient: cfg.recipient, data } });
  const receipt = await tx.wait();
  // @ts-expect-error
  return receipt.uid;
}

