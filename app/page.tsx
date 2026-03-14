import PaletteLabClient from "./PaletteLabClient";
import { getPublishedPosts } from "@/libs/posts";
import { getPublishedWorks } from "@/libs/works";

export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    const posts = await getPublishedPosts(1);
    const workPosts = await getPublishedWorks(6);
    const latest = posts[0];

    const latestNews = latest
      ? {
          date: new Date(latest.published_at || latest.created_at)
            .toLocaleDateString("ja-JP")
            .replace(/\//g, "."),
          title: latest.title,
        }
      : {
          date: "2026.02.25",
          title: "ニュースがありません",
        };

    const works = workPosts.map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      category: item.service || item.category || "実績紹介",
      coverUrl: item.cover_url || "",
      publishedAt: item.published_at || item.created_at,
    }));

    return <PaletteLabClient latestNews={latestNews} works={works} />;
  } catch (error) {
    console.error("Data fetch error:", error);
    return (
      <PaletteLabClient
        latestNews={{ date: "---", title: "お知らせを取得できませんでした" }}
        works={[]}
      />
    );
  }
}