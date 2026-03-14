import { randomUUID } from "crypto";

export function slugify(input: string) {
  const base = input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/\-+/g, "-")
    .replace(/^-+|-+$/g, "");

  const fallback = base.length > 0 ? base : "post";
  const suffix = randomUUID().slice(0, 6);

  return `${fallback}-${suffix}`;
}
