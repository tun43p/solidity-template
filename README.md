# Solidity Template

## Table of contents

- [Solidity Template](#solidity-template)
  - [Table of contents](#table-of-contents)
  - [Informations](#informations)
    - [Version](#version)
    - [Etherscan verification](#etherscan-verification)
    - [Performance optimizations](#performance-optimizations)
  - [Before starting](#before-starting)
    - [Environment file](#environment-file)
  - [Getting started](#getting-started)
    - [Download project](#download-project)
    - [Install project](#install-project)
    - [Compile project](#compile-project)
    - [Lint project](#lint-project)
    - [Format project](#format-project)
    - [Test project](#test-project)
    - [Converage project](#converage-project)
    - [Deploy project](#deploy-project)
      - [Deploy on a testnet](#deploy-on-a-testnet)
      - [Deploy on mainnet](#deploy-on-mainnet)
    - [Clean project](#clean-project)
    - [Show help](#show-help)
    - [Show accounts](#show-accounts)
    - [Start local chain](#start-local-chain)
  - [Authors](#authors)
  - [License](#license)

## Informations

### Version

**1.0.0-alpha**

### Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

### Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).

## Before starting

### Environment file

Before starting the project, you will need to specify all variables in the .env file.

## Getting started

### Download project

To download the project, please do `git clone https://github.com/tun43p/solidity-template`.

### Install project

To install the project, please do `yarn install`.

### Compile project

To compile the project, please do `yarn compile`.

### Lint project

To lint the project, please do `yarn lint`.

### Format project

To format the project, please do `yarn format`.

### Test project

To test the project, please do `yarn test`.

### Converage project

To converage the project, please do `yarn converage`.

### Deploy project

#### Deploy on a testnet

To deploy the project on a testnet, please do `yarn deploy`.

#### Deploy on mainnet

To deploy the project on the mainnet, please do `yarn deploy:prod`.

### Clean project

To clean the project, please do `yarn clean`.

### Show help

To show help, please do `yarn help`.

### Show accounts

To show accounts, please do `yarn accounts`.

### Start local chain

To start a local chain, please do `yarn local`.

## Authors

**tun43p** - _Initial work_ - [tun43p](https://github.com/tun43p)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
