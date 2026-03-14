import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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
          <h1 className="mt-4 text-3xl md:text-5xl font-black">実績詳細（テンプレート）</h1>
          <p className="mt-3 text-sm text-slate-500">スラッグ: {id}</p>

          <div className="mt-8 h-56 rounded-2xl bg-gradient-to-br from-slate-100 via-white to-slate-50" />

          <section className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { label: "業種", value: "飲食・サービス" },
              { label: "施策期間", value: "3ヶ月" },
              { label: "担当サービス", value: "Pal-Opt / Pal-Trust" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-black text-slate-700">{item.value}</p>
              </div>
            ))}
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-black text-slate-900">課題</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              集客導線が複数に分散し、広告費に対する成果が見えづらい状態でした。
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-black text-slate-900">施策内容</h2>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              <li className="rounded-2xl bg-slate-50 px-4 py-3">SNS運用の投稿設計と運用代行</li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3">口コミ導線の再設計と改善</li>
              <li className="rounded-2xl bg-slate-50 px-4 py-3">広告配信の見直しとターゲット最適化</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-black text-slate-900">成果</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[
                { label: "新規予約", value: "+42%" },
                { label: "来店単価", value: "+18%" },
                { label: "口コミ評価", value: "3.2 → 4.5" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-100 bg-white p-4 text-center">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-black text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <h2 className="text-lg font-black text-slate-900">お客様の声</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              施策の進行が明確になり、社内でも意思決定が早くなりました。成果が数字で見えることで、
              次の投資判断がしやすくなっています。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
