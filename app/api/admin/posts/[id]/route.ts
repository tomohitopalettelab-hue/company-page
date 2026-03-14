import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updatePost, deletePost } from "@/libs/posts";

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();

  const title = String(body.title || "").trim();
  const postBody = String(body.body || "").trim();

  if (!title || !postBody) {
    return NextResponse.json({ error: "タイトルと本文は必須です" }, { status: 400 });
  }

  await updatePost(id, {
    title,
    body: postBody,
    category: String(body.category || "").trim() || null,
    keywords: String(body.keywords || "").trim() || null,
    coverUrl: String(body.coverUrl || "").trim() || null,
    excerpt: String(body.excerpt || "").trim() || null,
    tags: body.tags ? JSON.stringify(body.tags) : null,
    status: body.status === "published" ? "published" : "draft",
    publishedAt: body.publishedAt ? new Date(body.publishedAt).toISOString() : null,
    slug: String(body.slug || "").trim(),
  });

  return NextResponse.json({ success: true });
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await deletePost(id);
  return NextResponse.json({ success: true });
}
