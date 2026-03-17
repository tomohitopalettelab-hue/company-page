import type { Metadata } from "next";
import PalVideoClient from "./PalVideoClient";

export const metadata: Metadata = {
  title: "Pal-Video 導入提案資料 | Palette Lab",
  description: "Pal-Videoの導入提案資料。映像戦略でブランド体験を強化。",
};

export default function PalVideoPage() {
  return <PalVideoClient />;
}
