import * as React from "react";
import { BadgeCheck } from "lucide-react";

const UNITS = [
  { building: "BLDG 2", unit: "Unit 1", size: 1600, status: "Available" },
  { building: "BLDG 2", unit: "Unit 2", size: 1600, status: "Available" },
  { building: "BLDG 2", unit: "Unit 3", size: 1600, status: "Available" },
  { building: "BLDG 2", unit: "Unit 4", size: 1600, status: "Available" },
  { building: "BLDG 2", unit: "Unit 5", size: 1600, status: "Available" },
  { building: "BLDG 3", unit: "Unit 6", size: 1600, status: "Available" },
  { building: "BLDG 3", unit: "Unit 7", size: 1600, status: "Available" },
  { building: "BLDG 3", unit: "Unit 8", size: 1600, status: "Available" },
  { building: "BLDG 3", unit: "Unit 9", size: 1600, status: "Available" },
  { building: "BLDG 3", unit: "Unit 10", size: 1600, status: "Available" },
];

const statusBadge = (status: string) => {
  if (status === "Available") {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
        <BadgeCheck className="w-4 h-4 text-green-500" />
        {status}
      </span>
    );
  }
  // Add more status types if needed
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold">
      {status}
    </span>
  );
};

export const SitePlanTable = () => (
  <section className="w-full max-w-5xl mx-auto px-4 py-10 flex flex-col gap-6">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
      Site Plan & Unit Availability
    </h2>
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white dark:bg-muted mb-6">
      <img
        src="/21312.02 - SITE PLAN-Concept.jpg"
        alt="Site plan for Stokes Landing Phase II"
        className="w-full object-contain"
        style={{ minHeight: 200, maxHeight: 500 }}
        draggable={false}
      />
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-background rounded-xl shadow border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Building</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Unit</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Size (SF)</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Status</th>
          </tr>
        </thead>
        <tbody>
          {UNITS.map((u, i) => (
            <tr key={u.unit} className={i % 2 === 0 ? "bg-gray-50 dark:bg-muted/40" : ""}>
              <td className="px-4 py-3 font-medium">{u.building}</td>
              <td className="px-4 py-3">{u.unit}</td>
              <td className="px-4 py-3">{u.size.toLocaleString()}</td>
              <td className="px-4 py-3">{statusBadge(u.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);