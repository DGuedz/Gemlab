// Service interface for certification operations
export interface ICertificationService {
  checkSystemStatus(): Promise<{ contractsPaused: boolean; maintenanceMode: boolean }>;
  generateSpectralHash(data: any): Promise<string>;
  generateAttestation(data: any): Promise<string>;
  mintNFT(data: any): Promise<{ ipfsCid: string; nftTokenId: string }>;
}

// Mock implementation for frontend development/preview
export class MockCertificationService implements ICertificationService {
  async checkSystemStatus(): Promise<{ contractsPaused: boolean; maintenanceMode: boolean }> {
    return { contractsPaused: false, maintenanceMode: false };
  }

  async generateSpectralHash(data: any): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("0x" + Math.random().toString(16).substr(2, 64)); // SHA-256 length simulation
      }, 2000);
    });
  }

  async generateAttestation(data: any): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("0x" + Math.random().toString(16).substr(2, 64)); // EAS UID simulation
      }, 2500);
    });
  }

  async mintNFT(data: any): Promise<{ ipfsCid: string; nftTokenId: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ipfsCid: "Qm" + Math.random().toString(36).substr(2, 44),
          nftTokenId: Math.floor(Math.random() * 10000).toString(),
        });
      }, 3000);
    });
  }
}

import { ApiCertificationService } from "./ApiCertificationService";

// Factory to get the service (will switch to Real implementation later)
export const CertificationServiceFactory = {
  getInstance: (): ICertificationService => {
    // Check environment variable or config
    // @ts-ignore - Vite exposes env vars on import.meta.env
    const useMock = import.meta.env.VITE_USE_MOCK === 'true';
    
    if (useMock) {
      console.log("Using MockCertificationService");
      return new MockCertificationService();
    }
    
    console.log("Using ApiCertificationService");
    // You can configure the base URL from env here as well
    // @ts-ignore
    const apiUrl = import.meta.env.VITE_API_URL;
    return new ApiCertificationService(apiUrl);
  },
};
