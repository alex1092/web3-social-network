import { ethers, run } from "hardhat";

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

  // Auto-verify contract if not on localhost
  const networkName = process.env.HARDHAT_NETWORK || "localhost";
  if (networkName !== "localhost" && networkName !== "hardhat") {
    console.log("\n🔍 Verifying contract on block explorer...");
    
    try {
      // Wait a bit for the contract to be indexed
      console.log("Waiting 30 seconds for contract to be indexed...");
      await new Promise(resolve => setTimeout(resolve, 30000));

      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: [],
      });
      
      console.log("✅ Contract verified successfully!");
      console.log(`📋 View verified contract at: https://${getExplorerUrl(networkName)}/address/${contractAddress}#code`);
    } catch (error: any) {
      if (error.message.toLowerCase().includes("already verified")) {
        console.log("✅ Contract is already verified!");
      } else {
        console.log("❌ Verification failed:", error.message);
        console.log("You can manually verify using:");
        console.log(`npx hardhat verify --network ${networkName} ${contractAddress}`);
      }
    }
  }
}

function getExplorerUrl(network: string): string {
  switch (network) {
    case "baseSepolia":
      return "sepolia.basescan.org";
    case "base":
      return "basescan.org";
    case "arbitrumSepolia":
      return "sepolia.arbiscan.io";
    case "arbitrumOne":
      return "arbiscan.io";
    default:
      return "etherscan.io";
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });