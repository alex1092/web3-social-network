"use client";

import { useState } from "react";
import {
  PostCreator,
  MessageFeed,
  TippingModal,
} from "@/components/social";
import { Separator } from "@/components/ui/separator";
import { useAccount } from "wagmi";
import type { SocialMedia } from "@/lib/contracts/types";

export function MainFeed() {
  const { isConnected } = useAccount();
  const [selectedPostForTip, setSelectedPostForTip] =
    useState<SocialMedia.PostStructOutput | null>(null);
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);

  const handlePostCreated = (txHash: string) => {
    console.log("Post created:", txHash);
  };

  const handleReply = (postId: bigint) => {
    console.log("Reply to post:", postId);
  };

  const handleTip = (post: SocialMedia.PostStructOutput) => {
    setSelectedPostForTip(post);
    setIsTipModalOpen(true);
  };

  return (
    <>
      <div className="lg:col-span-2 space-y-6">
        {isConnected && (
          <>
            <PostCreator
              onPostCreated={handlePostCreated}
              className="w-full"
            />
            <Separator />
          </>
        )}

        <MessageFeed
          onReply={handleReply}
          onTip={handleTip}
          className="w-full"
          maxPosts={20}
        />
      </div>

      <TippingModal
        post={selectedPostForTip}
        isOpen={isTipModalOpen}
        onOpenChange={setIsTipModalOpen}
      />
    </>
  );
}