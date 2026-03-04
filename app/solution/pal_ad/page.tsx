import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Pal-Ad | Solutions | Palette Lab",
  description: "広告配信（即効性のある集客の加速）を担うサービス。",
};

export default function PalAdPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-4xl rounded-[36px] border border-slate-100 bg-white p-8 md:p-12 shadow-sm">
        <Link href="/solution" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-8">
          <ArrowLeft size={16} /> 一覧へ戻る
        </Link>
        <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3">Operation</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Pal-Ad</h1>
        <p className="text-sm md:text-base font-bold text-blue-500 mb-6">広告配信（即効性のある集客の加速）</p>
        <p className="text-slate-600 leading-relaxed mb-10">短期成果を狙う広告運用サービスです。媒体選定から配信最適化、クリエイティブ改善まで一気通貫で対応します。</p>
        <h2 className="text-lg font-black text-slate-900 mb-4">サービス内容</h2>
        <ul className="space-y-3">
          <li className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">広告戦略設計と媒体選定</li>
          <li className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">配信とクリエイティブの同時最適化</li>
          <li className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">費用対効果を重視した改善運用</li>
        </ul>
      </div>
    </main>
  );
}