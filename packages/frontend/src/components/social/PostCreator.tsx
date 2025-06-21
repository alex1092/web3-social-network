'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { usePostMessage } from '@/lib/contracts'
import { useAccount } from 'wagmi'
import { toast } from 'sonner'

interface PostCreatorProps {
  onPostCreated?: (txHash: string) => void
  className?: string
}

export function PostCreator({ onPostCreated, className }: PostCreatorProps) {
  const [content, setContent] = useState('')
  const { isConnected } = useAccount()
  
  const {
    writePost,
    isPending,
    isConfirming,
    isConfirmed,
    error,
    txHash,
    reset
  } = usePostMessage({
    content,
    onSuccess: (hash) => {
      toast.success('Post created successfully!', {
        description: `Transaction hash: ${hash.slice(0, 10)}...`
      })
      setContent('')
      onPostCreated?.(hash)
    },
    onError: (error) => {
      toast.error('Failed to create post', {
        description: error
      })
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) {
      toast.error('Please enter some content')
      return
    }
    if (content.length > 280) {
      toast.error('Post is too long (max 280 characters)')
      return
    }
    writePost()
  }

  const getButtonText = () => {
    if (isPending) return 'Creating Post...'
    if (isConfirming) return 'Confirming...'
    if (isConfirmed) return 'Post Created!'
    return 'Post'
  }

  const getStatusBadge = () => {
    if (isPending) return <Badge variant="secondary">Pending</Badge>
    if (isConfirming) return <Badge variant="secondary">Confirming</Badge>
    if (isConfirmed) return <Badge variant="default">Confirmed</Badge>
    if (error) return <Badge variant="destructive">Error</Badge>
    return null
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Create Post
          {getStatusBadge()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={280}
              className="min-h-[100px] resize-none"
              disabled={isPending || isConfirming}
            />
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{content.length}/280 characters</span>
              {content.length > 250 && (
                <Badge variant={content.length > 280 ? 'destructive' : 'secondary'}>
                  {280 - content.length} remaining
                </Badge>
              )}
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20">
              <p className="text-sm text-destructive">{error}</p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={reset}
                className="mt-2"
              >
                Try Again
              </Button>
            </div>
          )}

          {txHash && isConfirmed && (
            <div className="p-3 rounded-md bg-green-50 border border-green-200">
              <p className="text-sm text-green-800">
                Post created successfully! 
                <br />
                <span className="font-mono text-xs">
                  Transaction: {txHash.slice(0, 10)}...{txHash.slice(-8)}
                </span>
              </p>
            </div>
          )}

          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              {!isConnected ? (
                <Badge variant="outline">Wallet not connected</Badge>
              ) : (
                <span>Ready to post</span>
              )}
            </div>
            <Button
              type="submit"
              disabled={
                !isConnected || 
                !content.trim() || 
                content.length > 280 || 
                isPending || 
                isConfirming
              }
              className="min-w-[100px]"
            >
              {getButtonText()}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}