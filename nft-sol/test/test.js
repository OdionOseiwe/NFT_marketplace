const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("NFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deployment(){
    const [owner, otherAccount, otherAccount2] = await ethers.getSigners();
    const royaltyaddress = otherAccount2.address;
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(royaltyaddress); 

    const Market = await ethers.getContractFactory("Marketplace");
    const market = await Market.deploy();
    return { owner, otherAccount,otherAccount2, nft ,market};
  }

  describe("list an nft in the marketplace", function(){
    it("list nft properties", async function(){
      const { owner,market , nft} = await loadFixture(deployment);

      // mint to an address
      await nft.mint(owner.address);

      // // set listingprice 
      let listing= ethers.utils.parseEther("0.5");
      let listingprice = await market.setlistingprice(listing);

      console.log(listingprice)

      const  price = ethers.utils.parseEther("0.5");
      // approve the marketplace
      await nft.approve(market.address, 1);
      
      await market.listnft(price,nft.address,1,{value:listing});
    })
  })
});