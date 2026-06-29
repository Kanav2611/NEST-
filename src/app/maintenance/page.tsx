import { tickets } from "@/lib/mock-data";

export default function MaintenancePortalPage() {
  return (
    <main className="container-shell space-y-8 py-10">
      <header>
        <p className="text-sm font-medium text-blue-700">Maintenance Staff Portal</p>
        <h1 className="text-3xl font-semibold text-slate-900">Assigned Work Dashboard</h1>
        <p className="text-sm text-slate-600">View priority tasks, upload before/after photos, and mark tasks complete.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {tickets.map((ticket) => (
          <article key={ticket.id} className="card p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">{ticket.id}</h2>
              <span className="badge bg-amber-50 text-amber-700">{ticket.priority}</span>
            </div>
            <p className="mt-2 text-sm text-slate-700">{ticket.title}</p>
            <ul className="mt-4 space-y-1 text-sm text-slate-600">
              <li>Category: {ticket.category}</li>
              <li>Student: {ticket.studentName}</li>
              <li>Room: {ticket.roomNumber}</li>
              <li>Due: {new Date(ticket.slaDueAt).toLocaleString()}</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm">Accept Task</button>
              <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm">Upload Before Photo</button>
              <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm">Upload After Photo</button>
              <button className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white">Mark Complete</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
