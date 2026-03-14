"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const filters = [
  { key: "all", label: "すべて" },
  { key: "turquoise", label: "HP制作" },
  { key: "gold", label: "口コミ管理" },
  { key: "lime", label: "地域集客" },
  { key: "orange", label: "広告配信" },
];

type WorkItem = {
  id: string;
  slug: string;
  category: string;
  service: string;
  title: string;
  desc: string;
  coverUrl: string;
};

export default function WorksClient({ works }: { works: WorkItem[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredWorks = useMemo(() => {
    if (activeFilter === "all") return works;
    return works.filter((item) => item.category === activeFilter);
  }, [activeFilter, works]);

  return (
    <main className="min-h-screen bg-[#F9F9F9] px-6 pb-24 pt-24 text-slate-900">
      <style>{`
        :root {
          --white: #ffffff;
          --black: #000000;
          --magenta: #a62183;
          --turquoise: #00b7ce;
          --lime: #8cc63f;
          --gold: #f9c11c;
          --orange: #f39800;
          --coral: #e95464;
        }
        .filter-btn {
          padding: 8px 18px;
          border-radius: 9999px;
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #eeeeee;
          color: #333333;
          transition: 0.3s;
        }
        .filter-btn.active {
          background: #111111;
          color: #ffffff;
        }
        .works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        .work-item {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transition: 0.3s;
        }
        .work-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        }
        .thumb {
          width: 100%;
          height: 180px;
          background: linear-gradient(135deg, rgba(0, 183, 206, 0.18), rgba(233, 84, 100, 0.2));
          border-bottom: 4px solid #f2f2f2;
        }
        .info {
          padding: 16px;
        }
        .category-tag {
          font-size: 0.7rem;
          padding: 4px 12px;
          border-radius: 9999px;
          color: #ffffff;
          display: inline-block;
          margin-bottom: 8px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .work-title {
          font-weight: 800;
          font-size: 1.05rem;
          margin-bottom: 6px;
          color: #1f2937;
        }
        .work-desc {
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.6;
        }
        .tag-white { background: #999999; }
        .tag-black { background: var(--black); }
        .tag-magenta { background: var(--magenta); }
        .tag-turquoise { background: var(--turquoise); }
        .tag-lime { background: var(--lime); }
        .tag-gold { background: var(--gold); }
        .tag-orange { background: var(--orange); }
        .tag-coral { background: var(--coral); }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="mt-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900">Our Works</h1>
          <p className="mt-4 text-sm text-slate-500">
            Palette Labが伴走した実績の一部をご紹介します。
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10 works-grid">
          {filteredWorks.map((work) => (
            <Link key={work.id} href={`/works/${work.slug}`} className="work-item">
              <div className="thumb">
                {work.coverUrl ? (
                  <Image
                    src={work.coverUrl}
                    alt={work.title}
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              <div className="info">
                <span className={`category-tag tag-${work.category || "white"}`}>{work.service || "Works"}</span>
                <div className="work-title">{work.title}</div>
                <div className="work-desc">{work.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
