"use client";

import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { useEffect } from "react";

const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PaletteAiClient() {
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
        .white-gradient {
          background: linear-gradient(135deg, #000000, #666666);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .slide-container::-webkit-scrollbar {
          display: none;
        }
        .slide-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .neural-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.05) 1px, transparent 0);
          background-size: 40px 40px;
          opacity: 0.5;
        }
        .chat-bubble {
          padding: 1rem 1.5rem;
          border-radius: 1.5rem;
          max-width: 80%;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .chat-ai {
          background: white;
          color: black;
          border: 1px solid #eee;
          align-self: flex-start;
        }
        .chat-user {
          background: #000;
          color: white;
          align-self: flex-end;
        }
      `}</style>

      <div className="slide-container">
        <section className="slide bg-white text-center overflow-hidden">
          <div className="neural-bg" />
          <div className="max-w-4xl mx-auto z-10">
            <p className="text-gray-400 font-bold tracking-[0.4em] mb-6 fade-in uppercase">2026 Palette Lab</p>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight fade-in text-black">
              Palette AI
              <br />
              <span className="white-gradient italic">統合知能の覚醒</span>
            </h1>
            <p className="text-gray-500 text-xl mb-12 fade-in">すべての Palette サービスをつなぐ、ビジネスの「脳」</p>
            <div className="w-20 h-px bg-black mx-auto fade-in" />
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-black" />
              <h2 className="text-2xl font-bold tracking-widest uppercase">The Brain</h2>
            </div>
            <h3 className="text-4xl font-bold mb-10 leading-snug">
              分析も、相談も、実行も。
              <br />
              すべてはチャットひとつで完結する。
            </h3>
            <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
              <p>
                Palette AI は、あなたが利用している全てのサービス（Trust, Studio, Opt, Video）からデータを統合し、学習する唯一の存在です。
              </p>
              <p>
                難しい管理画面の操作はもう必要ありません。専属のコンサルタントと話すようにチャットを送るだけで、AIが現状を分析し、次の打ち手を提示します。
              </p>
            </div>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-16">すべてのサービスを「点」から「円」へ</h2>
            <div className="relative py-20 flex items-center justify-center">
              <div className="w-48 h-48 bg-white shadow-[0_0_80px_rgba(0,0,0,0.1)] rounded-full flex items-center justify-center z-10 border border-gray-100">
                <span className="font-bold text-2xl tracking-tighter">Palette AI</span>
              </div>

              <div className="absolute w-full h-full flex items-center justify-center">
                <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-gray-100 rounded-full flex items-center justify-center">
                  <div className="absolute top-0 px-4 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold shadow-sm">
                    Pal-Trust (口コミ)
                  </div>
                  <div className="absolute bottom-0 px-4 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold shadow-sm">
                    Pal-Video (動画)
                  </div>
                  <div className="absolute left-0 px-4 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold shadow-sm">
                    Pal-Studio (制作)
                  </div>
                  <div className="absolute right-0 px-4 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold shadow-sm">
                    Pal-Opt (運用)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">対話から始まる、新しいビジネス運用</h2>
            <div className="glass-card rounded-[3rem] overflow-hidden shadow-2xl flex flex-col h-[500px]">
              <div className="p-6 border-b border-gray-100 bg-white/50 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="font-bold text-sm">Palette AI Assistant</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-200 rounded-full" />
                  <div className="w-2 h-2 bg-gray-200 rounded-full" />
                </div>
              </div>
              <div className="flex-1 p-8 overflow-y-auto flex flex-col gap-4">
                <div className="chat-bubble chat-user">今月の集客状況を教えて。</div>
                <div className="chat-bubble chat-ai">
                  今月はPal-Studioのサイト閲覧数が前月比120%です。特にPal-Videoで制作したTOP動画が平均視聴時間2分を記録しており、離脱率が大幅に下がっています。
                </div>
                <div className="chat-bubble chat-user">次に何をすればいい？</div>
                <div className="chat-bubble chat-ai">
                  Pal-Trustで高評価の口コミが3件増えました。これを活用してPal-Optでブログを更新し、MEOの信頼性を高めることをお勧めします。自動生成しましょうか？
                </div>
              </div>
              <div className="p-6 bg-white flex gap-4">
                <div className="flex-1 bg-gray-100 rounded-full px-6 py-3 text-sm text-gray-400">メッセージを入力...</div>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">↑</div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "ヒアリング・制作アシスト",
                  desc: "サイト制作時のヒアリングをAIが代行。あなたの想いを汲み取り、Pal-Studioへ反映します。",
                },
                {
                  title: "契約・ステータス管理",
                  desc: "「今のプランは何だっけ？」そんな疑問も即座に回答。面倒な書類探しから解放されます。",
                },
                {
                  title: "マーケティング・ラボ",
                  desc: "過去の膨大な実績データを元に、あなたの業種に最適な集客プランをオーダーメイドで構築。",
                },
              ].map((item) => (
                <div key={item.title} className="p-10 border border-gray-100 rounded-[2.5rem] hover:bg-gray-50 transition">
                  <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="slide bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              孤立したデータに、
              <br />
              <span className="text-gray-400">知性を。</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-16">
              制作して終わり、投稿して終わり、評価されて終わり。
              <br />
              それらのデータを Palette AI が一つの生命体としてつなぎ合わせ、
              <br />
              眠っていたポテンシャルを「確かな売上」へと変換します。
            </p>
            <div className="flex justify-center gap-12">
              {[
                {
                  value: "98.5%",
                  label: "AI Response Accuracy",
                },
                {
                  value: "24/7",
                  label: "Support Availability",
                },
                {
                  value: "∞",
                  label: "Data Integration",
                },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl font-bold mb-2">{item.value}</div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="slide bg-white text-center">
          <div className="max-w-3xl mx-auto z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              あなたのビジネスに、
              <br />
              <span className="white-gradient italic">最高の知能</span>を。
            </h2>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              Palette AI は、ただのツールではありません。
              <br />
              あなたのビジネスを誰よりも理解する、最強のパートナーです。
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/diagnosis"
                className="px-10 py-5 bg-black text-white rounded-full font-bold text-xl shadow-xl hover:bg-gray-800 transition-all hover:scale-105"
              >
                無料診断
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 bg-white text-black border border-black rounded-full font-bold text-xl shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
              >
                お問い合わせ
              </Link>
            </div>

            <p className="mt-12 text-gray-300 text-sm">© 2026 Palette Lab. All Intelligence Integrated.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
