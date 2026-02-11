import { EASVerificationBadge } from "./EASVerificationBadge";
import { useEASAttestation } from "../../hooks/useEASAttestation";
import { ONCHAIN } from "../../config/onchain";

const nftAbi = [{ "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tokenOriginUID", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tokenScienceUID", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }];
const easAbi = [{ "inputs": [{ "internalType": "bytes32", "name": "uid", "type": "bytes32" }], "name": "getAttestation", "outputs": [{ "components": [{ "internalType": "bytes32", "name": "uid", "type": "bytes32" }, { "internalType": "bytes32", "name": "schema", "type": "bytes32" }, { "internalType": "address", "name": "attester", "type": "address" }, { "internalType": "uint64", "name": "time", "type": "uint64" }, { "internalType": "uint64", "name": "revocationTime", "type": "uint64" }], "internalType": "struct IEAS.Attestation", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }];

export function EASVerificationBadgeHooked({ tokenId }: { tokenId: string }) {
  const { attestations, loading } = useEASAttestation(tokenId, { rpcUrl: ONCHAIN.RPC_URL, nftAddress: ONCHAIN.NFT_ADDRESS, easAddress: ONCHAIN.EAS_ADDRESS, nftAbi, easAbi });
  return <EASVerificationBadge attestations={attestations as any} loading={loading} />;
}

