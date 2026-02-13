import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { KMSFactory } from "../kms/KMSFactory";

export async function emitScienceAttestation(cfg: {
  rpcUrl: string;
  easAddress: string;
  schemaUID: string;
  recipient: string;
  spectralHash: string;
  ramanSignature: string;
  qualityGrade: number;
}) {
  const signer = await KMSFactory.getKMS().getSigner(cfg.rpcUrl);
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

