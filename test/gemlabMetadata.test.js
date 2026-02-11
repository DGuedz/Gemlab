const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("GemlabMetadata", function () {
  it("tokenURI concatena base com tokenId", async function () {
    const Meta = await ethers.getContractFactory("GemlabMetadata");
    const meta = await Meta.deploy("https://example.com/metadata/");
    await meta.waitForDeployment();
    expect(await meta.tokenURI(42)).to.eq("https://example.com/metadata/42");
  });
});

