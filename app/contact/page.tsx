"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // フォームの入力値を取得
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      // 本物のAPIを呼び出す！
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('送信に失敗しました');

      setLoading(false);
      setIsSent(true);
    } catch (err) {
      console.error(err);
      setError("メールの送信に失敗しました。時間をおいて再度お試しください。");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-800 font-sans pb-20 overflow-x-hidden">
      
      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px]" />
      </div>

      <header className="relative z-10 pt-20 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">Back to Home</span>
          </Link>
          <h1 className="text-5xl font-black tracking-tighter text-slate-900 mb-4">Contact</h1>
          <p className="text-slate-500 font-medium tracking-wide">プロジェクトの相談、お見積りなど、お気軽にお送りください。</p>
        </div>
      </header>

      <main className="relative z-10 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/70 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[40px] shadow-[20px_20px_40px_#d1d9e6] relative overflow-hidden"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* お名前 */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">
                      <User size={14} /> Your Name
                    </label>
                    <input 
                      name="name"
                      required
                      type="text" 
                      placeholder="例：山田 太郎"
                      className="w-full bg-[#F0F2F5] border-none rounded-2xl p-4 text-slate-700 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none shadow-inner"
                    />
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">
                      <Mail size={14} /> Email Address
                    </label>
                    <input 
                      name="email"
                      required
                      type="email" 
                      placeholder="example@palette-lab.jp"
                      className="w-full bg-[#F0F2F5] border-none rounded-2xl p-4 text-slate-700 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none shadow-inner"
                    />
                  </div>

                  {/* お問い合わせ内容 */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">
                      <MessageSquare size={14} /> Message
                    </label>
                    <textarea 
                      name="message"
                      required
                      rows={5}
                      placeholder="ご相談内容をご記入ください"
                      className="w-full bg-[#F0F2F5] border-none rounded-2xl p-4 text-slate-700 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none shadow-inner resize-none"
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

                  {/* 送信ボタン */}
                  <button 
                    disabled={loading}
                    type="submit"
                    className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        <span>メッセージを送信する</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              /* --- 送信完了画面 --- */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-white/70 backdrop-blur-xl border border-white p-12 md:p-20 rounded-[40px] shadow-[20px_20px_40px_#d1d9e6]"
              >
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <CheckCircle size={40} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Thank You!</h2>
                <p className="text-slate-500 leading-relaxed mb-10">
                  メッセージを受け付けました。<br />
                  通常2〜3営業日以内に、担当者よりご連絡いたします。
                </p>
                <Link href="/" className="inline-flex px-8 py-3 bg-[#F0F2F5] text-slate-600 font-bold rounded-xl shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] hover:shadow-none transition-all">
                  ホームに戻る
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}