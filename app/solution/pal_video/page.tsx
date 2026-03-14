import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Film, PlayCircle, Sparkles, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Pal-Video | Solutions | Palette Lab",
  description: "映像でブランドの心臓を動かす、クリエイティブ動画制作サービス。",
};

export default function PalVideoPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white">
      <section className="relative overflow-hidden px-6 pb-24 pt-24">
        <div className="absolute inset-0">
          <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#E95464]/30 blur-[120px]" />
          <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#38BDF8]/20 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/solution"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Back to Solutions
          </Link>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black tracking-[0.3em] uppercase text-white/70">
                <Sparkles size={14} /> Creative Video
              </div>
              <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight">
                Pal-Video
              </h1>
              <p className="mt-4 text-xl text-white/70 font-medium">
                伝わるではなく、刺さる。
                <br className="hidden md:block" />
                体験設計から逆算する映像制作。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-900 hover:bg-[#E95464] hover:text-white transition-colors"
                >
                  映像の相談をする <ChevronRight size={18} />
                </Link>
                <Link
                  href="/diagnosis"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white hover:border-white transition-colors"
                >
                  無料診断を試す <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E95464] text-white">
                      <PlayCircle size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-black">ブランドシネマ</p>
                      <p className="text-xs text-white/60">30-90 sec</p>
                    </div>
                  </div>
                  <div className="text-xs font-black text-white/50">Now Rendering</div>
                </div>
                <div className="mt-6 space-y-3">
                  {["脚本設計", "撮影", "編集", "配信最適化"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                      <span className="text-sm font-bold text-white/80">{item}</span>
                      <span className="text-xs font-black text-white/40">OK</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#E95464]/40 blur-[60px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { title: "短尺で記憶に残す", desc: "SNSでスキップされない視線設計。" },
              { title: "ブランドの温度を映す", desc: "言語化しづらい魅力を映像化。" },
              { title: "成果につながる構成", desc: "CV導線まで想定した設計。" },
            ].map((item) => (
              <div key={item.title} className="rounded-[28px] border border-slate-100 bg-slate-50 p-8">
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-slate-100 bg-white p-10 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Deliverables</p>
              <h3 className="mt-4 text-3xl font-black">映像ラインナップ</h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["ブランドムービー", "採用動画", "SNS縦型", "店舗紹介", "サービス説明", "広告用動画"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold">
                    <Film size={16} className="text-[#E95464]" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] bg-[#0F172A] p-10 text-white">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-white/50">Workflow</p>
              <h3 className="mt-4 text-3xl font-black">制作フロー</h3>
              <div className="mt-6 space-y-4">
                {[
                  { step: "01", label: "ヒアリング" },
                  { step: "02", label: "シナリオ設計" },
                  { step: "03", label: "撮影・編集" },
                  { step: "04", label: "配信最適化" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4 rounded-2xl bg-white/5 px-4 py-3">
                    <span className="text-sm font-black text-white/70">{item.step}</span>
                    <span className="text-sm font-bold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 p-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E95464]">
            <Video size={24} />
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-black">映像で、次の一歩を加速する</h2>
          <p className="mt-4 text-sm text-white/70">
            伝えたい価値を、最短で視聴者の心に届ける設計からご一緒します。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-900 hover:bg-[#E95464] hover:text-white transition-colors"
            >
              相談してみる <ChevronRight size={18} />
            </Link>
            <Link
              href="/diagnosis"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white hover:border-white transition-colors"
            >
              無料診断を試す <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
