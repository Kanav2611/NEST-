const visits = [
  { visitor: "Rohit Mehta", student: "Aditi Sharma", time: "6:30 PM", status: "Verified" },
  { visitor: "Parcel - BlueDart", student: "Priyansh Gupta", time: "5:10 PM", status: "Delivery" },
  { visitor: "Nisha Verma", student: "Neha Khan", time: "4:20 PM", status: "Pending QR" }
];

export default function SecurityPortalPage() {
  return (
    <main className="container-shell space-y-8 py-10">
      <header>
        <p className="text-sm font-medium text-blue-700">Security Portal</p>
        <h1 className="text-3xl font-semibold text-slate-900">Gate and Visitor Verification</h1>
      </header>

      <section className="card p-5">
        <h2 className="text-lg font-semibold text-slate-900">Visitor History</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="py-2">Visitor</th>
                <th className="py-2">Student</th>
                <th className="py-2">Time</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((visit) => (
                <tr key={`${visit.visitor}-${visit.time}`} className="border-t border-slate-100">
                  <td className="py-3 font-medium text-slate-800">{visit.visitor}</td>
                  <td className="py-3 text-slate-700">{visit.student}</td>
                  <td className="py-3 text-slate-600">{visit.time}</td>
                  <td className="py-3">
                    <span className="badge bg-blue-50 text-blue-700">{visit.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Scan Visitor QR</button>
          <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">Approve Delivery</button>
          <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">Emergency Contacts</button>
        </div>
      </section>
    </main>
  );
}
