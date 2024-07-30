const { BigNumber, constants } = require("ethers");
const { expect } = require("chai");
require("@nomicfoundation/hardhat-chai-matchers");

let carContract;

describe("cars test", function (accounts) {
    baseURI = "ipfs://QmRJueffVCNwzj6gLfxzm4Fky9muBCg2j978rxp6gtCgUG"

    it("contract setup", async function(){
      [owner, user1, user2, user3] = await ethers.getSigners();

      const Car = await hre.ethers.getContractFactory("Cars");
      carContract = await Car.deploy();
      await carContract.waitForDeployment();
      console.log("Car contract deployed to:", await carContract.getAddress());
    })

    // aggiungere retrieve del bilancio
    it("owner mints some token", async function(){
      await carContract.connect(owner).mint(user1.address, 1, 2, "0x");
      await carContract.connect(owner).mint(user1.address, 3, 1, "0x");
    })

    it("owner batch-mints some token", async function(){
      await carContract.connect(owner).mintBatch(user3.address, [1, 4, 5], [2, 2, 2], "0x");
    })

    it("check uri", async function(){
      await carContract.setTokenUri(4, baseURI+"/4.json");
      console.log( await carContract.getTokenUri(4));
    })
})
