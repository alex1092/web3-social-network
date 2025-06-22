'use client'

import { useState, memo, useMemo, useCallback } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useSendTransaction, useWaitForTransactionReceipt, useAccount } from 'wagmi'
import { parseEther } from 'viem'
import { toast } from 'sonner'
import { DollarSign, Send, Wallet } from 'lucide-react'
import type { SocialMedia } from '@/lib/contracts/types'
import { formatAddress } from '@/lib/utils'

interface TippingModalProps {
  post: SocialMedia.PostStructOutput | null
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const SUGGESTED_AMOUNTS = [
  { label: '0.001 ETH', value: '0.001' },
  { label: '0.005 ETH', value: '0.005' },
  { label: '0.01 ETH', value: '0.01' },
  { label: '0.05 ETH', value: '0.05' },
]

const TippingModal = memo(function TippingModal({ post, isOpen, onOpenChange }: TippingModalProps) {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const { isConnected } = useAccount()
  
  const {
    sendTransaction,
    data: txHash,
    isPending,
    reset: resetSend,
  } = useSendTransaction({
    mutation: {
      onSuccess: (hash) => {
        toast.success('Tip sent successfully!', {
          description: `Transaction hash: ${hash.slice(0, 10)}...`
        })
        handleClose()
      },
      onError: (error) => {
        toast.error('Failed to send tip', {
          description: error.message
        })
      },
    },
  })

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  })

  const handleClose = () => {
    setAmount('')
    setCustomAmount('')
    resetSend()
    onOpenChange(false)
  }

  const handleAmountSelect = (selectedAmount: string) => {
    setAmount(selectedAmount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setAmount(value)
  }


  const formattedAddress = useMemo(() => 
    post ? formatAddress(post.author) : '', 
    [post]
  )
  
  const buttonText = useMemo(() => {
    if (isPending) return 'Sending Tip...'
    if (isConfirming) return 'Confirming...'
    if (isConfirmed) return 'Tip Sent!'
    return 'Send Tip'
  }, [isPending, isConfirming, isConfirmed])
  
  const isButtonDisabled = useMemo(() => {
    return !amount || parseFloat(amount) <= 0 || isPending || isConfirming || !isConnected
  }, [amount, isPending, isConfirming, isConnected])
  
  const handleSendTipCallback = useCallback(async () => {
    if (!post || !isConnected) {
      toast.error('Please connect your wallet')
      return
    }

    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount')
      return
    }

    try {
      const value = parseEther(amount)
      
      sendTransaction({
        to: post.author as `0x${string}`,
        value,
      })
    } catch {
      toast.error('Invalid amount entered')
    }
  }, [post, isConnected, amount, sendTransaction])


  if (!post) return null

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5" />
            <span>Send Tip</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Post Author Info */}
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>
                    {formattedAddress.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Tipping Author</p>
                  <p className="text-sm text-muted-foreground">
                    {formattedAddress}
                  </p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-muted rounded-md">
                <p className="text-sm line-clamp-2">{post.content}</p>
              </div>
            </CardContent>
          </Card>

          {/* Amount Selection */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Select Amount
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SUGGESTED_AMOUNTS.map((suggestion) => (
                  <Button
                    key={suggestion.value}
                    variant={amount === suggestion.value ? 'default' : 'outline'}
                    onClick={() => handleAmountSelect(suggestion.value)}
                    className="w-full"
                  >
                    {suggestion.label}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Or Enter Custom Amount (ETH)
              </label>
              <Input
                type="number"
                step="0.001"
                min="0"
                placeholder="0.001"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Amount Summary */}
          {amount && parseFloat(amount) > 0 && (
            <Card>
              <CardContent className="pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Tip Amount:</span>
                  <Badge variant="secondary" className="text-sm">
                    {amount} ETH
                  </Badge>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-muted-foreground">
                    Network fees apply
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Arbitrum
                  </span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Wallet Status */}
          <div className="flex items-center justify-between p-3 bg-muted rounded-md">
            <div className="flex items-center space-x-2">
              <Wallet className="w-4 h-4" />
              <span className="text-sm">
                {isConnected ? 'Wallet Connected' : 'Wallet Not Connected'}
              </span>
            </div>
            <Badge variant={isConnected ? 'default' : 'destructive'}>
              {isConnected ? 'Ready' : 'Connect Wallet'}
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1"
              disabled={isPending || isConfirming}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSendTipCallback}
              disabled={isButtonDisabled}
              className="flex-1"
            >
              <Send className="w-4 h-4 mr-2" />
              {buttonText}
            </Button>
          </div>

          {/* Transaction Status */}
          {txHash && (
            <Card>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Transaction:</span>
                    <Badge variant="secondary" className="text-xs">
                      {isConfirming ? 'Confirming' : isConfirmed ? 'Confirmed' : 'Sent'}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">
                    {txHash.slice(0, 10)}...{txHash.slice(-8)}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
})

export { TippingModal }