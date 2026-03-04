import { client } from '@/libs/client';
import NewsListClient from './NewsListClient';

export default async function NewsPage() {
  // microCMSからニュース一覧を取得（最大10件）
  const data = await client.get({
    endpoint: 'news',
    queries: { orders: '-publishedAt', limit: 10 }
  });

  // データを使いやすい形に整形
  const newsItems = data.contents.map((item: any) => ({
    id: item.id,
    date: new Date(item.publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.'),
    category: item.category || "Release", // カテゴリがあれば取得
    title: item.title,
    excerpt: (item.body || item.content)
      ? (item.body || item.content).replace(/<[^>]*>?/gm, '').substring(0, 100) + "..."
      : "本文はありません。"
  }));

  return <NewsListClient newsItems={newsItems} />;
}