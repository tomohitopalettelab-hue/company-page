"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, MessageSquare, Video, Search, ArrowRight, CheckCircle2, Zap, Palette, Users, Mail, Instagram, X, MessageCircle } from 'lucide-react';
import Link from 'next/link';

// --- 追加：データを受け取るための設定 ---
interface NewsProps {
  latestNews: {
    date: string;
    title: string;
  };
}

const services = [
  { title: "HP・LP制作", icon: <Monitor className="w-6 h-6" />, desc: "ブランドの想いを形にし、成果に繋がる高品質なWebサイトを構築します。" },
  { title: "口コミ対策システム", icon: <MessageSquare className="w-6 h-6" />, desc: "店舗の信頼を可視化。ポジティブな循環を生む独自システムを提供します。" },
  { title: "動画マーケティング", icon: <Video className="w-6 h-6" />, desc: "視覚と聴覚に訴えかけ、記憶に残るストーリーテリングを提案します。" },
  { title: "SEO/MEO対策", icon: <Search className="w-6 h-6" />, desc: "「見つかる」から「選ばれる」へ。検索エンジンと地図情報の最適化。" }
];

const whyUs = [
  { title: "オーダーメイドの色彩", icon: <Palette size={20} />, desc: "テンプレートではない、貴社だけのブランドカラーをゼロから設計。" },
  { title: "圧倒的なスピード感", icon: <Zap size={20} />, desc: "個人事業ならではの柔軟性で、意思決定から実行までを最速化。" },
  { title: "伴走型サポート", icon: <Users size={20} />, desc: "作って終わりではなく、数値を見ながら共に成長するパートナーシップ。" }
];

// 関数の入口を書き換え：({ latestNews }: NewsProps)
export default function PaletteLab({ latestNews }: NewsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-800 font-sans overflow-x-hidden text-left">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes gradient-flow {
          0% { background-position: 0% center; }
          100% { background-position: 400% center; } 
        }
      `}</style>

      {/* --- CONTACT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[40px] shadow-2xl p-8 overflow-hidden"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors">
                <X size={24} />
              </button>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Contact</h3>
                <p className="text-sm text-slate-500 font-medium">お好みの方法でお気軽にご相談ください</p>
              </div>

              <div className="space-y-4">
                <a href="https://line.me/R/ti/p/@your_id" target="_blank" className="flex items-center gap-4 p-4 rounded-3xl bg-[#06C755] text-white hover:brightness-105 transition-all active:scale-95 shadow-lg shadow-green-200">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><MessageCircle fill="white" size={24} /></div>
                  <div className="font-bold text-lg">LINEで相談</div>
                </a>
                
                <Link href="/contact" className="flex items-center gap-4 p-4 rounded-3xl bg-slate-900 text-white hover:brightness-125 transition-all active:scale-95 shadow-lg shadow-slate-200">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><Mail size={24} /></div>
                  <div className="font-bold text-lg">メールフォーム</div>
                </Link>

                <a href="https://instagram.com/your_id" target="_blank" className="flex items-center gap-4 p-4 rounded-3xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:brightness-105 transition-all active:scale-95 shadow-lg shadow-purple-200">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Instagram size={24} /></div>
                  <div className="font-bold text-lg">Instagram</div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- BACKGROUND ART --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 25, repeat: Infinity }} className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px]" />
        <motion.div animate={{ x: [0, -30, 0], y: [0, 50, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-[100px]" />
        <motion.div animate={{ x: [0, 20, 0], y: [0, -40, 0] }} transition={{ duration: 18, repeat: Infinity }} className="absolute -bottom-20 left-1/4 w-[700px] h-[700px] bg-emerald-200/20 rounded-full blur-[130px]" />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4 md:px-10 md:py-6 bg-white/50 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group cursor-pointer border-none bg-transparent p-0 outline-none">
            <div className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 transition-transform active:scale-95">
              Palette <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 group-hover:brightness-110">Lab.</span>
            </div>
          </button>
          <div className="flex items-center gap-6 md:gap-10">
            <div className="hidden md:flex gap-10 text-sm font-bold text-slate-500">
              <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
              <a href="#service" className="hover:text-slate-900 transition-colors">Service</a>
              <a href="#process" className="hover:text-slate-900 transition-colors">Process</a>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="px-5 py-2 md:px-7 md:py-2.5 rounded-2xl bg-[#F0F2F5] text-slate-700 text-sm font-bold shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] transition-all active:scale-95">
              Contact
            </button>
          </div>
        </div>
      </nav>

      <div className="h-24 md:h-32"></div>

      {/* --- HERO SECTION --- */}
      <header className="relative z-10 pt-10 pb-24 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-sm font-bold tracking-[0.3em] text-slate-400 mb-6 uppercase">Creative Solutions for Professionals</h2>
          <h1 className="text-5xl md:text-8xl font-extrabold text-slate-900 tracking-tight mb-10 leading-[1.1]">
            想いを色付け、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 text-[0.9em]">価値を再定義する。</span>
          </h1>
          <button onClick={() => setIsModalOpen(true)} className="px-10 py-4 bg-[#F0F2F5] text-slate-700 font-bold rounded-2xl shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] transition-all active:scale-95">
            無料で相談する
          </button>
        </motion.div>
      </header>

      {/* --- NEWS --- */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 mb-24">
        <Link href="/news" className="flex items-center gap-6 p-4 rounded-2xl bg-white/50 border border-white backdrop-blur-sm shadow-sm hover:bg-white transition-colors group">
          <span className="bg-slate-900 text-white text-[10px] px-3 py-1 rounded-full font-bold">NEWS</span>
          <p className="text-sm text-slate-600 truncate">
            {latestNews.date} - {latestNews.title}
          </p>
          <ArrowRight size={16} className="ml-auto text-slate-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      {/* --- 2. ABOUT --- */}
      <section id="about" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Palette Labが、<br />
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-400 via-purple-500 via-rose-400 to-blue-600 inline-block"
                  style={{ backgroundSize: '400% auto', animation: 'gradient-flow 20s linear infinite' }}>
                  あなたの「色」
                </span>
                を見つける。
              </span>
            </h3>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed">
              私たちはただの制作会社ではありません。あなたのビジネスが持つ固有の価値を分析し、最適なデザインとシステムで「信頼」を形にします。
            </p>
            <div className="space-y-6">
              {whyUs.map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="mt-1 text-emerald-500 p-2 bg-white rounded-lg shadow-sm"><CheckCircle2 size={20} /></div>
                  <div>
                    <h5 className="font-bold text-slate-800">{item.title}</h5>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[1px] border-slate-200" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-500 border-r-emerald-400 opacity-60" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute inset-4 rounded-full border-[3px] border-transparent border-t-purple-500 border-l-rose-400 opacity-40" />
              <motion.div whileHover={{ scale: 1.05 }} className="z-10 w-44 h-44 md:w-52 md:h-52 rounded-full bg-[#F0F2F5] shadow-[15px_15px_30px_#d1d9e6,-15px_-15px_30px_#ffffff] flex items-center justify-center border border-white/80">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-slate-700 to-slate-900">Palette</div>
                  <div className="text-[9px] font-bold tracking-[0.3em] text-blue-500 uppercase mt-1">Design Studio</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICE --- */}
      <section id="service" className="relative z-10 py-24 px-6 bg-white/30 backdrop-blur-md border-y border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 text-slate-400 font-bold tracking-widest text-xs uppercase">What we do</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="p-8 rounded-[32px] bg-[#F0F2F5] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] border border-white/40 group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-500 shadow-inner mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. PROCESS --- */}
      <section id="process" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 text-white rounded-[60px] p-12 md:p-20 overflow-hidden relative">
          <div className="relative z-10">
            <div className="text-center mb-20">
              <h3 className="text-4xl font-bold mb-4">Start your Journey</h3>
              <p className="text-slate-400">ご相談から納品まで、透明性の高いプロセスで進めます。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "ヒアリング", desc: "あなたの悩みや目標を、徹底的に言語化します。" },
                { step: "02", title: "プランニング", desc: "独自の強みを活かす「色（戦略）」を設計します。" },
                { step: "03", title: "実装・公開", desc: "最新技術を用いて、信頼を形にし、公開まで伴走。" }
              ].map((step, i) => (
                <div key={i} className="relative p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-5xl font-black text-white/5 absolute top-4 right-8 italic leading-none">{step.step}</div>
                  <h5 className="text-xl font-bold mb-4">{step.title}</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 py-20 px-6 text-center text-slate-400 text-sm">
        <div className="flex justify-center gap-6 mb-8 text-slate-500">
          <a href="https://instagram.com/your_id" target="_blank" className="hover:text-rose-500 transition-colors"><Instagram size={20} /></a>
          <a href="https://line.me/R/ti/p/@your_id" target="_blank" className="hover:text-green-500 transition-colors"><MessageCircle size={20} /></a>
          <Link href="/contact" className="hover:text-blue-500 transition-colors"><Mail size={20} /></Link>
        </div>

        <div className="flex justify-center gap-8 mb-8 text-[11px] font-bold tracking-widest uppercase">
          <button 
            onClick={() => {
              const modal = document.getElementById('tokusho-modal');
              if (modal) modal.style.display = 'flex';
            }}
            className="hover:text-slate-900 transition-colors"
          >
            特定商取引法
          </button>
          <button 
            onClick={() => {
              const modal = document.getElementById('privacy-modal');
              if (modal) modal.style.display = 'flex';
            }}
            className="hover:text-slate-900 transition-colors"
          >
            Privacy Policy
          </button>
        </div>

        <div className="mb-6 text-slate-900 font-bold tracking-tighter">Palette Lab.</div>
        © 2026 Palette Lab. All rights reserved.

        {/* --- MODALS --- */}
        <div id="tokusho-modal" className="fixed inset-0 z-[300] hidden items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[40px] p-8 md:p-12 text-left relative shadow-2xl">
            <button onClick={() => { document.getElementById('tokusho-modal')!.style.display = 'none' }} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"><X size={24} /></button>
            <h3 className="text-2xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-4">特定商取引法に基づく表記</h3>
            <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
              <div><p className="font-bold text-slate-900">運営責任者</p><p>森重 澄</p></div>
              <div><p className="font-bold text-slate-900">メールアドレス</p><p>info@palette-lab.com</p></div>
              <div><p className="font-bold text-slate-900">返品・返金ポリシー</p><p>デジタルコンテンツの性質上、原則返品不可。重大な不備がある場合のみ対応。</p></div>
            </div>
          </div>
        </div>

        <div id="privacy-modal" className="fixed inset-0 z-[300] hidden items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[40px] p-8 md:p-12 text-left relative shadow-2xl">
            <button onClick={() => { document.getElementById('privacy-modal')!.style.display = 'none' }} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"><X size={24} /></button>
            <h3 className="text-2xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-4">Privacy Policy</h3>
            <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
              <p>Palette Lab.はお客様の個人情報を適切に保護します。</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}