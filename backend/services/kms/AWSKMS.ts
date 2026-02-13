import { IKMS } from "./IKMS";
import { AwsKmsSigner } from "@nexusmutual/ethers-v6-aws-kms-signer";
import { Signer, JsonRpcProvider } from "ethers";

export class AWSKMS implements IKMS {
  private keyId: string;
  private region: string;

  constructor() {
    this.keyId = process.env.AWS_KMS_KEY_ID || "";
    this.region = process.env.AWS_REGION || "us-east-1";

    if (!this.keyId) {
      // We don't throw here to allow instantiation in factory, 
      // but methods will fail if keys are missing when used.
      console.warn("AWS KMS Config Warning: AWS_KMS_KEY_ID is missing.");
    }
  }

  async getSigner(providerUrl?: string): Promise<Signer> {
    if (!this.keyId) {
        throw new Error("AWS KMS Error: AWS_KMS_KEY_ID is missing.");
    }

    const provider = providerUrl ? new JsonRpcProvider(providerUrl) : undefined;
    
    // Credentials are automatically loaded from AWS_ACCESS_KEY_ID/SECRET in env
    // or standard AWS credential chain (profiles, roles).
    return new AwsKmsSigner(this.region, this.keyId, provider);
  }

  async signMessage(message: string | Uint8Array): Promise<string> {
    const signer = await this.getSigner();
    return signer.signMessage(message);
  }
}
