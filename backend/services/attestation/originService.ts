import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { Wallet, JsonRpcProvider } from "ethers";

export async function emitOriginAttestation(cfg: {
  rpcUrl: string;
  privateKey: string;
  easAddress: string;
  schemaUID: string;
  recipient: string;
  minerCNPJ: bigint;
  invoiceHash: string;
  extractionDate: number;
  mineLocationID: string;
}) {
  const provider = new JsonRpcProvider(cfg.rpcUrl);
  const signer = new Wallet(cfg.privateKey, provider);
  const eas = new EAS(cfg.easAddress);
  eas.connect(signer);
  const enc = new SchemaEncoder("uint256 minerCNPJ, bytes32 invoiceHash, uint48 extractionDate, string mineLocationID");
  const data = enc.encodeData([
    { name: "minerCNPJ", value: cfg.minerCNPJ, type: "uint256" },
    { name: "invoiceHash", value: cfg.invoiceHash, type: "bytes32" },
    { name: "extractionDate", value: cfg.extractionDate, type: "uint48" },
    { name: "mineLocationID", value: cfg.mineLocationID, type: "string" }
  ]);
  const tx = await eas.attest({ schema: cfg.schemaUID, data: { recipient: cfg.recipient, data } });
  const receipt = await tx.wait();
  // @ts-expect-error
  return receipt.uid;
}

