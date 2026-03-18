"use client";

import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { useEffect } from "react";

const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PalVideoClient() {
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
        .coral-gradient {
          background: linear-gradient(135deg, #e95464, #b83d4b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .video-overlay::after {
          content: "";
          position: absolute;
          inset: 0;
          background: url("https://www.transparenttextures.com/patterns/p6.png");
          opacity: 0.05;
          pointer-events: none;
        }
        .play-button {
          width: 80px;
          height: 80px;
          background: #e95464;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        .play-button:hover {
          transform: scale(1.1);
        }
      `}</style>

      <div className="slide-container">
        <section className="slide bg-[#0a0a0a] text-center video-overlay overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#E95464] filter blur-[150px] rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto z-10">
            <p className="text-[#E95464] font-bold tracking-[0.4em] mb-6 fade-in uppercase">2026 Palette Lab</p>
            <h1 className="hero-title text-5xl md:text-8xl font-bold mb-8 fade-in text-white">
              Pal-Video
              <br />
              <span className="coral-gradient italic">映像戦略&nbsp;</span>
            </h1>
            <p className="text-gray-400 text-xl mb-12 fade-in">言葉を超え、感情を揺さぶるブランド表現</p>
            <div className="w-20 h-1 bg-[#E95464] mx-auto fade-in" />
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#E95464]" />
              <h2 className="text-2xl font-bold tracking-widest uppercase text-[#E95464]">Why Video?</h2>
            </div>
            <h3 className="text-4xl font-bold mb-10 leading-snug">
              動画1分間の情報量は、
              <br />
              WEBサイト3,600ページ分に匹敵する。
            </h3>
            <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
              <p>
                テキストや静止画だけでは伝えきれない、現場の「空気感」、スタッフの「表情」、サービスの「質感」。動画はそれらを一瞬で脳に届けます。
              </p>
              <p>
                情報が溢れる現代、ユーザーは「読む」ことから「観る」ことへシフトしました。直感的に価値を理解させる動画戦略こそが、現代のブランディングの最短距離です。
              </p>
            </div>
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">こんな「機会損失」をしていませんか？</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  number: "01",
                  text: "「いいサービスなのに、\nその魅力が静止画では伝わらない」",
                },
                {
                  number: "02",
                  text: "「採用サイトを作っても、\n社内の雰囲気がうまく想像されない」",
                },
                {
                  number: "03",
                  text: "「商品のこだわりがあるのに、\n最後まで説明を読んでもらえない」",
                },
                {
                  number: "04",
                  text: "「広告を出しても、\nユーザーの指を止めることができない」",
                },
              ].map((item) => (
                <div key={item.number} className="bg-white p-10 rounded-[2rem] shadow-sm flex gap-6 items-center">
                  <div className="text-3xl opacity-20 font-bold">{item.number}</div>
                  <p className="font-bold whitespace-pre-line">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="slide bg-[#0a0a0a] text-white overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 leading-tight">
                  「記憶」に残る確率は
                  <br />
                  <span className="text-[#E95464]">テキストの2倍以上。</span>
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  ラーニング・ピラミッドによれば、読書による定着率が10%であるのに対し、視聴覚（動画）による定着率は20%〜30%と言われています。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#E95464]" />
                    <p className="font-bold">メラビアンの法則：視覚情報が55%</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#E95464]" />
                    <p className="font-bold">非言語情報の圧倒的な伝達スピード</p>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="play-button shadow-[0_0_50px_rgba(233,84,100,0.5)]">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute inset-0 border-2 border-[#E95464]/30 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Pal-Video の映像制作メソッド</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "高品質シネマティック",
                  desc: "最新の機材とカラーグレーディング技術で、映画のような質感を追求。ブランドの品格を高めます。",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "SNS・縦型対応",
                  desc: "TikTokやInstagramリールなど、スマホで最も反応が出る「0.1秒の編集」に特化しています。",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "成果への導線設計",
                  desc: "「綺麗」だけで終わらせない。視聴後にユーザーがどう動くべきか、マーケティング視点の構成を組みます。",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-20 h-20 bg-[#E95464]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-[#E95464]">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-[#E95464] rounded-[2.5rem] p-12 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">
                  あらゆるシーンを
                  <br />
                  「資産」に変える
                </h2>
                <ul className="space-y-4 opacity-90">
                  <li>・コンセプトムービー（ブランド認知）</li>
                  <li>・サービス紹介動画（コンバージョン）</li>
                  <li>・採用インタビュー（ミスマッチ防止）</li>
                  <li>・ショート広告（集客ブースト）</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "📸", label: "撮影" },
                  { icon: "✂️", label: "編集" },
                  { icon: "🎨", label: "カラー" },
                  { icon: "🎵", label: "MA/楽曲" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white p-4 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-2xl mb-2">{item.icon}</span>
                    <p className="text-xs font-bold">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Pal-Studio ✕ Pal-Video</h2>
            <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-4">
                <div className="w-full aspect-video bg-gray-200 rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[#E95464]/20 group-hover:bg-[#E95464]/40 transition flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Web Integration</p>
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-xl font-bold mb-4">ホームページに「魂」を宿す</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Pal-Studioで作られた高速なサイトに、Pal-Videoの映像を組み込むことで、滞在時間は劇的に向上し、ブランドへの理解度は最高潮に達します。
                </p>
                <div className="p-4 bg-white rounded-xl border-l-4 border-[#E95464] inline-block">
                  <p className="text-xs font-bold">滞在時間 平均1.5倍〜2倍の向上実績</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-black text-white text-center video-overlay">
          <div className="max-w-3xl mx-auto z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              心を動かす、
              <br />
              <span className="text-[#E95464] italic">視覚の魔法</span>を。
            </h2>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              ありふれた情報の波を、圧倒的な映像美で突破する。
              <br />
              貴社のブランドを、もっと熱狂的なファンに届けませんか？
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/diagnosis"
                className="px-10 py-5 bg-[#E95464] text-white rounded-full font-bold text-xl shadow-xl hover:brightness-110 transition-all hover:scale-105"
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

            <p className="mt-12 text-gray-600 text-sm">© 2026 Palette Lab. All rights reserved.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
