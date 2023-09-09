const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

async function main() {
  const myToken = await ethers.getContractFactory("MyToken");
  console.log("Deploying MyToken...");
  const token = await upgrades.deployProxy(myToken, ["MyToken", "MTK"], {
    initializer: "createToken",
  });
  console.log(token);
  console.log(token.address, " token(proxy) address");
  console.log(
    await upgrades.erc1967.getImplementationAddress(token.address),
    " getImplementationAddress"
  );
  console.log(
    await upgrades.erc1967.getAdminAddress(token.address),
    " getAdminAddress"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
