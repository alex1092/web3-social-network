import { useReadContract, useBlockNumber } from 'wagmi'
import { getSocialMediaContract } from '../utils'
import type { SocialMedia } from '../types'

export interface UseGetMessagesProps {
  postIds?: bigint[]
  enabled?: boolean
}

export interface UseGetMessagesReturn {
  posts: SocialMedia.PostStructOutput[]
  isLoading: boolean
  isError: boolean
  error: Error | null
  refetch: () => void
  totalPosts: bigint | undefined
}

export function useGetMessages({ 
  postIds, 
  enabled = true 
}: UseGetMessagesProps = {}): UseGetMessagesReturn {
  const contract = getSocialMediaContract()

  const { data: blockNumber } = useBlockNumber({ watch: true })

  const { 
    data: totalPosts, 
    isLoading: isLoadingTotal,
    error: totalError,
    refetch: refetchTotal
  } = useReadContract({
    ...contract,
    functionName: 'totalPosts',
    query: {
      enabled,
    },
  })

  const defaultPostIds = totalPosts ? 
    Array.from({ length: Number(totalPosts) }, (_, i) => BigInt(i + 1)) : []

  const postIdsToFetch = postIds || defaultPostIds

  const { 
    data: posts = [], 
    isLoading: isLoadingPosts,
    isError,
    error,
    refetch: refetchPosts 
  } = useReadContract({
    ...contract,
    functionName: 'getPost',
    args: postIdsToFetch.length > 0 ? [postIdsToFetch[0]] : [BigInt(0)],
    query: {
      enabled: enabled && postIdsToFetch.length > 0,
      select: (data) => {
        return [data] as SocialMedia.PostStructOutput[]
      },
    },
  })

  const isLoading = isLoadingTotal || isLoadingPosts

  const refetch = () => {
    refetchTotal()
    refetchPosts()
  }

  return {
    posts,
    isLoading,
    isError,
    error: error || totalError,
    refetch,
    totalPosts,
  }
}

export interface UseGetSinglePostProps {
  postId: bigint
  enabled?: boolean
}

export interface UseGetSinglePostReturn {
  post: SocialMedia.PostStructOutput | undefined
  isLoading: boolean
  isError: boolean
  error: Error | null
  refetch: () => void
}

export function useGetSinglePost({ 
  postId, 
  enabled = true 
}: UseGetSinglePostProps): UseGetSinglePostReturn {
  const contract = getSocialMediaContract()

  const { data: blockNumber } = useBlockNumber({ watch: true })

  const { 
    data: post, 
    isLoading,
    isError,
    error,
    refetch 
  } = useReadContract({
    ...contract,
    functionName: 'getPost',
    args: [postId],
    query: {
      enabled: enabled && !!postId,
    },
  })

  return {
    post: post as SocialMedia.PostStructOutput | undefined,
    isLoading,
    isError,
    error,
    refetch,
  }
}

export interface UseGetPostRepliesProps {
  postId: bigint
  enabled?: boolean
}

export interface UseGetPostRepliesReturn {
  replyIds: readonly bigint[]
  replies: SocialMedia.PostStructOutput[]
  isLoading: boolean
  isError: boolean
  error: Error | null
  refetch: () => void
}

export function useGetPostReplies({ 
  postId, 
  enabled = true 
}: UseGetPostRepliesProps): UseGetPostRepliesReturn {
  const contract = getSocialMediaContract()

  const { 
    data: replyIds = [], 
    isLoading: isLoadingIds,
    isError: isErrorIds,
    error: errorIds,
    refetch: refetchIds 
  } = useReadContract({
    ...contract,
    functionName: 'getPostReplies',
    args: [postId],
    query: {
      enabled: enabled && !!postId,
    },
  })

  const replies: SocialMedia.PostStructOutput[] = []
  const isLoading = isLoadingIds
  const isError = isErrorIds

  const refetch = () => {
    refetchIds()
  }

  return {
    replyIds,
    replies,
    isLoading,
    isError,
    error: errorIds,
    refetch,
  }
}