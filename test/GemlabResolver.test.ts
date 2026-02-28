import { ethers } from "hardhat";

describe("GemlabResolver", function () {
  it("configura e valida roles por schema", async function () {
    const [prefeitura, other] = await ethers.getSigners();
    const Resolver = await ethers.getContractFactory("GemlabResolver");
    const resolver = await Resolver.deploy();
    await resolver.waitForDeployment();
    const schema = ethers.encodeBytes32String("ORIGIN");
    await (await resolver.setRole(schema, prefeitura.address)).wait();
    const ok = await resolver.canAttest(schema, prefeitura.address);
    const notOk = await resolver.canAttest(schema, other.address);
    if (!ok) throw new Error("role inválida");
    if (notOk) throw new Error("role indevida");
  });
});
