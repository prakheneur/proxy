require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
require("@openzeppelin/hardhat-upgrades");
module.exports = {
  solidity: "0.8.7",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/N48jTh11nOxU4bpoGti1Tk9NAv1wkC_N",
      accounts: [
        "579c38852bdea8b7c6724174003aa7eb45a1a3445b4ebbc5f0f2ba3dafafb157",
      ],
    },
  },
};

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
};

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
};

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
};
