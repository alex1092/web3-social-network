"use client";

import { UserProfile } from "@/components/social";
import { useAccount } from "wagmi";

export function Sidebar() {
  const { isConnected } = useAccount();

  return (
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
  );
}