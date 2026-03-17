import type { Metadata } from "next";
import PalOptClient from "./PalOptClient";

export const metadata: Metadata = {
  title: "Pal-Opt 導入提案資料 | Palette Lab",
  description: "Pal-Optの導入提案資料。運用最適化をAIと自動化で支援。",
};

export default function PalOptPage() {
  return <PalOptClient />;
}
