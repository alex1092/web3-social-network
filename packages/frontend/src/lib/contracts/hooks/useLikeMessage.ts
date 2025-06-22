import { 
  useWriteContract, 
  useWaitForTransactionReceipt,
  useSimulateContract,
  useAccount,
  useReadContract
} from 'wagmi'
import { useState, useCallback } from 'react'
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
  const [optimisticLiked, setOptimisticLiked] = useState<boolean | null>(null)
  
  const contract = getSocialMediaContract()

  const { 
    data: actualIsLiked = false, 
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

  const isLiked = optimisticLiked !== null ? optimisticLiked : actualIsLiked

  const { data: simulateLikeData, error: simulateLikeError } = useSimulateContract({
    ...contract,
    functionName: 'likePost',
    args: [postId],
    query: {
      enabled: !!postId && !!address && !actualIsLiked,
    },
  })

  const { data: simulateUnlikeData, error: simulateUnlikeError } = useSimulateContract({
    ...contract,
    functionName: 'unlikePost',
    args: [postId],
    query: {
      enabled: !!postId && !!address && actualIsLiked,
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
      },
      onError: (err) => {
        setOptimisticLiked(null)
        const errorMessage = handleContractError(err, optimisticLiked ? 'likePost' : 'unlikePost')
        setError(errorMessage)
        onError?.(errorMessage)
      },
    },
  })

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
    query: {
      onSuccess: () => {
        setOptimisticLiked(null)
        refetchLikeStatus()
      },
    },
  })

  const likePost = useCallback(() => {
    if (!address) {
      setError('Please connect your wallet')
      return
    }

    if (actualIsLiked) {
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

    setOptimisticLiked(true)
    setError(null)
    writeContract(simulateLikeData.request)
  }, [address, actualIsLiked, simulateLikeError, simulateLikeData, writeContract])

  const unlikePost = useCallback(() => {
    if (!address) {
      setError('Please connect your wallet')
      return
    }

    if (!actualIsLiked) {
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

    setOptimisticLiked(false)
    setError(null)
    writeContract(simulateUnlikeData.request)
  }, [address, actualIsLiked, simulateUnlikeError, simulateUnlikeData, writeContract])

  const reset = () => {
    setError(null)
    setOptimisticLiked(null)
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