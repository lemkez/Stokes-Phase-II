import { Hero } from "@/components/Hero";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { LocationMap } from "@/components/LocationMap";
import { Gallery } from "@/components/Gallery";
import { ProjectSummary } from "@/components/ProjectSummary";
import { SitePlanTable } from "@/components/SitePlanTable";
import { FAQSection } from "@/components/FAQSection";

const VIDEO_URL = "https://www.youtube.com/embed/QwTnCt7DZdo";

const Index = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-background flex flex-col">
      <Hero />
      <LocationMap />
      <SitePlanTable />
      {/* Embedded Project Video */}
      <section className="w-full max-w-3xl mx-auto px-4 py-8 flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center flex items-center gap-2">
          <span role="img" aria-label="Video">🎬</span>
          Project Video
        </h2>
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-black">
          <iframe
            src={VIDEO_URL}
            title="Stokes Landing Phase II Project Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>
      <Gallery />
      <ProjectSummary />
      <FAQSection />
      <div className="flex-1" />
      <MadeWithDyad />
    </main>
  );
};

export default Index;