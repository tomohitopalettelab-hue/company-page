import type { Metadata } from "next";
import PalTrustClient from "./PalTrustClient";

export const metadata: Metadata = {
  title: "Pal-Trust 導入提案資料 | Palette Lab",
  description: "Pal-Trustの導入提案資料。口コミ対策とAI活用で信頼を資産に変える。",
};

export default function PalTrustPage() {
  return <PalTrustClient />;
}