import { sql } from "@vercel/postgres";
import { ensurePostsTable } from "./db";

export type PostRecord = {
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
  created_at: string;
  updated_at: string;
};

export async function getPublishedPosts(limit = 50) {
  await ensurePostsTable();
  const result = await sql<PostRecord>`
    SELECT * FROM posts
    WHERE status = 'published'
    ORDER BY published_at DESC NULLS LAST
    LIMIT ${limit};
  `;
  return result.rows;
}

export async function getPostBySlug(slug: string) {
  await ensurePostsTable();
  const result = await sql<PostRecord>`
    SELECT * FROM posts
    WHERE slug = ${slug}
    LIMIT 1;
  `;
  return result.rows[0] || null;
}

export async function updatePost(
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
  }
) {
  await ensurePostsTable();
  await sql`
    UPDATE posts
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
      updated_at = now()
    WHERE id = ${id};
  `;
}

export async function deletePost(id: string) {
  await ensurePostsTable();
  await sql`DELETE FROM posts WHERE id = ${id}`;
}
