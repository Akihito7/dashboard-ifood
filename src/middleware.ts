import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if(!token && request.nextUrl.pathname.startsWith("/account")){
    return NextResponse.redirect(new URL("/login", request.url))
  }
  if(token && request.nextUrl.pathname.startsWith("/login")){
    return NextResponse.redirect(new URL("/account", request.url))
  }
  return NextResponse.next()
}
export const config = {
  matcher : ["/account/:path*", "/login/:path*"]
}