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

export async function ensureWorksTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS works (
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
      client_name text,
      industry text,
      duration text,
      service text,
      challenge text,
      solution text,
      results text,
      testimonial text,
      metrics text,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    );
  `;

  await sql`ALTER TABLE works ADD COLUMN IF NOT EXISTS excerpt text`;
  await sql`ALTER TABLE works ADD COLUMN IF NOT EXISTS tags text`;
  await sql`ALTER TABLE works ADD COLUMN IF NOT EXISTS client_name text`;
  await sql`ALTER TABLE works ADD COLUMN IF NOT EXISTS industry text`;
  await sql`ALTER TABLE works ADD COLUMN IF NOT EXISTS duration text`;
  await sql`ALTER TABLE works ADD COLUMN IF NOT EXISTS service text`;
  await sql`ALTER TABLE works ADD COLUMN IF NOT EXISTS challenge text`;
  await sql`ALTER TABLE works ADD COLUMN IF NOT EXISTS solution text`;
  await sql`ALTER TABLE works ADD COLUMN IF NOT EXISTS results text`;
  await sql`ALTER TABLE works ADD COLUMN IF NOT EXISTS testimonial text`;
  await sql`ALTER TABLE works ADD COLUMN IF NOT EXISTS metrics text`;

  await sql`
    CREATE INDEX IF NOT EXISTS works_published_at_idx ON works (published_at DESC);
  `;
}
