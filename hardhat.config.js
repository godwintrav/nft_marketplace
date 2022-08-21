require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.4",

  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/174af1caca0a45e781a8316f4ad0aa8a",
      accounts: [process.env.KEY1, process.env.KEY2, process.env.KEY3] 
    }
  },

  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
