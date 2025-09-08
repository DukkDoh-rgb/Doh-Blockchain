const { ethers } = require("hardhat");

async function main() {
  const name = process.env.TOKEN_NAME || "MyToken";
  const symbol = process.env.TOKEN_SYMBOL || "MTK";
  const supply = process.env.TOKEN_SUPPLY || "1000000"; // whole tokens
  const decimals = 18n;
  const initial = BigInt(supply) * 10n ** decimals;

  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(name, symbol, initial.toString());
  await token.waitForDeployment();

  console.log("Token deployed to:", await token.getAddress());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
