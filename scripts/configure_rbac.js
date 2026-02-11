require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const resolver = await ethers.getContractAt("GemlabResolver", process.env.RESOLVER_ADDRESS);
  await (await resolver.setRole(process.env.ORIGIN_SCHEMA_UID, process.env.PREFEITURA_ADDRESS)).wait();
  await (await resolver.setRole(process.env.SCIENCE_SCHEMA_UID, process.env.GEMLAB_TECH_ADDRESS)).wait();
  await (await resolver.setRole(process.env.CUSTODY_SCHEMA_UID, process.env.UNDERGROUND_VAULT_ADDRESS)).wait();
}

main().catch((e) => { console.error(e); process.exit(1); });
