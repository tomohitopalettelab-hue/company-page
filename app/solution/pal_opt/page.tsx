import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3, ChevronRight, ClipboardList, Repeat, Share2, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Pal-Opt | Solutions | Palette Lab",
  description: "運用の重さを軽くし、改善スピードを上げる実行代行サービス。",
};

export default function PalOptPage() {
  return (
    <main className="min-h-screen bg-[#F3F4F6] text-slate-900">
      <section className="px-6 pb-20 pt-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/solution"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Solutions
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Operation</p>
              <h1 className="mt-4 text-5xl md:text-6xl font-black">Pal-Opt</h1>
              <p className="mt-4 text-lg text-slate-500 font-medium">
                日々の運用をまるごと引き受け、
                改善を止めない“実行チーム”。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#A62183] px-5 py-3 text-sm font-black text-white hover:brightness-110 transition-all"
                >
                  相談を始める <ChevronRight size={16} />
                </Link>
                <Link
                  href="/diagnosis"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-700 hover:border-[#A62183] hover:text-[#A62183] transition-all"
                >
                  無料診断を試す <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-xl shadow-slate-200/60">
              <div className="flex items-center justify-between">
                <div className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Weekly Report</div>
                <TrendingUp size={18} className="text-emerald-500" />
              </div>
              <div className="mt-6 grid gap-4">
                {[
                  { label: "SNS反応", value: "+42%" },
                  { label: "検索流入", value: "+31%" },
                  { label: "MEO表示", value: "+27%" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="text-sm font-bold text-slate-500">{item.label}</span>
                    <span className="text-lg font-black text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          {[
            { icon: <Share2 size={18} />, title: "SNS運用", desc: "企画・投稿・改善まで週次で運用。" },
            { icon: <BarChart3 size={18} />, title: "SEO/MEO", desc: "検索とローカル導線を同時に強化。" },
            { icon: <ClipboardList size={18} />, title: "レポーティング", desc: "数値で判断できる状態に整備。" },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white bg-white/80 p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A62183]/10 text-[#A62183]">
                {item.icon}
              </div>
              <h3 className="mt-4 text-xl font-black">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] border border-slate-200 bg-white p-10">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Flow</p>
          <h2 className="mt-4 text-3xl font-black">改善サイクル</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { step: "01", label: "現状把握" },
              { step: "02", label: "企画立案" },
              { step: "03", label: "運用実行" },
              { step: "04", label: "改善提案" },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-slate-50 p-5 text-center">
                <div className="text-sm font-black text-slate-400">{item.step}</div>
                <div className="mt-2 text-sm font-bold text-slate-700">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
            <Repeat size={18} className="text-[#A62183]" />
            毎月の反復で、改善が積み上がる設計。
          </div>
        </div>
      </section>
    </main>
  );
}
