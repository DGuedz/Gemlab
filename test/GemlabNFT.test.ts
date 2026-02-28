import { ethers } from "hardhat";
import { expect } from "chai";

describe("GemlabNFT", function () {
  it("mintWithProof grava UIDs e emite token", async function () {
    const [attester, user] = await ethers.getSigners();
    const Mock = await ethers.getContractFactory("MockEAS");
    const mock = await Mock.deploy();
    await mock.waitForDeployment();
    
    const originSchema = ethers.encodeBytes32String("ORIGIN");
    const scienceSchema = ethers.encodeBytes32String("SCIENCE");
    const originUID = ethers.encodeBytes32String("UID_ORIGIN");
    const scienceUID = ethers.encodeBytes32String("UID_SCIENCE");
    
    await mock.set(originUID, originSchema, attester.address, BigInt(Math.floor(Date.now()/1000)), 0);
    await mock.set(scienceUID, scienceSchema, attester.address, BigInt(Math.floor(Date.now()/1000)), 0);
    
    const Validator = await ethers.getContractFactory("TokenValidator");
    // Updated to pass attester addresses
    const validator = await Validator.deploy(await mock.getAddress(), originSchema, scienceSchema, attester.address, attester.address);
    await validator.waitForDeployment();
    
    const NFT = await ethers.getContractFactory("GemlabNFT");
    const nft = await NFT.deploy(await validator.getAddress());
    await nft.waitForDeployment();
    
    await nft.connect(user).mintWithProof(originUID, scienceUID);
    const uidO = await nft.tokenOriginUID(1);
    const uidS = await nft.tokenScienceUID(1);
    
    expect(uidO).to.equal(originUID);
    expect(uidS).to.equal(scienceUID);
  });
});
