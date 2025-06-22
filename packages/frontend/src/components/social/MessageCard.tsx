'use client'

import React, { memo, useMemo } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { useLikeMessage } from '@/lib/contracts'
import { useAccount } from 'wagmi'
import { toast } from 'sonner'
import { Heart, MessageCircle, DollarSign, Clock } from 'lucide-react'
import { RepliesSection } from './RepliesSection'
import type { SocialMedia } from '@/lib/contracts/types'
import { formatAddress, formatTimestamp } from '@/lib/utils'

interface MessageCardProps {
  post: SocialMedia.PostStructOutput
  onReply?: (post: SocialMedia.PostStructOutput) => void
  onTip?: (post: SocialMedia.PostStructOutput) => void
  onPostUpdate?: () => void
  showReplies?: boolean
  showRepliesSection?: boolean
  className?: string
}

const MessageCard = memo(function MessageCard({ 
  post, 
  onReply, 
  onTip, 
  onPostUpdate,
  showReplies = true,
  showRepliesSection = true,
  className 
}: MessageCardProps) {
  const { isConnected } = useAccount()
  const {
    likePost,
    unlikePost,
    isLoading: isLikeLoading,
    isLiked,
    error: likeError
  } = useLikeMessage({
    postId: post.id,
    onSuccess: (hash) => {
      toast.success('Transaction successful!', {
        description: `Hash: ${hash.slice(0, 10)}...`
      })
    },
    onError: (error) => {
      toast.error('Failed to like post', {
        description: error
      })
    },
    onPostUpdate
  })


  const handleLike = () => {
    if (!isConnected) {
      toast.error('Please connect your wallet')
      return
    }
    
    if (isLiked) {
      unlikePost()
    } else {
      likePost()
    }
  }

  const handleReply = () => {
    if (!isConnected) {
      toast.error('Please connect your wallet')
      return
    }
    onReply?.(post)
  }


  const handleTip = () => {
    if (!isConnected) {
      toast.error('Please connect your wallet')
      return
    }
    onTip?.(post)
  }

  const formattedAddress = useMemo(() => formatAddress(post.author), [post.author])
  const formattedTimestamp = useMemo(() => formatTimestamp(Number(post.timestamp)), [post.timestamp])
  const postIdString = useMemo(() => post.id.toString(), [post.id])

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback>
                {formattedAddress.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">
                {formattedAddress}
              </p>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{formattedTimestamp}</span>
                {post.isReply && (
                  <Badge variant="secondary" className="text-xs py-0">
                    Reply
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            #{postIdString}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                disabled={isLikeLoading}
                className={`flex items-center space-x-1 ${isLiked ? 'text-red-500' : 'text-muted-foreground'} ${isLikeLoading ? 'opacity-50' : ''}`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''} ${isLikeLoading ? 'animate-pulse' : ''}`} />
                <span className="text-xs">{post.likes.toString()}</span>
              </Button>
              
              {showReplies && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleReply}
                  className="flex items-center space-x-1 text-muted-foreground"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs">{post.replyCount.toString()}</span>
                </Button>
              )}
              
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleTip}
              className="flex items-center space-x-1"
            >
              <DollarSign className="w-4 h-4" />
              <span className="text-xs">Tip</span>
            </Button>
          </div>
          
          {likeError && (
            <div className="text-xs text-destructive bg-destructive/10 p-2 rounded">
              {likeError}
            </div>
          )}

          {/* Replies Section - only show for main posts, not replies themselves */}
          {showRepliesSection && !post.isReply && (
            <RepliesSection
              parentPost={post}
              onReply={onReply}
              onTip={onTip}
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
})

export { MessageCard }