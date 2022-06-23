import { ethers } from "hardhat";
import { run } from "helpers/common";

async function main(): Promise<void> {
  const Contract = await ethers.getContractFactory("Greeter");
  const contract = await Contract.deploy("Hello, Hardhat!");

  await contract.deployed();

  console.info("Greeter deployed to:", contract.address);
}

run(main());
