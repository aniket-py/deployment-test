require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const { privateKeys } = require("./secrets.json");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "dappnet",
  networks: {
    hardhat: {},
       dappnet: {
      url: "https://dapps.shardeum.org", // Specify the URL for the dappnet
      chainId: 8081, // Replace with the actual chain ID
      gas: 2100000,
      gasPrice: 50000000000,
      accounts: [privateKeys],
    },
    validator: {
      url: "hhttp://45.79.42.134:8080", // Specify the URL for the validator
      chainId: 8082, // Replace with the actual chain ID
      gas: 2100000,
      gasPrice: 50000000000,
      accounts: [privateKeys],
    },
    
  },
  solidity: {
    //configure solidity version for compilation
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
