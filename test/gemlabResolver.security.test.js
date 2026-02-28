const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("GemlabResolver Security", function () {
  it("apenas ADMIN_ROLE pode setRole", async function () {
    const [admin, other] = await ethers.getSigners();
    const Resolver = await ethers.getContractFactory("GemlabResolver");
    const resolver = await Resolver.deploy();
    await resolver.waitForDeployment();
    const schema = ethers.encodeBytes32String("ORIGIN");
    await expect(resolver.connect(other).setRole(schema, other.address)).to.be.revertedWithCustomError(resolver, "AccessControlUnauthorizedAccount");
    // Admin succeeds
    await (await resolver.connect(admin).setRole(schema, other.address)).wait();
    expect(await resolver.canAttest(schema, other.address)).to.eq(true);
  });
});

