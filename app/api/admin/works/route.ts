import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sql } from "@vercel/postgres";
import { ensureWorksTable } from "@/libs/db";
import { slugify } from "@/libs/slug";

export async function GET() {
  await ensureWorksTable();
  const result = await sql`
    SELECT id, slug, title, category, keywords, cover_url, excerpt, tags, status, published_at,
           client_name, industry, duration, service, challenge, solution, results, testimonial, metrics,
           created_at, updated_at
    FROM works
    ORDER BY created_at DESC
    LIMIT 200;
  `;
  return NextResponse.json({ posts: result.rows });
}

export async function POST(request: NextRequest) {
  await ensureWorksTable();
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

  const clientName = String(body.clientName || "").trim() || null;
  const industry = String(body.industry || "").trim() || null;
  const duration = String(body.duration || "").trim() || null;
  const service = String(body.service || "").trim() || null;
  const challenge = String(body.challenge || "").trim() || null;
  const solution = String(body.solution || "").trim() || null;
  const results = String(body.results || "").trim() || null;
  const testimonial = String(body.testimonial || "").trim() || null;
  const metrics = String(body.metrics || "").trim() || null;

  if (!title || !postBody) {
    return NextResponse.json({ error: "タイトルと本文は必須です" }, { status: 400 });
  }

  const slug = body.slug ? String(body.slug).trim() : slugify(title);
  const id = crypto.randomUUID();

  await sql`
    INSERT INTO works (
      id, slug, title, body, category, keywords, cover_url, excerpt, tags, status, published_at,
      client_name, industry, duration, service, challenge, solution, results, testimonial, metrics
    )
    VALUES (
      ${id}, ${slug}, ${title}, ${postBody}, ${category}, ${keywords}, ${coverUrl}, ${excerpt}, ${tags}, ${status}, ${publishedAt},
      ${clientName}, ${industry}, ${duration}, ${service}, ${challenge}, ${solution}, ${results}, ${testimonial}, ${metrics}
    );
  `;

  return NextResponse.json({ id, slug });
}
