const { ethers } = require("hardhat");
const { SchemaRegistry } = require("@ethereum-attestation-service/eas-sdk");
const fs = require("fs");
const path = require("path");

// --- CONFIGURATION ---
const SEPOLIA_EAS_ADDRESS = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";
const SEPOLIA_SCHEMA_REGISTRY = "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0";
const OUTPUT_FILE = path.join(__dirname, "../deployed_addresses.json");

// Global state for incremental saving
let deploymentInfo = {
  network: "sepolia",
  timestamp: new Date().toISOString(),
  contracts: {},
  schemas: {}
};

// --- HELPERS ---
function logStep(msg) {
  console.log(`\n==================================================`);
  console.log(`🚀 ${msg}`);
  console.log(`==================================================`);
}

function saveProgress() {
  try {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(deploymentInfo, null, 2));
    console.log(`💾 Progress saved to: ${OUTPUT_FILE}`);
  } catch (err) {
    console.error("⚠️ Failed to save progress:", err.message);
  }
}

async function waitTx(tx, label) {
  console.log(`⏳ ${label} submitted...`);
  console.log(`   Hash: ${tx.hash}`);
  console.log(`   Waiting for confirmation...`);
  
  try {
    const receipt = await tx.wait(1); // Wait for 1 block confirmation
    console.log(`✅ ${label} confirmed in block: ${receipt.blockNumber}`);
    return receipt;
  } catch (err) {
    console.error(`❌ Transaction failed: ${err.message}`);
    throw err;
  }
}

async function main() {
  try {
    const [deployer] = await ethers.getSigners();
    console.log("\n📡 Starting Institutional Deployment to Sepolia");
    console.log(`🔑 Deployer: ${deployer.address}`);
    
    const balance = await deployer.provider.getBalance(deployer.address);
    console.log(`💰 Balance:  ${ethers.formatEther(balance)} ETH`);

    if (balance === 0n) {
      throw new Error("Deployer balance is 0. Please fund the wallet.");
    }

    // --- 1. DEPLOY RESOLVER ---
    logStep("1️⃣  Deploying GemlabResolver");
    const Resolver = await ethers.getContractFactory("GemlabResolver");
    
    // Manual deployment with logs
    const resolverTx = await Resolver.getDeployTransaction();
    console.log(`   Sending deploy transaction...`);
    const resolverSentTx = await deployer.sendTransaction(resolverTx);
    await waitTx(resolverSentTx, "GemlabResolver Deploy");
    
    const resolver = await Resolver.attach(resolverSentTx.to); // Compute address from tx
    // Alternatively, standard way:
    // const resolver = await Resolver.deploy();
    // await resolver.waitForDeployment();
    // But getting tx hash immediately is better with manual send or accessing deploymentTransaction()
    
    // Let's stick to standard but grab the deployment transaction
    // Re-doing standard way with proper logging:
    // const resolver = await Resolver.deploy();
    // console.log("   Tx Hash:", resolver.deploymentTransaction().hash);
    // await resolver.waitForDeployment();
    
    // Using the address from the sent tx above:
    // The 'to' field in a deploy tx is null, the address is computed. 
    // Let's use the instance method which is easier:
    
    // Re-instantiate to get the contract object correctly
    const resolverAddress = (await resolverSentTx.wait()).contractAddress; 
    console.log(`✅ GemlabResolver deployed at: ${resolverAddress}`);
    
    deploymentInfo.contracts.GemlabResolver = resolverAddress;
    saveProgress();

    // --- 2. REGISTER SCHEMAS ---
    logStep("2️⃣  Registering Schemas");
    const schemaRegistry = new SchemaRegistry(SEPOLIA_SCHEMA_REGISTRY);
    // @ts-ignore
    schemaRegistry.connect(deployer);

    // Origin Schema
    console.log("   --> Registering Origin Schema...");
    const originTx = await schemaRegistry.register({
      schema: "uint256 mineId, string location, uint256 extractionDate",
      resolverAddress: resolverAddress,
      revocable: true,
    });
    console.log(`   Tx Hash: ${originTx.hash}`); // Access hash directly if available from SDK or wait
    // SDK returns a tx object usually compatible with ethers
    const originUID = await originTx.wait();
    console.log(`   ✅ Origin Schema UID: ${originUID}`);
    
    deploymentInfo.schemas.origin = originUID;
    saveProgress();

    // Science Schema
    console.log("   --> Registering Science Schema...");
    const scienceTx = await schemaRegistry.register({
      schema: "string spectralHash, uint256 gemWeight, string gemType",
      resolverAddress: resolverAddress,
      revocable: true,
    });
    console.log(`   Tx Hash: ${scienceTx.hash}`);
    const scienceUID = await scienceTx.wait();
    console.log(`   ✅ Science Schema UID: ${scienceUID}`);

    deploymentInfo.schemas.science = scienceUID;
    saveProgress();

    // --- 3. DEPLOY TOKEN VALIDATOR ---
    logStep("3️⃣  Deploying TokenValidator");
    const Validator = await ethers.getContractFactory("TokenValidator");
    const validator = await Validator.deploy(
      SEPOLIA_EAS_ADDRESS,
      originUID,
      scienceUID,
      deployer.address, // Mock Prefeitura
      deployer.address  // Mock Gemlab Tech
    );
    console.log(`   Tx Hash: ${validator.deploymentTransaction().hash}`);
    await waitTx(validator.deploymentTransaction(), "TokenValidator Deploy");
    const validatorAddress = await validator.getAddress();
    console.log(`✅ TokenValidator deployed at: ${validatorAddress}`);

    deploymentInfo.contracts.TokenValidator = validatorAddress;
    saveProgress();

    // --- 4. DEPLOY NFT ---
    logStep("4️⃣  Deploying GemlabNFT");
    const NFT = await ethers.getContractFactory("GemlabNFT");
    const nft = await NFT.deploy(validatorAddress);
    console.log(`   Tx Hash: ${nft.deploymentTransaction().hash}`);
    await waitTx(nft.deploymentTransaction(), "GemlabNFT Deploy");
    const nftAddress = await nft.getAddress();
    console.log(`✅ GemlabNFT deployed at: ${nftAddress}`);

    deploymentInfo.contracts.GemlabNFT = nftAddress;
    saveProgress();

    // --- 5. CONFIGURE ROLES ---
    logStep("5️⃣  Configuring Roles");
    // We need the contract instance for resolver
    const resolverContract = await ethers.getContractAt("GemlabResolver", resolverAddress);
    
    const schemaRole = await resolverContract.roleFor(originUID);
    console.log(`   Granting role ${schemaRole} to deployer...`);
    const txGrant = await resolverContract.grantRole(schemaRole, deployer.address);
    await waitTx(txGrant, "Grant Schema Role");
    console.log("   ✅ Granted SCHEMA_ROLE to Deployer");

    console.log("\n✨ INSTITUTIONAL DEPLOYMENT COMPLETE ✨");
    console.log("------------------------------------------------");
    console.log("Final Deployment Info:");
    console.log(JSON.stringify(deploymentInfo, null, 2));

  } catch (error) {
    console.error("\n❌ CRITICAL ERROR DURING DEPLOYMENT ❌");
    console.error(error);
    
    // Save whatever we have
    if (Object.keys(deploymentInfo.contracts).length > 0 || Object.keys(deploymentInfo.schemas).length > 0) {
      console.log("\n💾 Saving partial progress before exit...");
      saveProgress();
    }
    
    process.exit(1);
  }
}

main();
