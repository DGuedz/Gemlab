import { useEffect, useState } from "react";
import { ethers } from "ethers";

type Attestation = {
  type: "origin" | "science" | "custody";
  status: "active" | "expired";
  attester: string;
  timestamp: string;
  easUid: string;
};

export function useEASAttestation(tokenId: string, cfg: { rpcUrl: string; nftAddress: string; easAddress: string; nftAbi: any; easAbi: any; }) {
  const [attestations, setAttestations] = useState<Attestation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      const provider = new ethers.JsonRpcProvider(cfg.rpcUrl);
      const nft = new ethers.Contract(cfg.nftAddress, cfg.nftAbi, provider);
      const originUID = await nft.tokenOriginUID(tokenId);
      const scienceUID = await nft.tokenScienceUID(tokenId);
      const eas = new ethers.Contract(cfg.easAddress, cfg.easAbi, provider);
      const origin = await eas.getAttestation(originUID);
      const science = await eas.getAttestation(scienceUID);
      setAttestations([
        { type: "origin", status: origin.revocationTime === 0 ? "active" : "expired", attester: origin.attester, timestamp: new Date(Number(origin.time) * 1000).toISOString(), easUid: originUID },
        { type: "science", status: science.revocationTime === 0 ? "active" : "expired", attester: science.attester, timestamp: new Date(Number(science.time) * 1000).toISOString(), easUid: scienceUID }
      ]);
      setLoading(false);
    }
    run();
  }, [tokenId]);

  return { attestations, loading };
}

