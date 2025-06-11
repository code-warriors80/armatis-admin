import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Check for authentication cookie
  const isAuthenticated = req.cookies.get("admin-auth");

  // If not authenticated and trying to access a restricted page, redirect to /auth
  if (!isAuthenticated && req.nextUrl.pathname !== "/auth") {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Proceed to the next middleware or handler
  return NextResponse.next();
}

// Specify which paths to apply the middleware
export const config = {
<<<<<<< HEAD
  matcher: ["/", "/messages", "/Products", "/Services", "/Subsribers", "Team"],
=======
  matcher: ["/", "/Messasge", "/Product", "/Services"],
>>>>>>> 1e06c5b5661de31065ed82ed5f4afab356b67b6f
};
