import { IKMS } from "./IKMS";
import { AwsKmsSigner } from "@nexusmutual/ethers-v6-aws-kms-signer";
import { Signer, JsonRpcProvider } from "ethers";

export class AWSKMS implements IKMS {
  private keyId: string;
  private region: string;
  private accessKeyId: string;
  private secretAccessKey: string;

  constructor() {
    this.keyId = process.env.AWS_KMS_KEY_ID || "";
    this.region = process.env.AWS_REGION || "us-east-1";
    this.accessKeyId = process.env.AWS_ACCESS_KEY_ID || "";
    this.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || "";

    if (!this.keyId) {
      console.warn("AWS KMS Config Warning: AWS_KMS_KEY_ID is missing.");
    }
  }

  async getSigner(providerUrl?: string): Promise<Signer> {
    if (!this.keyId) {
        throw new Error("AWS KMS Error: AWS_KMS_KEY_ID is missing.");
    }

    const provider = providerUrl ? new JsonRpcProvider(providerUrl) : undefined;
    
    // Credentials object as expected by @nexusmutual/ethers-v6-aws-kms-signer
    const credentials = {
      kmsKeyId: this.keyId,
      region: this.region,
      accessKeyId: this.accessKeyId,
      secretAccessKey: this.secretAccessKey
    };

    return new AwsKmsSigner(credentials, provider);
  }

  async signMessage(message: string | Uint8Array): Promise<string> {
    const signer = await this.getSigner();
    return signer.signMessage(message);
  }
}
