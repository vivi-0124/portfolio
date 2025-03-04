export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'web' | 'video';
  tags: string[];
  fullDescription: string;
  skills: string[];
  date: string;
  client: string;
  website: string | null;
  github: string | null;
  gallery: string[];
};

export const allProjects: Project[] = [
  {
    id: "web1",
    title: "第31回名桜大学祭公式HP",
    description: "NotionSiteを使用した第31回名桜大学祭公式HPの制作",
    imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2370&auto=format&fit=crop",
    category: "web",
    tags: ["Notion"],
    fullDescription: `
    プロジェクト概要：
名桜大学祭には公式ホームページが存在せず、情報発信がInstagramのみに限られていた状況を改善するため、本プロジェクトを開始しました。大学祭の情報を効率的に発信し、来場者により良い体験を提供することを目的としています。

技術選定の理由：
Notionの新機能「Notion Site」を活用することで、Notionのページをそのままウェブサイトとして公開することができます。プログラミングやウェブ開発の専門知識がなくても、大学祭の情報を効率的に発信できるプラットフォームを構築することができました。

実装のポイント：
情報設計では、イベントスケジュール、出店情報、アクセス案内、お知らせ機能を優先度の高い情報として配置しました。ユーザビリティ面では、スマートフォンでの閲覧を重視したレイアウト設計を行い、直感的なナビゲーション構造を実現しました。

成果：
特にNotionの直感的なインターフェースにより、実行委員会のメンバーが簡単に情報を更新できる点が大きな利点となりました。また、スマートフォン対応のレイアウトが標準で提供されているため、学生の主な閲覧デバイスであるスマートフォンでも快適に閲覧できるサイトを実現できました。

今後の展開：
今後は、アクセス解析を行いながらコンテンツの改善を進め、来年度以降の大学祭でも継続的に活用できる情報発信基盤として確立していく予定です。
    `,
    skills: ["Notion"],
    date: "2024年11月",
    client: "名桜大学祭実行委員会",
    website: "https://meiofes31.notion.site/12787e96827280c49aafcae2b4ac06ce",
    github: "",
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2426&auto=format&fit=crop"
    ]
  },
  {
    id: "web2",
    title: "第31回名桜大学祭公式HP(リニューアル)",
    description: "AIを活用した大学祭公式HPのリニューアル",
    imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2370&auto=format&fit=crop",
    category: "web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS","Shadcn/UI","Framer Motion","Cursor","Vercel","bolt.new","NotionAPI"],
    fullDescription: `
      第31回名桜大学祭の公式Webサイトをフルリニューアルしたプロジェクトです。モダンな技術スタックと最新のAI駆動開発手法を組み合わせることで、高品質なサイトを効率的に開発しました。
      【開発手法】
      AI駆動開発を全面的に採用し、bolt.newで初期UIデザインを生成した後、Cursorにコードを移行して対話的に開発を進めました。この方法により、従来の開発フローよりも大幅に開発速度を向上させることができました。
      【技術スタック】
      ・ Next.jsをフレームワークに採用し、高速なページロードとSEO最適化を実現
      ・ TypeScriptによる型安全な開発環境の構築
      ・ Tailwind CSSとShadcn/UIコンポーネントによる一貫したデザインシステム
      ・ Framer Motionを活用したインタラクティブなアニメーション
      ・ Shadcn/UIを使用したコンポーネントの利用
      ・ Vercelによる自動デプロイとホスティング
      ・ NotionAPIとの連携による更新システム
      【革新的な機能】
      本プロジェクトの最大の特徴は、NotionAPIとの連携による更新システムです。大学祭実行委員がNotionデータベースを更新するだけでWebサイトが自動的に最新情報に更新される仕組みを実装しました。これにより、技術的知識がない実行委員メンバーでも簡単にサイトコンテンツを管理できるようになりました。
      【成果】
      ・ 最新技術を活用したモダンなUIでユーザーエクスペリエンスを向上
      ・ コンテンツ管理の効率化により、実行委員の運営負担を軽減
      ・ AI駆動開発によって短期間で高品質なサイトを実現
      【参考】
      【AI駆動開発】たった１時間でAIを使ってアプリ開発ができるなんて信じられません・・・【Bolt.new / Claude / Cursor(Composer)を利用】
      https://youtu.be/7ybd7ArNS3o?si=BnCfwa_xWQtxmHfN
      このプロジェクトを通して、モダンな技術スタックと最新のAIツールを組み合わせた革新的な開発アプローチの可能性を実証することができました。
    `,
    skills: ["Next.js", "TypeScript", "Tailwind CSS","Shadcn/UI","Framer Motion","Cursor","Vercel","bolt.new","NotionAPI"],
    date: "2025年2月",
    client: "名桜大学祭実行委員会",
    website: "https://31meiofes.vercel.app",
    github: "",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2370&auto=format&fit=crop"
    ]
  },
  {
    id: "web3",
    title: "第32回名桜大学祭公式HP(制作中)",
    description: "AIを活用した次年度の大学祭公式HPの制作",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2426&auto=format&fit=crop",
    category: "web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS","Shadcn/UI","Framer Motion","Cursor","Vercel","bolt.new"],
    fullDescription: `
       第32回名桜大学祭の公式Webサイトを制作中です。モダンな技術スタックと最新のAI駆動開発手法を組み合わせることで、高品質なサイトを効率的に開発しています。
      【開発手法】
      AI駆動開発を全面的に採用し、bolt.newで初期UIデザインを生成した後、Cursorにコードを移行して対話的に開発を進めました。この方法により、従来の開発フローよりも大幅に開発速度を向上させることができました。
      【技術スタック】
      ・ Next.jsをフレームワークに採用し、高速なページロードとSEO最適化を実現
      ・ TypeScriptによる型安全な開発環境の構築
      ・ Tailwind CSSとShadcn/UIコンポーネントによる一貫したデザインシステム
      ・ Framer Motionを活用したインタラクティブなアニメーション
      ・ Shadcn/UIを使用したコンポーネントの利用
      ・ Vercelによる自動デプロイとホスティング
      ・ NotionAPIとの連携による更新システム
      【革新的な機能】
      本プロジェクトの最大の特徴は、NotionAPIとの連携による更新システムです。大学祭実行委員がNotionデータベースを更新するだけでWebサイトが自動的に最新情報に更新される仕組みを実装しました。これにより、技術的知識がない実行委員メンバーでも簡単にサイトコンテンツを管理できるようになりました。
      【成果】
      ・ 最新技術を活用したモダンなUIでユーザーエクスペリエンスを向上
      ・ コンテンツ管理の効率化により、実行委員の運営負担を軽減
      ・ AI駆動開発によって短期間で高品質なサイトを実現
      【参考】
      【AI駆動開発】たった１時間でAIを使ってアプリ開発ができるなんて信じられません・・・【Bolt.new / Claude / Cursor(Composer)を利用】
      https://youtu.be/7ybd7ArNS3o?si=BnCfwa_xWQtxmHfN
      このプロジェクトを通して、モダンな技術スタックと最新のAIツールを組み合わせた革新的な開発アプローチの可能性を実証することができました。
    `,
    skills: ["Next.js", "TypeScript", "Tailwind CSS","Shadcn/UI","Framer Motion","Cursor","Vercel","bolt.new"],
    date: "2024年1月",
    client: "第32回名桜大学祭実行委員会",
    website: "https://meiofes32-lvzdgl5e8-vivi-0124s-projects.vercel.app/",
    github: "",
    gallery: [
      "https://images.unsplash.com/photo-1589642380614-14b3f5cf80ea?q=80&w=2370&auto=format&fit=crop"
    ]
  },
  {
    id: "web4",
    title: "Webサイト4",
    description: "Webサイトの簡単な説明をここに記載します。",
    imageUrl: "https://images.unsplash.com/photo-1416339698674-4f118dd3388b?q=80&w=2426&auto=format&fit=crop",
    category: "web",
    tags: ["Angular", "Firebase", "Material UI"],
    fullDescription: `
      Webサイト4の詳細な説明をここに記載します。
    `,
    skills: ["フロントエンド開発", "認証システム"],
    date: "2023年12月",
    client: "クライアント名",
    website: "https://example.com",
    github: "https://github.com/example/project",
    gallery: [
      "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=2370&auto=format&fit=crop"
    ]
  },
  {
    id: "web5",
    title: "Webサイト5",
    description: "Webサイトの簡単な説明をここに記載します。",
    imageUrl: "https://images.unsplash.com/photo-1492619267744-f1478db28774?q=80&w=2426&auto=format&fit=crop",
    category: "web",
    tags: ["Svelte", "Supabase", "TailwindCSS"],
    fullDescription: `
      Webサイト5の詳細な説明をここに記載します。
    `,
    skills: ["モダンフロントエンド", "パフォーマンス最適化"],
    date: "2023年11月",
    client: "クライアント名",
    website: "https://example.com",
    github: "https://github.com/example/project",
    gallery: [
      "https://images.unsplash.com/photo-1470940511639-1068d7764233?q=80&w=2424&auto=format&fit=crop"
    ]
  },
  {
    id: "video1",
    title: "動画制作プロジェクト",
    description: "動画プロジェクトの簡単な説明をここに記載します。",
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2426&auto=format&fit=crop",
    category: "video",
    tags: ["動画編集", "After Effects", "Premiere Pro"],
    fullDescription: `
      動画プロジェクトの詳細な説明をここに記載します。
    `,
    skills: ["動画編集", "モーショングラフィックス"],
    date: "2024年3月",
    client: "クライアント名",
    website: null,
    github: null,
    gallery: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2426&auto=format&fit=crop"
    ]
  }
];

// トップページで表示する注目プロジェクト
export const featuredProjects = allProjects.slice(0, 3); 