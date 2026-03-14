import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { getPostBySlug } from "@/libs/posts";

export const dynamic = "force-dynamic";

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getPostBySlug(id);

  if (!post) {
    return <div className="p-20 text-center">記事が見つかりませんでした。</div>;
  }

  const publishedAt = post.published_at || post.created_at;

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-800 font-sans pb-20">
      <header className="pt-20 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/news" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">一覧へ戻る</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-4">
            <Calendar size={14} />
            <span>{new Date(publishedAt).toLocaleDateString("ja-JP").replace(/\//g, ".")}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            {post.title}
          </h1>
        </div>
      </header>

      <main className="px-6">
        <article className="max-w-3xl mx-auto bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-white">
          <div
            className="prose prose-slate max-w-none 
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                prose-p:leading-relaxed prose-p:mb-6
                prose-img:rounded-2xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.body || "" }}
          />
        </article>
      </main>
    </div>
  );
}