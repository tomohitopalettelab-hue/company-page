import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { query } = await request.json();
  if (!query?.trim()) return NextResponse.json({ images: [] });

  const apiKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!apiKey) {
    const images = Array.from({ length: 8 }, (_, i) => ({
      id: `mock-${i}`,
      url: `https://loremflickr.com/1280/720/${encodeURIComponent(query)}?lock=${i}`,
      thumb: `https://loremflickr.com/400/225/${encodeURIComponent(query)}?lock=${i}`,
      alt: `${query} image`,
      photographer: "LoremFlickr",
    }));
    return NextResponse.json({ images, isMock: true });
  }

  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=12&orientation=landscape`,
      { headers: { Authorization: `Client-ID ${apiKey}` } }
    );
    const data = await res.json();
    const images = (data.results ?? []).map((img: Record<string, unknown>) => ({
      id: img.id,
      url: (img.urls as Record<string, string>).regular,
      thumb: (img.urls as Record<string, string>).small,
      alt: img.alt_description || "Unsplash Image",
      photographer: (img.user as Record<string, string>).name,
    }));
    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [], error: "検索に失敗しました" }, { status: 500 });
  }
}
