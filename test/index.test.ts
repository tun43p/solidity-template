import { expect } from "chai";
import { ethers } from "hardhat";
import type { Template } from "typechain";

let contract: Template;

describe("Testing contract", () => {
  before(async () => {
    const factory = await ethers.getContractFactory("Template");
    contract = await factory.deploy("Hello, world!");
    await contract.deployed();
    console.info("Contract deployed.");
  });

  it("Should return the new greeting once it's changed", async () => {
    expect(await contract.greet()).to.equal("Hello, world!");
    const setGreetingTx = await contract.setGreeting("Hola, mundo!");
    await setGreetingTx.wait();
    expect(await contract.greet()).to.equal("Hola, mundo!");
  });
});
