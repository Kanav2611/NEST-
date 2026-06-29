import { PropertyCard } from "@/components/property-card";
import { StatCard } from "@/components/stat-card";
import { TicketTable } from "@/components/ticket-table";
import { properties, tickets } from "@/lib/mock-data";

const billingRows = [
  { label: "Monthly Rent", value: "Rs 8,200" },
  { label: "Electricity", value: "Rs 740" },
  { label: "Water", value: "Rs 250" },
  { label: "Maintenance", value: "Rs 350" },
  { label: "Outstanding", value: "Rs 0" }
];

export default function StudentPortalPage() {
  return (
    <main className="container-shell space-y-8 py-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-blue-700">Student Portal</p>
          <h1 className="text-3xl font-semibold text-slate-900">Welcome back, Aditi</h1>
          <p className="text-sm text-slate-600">Track bookings, billing, maintenance, notices, and visitor passes in one place.</p>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-4">
        <StatCard label="Booking Status" value="Confirmed" trend="Move-in on 12 July" />
        <StatCard label="Open Tickets" value="2" trend="1 in progress" />
        <StatCard label="Current Due" value="Rs 0" trend="Last paid 3 days ago" />
        <StatCard label="Visitor Passes" value="3" trend="1 active" />
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Recommended Properties</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {properties.slice(0, 2).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        <article className="card p-5">
          <h2 className="text-lg font-semibold text-slate-900">Billing Snapshot</h2>
          <ul className="mt-3 space-y-3">
            {billingRows.map((row) => (
              <li key={row.label} className="flex items-center justify-between text-sm">
                <span className="text-slate-600">{row.label}</span>
                <span className="font-semibold text-slate-900">{row.value}</span>
              </li>
            ))}
          </ul>
          <button className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Download Receipts</button>
        </article>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Resident Management Tickets</h2>
        <TicketTable tickets={tickets} />
      </section>
    </main>
  );
}
