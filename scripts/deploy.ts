import { ethers } from "hardhat";
import helpers from "helpers";

async function main(): Promise<void> {
  const Contract = await ethers.getContractFactory("Template");
  const contract = await Contract.deploy("Hello, world!");

  await contract.deployed();

  console.info("Greeter deployed to:", contract.address);
}

helpers.run(main());
