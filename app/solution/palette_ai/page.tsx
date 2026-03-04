import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Sparkles, Send, HelpCircle, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Palette AI | Solutions | Palette Lab",
  description: "AIとの対話からすべてが始まる。ヒアリング、投稿、修正、相談までを担うPalette Labの脳。",
};

export default function PaletteAiPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-24 md:py-32 relative overflow-hidden">
      {/* --- 背景装飾 --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-white to-transparent pointer-events-none z-0" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="mx-auto max-w-5xl relative z-10">
        <Link
          href="/solution"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-all mb-12 group"
        >
          <div className="p-2 rounded-full bg-white shadow-sm group-hover:-translate-x-1 transition-transform border border-slate-100">
            <ArrowLeft size={16} />
          </div>
          一覧へ戻る
        </Link>

        {/* --- HERO --- */}
        <div className="mb-24 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-white shadow-xl shadow-blue-500/5 border border-slate-100">
              <Sparkles className="text-blue-500" size={24} />
            </div>
            <p className="text-xs font-black tracking-[0.3em] text-slate-400 uppercase">Core System</p>
          </div>

          {/* Apple風グラデーションタイトル：透明感と深みのある配色 */}
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-400">
            Palette AI
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl">
            「相談」がそのまま「実行」に変わる。<br className="hidden md:block" />
            AIチャットを通じたヒアリングから、実務の自動遂行まで。
          </p>
        </div>

        {/* --- DYNAMIC USER EXPERIENCE (画面を大きく使ったストーリー展開) --- */}
        <div className="mb-40 -mx-6 md:-mx-10 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black text-blue-500 tracking-[0.4em] uppercase mb-4 text-center">User Experience</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">AIと、アイデアを現実に変える旅。</h3>
            </div>

            <div className="space-y-32">
              {[
                {
                  step: "01",
                  label: "Hearing & Consultation",
                  title: "まずは、あなたの想いをぶつけるだけ。",
                  desc: "「来月のキャンペーン、どうすればいい？」そんな一言から始まります。AIがあなたの言葉の裏側にある目的や情熱を汲み取り、チャット形式で対話を深めます。",
                  color: "bg-blue-600",
                  imgLabel: "AI対話画面: 思考の整理"
                },
                {
                  step: "02",
                  label: "Strategy & Creative",
                  title: "瞬時に、プロ級の戦略を可視化。",
                  desc: "対話から得たインサイトを基に、AIが最適な施策案とクリエイティブを生成。あなたはパレットから好きな色を選ぶように、提案をブラッシュアップするだけです。",
                  color: "bg-violet-600",
                  imgLabel: "提案画面: 戦略マップと制作案"
                },
                {
                  step: "03",
                  label: "Instant Execution",
                  title: "OKなら、一瞬で世界へ。 ",
                  desc: "修正や調整が終われば、あとは実行ボタンを押すだけ。SNSへの投稿やサイトの更新、広告のセットまで、Palette AIがあなたの代わりに実務を完了させます。",
                  color: "bg-emerald-500",
                  imgLabel: "実行完了画面: 自動反映の瞬間"
                }
              ].map((flow, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 group`}>

                  {/* 画像側：画面を大きく使い、奥行きを出す */}
                  <div className="w-full md:w-3/5 relative">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-slate-100 to-white rounded-[48px] -rotate-1 group-hover:rotate-0 transition-transform duration-700" />
                    <div className="relative aspect-[16/10] w-full bg-white rounded-[40px] shadow-2xl shadow-blue-500/10 border border-slate-100 overflow-hidden">
                      <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
                        <span className="text-slate-300 font-black tracking-tighter text-2xl md:text-4xl italic opacity-50 group-hover:scale-110 transition-transform duration-700">
                          {flow.imgLabel}
                        </span>
                      </div>

                      {/* 装飾的なフローティングUIパーツ */}
                      <div className="absolute top-8 right-8 w-32 h-32 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50 translate-x-12 group-hover:translate-x-0 transition-all duration-700 delay-100 shadow-xl shadow-black/5" />
                      <div className="absolute bottom-8 left-8 w-40 h-16 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/50 -translate-x-12 group-hover:translate-x-0 transition-all duration-700 delay-200 shadow-xl shadow-black/5" />
                    </div>
                  </div>

                  {/* テキスト側：大きく数字を見せ、わくわくさせる内容に */}
                  <div className="w-full md:w-2/5">
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`w-12 h-12 rounded-2xl ${flow.color} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                        {flow.step}
                      </span>
                      <span className="text-xs font-black tracking-[0.2em] text-slate-400 uppercase">{flow.label}</span>
                    </div>
                    <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                      {flow.title}
                    </h4>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                      {flow.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- CORE FEATURES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mb-8">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">対話型ヒアリング</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              決まったフォーム入力は不要です。AIと会話するだけで、あなたの頭の中にあるアイデアを整理し、論理的な施策へと落とし込みます。
            </p>
          </div>
          <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500 mb-8">
              <HelpCircle size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">困った時の相談窓口</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              「反応が落ちてきた」「何を変えればいいかわからない」。そんな時はPalette AIを呼び出してください。現在の数値を分析し、客観的なアドバイスを行います。
            </p>
          </div>
        </div>

        {/* --- FINAL CTA --- */}
        <div className="text-center bg-white rounded-[50px] border border-slate-100 p-12 md:p-24 shadow-2xl shadow-blue-500/5 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              AIと一緒に、<br />新しい事業の形を。
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-12 py-6 bg-slate-900 rounded-full font-black text-white hover:bg-blue-600 hover:scale-105 transition-all shadow-xl shadow-slate-900/10"
            >
              無料相談を始める
              <ChevronRight size={20} />
            </Link>
          </div>
          {/* 背景の光 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px]" />
        </div>
      </div>
    </main>
  );
}