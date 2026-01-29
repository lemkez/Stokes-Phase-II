import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { RequestPlansDialog } from "./RequestPlansDialog";

const PROJECT = {
  name: "Parkway Medical Plaza",
  assetType: "Medical Office / Retail",
  useCases: ["Medical", "Healthcare", "Retail Service"],
  delivery: "Q1 2025",
  entitlement: "Zoned, Permits Issued",
  metrics: [
    { label: "Total SF", value: "32,000" },
    { label: "Unit Sizes", value: "2,000–8,000 SF" },
    { label: "Parking", value: "5/1,000 SF" },
  ],
  phone: "(555) 123-4567",
  cta: "Request Plans & Pricing",
  heroImage: "/placeholder.svg", // Replace with actual rendering
};

export const Hero = () => (
  <section className="relative bg-white dark:bg-background min-h-[70vh] flex flex-col justify-end pt-8 pb-4 px-4 md:px-8">
    {/* Persistent phone number (mobile sticky) */}
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:static md:justify-end md:mb-2">
      <a
        href={`tel:${PROJECT.phone.replace(/[^0-9]/g, "")}`}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg font-semibold text-base hover:bg-primary/90 transition"
        style={{ minWidth: 180 }}
      >
        <Phone className="w-4 h-4" />
        <span>{PROJECT.phone}</span>
      </a>
    </div>
    {/* Main content */}
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-6 z-10">
      <img
        src={PROJECT.heroImage}
        alt="Exterior rendering of Parkway Medical Plaza"
        className="w-full h-48 object-cover rounded-xl shadow-lg border border-gray-200 mb-2"
        draggable={false}
      />
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {PROJECT.assetType}: <span className="text-primary">{PROJECT.name}</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-2 text-gray-700 dark:text-gray-200 text-base font-medium mb-2">
          {PROJECT.useCases.map((uc) => (
            <span key={uc} className="bg-secondary px-3 py-1 rounded-full">{uc}</span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span>
            <strong>Delivery:</strong> {PROJECT.delivery}
          </span>
          <span>
            <strong>Entitlement:</strong> {PROJECT.entitlement}
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {PROJECT.metrics.map((m) => (
            <div key={m.label} className="bg-muted px-4 py-2 rounded-lg text-gray-800 dark:text-gray-100">
              <span className="block text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{m.label}</span>
              <span className="font-semibold text-lg">{m.value}</span>
            </div>
          ))}
        </div>
        <RequestPlansDialog triggerClassName="block w-full">
          <Button
            size="lg"
            className="rounded-full px-8 py-3 text-base font-semibold shadow-md w-full"
          >
            {PROJECT.cta}
          </Button>
        </RequestPlansDialog>
      </div>
    </div>
  </section>
);