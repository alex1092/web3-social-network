'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'
import { useUserProfile } from '@/lib/contracts'
import { useAccount } from 'wagmi'
import { toast } from 'sonner'
import { User, Users, MessageSquare, UserPlus, UserMinus, Edit, CheckCircle, AlertCircle } from 'lucide-react'
import type { Address } from 'viem'

interface UserProfileProps {
  address?: Address
  username?: string
  showEditProfile?: boolean
  className?: string
}

export function UserProfile({ 
  address, 
  username, 
  showEditProfile = false,
  className 
}: UserProfileProps) {
  const { address: connectedAddress, isConnected } = useAccount()
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const [newUsername, setNewUsername] = useState('')
  const [newBio, setNewBio] = useState('')

  const {
    user,
    isLoading,
    isError,
    error,
    refetch,
    registerUser,
    followUser,
    unfollowUser,
    isFollowing,
    isPending,
    isConfirming,
    isConfirmed,
    txHash,
    actionError,
    reset
  } = useUserProfile({ address, username })

  const isOwnProfile = connectedAddress && user && connectedAddress.toLowerCase() === user.userAddress.toLowerCase()
  const isUserFollowing = user && connectedAddress ? isFollowing(user.userAddress as Address) : false

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const handleRegister = () => {
    if (!newUsername.trim()) {
      toast.error('Username is required')
      return
    }
    if (newUsername.length > 32) {
      toast.error('Username must be 32 characters or less')
      return
    }
    
    registerUser(newUsername.trim(), newBio.trim())
  }

  const handleFollow = () => {
    if (!user) return
    if (isUserFollowing) {
      unfollowUser(user.userAddress as Address)
    } else {
      followUser(user.userAddress as Address)
    }
  }

  const handleRegistrationSuccess = () => {
    if (isConfirmed) {
      toast.success('Profile registered successfully!')
      setIsRegistrationOpen(false)
      setNewUsername('')
      setNewBio('')
      reset()
    }
  }

  // Auto-close registration dialog on success
  if (isConfirmed && isRegistrationOpen) {
    setTimeout(handleRegistrationSuccess, 1000)
  }

  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Skeleton className="w-16 h-16 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="w-32 h-4" />
              <Skeleton className="w-24 h-3" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-3/4 h-3" />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isError || !user) {
    // Show registration form for connected user if no profile exists
    if (isConnected && connectedAddress && (address === connectedAddress || !address)) {
      return (
        <Card className={className}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Create Your Profile</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertCircle className="w-4 h-4" />
              <AlertDescription>
                You need to register to start using the social platform.
              </AlertDescription>
            </Alert>

            <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
              <DialogTrigger asChild>
                <Button className="w-full">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register Profile
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Register Your Profile</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Username</label>
                    <Input
                      placeholder="Enter your username"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                      maxLength={32}
                      disabled={isPending || isConfirming}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {newUsername.length}/32 characters
                    </p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Bio (Optional)</label>
                    <Textarea
                      placeholder="Tell us about yourself..."
                      value={newBio}
                      onChange={(e) => setNewBio(e.target.value)}
                      disabled={isPending || isConfirming}
                      className="min-h-[80px]"
                    />
                  </div>

                  {actionError && (
                    <Alert variant="destructive">
                      <AlertCircle className="w-4 h-4" />
                      <AlertDescription>{actionError}</AlertDescription>
                    </Alert>
                  )}

                  {txHash && (
                    <Alert>
                      <CheckCircle className="w-4 h-4" />
                      <AlertDescription>
                        Registration submitted! Transaction: {txHash.slice(0, 10)}...
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsRegistrationOpen(false)}
                      className="flex-1"
                      disabled={isPending || isConfirming}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleRegister}
                      disabled={!newUsername.trim() || isPending || isConfirming}
                      className="flex-1"
                    >
                      {isPending ? 'Registering...' : isConfirming ? 'Confirming...' : 'Register'}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      )
    }

    // Show error for other cases
    return (
      <Card className={className}>
        <CardContent className="flex flex-col items-center justify-center py-8">
          <AlertCircle className="w-8 h-8 text-destructive mb-2" />
          <p className="text-sm text-muted-foreground mb-4">
            {error?.message || 'User profile not found'}
          </p>
          <Button onClick={refetch} variant="outline" size="sm">
            Try Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="text-lg">
                {user.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-bold">{user.username}</h3>
                {user.exists && (
                  <Badge variant="secondary" className="text-xs">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {formatAddress(user.userAddress)}
              </p>
            </div>
          </div>

          {!isOwnProfile && isConnected && (
            <Button
              onClick={handleFollow}
              disabled={isPending || isConfirming}
              variant={isUserFollowing ? "outline" : "default"}
              size="sm"
            >
              {isPending || isConfirming ? (
                'Processing...'
              ) : isUserFollowing ? (
                <>
                  <UserMinus className="w-4 h-4 mr-1" />
                  Unfollow
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4 mr-1" />
                  Follow
                </>
              )}
            </Button>
          )}

          {isOwnProfile && showEditProfile && (
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {user.bio && (
          <div>
            <p className="text-sm leading-relaxed">{user.bio}</p>
            <Separator className="mt-4" />
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="flex items-center justify-center space-x-1">
              <MessageSquare className="w-4 h-4" />
              <span className="text-lg font-semibold">{user.postCount.toString()}</span>
            </div>
            <p className="text-xs text-muted-foreground">Posts</p>
          </div>
          
          <div>
            <div className="flex items-center justify-center space-x-1">
              <Users className="w-4 h-4" />
              <span className="text-lg font-semibold">{user.followerCount.toString()}</span>
            </div>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          
          <div>
            <div className="flex items-center justify-center space-x-1">
              <User className="w-4 h-4" />
              <span className="text-lg font-semibold">{user.followingCount.toString()}</span>
            </div>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
        </div>

        {actionError && (
          <Alert variant="destructive">
            <AlertCircle className="w-4 h-4" />
            <AlertDescription>{actionError}</AlertDescription>
          </Alert>
        )}

        {txHash && (isPending || isConfirming) && (
          <Alert>
            <CheckCircle className="w-4 h-4" />
            <AlertDescription>
              Transaction submitted: {txHash.slice(0, 10)}...{txHash.slice(-8)}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}