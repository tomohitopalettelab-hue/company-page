import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkCredentials, makeSessionToken } from "@/libs/auth";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = String(body.user || "").trim();
  const pass = String(body.pass || "").trim();

  if (!checkCredentials(user, pass)) {
    return NextResponse.json({ error: "IDまたはパスワードが違います" }, { status: 401 });
  }

  const token = makeSessionToken(user, pass);

  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7日
  });
  return res;
}
