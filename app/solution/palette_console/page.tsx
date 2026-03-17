import type { Metadata } from "next";
import PaletteConsoleClient from "./PaletteConsoleClient";

export const metadata: Metadata = {
  title: "Palette Console 導入提案資料 | Palette Lab",
  description: "Palette Consoleの導入提案資料。全サービスの可視化と意思決定を支援。",
};

export default function PaletteConsolePage() {
  return <PaletteConsoleClient />;
}
