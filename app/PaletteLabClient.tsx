"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor, MessageSquare, Video, Search, ArrowRight, CheckCircle2,
  Zap, Palette, Users, Mail, Instagram, X, MessageCircle,
  Cpu, LayoutDashboard, Share2, MapPin, Star, TrendingUp, PlayCircle, Layers
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsProps {
  latestNews: {
    date: string;
    title: string;
  };
}

// 統合されたサービスデータ
const unifiedServices = [
  {
    id: 'ai',
    serviceName: 'Palette AI',
    role: '総合・知能（すべてを統合・分析する脳）',
    color: '#FFFFFF',
    iconColor: '#0F172A',
    icon: <Cpu className="w-6 h-6" />,
    desc: '最新のAI技術を駆使し、散らばったデータをビジネスの武器へと変換します。',
    path: '/solution/palette_ai',
    category: 'Core System'
  },
  {
    id: 'console',
    serviceName: 'Palette Console',
    role: '管理・可視化（AIと対話するダッシュボード）',
    color: '#0F172A',
    iconColor: '#FFFFFF',
    icon: <LayoutDashboard className="w-6 h-6" />,
    desc: '直感的な操作で、店舗の状況から広告の成果までを一元管理。',
    path: '/solution/palette_console',
    category: 'Core System'
  },
  {
    id: 'studio',
    serviceName: 'Pal-Studio',
    role: 'HP制作（あなたのビジョンを形にする工房）',
    color: '#00B7CE',
    iconColor: '#FFFFFF',
    icon: <Monitor className="w-6 h-6" />,
    desc: 'ブランドの想いを色付け、成果に直結する最高峰のWebサイトを構築。',
    path: '/solution/pal_studio',
    category: 'Creative'
  },
  {
    id: 'video',
    serviceName: 'Pal-Video',
    role: '動画制作（視覚に訴えるブランド表現）',
    color: '#E95464',
    iconColor: '#FFFFFF',
    icon: <PlayCircle className="w-6 h-6" />,
    desc: 'ショート動画からPR動画まで、記憶にこびりつくストーリーを。',
    path: '/solution/pal_video',
    category: 'Creative'
  },
  {
    id: 'base',
    serviceName: 'Pal-Base',
    role: '接客拠点（LINE・GBPによる地域集客の土台）',
    color: '#8CC63F',
    iconColor: '#FFFFFF',
    icon: <MapPin className="w-6 h-6" />,
    desc: '地域No.1店になるためのMEO対策と、リピートを生むLINE公式アカウント運用。',
    path: '/solution/pal_base',
    category: 'Marketing'
  },
  {
    id: 'trust',
    serviceName: 'Pal-Trust',
    role: '信頼構築（口コミ・評価の管理・促進）',
    color: '#F9C11C',
    iconColor: '#0F172A',
    icon: <Star className="w-6 h-6" />,
    desc: 'ポジティブな口コミを最大化し、店舗の社会的証明をデジタル上で強化。',
    path: '/solution/pal_trust',
    category: 'Marketing'
  },
  {
    id: 'opt',
    serviceName: 'Pal-Opt',
    role: '運用最適化（SNS・SEOの実行代行）',
    color: '#A62183',
    iconColor: '#FFFFFF',
    icon: <Share2 className="w-6 h-6" />,
    desc: '日々の煩雑なSNS更新やSEO対策を、専門家が最速で代行。',
    path: '/solution/pal_opt',
    category: 'Operation'
  },
  {
    id: 'ad',
    serviceName: 'Pal-Ad',
    role: '広告配信（即効性のある集客の加速）',
    color: '#F39800',
    iconColor: '#FFFFFF',
    icon: <TrendingUp className="w-6 h-6" />,
    desc: '狙いすましたターゲットに、最小コストで最大の認知とCVを。',
    path: '/solution/pal_ad',
    category: 'Operation'
  },
];

export default function PaletteLab({ latestNews }: NewsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">
      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .text-gradient {
          background: linear-gradient(to right, #2563eb, #10b981, #8b5cf6, #f43f5e, #2563eb);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-flow 8s linear infinite;
        }
        .neo-shadow {
          box-shadow: 8px 8px 20px #d1d9e6, -8px -8px 20px #ffffff;
        }
        .neo-inset {
          box-shadow: inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff;
        }
      `}</style>

      {/* --- BACKGROUND ART (Hero周辺のみ) --- */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-rose-100/30 rounded-full blur-[120px]" />
      </div>

      {/* --- CONTACT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[40px] shadow-2xl p-10 overflow-hidden"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors">
                <X size={24} />
              </button>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-slate-900 mb-2">Contact</h3>
                <p className="text-sm text-slate-500 font-medium tracking-wide">事業の「色」を共に創りましょう</p>
              </div>
              <div className="space-y-4">
                <a href="https://line.me/R/ti/p/@your_id" target="_blank" className="flex items-center gap-5 p-5 rounded-[24px] bg-[#06C755] text-white hover:scale-[1.02] transition-all shadow-xl shadow-green-100">
                  <MessageCircle fill="white" size={28} />
                  <span className="font-bold text-lg">LINE公式アカウント</span>
                </a>
                <Link href="/contact" className="flex items-center gap-5 p-5 rounded-[24px] bg-slate-900 text-white hover:scale-[1.02] transition-all shadow-xl shadow-slate-200">
                  <Mail size={28} />
                  <span className="font-bold text-lg">お問い合わせフォーム</span>
                </Link>
                <a href="https://instagram.com/your_id" target="_blank" className="flex items-center gap-5 p-5 rounded-[24px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:scale-[1.02] transition-all shadow-xl shadow-purple-100">
                  <Instagram size={28} />
                  <span className="font-bold text-lg">Instagram DM</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <header className="relative z-10 pt-44 pb-24 px-6 text-center max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase">
            Data Driven & Creative Agency
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.05] tracking-tighter mb-10">
            ビジネスの想いを<br />
            <span className="text-gradient">鮮やかに色付ける。</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Palette Labは、AI分析と最高峰のデザインを掛け合わせ、<br className="hidden md:block" />
            あなたの事業が持つ固有の価値を「選ばれるブランド」へと昇華させます。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold rounded-[20px] hover:bg-blue-600 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-2 group">
              無料相談を予約する <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#services" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 font-bold rounded-[20px] neo-shadow hover:neo-inset transition-all">
              ソリューションを見る
            </a>
          </div>
        </motion.div>
      </header>

      {/* --- NEWS --- */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 mb-32">
        <Link href="/news" className="flex items-center gap-6 p-5 rounded-3xl bg-white/40 border border-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-all group">
          <span className="bg-blue-600 text-white text-[9px] px-3 py-1 rounded-full font-black tracking-tighter">LATEST</span>
          <p className="text-sm text-slate-600 font-medium truncate">{latestNews.date} — {latestNews.title}</p>
          <ArrowRight size={16} className="ml-auto text-slate-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      {/* --- SERVICE SECTION (背景：淡いグレー) --- */}
      <section id="services" className="relative z-10 py-32 px-6 bg-[#F1F5F9] border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-sm font-black tracking-[0.3em] text-blue-500 uppercase mb-4">Service Palette</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                AI × 実務支援の<br />
                フルスレッド・ソリューション
              </h3>
            </div>
            <p className="text-slate-500 font-medium text-sm mt-6 max-w-2xl mx-auto">
              戦略立案(AI)から制作(Studio)、集客(Ad/Base)、<br />
              信頼構築(Trust)までをワンストップで。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unifiedServices.map((service) => (
              <motion.div key={service.id} whileHover={{ y: -10 }} className="relative group h-full">
                <div className="h-full p-8 rounded-[40px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] rounded-bl-[100px] transition-transform group-hover:scale-150"
                    style={{ backgroundColor: service.color === '#FFFFFF' ? '#0F172A' : service.color }} />
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12`}
                        style={{ backgroundColor: service.color, color: service.iconColor, border: service.color === '#FFFFFF' ? '1px solid #e2e8f0' : 'none' }}>
                        {service.icon}
                      </div>
                      <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">{service.category}</span>
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">{service.serviceName}</h4>
                    <p className="text-xs font-bold text-blue-500 mb-4 h-10 line-clamp-2">{service.role}</p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-8">{service.desc}</p>
                  </div>
                  <Link href={service.path} className="flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 text-slate-900 font-bold text-sm hover:bg-slate-900 hover:text-white transition-all group/btn">
                    詳細を見る
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Ecosystem Banner */}
          <div className="mt-12 p-8 md:p-12 rounded-[48px] bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-xl shadow-blue-500/20">
                    <Layers size={20} />
                  </div>
                  <span className="text-xs font-black tracking-[0.3em] uppercase text-blue-400">Total Ecosystem</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-black mb-6">すべてのサービスは<br /><span className="text-blue-400">AI</span>で繋がる。</h4>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Palette AIが各施策のデータを学習し、Palette Consoleを通じて次の一手を提示。
                  制作、広告、接客のすべてが、共通の意志を持って動くエコシステムを提供します。
                </p>
                <Link href="/ecosystem" className="inline-flex items-center gap-2 text-sm font-bold border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                  システム間連携について詳しく <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '対応エリア', val: '全国対応', icon: <MapPin size={16} /> },
                  { label: '初期相談', val: '0円', icon: <MessageCircle size={16} /> },
                  { label: 'サポート', val: '伴走型', icon: <Users size={16} /> },
                  { label: '納品スピード', val: '最短2週', icon: <Zap size={16} /> },
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="text-blue-400 mb-2">{stat.icon}</div>
                    <div className="text-2xl font-black mb-1">{stat.val}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS (背景：淡いアイスブルーで明るく清潔な印象に) --- */}
      <section id="process" className="py-32 px-6 bg-[#EDF2F7] relative overflow-hidden">
        {/* 装飾用のボケ足（さらに淡く） */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 bg-white/50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black tracking-[0.3em] text-blue-500 uppercase mb-4">Workflow</h2>
            <h3 className="text-4xl font-black text-slate-900">成功への最短ルート</h3>
          </div>
          <div className="space-y-4">
            {[
              { step: '01', title: '色彩の抽出 (Insight)', desc: '徹底的なヒアリングとAI市場分析で、あなたの事業だけの「色」を特定します。' },
              { step: '02', title: '調合と設計 (Planning)', desc: '特定した色をどう広めるか。SNS、HP、広告を組み合わせた戦術マップを構築。' },
              { step: '03', title: '彩りと定着 (Execution)', desc: '実際に形にし、公開後もデータを見ながら精度を高め、事業を鮮やかに定着させます。' },
            ].map((item, i) => (
              <div key={i} className="group p-8 md:p-10 rounded-[32px] bg-white/80 backdrop-blur-sm border border-white flex flex-col md:flex-row gap-8 items-start md:items-center hover:bg-white hover:shadow-xl hover:shadow-blue-100 transition-all">
                <div className="text-6xl font-black text-blue-100 group-hover:text-blue-200 transition-colors leading-none">{item.step}</div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION (背景：ダークからライトへのグラデーション) --- */}
      {/* --- FINAL CTA SECTION (背景：ホワイトグラデーション) --- */}
      <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-[#EDF2F7] to-white overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-[48px] rotate-1 opacity-5" />
          <div className="relative bg-white border border-white rounded-[48px] p-8 md:p-20 shadow-2xl shadow-blue-500/5 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-50 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-sm font-black tracking-[0.4em] text-blue-600 uppercase mb-6">Let's Color Your Business</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">あなたのビジネスに、<br />新しい「色」を灯しませんか？</h3>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                現在の課題や将来のビジョンを、まずはお気軽にお聞かせください。<br className="hidden md:block" />
                Palette Labが、最適なテクノロジーとデザインで伴走いたします。
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="https://line.me/R/ti/p/@your_id" target="_blank" className="group relative w-full md:w-72 h-20 bg-[#06C755] rounded-3xl flex items-center justify-center gap-4 text-white font-black text-lg shadow-xl shadow-green-100 hover:scale-[1.03] active:scale-95 transition-all overflow-hidden">
                  <MessageCircle fill="white" size={28} />
                  <span>LINEで相談する</span>
                </a>
                <Link href="/contact" className="group relative w-full md:w-72 h-20 bg-slate-900 rounded-3xl flex items-center justify-center gap-4 text-white font-black text-lg shadow-xl shadow-slate-200 hover:bg-blue-600 hover:scale-[1.03] active:scale-95 transition-all overflow-hidden">
                  <Mail size={28} />
                  <span>フォームから送る</span>
                </Link>
              </div>
              <p className="mt-10 text-xs font-bold text-slate-400 tracking-widest uppercase">*初回相談は完全無料です。お気軽にご連絡ください。</p>
            </motion.div>
          </div>
        </div>
      </section>

{/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 pt-32 pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
              {/* ロゴ：PNGでも高画質に見えるよう、width/heightを大きめに指定しCSSで制御 */}
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
                <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-green-500 hover:bg-green-50 transition-all"><MessageCircle size={20} /></a>
              </div>
            </div>
            <div>
              <h5 className="text-xs font-black tracking-widest uppercase text-slate-900 mb-8">Solutions</h5>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-bold text-slate-400">
                {unifiedServices.map(s => <li key={s.id}><Link href={s.path} className="hover:text-blue-600 transition-colors">{s.serviceName}</Link></li>)}
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-black tracking-widest uppercase text-slate-900 mb-8">Company</h5>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                <li><button onClick={() => document.getElementById('tokusho-modal')!.style.display = 'flex'} className="hover:text-blue-600 transition-colors text-left">特定商取引法</button></li>
                <li><button onClick={() => document.getElementById('privacy-modal')!.style.display = 'flex'} className="hover:text-blue-600 transition-colors text-left">Privacy Policy</button></li>
                <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-12 border-t border-slate-50">
            <p className="text-[10px] font-black tracking-widest text-slate-300 uppercase">© 2026 Palette Lab. All rights reserved.</p>
          </div>
        </div>

        {/* 特定商取引法 Modal (省略なし) */}
        <div id="tokusho-modal" className="fixed inset-0 z-[300] hidden items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[40px] p-8 md:p-12 relative shadow-2xl">
            <button onClick={() => document.getElementById('tokusho-modal')!.style.display = 'none'} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"><X size={24} /></button>
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

        {/* Privacy Policy Modal はそのまま */}
      </footer>

      {/* --- MODALS --- */}
      {/* 特定商取引法 Modal */}
      <div id="tokusho-modal" className="fixed inset-0 z-[300] hidden items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
        <div className="bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[40px] p-10 relative">
          <button onClick={() => document.getElementById('tokusho-modal')!.style.display = 'none'} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"><X size={24} /></button>
          <h3 className="text-2xl font-black mb-8 border-b border-slate-100 pb-4">特定商取引法に基づく表記</h3>
          <div className="space-y-8 text-sm text-slate-600">
            <div><p className="font-black text-slate-900 text-xs tracking-widest uppercase mb-1">事業者名</p><p>Palette Lab</p></div>
            <div><p className="font-black text-slate-900 text-xs tracking-widest uppercase mb-1">住所</p><p>〒661-0972 兵庫県尼崎市小中島3-1-7</p></div>
            <div><p className="font-black text-slate-900 text-xs tracking-widest uppercase mb-1">電話番号</p><p>070-2667-5457</p></div>
            <div><p className="font-black text-slate-900 text-xs tracking-widest uppercase mb-1">運営責任者</p><p>森重 澄</p></div>
            <div><p className="font-black text-slate-900 text-xs tracking-widest uppercase mb-1">価格</p><p>5,000円〜（各プロジェクトごとの見積りに準ずる）</p></div>
            <div className="p-6 rounded-2xl bg-slate-50 leading-relaxed italic">返品・キャンセルについて：サービスの性質上、提供開始後のお客様都合による返品・交換・キャンセルはお受けできません。不具合がある場合は速やかに修正対応を行います。</div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <div id="privacy-modal" className="fixed inset-0 z-[300] hidden items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
        <div className="bg-white w-full max-w-2xl rounded-[40px] p-10 relative">
          <button onClick={() => document.getElementById('privacy-modal')!.style.display = 'none'} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"><X size={24} /></button>
          <h3 className="text-2xl font-black mb-8 border-b border-slate-100 pb-4">Privacy Policy</h3>
          <div className="text-sm text-slate-600 leading-relaxed">
            <p>Palette Lab.（以下「当社」）は、提供するサービスにおける個人情報の取扱いについて適切に保護し、管理いたします。収集した情報はサービスの提供、改善、およびお問い合わせ対応の目的にのみ使用いたします。</p>
          </div>
        </div>
      </div>
    </div>
  );
}