require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const schemaRegistryAddress = "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0"; // Sepolia
  const schemaRegistry = await ethers.getContractAt("ISchemaRegistry", schemaRegistryAddress);
  
  // VSC Compliant Schemas: Minimal Data, Fail Fast
  // bytes32 originUID: ID of the mining batch/origin record (off-chain/IPFS)
  // bytes32 invoiceHash: Hash of the fiscal invoice (for verification)
  // uint64 timestamp: Time of extraction
  const originSchema = "bytes32 originUID, bytes32 invoiceHash, uint64 timestamp";
  
  // bytes32 spectralHash: The core value
  // bytes32 analysisCID: IPFS CID of the full report (PDF/Images)
  // uint64 timestamp: Time of analysis
  const scienceSchema = "bytes32 spectralHash, bytes32 analysisCID, uint64 timestamp";
  
  // bytes32 vaultID: ID of the physical vault
  // bytes32 proofCID: Proof of custody document
  // uint64 expirationTime: When custody expires
  const custodySchema = "bytes32 vaultID, bytes32 proofCID, uint64 expirationTime";

  console.log("Registering ORIGIN schema...");
  const txOrigin = await schemaRegistry.register(originSchema, process.env.RESOLVER_ADDRESS || "0x0000000000000000000000000000000000000000", true);
  const receiptOrigin = await txOrigin.wait();
  console.log("ORIGIN_SCHEMA_UID:", receiptOrigin.logs[0].args.uid); // Ethers v6 uses logs, v5 uses events

  console.log("Registering SCIENCE schema...");
  const txScience = await schemaRegistry.register(scienceSchema, process.env.RESOLVER_ADDRESS || "0x0000000000000000000000000000000000000000", true);
  const receiptScience = await txScience.wait();
  console.log("SCIENCE_SCHEMA_UID:", receiptScience.logs[0].args.uid);

  console.log("Registering CUSTODY schema...");
  const txCustody = await schemaRegistry.register(custodySchema, process.env.RESOLVER_ADDRESS || "0x0000000000000000000000000000000000000000", true);
  const receiptCustody = await txCustody.wait();
  console.log("CUSTODY_SCHEMA_UID:", receiptCustody.logs[0].args.uid);
}

main().catch((e) => { console.error(e); process.exit(1); });
