"use client";

import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { useEffect } from "react";

const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PalOptClient() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);


  return (
    <main className={`${notoSans.className} bg-white text-gray-900`}>
      <style jsx global>{`
        body {
          font-family: "Noto Sans JP", sans-serif;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }
        .slide-container {
          scroll-behavior: smooth;
        }
        @media (min-width: 768px) {
          .slide-container {
            scroll-snap-type: y mandatory;
            height: 100vh;
            overflow-y: scroll;
          }
          .slide {
            scroll-snap-align: start;
          }
          .slide-container::-webkit-scrollbar {
            display: none;
          }
          .slide-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
        .slide {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 2rem;
          position: relative;
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
        }
        .is-visible .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .magenta-gradient {
          background: linear-gradient(135deg, #a62183, #7a145d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .loading-spinner {
          border: 3px solid rgba(166, 33, 131, 0.3);
          border-radius: 50%;
          border-top: 3px solid #a62183;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="slide-container">
        <section className="slide bg-black text-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-96 h-96 bg-[#A62183] filter blur-[150px] rounded-full" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#A62183]/50 filter blur-[120px] rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto z-10">
            <p className="text-[#A62183] font-bold tracking-[0.4em] mb-6 fade-in uppercase">2026 Palette Lab</p>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight fade-in text-white">
              Pal-Opt
              <br />
              <span className="magenta-gradient italic">運用最適化提案</span>
            </h1>
            <p className="text-gray-400 text-xl mb-12 fade-in">「見つかる」を科学し、自動化する</p>
            <div className="w-20 h-1 bg-[#A62183] mx-auto fade-in" />
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#A62183]" />
              <h2 className="text-2xl font-bold tracking-widest uppercase text-[#A62183]">The Reality</h2>
            </div>
            <h3 className="text-4xl font-bold mb-10 leading-snug">
              ユーザーに「発見」されなければ、
              <br />
              あなたのビジネスは存在しないのと同じです。
            </h3>
            <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
              <p>
                現在、ユーザーの検索行動は多様化しています。Google検索（SEO）、マップ検索（MEO）、そしてSNS。さらにはAIが回答を生成するAIO（AI Overviews）も始まりました。
              </p>
              <p>
                単に「ホームページがある」だけでは勝てません。全てのプラットフォームで「正しい情報」を「継続的」に発信し、AIに「価値ある情報」と認識させる必要があります。
              </p>
            </div>
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">今、求められる3つの最適化</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-[#A62183]">
                <div className="text-4xl mb-4 font-bold text-[#A62183]">SEO</div>
                <h4 className="text-xl font-bold mb-4">検索エンジン最適化</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  ブログやWEBサイトを上位表示させ、質の高い見込み客を永続的に集客します。
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-[#A62183]">
                <div className="text-4xl mb-4 font-bold text-[#A62183]">MEO</div>
                <h4 className="text-xl font-bold mb-4">マップ検索最適化</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  「地域名×業種」でマップ上位に。今すぐ客を店舗やサービスへ誘導します。
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-[#A62183]">
                <div className="text-4xl mb-4 font-bold text-[#A62183]">AIO</div>
                <h4 className="text-xl font-bold mb-4">AI生成回答最適化</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  最新のAI検索で「おすすめ」として提示されるために、構造化された情報発信を行います。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-8">
                  でも、現実は
                  <br />
                  <span className="text-[#A62183] underline decoration-4 underline-offset-8">圧倒的なリソース不足</span>
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs mt-1">✕</div>
                    <p className="text-gray-600">毎日SNSを更新する時間がない</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs mt-1">✕</div>
                    <p className="text-gray-600">SEOに強いブログの書き方がわからない</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs mt-1">✕</div>
                    <p className="text-gray-600">複数のツールを使い分けるのが面倒</p>
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-gray-50 p-10 rounded-[3rem] border border-gray-100 text-center">
                <p className="text-sm text-gray-400 mb-4 uppercase font-bold tracking-widest">Conventional Method</p>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm line-through text-gray-400">SNS投稿作成 (1h)</div>
                  <div className="p-4 bg-white rounded-xl shadow-sm line-through text-gray-400">ブログ執筆 (3h)</div>
                  <div className="p-4 bg-white rounded-xl shadow-sm line-through text-gray-400">MEO写真更新 (30m)</div>
                </div>
                <p className="mt-8 text-[#A62183] font-bold italic">「運用」が重荷になっていませんか？</p>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-[#A62183] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
              One-Stop Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
              Pal-Optが運用の全てを
              <br />
              「タイトルひとつ」に変える
            </h2>
            <div className="relative py-12">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-white/20" />
              </div>
              <div className="relative flex justify-between gap-4">
                <div className="bg-white text-[#A62183] px-6 py-4 rounded-2xl font-bold shadow-xl">AI生成</div>
                <div className="bg-white text-[#A62183] px-6 py-4 rounded-2xl font-bold shadow-xl">マルチ投稿</div>
                <div className="bg-white text-[#A62183] px-6 py-4 rounded-2xl font-bold shadow-xl">効果分析</div>
              </div>
            </div>
            <p className="text-lg opacity-80 mt-12">AIがあなたの代わりに考え、書き、投稿する。</p>
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-[#A62183]/10 text-[#A62183] text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
                Automation Workflow
              </span>
              <h2 className="text-4xl font-bold mb-8">
                「点」を「線」にする
                <br />
                運用サイクル
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                SNSで認知を広げ、MEOで来店を促し、SEOで信頼を固める。バラバラだった施策をPal-Optが統合し、相乗効果を生み出します。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-[#A62183]/10 rounded-full flex items-center justify-center text-[#A62183] font-bold">
                    🤖
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">AIによる自動トーン調整</h5>
                    <p className="text-xs text-gray-400">SNSは親しみやすく、ブログは論理的に。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-[#A62183]/10 rounded-full flex items-center justify-center text-[#A62183] font-bold">
                    📅
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">予約投稿マネジメント</h5>
                    <p className="text-xs text-gray-400">忙しい時も、投稿が途切れることはありません。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-[3rem] p-8 shadow-2xl border border-gray-100">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest">Performance Stats</h4>
                  <span className="text-xs text-[#A62183] font-bold">Real-time</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-[#A62183]/5 rounded-2xl">
                    <p className="text-[10px] text-gray-400 mb-1">Total Reach</p>
                    <p className="text-xl font-bold text-[#A62183]">+128%</p>
                  </div>
                  <div className="p-4 bg-[#A62183]/5 rounded-2xl">
                    <p className="text-[10px] text-gray-400 mb-1">AI Efficiency</p>
                    <p className="text-xl font-bold text-[#A62183]">x10.0</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-[#A62183]" />
                    </div>
                    <span className="text-[10px] font-bold">SEO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[70%] h-full bg-[#A62183]/60" />
                    </div>
                    <span className="text-[10px] font-bold">SNS</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#A62183] p-6 rounded-3xl shadow-xl">
                <div className="text-white font-bold text-sm">Operation Cost</div>
                <div className="text-white text-3xl font-bold">-75%</div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">なぜ今、対策が必要なのか？</h2>
            <div className="bg-black text-white p-12 rounded-[3.5rem] relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-6 text-[#A62183]">AIに「選ばれる」ためのデータ蓄積</h4>
              <p className="text-gray-400 leading-relaxed mb-8">
                GoogleのAI回答（AIO）は、ネット上の「信頼できる情報」を元に生成されます。今、ブログやMEOで正しい情報を蓄積しておかなければ、AI時代にあなたのビジネスは検索結果から消えてしまうかもしれません。
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#A62183] flex items-center justify-center font-bold">！</div>
                <p className="text-sm font-bold">今すぐの対策が、1年後の集客格差を決めます。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-black text-white text-center">
          <div className="max-w-3xl mx-auto z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              運用の手間を、
              <br />
              <span className="text-[#A62183] italic">「成長の機会」</span>へ。
            </h2>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              AIを味方につけて、競合よりも速く、深く、広く発信を。
              <br />
              まずは「運用無料診断」で、貴社の潜在的な集客力を可視化しませんか？
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/diagnosis"
                className="px-10 py-5 bg-[#A62183] text-white rounded-full font-bold text-xl shadow-xl hover:brightness-110 transition-all hover:scale-105"
              >
                無料診断
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 bg-white text-black rounded-full font-bold text-xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105"
              >
                お問い合わせ
              </Link>
            </div>

            <p className="mt-12 text-gray-600 text-sm">© 2026 Palette Lab. Powered by AI Technology.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
