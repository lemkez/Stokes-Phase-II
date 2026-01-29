import { MapPin } from "lucide-react";

const ADDRESS = "26 Spanish St., St. Augustine, FL";
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.010073289889!2d-81.3129646848806!3d29.89505798192206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e69b8b2e2c7e2d%3A0x6e2e2e2e2e2e2e2e!2s26%20Spanish%20St%2C%20St.%20Augustine%2C%20FL%2032084!5e0!3m2!1sen!2sus!4v1718040000000!5m2!1sen!2sus";

export const LocationMap = () => (
  <section className="w-full max-w-3xl mx-auto px-4 py-8 flex flex-col gap-4">
    <div className="flex items-center gap-2 mb-2">
      <MapPin className="text-primary w-5 h-5" />
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Location & Context
      </h2>
    </div>
    <div className="text-gray-700 dark:text-gray-200 text-base mb-2">
      <span className="font-medium">{ADDRESS}</span>
    </div>
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg aspect-video min-h-[240px] bg-gray-100">
      <iframe
        title="Site Location Map"
        src={GOOGLE_MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 320 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-64 sm:h-80"
      />
    </div>
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white dark:bg-muted mt-4">
      <img
        src="/Stokes Landing Extended.jpg"
        alt="Satellite map context"
        className="w-full object-cover"
        style={{ minHeight: 200, maxHeight: 400 }}
        draggable={false}
      />
    </div>
  </section>
);