// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();

  const NFT = await hre.ethers.getContractFactory("NARUTO");
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log("NFT is address", nft.address);

  const Market = await hre.ethers.getContractFactory("Marketplace");
  const market = await Market.deploy();

  await market.deployed();

  console.log("market is address", market.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
