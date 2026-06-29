import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

const links = [
  { href: "/student", label: "Student" },
  { href: "/broker", label: "Broker" },
  { href: "/owner", label: "Owner" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/security", label: "Security" }
];

export async function TopNav() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="container-shell flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-bold text-white">Nest</span>
          <span className="text-sm font-medium text-slate-600">Your Complete Student Housing Companion.</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
              {link.label}
            </Link>
          ))}

          {session?.user ? (
            <>
              <span className="badge bg-emerald-50 text-emerald-700">{session.user.role}</span>
              <Link href="/api/auth/signout?callbackUrl=/" className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700">
                Sign out
              </Link>
            </>
          ) : (
            <Link href="/login" className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white">
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
