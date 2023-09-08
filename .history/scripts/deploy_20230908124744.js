const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");
  console.log("Deploying MyToken...");
  const box = await upgrades.deployProxy(MyToken, ["MyToken", "MTK"], {
    initializer: "createToken",
  });
  console.log(MyToken.address, " MyToken(proxy) address");
  console.log(
    await upgrades.erc1967.getImplementationAddress(MyToken.address),
    " getImplementationAddress"
  );
  console.log(
    await upgrades.erc1967.getAdminAddress(MyToken.address),
    " getAdminAddress"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
