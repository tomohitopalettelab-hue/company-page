import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sql } from "@vercel/postgres";
import { ensurePostsTable } from "@/libs/db";
import { slugify } from "@/libs/slug";

export async function GET() {
  await ensurePostsTable();
  const result = await sql`
    SELECT id, slug, title, category, keywords, cover_url, excerpt, tags, status, published_at, created_at, updated_at
    FROM posts
    ORDER BY created_at DESC
    LIMIT 200;
  `;
  return NextResponse.json({ posts: result.rows });
}

export async function POST(request: NextRequest) {
  await ensurePostsTable();
  const body = await request.json();

  const title = String(body.title || "").trim();
  const postBody = String(body.body || "").trim();
  const category = String(body.category || "").trim() || null;
  const keywords = String(body.keywords || "").trim() || null;
  const coverUrl = String(body.coverUrl || "").trim() || null;
  const excerpt = String(body.excerpt || "").trim() || null;
  const tags = body.tags ? JSON.stringify(body.tags) : null;
  const status = body.status === "published" ? "published" : "draft";
  const publishedAt = body.publishedAt
    ? new Date(body.publishedAt).toISOString()
    : status === "published"
    ? new Date().toISOString()
    : null;

  if (!title || !postBody) {
    return NextResponse.json({ error: "タイトルと本文は必須です" }, { status: 400 });
  }

  const slug = body.slug ? String(body.slug).trim() : slugify(title);
  const id = crypto.randomUUID();

  await sql`
    INSERT INTO posts (id, slug, title, body, category, keywords, cover_url, excerpt, tags, status, published_at)
    VALUES (${id}, ${slug}, ${title}, ${postBody}, ${category}, ${keywords}, ${coverUrl}, ${excerpt}, ${tags}, ${status}, ${publishedAt});
  `;

  return NextResponse.json({ id, slug });
}
