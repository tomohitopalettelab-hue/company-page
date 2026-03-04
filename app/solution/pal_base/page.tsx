import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Pal-Base | Solutions | Palette Lab",
  description: "接客拠点（LINE・GBPによる地域集客の土台）を担うサービス。",
};

export default function PalBasePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-4xl rounded-[36px] border border-slate-100 bg-white p-8 md:p-12 shadow-sm">
        <Link href="/solution" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-8">
          <ArrowLeft size={16} /> 一覧へ戻る
        </Link>
        <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3">Marketing</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Pal-Base</h1>
        <p className="text-sm md:text-base font-bold text-blue-500 mb-6">接客拠点（LINE・GBPによる地域集客の土台）</p>
        <p className="text-slate-600 leading-relaxed mb-10">地域で選ばれる店舗づくりの土台を整えるサービスです。LINEとGBPを軸に、来店導線とリピート導線を構築します。</p>
        <h2 className="text-lg font-black text-slate-900 mb-4">サービス内容</h2>
        <ul className="space-y-3">
          <li className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">LINE公式アカウント活用設計</li>
          <li className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">GBP最適化による地域露出強化</li>
          <li className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">再来店導線の改善と運用支援</li>
        </ul>
      </div>
    </main>
  );
}
