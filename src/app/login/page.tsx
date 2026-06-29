"use client";

import { FormEvent, useMemo, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState("student@nest.app");
  const [password, setPassword] = useState("student123");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: false
    });

    setLoading(false);

    if (!result || result.error) {
      setError("Invalid credentials. Use one of the demo accounts below.");
      return;
    }

    router.push(result.url ?? "/");
    router.refresh();
  }

  return (
    <main className="container-shell py-12">
      <section className="mx-auto max-w-xl card p-6 md:p-8">
        <p className="text-sm font-medium text-blue-700">Nest Access</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">Sign In</h1>
        <p className="mt-2 text-sm text-slate-600">Use demo credentials to access your role dashboard.</p>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none ring-blue-500 focus:ring"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none ring-blue-500 focus:ring"
              required
            />
          </div>

          {error ? <p className="text-sm text-rose-600">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Demo Accounts</p>
          <ul className="mt-2 space-y-1">
            <li>Student: student@nest.app / student123</li>
            <li>Broker: broker@nest.app / broker123</li>
            <li>Owner: owner@nest.app / owner123</li>
            <li>Maintenance: maintenance@nest.app / maintenance123</li>
            <li>Security: security@nest.app / security123</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
