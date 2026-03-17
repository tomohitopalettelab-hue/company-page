"use client";

import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { useEffect } from "react";

const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PalBaseClient() {
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
        .slide {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 2rem;
          scroll-snap-align: start;
        }
        .slide-container {
          scroll-snap-type: y mandatory;
          height: 100vh;
          overflow-y: scroll;
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
        .lime-gradient {
          background: linear-gradient(135deg, #8cc63f, #b4e66d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .slide-inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .slide-container::-webkit-scrollbar {
          display: none;
        }
        .slide-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .base-card {
          background: white;
          border-bottom: 4px solid #8cc63f;
          transition: all 0.3s ease;
        }
        .base-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(140, 198, 63, 0.15);
        }
      `}</style>

      <div className="slide-container">
        <section className="slide bg-[#0a0a0a] relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-96 h-96 bg-[#8CC63F] filter blur-[150px] rounded-full" />
          </div>
          <div className="slide-inner z-10">
            <p className="text-[#8CC63F] font-bold tracking-[0.4em] mb-6 fade-in uppercase">2026 Palette Lab</p>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight fade-in text-white">
              Pal-Base
              <br />
              <span className="lime-gradient italic">地域集客基盤提案</span>
            </h1>
            <p className="text-gray-400 text-xl mb-12 fade-in">「見つけて、繋がる」当たり前を、最強の武器に。</p>
            <div className="w-20 h-1 bg-[#8CC63F] mx-auto fade-in" />
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="slide-inner">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#8CC63F]" />
              <h2 className="text-2xl font-bold tracking-widest uppercase text-[#8CC63F]">The Problem</h2>
            </div>
            <h3 className="text-4xl font-bold mb-10 leading-snug text-gray-800">
              「ザル」で水を掬っていませんか？
              <br />
              出口のない集客は、コストの無駄遣いです。
            </h3>
            <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
              <p>
                SNSを頑張っても、広告を出しても、お客様が最後に辿り着く「Googleマップ」の情報が古かったり、予約や相談がしやすい「公式LINE」への導線がなければ、ユーザーは一瞬で離脱します。
              </p>
              <p>
                ネット集客において、GBP（Googleビジネスプロフィール）は「看板」であり、公式LINEは「接客カウンター」です。Pal-Baseは、この最も重要な「集客の土台」をプロレベルで構築します。
              </p>
            </div>
          </div>
        </section>

        <section className="slide bg-[#8CC63F]">
          <div className="slide-inner text-black">
            <h2 className="text-4xl font-bold mb-12 text-center">最強の「入口」と「出口」をセットで</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "📍",
                  badge: "GATEWAY",
                  title: "Google Business",
                  desc: "「地域名 × 業種」で検索された際、真っ先に表示されるGBPを最適化。正しい情報、魅力的な写真、そして最新の投稿で、来店意欲を最大化させます。",
                  bullets: ["MEOキーワード最適化", "サイテーション（引用）構築", "定期的な最新情報更新"],
                },
                {
                  icon: "💬",
                  badge: "RELATION",
                  title: "Official LINE",
                  desc: "「見つけた」人を「逃さない」仕組み。Palette独自のリッチメニューと自動応答で、24時間365日、ストレスフリーな予約・問い合わせ環境を提供します。",
                  bullets: [
                    "ブランドカラーに合わせたリッチメニュー",
                    "再来店を促すステップ配信",
                    "Pal-Trustとのシームレス連携",
                  ],
                },
              ].map((item) => (
                <div key={item.title} className="bg-white p-10 rounded-3xl shadow-xl base-card">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl">{item.icon}</span>
                    <span className="text-[10px] font-bold py-1 px-3 bg-gray-100 rounded-full">{item.badge}</span>
                  </div>
                  <h4 className="font-bold mb-4 text-2xl italic">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                  <ul className="text-xs text-gray-400 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>・{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="slide-inner grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 w-full h-6 bg-gray-800" />
                <div className="p-4 pt-10">
                  <div className="w-full h-32 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-xs text-gray-400">
                    トーク画面
                  </div>
                  <div className="grid grid-cols-3 gap-1 h-32 absolute bottom-4 left-4 right-4">
                    <div className="bg-[#8CC63F] rounded-l-lg flex flex-col items-center justify-center text-[8px] text-white font-bold p-1 text-center">
                      WEB予約
                    </div>
                    <div className="bg-[#7ab332] flex flex-col items-center justify-center text-[8px] text-white font-bold p-1 text-center">
                      メニュー
                    </div>
                    <div className="bg-[#6c9f2d] rounded-r-lg flex flex-col items-center justify-center text-[8px] text-white font-bold p-1 text-center">
                      アクセス
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8CC63F]/10 rounded-full blur-xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">
                「なんとなく」のLINEを、
                <br />
                「頼れる店員」に変える。
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                ただアカウントがあるだけでは意味がありません。Pal-Baseは、Paletteの色彩設計に基づいた「思わずタップしたくなる」リッチメニューをデザイン。お客様の「今聞きたい」に、デザインとシステムで応えます。
              </p>
              <div className="p-6 bg-lime-50 rounded-2xl border-l-4 border-[#8CC63F]">
                <p className="text-sm font-bold text-[#6c9f2d]">CVR（成約率）が平均25%向上</p>
                <p className="text-xs text-gray-500 mt-1">※既存クライアント様の平均データより算出</p>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-gray-50 text-center">
          <div className="slide-inner">
            <h2 className="text-3xl font-bold mb-16">Pal-Base が繋ぐ、最強の導線</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {[
                { icon: "🔍", title: "見つける", desc: "Googleマップで上位表示" },
                { icon: "🏠", title: "信頼する", desc: "HP・LINE・口コミ" },
                { icon: "✅", title: "繋がる", desc: "LINE予約・リピート" },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={
                    index === 1
                      ? "flex-1 p-8 bg-white rounded-3xl shadow-sm border-2 border-[#8CC63F]"
                      : "flex-1 p-6"
                  }
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-16 text-gray-500 text-sm max-w-2xl mx-auto">
              この「Base」が完成して初めて、他のサービス（広告やSNS運用）の効果が100%発揮されるようになります。
            </p>
          </div>
        </section>

        <section className="slide bg-[#0a0a0a] text-white">
          <div className="slide-inner text-center">
            <h2 className="text-3xl font-bold mb-16 italic uppercase tracking-widest text-[#8CC63F]">The Foundation Effect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
                <p className="text-red-400 text-sm font-bold mb-4 uppercase">Without Base</p>
                <p className="text-gray-400 text-sm mb-6">
                  広告で集客しても、
                  <br />
                  電話が繋がらない・予約が面倒で離脱。
                </p>
                <div className="text-2xl font-bold opacity-30 italic">離脱率: 80%</div>
              </div>
              <div className="bg-[#8CC63F]/10 p-10 rounded-3xl border border-[#8CC63F]/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 bg-[#8CC63F] text-black text-[10px] font-bold uppercase">Optimized</div>
                <p className="text-[#8CC63F] text-sm font-bold mb-4 uppercase">With Pal-Base</p>
                <p className="text-white text-sm mb-6">
                  24時間LINE予約が可能になり、
                  <br />
                  取りこぼしていた夜間の需要を獲得。
                </p>
                <div className="text-5xl font-bold text-[#8CC63F] italic">成約数: 2.5倍</div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-white text-black text-center">
          <div className="slide-inner">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic uppercase tracking-tighter">
              BUILD THE
              <br />
              <span className="text-[#8CC63F]">BASE</span> FIRST.
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              まずは、お客様を迎え入れる「器」を整えましょう。
              <br />
              Pal-Base が、あなたのビジネスの確かな土台を創ります。
            </p>

            <div className="flex flex-col items-center gap-4">
              <Link
                href="/diagnosis"
                className="inline-flex px-8 py-5 bg-[#8CC63F] text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                無料診断
              </Link>
              <Link
                href="/contact"
                className="inline-flex px-8 py-5 bg-black text-white rounded-full font-bold text-xl shadow-xl hover:bg-gray-800 transition-all"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
