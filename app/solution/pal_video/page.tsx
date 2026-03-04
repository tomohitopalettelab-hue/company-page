import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Pal-Video | Solutions | Palette Lab",
  description: "動画制作（視覚に訴えるブランド表現）を担うサービス。",
};

export default function PalVideoPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-4xl rounded-[36px] border border-slate-100 bg-white p-8 md:p-12 shadow-sm">
        <Link href="/solution" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-8">
          <ArrowLeft size={16} /> 一覧へ戻る
        </Link>
        <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3">Creative</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Pal-Video</h1>
        <p className="text-sm md:text-base font-bold text-blue-500 mb-6">動画制作（視覚に訴えるブランド表現）</p>
        <p className="text-slate-600 leading-relaxed mb-10">短尺SNS動画からPR映像まで、目的に合わせた映像制作を提供します。伝えたい価値を短時間で印象的に届けます。</p>
        <h2 className="text-lg font-black text-slate-900 mb-4">サービス内容</h2>
        <ul className="space-y-3">
          <li className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">媒体別に最適化した動画企画</li>
          <li className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">撮影・編集・運用導線まで一貫対応</li>
          <li className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">認知拡大とCV向上を両立する構成</li>
        </ul>
      </div>
    </main>
  );
}
