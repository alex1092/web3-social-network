import { 
  useWriteContract, 
  useWaitForTransactionReceipt,
  useSimulateContract,
  useAccount
} from 'wagmi'
import { useState } from 'react'
import { getSocialMediaContract, handleContractError } from '../utils'

export interface UseReplyMessageProps {
  parentId: bigint
  content: string
  onSuccess?: (txHash: string) => void
  onError?: (error: string) => void
}

export interface UseReplyMessageReturn {
  writeReply: () => void
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  error: string | null
  txHash: string | undefined
  reset: () => void
}

export function useReplyMessage({ 
  parentId,
  content, 
  onSuccess, 
  onError 
}: UseReplyMessageProps): UseReplyMessageReturn {
  const { address } = useAccount()
  const [error, setError] = useState<string | null>(null)
  
  const contract = getSocialMediaContract()

  const { data: simulateData, error: simulateError } = useSimulateContract({
    ...contract,
    functionName: 'createReply',
    args: [parentId, content],
    query: {
      enabled: !!content && !!address && !!parentId,
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
        const errorMessage = handleContractError(err, 'createReply')
        setError(errorMessage)
        onError?.(errorMessage)
      },
    },
  })

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  })

  const writeReply = () => {
    if (!content.trim()) {
      setError('Reply content cannot be empty')
      return
    }

    if (!address) {
      setError('Please connect your wallet')
      return
    }

    if (!parentId) {
      setError('Parent post ID is required')
      return
    }

    if (simulateError) {
      const errorMessage = handleContractError(simulateError, 'createReply')
      setError(errorMessage)
      return
    }

    if (!simulateData) {
      setError('Unable to simulate transaction')
      return
    }

    writeContract(simulateData.request)
  }

  const reset = () => {
    setError(null)
    resetWrite()
  }

  return {
    writeReply,
    isPending,
    isConfirming,
    isConfirmed,
    error,
    txHash,
    reset,
  }
}