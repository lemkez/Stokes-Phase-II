import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const FAQSection = () => (
  <section className="w-full max-w-3xl mx-auto px-4 py-10">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
      Frequently Asked Questions
    </h2>
    <Accordion type="multiple" className="rounded-xl border border-gray-200 bg-white dark:bg-muted shadow-lg">
      <AccordionItem value="q1">
        <AccordionTrigger className="text-base font-semibold">What is the minimum divisible unit size?</AccordionTrigger>
        <AccordionContent>
          Units are available in approximately 1,300 SF increments, allowing flexibility for small to mid-size users.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger className="text-base font-semibold">Is the property for sale or lease?</AccordionTrigger>
        <AccordionContent>
          Both sale and lease options are available. Please contact us for current pricing and availability.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q3">
        <AccordionTrigger className="text-base font-semibold">When will the property be delivered?</AccordionTrigger>
        <AccordionContent>
          The project is scheduled for delivery in mid-2026, with pre-leasing and pre-sale opportunities available now.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q4">
        <AccordionTrigger className="text-base font-semibold">What types of businesses are ideal for this property?</AccordionTrigger>
        <AccordionContent>
          The property is ideal for local service contractors, light industrial users, warehouse/distribution, owner-users, and small businesses.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q5">
        <AccordionTrigger className="text-base font-semibold">Is the property fully entitled and zoned?</AccordionTrigger>
        <AccordionContent>
          Yes, the site is fully entitled for industrial and flex uses under St. Johns County Industrial Warehouse (IW) zoning.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q6">
        <AccordionTrigger className="text-base font-semibold">What amenities are included?</AccordionTrigger>
        <AccordionContent>
          Features include front-loaded bays, roll-up doors, ample parking, fire sprinklers, and HVAC. Units are delivered in shell condition and can be customized.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q7">
        <AccordionTrigger className="text-base font-semibold">How do I request more information or schedule a tour?</AccordionTrigger>
        <AccordionContent>
          Use the "Request Plans & Pricing" button above or call the listed phone number to connect with our team.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
);