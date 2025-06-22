'use client'

import React, { useState, useEffect, memo, useMemo, useCallback } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { useReplyMessage } from '@/lib/contracts'
import { useAccount } from 'wagmi'
import { toast } from 'sonner'
import { MessageCircle, Send, Clock } from 'lucide-react'
import type { SocialMedia } from '@/lib/contracts/types'
import { formatAddress, formatTimestamp } from '@/lib/utils'

interface ReplyDialogProps {
  post: SocialMedia.PostStructOutput | null
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onReplyCreated?: (txHash: string) => void
}

const ReplyDialog = memo(function ReplyDialog({ 
  post, 
  isOpen, 
  onOpenChange, 
  onReplyCreated 
}: ReplyDialogProps) {
  const { isConnected } = useAccount()
  const [content, setContent] = useState('')
  const [charCount, setCharCount] = useState(0)
  const maxChars = 280

  const {
    writeReply,
    isPending,
    isConfirming,
    isConfirmed,
    error,
    reset
  } = useReplyMessage({
    parentId: post?.id || BigInt(0),
    content,
    onSuccess: (txHash) => {
      toast.success('Reply created successfully!', {
        description: `Hash: ${txHash.slice(0, 10)}...`
      })
      setContent('')
      onReplyCreated?.(txHash)
      onOpenChange(false)
    },
    onError: (error) => {
      toast.error('Failed to create reply', {
        description: error
      })
    }
  })

  useEffect(() => {
    setCharCount(content.length)
  }, [content])

  useEffect(() => {
    if (isConfirmed) {
      reset()
    }
  }, [isConfirmed, reset])


  const formattedAddress = useMemo(() => 
    post ? formatAddress(post.author) : '', 
    [post]
  )
  
  const formattedTimestamp = useMemo(() => 
    post ? formatTimestamp(Number(post.timestamp)) : '', 
    [post]
  )
  
  const handleSubmitCallback = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isConnected) {
      toast.error('Please connect your wallet')
      return
    }

    if (!content.trim()) {
      toast.error('Reply content cannot be empty')
      return
    }

    if (content.length > maxChars) {
      toast.error(`Reply must be ${maxChars} characters or less`)
      return
    }

    writeReply()
  }, [isConnected, content, maxChars, writeReply])

  if (!post) return null

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5" />
            <span>Reply to Post</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Original Post */}
          <div className="border rounded-lg p-4 bg-muted/30">
            <div className="flex items-start justify-between mb-3">
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
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                #{post.id.toString()}
              </Badge>
            </div>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
          </div>

          <Separator />

          {/* Reply Form */}
          <form onSubmit={handleSubmitCallback} className="space-y-4">
            <div className="space-y-2">
              <Textarea
                placeholder="Write your reply..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength={maxChars}
                rows={4}
                className="resize-none"
              />
              <div className="flex justify-between items-center">
                <div className="text-xs text-muted-foreground">
                  Replying to #{post.id.toString()}
                </div>
                <div className={`text-xs ${charCount > maxChars * 0.9 ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {charCount}/{maxChars}
                </div>
              </div>
            </div>

            {error && (
              <div className="text-xs text-destructive bg-destructive/10 p-3 rounded">
                {error}
              </div>
            )}

            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isPending || isConfirming}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!content.trim() || charCount > maxChars || isPending || isConfirming}
                className="flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isPending ? 'Submitting...' : isConfirming ? 'Confirming...' : 'Reply'}
                </span>
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
})

export { ReplyDialog }