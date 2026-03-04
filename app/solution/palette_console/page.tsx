import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, LayoutDashboard, BarChart3, Zap, Files, ChevronRight, Search, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Palette Console | Solutions | Palette Lab",
  description: "管理・可視化（AIと対話するダッシュボード）。データに基づいた確かな意思決定を支援。",
};

export default function PaletteConsolePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HEADER --- */}
      <header className="px-6 py-12 md:px-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <Link 
              href="/solution" 
              className="inline-flex items-center gap-2 text-xs font-black text-slate-400 hover:text-slate-900 transition-all mb-8 uppercase tracking-widest"
            >
              <ArrowLeft size={14} /> Back to Solutions
            </Link>
            <p className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase mb-4">Core System / Dashboard</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">
              Palette Console
            </h1>
          </div>
          <p className="text-slate-500 font-medium max-w-sm leading-relaxed border-l-2 border-slate-100 pl-6">
            散らばったデータを一箇所に集約。AIが分析し、次の一手を指示する「ビジネスの管制塔」。
          </p>
        </div>
      </header>

      {/* --- FEATURE SPLIT SECTION --- */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* 左側：機能説明 (5列) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white"><BarChart3 size={18} /></div>
                リアルタイム集計
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                広告配信のクリック率、SNSのエンゲージメント、サイトのコンバージョン。すべての主要KPIを自動で吸い上げ、常に最新の状態でグラフ化します。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white"><Zap size={18} /></div>
                AIアドバイス・指示
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                ただ数字を見せるだけではありません。AIが「異常値」を検知し、改善案をポップアップ。あなたは提案を確認して承認するだけです。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600"><Files size={18} /></div>
                自動レポート作成
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                週次・月次の報告書作成に数時間かける必要はもうありません。AIが要点をまとめたエグゼクティブ・サマリーを瞬時に自動生成します。
              </p>
            </div>
          </div>

          {/* 右側：コンソール・モックアップイメージ (7列) */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="bg-[#0F172A] rounded-[40px] p-4 md:p-8 shadow-2xl shadow-slate-900/40 border border-slate-800 relative overflow-hidden group">
              {/* ダミーのUIヘッダー */}
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-4 bg-white/5 rounded-full" />
                  <div className="w-12 h-4 bg-white/10 rounded-full" />
                </div>
              </div>
              
              {/* ダミーのデータカード集 */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="h-32 bg-white/5 rounded-3xl border border-white/5 p-6 flex flex-col justify-between">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Revenue</p>
                  <p className="text-2xl font-black text-white">$42,900</p>
                </div>
                <div className="h-32 bg-white/5 rounded-3xl border border-white/5 p-6 flex flex-col justify-between">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Avg. CTR</p>
                  <p className="text-2xl font-black text-emerald-400">4.2%</p>
                </div>
              </div>

              {/* 大きなダミーグラフ */}
              <div className="aspect-[16/9] bg-white/5 rounded-[32px] border border-white/5 p-8 flex items-end gap-2 relative overflow-hidden">
                <div className="absolute top-6 left-6 flex items-center gap-2">
                   <div className="px-3 py-1 bg-blue-500 rounded-lg text-[10px] font-black text-white uppercase italic">AI Analysis</div>
                   <p className="text-xs text-white/60 font-medium italic">予算の最適配分を推奨中...</p>
                </div>
                {[40, 70, 45, 90, 65, 80, 55, 95, 30].map((h, i) => (
                  <div key={i} className="flex-grow bg-blue-500/20 rounded-t-lg transition-all group-hover:bg-blue-500/40" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GRID LIST (その他の機能) --- */}
      <section className="bg-slate-50 py-32 px-6 md:px-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-center text-3xl font-black text-slate-900 mb-20 tracking-tight">Everything you need.</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: "マルチデバイス対応", desc: "PC、タブレット、スマホ。どこからでもリアルタイムに状況を把握できます。" },
                { title: "権限管理", desc: "チームメンバーごとに閲覧・編集権限を細かく設定。安全な運用をサポート。" },
                { title: "外部連携", desc: "主要な広告プラットフォーム、SNS、CRMとAPIでシームレスに接続。" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[40px] border border-white shadow-sm hover:shadow-xl transition-all">
                  <h4 className="text-xl font-black text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 px-6 md:px-10 text-center">
         <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
           データ活用を、日常へ。
         </h2>
         <Link 
            href="/contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-slate-900 rounded-full font-black text-white hover:bg-blue-600 transition-all hover:scale-105"
         >
           デモ画面をリクエストする
           <ChevronRight size={20} />
         </Link>
      </section>
    </main>
  );
}