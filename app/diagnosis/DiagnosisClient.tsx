"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCcw } from "lucide-react";

const questions = [
  {
    label: "受け皿",
    q: (
      <>
        ネット上に看板（HP）がない、または情報が古くて
        <span className="font-black">「これじゃ選ばれないな」と感じる。</span>
      </>
    ),
    service: "Pal-Studio",
    path: "/solution/pal_studio",
    color: "#00B7CE",
    advice: "信頼の拠点となるHP制作が必要です。",
  },
  {
    label: "集客",
    q: "ネットからのお客さんが増えず、何をどう改善すればいいか五里霧中だ。",
    service: "Pal-Opt / Ad",
    path: "/solution/pal_opt",
    color: "#F39800",
    advice: "集客導線の設計と運用改善が必要です。",
  },
  {
    label: "費用",
    q: "広告費や維持費などの出費に対して、目に見える利益が返ってきていない。",
    service: "Pal-Ad",
    path: "/solution/pal_ad",
    color: "#F39800",
    advice: "効率を重視した広告運用が必要です。",
  },
  {
    label: "評判",
    q: "ネット上の口コミが少ない、もしくは悪い評価がつくのが怖くて集客に消極的だ。",
    service: "Pal-Trust",
    path: "/solution/pal_trust",
    color: "#F9C11C",
    advice: "口コミ管理と評判の向上施策が必要です。",
  },
  {
    label: "土台",
    q: "公式LINEやマップを使いこなせず、リピーターになるはずの客を逃している自覚がある。",
    service: "Pal-Base",
    path: "/solution/pal_base",
    color: "#8CC63F",
    advice: "地域集客の土台（LINE・GBP）整備が必要です。",
  },
  {
    label: "運用",
    q: (
      <>
        SNS投稿やブログ更新が
        <span className="font-black">「重荷」になっていて、本来の業務を圧迫している。</span>
      </>
    ),
    service: "Pal-Opt",
    path: "/solution/pal_opt",
    color: "#A62183",
    advice: "プロへの運用代行でリソースを確保しましょう。",
  },
  {
    label: "管理",
    q: "顧客データや問い合わせ経路がバラバラで、経営状況を正確に把握できていない。",
    service: "Palette Console",
    path: "/solution/palette_console",
    color: "#111111",
    advice: "データの可視化と一元管理が必要です。",
  },
  {
    label: "未来",
    q: "AI活用には興味があるが、設定の難しさや乗り遅れることへの不安が強い。",
    service: "Palette AI",
    path: "/solution/palette_ai",
    color: "#333333",
    advice: "AIを導入し、意思決定を高速化しましょう。",
  },
] as const;

export default function DiagnosisClient() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const chartRef = useRef<any | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const topItems = useMemo(() => {
    if (!scores.length) return [] as Array<(typeof questions)[number] & { score: number }>;
    return questions
      .map((item, index) => ({ ...item, score: scores[index] ?? 0 }))
      .filter((item) => item.score >= 4)
      .sort((a, b) => b.score - a.score);
  }, [scores]);

  useEffect(() => {
    if (!showResult || !canvasRef.current) return;

    let isMounted = true;

    const renderChart = async () => {
      const { Chart } = await import("chart.js/auto");
      if (!isMounted || !canvasRef.current) return;

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(canvasRef.current, {
        type: "radar",
        data: {
          labels: questions.map((q) => q.label),
          datasets: [
            {
              label: "お悩みの深さ",
              data: scores,
              fill: true,
              backgroundColor: "rgba(0, 183, 206, 0.2)",
              borderColor: "#00B7CE",
              pointBackgroundColor: "#00B7CE",
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            r: {
              min: 0,
              max: 5,
              ticks: { stepSize: 1, display: false },
              grid: { color: "rgba(15, 23, 42, 0.08)" },
              angleLines: { color: "rgba(15, 23, 42, 0.08)" },
            },
          },
          plugins: { legend: { display: false } },
        },
      });
    };

    renderChart();

    return () => {
      isMounted = false;
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [showResult, scores]);

  const handleScore = (score: number) => {
    setScores((prev) => [...prev, score]);
    const nextIdx = currentIdx + 1;
    if (nextIdx < questions.length) {
      setCurrentIdx(nextIdx);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setScores([]);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-slate-900 font-sans overflow-x-hidden">
      <style>{`
        @keyframes float-soft {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .glass {
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
        }
        .mesh-bg {
          background-image:
            radial-gradient(circle at 10% 20%, rgba(0, 183, 206, 0.18) 0%, transparent 40%),
            radial-gradient(circle at 80% 10%, rgba(248, 113, 113, 0.2) 0%, transparent 42%),
            radial-gradient(circle at 70% 80%, rgba(249, 193, 28, 0.18) 0%, transparent 40%),
            radial-gradient(circle at 10% 80%, rgba(139, 92, 246, 0.16) 0%, transparent 45%);
        }
        .orbit {
          animation: float-soft 8s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute top-24 right-10 w-64 h-64 rounded-full bg-white/40 blur-[80px] orbit pointer-events-none" />
      <div className="absolute bottom-16 left-6 w-72 h-72 rounded-full bg-white/50 blur-[90px] orbit pointer-events-none" />

      <main className="relative z-10 px-6 pt-24 pb-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-10"
          >
            <ArrowLeft size={18} />
            <span className="text-xs font-black tracking-[0.2em] uppercase">Back to Home</span>
          </Link>

          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-white text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">
              Palette Business Diagnosis
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-slate-900">
              事業の「今」を可視化する
            </h1>
            <p className="mt-4 text-slate-500 font-medium leading-relaxed">
              8つの質問に答えるだけで、優先課題と最適なサービスを提示します。
            </p>
          </header>

          <section className="glass rounded-[32px] p-8 md:p-12">
            {!showResult && (
              <div className="text-center">
                <div className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-400 mb-4">
                  Step {currentIdx + 1} / {questions.length}
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                  {questions[currentIdx].q}
                </h2>
                <p className="text-sm text-slate-500">1（全くない）〜 5（非常にある）</p>

                <div className="mt-8 grid grid-cols-5 gap-3 sm:gap-4">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <button
                      key={score}
                      type="button"
                      onClick={() => handleScore(score)}
                      className="h-12 sm:h-14 rounded-full border-2 border-white bg-white/80 text-slate-700 font-black text-lg hover:-translate-y-1 hover:border-[#00B7CE] hover:text-[#00B7CE] hover:shadow-lg transition-all"
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showResult && (
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                  診断結果：あなたのビジネス分析
                </h2>

                <div className="mt-8 mx-auto max-w-sm">
                  <canvas ref={canvasRef} />
                </div>

                {topItems.length > 0 ? (
                  <>
                    <div className="mt-8 space-y-4">
                      {topItems.map((item, index) => (
                        <Link
                          key={`${item.label}-${index}`}
                          href={item.path}
                          className="block rounded-2xl p-6 text-white text-left hover:-translate-y-1 transition-transform"
                          style={{ backgroundColor: item.color }}
                        >
                          <small className="text-xs uppercase tracking-[0.2em] text-white/80">
                            あなたに最適なサービス
                          </small>
                          <div className="mt-2 text-2xl font-black">{item.service}</div>
                          <p className="mt-2 text-sm text-white/90">{item.advice}</p>
                        </Link>
                      ))}
                    </div>

                    <p className="mt-6 text-sm font-bold text-slate-700">
                      優先課題：{topItems.map((item) => item.label).join(" / ")}
                    </p>
                  </>
                ) : (
                  <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-left">
                    <p className="text-sm font-bold text-slate-700">
                      今は特別に費用をかける必要はありません。
                    </p>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                      まずは現状を維持しつつ、しばらく様子を見るのがおすすめです。
                    </p>
                  </div>
                )}

                <div className="mt-6 border-t border-slate-200/80 pt-6 text-sm text-slate-500 leading-relaxed">
                  いくつもの課題を整理し、次の一手を明確にすることで、
                  事業全体の動きがぐっとスムーズになります。
                </div>

                <div className="mt-10 rounded-3xl border border-white/80 bg-white/90 p-6 text-left shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-bold text-slate-500">次のアクション</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-900">
                    今の課題、最短ルートで一緒に整理しませんか？
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                    相談内容がまとまっていなくても大丈夫です。状況をヒアリングして、
                    最適なプランを提案します。
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-bold hover:bg-slate-800 transition-colors"
                    >
                      無料で相談する
                    </Link>
                    <button
                      type="button"
                      onClick={handleRestart}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:border-slate-400 transition-colors"
                    >
                      <RefreshCcw size={16} />
                      もう一度診断する
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
