"use client";

import Image from "next/image";
import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { Instagram, MessageCircle, X } from "lucide-react";
import { solutionServices } from "../data";

const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PalTrustClient() {

  return (
    <main className={`${notoSans.className} bg-gray-100 text-gray-900 w-full`}>
      <style jsx global>{`
        html,
        body {
          font-family: "Noto Sans JP", sans-serif;
          overflow-x: hidden;
          background: #f3f4f6;
          width: 100%;
        }
        :root {
          --nav-offset: 88px;
        }
        .slide {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 2rem;
        }
        .hero-slide {
          padding: 0 1rem 2rem;
        }
        .hero-inner {
          position: relative;
          max-width: 64rem;
          margin: 0 auto;
          padding: calc(4rem + var(--nav-offset)) 1.5rem 3rem;
        }
        .hero-frame {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          border: 1px solid rgba(249, 193, 28, 0.3);
          border-radius: 32px;
          pointer-events: none;
        }
        .container {
          width: 100%;
          max-width: none;
          margin: 0;
          scroll-behavior: smooth;
        }
        @media (min-width: 768px) {
          .container {
            scroll-snap-type: y mandatory;
            height: 100vh;
            overflow-y: scroll;
          }
          .slide {
            scroll-snap-align: start;
          }
          .container::-webkit-scrollbar {
            display: none;
          }
          .container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
        .fade-in {
          opacity: 1;
          animation: none;
        }
        .gold-gradient {
          background: linear-gradient(135deg, #f9c11c, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gemini-gradient {
          background: linear-gradient(135deg, #4285f4, #9b72cb, #d96570);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .loading-spinner {
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 3px solid #000;
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

      <div className="container bg-gray-100">
        <section className="slide hero-slide bg-[#0a0a0a] relative overflow-hidden text-center">
          <div className="hero-inner">
            <div className="hero-frame">
              <div className="absolute top-10 left-10 w-96 h-96 bg-[#F9C11C] filter blur-[150px] rounded-full" />
            </div>
            <div className="relative z-10">
              <p className="text-[#F9C11C] font-bold tracking-[0.4em] mb-6 fade-in uppercase">2026 Palette Lab</p>
              <h1 className="hero-title text-5xl md:text-8xl font-bold mb-8 fade-in text-white">
                Pal-Trust
                <br />
                <span className="gold-gradient italic">集客改善&nbsp;</span>
              </h1>
              <p className="text-gray-400 text-xl mb-12 fade-in">課題解決の為の「最適解」をお届けする</p>
              <div className="w-20 h-1 bg-[#F9C11C] mx-auto fade-in" />
            </div>
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 leading-tight">消費者の約9割が<br />「口コミ」を参考に意思決定する</h2>
              <p className="text-gray-600 mb-6">
                スマートフォン普及率は90%を超え、来店前検索の中心はGoogle検索・Googleマップへ移行しました。
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#F9C11C]">
                  <p className="text-sm font-bold">綺麗なHPよりも「第三者の評価」</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#F9C11C]">
                  <p className="text-sm font-bold">情報量が増えた分、不信感を持つユーザーが増加</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">User Journey</p>
                <div className="flex flex-col gap-4 text-sm font-bold">
                  <div className="p-3 bg-gray-100 rounded-lg">Google検索</div>
                  <div className="p-3 bg-gray-100 rounded-lg flex items-center justify-between">
                    GBP閲覧 <span className="text-[#F9C11C]">★ ★ ★ ★ ★</span>
                  </div>
                  <div className="p-3 bg-[#F9C11C] text-white rounded-lg text-center animate-pulse">口コミ確認</div>
                  <div className="p-3 bg-gray-100 rounded-lg">HP閲覧</div>
                  <div className="p-3 bg-black text-white rounded-lg text-center">問い合わせ</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-[#F9C11C]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-black text-center">Pal-Trust 独自の循環モデル</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold mb-6">01</div>
                <h4 className="font-bold mb-4 text-xl">不満の早期発見</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  アンケート回答で「不満」があった場合、Googleマップへ誘導せず、その場で社内共有。炎上を未然に防ぎます。
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold mb-6">02</div>
                <h4 className="font-bold mb-4 text-xl">高評価の口コミ誘導</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  満足度の高いお客様にのみ、Googleマップの投稿画面へダイレクトに誘導。効率的に★4~5を蓄積します。
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold mb-6">03</div>
                <h4 className="font-bold mb-4 text-xl">AI文章生成機能</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  「何を書けばいいかわからない」を解決。Gemini AIがお客様に代わって魅力的な投稿案を数秒で作成。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden aspect-[9/16] relative">
                  <div className="p-6 bg-[#F9C11C] text-black font-bold">お客様アンケート</div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-100 rounded w-3/4" />
                    <div className="h-4 bg-gray-100 rounded w-1/2" />
                    <div className="grid grid-cols-5 gap-2 pt-4">
                      <div className="h-10 border-2 border-gray-100 rounded flex items-center justify-center">1</div>
                      <div className="h-10 border-2 border-gray-100 rounded flex items-center justify-center">2</div>
                      <div className="h-10 border-2 border-gray-100 rounded flex items-center justify-center">3</div>
                      <div className="h-10 border-2 border-gray-100 rounded flex items-center justify-center font-bold bg-[#F9C11C] border-[#F9C11C]">4</div>
                      <div className="h-10 border-2 border-gray-100 rounded flex items-center justify-center font-bold bg-[#F9C11C] border-[#F9C11C]">5</div>
                    </div>
                    <div className="mt-8 p-4 bg-blue-50 text-blue-700 text-xs rounded-xl italic">
                      AI: 「素晴らしい体験でした！特に接客が丁寧で...」
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">お客様に合わせた<br />柔軟なテーマ設定</h2>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">🎨</div>
                  <div>
                    <h5 className="font-bold">選べる4つのテーマ</h5>
                    <p className="text-sm text-gray-500">シンプル、フェミニン、ダーク、ポップから選択可能</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">📊</div>
                  <div>
                    <h5 className="font-bold">リアルタイム管理画面</h5>
                    <p className="text-sm text-gray-500">アンケート結果や口コミ遷移率をいつでも確認</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">💬</div>
                  <div>
                    <h5 className="font-bold">質問項目の自由設定</h5>
                    <p className="text-sm text-gray-500">改善に直結する生の声を集めることができます</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="slide bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-16">導入実績</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <p className="text-[#F9C11C] text-sm font-bold mb-2">学習塾（宮崎県）</p>
                <div className="flex justify-around items-end mt-6">
                  <div>
                    <div className="text-xs text-gray-500">導入前</div>
                    <div className="text-2xl font-bold">0件</div>
                  </div>
                  <div className="text-[#F9C11C] text-2xl">→</div>
                  <div>
                    <div className="text-xs text-[#F9C11C]">導入後</div>
                    <div className="text-5xl font-bold">36件</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <p className="text-[#F9C11C] text-sm font-bold mb-2">美容室（福岡県）</p>
                <div className="flex justify-around items-end mt-6">
                  <div>
                    <div className="text-xs text-gray-500">導入前</div>
                    <div className="text-2xl font-bold">12件</div>
                  </div>
                  <div className="text-[#F9C11C] text-2xl">→</div>
                  <div>
                    <div className="text-xs text-[#F9C11C]">導入後</div>
                    <div className="text-5xl font-bold">150件</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-12 text-gray-500">その他、飲食店・クリニック・リフォーム業など多数の改善実績</p>
          </div>
        </section>

        <section className="slide bg-white text-black text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">「信頼」を、<br />最強の集客武器に。</h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              口コミは、一度積み上がれば消えない資産になります。<br />
              まずは無料の診断レポートで、貴社の現在地を確認しませんか？
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="/diagnosis"
                className="px-10 py-5 bg-[#F9C11C] text-black rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
              >
                無料診断
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 bg-black text-white rounded-full font-bold text-xl shadow-xl hover:bg-gray-800 transition-all"
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
