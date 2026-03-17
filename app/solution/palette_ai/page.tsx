import type { Metadata } from "next";
import PaletteAiClient from "./PaletteAiClient";

export const metadata: Metadata = {
  title: "Palette AI 導入提案資料 | Palette Lab",
  description: "Palette AIの導入提案資料。全サービスの知能を統合するAI基盤。",
};

export default function PaletteAiPage() {
  return <PaletteAiClient />;
}
