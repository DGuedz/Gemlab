const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

function generateKeys() {
  console.log("🔐 Generating New Deployment Wallet...");
  
  const wallet = ethers.Wallet.createRandom();
  
  console.log("\n⚠️  IMPORTANT: SAVE THESE CREDENTIALS SECURELY ⚠️");
  console.log("---------------------------------------------------");
  console.log(`Address:     ${wallet.address}`);
  console.log(`Private Key: ${wallet.privateKey}`);
  console.log(`Mnemonic:    ${wallet.mnemonic.phrase}`);
  console.log("---------------------------------------------------");
  
  console.log("\n👉 ACTION REQUIRED:");
  console.log(`1. Send Sepolia ETH to: ${wallet.address}`);
  console.log("2. Update your local .env file with this PRIVATE_KEY");
  console.log("3. Run the deploy script again");

  // Optional: Save to a gitignored file for convenience (dev only)
  const envContent = `PRIVATE_KEY="${wallet.privateKey}"\n# Address: ${wallet.address}`;
  try {
      // Append or write to .env.generated
      fs.writeFileSync(path.join(__dirname, "../.env.generated"), envContent);
      console.log("\n✅ Saved to .env.generated (DO NOT COMMIT THIS FILE)");
  } catch (e) {
      console.error("Could not save to file", e);
  }
}

generateKeys();
