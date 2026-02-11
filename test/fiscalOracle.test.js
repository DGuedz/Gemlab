const { ethers } = require("hardhat");

describe("FiscalOracle (JS)", function () {
  it("calcula CFEM, ISS e Fundo2050 corretamente", async function () {
    const Oracle = await ethers.getContractFactory("FiscalOracle");
    const oracle = await Oracle.deploy();
    await oracle.waitForDeployment();
    const price = ethers.parseEther("1");
    const [cfem, iss, fund] = await oracle.onTrade(1, price);
    if (cfem !== price * 2n / 100n) throw new Error("CFEM incorreto");
    if (iss !== price * 5n / 100n) throw new Error("ISS incorreto");
    if (fund !== (cfem + iss) * 333n / 1000n) throw new Error("Fundo2050 incorreto");
  });
});

