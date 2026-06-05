import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const isProtectedRoute = (req: NextRequest) =>
  req.nextUrl.pathname.startsWith("/dashboard");

export async function proxy(req: NextRequest) {
  if (isProtectedRoute(req)) {
    const session = getSessionCookie(req);

    if (!session) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};