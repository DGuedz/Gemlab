const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("GemlabBatch", function () {
  it("mint ERC1155 atualiza balance", async function () {
    const [user] = await ethers.getSigners();
    const Batch = await ethers.getContractFactory("GemlabBatch");
    const batch = await Batch.deploy();
    await batch.waitForDeployment();
    await (await batch.mint(user.address, 7, 5, "0x")).wait();
    const bal = await batch.balanceOf(user.address, 7);
    expect(bal).to.eq(5);
  });
});

