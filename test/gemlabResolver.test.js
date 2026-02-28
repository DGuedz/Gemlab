const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("GemlabResolver (JS)", function () {
  it("concede role por schema e valida canAttest", async function () {
    const [prefeitura, other] = await ethers.getSigners();
    const Resolver = await ethers.getContractFactory("GemlabResolver");
    const resolver = await Resolver.deploy();
    await resolver.waitForDeployment();
    const schema = ethers.encodeBytes32String("ORIGIN");
    await (await resolver.setRole(schema, prefeitura.address)).wait();
    expect(await resolver.canAttest(schema, prefeitura.address)).to.eq(true);
    expect(await resolver.canAttest(schema, other.address)).to.eq(false);
  });
});

