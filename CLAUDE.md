# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (faster than standard Next.js dev)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 web3 social application built with:

- **Framework**: Next.js 15 with App Router and React 19
- **Styling**: Tailwind CSS v4 with shadcn/ui components (New York style)
- **Web3 Integration**: Reown AppKit (formerly WalletConnect) with Wagmi for wallet connectivity
- **State Management**: TanStack Query for server state
- **Package Manager**: pnpm

### Key Architecture Points

**Web3 Setup**: The app uses Reown AppKit for wallet connections, configured in `src/providers/ReownProvider.tsx` with support for Mainnet and Arbitrum networks. The provider wraps the entire app in `src/app/layout.tsx`.

**Component System**: Uses shadcn/ui with path aliases configured (`@/components`, `@/lib`, etc.). Components follow the "New York" style variant with Lucide icons.

**Project Structure**:
- `src/app/` - Next.js App Router pages and layouts
- `src/components/ui/` - shadcn/ui components
- `src/providers/` - React context providers (currently Web3 provider)
- `src/lib/` - Utility functions and shared logic

**TypeScript Configuration**: Uses strict mode with path aliases. Import paths use `@/*` prefix for src directory.

**Important Note**: The ReownProvider contains a hardcoded project ID that should be replaced with environment variables for production use.