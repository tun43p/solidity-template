import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import env from "config/env";

dotenv.config();

task("accounts", "Prints the list of accounts", async (_, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) console.info(account.address);
});

const config: HardhatUserConfig = {
  solidity: "0.8.15",
  defaultNetwork: env.network,
  networks: {
    ropsten: {
      url: env.url.testnet,
      accounts: env.account.private,
    },
    hardhat: {
      forking: env.test ? undefined : { url: env.url.mainnet },
    },
    mainnet: {
      url: env.url.mainnet,
      accounts: env.account.private,
    },
  },
  gasReporter: {
    enabled: env.reportGas,
    currency: env.currency,
    token: env.token,
    coinmarketcap: env.key.coinmarketcap,
  },
  etherscan: {
    apiKey: env.key.etherscan,
  },
  mocha: {
    timeout: 2000,
  },
};

export default config;
