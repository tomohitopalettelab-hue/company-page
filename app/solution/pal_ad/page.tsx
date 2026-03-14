import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Flame, Megaphone, Target, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Pal-Ad | Solutions | Palette Lab",
  description: "最短で成果へ近づける広告運用とクリエイティブ最適化。",
};

export default function PalAdPage() {
  return (
    <main className="min-h-screen bg-[#FFF7ED] text-slate-900">
      <section className="relative overflow-hidden px-6 pb-20 pt-24">
        <div className="absolute inset-0">
          <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#F39800]/30 blur-[120px]" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#F9C11C]/40 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/solution"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Solutions
          </Link>

          <div className="mt-10 rounded-[40px] border border-orange-100 bg-white/90 p-10 shadow-xl shadow-orange-100">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">Performance</p>
                <h1 className="mt-4 text-5xl md:text-6xl font-black">Pal-Ad</h1>
                <p className="mt-3 text-lg text-slate-500 font-medium">
                  反応が見える広告運用で、
                  意味のある投資に変える。
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F39800] px-6 py-3 text-sm font-black text-white hover:brightness-110 transition-all"
                >
                  相談を始める <ChevronRight size={16} />
                </Link>
                <Link
                  href="/diagnosis"
                  className="inline-flex items-center gap-2 rounded-full border border-orange-200 px-6 py-3 text-sm font-black text-orange-500 hover:border-orange-400 transition-all"
                >
                  無料診断を試す <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { icon: <Target size={18} />, title: "狙い撃ち設計", desc: "ターゲットと訴求を明確化。" },
                { icon: <Megaphone size={18} />, title: "訴求クリエイティブ", desc: "広告とLPを同時最適化。" },
                { icon: <TrendingUp size={18} />, title: "成果改善", desc: "CPA/ROASを日次で監視。" },
              ].map((item) => (
                <div key={item.title} className="rounded-[24px] border border-orange-100 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-lg shadow-orange-100">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">Budget</p>
            <h2 className="mt-4 text-3xl font-black">配分設計</h2>
            <div className="mt-6 space-y-3">
              {[
                { label: "検索広告", value: "35%" },
                { label: "SNS広告", value: "40%" },
                { label: "リターゲティング", value: "25%" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl bg-orange-50 px-4 py-3 text-sm font-bold">
                  <span>{item.label}</span>
                  <span className="text-orange-500">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-orange-100 bg-white p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">Optimization Loop</p>
            <h2 className="mt-4 text-3xl font-black">改善ループ</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["計測", "分析", "改善", "実行"].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <Flame size={18} className="text-orange-500" />
              短期成果と中期最適化を同時に追います。
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}