import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("@dashboard:token")?.value;
  let isValidToken = false;

  const protectedRoutes = ["/dashboard", "/orders"];

  if (token) {
    if (pathname === "/login" && isValidToken) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    try {
      const response = await fetch(
        "http://localhost:3333/api/auth/verify-token",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        }
      );

      if (response.ok) {
        isValidToken = true;
        if (isValidToken && pathname === "/login")
          return NextResponse.redirect(new URL("/dashboard", request.url));
      } else {
        throw new Error("Token inválido");
      }
    } catch (error) {}
  }

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token || !isValidToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (pathname === "/login" && token && isValidToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
