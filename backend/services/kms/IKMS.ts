import { Signer } from "ethers";

export interface IKMS {
  /**
   * Retrieves a signer instance configured with the secure key.
   * This signer can be used to sign transactions or messages.
   */
  getSigner(providerUrl?: string): Promise<Signer>;

  /**
   * Signs a digest or message directly (if needed for lower level ops).
   */
  signMessage(message: string | Uint8Array): Promise<string>;
}
