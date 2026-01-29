import { Hero } from "@/components/Hero";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-background flex flex-col">
      <Hero />
      {/* Further sections (availability, plans, location, etc.) will go here */}
      <div className="flex-1" />
      <MadeWithDyad />
    </main>
  );
};

export default Index;