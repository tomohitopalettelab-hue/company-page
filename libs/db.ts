import { sql } from "@vercel/postgres";

export async function ensurePostsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id uuid PRIMARY KEY,
      slug text UNIQUE NOT NULL,
      title text NOT NULL,
      body text NOT NULL,
      category text,
      keywords text,
      cover_url text,
      excerpt text,
      tags text,
      status text NOT NULL DEFAULT 'draft',
      published_at timestamptz,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    );
  `;

  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS excerpt text`;
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS tags text`;

  await sql`
    CREATE INDEX IF NOT EXISTS posts_published_at_idx ON posts (published_at DESC);
  `;
}
