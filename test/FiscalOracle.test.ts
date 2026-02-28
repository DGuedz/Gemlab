import { ethers } from "hardhat";
import { expect } from "chai";

describe("FiscalOracle", function () {
  it("calcula CFEM, ISS e Fundo2050 corretamente", async function () {
    const Oracle = await ethers.getContractFactory("FiscalOracle");
    const oracle = await Oracle.deploy();
    await oracle.waitForDeployment();
    
    const price = ethers.parseEther("1");
    const [cfem, iss, fund] = await oracle.onTrade(1, price);
    
    // CFEM = 2%
    expect(cfem).to.equal(price * 2n / 100n);
    
    // ISS = 5%
    expect(iss).to.equal(price * 5n / 100n);
    
    // Fundo2050 = 33.3% of (CFEM + ISS)
    // (cfem + iss) * 333 / 1000
    expect(fund).to.equal((cfem + iss) * 333n / 1000n);
  });
});
