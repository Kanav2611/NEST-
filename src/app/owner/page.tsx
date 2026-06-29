import { StatCard } from "@/components/stat-card";

const ownerProperties = [
  { name: "Nest Maple Residency", occupancy: "111 / 120", pendingRent: "Rs 82,000" },
  { name: "Nest Cedar Living", occupancy: "73 / 84", pendingRent: "Rs 49,200" }
];

export default function OwnerPortalPage() {
  return (
    <main className="container-shell space-y-8 py-10">
      <header>
        <p className="text-sm font-medium text-blue-700">Owner Portal</p>
        <h1 className="text-3xl font-semibold text-slate-900">Portfolio and Earnings Overview</h1>
      </header>

      <section className="grid gap-4 md:grid-cols-4">
        <StatCard label="Listed Properties" value="2" />
        <StatCard label="Occupancy" value="89%" />
        <StatCard label="Monthly Earnings" value="Rs 15.8L" />
        <StatCard label="Maintenance Cost" value="Rs 1.4L" />
      </section>

      <section className="card p-5">
        <h2 className="text-lg font-semibold text-slate-900">Property Snapshot</h2>
        <div className="mt-4 space-y-3">
          {ownerProperties.map((property) => (
            <div key={property.name} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 p-4">
              <p className="font-medium text-slate-900">{property.name}</p>
              <p className="text-sm text-slate-600">Occupancy: {property.occupancy}</p>
              <p className="text-sm text-slate-600">Pending Rent: {property.pendingRent}</p>
              <button className="rounded-lg border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700">Download Report</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
