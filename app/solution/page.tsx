import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import { solutionServices } from "./data";

export const metadata: Metadata = {
  title: "Solutions | Palette Lab",
  description: "Palette Labの8つのサービス一覧ページです。",
};

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* --- HEADER --- */}
        <div className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Sparkles size={14} className="text-blue-500" />
            <span className="text-[10px] font-black tracking-[0.2em] text-blue-500 uppercase">
              Our Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            サービス一覧
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl leading-relaxed">
            Palette AI / Palette Console を中心に、<br className="hidden md:block" />
            あなたの事業を鮮やかに彩る全8つのソリューションを提供します。
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionServices.map((service) => (
            <Link
              key={service.slug}
              href={`/solution/${service.slug}`}
              className="group relative block"
            >
              <article
                className="h-full rounded-[40px] border-2 bg-white p-8 md:p-10 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{ 
                  // 枠線にサービスカラーを薄く適用（ホバー時に少し濃く）
                  borderColor: `${service.color}15`, // 透明度約8%
                }}
              >
                {/* 右上のサービスカラー・オーブ（輝き） */}
                <div 
                  className="absolute top-10 right-10 w-4 h-4 rounded-full blur-[4px] animate-pulse"
                  style={{ backgroundColor: service.slug === 'palette_ai' ? '#94A3B8' : (service.color || '#3b82f6') }}
                />

                <div className="flex flex-col h-full relative z-10">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-lg bg-slate-50 text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4">
                      {service.category}
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h2>
                    {/* ロール部分にサービスカラーを適用 */}
                    <p 
                      className="text-sm font-bold mb-4"
                      style={{ color: service.slug === 'palette_ai' ? '#0F172A' : (service.color || '#3b82f6') }}
                    >
                      {service.role}
                    </p>
                  </div>

                  <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                    {service.summary}
                  </p>

                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-sm font-black text-slate-900">
                      View Details
                    </span>
                    {/* 矢印ボタンの背景色にサービスカラーを適用 */}
                    <div 
                      className="w-12 h-12 rounded-2xl text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg shadow-transparent group-hover:shadow-current/20"
                      style={{ 
                        backgroundColor: service.color,
                        color: service.slug === 'palette_ai' ? '#0F172A' : '#FFFFFF',
                        border: service.slug === 'palette_ai' ? '2px solid #0F172A' : 'none',
                        boxShadow: service.slug === 'palette_ai' ? '0 8px 16px -6px rgba(15,23,42,0.25)' : `0 10px 15px -3px ${service.color}40`
                      }}
                    >
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}