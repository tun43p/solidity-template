import * as dotenv from "dotenv";
import type { Env } from "modules/types";

dotenv.config();

const TEST_ENV: boolean = process.env.NODE_ENV === "test";
const REPORT_GAS: boolean = process.env.REPORT_GAS === "true";

const TOKEN: string = process.env.TOKEN || "ETH";
const CURRENCY: string = process.env.CURRENCY || "USD";

const PUBLIC_KEY: string | undefined = process.env.PUBLIC_KEY;
const PRIVATE_KEY: string | undefined = process.env.PRIVATE_KEY;

const NETWORK: string | undefined = process.env.NETWORK;

const TESTNET_URL: string | undefined = process.env.TESTNET_URL;
const MAINNET_URL: string | undefined = process.env.MAINNET_URL;

const ALCHEMY_API_KEY: string | undefined = process.env.ALCHEMY_API_KEY;
const ETHERSCAN_API_KEY: string | undefined = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY: string | undefined =
  process.env.COINMARKETCAP_API_KEY;

if (ALCHEMY_API_KEY === undefined || ALCHEMY_API_KEY === "") {
  throw Error("Please specify an Alchemy API key in the .env file.");
}

if (ETHERSCAN_API_KEY === undefined || ETHERSCAN_API_KEY === "") {
  console.warn("Please specify an Etherscan API key in the .env file.");
}

if (COINMARKETCAP_API_KEY === undefined || COINMARKETCAP_API_KEY === "") {
  console.warn("Please specify a CoinMarketCap API key in the .env file.");
}

if (MAINNET_URL === undefined || MAINNET_URL === "") {
  throw Error("Please specify the mainnet url in the .env file.");
}

if (NETWORK === undefined || NETWORK === "") {
  throw Error("Please specify a network in the .env file.");
}

if (PUBLIC_KEY === undefined || PUBLIC_KEY === "") {
  throw Error("Please specify a wallet public key in the .env file.");
}

if (PRIVATE_KEY === undefined || PRIVATE_KEY === "") {
  throw Error("Please specify a wallet private key in the .env file.");
}

if (TESTNET_URL === undefined || TESTNET_URL === "") {
  throw Error("Please specify the testnet url in the .env file.");
}

export default {
  account: {
    public: PUBLIC_KEY,
    private: [`0x${PRIVATE_KEY}`],
  },
  currency: CURRENCY,
  key: {
    alchemy: ALCHEMY_API_KEY,
    coinmarketcap: COINMARKETCAP_API_KEY,
    etherscan: ETHERSCAN_API_KEY,
  },
  network: NETWORK,
  test: TEST_ENV,
  reportGas: REPORT_GAS,
  token: TOKEN,
  url: {
    mainnet: MAINNET_URL + ALCHEMY_API_KEY,
    testnet: TESTNET_URL + ALCHEMY_API_KEY,
  },
} as Env;
