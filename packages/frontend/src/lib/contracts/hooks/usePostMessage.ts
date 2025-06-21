import { 
  useWriteContract, 
  useWaitForTransactionReceipt,
  useSimulateContract,
  useAccount
} from 'wagmi'
import { useState } from 'react'
import { getSocialMediaContract, handleContractError } from '../utils'

export interface UsePostMessageProps {
  content: string
  onSuccess?: (txHash: string) => void
  onError?: (error: string) => void
}

export interface UsePostMessageReturn {
  writePost: () => void
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  error: string | null
  txHash: string | undefined
  reset: () => void
}

export function usePostMessage({ 
  content, 
  onSuccess, 
  onError 
}: UsePostMessageProps): UsePostMessageReturn {
  const { address } = useAccount()
  const [error, setError] = useState<string | null>(null)
  
  const contract = getSocialMediaContract()

  const { data: simulateData, error: simulateError } = useSimulateContract({
    ...contract,
    functionName: 'createPost',
    args: [content],
    query: {
      enabled: !!content && !!address,
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
        const errorMessage = handleContractError(err, 'createPost')
        setError(errorMessage)
        onError?.(errorMessage)
      },
    },
  })

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  })

  const writePost = () => {
    if (!content.trim()) {
      setError('Post content cannot be empty')
      return
    }

    if (!address) {
      setError('Please connect your wallet')
      return
    }

    if (simulateError) {
      const errorMessage = handleContractError(simulateError, 'createPost')
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
    writePost,
    isPending,
    isConfirming,
    isConfirmed,
    error,
    txHash,
    reset,
  }
}