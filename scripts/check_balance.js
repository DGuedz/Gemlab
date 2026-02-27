require("dotenv").config();
const { ethers } = require("ethers");

async function main() {
  console.log("🔍 Checking Credentials & Network Connection...");
  
  const rpcUrl = process.env.SEPOLIA_RPC_URL || process.env.RPC_URL;
  const privateKey = process.env.PRIVATE_KEY || process.env.GEMLAB_PRIVATE_KEY;

  if (!rpcUrl) {
    console.error("❌ RPC_URL or SEPOLIA_RPC_URL missing in .env");
    return;
  }
  if (!privateKey) {
    console.error("❌ PRIVATE_KEY or GEMLAB_PRIVATE_KEY missing in .env");
    return;
  }

  console.log(`📡 Connecting to RPC: ${rpcUrl}`);
  const provider = new ethers.JsonRpcProvider(rpcUrl);

  try {
    const network = await provider.getNetwork();
    console.log(`✅ Connected to network: ${network.name} (ChainID: ${network.chainId})`);
  } catch (e) {
    console.error("❌ Failed to connect to RPC:", e.message);
    return;
  }

  let wallet;
  try {
    if (privateKey.includes(" ")) {
      console.log("🔑 Detected Mnemonic Phrase");
      wallet = ethers.Wallet.fromPhrase(privateKey, provider);
    } else {
      console.log("🔑 Detected Private Key");
      wallet = new ethers.Wallet(privateKey, provider);
    }
  } catch (e) {
    console.error("❌ Invalid Key/Mnemonic:", e.message);
    return;
  }

  console.log(`👤 Wallet Address: ${wallet.address}`);
  
  try {
    const balance = await provider.getBalance(wallet.address);
    console.log(`💰 Balance: ${ethers.formatEther(balance)} ETH`);
    
    if (balance === 0n) {
      console.error("⚠️  WARNING: Balance is 0.0 ETH. Deploy will fail.");
    } else {
      console.log("✅ Ready for Deploy");
    }
  } catch (e) {
    console.error("❌ Failed to fetch balance:", e.message);
  }
}

main();
