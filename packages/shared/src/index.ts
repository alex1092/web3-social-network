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
  }
};

// Contract addresses will be populated after deployment
export const CONTRACT_ADDRESSES: Record<number, { socialMedia: string }> = {
  42161: { socialMedia: "" }, // Arbitrum One
  421614: { socialMedia: "" } // Arbitrum Sepolia
};