const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  it("mints initial supply to deployer and allows owner mint", async function () {
    const [owner, other] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MyToken");
    const initialSupply = ethers.parseUnits("1000", 18);
    const token = await Token.deploy("MyToken", "MTK", initialSupply);
    await token.waitForDeployment();

    expect(await token.balanceOf(owner.address)).to.equal(initialSupply);

    await token.mint(other.address, ethers.parseUnits("5", 18));
    expect(await token.balanceOf(other.address)).to.equal(ethers.parseUnits("5", 18));
  });
});
