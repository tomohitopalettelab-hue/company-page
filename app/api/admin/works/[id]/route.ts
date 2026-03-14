import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateWork, deleteWork } from "@/libs/works";

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();

  const title = String(body.title || "").trim();
  const postBody = String(body.body || "").trim();

  if (!title || !postBody) {
    return NextResponse.json({ error: "タイトルと本文は必須です" }, { status: 400 });
  }

  await updateWork(id, {
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
    clientName: String(body.clientName || "").trim() || null,
    industry: String(body.industry || "").trim() || null,
    duration: String(body.duration || "").trim() || null,
    service: String(body.service || "").trim() || null,
    challenge: String(body.challenge || "").trim() || null,
    solution: String(body.solution || "").trim() || null,
    results: String(body.results || "").trim() || null,
    testimonial: String(body.testimonial || "").trim() || null,
    metrics: String(body.metrics || "").trim() || null,
  });

  return NextResponse.json({ success: true });
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await deleteWork(id);
  return NextResponse.json({ success: true });
}
