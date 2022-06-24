import { expect } from "chai";
import { ethers } from "hardhat";
import type { Template } from "typechain";

let contract: Template;

before(async () => {
  const factory = await ethers.getContractFactory("Template");
  contract = await factory.deploy("Hello, world!");
  await contract.deployed();
});

describe("Greet", function () {
  it("Should return the new greeting once it's changed", async function () {
    expect(await contract.greet()).to.equal("Hello, world!");
    const setGreetingTx = await contract.setGreeting("Hola, mundo!");
    await setGreetingTx.wait();
    expect(await contract.greet()).to.equal("Hola, mundo!");
  });

  it("Shoumd return the new number one it's changer", async () => {
    expect(await contract.getNumber()).to.equal(0);
    const setNumber = await contract.setNumber(666);
    await setNumber.wait();
    expect(await contract.getNumber()).to.equal(666);
  });
});
