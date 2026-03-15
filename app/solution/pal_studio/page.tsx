import type { Metadata } from "next";
import PalStudioClient from "./PalStudioClient";

export const metadata: Metadata = {
  title: "Pal-Studio 導入提案資料 | Palette Lab",
  description: "Pal-Studioの導入提案資料。WEB集客の戦略設計から運用までを支援。",
};

export default function PalStudioPage() {
  return <PalStudioClient />;
}