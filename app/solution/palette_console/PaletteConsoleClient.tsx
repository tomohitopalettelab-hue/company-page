"use client";

import Link from "next/link";
import { JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import { useEffect } from "react";

const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PaletteConsoleClient() {
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
    <main className={`${notoSans.className} bg-black text-white`}>
      <style jsx global>{`
        body {
          font-family: "Noto Sans JP", sans-serif;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          background: #000;
          color: #fff;
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
        .mono {
          font-family: "JetBrains Mono", monospace;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .service-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .grid-bg {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      <div className="slide-container">
        <section className="slide grid-bg text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
          <div className="max-w-4xl mx-auto z-10">
            <p className={`text-gray-500 font-bold tracking-[0.5em] mb-6 fade-in uppercase ${jetBrains.className}`}>
              System.Status: Active
            </p>
            <h1 className="hero-title text-6xl md:text-9xl font-bold mb-8 fade-in tracking-tighter">
              Palette
              <br />
              <span className="italic underline decoration-1 underline-offset-8">Console</span>
            </h1>
            <p className="text-gray-400 text-xl mb-12 fade-in">すべてを可視化し、意思決定を加速させる。</p>
            <div className="w-24 h-px bg-white mx-auto fade-in" />
          </div>
        </section>

        <section className="slide bg-black">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-white" />
              <h2 className={`text-2xl font-bold tracking-widest uppercase ${jetBrains.className}`}>Command Center</h2>
            </div>
            <h3 className="text-4xl font-bold mb-10 leading-snug">
              経営の「今」を、
              <br />
              一画面に凝縮。
            </h3>
            <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed">
              <p>
                各サービスがバラバラに吐き出すデータ。それらを一つ一つ確認する時間は、もう必要ありません。Palette Consoleは、すべてのPaletteシリーズからリアルタイムで情報を吸い上げ、あなたのビジネスの健康状態を可視化します。
              </p>
              <p>
                ただ数値を並べるだけではありません。蓄積されたビッグデータとAIを組み合わせ、「なぜその数値になったのか」そして「次に何をすべきか」を導き出します。
              </p>
            </div>
          </div>
        </section>

        <section className="slide bg-[#050505] overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">次世代のビジネス・インテリジェンス</h2>

            <div className="glass-panel rounded-[2rem] p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-6">
                  <span className={`text-lg font-bold ${jetBrains.className}`}>OVERVIEW</span>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { label: "Trust", color: "#F9C11C" },
                      { label: "Studio", color: "#00B7CE" },
                      { label: "Opt", color: "#A62183" },
                      { label: "Base", color: "#8CC63F" },
                      { label: "Ad", color: "#F39800" },
                      { label: "Video", color: "#E95464" },
                    ].map((item) => (
                      <span key={item.label} className="flex items-center gap-2 text-[10px] text-gray-500">
                        <div className="service-dot" style={{ background: item.color }} />
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`text-xs text-gray-500 ${jetBrains.className}`}>March 2026 / System Optimized</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-gray-500 mb-2">Total Conversion</p>
                    <p className="text-3xl font-bold">
                      1,284 <span className="text-xs text-green-500">+12%</span>
                    </p>
                    <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[75%] h-full bg-white" />
                    </div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-gray-500 mb-2">Customer Trust Score</p>
                    <p className="text-3xl font-bold">
                      4.8 <span className="text-xs text-gray-500">/ 5.0</span>
                    </p>
                    <div className="mt-4 flex gap-1">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <div key={`trust-full-${index}`} className="w-4 h-1" style={{ background: "#F9C11C" }} />
                      ))}
                      <div className="w-2 h-1" style={{ background: "#F9C11C" }} />
                    </div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-gray-500 mb-2">SNS Engagement</p>
                    <p className="text-3xl font-bold">
                      8.4k <span className="text-xs text-pink-500">↗</span>
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-gray-500 mb-2">Ad ROI</p>
                    <p className="text-3xl font-bold">
                      340% <span className="text-xs text-gray-500">AVG</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 p-8 rounded-[2rem] border border-white/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg className="w-12 h-12" fill="white" viewBox="0 0 24 24">
                      <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
                    </svg>
                  </div>
                  <h4 className={`text-xs font-bold mb-6 tracking-widest ${jetBrains.className}`}>AI RECOMMENDATION</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-black/40 rounded-xl border-l-2" style={{ borderColor: "#A62183" }}>
                      <p className="text-[10px] text-gray-400 mb-1">Opt Strategy</p>
                      <p className="text-xs leading-relaxed">「ランチ」関連の検索が15%上昇中。Pal-Optで新作メニューのSNS投稿を予約しましょう。</p>
                    </div>
                    <div className="p-4 bg-black/40 rounded-xl border-l-2" style={{ borderColor: "#F9C11C" }}>
                      <p className="text-[10px] text-gray-400 mb-1">Trust Action</p>
                      <p className="text-xs leading-relaxed">最近の口コミに未返信があります。AIで最適な返信案を作成しました。確認しますか？</p>
                    </div>
                  </div>
                  <button className="w-full mt-8 py-3 bg-white text-black text-xs font-bold rounded-full">ACTION ALL</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-black">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <span className={`text-xs font-bold tracking-[0.3em] text-gray-500 uppercase ${jetBrains.className} mb-6 block`}>
                Deep Insights
              </span>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                「なぜ？」に即座に答える。
                <br />
                対話型アナリティクス。
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                複雑なグラフを読み解く必要はありません。AI Consoleに「今週、予約が減った原因は？」と聞くだけで、サイトの離脱率、SNSの露出低下、競合の動向などを瞬時に突き合わせ、答えを出します。
              </p>
              <div className="flex gap-4">
                {["Analyze conversion drop", "Forecast next month"].map((label) => (
                  <div
                    key={label}
                    className={`px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] text-gray-500 italic ${jetBrains.className}`}
                  >
                    "{label}"
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-72 h-72 bg-white/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="relative glass-panel p-6 rounded-3xl border border-white/10 w-full rotate-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-white animate-pulse rounded-full" />
                  <span className={`text-[10px] ${jetBrains.className}`}>AI Thinking...</span>
                </div>
                <div className="h-4 w-3/4 bg-white/10 rounded mb-2" />
                <div className="h-4 w-1/2 bg-white/10 rounded mb-6" />
                <div className="h-32 w-full bg-white/5 rounded-xl border border-white/5 flex items-end p-4 gap-2">
                  {[40, 60, 90, 70, 50, 80].map((value, index) => (
                    <div
                      key={`bar-${index}`}
                      className="w-1/6 bg-white/20 rounded-t"
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">すべてのサービスを同期する。</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              {[
                {
                  title: "Pal-Opt (運用最適化)",
                  desc: "SNS・SEO・MEOの実行状況をAIがリアルタイム分析。",
                  color: "#A62183",
                },
                {
                  title: "Pal-Studio (HP制作)",
                  desc: "ビジョンを形にしたサイトの更新・ABテストを管理。",
                  color: "#00B7CE",
                },
                {
                  title: "Pal-Base (接客拠点)",
                  desc: "LINE・GBPによる地域密着の集客土台を可視化。",
                  color: "#8CC63F",
                },
                {
                  title: "Pal-Trust (信頼構築)",
                  desc: "口コミ・評価の収集状況とブランドの信頼度を把握。",
                  color: "#F9C11C",
                },
                {
                  title: "Pal-Ad (広告配信)",
                  desc: "即効性のある広告の投資対効果（ROI）を最大化。",
                  color: "#F39800",
                },
                {
                  title: "Pal-Video (動画制作)",
                  desc: "視覚的なブランド表現の視聴データを分析。",
                  color: "#E95464",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 glass-panel rounded-3xl group hover:bg-white/10 transition cursor-default">
                  <div className="w-2 h-2 mx-auto mb-4 rounded-full" style={{ background: item.color }} />
                  <h5 className="text-xs font-bold mb-2">{item.title}</h5>
                  <p className="text-[10px] text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="slide bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-10">
              <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-8 italic">Secure Intelligence</h2>
            <p className="text-gray-500 leading-relaxed mb-12 max-w-2xl mx-auto">
              Palette Consoleは、ビジネスの機密性を第一に考えています。最新の暗号化規格（AES-256）の採用と厳格なプライバシーポリシーにより、お客様の大切なデータを保護。AIとの対話も完全に独立した環境で行われるため、安心してビジネスの意志決定に集中いただけます。
            </p>
            <div className={`flex justify-center gap-8 opacity-30 grayscale ${jetBrains.className}`}>
              <span className="text-xs tracking-widest uppercase">AES-256 Encrypted</span>
              <span className="text-xs tracking-widest uppercase">SSL/TLS 1.3</span>
              <span className="text-xs tracking-widest uppercase">Private AI Nodes</span>
            </div>
          </div>
        </section>

        <section className="slide bg-black text-white text-center grid-bg">
          <div className="absolute inset-0 bg-black/80" />
          <div className="max-w-3xl mx-auto z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter uppercase italic">
              Control Your
              <br />
              Destiny.
            </h2>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              勘と経験だけの経営は、もう終わりにしましょう。
              <br />
              Palette Console で、確信に基づいた次の一歩を。
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/diagnosis"
                className="px-10 py-5 bg-white text-black rounded-full font-bold text-xl shadow-xl hover:bg-gray-200 transition-all hover:scale-105"
              >
                無料診断
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 bg-transparent text-white border border-white/30 rounded-full font-bold text-xl hover:bg-white/5 transition-all"
              >
                お問い合わせ
              </Link>
            </div>

            <div className="mt-20 flex justify-center items-center gap-6 opacity-20">
              <div className="w-12 h-px bg-white" />
              <span className={`text-[10px] tracking-[0.3em] ${jetBrains.className}`}>PALETTE LAB INTEGRATED SYSTEM</span>
              <div className="w-12 h-px bg-white" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
