import type { NextRequest } from "next/server";

const DEFAULT_USER = "admin";

function validateCredentials(user: string, pass: string): boolean {
  const expectedUser = process.env.ADMIN_USER || DEFAULT_USER;
  const expectedPass = process.env.ADMIN_PASSWORD || "";
  if (!expectedPass) return false;
  return user === expectedUser && pass === expectedPass;
}

export function isAuthorizedFromCookie(request: NextRequest): boolean {
  const token = request.cookies.get("admin_token")?.value;
  if (!token) return false;
  try {
    const decoded = atob(token);
    const [user, pass] = decoded.split(":");
    return validateCredentials(user, pass);
  } catch {
    return false;
  }
}

export function isAuthorizedFromBasic(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization") || "";
  const [type, encoded] = authHeader.split(" ");
  if (type !== "Basic" || !encoded) return false;
  try {
    const decoded = atob(encoded);
    const [user, pass] = decoded.split(":");
    return validateCredentials(user, pass);
  } catch {
    return false;
  }
}

export function isAuthorized(request: NextRequest): boolean {
  return isAuthorizedFromCookie(request) || isAuthorizedFromBasic(request);
}

export function makeSessionToken(user: string, pass: string): string {
  return btoa(`${user}:${pass}`);
}

export function checkCredentials(user: string, pass: string): boolean {
  return validateCredentials(user, pass);
}
