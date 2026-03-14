import { sql } from "@vercel/postgres";
import { ensureWorksTable } from "./db";

export type WorkRecord = {
  id: string;
  slug: string;
  title: string;
  body: string;
  category: string | null;
  keywords: string | null;
  cover_url: string | null;
  excerpt: string | null;
  tags: string | null;
  status: string;
  published_at: string | null;
  client_name: string | null;
  industry: string | null;
  duration: string | null;
  service: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  testimonial: string | null;
  metrics: string | null;
  created_at: string;
  updated_at: string;
};

export async function getPublishedWorks(limit = 50) {
  await ensureWorksTable();
  const result = await sql<WorkRecord>`
    SELECT * FROM works
    WHERE status = 'published'
    ORDER BY published_at DESC NULLS LAST
    LIMIT ${limit};
  `;
  return result.rows;
}

export async function getWorkBySlug(slug: string) {
  await ensureWorksTable();
  const result = await sql<WorkRecord>`
    SELECT * FROM works
    WHERE slug = ${slug}
    LIMIT 1;
  `;
  return result.rows[0] || null;
}

export async function updateWork(
  id: string,
  data: {
    title: string;
    body: string;
    category: string | null;
    keywords: string | null;
    coverUrl: string | null;
    excerpt: string | null;
    tags: string | null;
    status: string;
    publishedAt: string | null;
    slug: string;
    clientName: string | null;
    industry: string | null;
    duration: string | null;
    service: string | null;
    challenge: string | null;
    solution: string | null;
    results: string | null;
    testimonial: string | null;
    metrics: string | null;
  }
) {
  await ensureWorksTable();
  await sql`
    UPDATE works
    SET
      title = ${data.title},
      body = ${data.body},
      category = ${data.category},
      keywords = ${data.keywords},
      cover_url = ${data.coverUrl},
      excerpt = ${data.excerpt},
      tags = ${data.tags},
      status = ${data.status},
      published_at = ${data.publishedAt},
      slug = ${data.slug},
      client_name = ${data.clientName},
      industry = ${data.industry},
      duration = ${data.duration},
      service = ${data.service},
      challenge = ${data.challenge},
      solution = ${data.solution},
      results = ${data.results},
      testimonial = ${data.testimonial},
      metrics = ${data.metrics},
      updated_at = now()
    WHERE id = ${id};
  `;
}

export async function deleteWork(id: string) {
  await ensureWorksTable();
  await sql`DELETE FROM works WHERE id = ${id}`;
}
