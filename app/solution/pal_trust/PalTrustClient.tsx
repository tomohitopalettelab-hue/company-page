"use client";

import Image from "next/image";
import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { useState } from "react";
import { Instagram, MessageCircle, X } from "lucide-react";
import { solutionServices } from "../data";

const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PalTrustClient() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");

  const callGemini = async (prompt: string, systemInstruction = "") => {
    const apiKey = "";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: systemInstruction }] },
    };

    for (let i = 0; i < 5; i += 1) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "分析に失敗しました。";
      } catch (_e) {
        await new Promise((resolve) => setTimeout(resolve, Math.pow(2, i) * 1000));
      }
    }
    return "リトライ上限に達しました。";
  };

  const analyzeBusiness = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setAnalysis("");

    const systemPrompt = `あなたは『Pal-Trust』の集客コンサルタントです。提案資料に基づき、Googleマップの口コミ対策の重要性を説いてください。
入力された店名やエリアに対して：
1. その業種における口コミの重要性（一言）
2. 口コミ件数が30件増えた場合の問い合わせ数予測シミュレーション
3. Pal-Trustを導入した場合に、AIがどのような口コミ投稿案を作成するかのサンプル（1件）
を日本語で、構造化して回答してください。`;

    const res = await callGemini(
      `${query} の集客状況を分析し、Pal-Trustの導入効果をシミュレーションしてください。`,
      systemPrompt
    );

    setAnalysis(res);
    setLoading(false);
  };

  return (
    <main className={`${notoSans.className} bg-gray-100 text-gray-900`}>
      <style jsx global>{`
        html,
        body {
          font-family: "Noto Sans JP", sans-serif;
          overflow-x: hidden;
          background: #f3f4f6;
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
          scroll-snap-align: start;
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
          scroll-snap-type: y mandatory;
          height: 100vh;
          overflow-y: scroll;
          overscroll-behavior: auto;
          max-width: 64rem;
          margin: 0 auto;
        }
        .container::-webkit-scrollbar {
          display: none;
        }
        .container {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
              <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight fade-in text-white">
                Pal-Trust
                <br />
                <span className="gold-gradient italic">集客改善提案</span>
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

        <section className="slide bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gemini-gradient">AI Market Analysis</h2>
              <p className="text-gray-600">Gemini AIがGoogleマップ上の現状と、最適な口コミ対策を分析します。</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-[2.5rem]">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                  type="text"
                  placeholder="店名やエリアを入力（例：大阪市 カフェ）"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <button
                  onClick={analyzeBusiness}
                  className="px-8 py-4 bg-black text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition"
                  disabled={loading}
                >
                  <span>現状を分析する</span>
                  <div className={`loading-spinner ${loading ? "" : "hidden"}`} />
                </button>
              </div>

              <div className={`${analysis ? "" : "hidden"} fade-in bg-white p-8 rounded-2xl shadow-sm border border-gray-100`}>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L14.85 8.65L22 9.24L16.5 13.97L18.18 21L12 17.27L5.82 21L7.5 13.97L2 9.24L9.15 8.65L12 2Z" />
                  </svg>
                  改善シミュレーション
                </h4>
                <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{analysis}</div>
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
                href="/contact"
                className="px-10 py-5 bg-[#F9C11C] text-black rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
              >
                無料で詳細資料をダウンロード
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 bg-black text-white rounded-full font-bold text-xl shadow-xl hover:bg-gray-800 transition-all"
              >
                オンライン個別相談を予約
              </Link>
            </div>
          </div>
        </section>

      </div>

      <footer className="bg-white border-t border-slate-100 pt-32 pb-12 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
              <div className="lg:col-span-2">
                <Image
                  src="/palette-lab-logo.png"
                  alt="Palette Lab"
                  width={400}
                  height={120}
                  className="mb-8 h-12 w-auto object-contain"
                />
                <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-8">
                  想いを色付け、価値を再定義する。<br />
                  兵庫県尼崎市を拠点に、全国のプロフェッショナルのデジタル活用を支援します。
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/palette_lab_marketing/"
                    target="_blank"
                    className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all"
                    rel="noreferrer"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://lin.ee/H0msODk"
                    target="_blank"
                    className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-green-500 hover:bg-green-50 transition-all"
                    rel="noreferrer"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h5 className="text-xs font-black tracking-widest uppercase text-slate-900 mb-8">Solutions</h5>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-bold text-slate-400">
                  {solutionServices.map((service) => (
                    <li key={service.slug}>
                      <Link href={`/solution/${service.slug}`} className="hover:text-blue-600 transition-colors">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-black tracking-widest uppercase text-slate-900 mb-8">Company</h5>
                <ul className="space-y-4 text-sm font-bold text-slate-400">
                  <li>
                    <button
                      onClick={() => {
                        const modal = document.getElementById("tokusho-modal");
                        if (modal) modal.style.display = "flex";
                      }}
                      className="hover:text-blue-600 transition-colors text-left"
                    >
                      特定商取引法
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        const modal = document.getElementById("privacy-modal");
                        if (modal) modal.style.display = "flex";
                      }}
                      className="hover:text-blue-600 transition-colors text-left"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-12 border-t border-slate-50">
              <p className="text-[10px] font-black tracking-widest text-slate-300 uppercase">© 2026 Palette Lab. All rights reserved.</p>
            </div>
          </div>

          <div id="tokusho-modal" className="fixed inset-0 z-[300] hidden items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
            <div className="bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[40px] p-8 md:p-12 relative shadow-2xl">
              <button
                onClick={() => {
                  const modal = document.getElementById("tokusho-modal");
                  if (modal) modal.style.display = "none";
                }}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-black mb-10 border-b border-slate-100 pb-6">特定商取引法に基づく表記</h3>

              <div className="space-y-10 text-[15px] text-slate-600">
                <section>
                  <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase mb-2">事業者名</p>
                  <p className="font-medium text-slate-700">Palette Lab</p>
                </section>

                <section>
                  <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase mb-2">運営責任者</p>
                  <p className="font-medium text-slate-700">森重 澄</p>
                </section>

                <section>
                  <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase mb-2">所在地</p>
                  <p className="font-medium text-slate-700 leading-relaxed">
                    〒661-0972<br />
                    兵庫県尼崎市小中島3-1-7
                  </p>
                </section>

                <section>
                  <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase mb-2">電話番号</p>
                  <p className="font-medium text-slate-700">070-2667-5457</p>
                  <p className="text-xs text-slate-400 mt-1">※お問い合わせはメール、またはLINE公式アカウントよりお願いいたします。</p>
                </section>

                <section>
                  <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase mb-2">メールアドレス</p>
                  <p className="font-medium text-slate-700">palette.lab.digital@gmail.com</p>
                </section>

                <section>
                  <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase mb-2">販売価格</p>
                  <p className="font-medium text-slate-700">
                    5,000円〜<br />
                    ※各プロジェクトごとの個別見積もりに準じます。詳細はサービス紹介ページまたはお見積り書をご確認ください。
                  </p>
                </section>

                <section>
                  <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase mb-2">代金の支払い時期・方法</p>
                  <p className="font-medium text-slate-700 mb-2">【支払い方法】</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>銀行振込</li>
                    <li>クレジットカード決済（Stripe経由）</li>
                  </ul>
                  <p className="font-medium text-slate-700 mb-2">【支払い時期】</p>
                  <p className="font-medium text-slate-700">原則として、契約締結後、請求書発行から14日以内にお支払いいただきます。なお、継続サービスの場合は各月25日までのお支払いとなります。</p>
                </section>

                <section>
                  <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase mb-2">商品代金以外に必要な費用</p>
                  <p className="font-medium text-slate-700">
                    ・振込手数料（銀行振込の場合）<br />
                    ・インターネット接続料金、通信料金（お客様のご負担となります）
                  </p>
                </section>

                <section>
                  <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase mb-2">役務の提供時期</p>
                  <p className="font-medium text-slate-700">
                    お支払い確認後、打ち合わせにて決定したスケジュールに基づき提供を開始いたします。
                  </p>
                </section>

                <section className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                  <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase mb-3 text-center">キャンセル・返品について</p>
                  <p className="font-medium text-slate-700 leading-relaxed italic text-sm">
                    サービスの性質上、提供開始後のお客様都合による返品・交換・キャンセルはお受けできません。制作物の不具合に関しては、納品後30日以内であれば無償で修正対応をいたします。また、契約解除に関する詳細は、個別契約書の定めに従うものとします。
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div id="privacy-modal" className="fixed inset-0 z-[300] hidden items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
            <div className="bg-white w-full max-w-2xl rounded-[40px] p-10 relative">
              <button
                onClick={() => {
                  const modal = document.getElementById("privacy-modal");
                  if (modal) modal.style.display = "none";
                }}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-black mb-8 border-b border-slate-100 pb-4">Privacy Policy</h3>
              <div className="text-sm text-slate-600 leading-relaxed">
                <p>Palette Lab.（以下「当社」）は、提供するサービスにおける個人情報の取扱いについて適切に保護し、管理いたします。収集した情報はサービスの提供、改善、およびお問い合わせ対応の目的にのみ使用いたします。</p>
              </div>
            </div>
          </div>
      </footer>
    </main>
  );
}
