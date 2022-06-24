declare namespace Types {
  export type Env = {
    account: {
      public: string;
      private: string[];
    };
    currency: string;
    key: {
      alchemy: string;
      coinmarketcap: string | undefined;
      etherscan: string | undefined;
    };
    network: Enums.Network;
    node: Enums.NodeEnv;
    reportGas: boolean;
    token: string;
    url: {
      mainnet: string;
      testnet: string;
    };
  };
}
