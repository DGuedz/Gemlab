import { ICertificationService } from "./certificationService";

export class ApiCertificationService implements ICertificationService {
  private baseUrl: string;

  constructor(baseUrl: string = "http://localhost:3001/api/v1") {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, method: string, body?: any): Promise<T> {
    try {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      // In a real app, we would add auth tokens here
      // const token = localStorage.getItem("auth_token");
      // if (token) headers["Authorization"] = `Bearer ${token}`;

      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `API Error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Service Error [${endpoint}]:`, error);
      throw error;
    }
  }

  async generateSpectralHash(data: any): Promise<string> {
    // Calls the backend service that uses KMS to sign/verify if needed
    // In this specific case, spectral hash might be a pure calculation or involve backend validation
    const result = await this.request<{ hash: string }>("/certification/spectral-hash", "POST", data);
    return result.hash;
  }

  async generateAttestation(data: any): Promise<string> {
    // Calls the backend to create an EAS attestation using the secure schema
    const result = await this.request<{ uid: string }>("/certification/attest", "POST", data);
    return result.uid;
  }

  async mintNFT(data: any): Promise<{ ipfsCid: string; nftTokenId: string }> {
    // Calls the backend to pin to IPFS and mint the NFT via the secure minter contract
    return await this.request<{ ipfsCid: string; nftTokenId: string }>("/certification/mint", "POST", data);
  }
}
