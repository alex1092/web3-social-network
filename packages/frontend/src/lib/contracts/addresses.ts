import { Address } from 'viem'

export const SOCIAL_MEDIA_CONTRACT_ADDRESS: Address = '0xC87D021BF2F350Bb2EcB6c47c9F290EC73ce118a'

export const CONTRACT_ADDRESSES = {
  socialMedia: SOCIAL_MEDIA_CONTRACT_ADDRESS,
} as const

export const SUPPORTED_CHAINS = {
  baseSepolia: {
    id: 84532,
    name: 'Base Sepolia',
    contracts: {
      socialMedia: SOCIAL_MEDIA_CONTRACT_ADDRESS,
    },
  },
} as const