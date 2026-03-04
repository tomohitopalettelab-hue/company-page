import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Paintbrush, Sparkles, MousePointer2, Code2, ChevronRight, MessageSquareText, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Pal-Studio | Solutions | Palette Lab",
  description: "AIとの対話から、あなたのビジョンをHPという形に。次世代のクリエイティブ・工房。",
};

export default function PalStudioPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 md:py-32 relative overflow-hidden text-left">
      {/* 背景装飾：メインカラー #00B7CE の柔らかな光 */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00B7CE]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00B7CE]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="mx-auto max-w-6xl relative z-10 text-left">
        <Link 
          href="/solution" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-all mb-12 group"
        >
          <div className="p-2 rounded-full bg-white shadow-sm group-hover:-translate-x-1 transition-transform border border-slate-100">
            <ArrowLeft size={16} />
          </div>
          一覧へ戻る
        </Link>

        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-[#00B7CE] shadow-xl shadow-[#00B7CE]/20">
                <Paintbrush className="text-white" size={24} />
              </div>
              <p className="text-xs font-black tracking-[0.3em] text-[#00B7CE] uppercase">Creative Studio</p>
            </div>
            {/* #00B7CE を基調としたグラデーションタイトル */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-[#00B7CE] via-[#0096A8] to-slate-900">
              Pal-Studio
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-10">
              Palette AIの質問に答えるだけで、<br className="hidden md:block" />
              あなたの理想がHPへと形を変える。
            </p>
            <div className="inline-flex items-center gap-4 p-2 pr-6 rounded-full bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-[#00B7CE] flex items-center justify-center shadow-md">
                <MessageSquareText size={18} className="text-white" />
              </div>
              <p className="text-sm font-bold text-slate-700">対話から生まれる、オーダーメイドのHP制作</p>
            </div>
          </div>
          
          {/* 右側：浮遊するUIパーツのビジュアル */}
          <div className="relative h-[400px] hidden md:block">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <div className="absolute top-10 right-10 w-full h-full bg-white rounded-[40px] shadow-2xl border border-slate-100 p-8 z-10">
               <div className="flex items-center gap-2 mb-8">
                 <div className="w-3 h-3 rounded-full bg-slate-200" />
                 <div className="w-3 h-3 rounded-full bg-slate-200" />
                 <div className="w-3 h-3 rounded-full bg-[#00B7CE]" />
               </div>
               <div className="space-y-4">
                 <div className="w-1/2 h-4 bg-slate-100 rounded-full" />
                 <div className="w-full h-32 bg-[#00B7CE]/5 rounded-3xl border border-[#00B7CE]/10 flex items-center justify-center">
                    <Layers className="text-[#00B7CE]/20" size={48} />
                 </div>
                 <div className="flex gap-3">
                   <div className="flex-grow h-10 bg-slate-50 rounded-xl" />
                   <div className="w-10 h-10 bg-[#00B7CE] rounded-xl flex items-center justify-center text-white"><Sparkles size={16} /></div>
                 </div>
               </div>
            </div>
            <MousePointer2 className="absolute -bottom-4 left-1/4 text-[#00B7CE] animate-bounce" size={48} />
          </div>
        </div>

        {/* --- STEP FLOW --- */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row gap-6">
            {[
              { step: "01", title: "AIによるヒアリング", desc: "AIがあなたの事業、強み、届けたい相手を深くヒアリング。言葉にならない想いを言語化します。" },
              { step: "02", title: "デザインの自動構成", desc: "対話データに基づき、#00B7CEのようなブランドカラーを活かした最適な構成案を提示。" },
              { step: "03", title: "公開・アップデート", desc: "完成したHPはすぐに世界へ。公開後もAIが改善点を提案し続け、成長を止めません。" }
            ].map((item, i) => (
              <div key={i} className="flex-1 p-8 rounded-[40px] border border-slate-100 hover:border-[#00B7CE]/30 hover:bg-[#00B7CE]/[0.02] transition-all group">
                <span className="text-4xl font-black text-[#00B7CE]/20 group-hover:text-[#00B7CE]/40 transition-colors mb-4 block leading-none">{item.step}</span>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- FEATURE BOXES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
           <div className="p-12 rounded-[50px] bg-slate-900 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6 leading-tight">直感的な<br />ユーザー体験。</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  技術的な専門用語は必要ありません。AIとの日常会話のようなやり取りだけで、洗練されたUI/UXを構築。運用コストを劇的に下げます。
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00B7CE]/10 rounded-full blur-[60px]" />
           </div>
           <div className="p-12 rounded-[50px] bg-[#00B7CE]/5 border border-[#00B7CE]/10 text-slate-900">
              <h3 className="text-3xl font-black mb-6 leading-tight">データが導く<br />クリエイティブ。</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Pal-Studioは、感覚だけで作りません。Palette AIの分析データを反映し、最も成果の出るデザインと構成を科学的に導き出します。
              </p>
           </div>
        </div>

        {/* --- FINAL CTA --- */}
        <div className="text-center bg-gradient-to-b from-white to-slate-50 rounded-[60px] p-16 md:p-24 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-12 tracking-tighter">
              あなたのビジョンを、<br />最高の形で。
            </h2>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-[#00B7CE] rounded-full font-black text-white hover:bg-[#0096A8] transition-all hover:scale-105 shadow-2xl shadow-[#00B7CE]/30"
            >
              無料相談を始める
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}