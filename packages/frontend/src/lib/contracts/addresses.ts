import { Address } from 'viem'

export const SOCIAL_MEDIA_CONTRACT_ADDRESS: Address = '0x6Ed2CfcbD93Edd5081a3C9B9D064307E5c75c27c'

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