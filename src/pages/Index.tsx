import { Hero } from "@/components/Hero";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { LocationMap } from "@/components/LocationMap";
import { Gallery } from "@/components/Gallery";

const Index = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-background flex flex-col">
      <Hero />
      <LocationMap />
      <Gallery />
      {/* Further sections (availability, plans, etc.) will go here */}
      <div className="flex-1" />
      <MadeWithDyad />
    </main>
  );
};

export default Index;