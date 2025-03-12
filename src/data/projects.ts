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
    imageUrl: "/meiofes31hero.png",
    category: "web",
    tags: ["Notion"],
    fullDescription: ``,
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
    title: "第31回名桜大学祭公式HP",
    description: "AIを活用した大学祭公式HPのリニューアル",
    imageUrl: "/31meiofes.jpeg",
    category: "web",
    tags: ["AI駆動開発","Next.js", "TypeScript", "Tailwind CSS","Shadcn/UI","Framer Motion","Cursor","Vercel","bolt.new","NotionAPI"],
    fullDescription: ``,
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
    imageUrl: "/meiofes32.jpg",
    category: "web",
    tags: ["AI駆動開発","Next.js", "TypeScript", "Tailwind CSS","Shadcn/UI","Framer Motion","Cursor","Vercel","bolt.new"],
    fullDescription: ``,
    skills: ["Next.js", "TypeScript", "Tailwind CSS","Shadcn/UI","Framer Motion","Cursor","Vercel","bolt.new"],
    date: "2024年1月",
    client: "第32回名桜大学祭実行委員会",
    website: "https://meiofes32-next-js2.vercel.app/",
    github: "",
    gallery: [
      "https://images.unsplash.com/photo-1589642380614-14b3f5cf80ea?q=80&w=2370&auto=format&fit=crop"
    ]
  },
  {
    id: "web4",
    title: "Webサイト4",
    description: "Webサイトの簡単な説明をここに記載します。",
    imageUrl: "/placeholder.png",
    category: "web",
    tags: ["AI駆動開発","Vite", "Firebase", "Material UI"],
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
    imageUrl: "/placeholder.png",
    category: "web",
    tags: ["AI駆動開発","Svelte", "Supabase", "TailwindCSS"],
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
    imageUrl: "/placeholder.png",
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