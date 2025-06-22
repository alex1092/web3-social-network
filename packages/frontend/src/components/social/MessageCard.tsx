'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { useLikeMessage } from '@/lib/contracts'
import { useAccount } from 'wagmi'
import { toast } from 'sonner'
import { Heart, MessageCircle, Share, DollarSign, Clock } from 'lucide-react'
import type { SocialMedia } from '@/lib/contracts/types'

interface MessageCardProps {
  post: SocialMedia.PostStructOutput
  onReply?: (postId: bigint) => void
  // onShare?: (post: Post) => void
  onTip?: (post: SocialMedia.PostStructOutput) => void
  onPostUpdate?: () => void
  showReplies?: boolean
  className?: string
}

export function MessageCard({ 
  post, 
  onReply, 
  // onShare, 
  onTip, 
  onPostUpdate,
  showReplies = true,
  className 
}: MessageCardProps) {
  const { isConnected } = useAccount()
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)
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
    onReply?.(post.id)
  }

  const handleShare = () => {
    setIsShareDialogOpen(true)
  }

  const handleCopyLink = () => {
    const url = `${window.location.origin}/post/${post.id}`
    navigator.clipboard.writeText(url)
    toast.success('Link copied to clipboard!')
    setIsShareDialogOpen(false)
  }

  const handleTip = () => {
    if (!isConnected) {
      toast.error('Please connect your wallet')
      return
    }
    onTip?.(post)
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const formatTimestamp = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) * 1000)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) return `${diffInSeconds}s`
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`
    return `${Math.floor(diffInSeconds / 86400)}d`
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback>
                {formatAddress(post.author).slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">
                {formatAddress(post.author)}
              </p>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{formatTimestamp(post.timestamp)}</span>
                {post.isReply && (
                  <Badge variant="secondary" className="text-xs py-0">
                    Reply
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            #{post.id.toString()}
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
              
              <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    className="flex items-center space-x-1 text-muted-foreground"
                  >
                    <Share className="w-4 h-4" />
                    <span className="text-xs">Share</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Share Post</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Button onClick={handleCopyLink} className="w-full">
                      Copy Link
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
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
        </div>
      </CardContent>
    </Card>
  )
}