import type { Metadata } from "next";
import DiagnosisClient from "@/app/diagnosis/DiagnosisClient";

export const metadata: Metadata = {
  title: "Palette Business Diagnosis | Palette Lab",
  description: "8つの質問から課題と最適なサービスを診断します。",
};

export default function DiagnosisPage() {
  return <DiagnosisClient />;
}