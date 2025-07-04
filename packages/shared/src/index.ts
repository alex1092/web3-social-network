// Shared types and utilities for the web3 social app

export interface NetworkConfig {
  chainId: number;
  name: string;
  rpcUrl: string;
  blockExplorer: string;
}

export const SUPPORTED_NETWORKS: Record<number, NetworkConfig> = {
  42161: {
    chainId: 42161,
    name: "Arbitrum One",
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    blockExplorer: "https://arbiscan.io"
  },
  421614: {
    chainId: 421614,
    name: "Arbitrum Sepolia",
    rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
    blockExplorer: "https://sepolia.arbiscan.io"
  },
  84532: {
    chainId: 84532,
    name: "Base Sepolia",
    rpcUrl: "https://sepolia.base.org",
    blockExplorer: "https://sepolia.basescan.org"
  }
};

// Contract addresses - updated with optimized deployment
export const CONTRACT_ADDRESSES: Record<number, { socialMedia: string }> = {
  42161: { socialMedia: "" }, // Arbitrum One
  421614: { socialMedia: "" }, // Arbitrum Sepolia
  84532: { socialMedia: "0xC87D021BF2F350Bb2EcB6c47c9F290EC73ce118a" } // Base Sepolia - Optimized Contract
};