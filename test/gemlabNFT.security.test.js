const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("GemlabNFT Security", function () {
  it("setCustodyUID somente owner", async function () {
    const [attester, owner, other] = await ethers.getSigners();
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
    const validator = await Validator.deploy(await mock.getAddress(), originSchema, scienceSchema, attester.address, attester.address);
    await validator.waitForDeployment();
    const NFT = await ethers.getContractFactory("GemlabNFT");
    const nft = await NFT.connect(owner).deploy(await validator.getAddress());
    await nft.waitForDeployment();
    await nft.connect(owner).mintWithProof(originUID, scienceUID);
    await expect(nft.connect(other).setCustodyUID(1, ethers.encodeBytes32String("CUSTODY"))).to.be.revertedWithCustomError(nft, "OwnableUnauthorizedAccount");
    await (await nft.connect(owner).setCustodyUID(1, ethers.encodeBytes32String("CUSTODY"))).wait();
    const uid = await nft.tokenCustodyUID(1);
    expect(uid).to.eq(ethers.encodeBytes32String("CUSTODY"));
  });
});

