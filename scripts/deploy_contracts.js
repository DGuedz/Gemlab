require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const Validator = await ethers.getContractFactory("TokenValidator");
  const validator = await Validator.deploy(process.env.EAS_ADDRESS, process.env.ORIGIN_SCHEMA_UID, process.env.SCIENCE_SCHEMA_UID, process.env.PREFEITURA_ADDRESS, process.env.GEMLAB_TECH_ADDRESS);
  await validator.waitForDeployment();

  const NFT = await ethers.getContractFactory("GemlabNFT");
  const nft = await NFT.deploy(await validator.getAddress());
  await nft.waitForDeployment();

  const Batch = await ethers.getContractFactory("GemlabBatch");
  const batch = await Batch.deploy();
  await batch.waitForDeployment();

  const Resolver = await ethers.getContractFactory("GemlabResolver");
  const resolver = await Resolver.deploy();
  await resolver.waitForDeployment();

  console.log("validator:", await validator.getAddress());
  console.log("nft:", await nft.getAddress());
  console.log("batch:", await batch.getAddress());
  console.log("resolver:", await resolver.getAddress());
}

main().catch((e) => { console.error(e); process.exit(1); });
