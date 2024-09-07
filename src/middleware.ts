import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./lib/actions/session";

export async function middleware(request: NextRequest) {
  const session = await getSession();

  // if (request.nextUrl.pathname === "/") {
  //   if (!session.email)
  //     return NextResponse.redirect(new URL("/auth", request.url));
  // }

  // if (request.nextUrl.pathname !== "/") {
  //   if (!!session.email) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // }
}
