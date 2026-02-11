const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("TokenValidator (JS)", function () {
  it("valida com schemas corretos e sem revogação e attester válido", async function () {
    const [attester] = await ethers.getSigners();
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

    await validator.requireValidAttestations(originUID, scienceUID);
  });

  it("rejeita schema incorreto", async function () {
    const [attester] = await ethers.getSigners();
    const Mock = await ethers.getContractFactory("MockEAS");
    const mock = await Mock.deploy();
    await mock.waitForDeployment();

    const originSchema = ethers.encodeBytes32String("ORIGIN");
    const scienceSchema = ethers.encodeBytes32String("SCIENCE");
    const originUID = ethers.encodeBytes32String("UID_ORIGIN");
    const scienceUID = ethers.encodeBytes32String("UID_SCIENCE");

    await mock.set(originUID, ethers.encodeBytes32String("WRONG"), attester.address, BigInt(Math.floor(Date.now()/1000)), 0);
    await mock.set(scienceUID, scienceSchema, attester.address, BigInt(Math.floor(Date.now()/1000)), 0);

    const Validator = await ethers.getContractFactory("TokenValidator");
    const validator = await Validator.deploy(await mock.getAddress(), originSchema, scienceSchema, attester.address, attester.address);
    await validator.waitForDeployment();

    await expect(validator.requireValidAttestations(originUID, scienceUID)).to.be.revertedWith("Invalid origin schema");
  });

  it("rejeita attester inválido", async function () {
    const [attester, other] = await ethers.getSigners();
    const Mock = await ethers.getContractFactory("MockEAS");
    const mock = await Mock.deploy();
    await mock.waitForDeployment();

    const originSchema = ethers.encodeBytes32String("ORIGIN");
    const scienceSchema = ethers.encodeBytes32String("SCIENCE");
    const originUID = ethers.encodeBytes32String("UID_ORIGIN");
    const scienceUID = ethers.encodeBytes32String("UID_SCIENCE");

    await mock.set(originUID, originSchema, other.address, BigInt(Math.floor(Date.now()/1000)), 0);
    await mock.set(scienceUID, scienceSchema, attester.address, BigInt(Math.floor(Date.now()/1000)), 0);

    const Validator = await ethers.getContractFactory("TokenValidator");
    const validator = await Validator.deploy(await mock.getAddress(), originSchema, scienceSchema, attester.address, attester.address);
    await validator.waitForDeployment();

    await expect(validator.requireValidAttestations(originUID, scienceUID)).to.be.revertedWith("Invalid origin attester");
  });

  it("rejeita ciência revogada", async function () {
    const [attester] = await ethers.getSigners();
    const Mock = await ethers.getContractFactory("MockEAS");
    const mock = await Mock.deploy();
    await mock.waitForDeployment();

    const originSchema = ethers.encodeBytes32String("ORIGIN");
    const scienceSchema = ethers.encodeBytes32String("SCIENCE");
    const originUID = ethers.encodeBytes32String("UID_ORIGIN");
    const scienceUID = ethers.encodeBytes32String("UID_SCIENCE");

    await mock.set(originUID, originSchema, attester.address, BigInt(Math.floor(Date.now()/1000)), 0);
    await mock.set(scienceUID, scienceSchema, attester.address, BigInt(Math.floor(Date.now()/1000)), 1);

    const Validator = await ethers.getContractFactory("TokenValidator");
    const validator = await Validator.deploy(await mock.getAddress(), originSchema, scienceSchema, attester.address, attester.address);
    await validator.waitForDeployment();

    await expect(validator.requireValidAttestations(originUID, scienceUID)).to.be.revertedWith("Science revoked");
  });

  it("rejeita origem revogada", async function () {
    const [attester] = await ethers.getSigners();
    const Mock = await ethers.getContractFactory("MockEAS");
    const mock = await Mock.deploy();
    await mock.waitForDeployment();

    const originSchema = ethers.encodeBytes32String("ORIGIN");
    const scienceSchema = ethers.encodeBytes32String("SCIENCE");
    const originUID = ethers.encodeBytes32String("UID_ORIGIN");
    const scienceUID = ethers.encodeBytes32String("UID_SCIENCE");

    await mock.set(originUID, originSchema, attester.address, BigInt(Math.floor(Date.now()/1000)), 1);
    await mock.set(scienceUID, scienceSchema, attester.address, BigInt(Math.floor(Date.now()/1000)), 0);

    const Validator = await ethers.getContractFactory("TokenValidator");
    const validator = await Validator.deploy(await mock.getAddress(), originSchema, scienceSchema, attester.address, attester.address);
    await validator.waitForDeployment();

    await expect(validator.requireValidAttestations(originUID, scienceUID)).to.be.revertedWith("Origin revoked");
  });
});
