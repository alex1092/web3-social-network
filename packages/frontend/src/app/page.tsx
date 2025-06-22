import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { MainFeed } from "@/components/layout/main-feed";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Sidebar />
          <MainFeed />
        </div>
      </main>
    </div>
  );
}
