import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { KMSFactory } from "../kms/KMSFactory";

export async function emitCustodyAttestation(cfg: {
  rpcUrl: string;
  easAddress: string;
  schemaUID: string;
  recipient: string;
  vaultID: string;
  storageProof: string;
  expirationTime: number;
}) {
  const signer = await KMSFactory.getKMS().getSigner(cfg.rpcUrl);
  const eas = new EAS(cfg.easAddress);
  eas.connect(signer);
  const enc = new SchemaEncoder("string vaultID, bytes32 storageProof, uint48 expirationTime");

  const data = enc.encodeData([
    { name: "vaultID", value: cfg.vaultID, type: "string" },
    { name: "storageProof", value: cfg.storageProof, type: "bytes32" },
    { name: "expirationTime", value: cfg.expirationTime, type: "uint48" }
  ]);
  const tx = await eas.attest({ schema: cfg.schemaUID, data: { recipient: cfg.recipient, data } });
  const receipt = await tx.wait();
  // @ts-expect-error
  return receipt.uid;
}

