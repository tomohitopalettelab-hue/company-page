import { client } from '@/libs/client';
import PaletteLabClient from './PaletteLabClient';

export default async function Home() {
  try {
    const newsData = await client.get({
      endpoint: 'news', 
      queries: { limit: 1 }
    });

    const latestNews = newsData.contents[0] 
      ? {
          date: new Date(newsData.contents[0].publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.'),
          title: newsData.contents[0].title
        }
      : {
          date: "2026.02.25",
          title: "ニュースがありません"
        };

    return <PaletteLabClient latestNews={latestNews} />;
  } catch (error) {
    console.error("Data fetch error:", error);
    // エラー時でも画面が壊れないようにデフォルトを渡す
    return <PaletteLabClient latestNews={{ date: "---", title: "お知らせを取得できませんでした" }} />;
  }
}