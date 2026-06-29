import { StatCard } from "@/components/stat-card";
import { TicketTable } from "@/components/ticket-table";
import { leads, properties, tickets } from "@/lib/mock-data";

export default function BrokerPortalPage() {
  return (
    <main className="container-shell space-y-8 py-10">
      <header>
        <p className="text-sm font-medium text-blue-700">Broker ERP Dashboard</p>
        <h1 className="text-3xl font-semibold text-slate-900">Operations Control Center</h1>
        <p className="text-sm text-slate-600">Manage properties, bookings, lead pipeline, agreements, revenue, and staff performance.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-5">
        <StatCard label="Properties" value={String(properties.length)} />
        <StatCard label="Total Rooms" value="354" />
        <StatCard label="Occupied" value="294" trend="83% occupancy" />
        <StatCard label="Monthly Revenue" value="Rs 48.2L" />
        <StatCard label="Outstanding" value="Rs 3.7L" trend="Needs follow-up" />
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card p-5">
          <h2 className="text-lg font-semibold text-slate-900">Lead Pipeline</h2>
          <div className="mt-4 space-y-3">
            {leads.map((lead) => (
              <div key={lead.id} className="rounded-xl border border-slate-100 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-900">{lead.studentName}</p>
                  <span className="badge bg-emerald-50 text-emerald-700">{lead.stage}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{lead.query}</p>
                <p className="mt-1 text-xs text-slate-500">Source: {lead.source}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card p-5">
          <h2 className="text-lg font-semibold text-slate-900">Module Access</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            <li>Property Management</li>
            <li>Student Management</li>
            <li>Owner Management</li>
            <li>Booking Management</li>
            <li>Room Management</li>
            <li>Revenue Analytics</li>
            <li>Visit Scheduler</li>
            <li>Digital Agreements</li>
            <li>Staff Management</li>
            <li>RMS Management</li>
            <li>Payment Tracking</li>
            <li>Reports</li>
          </ul>
        </article>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-slate-900">SLA and Complaint Monitoring</h2>
        <TicketTable tickets={tickets} />
      </section>
    </main>
  );
}
