import type { Metadata } from "next";
import PalAdClient from "./PalAdClient";

export const metadata: Metadata = {
  title: "Pal-Ad 導入提案資料 | Palette Lab",
  description: "Pal-Adの導入提案資料。広告運用を直感的かつ透明に最適化。",
};

export default function PalAdPage() {
  return <PalAdClient />;
}
