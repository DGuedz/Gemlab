import "dotenv/config";
import { EAS, Offchain, SchemaEncoder, SchemaItem } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import { KMSFactory } from "./backend/services/kms/KMSFactory";
import { IKMS } from "./backend/services/kms/IKMS";

// --- CONFIGURATION ---
const EAS_CONTRACT_ADDRESS = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia
const SEPOLIA_CHAIN_ID = 11155111n;

async function testOffchainAttestation() {
  console.log("🚀 Starting Offchain Attestation EIP-712 Validation...");

  // 1. Initialize KMS Signer
  // Note: Using 'local' provider for this test to verify the FLOW.
  // Ideally, this would use 'aws' if credentials were present.
  process.env.KMS_PROVIDER = "local";
  // Generate a random key for testing if not set
  if (!process.env.GEMLAB_PRIVATE_KEY) {
      process.env.GEMLAB_PRIVATE_KEY = ethers.Wallet.createRandom().privateKey;
      console.log("⚠️  Using Random Ephemeral Key for Test");
  }
  
  const kms: IKMS = KMSFactory.getKMS();
  const signer = await kms.getSigner();
  const signerAddress = await signer.getAddress();

  console.log(`🔑 Signer Address: ${signerAddress}`);
  
  // 2. Validate Network / ChainID
  // We mock the provider network since we might not have a live RPC connection in CI/Test
  // But for EIP-712, the domain chainId matters.
  const domainChainId = SEPOLIA_CHAIN_ID;
  console.log(`🌍 Target Chain ID: ${domainChainId}`);

  // 3. Setup EAS Offchain Class
  const eas = new EAS(EAS_CONTRACT_ADDRESS);
  // @ts-ignore - Offchain class constructor signature check
  const offchain = new Offchain({
    address: EAS_CONTRACT_ADDRESS,
    version: "0.26", // EAS version
    chainId: domainChainId,
  }, 1); // 1 = OffchainAttestationVersion.Version1

  // 4. Define Schema & Data
  const schemaStr = "uint256 eventId, uint8 voteIndex";
  const schemaEncoder = new SchemaEncoder(schemaStr);
  const encodedData = schemaEncoder.encodeData([
    { name: "eventId", value: 1, type: "uint256" },
    { name: "voteIndex", value: 1, type: "uint8" },
  ]);

  const attestationData = {
    recipient: "0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165",
    expirationTime: 0n,
    time: BigInt(Math.floor(Date.now() / 1000)),
    revocable: true,
    version: 1,
    nonce: 0n,
    schema: "0xb16fa048b0d597f5a821747eba64fa476212f8b0bed4b9d021c0c53e0129c870",
    refUID: "0x0000000000000000000000000000000000000000000000000000000000000000",
    data: encodedData,
  };

  // 5. Sign the Attestation (This invokes signer.signTypedData internally)
  console.log("✍️  Signing Offchain Attestation...");
  
  // EAS SDK requires a specific SignerOrProvider interface. 
  // Our ethers v6 Signer is compatible.
  const offchainAttestation = await offchain.signOffchainAttestation(
    attestationData,
    signer as any
  );

  console.log("✅ Attestation Signed!");
  console.log(`📜 Signature: ${offchainAttestation.signature}`);
  console.log(`🆔 UID: ${offchainAttestation.uid}`);

  // 6. Manual Verification (EIP-712 Recovery)
  console.log("🔍 Verifying Signature Recovery...");
  
  const domain = {
    name: "EAS Attestation",
    version: "0.26",
    chainId: domainChainId,
    verifyingContract: EAS_CONTRACT_ADDRESS,
  };

  const types = {
    Attest: [
      { name: "schema", type: "bytes32" },
      { name: "recipient", type: "address" },
      { name: "time", type: "uint64" },
      { name: "expirationTime", type: "uint64" },
      { name: "revocable", type: "bool" },
      { name: "refUID", type: "bytes32" },
      { name: "data", type: "bytes" },
    ],
  };

  const value = {
    schema: attestationData.schema,
    recipient: attestationData.recipient,
    time: attestationData.time,
    expirationTime: attestationData.expirationTime,
    revocable: attestationData.revocable,
    refUID: attestationData.refUID,
    data: encodedData,
  };

  const recoveredAddress = ethers.verifyTypedData(domain, types, value, offchainAttestation.signature);

  console.log(`🕵️  Recovered Address: ${recoveredAddress}`);

  if (recoveredAddress.toLowerCase() === signerAddress.toLowerCase()) {
    console.log("✅ SUCCESS: Signature Valid & Recovered Correctly!");
  } else {
    console.error("❌ FAILURE: Recovered address mismatch!");
    console.error(`Expected: ${signerAddress}`);
    console.error(`Got:      ${recoveredAddress}`);
    process.exit(1);
  }
}

testOffchainAttestation().catch((e) => {
  console.error("❌ Test Failed:", e);
  process.exit(1);
});
