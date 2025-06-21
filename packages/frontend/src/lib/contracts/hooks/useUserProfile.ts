import { 
  useReadContract, 
  useWriteContract, 
  useWaitForTransactionReceipt,
  useSimulateContract,
  useAccount,
  useBlockNumber
} from 'wagmi'
import { useState } from 'react'
import { getSocialMediaContract, handleContractError } from '../utils'
import type { SocialMedia } from '../types'
import type { Address } from 'viem'

export interface UseUserProfileProps {
  address?: Address
  username?: string
}

export interface UseUserProfileReturn {
  user: SocialMedia.UserStructOutput | undefined
  isLoading: boolean
  isError: boolean
  error: Error | null
  refetch: () => void
  registerUser: (username: string, bio: string) => void
  followUser: (userToFollow: Address) => void
  unfollowUser: (userToUnfollow: Address) => void
  isFollowing: (userAddress: Address) => boolean
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  txHash: string | undefined
  actionError: string | null
  reset: () => void
}

export function useUserProfile({ 
  address, 
  username 
}: UseUserProfileProps = {}): UseUserProfileReturn {
  const { address: connectedAddress } = useAccount()
  const [actionError, setActionError] = useState<string | null>(null)
  
  const contract = getSocialMediaContract()
  const { data: blockNumber } = useBlockNumber({ watch: true })

  const userAddress = address || connectedAddress
  const shouldFetchByAddress = !!userAddress && !username
  const shouldFetchByUsername = !!username

  const { 
    data: userByAddress, 
    isLoading: isLoadingByAddress,
    isError: isErrorByAddress,
    error: errorByAddress,
    refetch: refetchByAddress 
  } = useReadContract({
    ...contract,
    functionName: 'getUser',
    args: [userAddress!],
    query: {
      enabled: shouldFetchByAddress,
    },
  })

  const { 
    data: userByUsername, 
    isLoading: isLoadingByUsername,
    isError: isErrorByUsername,
    error: errorByUsername,
    refetch: refetchByUsername 
  } = useReadContract({
    ...contract,
    functionName: 'getUserByUsername',
    args: [username!],
    query: {
      enabled: shouldFetchByUsername,
    },
  })

  const user = userByAddress || userByUsername
  const isLoading = isLoadingByAddress || isLoadingByUsername
  const isError = isErrorByAddress || isErrorByUsername
  const error = errorByAddress || errorByUsername

  const { data: simulateRegisterData, error: simulateRegisterError } = useSimulateContract({
    ...contract,
    functionName: 'registerUser',
    args: ['', ''],
    query: {
      enabled: false,
    },
  })

  const { data: simulateFollowData, error: simulateFollowError } = useSimulateContract({
    ...contract,
    functionName: 'followUser',
    args: ['0x0000000000000000000000000000000000000000' as Address],
    query: {
      enabled: false,
    },
  })

  const { data: simulateUnfollowData, error: simulateUnfollowError } = useSimulateContract({
    ...contract,
    functionName: 'unfollowUser',
    args: ['0x0000000000000000000000000000000000000000' as Address],
    query: {
      enabled: false,
    },
  })

  const {
    writeContract,
    data: txHash,
    isPending,
    reset: resetWrite,
  } = useWriteContract({
    mutation: {
      onSuccess: (hash) => {
        setActionError(null)
        refetch()
      },
      onError: (err) => {
        const errorMessage = handleContractError(err, 'userAction')
        setActionError(errorMessage)
      },
    },
  })

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  })

  const registerUser = (newUsername: string, bio: string) => {
    if (!connectedAddress) {
      setActionError('Please connect your wallet')
      return
    }

    try {
      writeContract({
        ...contract,
        functionName: 'registerUser',
        args: [newUsername, bio],
      })
    } catch (err) {
      const errorMessage = handleContractError(err as Error, 'registerUser')
      setActionError(errorMessage)
    }
  }

  const followUser = (userToFollow: Address) => {
    if (!connectedAddress) {
      setActionError('Please connect your wallet')
      return
    }

    try {
      writeContract({
        ...contract,
        functionName: 'followUser',
        args: [userToFollow],
      })
    } catch (err) {
      const errorMessage = handleContractError(err as Error, 'followUser')
      setActionError(errorMessage)
    }
  }

  const unfollowUser = (userToUnfollow: Address) => {
    if (!connectedAddress) {
      setActionError('Please connect your wallet')
      return
    }

    try {
      writeContract({
        ...contract,
        functionName: 'unfollowUser',
        args: [userToUnfollow],
      })
    } catch (err) {
      const errorMessage = handleContractError(err as Error, 'unfollowUser')
      setActionError(errorMessage)
    }
  }

  const { data: followingStatus } = useReadContract({
    ...contract,
    functionName: 'isFollowing',
    args: [connectedAddress!, userAddress!],
    query: {
      enabled: !!connectedAddress && !!userAddress && connectedAddress !== userAddress,
    },
  })

  const isFollowing = (userAddr: Address) => {
    if (!connectedAddress || connectedAddress === userAddr) return false
    return followingStatus || false
  }

  const refetch = () => {
    if (shouldFetchByAddress) {
      refetchByAddress()
    }
    if (shouldFetchByUsername) {
      refetchByUsername()
    }
  }

  const reset = () => {
    setActionError(null)
    resetWrite()
  }

  return {
    user: user as SocialMedia.UserStructOutput | undefined,
    isLoading,
    isError,
    error,
    refetch,
    registerUser,
    followUser,
    unfollowUser,
    isFollowing,
    isPending,
    isConfirming,
    isConfirmed,
    txHash,
    actionError,
    reset,
  }
}