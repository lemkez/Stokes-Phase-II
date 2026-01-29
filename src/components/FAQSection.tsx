import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Warehouse, Layers, BadgeCheck, CheckCircle, Users, Truck, CalendarCheck, MapPin } from "lucide-react";

export const FAQSection = () => (
  <section className="w-full max-w-3xl mx-auto px-4 py-10">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
      Frequently Asked Questions
    </h2>
    <Accordion type="multiple" className="rounded-xl border border-gray-200 bg-white dark:bg-muted shadow-lg">
      <AccordionItem value="project">
        <AccordionTrigger className="text-base font-semibold flex items-center gap-2">
          <Warehouse className="w-5 h-5 text-primary" />
          What is Stokes Landing – Phase II (Building B)?
        </AccordionTrigger>
        <AccordionContent>
          <div className="mb-2 flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            <MapPin className="w-4 h-4" />
            6918 US-1, St. Augustine, Florida · Jacksonville MSA | St. Johns County
          </div>
          <div className="mb-2">
            <span className="bg-secondary px-3 py-1 rounded-full font-medium text-gray-700 dark:text-gray-200">
              New Construction Flex / Industrial Warehouse
            </span>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            High-visibility frontage along the US-1 North Corridor with approximately 40,000 cars per day.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="building">
        <AccordionTrigger className="text-base font-semibold flex items-center gap-2">
          <Layers className="w-5 h-5 text-primary" />
          What are the building & unit details?
        </AccordionTrigger>
        <AccordionContent>
          <ul className="text-gray-700 dark:text-gray-200 space-y-1 pl-2">
            <li><strong>Total Available SF:</strong> ~1,300 SF up to ~16,000 SF</li>
            <li><strong>Units:</strong> 12 total units</li>
            <li><strong>Divisibility:</strong> Units available in approximately 1,300 SF increments</li>
            <li><strong>Configuration:</strong> Front-loaded flex/warehouse bays with roll-up doors and parking</li>
            <li><strong>Delivery:</strong> Shell condition (customizable based on user needs)</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="zoning">
        <AccordionTrigger className="text-base font-semibold flex items-center gap-2">
          <BadgeCheck className="w-5 h-5 text-primary" />
          What are the zoning & entitlements?
        </AccordionTrigger>
        <AccordionContent>
          <ul className="text-gray-700 dark:text-gray-200 space-y-1 pl-2">
            <li><strong>Zoning:</strong> Industrial Warehouse (IW), St. Johns County</li>
            <li>Fully entitled for industrial and flex uses</li>
            <li>No rezoning or land use risk</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="availability">
        <AccordionTrigger className="text-base font-semibold flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          What is the availability?
        </AccordionTrigger>
        <AccordionContent>
          <ul className="text-gray-700 dark:text-gray-200 space-y-1 pl-2">
            <li><strong>For Sale or Lease</strong></li>
            <li><strong>Asking pricing:</strong> Call for Pricing</li>
            <li>Availability and configuration subject to pre-leasing or pre-sale activity</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="market">
        <AccordionTrigger className="text-base font-semibold flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          Who is the property ideal for?
        </AccordionTrigger>
        <AccordionContent>
          <ul className="text-gray-700 dark:text-gray-200 space-y-1 pl-2">
            <li>Local service contractors and trades</li>
            <li>Light industrial users</li>
            <li>Warehouse and distribution users</li>
            <li>Owner-users seeking long-term cost control</li>
            <li>Small businesses priced out of coastal or urban infill industrial product</li>
          </ul>
          <div className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Its location provides equidistant access to St. Johns and Duval Counties, making it ideal for businesses serving both markets.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="access">
        <AccordionTrigger className="text-base font-semibold flex items-center gap-2">
          <Truck className="w-5 h-5 text-primary" />
          What about access & connectivity?
        </AccordionTrigger>
        <AccordionContent>
          <ul className="text-gray-700 dark:text-gray-200 space-y-1 pl-2">
            <li>Direct frontage on US-1 North</li>
            <li>Approximately 8 minutes to Downtown St. Augustine</li>
            <li>Approximately 15 minutes to Jacksonville</li>
            <li>Proximity to major retail anchors and service nodes (Publix, Dunkin’, Circle K, Gate, etc.)</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="status">
        <AccordionTrigger className="text-base font-semibold flex items-center gap-2">
          <CalendarCheck className="w-5 h-5 text-primary" />
          What is the development status & risk profile?
        </AccordionTrigger>
        <AccordionContent>
          <ul className="text-gray-700 dark:text-gray-200 space-y-1 pl-2">
            <li>Phase II follows a completed and sold Phase I, reducing execution risk</li>
            <li>New construction eliminates deferred maintenance concerns</li>
            <li>Clear delivery timeline with defined milestones</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
);