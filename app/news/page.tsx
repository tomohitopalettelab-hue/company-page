import NewsListClient from "./NewsListClient";
import { getPublishedPosts } from "@/libs/posts";

export const dynamic = "force-dynamic";

const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, "");

export default async function NewsPage() {
  const posts = await getPublishedPosts(50);

  const newsItems = posts.map((item) => {
    const publishedAt = item.published_at || item.created_at;
    return {
      id: item.slug,
      date: new Date(publishedAt).toLocaleDateString("ja-JP").replace(/\//g, "."),
      category: item.category || "Release",
      title: item.title,
      excerpt: item.body ? stripHtml(item.body).substring(0, 100) + "..." : "本文はありません。",
    };
  });

  return <NewsListClient newsItems={newsItems} />;
}