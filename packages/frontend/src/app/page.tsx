"use client";

import { useState } from "react";
import {
  PostCreator,
  MessageFeed,
  TippingModal,
  UserProfile,
} from "@/components/social";
import { Separator } from "@/components/ui/separator";
import { useAccount } from "wagmi";
import type { SocialMedia } from "@/lib/contracts/types";

export default function Home() {
  const { isConnected } = useAccount();
  const [selectedPostForTip, setSelectedPostForTip] =
    useState<SocialMedia.PostStructOutput | null>(null);
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);

  const handlePostCreated = (txHash: string) => {
    // Refresh feed when new post is created
    console.log("Post created:", txHash);
  };

  const handleReply = (postId: bigint) => {
    // Handle reply functionality
    console.log("Reply to post:", postId);
  };

  const handleTip = (post: SocialMedia.PostStructOutput) => {
    setSelectedPostForTip(post);
    setIsTipModalOpen(true);
  };

  // const handleShare = (post: Post) => {
  //   // Handle share functionality
  //   console.log('Share post:', post)
  // }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Web3 Social</h1>
            <appkit-button />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - User Profile */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {isConnected && (
                <UserProfile showEditProfile={false} className="w-full" />
              )}

              {!isConnected && (
                <div className="p-6 text-center border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    Welcome to Web3 Social
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect your wallet to start posting and interacting with
                    the community.
                  </p>
                  <appkit-button />
                </div>
              )}
            </div>
          </div>

          {/* Center - Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Post Creator */}
            {isConnected && (
              <>
                <PostCreator
                  onPostCreated={handlePostCreated}
                  className="w-full"
                />
                <Separator />
              </>
            )}

            {/* Message Feed */}
            <MessageFeed
              onReply={handleReply}
              onTip={handleTip}
              className="w-full"
              maxPosts={20}
            />
          </div>
        </div>
      </main>

      {/* Tipping Modal */}
      <TippingModal
        post={selectedPostForTip}
        isOpen={isTipModalOpen}
        onOpenChange={setIsTipModalOpen}
      />
    </div>
  );
}
