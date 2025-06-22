'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetMessages, useGetSinglePost } from '@/lib/contracts'
import { useBlockNumber } from 'wagmi'
import { MessageCard } from './MessageCard'
import { RefreshCw, AlertCircle } from 'lucide-react'
import type { SocialMedia } from '@/lib/contracts/types'

interface MessageFeedProps {
  onReply?: (post: SocialMedia.PostStructOutput) => void
  onTip?: (post: SocialMedia.PostStructOutput) => void
  className?: string
  maxPosts?: number
}

export function MessageFeed({ 
  onReply, 
  onTip, 
  className,
  // maxPosts = 50
}: MessageFeedProps) {
  const [displayedPosts, setDisplayedPosts] = useState<bigint[]>([])
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [hasMorePosts, setHasMorePosts] = useState(true)
  
  const { data: blockNumber } = useBlockNumber({ watch: true })
  
  const {
    // posts,
    isLoading,
    isError,
    error,
    refetch: refetchMessages,
    totalPosts
  } = useGetMessages({
    enabled: true
  })

  // Generate post IDs in reverse order (newest first)
  const generatePostIds = useCallback((total: number, limit: number = 10): bigint[] => {
    if (total === 0) return []
    
    const start = Math.max(1, total - limit + 1)
    const ids: bigint[] = []
    
    for (let i = total; i >= start; i--) {
      ids.push(BigInt(i))
    }
    
    return ids
  }, [])

  // Initialize displayed posts when totalPosts is available
  useEffect(() => {
    if (totalPosts && totalPosts > 0) {
      const initialPosts = generatePostIds(Number(totalPosts), 10)
      setDisplayedPosts(initialPosts)
      setHasMorePosts(Number(totalPosts) > 10)
    }
  }, [totalPosts, generatePostIds])

  // Auto-refresh when new block is mined
  useEffect(() => {
    if (blockNumber) {
      refetchMessages()
    }
  }, [blockNumber, refetchMessages])

  const loadMorePosts = useCallback(() => {
    if (!totalPosts || isLoadingMore || !hasMorePosts) return
    
    setIsLoadingMore(true)
    
    const currentCount = displayedPosts.length
    const remainingPosts = Number(totalPosts) - currentCount
    const postsToLoad = Math.min(10, remainingPosts)
    
    if (postsToLoad > 0) {
      const oldestCurrentId = Math.min(...displayedPosts.map(id => Number(id)))
      const newPosts: bigint[] = []
      
      for (let i = oldestCurrentId - 1; i >= Math.max(1, oldestCurrentId - postsToLoad); i--) {
        newPosts.push(BigInt(i))
      }
      
      setDisplayedPosts(prev => [...prev, ...newPosts])
      setHasMorePosts(oldestCurrentId - postsToLoad > 1)
    } else {
      setHasMorePosts(false)
    }
    
    setIsLoadingMore(false)
  }, [totalPosts, isLoadingMore, hasMorePosts, displayedPosts])

  const handleRefresh = useCallback(() => {
    refetchMessages()
    if (totalPosts && totalPosts > 0) {
      const freshPosts = generatePostIds(Number(totalPosts), 10)
      setDisplayedPosts(freshPosts)
      setHasMorePosts(Number(totalPosts) > 10)
    }
  }, [refetchMessages, totalPosts, generatePostIds])

  if (isError) {
    return (
      <Card className={className}>
        <CardContent className="flex flex-col items-center justify-center py-8">
          <AlertCircle className="w-8 h-8 text-destructive mb-2" />
          <p className="text-sm text-muted-foreground mb-4">
            Failed to load posts: {error?.message}
          </p>
          <Button onClick={handleRefresh} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className={className}>
      <Card className="mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Recent Posts</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Live</span>
              </div>
              <Button 
                onClick={handleRefresh} 
                variant="ghost" 
                size="sm"
                disabled={isLoading}
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </Button>
            </div>
          </div>
          {totalPosts && (
            <p className="text-sm text-muted-foreground">
              {totalPosts.toString()} total posts
            </p>
          )}
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {isLoading && displayedPosts.length === 0 ? (
          // Initial loading skeletons
          Array.from({ length: 5 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="w-24 h-4" />
                    <Skeleton className="w-16 h-3" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-3/4 h-4" />
                  <Skeleton className="w-1/2 h-4" />
                </div>
              </CardContent>
            </Card>
          ))
        ) : displayedPosts.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <p className="text-lg font-medium mb-2">No posts yet</p>
              <p className="text-sm text-muted-foreground">
                Be the first to create a post!
              </p>
            </CardContent>
          </Card>
        ) : (
          displayedPosts.map((postId) => (
            <PostRenderer
              key={postId.toString()}
              postId={postId}
              onReply={onReply}
              onTip={onTip}
            />
          ))
        )}

        {/* Load More Button */}
        {hasMorePosts && displayedPosts.length > 0 && (
          <Card>
            <CardContent className="flex justify-center py-4">
              <Button
                onClick={loadMorePosts}
                disabled={isLoadingMore}
                variant="outline"
                className="w-full"
              >
                {isLoadingMore ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Loading more posts...
                  </>
                ) : (
                  'Load More Posts'
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Loading more indicator */}
        {isLoadingMore && (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={`loading-${i}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <div className="space-y-1">
                      <Skeleton className="w-24 h-4" />
                      <Skeleton className="w-16 h-3" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-3/4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Individual Post Renderer Component
interface PostRendererProps {
  postId: bigint
  onReply?: (post: SocialMedia.PostStructOutput) => void
  onTip?: (post: SocialMedia.PostStructOutput) => void
}

function PostRenderer({ postId, onReply, onTip }: PostRendererProps) {
  const {
    post,
    isLoading,
    isError,
    refetch
    // error
  } = useGetSinglePost({
    postId,
    enabled: !!postId
  })

  if (isLoading) {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <Skeleton className="w-8 h-8 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="w-24 h-4" />
              <Skeleton className="w-16 h-3" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-3/4 h-4" />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isError || !post) {
    return (
      <Card className="border-destructive/20">
        <CardContent className="flex items-center justify-center py-4">
          <div className="flex items-center space-x-2 text-destructive">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">Failed to load post #{postId.toString()}</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <MessageCard
      post={post}
      onReply={onReply}
      onTip={onTip}
      onPostUpdate={refetch}
    />
  )
}