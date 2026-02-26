"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// 受け取るデータの型定義
interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
}

export default function NewsListClient({ newsItems }: { newsItems: NewsItem[] }) {
  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-800 font-sans pb-20">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px]" />
      </div>

      <header className="relative z-10 pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">Back to Home</span>
          </Link>
          <h1 className="text-5xl font-black tracking-tighter text-slate-900 mb-4">News</h1>
          <p className="text-slate-500 font-medium tracking-wide">Palette Lab. からの最新のお知らせ</p>
        </div>
      </header>

      <main className="relative z-10 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {newsItems.map((news, idx) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/60 backdrop-blur-md border border-white p-8 rounded-[32px] shadow-[10px_10px_20px_#d1d9e6] hover:shadow-[15px_15px_30px_#c2cbd9] transition-all"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-bold tracking-widest text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-500 rounded-full">
                  <Tag size={12} />
                  <span>{news.category}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {news.title}
              </h2>
              
              <p className="text-slate-500 leading-relaxed mb-6 line-clamp-2">
                {news.excerpt}
              </p>

              <div className="flex items-center gap-1 text-sm font-black text-slate-900">
                READ MORE <ChevronRight size={16} />
              </div>

              {/* microCMSのIDに基づいた詳細ページへのリンク */}
              <Link href={`/news/${news.id}`} className="absolute inset-0" aria-label={news.title} />
            </motion.article>
          ))}
        </div>
      </main>

      <footer className="relative z-10 mt-32 text-center text-slate-400 text-xs">
        © 2026 Palette Lab.
      </footer>
    </div>
  );
}