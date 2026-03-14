import type { Metadata } from "next";
import WorksClient from "./WorksClient";
import { getPublishedWorks } from "@/libs/works";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Our Works | Palette Lab",
  description: "Palette Labの実績紹介ページです。",
};

export default async function WorksPage() {
  const works = await getPublishedWorks(60);
  const items = works.map((work) => ({
    id: work.id,
    slug: work.slug,
    category: work.category || "white",
    service: work.service || work.category || "Works",
    title: work.title,
    desc: work.excerpt || "",
    coverUrl: work.cover_url || "",
  }));

  return <WorksClient works={items} />;
}
