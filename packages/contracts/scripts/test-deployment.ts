import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0xC87D021BF2F350Bb2EcB6c47c9F290EC73ce118a";
  
  console.log("🔍 Testing deployed contract at:", contractAddress);
  
  const SocialMedia = await ethers.getContractFactory("SocialMedia");
  const socialMedia = SocialMedia.attach(contractAddress);
  
  try {
    // Test basic contract reads
    const totalUsers = await socialMedia.totalUsers();
    const totalPosts = await socialMedia.totalPosts();
    const nextPostId = await socialMedia.nextPostId();
    
    console.log("✅ Contract state successfully read:");
    console.log("   Total Users:", totalUsers.toString());
    console.log("   Total Posts:", totalPosts.toString());
    console.log("   Next Post ID:", nextPostId.toString());
    
    console.log("\n🎉 Contract deployment verification successful!");
    console.log("📋 Contract Explorer: https://sepolia.basescan.org/address/" + contractAddress);
    
  } catch (error) {
    console.error("❌ Error testing contract:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });