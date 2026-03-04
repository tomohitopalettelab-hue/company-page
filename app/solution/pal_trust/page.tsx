import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Star, ShieldCheck, Heart, ChevronRight, MessageSquareCheck, Filter, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Pal-Trust | Solutions | Palette Lab",
  description: "いい評価だけを口コミへ。信頼を資産に変える、戦略的レビューマネジメントサービス。",
};

export default function PalTrustPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden border-b border-slate-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[#F9C11C]/5 z-0" />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            href="/solution" 
            className="inline-flex items-center gap-2 text-xs font-black text-slate-400 hover:text-slate-900 transition-all mb-12 uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Back to Solutions
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-[#F9C11C] shadow-xl shadow-[#F9C11C]/20">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <p className="text-xs font-black tracking-[0.3em] text-[#F9C11C] uppercase">Marketing & Trust</p>
              </div>
              {/* #F9C11C を使った Apple風グラデーション */}
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-[#F9C11C] via-[#D9A60D] to-slate-900">
                Pal-Trust
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-10">
                「良い声」だけを、ビジネスの加速装置に。<br className="hidden md:block" />
                アンケートから始まる、戦略的口コミ獲得システム。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-[#F9C11C] text-white rounded-full font-black hover:brightness-110 transition-all hover:scale-105 shadow-lg shadow-[#F9C11C]/20 flex items-center gap-2"
                >
                  導入の相談をする <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* 修正：スマホの画像サイズを固定（max-w-[300px]）し、中央に配置 */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-[280px] md:w-[320px] aspect-[9/19.5] bg-slate-900 rounded-[50px] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-white flex flex-col">
                  {/* アプリUIダミー */}
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <div className="w-16 h-3 bg-slate-100 rounded-full" />
                    <Star className="text-[#F9C11C] fill-[#F9C11C]" size={16} />
                  </div>
                  <div className="flex-grow p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#F9C11C]/10 flex items-center justify-center mb-6">
                      <Heart className="text-[#F9C11C] fill-[#F9C11C]" size={32} />
                    </div>
                    <p className="text-lg font-black text-slate-900 mb-2 leading-tight">サービスはいかがでしたか？</p>
                    <p className="text-[10px] text-slate-400 mb-8 font-bold">最短10秒で完了します</p>
                    <div className="flex gap-1 mb-8">
                      {[1,2,3,4,5].map(s => <Star key={s} size={22} className={s <= 4 ? "text-[#F9C11C] fill-[#F9C11C]" : "text-slate-200"} />)}
                    </div>
                    <div className="w-full h-12 bg-[#F9C11C] rounded-2xl flex items-center justify-center text-white text-sm font-black shadow-lg shadow-[#F9C11C]/20">
                      回答を送信する
                    </div>
                  </div>
                </div>
              </div>
              {/* 背景の装飾的な輪っか */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-[#F9C11C]/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (選別プロセスの可視化) --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 text-left md:text-center">
            <h2 className="text-sm font-black text-[#F9C11C] tracking-[0.4em] uppercase mb-4">How it Works</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
              ファンだけを、口コミへ。
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* 矢印ライン（デスクトップ用） */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-12 z-0" />
            
            {[
              {
                title: "アンケート回答",
                desc: "QRコードやメールから簡単に回答。まずは顧客の本音を集めます。",
                icon: <MessageSquareCheck size={32} />,
                badge: "STEP 01"
              },
              {
                title: "自動選別 (フィルター)",
                desc: "高評価（★4以上など）をつけた顧客のみを検知し、次のステップへ。",
                icon: <Filter size={32} />,
                badge: "STEP 02",
                highlight: true
              },
              {
                title: "口コミサイトへ誘導",
                desc: "そのままGoogleマイビジネス等の口コミ投稿画面へワンタップで誘導します。",
                icon: <Users size={32} />,
                badge: "STEP 03"
              }
            ].map((step, i) => (
              <div key={i} className={`relative z-10 p-10 rounded-[40px] border transition-all ${step.highlight ? 'bg-[#F9C11C] border-[#F9C11C] text-white shadow-xl shadow-[#F9C11C]/30 scale-105' : 'bg-white border-slate-100 text-slate-900'}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${step.highlight ? 'bg-white/20' : 'bg-[#F9C11C]/10 text-[#F9C11C]'}`}>
                  {step.icon}
                </div>
                <span className={`text-[10px] font-black tracking-widest mb-4 block ${step.highlight ? 'text-white/80' : 'text-[#F9C11C]'}`}>{step.badge}</span>
                <h4 className="text-xl font-black mb-4">{step.title}</h4>
                <p className={`text-sm font-medium leading-relaxed ${step.highlight ? 'text-white/90' : 'text-slate-500'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY PAL-TRUST? (メリット) --- */}
      <section className="py-32 bg-slate-900 text-white rounded-[60px] mx-0 md:mx-6 mb-32 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter leading-tight">
              「悪い評価」は<br />社内改善のヒントに。
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12">
              低評価をつけた方には、口コミサイトではなく「直接の問い合わせフォーム」を表示。公開される前に問題を把握し、サービスの質を高めるチャンスに変えられます。
            </p>
            <ul className="space-y-6">
              {[
                "不満の拡散を未然に防ぐ",
                "リアルな顧客満足度を数値化",
                "MEO対策・SEO対策に直結"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 font-bold">
                  <div className="w-6 h-6 rounded-full bg-[#F9C11C] flex items-center justify-center shrink-0">
                    <Star size={12} className="fill-white text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-[40px] p-8 md:p-12 border border-white/10 backdrop-blur-sm">
             <div className="text-center mb-8">
               <p className="text-xs font-black text-[#F9C11C] tracking-widest uppercase mb-2">Simulation</p>
               <p className="text-2xl font-black">導入後のイメージ</p>
             </div>
             <div className="space-y-4">
               <div className="p-5 bg-white/10 rounded-2xl flex items-center justify-between">
                 <span className="text-sm font-bold">良い口コミの増加率</span>
                 <span className="text-2xl font-black text-[#F9C11C]">+240%</span>
               </div>
               <div className="p-5 bg-white/10 rounded-2xl flex items-center justify-between">
                 <span className="text-sm font-bold">ネガティブ露出の低減</span>
                 <span className="text-2xl font-black text-rose-400">-85%</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-12 tracking-tighter leading-tight">
            信頼を、<br />最強の営業マンに。
          </h2>
          <p className="text-slate-500 text-xl font-medium mb-12">
            お客様の「ありがとう」を逃さず、ブランドの資産に変えましょう。
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-[#F9C11C] rounded-full font-black text-white hover:brightness-110 transition-all hover:scale-110 shadow-2xl shadow-[#F9C11C]/30"
          >
            Pal-Trustの詳細・デモを依頼する
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}