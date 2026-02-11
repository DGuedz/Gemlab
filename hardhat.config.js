require("@nomicfoundation/hardhat-toolbox");
require("solidity-coverage");
require("dotenv").config();

// Helper to determine account type (Private Key vs Mnemonic)
function getAccounts() {
  const key = process.env.PRIVATE_KEY;
  if (!key) return [];
  
  // If key contains spaces, treat as mnemonic
  if (key.includes(" ")) {
    return {
      mnemonic: key,
      path: "m/44'/60'/0'/0",
      initialIndex: 0,
      count: 1,
    };
  }
  
  // Otherwise treat as private key
  return [key];
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "https://ethereum-sepolia-rpc.publicnode.com", // Fallback to public RPC
      accounts: getAccounts(),
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    noColors: true,
    outputFile: "gas-report.txt",
  },
};
