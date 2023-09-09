const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");
const { getImplementationAddress } = require("@openzeppelin/upgrades-core");

async function main() {
  const myToken = await ethers.getContractFactory("MyToken");
  console.log("Deploying MyToken...");
  const token = await upgrades.deployProxy(myToken, ["MyToken", "MTK"], {
    initializer: "createToken",
  });
  console.log(token);
  const provider = ethers.provider;
  console.log(token.runner.address, " token(proxy) address");
  const currentImplAddress = await getImplementationAddress(
    provider,
    token.runner.address
  );
  console.log(
    currentImplAddress,

    " getImplementationAddress"
  );

  console.log("1");
  console.log(
    await upgrades.erc1967.getAdminAddress(token.runner.address),
    " getAdminAddress"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
