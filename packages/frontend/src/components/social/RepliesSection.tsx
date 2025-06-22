'use client'

import React, { useState, memo } from 'react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetPostReplies, useGetSinglePost } from '@/lib/contracts'
import { MessageCard } from './MessageCard'
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'
import type { SocialMedia } from '@/lib/contracts/types'

interface RepliesSectionProps {
  parentPost: SocialMedia.PostStructOutput
  onReply?: (post: SocialMedia.PostStructOutput) => void
  onTip?: (post: SocialMedia.PostStructOutput) => void
}

const RepliesSection = memo(function RepliesSection({ 
  parentPost, 
  onReply, 
  onTip 
}: RepliesSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const {
    replyIds,
    isLoading,
    isError,
    refetch
  } = useGetPostReplies({
    postId: parentPost.id,
    enabled: isExpanded
  })

  const replyCount = Number(parentPost.replyCount)

  if (replyCount === 0) {
    return null
  }

  return (
    <div className="mt-4 space-y-3">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
      >
        <MessageCircle className="w-4 h-4" />
        <span>
          {isExpanded ? 'Hide' : 'Show'} {replyCount} {replyCount === 1 ? 'reply' : 'replies'}
        </span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </Button>

      {isExpanded && (
        <div className="ml-6 space-y-3 border-l-2 border-muted pl-4">
          {isLoading ? (
            Array.from({ length: Math.min(replyCount, 3) }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <Skeleton className="w-20 h-4" />
                </div>
                <Skeleton className="w-full h-16" />
              </div>
            ))
          ) : isError ? (
            <div className="text-sm text-muted-foreground p-3 border rounded">
              Failed to load replies. 
              <Button 
                variant="link" 
                size="sm" 
                onClick={() => refetch()}
                className="ml-1 p-0 h-auto"
              >
                Try again
              </Button>
            </div>
          ) : replyIds && replyIds.length > 0 ? (
            replyIds.map((replyId) => (
              <ReplyRenderer
                key={replyId.toString()}
                replyId={replyId}
                onReply={onReply}
                onTip={onTip}
              />
            ))
          ) : (
            <div className="text-sm text-muted-foreground p-3 border rounded">
              No replies found
            </div>
          )}
        </div>
      )}
    </div>
  )
})

interface ReplyRendererProps {
  replyId: bigint
  onReply?: (post: SocialMedia.PostStructOutput) => void
  onTip?: (post: SocialMedia.PostStructOutput) => void
}

const ReplyRenderer = memo(function ReplyRenderer({ replyId, onReply, onTip }: ReplyRendererProps) {
  const {
    post,
    isLoading,
    isError,
    refetch
  } = useGetSinglePost({
    postId: replyId,
    enabled: !!replyId
  })

  if (isLoading) {
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="w-20 h-4" />
        </div>
        <Skeleton className="w-full h-16" />
      </div>
    )
  }

  if (isError || !post) {
    return (
      <div className="text-sm text-muted-foreground p-3 border rounded border-destructive/20">
        Failed to load reply #{replyId.toString()}
        <Button 
          variant="link" 
          size="sm" 
          onClick={() => refetch()}
          className="ml-1 p-0 h-auto"
        >
          Try again
        </Button>
      </div>
    )
  }

  return (
    <MessageCard
      post={post}
      onReply={onReply}
      onTip={onTip}
      onPostUpdate={refetch}
      showReplies={false} // Don't show nested replies for now
      showRepliesSection={false} // Don't show nested reply sections
      className="border-none shadow-none bg-muted/30"
    />
  )
})

export { RepliesSection }