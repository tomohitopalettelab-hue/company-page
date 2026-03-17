"use client";

import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { useEffect } from "react";

const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PalAdClient() {
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
        .orange-gradient {
          background: linear-gradient(135deg, #f39800, #ffb533);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .slide-inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .ui-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <div className="slide-container">
        <section className="slide bg-[#0a0a0a] relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-[#F39800] filter blur-[150px] rounded-full" />
          </div>
          <div className="slide-inner z-10">
            <p className="text-[#F39800] font-bold tracking-[0.4em] mb-6 fade-in uppercase">2026 Palette Lab</p>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight fade-in text-white">
              Pal-Ad
              <br />
              <span className="orange-gradient italic">集客加速提案</span>
            </h1>
            <p className="text-gray-400 text-xl mb-12 fade-in">広告を、もっと「自由」で「透明」な武器へ</p>
            <div className="w-20 h-1 bg-[#F39800] mx-auto fade-in" />
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="slide-inner">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#F39800]" />
              <h2 className="text-2xl font-bold tracking-widest uppercase text-[#F39800]">Vision</h2>
            </div>
            <h3 className="text-4xl font-bold mb-10 leading-snug">
              「設定がややこしい」「業者が不透明」
              <br />
              そんな広告の壁を、テクノロジーで破壊する。
            </h3>
            <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
              <p>
                WEBマーケティングにおいて、広告は最も即効性のある施策です。しかし、多くのオーナー様が「設定の複雑さ」や「手数料の不透明さ」から、その恩恵を十分に受けられていません。
              </p>
              <p>
                Pal-Adは、誰もが直感的に、好きなメディアへ、好きな予算で広告を出せる「セルフ配信プラットフォーム」です。広告を、プロに任せる特別なものではなく、日常の道具へと変えます。
              </p>
            </div>
          </div>
        </section>

        <section className="slide bg-[#F39800]">
          <div className="slide-inner text-black">
            <h2 className="text-4xl font-bold mb-12 text-center">Pal-Ad が選ばれる理由</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📱",
                  title: "超・直感操作",
                  desc: "媒体ごとの入稿規定を覚える必要はありません。画像と文章を入れるだけで、Google, SNSに自動でリサイズ配信されます。",
                },
                {
                  icon: "💎",
                  title: "圧倒的な透明性",
                  desc: "代理店手数料というブラックボックスを排除。システム利用料と「純広告費」が明確に分かれているので、納得感のある運用が可能です。",
                },
                {
                  icon: "🔗",
                  title: "Video連携で加速",
                  desc: "Pal-Videoで制作した洗練された動画を、1タップでインポート。動画広告の高いクリック率を即座に手に入れられます。",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h4 className="font-bold mb-4 text-xl italic">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="slide bg-white">
          <div className="slide-inner grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#E95464] font-bold text-xs tracking-widest uppercase mb-4 block">Creative Synergy</span>
              <h2 className="text-3xl font-bold mb-8">
                動画を作って、
                <br />
                そのまま広告へ。
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                「広告用の素材がない」という悩みはもうありません。Pal-Videoでブランドの世界観を表現した動画を作成したら、Pal-Adから配信先を選ぶだけ。クリエイティブ制作から配信まで、Palette内で完結します。
              </p>
              <div className="flex items-center gap-4 text-[#F39800] font-bold">
                <div className="w-10 h-10 rounded-full bg-[#E95464] flex items-center justify-center text-white">V</div>
                <span>+</span>
                <div className="w-10 h-10 rounded-full bg-[#F39800] flex items-center justify-center text-white">A</div>
                <span className="text-sm">最速のプロモーション導線</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-4 border-gray-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E95464] rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-xs font-bold opacity-60 uppercase tracking-tighter">Importing from Pal-Video...</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <p className="text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-widest">Ad Performance</p>
                <p className="text-2xl font-bold text-[#F39800]">
                  +350% <span className="text-xs text-gray-400">CTR</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-gray-50">
          <div className="slide-inner grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
                <h4 className="text-white/50 text-[10px] font-bold tracking-widest mb-4 uppercase">Console View / AD-STATS</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-white text-xs">Total Reach</span>
                    <span className="text-[#F39800] text-3xl font-bold italic">24,500</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-[#F39800]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <p className="text-[10px] text-gray-500">CPC</p>
                      <p className="text-white font-bold">¥45</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <p className="text-[10px] text-gray-500">CTR</p>
                      <p className="text-white font-bold">2.4%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-8 text-right md:text-left text-gray-900">
                データの透明性を、
                <br />
                あなたの手元に。
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-right md:text-left">
                業者の報告書を待つ時代は終わりました。広告の反応は、Palette Consoleへ即座に同期。「どの広告が一番売上に繋がったか」を、リアルタイムで自分の目で確認できます。
              </p>
              <div className="p-4 bg-white border-r-4 md:border-r-0 md:border-l-4 border-[#F39800] rounded-xl shadow-sm">
                <p className="text-xs font-bold text-center md:text-left">Console連携により、集客の「今」を完全可視化</p>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-gray-900 text-white">
          <div className="slide-inner text-center">
            <h2 className="text-3xl font-bold mb-16 italic uppercase tracking-widest">Acceleration Result</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
                <p className="text-[#F39800] text-sm font-bold mb-4 uppercase">Before</p>
                <p className="text-gray-400 text-sm mb-6">
                  業者任せで内容が見えず、
                  <br />
                  少額だと対応してもらえない。
                </p>
                <div className="text-2xl font-bold opacity-30 italic">Monthly: 20 Guests</div>
              </div>
              <div className="bg-white/5 p-10 rounded-3xl border border-[#F39800]/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 bg-[#F39800] text-black text-[10px] font-bold">PAL-AD</div>
                <p className="text-[#F39800] text-sm font-bold mb-4 uppercase">After</p>
                <p className="text-white text-sm mb-6">
                  自分のタイミングで配信。
                  <br />
                  動画広告で圧倒的な認知を獲得。
                </p>
                <div className="text-5xl font-bold text-[#F39800] italic">Monthly: 120 Guests</div>
              </div>
            </div>
          </div>
        </section>

        <section className="slide bg-white text-black text-center">
          <div className="slide-inner">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic uppercase tracking-tighter">
              ACCELERATE
              <br />
              RIGHT NOW.
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              ビジネスの成長に、待ち時間は不要です。
              <br />
              Pal-Ad で、今この瞬間からアクセルを全開に。
            </p>

            <div className="flex flex-col items-center gap-4">
              <Link
                href="/diagnosis"
                className="inline-flex px-8 py-5 bg-[#F39800] text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
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
