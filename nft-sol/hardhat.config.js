require("@nomicfoundation/hardhat-toolbox");
// import "@nomiclabs/hardhat-ethers";
require("dotenv").config({ path: ".env" });
require('@nomiclabs/hardhat-etherscan');

const MUMBAI_API_KEY = process.env.MUMBAI_API_KEY;

const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

const GOERLI_API_KEY = process.env.GOERLI_API_KEY;

const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

const ROSPTEN_API_KEY = process.env.ROSPTEN_API_KEY;

const ROSPTEN_PRIVATE_KEY = process.env.ROSPTEN_PRIVATE_KEY;

const POLYGON = process.env.POLYGON;

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: MUMBAI_API_KEY,
      accounts: [MUMBAI_PRIVATE_KEY]
    },
    goerli: {
      url: GOERLI_API_KEY,
      accounts: [GOERLI_PRIVATE_KEY],
    },
    rospten: {
      url: ROSPTEN_API_KEY,
      accounts: [ROSPTEN_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYGON,
 }
 
};

// contract 
