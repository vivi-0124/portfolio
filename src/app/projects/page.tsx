import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * すべてのプロジェクトデータ
 * 
 * ポートフォリオで表示するプロジェクト情報のサンプルデータ
 */
const allProjects = [
  {
    id: "project1",
    title: "企業Webサイト制作",
    description: "レスポンシブデザインを採用した企業向けWebサイト。モダンなUIと高速な読み込み速度を実現。",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    category: "web" as const,
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    id: "project2",
    title: "プロモーション動画制作",
    description: "新商品のプロモーション動画。ストーリーテリングと視覚効果で魅力的に商品をアピール。",
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2426&auto=format&fit=crop",
    category: "video" as const,
    tags: ["動画編集", "After Effects", "Premiere Pro"]
  },
  {
    id: "project3",
    title: "eコマースサイト開発",
    description: "オンラインショッピングサイトの設計・開発。ユーザーフレンドリーなインターフェースと安全な決済システム。",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2574&auto=format&fit=crop",
    category: "web" as const,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "project4",
    title: "ブランディング動画",
    description: "企業のブランドイメージを強化するための動画制作。企業の価値観やビジョンを視覚的に表現。",
    imageUrl: "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?q=80&w=2574&auto=format&fit=crop",
    category: "video" as const,
    tags: ["撮影", "編集", "After Effects", "カラーグレーディング"]
  },
  {
    id: "project5",
    title: "ポートフォリオサイト",
    description: "クリエイター向けのポートフォリオサイト制作。作品を効果的に展示し、クリエイティブなスキルをアピール。",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2586&auto=format&fit=crop",
    category: "web" as const,
    tags: ["React", "Framer Motion", "CSS", "レスポンシブデザイン"]
  },
  {
    id: "project6",
    title: "イベント紹介動画",
    description: "地域イベントのプロモーション動画制作。イベントの雰囲気や特徴を効果的に伝える映像表現。",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2570&auto=format&fit=crop",
    category: "video" as const,
    tags: ["イベント撮影", "編集", "モーショングラフィックス"]
  }
];

/**
 * プロジェクト一覧ページコンポーネント
 * 
 * すべての作品を表示するページです。
 * カテゴリ（Webサイト、動画）によるフィルタリング機能を提供します。
 */
export default function ProjectsPage() {
  return (
    <div className="bg-background">
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            プロジェクト一覧
          </h1>
          <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
            これまでに手がけた制作物をご紹介します
          </p>
        </div>
      </section>

      {/* プロジェクト一覧セクション */}
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">すべて</TabsTrigger>
              <TabsTrigger value="web">Webサイト</TabsTrigger>
              <TabsTrigger value="video">動画</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  category={project.category}
                  tags={project.tags}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.filter(p => p.category === 'web').map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  category={project.category}
                  tags={project.tags}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="video" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.filter(p => p.category === 'video').map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  category={project.category}
                  tags={project.tags}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* CTAセクション */}
        <div className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">お客様のプロジェクトを実現します</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Webサイト制作や動画編集など、お客様のニーズに合わせたクリエイティブなソリューションを提供します。
            お気軽にご相談ください。
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              お問い合わせはこちら
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 