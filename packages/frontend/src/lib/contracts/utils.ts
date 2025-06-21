import { baseSepolia } from 'wagmi/chains'
import { SOCIAL_MEDIA_ABI } from './abi'
import { SOCIAL_MEDIA_CONTRACT_ADDRESS } from './addresses'
import type { Address } from 'viem'

export const CHAIN_ID = baseSepolia.id

export interface ContractConfig {
  address: Address
  abi: typeof SOCIAL_MEDIA_ABI
  chainId: number
}

export const getSocialMediaContract = (): ContractConfig => ({
  address: SOCIAL_MEDIA_CONTRACT_ADDRESS,
  abi: SOCIAL_MEDIA_ABI,
  chainId: CHAIN_ID,
})

export const handleContractError = (error: Error | { message?: string }, functionName: string) => {
  console.error(`Contract error in ${functionName}:`, error)
  
  if (error.message?.includes('User rejected')) {
    return 'Transaction was cancelled by user'
  }
  
  if (error.message?.includes('insufficient funds')) {
    return 'Insufficient funds for transaction'
  }
  
  if (error.message?.includes('execution reverted')) {
    return 'Transaction failed - contract requirements not met'
  }
  
  return `Transaction failed: ${error.message || 'Unknown error'}`
}