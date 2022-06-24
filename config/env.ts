import * as dotenv from "dotenv";

dotenv.config();

if (
  process.env.NODE_ENV !== Enums.NodeEnv.dev &&
  process.env.NODE_ENV !== Enums.NodeEnv.prod &&
  process.env.NODE_ENV !== Enums.NodeEnv.test
) {
  throw Error("Please set your NODE_ENV env to: \n- dev\n- prod\n- test");
}

if (process.env.CURRENCY === undefined || process.env.CURRENCY === "") {
  console.warn("Currency is set to USD.");
  process.env.CURRENCY = "USD";
}

if (process.env.TOKEN === undefined || process.env.TOKEN === "") {
  console.warn("Token is set to ETH.");
  process.env.TOKEN = "ETH";
}

if (!process.env.PUBLIC_KEY?.includes("0x")) {
  throw Error("Please specify a valid wallet public key in the .env file.");
}

if (!process.env.PRIVATE_KEY?.includes("0x")) {
  throw Error("Please specify a valid wallet private key in the .env file.");
}

if (
  process.env.NETWORK !== Enums.Network.goerli &&
  process.env.NETWORK !== Enums.Network.hardhat &&
  process.env.NETWORK !== Enums.Network.mainnet
) {
  throw Error(
    "Please set your NETWORK env to: \n- goerli\n- hardhat\n- mainnet",
  );
}

if (!process.env.MAINNET_URL?.includes("alchemyapi.io")) {
  throw Error("Please specify the Alchemy mainnet url in the .env file.");
}

if (!process.env.TESTNET_URL?.includes("alchemyapi.io")) {
  throw Error("Please specify the Alchemy testnet url in the .env file.");
}

if (
  process.env.ALCHEMY_API_KEY === undefined ||
  process.env.ALCHEMY_API_KEY === ""
) {
  throw Error("Please specify an Alchemy API key in the .env file.");
}

if (
  process.env.COINMARKETCAP_API_KEY === undefined ||
  process.env.COINMARKETCAP_API_KEY === ""
) {
  console.warn("Please specify a CoinMarketCap API key in the .env file.");
}

if (
  process.env.ETHERSCAN_API_KEY === undefined ||
  process.env.ETHERSCAN_API_KEY === ""
) {
  console.warn("Please specify an Etherscan API key in the .env file.");
}

if (process.env.REPORT_GAS !== "true") {
  console.warn("Report gas value is set to false.");
  process.env.REPORT_GAS = "false";
}

export default {
  account: {
    public: process.env.PUBLIC_KEY,
    private: [process.env.PRIVATE_KEY],
  },
  currency: process.env.CURRENCY,
  key: {
    alchemy: process.env.ALCHEMY_API_KEY,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  network: process.env.NETWORK,
  node: process.env.NODE_ENV,
  reportGas: process.env.REPORT_GAS === "true",
  token: process.env.TOKEN,
  url: {
    mainnet: process.env.MAINNET_URL + process.env.ALCHEMY_API_KEY,
    testnet: process.env.TESTNET_URL + process.env.ALCHEMY_API_KEY,
  },
} as Types.Env;
