# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Root Commands:**
- `pnpm dev` - Start frontend development server
- `pnpm build` - Build all packages (contracts, shared, frontend)
- `pnpm test` - Run smart contract tests
- `pnpm lint` - Run frontend linting

**Package-specific Commands:**
- `pnpm --filter @web3-social/contracts compile` - Compile smart contracts
- `pnpm --filter @web3-social/contracts test` - Run contract tests
- `pnpm --filter @web3-social/contracts deploy:testnet` - Deploy to Arbitrum Sepolia
- `pnpm --filter @web3-social/shared build` - Build shared types package

## Development Best Practices

- When working on an issue we should create a new branch so we can work in isolation 

## Architecture Overview

This is a **monorepo** containing a fully on-chain web3 social application:

### Monorepo Structure
```
packages/
├── contracts/     # Smart contracts (Hardhat + TypeScript)
├── frontend/      # Next.js 15 web app
└── shared/        # Shared types and utilities
```

### Technology Stack
- **Smart Contracts**: Solidity with Hardhat, deployed on Arbitrum
- **Frontend**: Next.js 15 with App Router, React 19, Tailwind CSS v4
- **Web3 Integration**: Reown AppKit + Wagmi for wallet connectivity
- **State Management**: TanStack Query for blockchain state
- **Package Manager**: pnpm workspaces

### Key Architecture Points

**On-Chain First**: All social data (messages, likes, follows) stored on Arbitrum blockchain for true decentralization and censorship resistance.

**Smart Contract Architecture**: Core `SocialMedia.sol` contract handles all social interactions with gas-optimized storage and event emissions.

**Frontend Integration**: Uses generated TypeScript types from contract ABIs with custom Wagmi hooks for seamless blockchain interactions.

**Cross-Package Dependencies**: Frontend imports contract types from `@web3-social/contracts` workspace package.

**Environment Setup**: Requires `.env` file with RPC URLs, private key, and API keys for deployment and verification.