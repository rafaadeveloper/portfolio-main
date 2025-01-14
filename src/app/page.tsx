import { Header } from "@/components/Header";
import { Index } from "@/components/Index";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-primary flex flex-col px-8 md:px-16 py-8">
      <Header />
      <Index />
    </main>
  );
}
