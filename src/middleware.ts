import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRole } from "@/lib/types";

const roleRouteMap: Array<{ path: string; role: UserRole }> = [
  { path: "/student", role: "student" },
  { path: "/broker", role: "broker" },
  { path: "/owner", role: "owner" },
  { path: "/maintenance", role: "maintenance" },
  { path: "/security", role: "security" }
];

export default withAuth(
  (req) => {
    const pathname = req.nextUrl.pathname;

    const matchingRoute = roleRouteMap.find((entry) => pathname.startsWith(entry.path));
    if (!matchingRoute) {
      return NextResponse.next();
    }

    const tokenRole = req.nextauth.token?.role as UserRole | undefined;
    if (!tokenRole || tokenRole !== matchingRoute.role) {
      const unauthorizedUrl = new URL("/unauthorized", req.nextUrl.origin);
      unauthorizedUrl.searchParams.set("required", matchingRoute.role);
      unauthorizedUrl.searchParams.set("current", tokenRole ?? "unknown");
      return NextResponse.redirect(unauthorizedUrl);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
);

export const config = {
  matcher: ["/student/:path*", "/broker/:path*", "/owner/:path*", "/maintenance/:path*", "/security/:path*"]
};
