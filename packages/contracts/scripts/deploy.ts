import { ethers } from "hardhat";

async function main() {
  const signers = await ethers.getSigners();
  
  if (signers.length === 0) {
    throw new Error("No signers available. Make sure you have configured a private key in your environment.");
  }
  
  const deployer = signers[0];
  
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

  const SocialMedia = await ethers.getContractFactory("SocialMedia");
  const socialMedia = await SocialMedia.deploy();

  await socialMedia.waitForDeployment();

  const contractAddress = await socialMedia.getAddress();
  console.log("SocialMedia deployed to:", contractAddress);

  // Save the contract address and ABI for frontend integration
  const fs = require("fs");
  const path = require("path");

  const deploymentInfo = {
    address: contractAddress,
    network: process.env.HARDHAT_NETWORK || "localhost",
    deployer: deployer.address,
    deployedAt: new Date().toISOString(),
    blockNumber: await ethers.provider.getBlockNumber()
  };

  const deploymentsDir = path.join(__dirname, "..", "deployments");
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir);
  }

  fs.writeFileSync(
    path.join(deploymentsDir, `${process.env.HARDHAT_NETWORK || "localhost"}.json`),
    JSON.stringify(deploymentInfo, null, 2)
  );

  console.log("Deployment info saved to deployments/");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });