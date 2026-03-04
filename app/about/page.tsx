import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3, Users2, Search, Target, ChevronRight, Globe, Layers, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Palette Lab",
  description: "Palette Labについての紹介。AI分析とデザインで『選ばれる理由』を共につくります。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-left">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-black text-slate-400 hover:text-slate-900 transition-all mb-12 uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Back to Top
          </Link>
          
          <div className="max-w-3xl">
            <p className="text-xs font-black tracking-[0.4em] text-slate-400 uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-slate-200"></span>
              About Palette Lab
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
              価値を再定義し、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B7CE] via-[#F9C11C] to-[#FF4B91]">彩りある未来</span>を。
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
              Palette Labは、AI分析とデザインを掛け合わせ、事業者さまの価値を可視化し、「選ばれる理由」をつくる伴走型のパートナーです。
            </p>
          </div>
        </div>
      </section>

      {/* --- MARKET REALITY (ご提示いただいた文章) --- */}
      <section className="py-24 px-6 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 leading-[1.8] font-medium">
              <p>
                日本のインターネット利用率は90％を超え、WEB集客はすでに<span className="text-slate-900 font-bold">“当たり前”の時代</span>となっています。
                多くの消費者は来店前にオンラインで情報収集を行い、その<span className="text-slate-900 font-bold underline decoration-[#F9C11C] decoration-2 underline-offset-4">約9割が口コミを参考に意思決定をしています。</span>
              </p>
              <p>
                WEB上での評価や情報発信は、もはや単なる紹介ではなく<span className="text-slate-900 font-bold">“売上に直結する”</span>重要な要素です。
                一方で、手法が多岐にわたる現代において、限られた予算で成果を出すためには<span className="text-slate-900 font-bold text-[#00B7CE]">“自社にとって正しい戦略”</span>を選ぶ必要があります。
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col justify-center">
                <p className="text-4xl font-black text-slate-900 mb-2">90<span className="text-lg">%</span></p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Internet usage</p>
              </div>
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col justify-center">
                <p className="text-4xl font-black text-[#F9C11C] mb-2">90<span className="text-lg">%</span></p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Review influence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES (Mission, Approach, Strength) --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Mission", 
                desc: "想いを色付け、価値を再定義する。", 
                icon: <Sparkles className="text-[#00B7CE]" />,
                color: "hover:border-[#00B7CE]/30"
              },
              { 
                title: "Approach", 
                desc: "戦略設計から制作・運用まで一気通貫で支援します。", 
                icon: <Layers className="text-[#F9C11C]" />,
                color: "hover:border-[#F9C11C]/30"
              },
              { 
                title: "Strength", 
                desc: "データドリブンな意思決定と実行力が強みです。", 
                icon: <BarChart3 className="text-[#FF4B91]" />,
                color: "hover:border-[#FF4B91]/30"
              }
            ].map((item, i) => (
              <div key={i} className={`group p-10 rounded-[40px] border border-slate-100 bg-white transition-all ${item.color} hover:shadow-xl hover:shadow-slate-100`}>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h2>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPANY PROFILE --- */}
      <section className="py-32 px-6 bg-slate-900 text-white rounded-[60px] mx-0 md:mx-6 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
            Company Profile
            <span className="h-[1px] flex-grow bg-white/10"></span>
          </h2>
          <dl className="space-y-0 border-t border-white/10">
            {[
              { dt: "事業名", dd: "Palette Lab" },
              { dt: "所在地", dd: "兵庫県尼崎市" },
              { dt: "事業内容", dd: "Web制作 / AI活用支援 / 集客運用支援" },
              { dt: "URL", dd: "https://palette-lab.jp" }
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-[120px_1fr] py-8 border-b border-white/10 items-center">
                <dt className="font-bold text-slate-500 text-sm uppercase tracking-widest">{item.dt}</dt>
                <dd className="text-lg font-medium">{item.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">
        © 2026 Palette Lab. All Rights Reserved.
      </footer>
    </main>
  );
}