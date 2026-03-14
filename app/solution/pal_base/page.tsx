import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight, MapPin, MessageCircle, Star, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Pal-Base | Solutions | Palette Lab",
  description: "地域で選ばれるための拠点づくりを整えるサービス。",
};

export default function PalBasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F6FBEF] via-white to-white text-slate-900">
      <section className="relative overflow-hidden px-6 pb-20 pt-24">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#8CC63F]/20 blur-[120px]" />
          <div className="absolute right-10 top-24 h-80 w-80 rounded-full bg-[#2DD4BF]/20 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#8CC63F]/15 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/solution"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Solutions
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8CC63F]">Marketing</p>
              <h1 className="mt-4 text-5xl md:text-6xl font-black text-[#4D7C0F]">Pal-Base</h1>
              <p className="mt-4 text-lg text-slate-500 font-medium">
                LINEとGBPを軸に、
                来店とリピートの“土台”を整える。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8CC63F] to-[#22C55E] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#8CC63F]/25 hover:brightness-110 transition-all"
                >
                  相談を始める <ChevronRight size={16} />
                </Link>
                <Link
                  href="/diagnosis"
                  className="inline-flex items-center gap-2 rounded-full border border-[#8CC63F]/40 px-6 py-3 text-sm font-black text-[#4D7C0F] hover:border-[#8CC63F] hover:text-[#65A30D] transition-all"
                >
                  無料診断を試す <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#8CC63F]/30 bg-white p-8 shadow-lg shadow-[#8CC63F]/10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8CC63F]/15 text-[#4D7C0F]">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm font-black">地域集客の土台</p>
                  <p className="text-xs text-slate-400">LINE / GBP / 再来店</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {["プロフィール整備", "クチコミ導線", "LINE導線"].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#F1F8E8] px-4 py-3 text-sm font-bold text-[#4D7C0F]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          {[
            { icon: <MessageCircle size={18} />, title: "LINE設計", desc: "友だち登録から再来店まで一気通貫。" },
            { icon: <Star size={18} />, title: "口コミ導線", desc: "評価が自然に増える仕組みづくり。" },
            { icon: <Users size={18} />, title: "地域接点", desc: "地図検索で見つかる状態を維持。" },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-[#8CC63F]/25 bg-[#F8FCEB] p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#4D7C0F]">
                {item.icon}
              </div>
              <h3 className="mt-4 text-xl font-black text-[#4D7C0F]">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
