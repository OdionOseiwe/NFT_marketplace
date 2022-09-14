require("@nomicfoundation/hardhat-toolbox");
import "@nomiclabs/hardhat-ethers";
require("dotenv").config({ path: ".env" });


const MUMBAI_API_KEY = process.env.MUMBAI_API_KEY;

const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

const GOERLI_API_KEY = process.env.GOERLI_API_KEY;

const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: MUMBAI_API_KEY,
      accounts: [MUMBAI_PRIVATE_KEY]
    },
    rinkeby: {
      url: GOERLI_API_KEY,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  }
};
