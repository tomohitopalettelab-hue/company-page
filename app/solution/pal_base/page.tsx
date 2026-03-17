import type { Metadata } from "next";
import PalBaseClient from "./PalBaseClient";

export const metadata: Metadata = {
  title: "Pal-Base 導入提案資料 | Palette Lab",
  description: "Pal-Baseの導入提案資料。地域集客の土台と導線を構築。",
};

export default function PalBasePage() {
  return <PalBaseClient />;
}
