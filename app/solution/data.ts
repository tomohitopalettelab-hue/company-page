export type SolutionService = {
  slug: string;
  name: string;
  role: string;
  color: string;
  category: string;
  summary: string;
  details: string[];
};

export const solutionServices: SolutionService[] = [
  {
    slug: "palette_ai",
    name: "Palette AI",
    role: "総合・知能（すべてを統合・分析する脳）",
    color: "#FFF",
    category: "Core System",
    summary:
      "散在するデータを統合し、意思決定の精度を高めるAI分析基盤です。",
    details: [
      "各施策のデータを横断的に集約し、状況を可視化します。",
      "次に打つべき施策を優先度付きで提案します。",
      "継続学習により提案精度を段階的に高めます。",
    ],
  },
  {
    slug: "palette_console",
    name: "Palette Console",
    role: "管理・可視化（AIと対話するダッシュボード）",
    color: "#000",
    category: "Core System",
    summary:
      "AI分析結果と運用状況を一つの画面で管理できる統合ダッシュボードです。",
    details: [
      "主要KPIをリアルタイムで確認できます。",
      "AI提案に対してその場で実行判断ができます。",
      "施策ごとの成果比較が直感的に行えます。",
    ],
  },
  {
    slug: "pal_studio",
    name: "Pal-Studio",
    role: "HP制作（あなたのビジョンを形にする工房）",
    color: "#00B7CE",
    category: "Creative",
    summary:
      "ブランド戦略に沿ったWebサイト・LPを設計から公開まで一貫して制作します。",
    details: [
      "ブランドの価値を伝える構成を設計します。",
      "CVを意識したUI/UXで成果に繋げます。",
      "更新しやすい運用設計まで対応します。",
    ],
  },
  {
    slug: "pal_video",
    name: "Pal-Video",
    role: "動画制作（視覚に訴えるブランド表現）",
    color: "#E95464",
    category: "Creative",
    summary:
      "SNS向け短尺からPR動画まで、目的に応じた映像表現を制作します。",
    details: [
      "伝えたい価値をストーリーに落とし込みます。",
      "視聴維持率を意識した構成で制作します。",
      "媒体ごとの最適フォーマットで納品します。",
    ],
  },
  {
    slug: "pal_base",
    name: "Pal-Base",
    role: "接客拠点（LINE・GBPによる地域集客の土台）",
    color: "#8CC63F",
    category: "Marketing",
    summary:
      "LINE・GBPを軸に、地域顧客との接点を強化する基盤を構築します。",
    details: [
      "LINE導線を整備し、再来店率向上を支援します。",
      "GBP最適化で地域検索の露出を強化します。",
      "運用導線を設計し継続成果に繋げます。",
    ],
  },
  {
    slug: "pal_trust",
    name: "Pal-Trust",
    role: "信頼構築（口コミ・評価の管理・促進）",
    color: "#F9C11C",
    category: "Marketing",
    summary:
      "口コミと評価の運用を整備し、選ばれる理由を可視化します。",
    details: [
      "レビュー獲得フローを設計します。",
      "ネガティブ評価への初動対応を整理します。",
      "信頼資産を蓄積して集客に活かします。",
    ],
  },
  {
    slug: "pal_opt",
    name: "Pal-Opt",
    role: "運用最適化（SNS・SEO・MEOの実行代行）",
    color: "#A62183",
    category: "Operation",
    summary:
      "SNS・SEO・MEOの実務運用を代行し、改善サイクルを高速化します。",
    details: [
      "日次〜週次の運用実務を代行します。",
      "KPIに基づく改善提案を継続実施します。",
      "運用工数を削減し本業集中を支援します。",
    ],
  },
  {
    slug: "pal_ad",
    name: "Pal-Ad",
    role: "広告配信（即効性のある集客の加速）",
    color: "#F39800",
    category: "Operation",
    summary:
      "広告運用を最適化し、短期で成果を出す集客加速を実現します。",
    details: [
      "媒体特性に合わせた配信設計を行います。",
      "クリエイティブと配信を同時最適化します。",
      "費用対効果を可視化し改善を継続します。",
    ],
  },
];

export const getSolutionBySlug = (slug: string) =>
  solutionServices.find((service) => service.slug === slug);
