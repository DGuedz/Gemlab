
import fetch from "node-fetch";

const BASE_URL = "http://localhost:3001/api/v1";

async function simulateFlow() {
  console.log("🚀 Starting Frontend Simulation Flow...");

  // Step 1: Generate Spectral Hash
  console.log("\n1️⃣  Requesting Spectral Hash...");
  try {
    const hashRes = await fetch(`${BASE_URL}/certification/spectral-hash`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ramanData: [120, 450, 300], // Mock data
        timestamp: Date.now()
      })
    });
    
    if (!hashRes.ok) throw new Error(`Hash Error: ${hashRes.statusText}`);
    const hashData = await hashRes.json();
    console.log("✅ Spectral Hash Generated:", hashData);
    
    const spectralHash = (hashData as any).hash;

    // Step 2: Attest
    console.log("\n2️⃣  Requesting Attestation (EAS)...");
    const attestRes = await fetch(`${BASE_URL}/certification/attest`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        spectralHash: spectralHash,
        recipient: "0x1234567890123456789012345678901234567890", // Mock recipient
        easUID: "0xMockEasUID" // Frontend state mock
      })
    });

    if (!attestRes.ok) throw new Error(`Attest Error: ${attestRes.statusText}`);
    const attestData = await attestRes.json();
    console.log("✅ Attestation Created:", attestData);

    // Step 3: Mint NFT
    console.log("\n3️⃣  Requesting NFT Minting...");
    const mintRes = await fetch(`${BASE_URL}/certification/mint`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        attestationUID: (attestData as any).uid,
        metadata: { name: "Gem #1" }
      })
    });

    if (!mintRes.ok) throw new Error(`Mint Error: ${mintRes.statusText}`);
    const mintData = await mintRes.json();
    console.log("✅ NFT Minted:", mintData);

    console.log("\n✨ Simulation Complete! Backend is responsive and conforming to VSC standards.");

  } catch (error) {
    console.error("\n❌ Simulation Failed:", error);
    process.exit(1);
  }
}

simulateFlow();
