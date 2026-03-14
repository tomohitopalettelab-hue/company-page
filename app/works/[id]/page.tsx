import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { getWorkBySlug } from "@/libs/works";

export const dynamic = "force-dynamic";

const splitLines = (value: string | null) =>
  String(value || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

const parseMetrics = (value: string | null) =>
  splitLines(value).map((line) => {
    const match = line.split(/\s*[|:：]\s*/);
    return {
      label: match[0] || "",
      value: match.slice(1).join(" ") || "",
    };
  });

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = await getWorkBySlug(id);

  if (!work) {
    notFound();
  }

  const actions = splitLines(work.solution);
  const results = splitLines(work.results);
  const metrics = parseMetrics(work.metrics).filter((item) => item.label || item.value);

  return (
    <main className="min-h-screen bg-[#F9F9F9] px-6 pb-24 pt-24 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Works
        </Link>

        <div className="mt-10 rounded-[32px] border border-slate-100 bg-white p-8 md:p-12 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Work Detail</p>
          <h1 className="mt-4 text-3xl md:text-5xl font-black">{work.title}</h1>
          {work.excerpt && <p className="mt-3 text-sm text-slate-500">{work.excerpt}</p>}

          <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-white to-slate-50">
            {work.cover_url ? (
              <Image
                src={work.cover_url}
                alt={work.title}
                width={1200}
                height={720}
                className="h-56 w-full object-cover"
              />
            ) : (
              <div className="h-56" />
            )}
          </div>

          <section className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { label: "業種", value: work.industry || "—" },
              { label: "施策期間", value: work.duration || "—" },
              { label: "担当サービス", value: work.service || "—" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-black text-slate-700">{item.value}</p>
              </div>
            ))}
          </section>

          {work.challenge && (
            <section className="mt-10">
              <h2 className="text-lg font-black text-slate-900">課題</h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{work.challenge}</p>
            </section>
          )}

          {actions.length > 0 && (
            <section className="mt-8">
              <h2 className="text-lg font-black text-slate-900">施策内容</h2>
              <ul className="mt-3 space-y-3 text-sm text-slate-600">
                {actions.map((item, index) => (
                  <li key={`${item}-${index}`} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {(metrics.length > 0 || results.length > 0) && (
            <section className="mt-8">
              <h2 className="text-lg font-black text-slate-900">成果</h2>
              {metrics.length > 0 && (
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {metrics.map((item, index) => (
                    <div key={`${item.label}-${index}`} className="rounded-2xl border border-slate-100 bg-white p-4 text-center">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                        {item.label || "成果"}
                      </p>
                      <p className="mt-2 text-lg font-black text-slate-900">{item.value || "—"}</p>
                    </div>
                  ))}
                </div>
              )}
              {results.length > 0 && (
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  {results.map((item, index) => (
                    <p key={`${item}-${index}`}>{item}</p>
                  ))}
                </div>
              )}
            </section>
          )}

          {work.testimonial && (
            <section className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h2 className="text-lg font-black text-slate-900">お客様の声</h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{work.testimonial}</p>
            </section>
          )}

          {work.body && (
            <section className="mt-10">
              <h2 className="text-lg font-black text-slate-900">詳細</h2>
              <div
                className="prose prose-slate prose-sm max-w-none mt-4"
                dangerouslySetInnerHTML={{ __html: work.body }}
              />
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
