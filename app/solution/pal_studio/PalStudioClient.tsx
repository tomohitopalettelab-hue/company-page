"use client";

import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { useEffect, useState } from "react";

const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PalStudioClient() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");

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

  const analyzeSite = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setAnalysis("");

    const systemPrompt = `あなたは『Pal-Studio』のWeb戦略コンサルタントです。
入力されたURLまたは業種に対して、Web 3.0時代の「稼ぐHP」という観点から診断してください：
1. その業種における「表示速度」と「離脱率」の相関（機会損失の予測）
2. モバイルファースト設計に刷新した場合の問い合わせ率向上見込み
3. Pal-Studioを導入してブログや実績を「中の人の言葉」で更新し続けた場合のブランディング効果
を日本語で、構造化して簡潔に回答してください。`;

    const res = await callGemini(`${query} のサイト改善案をシミュレーションしてください。`, systemPrompt);

    setAnalysis(res);
    setLoading(false);
  };

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
          scroll-snap-type: y mandatory;
          height: 100vh;
          overflow-y: scroll;
          scroll-behavior: smooth;
        }
        .slide {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 2rem;
          scroll-snap-align: start;
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
        .turquoise-gradient {
          background: linear-gradient(135deg, #00b7ce, #008aa1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gemini-gradient {
          background: linear-gradient(135deg, #4285f4, #00b7ce, #9b72cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .loading-spinner {
          border: 3px solid rgba(0, 183, 206, 0.3);
          border-radius: 50%;
          border-top: 3px solid #00b7ce;
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
        .slide-container::-webkit-scrollbar {
          display: none;
        }
        .slide-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="slide-container">
        <section className="slide bg-black text-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-[#00B7CE] filter blur-[150px] rounded-full" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00B7CE]/50 filter blur-[120px] rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto z-10">
            <p className="text-[#00B7CE] font-bold tracking-[0.4em] mb-6 fade-in uppercase">2026 Palette Lab</p>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight fade-in text-white">
              Pal-Studio
              <br />
              <span className="turquoise-gradient italic">集客改善提案</span>
            </h1>
            <p className="text-gray-400 text-xl mb-12 fade-in">課題解決の為の「最適解」をお届けする</p>
            <div className="w-20 h-1 bg-[#00B7CE] mx-auto fade-in" />
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#00B7CE]" />
              <h2 className="text-2xl font-bold tracking-widest uppercase text-[#00B7CE]">Vision</h2>
            </div>
            <h3 className="text-4xl font-bold mb-10 leading-snug">
              日本のインターネット利用率は90%を超え、
              <br />
              WEB集客はすでに“当たり前”の時代。
            </h3>
            <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
              <p>
                多くの消費者は来店前にオンラインで情報収集を行い、その約9割が口コミを参考に意思決定をしています。つまり、WEB上での情報発信は、“売上に直結する”重要な要素となっています。
              </p>
              <p>
                一方で、手法は複雑化しており、限られた予算の中で成果を出すためには、“自社にとって正しい戦略”を選ぶ必要があります。しかし、それこそが最も難しいポイントなのです。
              </p>
            </div>
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Web時代の変化</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 mb-4 uppercase">Web 1.0 era</p>
                <h4 className="text-xl font-bold mb-4">一方向性の時代</h4>
                <p className="text-sm text-gray-500">サイト・メール<br />ネット閲覧中心</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-md border-t-4 border-[#00B7CE]">
                <p className="text-xs font-bold text-[#00B7CE] mb-4 uppercase">Web 2.0 era</p>
                <h4 className="text-xl font-bold mb-4">双方向性の時代</h4>
                <p className="text-sm text-gray-500">SNS・動画<br />スマホの普及</p>
              </div>
              <div className="bg-[#00B7CE] p-8 rounded-3xl shadow-xl text-white">
                <p className="text-xs font-bold text-white/70 mb-4 uppercase">Web 3.0 era</p>
                <h4 className="text-xl font-bold mb-4">分散・自動化の時代</h4>
                <p className="text-sm text-white/90">IoT・AI・ブロックチェーン<br />「稼ぐ力」の自動化</p>
              </div>
            </div>
            <p className="mt-12 text-center font-bold text-[#00B7CE]">WEB集客はより複雑化・高速化している</p>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold border-l-8 border-[#00B7CE] pl-6">HPの役割の変化</h2>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr className="border-b border-gray-100">
                    <th className="p-6 font-bold text-gray-400">比較項目</th>
                    <th className="p-6 font-bold">~2010年以前</th>
                    <th className="p-6 font-bold text-[#00B7CE]">2026年 現代</th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  <tr className="border-b border-gray-50">
                    <td className="p-6 font-bold">存在意義</td>
                    <td className="p-6">「名刺代わり」</td>
                    <td className="p-6 font-bold">「信頼のインフラ」</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="p-6 font-bold">メインデバイス</td>
                    <td className="p-6">PC</td>
                    <td className="p-6 font-bold">スマホ（縦長・即断）</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="p-6 font-bold">判断基準</td>
                    <td className="p-6">情報の網羅性</td>
                    <td className="p-6 font-bold">表示の速さと透明性</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="p-6 font-bold">許容時間</td>
                    <td className="p-6">3秒以上</td>
                    <td className="p-6 font-bold text-[#00B7CE]">1秒以内（即離脱）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="slide bg-[#00B7CE] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
              飾るHPではなく、
              <br />
              <span className="text-black">「稼ぐHP」</span>が必要
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/10 p-8 rounded-3xl border border-white/20">
                <h4 className="font-bold mb-4 text-lg">瞬時の信頼</h4>
                <p className="text-sm opacity-90 leading-relaxed">0.8秒でブランドを伝え、ユーザーの離脱を食い止める表示速度。</p>
              </div>
              <div className="bg-black/10 p-8 rounded-3xl border border-white/20">
                <h4 className="font-bold mb-4 text-lg">継続的な改善</h4>
                <p className="text-sm opacity-90 leading-relaxed">作って終わりにせず、AIを活用して常にコンテンツを最適化。</p>
              </div>
              <div className="bg-black/10 p-8 rounded-3xl border border-white/20">
                <h4 className="font-bold mb-4 text-lg">24h営業マン</h4>
                <p className="text-sm opacity-90 leading-relaxed">適切な導線設計により、寝ている間も問い合わせを獲り続ける。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gemini-gradient">AI Analysis for Strategy</h2>
              <p className="text-gray-600">Gemini AIが現在のウェブサイトの「稼ぐ力」を客観的に診断します。</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-[2.5rem] shadow-inner">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                  type="text"
                  placeholder="分析するサイトURLを入力"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B7CE]"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <button
                  onClick={analyzeSite}
                  className="px-8 py-4 bg-[#00B7CE] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:brightness-110 transition"
                  disabled={loading}
                >
                  <span>診断を実行 ✨</span>
                  <div className={`loading-spinner ${loading ? "" : "hidden"}`} />
                </button>
              </div>

              <div className={`${analysis ? "" : "hidden"} fade-in bg-white p-8 rounded-2xl shadow-sm border border-gray-100`}>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#00B7CE]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  改善シミュレーション
                </h4>
                <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{analysis}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-[#00B7CE]/10 text-[#00B7CE] text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Next-Gen Performance</span>
              <h2 className="text-4xl font-bold mb-8">スピード×品質の追求</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                無駄を省いた制作フローでビジネスの機会損失を最小化。最新のトレンドを押さえたデザインと、スマホ最適化は「標準装備」です。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-[#00B7CE]/10 rounded-full flex items-center justify-center text-[#00B7CE] font-bold">🚀</div>
                  <div>
                    <h5 className="font-bold text-sm">Vercelによる爆速表示</h5>
                    <p className="text-xs text-gray-400">離脱率を極限まで低減します</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-[#00B7CE]/10 rounded-full flex items-center justify-center text-[#00B7CE] font-bold">🔍</div>
                  <div>
                    <h5 className="font-bold text-sm">SEO最適化構造</h5>
                    <p className="text-xs text-gray-400">検索エンジンに好まれる最新のマークアップ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-900 rounded-[3rem] p-4 shadow-2xl relative overflow-hidden">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
                  <div className="p-6 bg-[#00B7CE] text-white flex justify-between items-center">
                    <span className="font-bold italic text-lg">PAL STUDIO.</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <div className="w-2 h-2 bg-white/50 rounded-full" />
                    </div>
                  </div>
                  <div className="flex-1 p-8 space-y-4">
                    <div className="w-3/4 h-3 bg-gray-100 rounded" />
                    <div className="w-full h-2 bg-gray-50 rounded" />
                    <div className="w-full h-2 bg-gray-50 rounded" />
                    <div className="mt-8 aspect-video bg-[#00B7CE]/5 rounded-2xl flex items-center justify-center border border-[#00B7CE]/10">
                      <svg className="w-12 h-12 text-[#00B7CE]/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                <div className="text-4xl font-bold text-[#00B7CE]">0.8s</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">First Paint</div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-gray-900 p-8 rounded-[3rem] shadow-2xl">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="space-y-6">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-xs text-gray-500 mb-2 font-bold uppercase">Topic Title</p>
                  <div className="h-6 bg-white/10 rounded-lg w-full" />
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-xs text-gray-500 mb-2 font-bold uppercase">Main Text</p>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/10 rounded w-full" />
                    <div className="h-3 bg-white/10 rounded w-5/6" />
                    <div className="h-3 bg-white/10 rounded w-2/3" />
                  </div>
                </div>
                <button className="w-full py-4 bg-[#00B7CE] text-white rounded-2xl font-bold shadow-lg shadow-[#00B7CE]/40 hover:scale-[1.02] transition">投稿を公開する</button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-8">「運用」が止まらない<br />圧倒的な管理画面</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                専門知識は不要。スマホやPCから、SNSを更新するような手軽さで情報を発信。24時間365日、鮮度の高い情報をユーザーに届けます。
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-[#00B7CE] font-bold">●</span>
                  <p className="text-sm font-bold">直感的なエディタ</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#00B7CE] font-bold">●</span>
                  <p className="text-sm font-bold">画像一括最適化（WebP対応）</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#00B7CE] font-bold">●</span>
                  <p className="text-sm font-bold">AIによる文章作成アシスト</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-black text-white text-center">
          <div className="max-w-3xl mx-auto z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              飾るHPから、
              <br />
              <span className="text-[#00B7CE] italic">「稼ぐHP」</span>へ。
            </h2>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              ビジネスの機会損失をゼロに。
              <br />
              まずは無料の診断レポートで、貴社のサイトの「速度」と「稼ぐ力」を可視化しませんか？
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/diagnosis"
                className="px-10 py-5 bg-[#00B7CE] text-white rounded-full font-bold text-xl shadow-xl hover:brightness-110 transition-all hover:scale-105"
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
