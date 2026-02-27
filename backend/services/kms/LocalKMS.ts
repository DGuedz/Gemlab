import { IKMS } from "./IKMS";
import { Wallet, JsonRpcProvider, Signer } from "ethers";

export class LocalKMS implements IKMS {
  private privateKey: string;

  constructor() {
    // In a real scenario, this might load from a secure vault or encrypted file.
    // For VSC compliance "On-Chain | Economy-First", we ensure this is ONLY loaded
    // in the backend environment, never leaked to frontend.
    const key = process.env.GEMLAB_PRIVATE_KEY || process.env.PRIVATE_KEY;
    
    if (!key) {
      throw new Error("KMS Error: Private key not found in environment variables. Ensure GEMLAB_PRIVATE_KEY is set.");
    }
    
    this.privateKey = key;
  }

  async getSigner(providerUrl?: string): Promise<Signer> {
    if (!this.privateKey) {
        throw new Error("Local KMS Error: GEMLAB_PRIVATE_KEY or PRIVATE_KEY is missing.");
    }

    const rpcUrl = providerUrl || process.env.RPC_URL || process.env.SEPOLIA_RPC_URL;
    
    if (!rpcUrl) {
        throw new Error("Local KMS Error: Missing RPC URL. Please set RPC_URL or SEPOLIA_RPC_URL in .env");
    }

    const provider = new JsonRpcProvider(rpcUrl);
    return new Wallet(this.privateKey, provider);
  }

  async signMessage(message: string | Uint8Array): Promise<string> {
    // We create a wallet without provider just for signing messages
    const wallet = new Wallet(this.privateKey);
    return wallet.signMessage(message);
  }
}
