import type { Metadata } from "next";
import WorksClient from "./WorksClient";

export const metadata: Metadata = {
  title: "Our Works | Palette Lab",
  description: "Palette Labの実績紹介ページです。",
};

export default function WorksPage() {
  return <WorksClient />;
}
