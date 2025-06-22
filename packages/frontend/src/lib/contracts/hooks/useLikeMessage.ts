import { 
  useWriteContract, 
  useWaitForTransactionReceipt,
  useSimulateContract,
  useAccount,
  useReadContract
} from 'wagmi'
import { useCallback, useEffect } from 'react'
import { getSocialMediaContract, handleContractError } from '../utils'

export interface UseLikeMessageProps {
  postId: bigint
  onSuccess?: (txHash: string) => void
  onError?: (error: string) => void
  onPostUpdate?: () => void // Callback to refetch post data
}

export interface UseLikeMessageReturn {
  likePost: () => void
  unlikePost: () => void
  isLoading: boolean
  error: string | null
  isLiked: boolean
  reset: () => void
}

export function useLikeMessage({ 
  postId, 
  onSuccess, 
  onError,
  onPostUpdate
}: UseLikeMessageProps): UseLikeMessageReturn {
  const { address } = useAccount()
  const contract = getSocialMediaContract()

  // Get current like status from blockchain
  const { 
    data: isLiked = false, 
    isLoading: isLoadingLikeStatus,
    refetch: refetchLikeStatus 
  } = useReadContract({
    ...contract,
    functionName: 'hasLikedPost',
    args: [postId, address as `0x${string}`],
    query: {
      enabled: !!address && !!postId,
    },
  })

  // Simulate like transaction
  const { data: simulateLikeData, error: simulateLikeError } = useSimulateContract({
    ...contract,
    functionName: 'likePost',
    args: [postId],
    query: {
      enabled: !!postId && !!address && !isLiked,
    },
  })

  // Simulate unlike transaction
  const { data: simulateUnlikeData, error: simulateUnlikeError } = useSimulateContract({
    ...contract,
    functionName: 'unlikePost',
    args: [postId],
    query: {
      enabled: !!postId && !!address && isLiked,
    },
  })

  // Write contract
  const {
    writeContract,
    data: txHash,
    isPending: isWritePending,
    error: writeError,
    reset: resetWrite,
  } = useWriteContract({
    mutation: {
      onSuccess: (hash) => {
        onSuccess?.(hash)
      },
      onError: (err) => {
        const errorMessage = handleContractError(err, 'mutation')
        onError?.(errorMessage)
      },
    },
  })

  // Wait for transaction confirmation
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  })

  // Refetch like status and post data when transaction confirms
  useEffect(() => {
    if (isConfirmed) {
      refetchLikeStatus()
      onPostUpdate?.() // Trigger post data refetch in parent
    }
  }, [isConfirmed, refetchLikeStatus, onPostUpdate])

  // Combined loading state
  const isLoading = isLoadingLikeStatus || isWritePending || isConfirming

  const likePost = useCallback(() => {
    if (!address) {
      onError?.('Please connect your wallet')
      return
    }

    if (isLiked) {
      onError?.('Post is already liked')
      return
    }

    if (simulateLikeError) {
      onError?.(handleContractError(simulateLikeError, 'likePost'))
      return
    }

    if (!simulateLikeData) {
      onError?.('Unable to simulate like transaction')
      return
    }

    writeContract(simulateLikeData.request)
  }, [address, isLiked, simulateLikeError, simulateLikeData, writeContract, onError])

  const unlikePost = useCallback(() => {
    if (!address) {
      onError?.('Please connect your wallet')
      return
    }

    if (!isLiked) {
      onError?.('Post is not liked')
      return
    }

    if (simulateUnlikeError) {
      onError?.(handleContractError(simulateUnlikeError, 'unlikePost'))
      return
    }

    if (!simulateUnlikeData) {
      onError?.('Unable to simulate unlike transaction')
      return
    }

    writeContract(simulateUnlikeData.request)
  }, [address, isLiked, simulateUnlikeError, simulateUnlikeData, writeContract, onError])

  const reset = useCallback(() => {
    resetWrite()
  }, [resetWrite])

  return {
    likePost,
    unlikePost,
    isLoading,
    error: writeError ? handleContractError(writeError, 'mutation') : null,
    isLiked,
    reset,
  }
}