import Link from "next/link";
import { PropertyCard } from "@/components/property-card";
import { StatCard } from "@/components/stat-card";
import { properties } from "@/lib/mock-data";

const faqs = [
  {
    q: "Is Nest only for student PG discovery?",
    a: "No. Nest is a complete ERP that handles listings, booking operations, maintenance, billing, security, and analytics."
  },
  {
    q: "Can students track complaints and billing in one place?",
    a: "Yes. Every ticket, status change, charge, payment, and receipt is visible in the student portal."
  },
  {
    q: "Does Nest support role-based workflows?",
    a: "Yes. Students, brokers, owners, maintenance teams, security teams, and managers have dedicated dashboards."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="container-shell grid gap-8 py-16 md:grid-cols-[1.2fr_1fr] md:py-20">
        <div className="space-y-6">
          <p className="badge bg-blue-50 text-blue-700">Student Housing ERP Platform</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Nest centralizes student accommodation operations from search to move-out.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Replace notebooks, spreadsheets, and message threads with one reliable operating system for student housing.
          </p>

          <div className="card grid gap-4 p-4 md:grid-cols-[1fr_auto]">
            <input
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-200 transition focus:ring"
              defaultValue="I need a girls PG under ₹8000 near Gate 3 with food"
              aria-label="Smart search"
            />
            <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white">Smart Search</button>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/student" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
              Explore Student Portal
            </Link>
            <Link href="/broker" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">
              Open Broker Dashboard
            </Link>
          </div>
        </div>

        <div className="card grid gap-4 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Live Operating Metrics</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <StatCard label="Occupancy" value="86%" trend="+4.8% this month" />
            <StatCard label="Open Tickets" value="24" trend="11 under SLA" />
            <StatCard label="Collections" value="Rs 48.2L" trend="92% on-time" />
            <StatCard label="Visit Conversion" value="31%" trend="+6.1% QoQ" />
          </div>
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Featured Properties</h2>
          <Link href="/student" className="text-sm font-semibold text-blue-700">
            View all
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="container-shell grid gap-5 py-10 md:grid-cols-3">
        <article className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900">How It Works</h3>
          <p className="mt-3 text-sm text-slate-600">Search, hold, schedule visit, confirm booking, generate digital agreement, and move in with full traceability.</p>
        </article>
        <article className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900">Why Choose Nest</h3>
          <p className="mt-3 text-sm text-slate-600">Built for operational reliability with ticket SLAs, room lifecycle, billing workflows, and role-based visibility.</p>
        </article>
        <article className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900">Trusted Operations</h3>
          <p className="mt-3 text-sm text-slate-600">Every action from complaint assignment to payment reconciliation leaves a digital audit trail.</p>
        </article>
      </section>

      <section className="container-shell py-10">
        <h2 className="mb-6 text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {faqs.map((faq) => (
            <article key={faq.q} className="card p-5">
              <h3 className="text-base font-semibold text-slate-900">{faq.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-12 border-t border-slate-200 bg-white/75">
        <div className="container-shell flex flex-wrap items-center justify-between gap-3 py-8 text-sm text-slate-500">
          <p>Nest - Your Complete Student Housing Companion.</p>
          <p>ERP for Students, Brokers, Owners, Staff, and Managers.</p>
        </div>
      </footer>
    </main>
  );
}
