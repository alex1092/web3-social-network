import { 
  useWriteContract, 
  useWaitForTransactionReceipt,
  useSimulateContract,
  useAccount,
  useReadContract
} from 'wagmi'
import { useState } from 'react'
import { getSocialMediaContract, handleContractError } from '../utils'

export interface UseLikeMessageProps {
  postId: bigint
  onSuccess?: (txHash: string) => void
  onError?: (error: string) => void
}

export interface UseLikeMessageReturn {
  likePost: () => void
  unlikePost: () => void
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  error: string | null
  txHash: string | undefined
  isLiked: boolean
  isLoading: boolean
  reset: () => void
}

export function useLikeMessage({ 
  postId, 
  onSuccess, 
  onError 
}: UseLikeMessageProps): UseLikeMessageReturn {
  const { address } = useAccount()
  const [error, setError] = useState<string | null>(null)
  
  const contract = getSocialMediaContract()

  const { 
    data: isLiked = false, 
    isLoading,
    refetch: refetchLikeStatus 
  } = useReadContract({
    ...contract,
    functionName: 'hasLikedPost',
    args: [postId, address!],
    query: {
      enabled: !!address && !!postId,
    },
  })

  const { data: simulateLikeData, error: simulateLikeError } = useSimulateContract({
    ...contract,
    functionName: 'likePost',
    args: [postId],
    query: {
      enabled: !!postId && !!address && !isLiked,
    },
  })

  const { data: simulateUnlikeData, error: simulateUnlikeError } = useSimulateContract({
    ...contract,
    functionName: 'unlikePost',
    args: [postId],
    query: {
      enabled: !!postId && !!address && isLiked,
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
        setError(null)
        onSuccess?.(hash)
        refetchLikeStatus()
      },
      onError: (err) => {
        const errorMessage = handleContractError(err, isLiked ? 'unlikePost' : 'likePost')
        setError(errorMessage)
        onError?.(errorMessage)
      },
    },
  })

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  })

  const likePost = () => {
    if (!address) {
      setError('Please connect your wallet')
      return
    }

    if (isLiked) {
      setError('Post is already liked')
      return
    }

    if (simulateLikeError) {
      const errorMessage = handleContractError(simulateLikeError, 'likePost')
      setError(errorMessage)
      return
    }

    if (!simulateLikeData) {
      setError('Unable to simulate like transaction')
      return
    }

    writeContract(simulateLikeData.request)
  }

  const unlikePost = () => {
    if (!address) {
      setError('Please connect your wallet')
      return
    }

    if (!isLiked) {
      setError('Post is not liked')
      return
    }

    if (simulateUnlikeError) {
      const errorMessage = handleContractError(simulateUnlikeError, 'unlikePost')
      setError(errorMessage)
      return
    }

    if (!simulateUnlikeData) {
      setError('Unable to simulate unlike transaction')
      return
    }

    writeContract(simulateUnlikeData.request)
  }

  const reset = () => {
    setError(null)
    resetWrite()
  }

  return {
    likePost,
    unlikePost,
    isPending,
    isConfirming,
    isConfirmed,
    error,
    txHash,
    isLiked,
    isLoading,
    reset,
  }
}