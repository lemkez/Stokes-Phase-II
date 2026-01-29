import { BadgeCheck, Layers, CheckCircle, Users, Truck, CalendarCheck } from "lucide-react";

export const ProjectSummary = () => (
  <section className="w-full max-w-4xl mx-auto px-4 py-10 flex flex-col gap-8">
    {/* Building & Unit Details */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
        <Layers className="w-5 h-5 text-primary" />
        Building & Unit Details
      </h3>
      <ul className="text-gray-700 dark:text-gray-200 space-y-1 pl-2">
        <li><strong>Total Available SF:</strong> ~1,300 SF up to ~16,000 SF</li>
        <li><strong>Units:</strong> 12 total units</li>
        <li><strong>Divisibility:</strong> Units available in approximately 1,300 SF increments</li>
        <li><strong>Configuration:</strong> Front-loaded flex/warehouse bays with roll-up doors and parking</li>
        <li><strong>Delivery:</strong> Shell condition (customizable based on user needs)</li>
      </ul>
    </div>

    {/* Zoning & Entitlements */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
        <BadgeCheck className="w-5 h-5 text-primary" />
        Zoning & Entitlements
      </h3>
      <ul className="text-gray-700 dark:text-gray-200 space-y-1 pl-2">
        <li><strong>Zoning:</strong> Industrial Warehouse (IW), St. Johns County</li>
        <li>Fully entitled for industrial and flex uses</li>
        <li>No rezoning or land use risk</li>
      </ul>
    </div>

    {/* Availability */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-primary" />
        Availability
      </h3>
      <ul className="text-gray-700 dark:text-gray-200 space-y-1 pl-2">
        <li><strong>For Sale or Lease</strong></li>
        <li><strong>Asking pricing:</strong> Call for Pricing</li>
        <li>Availability and configuration subject to pre-leasing or pre-sale activity</li>
      </ul>
    </div>

    {/* Market Positioning */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
        <Users className="w-5 h-5 text-primary" />
        Market Positioning
      </h3>
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
    </div>

    {/* Access & Connectivity */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
        <Truck className="w-5 h-5 text-primary" />
        Access & Connectivity
      </h3>
      <ul className="text-gray-700 dark:text-gray-200 space-y-1 pl-2">
        <li>Direct frontage on US-1 North</li>
        <li>Approximately 8 minutes to Downtown St. Augustine</li>
        <li>Approximately 15 minutes to Jacksonville</li>
        <li>Proximity to major retail anchors and service nodes (Publix, Dunkin’, Circle K, Gate, etc.)</li>
      </ul>
    </div>

    {/* Development Status & Risk Profile */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
        <CalendarCheck className="w-5 h-5 text-primary" />
        Development Status & Risk Profile
      </h3>
      <ul className="text-gray-700 dark:text-gray-200 space-y-1 pl-2">
        <li>Phase II follows a completed and sold Phase I, reducing execution risk</li>
        <li>New construction eliminates deferred maintenance concerns</li>
        <li>Clear delivery timeline with defined milestones</li>
      </ul>
    </div>
  </section>
);