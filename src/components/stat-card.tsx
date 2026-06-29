interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
}

export function StatCard({ label, value, trend }: StatCardProps) {
  return (
    <article className="card p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-slate-900">{value}</p>
      {trend ? <p className="mt-2 text-sm text-emerald-600">{trend}</p> : null}
    </article>
  );
}
