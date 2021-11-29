import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  console.log("\n inside middleware");
  const isLoggedIn = false;
  if (isLoggedIn) {
    console.log("Access granted\n ");
    NextResponse.next();
  } else {
    console.log("User not logged in\n ");

    return NextResponse.rewrite("/login");
  }
}
