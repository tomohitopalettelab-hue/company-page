import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isAuthorized } from "./libs/auth";

export const config = {
  // /api/admin/login と /api/admin/logout は除外（認証不要）
  matcher: ["/api/admin/((?!login|logout).*)"]
};

export function middleware(request: NextRequest) {
  if (isAuthorized(request)) {
    return NextResponse.next();
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
