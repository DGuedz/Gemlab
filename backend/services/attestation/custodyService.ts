import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { Wallet, JsonRpcProvider } from "ethers";

export async function emitCustodyAttestation(cfg: {
  rpcUrl: string;
  privateKey: string;
  easAddress: string;
  schemaUID: string;
  recipient: string;
  vaultID: string;
  storageProof: string;
  expirationTime: number;
}) {
  const provider = new JsonRpcProvider(cfg.rpcUrl);
  const signer = new Wallet(cfg.privateKey, provider);
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

