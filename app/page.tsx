import PaletteLabClient from "./PaletteLabClient";
import { getPublishedPosts } from "@/libs/posts";

export default async function Home() {
  try {
    const posts = await getPublishedPosts(1);
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

    return <PaletteLabClient latestNews={latestNews} />;
  } catch (error) {
    console.error("Data fetch error:", error);
    return <PaletteLabClient latestNews={{ date: "---", title: "お知らせを取得できませんでした" }} />;
  }
}