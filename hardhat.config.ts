import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import env from "config/env";

task("accounts", "Prints the list of accounts", async (_, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) console.info(account.address);
});

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: env.node === Enums.NodeEnv.test ? undefined : env.network,
  networks: {
    goerli: {
      url: env.url.testnet,
      accounts: env.account.private,
    },
    hardhat: {
      forking:
        env.node === Enums.NodeEnv.test ? undefined : { url: env.url.mainnet },
    },
    mainnet: {
      url: env.url.mainnet,
      accounts: env.account.private,
    },
  },
  etherscan: {
    apiKey: env.key.etherscan,
  },
  gasReporter: {
    enabled: env.reportGas,
    currency: env.currency,
    token: env.token,
    coinmarketcap: env.key.coinmarketcap,
  },
};

export default config;
