require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, RPC_URL } = process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    sepolia: {
      url: RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};
