'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Loader2, 
  ExternalLink,
  Copy,
  RefreshCw
} from 'lucide-react'
import { toast } from 'sonner'

export type TransactionState = 'idle' | 'pending' | 'confirming' | 'confirmed' | 'error'

interface TransactionStatusProps {
  state: TransactionState
  txHash?: string
  error?: string
  onRetry?: () => void
  className?: string
  showDetails?: boolean
}

export function TransactionStatus({ 
  state, 
  txHash, 
  error, 
  onRetry,
  className,
  showDetails = true
}: TransactionStatusProps) {
  const getStatusConfig = (state: TransactionState) => {
    switch (state) {
      case 'pending':
        return {
          icon: <Loader2 className="w-4 h-4 animate-spin" />,
          label: 'Pending',
          description: 'Transaction is being processed...',
          variant: 'default' as const,
          progress: 25
        }
      case 'confirming':
        return {
          icon: <Clock className="w-4 h-4" />,
          label: 'Confirming',
          description: 'Waiting for network confirmation...',
          variant: 'secondary' as const,
          progress: 75
        }
      case 'confirmed':
        return {
          icon: <CheckCircle className="w-4 h-4" />,
          label: 'Confirmed',
          description: 'Transaction completed successfully!',
          variant: 'default' as const,
          progress: 100
        }
      case 'error':
        return {
          icon: <AlertCircle className="w-4 h-4" />,
          label: 'Failed',
          description: error || 'Transaction failed',
          variant: 'destructive' as const,
          progress: 0
        }
      default:
        return null
    }
  }

  const handleCopyHash = () => {
    if (txHash) {
      navigator.clipboard.writeText(txHash)
      toast.success('Transaction hash copied!')
    }
  }

  const handleViewOnExplorer = () => {
    if (txHash) {
      // Arbitrum Sepolia Explorer (you can change this based on your network)
      const explorerUrl = `https://sepolia.arbiscan.io/tx/${txHash}`
      window.open(explorerUrl, '_blank')
    }
  }

  const config = getStatusConfig(state)
  
  if (!config || state === 'idle') {
    return null
  }

  return (
    <div className={className}>
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-2">
        <Badge variant={config.variant} className="flex items-center gap-1">
          {config.icon}
          {config.label}
        </Badge>
        
        {showDetails && txHash && (
          <div className="flex items-center gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyHash}
                    className="h-6 w-6 p-0"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy transaction hash</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleViewOnExplorer}
                    className="h-6 w-6 p-0"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View on block explorer</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {state !== 'error' && state !== 'confirmed' && (
        <Progress value={config.progress} className="mb-2 h-1" />
      )}

      {/* Alert for detailed status */}
      <Alert variant={state === 'error' ? 'destructive' : 'default'}>
        <AlertDescription className="text-sm">
          {config.description}
          
          {showDetails && txHash && (
            <div className="mt-2 p-2 bg-muted rounded text-xs font-mono break-all">
              {txHash.slice(0, 10)}...{txHash.slice(-8)}
            </div>
          )}
          
          {state === 'error' && onRetry && (
            <Button
              variant="outline"
              size="sm"
              onClick={onRetry}
              className="mt-2 h-7"
            >
              <RefreshCw className="w-3 h-3 mr-1" />
              Try Again
            </Button>
          )}
        </AlertDescription>
      </Alert>
    </div>
  )
}

// Simplified version for inline use
interface InlineTransactionStatusProps {
  state: TransactionState
  txHash?: string
  className?: string
}

export function InlineTransactionStatus({ 
  state, 
  txHash, 
  className 
}: InlineTransactionStatusProps) {
  const config = getStatusConfig(state)
  
  if (!config || state === 'idle') {
    return null
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Badge variant={config.variant} className="flex items-center gap-1">
        {config.icon}
        {config.label}
      </Badge>
      
      {txHash && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(txHash)
                  toast.success('Transaction hash copied!')
                }}
                className="h-6 w-6 p-0"
              >
                <Copy className="w-3 h-3" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{txHash.slice(0, 10)}...{txHash.slice(-8)}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )

  function getStatusConfig(state: TransactionState) {
    switch (state) {
      case 'pending':
        return {
          icon: <Loader2 className="w-4 h-4 animate-spin" />,
          label: 'Pending',
          variant: 'default' as const,
        }
      case 'confirming':
        return {
          icon: <Clock className="w-4 h-4" />,
          label: 'Confirming',
          variant: 'secondary' as const,
        }
      case 'confirmed':
        return {
          icon: <CheckCircle className="w-4 h-4" />,
          label: 'Confirmed',
          variant: 'default' as const,
        }
      case 'error':
        return {
          icon: <AlertCircle className="w-4 h-4" />,
          label: 'Failed',
          variant: 'destructive' as const,
        }
      default:
        return null
    }
  }
}