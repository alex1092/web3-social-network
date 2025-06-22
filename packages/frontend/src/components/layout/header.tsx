"use client";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Web3 Social</h1>
          <appkit-button />
        </div>
      </div>
    </header>
  );
}