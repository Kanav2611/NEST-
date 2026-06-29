import Link from "next/link";

interface UnauthorizedPageProps {
  searchParams: Promise<{
    required?: string;
    current?: string;
  }>;
}

export default async function UnauthorizedPage({ searchParams }: UnauthorizedPageProps) {
  const params = await searchParams;

  return (
    <main className="container-shell py-12">
      <section className="mx-auto max-w-2xl card p-8 text-center">
        <p className="text-sm font-medium text-rose-700">Access Restricted</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">You do not have access to this portal.</h1>
        <p className="mt-3 text-sm text-slate-600">
          Required role: <span className="font-semibold text-slate-800">{params.required ?? "Unknown"}</span>
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Current role: <span className="font-semibold text-slate-800">{params.current ?? "Unknown"}</span>
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/login" className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            Switch Account
          </Link>
          <Link href="/" className="rounded-xl border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700">
            Back To Home
          </Link>
        </div>
      </section>
    </main>
  );
}
