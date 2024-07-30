require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@truffle/dashboard-hardhat-plugin");
require("solidity-docgen");
require("@nomicfoundation/hardhat-ignition-ethers");

const INFURA_API_KEY = process.env;
const AMOY_API_KEY = process.env;
const PRIVATE_KEY = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  networks: {
    hardhat : {
    },
    dashboard: {
      url: "http://localhost:24012/rpc"
    },
    mumbai: {
      chainId: 80001,
      url: "https://polygon-mumbai-bor.publicnode.com"
    },
    goerli: {
      chainId: 5,
      url: "https://ethereum-goerli.publicnode.com"
    },
    amoy: {
      url: `https://polygon-amoy.g.alchemy.com/v2/3zueGemMhzydb3cK2drWg99vH7ZxE6tZ`,
      account: [`0x${PRIVATE_KEY}`],
    },
  },

  docgen: {
    sourcesDir: 'contracts',
    outputDir: 'documentation',
    templates: 'templates',
    pages: 'files',
    clear: true,
    runOnCompile: true,
  },

  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_KEY,
      amoy: AMOY_API_KEY,
    }
  },
};
