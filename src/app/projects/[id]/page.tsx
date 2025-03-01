import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, Globe, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { use } from 'react';

/**
 * プロジェクトデータのサンプル
 */
const allProjects = [
  {
    id: "project1",
    title: "企業Webサイト制作",
    description: "レスポンシブデザインを採用した企業向けWebサイト。モダンなUIと高速な読み込み速度を実現。",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    fullDescription: `
      このプロジェクトでは、企業のブランドイメージを強化し、ユーザーエクスペリエンスを向上させるWebサイトを制作しました。
      
      モバイルファーストのアプローチを採用し、あらゆるデバイスで最適な表示を実現。高速な読み込み速度を確保するため、画像の最適化やコードの軽量化を行いました。
      
      また、検索エンジン最適化（SEO）にも注力し、検索結果での上位表示を実現。アクセシビリティにも配慮し、WAI-ARIAを適切に使用することで、誰もが使いやすいウェブサイトを目指しました。
    `,
    skills: ["レスポンシブデザイン", "UI/UXデザイン", "SEO最適化", "パフォーマンス最適化"],
    date: "2023年1月",
    client: "株式会社サンプル",
    website: "https://example.com",
    github: "https://github.com/example/project",
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2426&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1416339698674-4f118dd3388b?q=80&w=2426&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2426&auto=format&fit=crop"
    ]
  },
  {
    id: "project2",
    title: "プロモーション動画制作",
    description: "新商品のプロモーション動画。ストーリーテリングと視覚効果で魅力的に商品をアピール。",
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2426&auto=format&fit=crop",
    category: "video",
    tags: ["動画編集", "After Effects", "Premiere Pro"],
    fullDescription: `
      このプロジェクトでは、クライアントの新商品のプロモーション動画を制作しました。
      
      商品の特徴や魅力を効果的に伝えるため、ストーリーテリングを重視しながら、視覚的にも魅力的な映像を作成。
      After EffectsやPremiere Proを使用して、洗練されたモーショングラフィックスやトランジションを実装しました。
      
      音楽やサウンドエフェクトの選定にもこだわり、視聴者の感情に訴えかける作品に仕上げています。
    `,
    skills: ["ビデオ編集", "モーショングラフィックス", "サウンドデザイン", "カラーグレーディング"],
    date: "2023年3月",
    client: "ABCブランド",
    website: null,
    github: null,
    gallery: [
      "https://images.unsplash.com/photo-1470940511639-1068d7764233?q=80&w=2424&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492619267744-f1478db28774?q=80&w=2426&auto=format&fit=crop"
    ]
  },
  {
    id: "project3",
    title: "eコマースサイト開発",
    description: "ファッションブランドのオンラインストア。シームレスなショッピング体験と洗練されたデザインを提供。",
    imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2370&auto=format&fit=crop",
    category: "web",
    tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    fullDescription: `
      このプロジェクトでは、ファッションブランドのためのeコマースウェブサイトを開発しました。
      
      Next.jsとReactを使用して、高速で応答性の高いユーザーインターフェースを実現。商品検索、フィルタリング、ショッピングカート、チェックアウトプロセスなど、必要なすべての機能を実装しました。
      
      Stripeを統合して安全な決済処理を提供し、管理者ダッシュボードでは在庫管理や注文追跡を簡単に行えるようにしています。
      
      Tailwind CSSを活用して、ブランドのアイデンティティに合わせたカスタムデザインを効率的に実装しました。
    `,
    skills: ["フロントエンド開発", "バックエンド開発", "支払い処理", "UI/UXデザイン"],
    date: "2023年5月",
    client: "ファッションブランドX",
    website: "https://example-shop.com",
    github: "https://github.com/example/ecommerce-project",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2370&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=2370&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589642380614-14b3f5cf80ea?q=80&w=2370&auto=format&fit=crop"
    ]
  }
];

export const generateStaticParams = () => {
  return allProjects.map((project) => ({
    id: project.id,
  }));
};

type Params = Promise<{ id: string }>;

export default function ProjectPage(props: {
  params: Params;
}) {
  const params = use(props.params);
  const project = allProjects.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="container max-w-5xl py-10 px-4 mx-auto">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            プロジェクト一覧に戻る
          </Link>
        </Button>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="capitalize">
            {project.category}
          </Badge>
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="relative w-full h-[40vh] mb-8 rounded-lg overflow-hidden">
        <Image 
          src={project.imageUrl} 
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">プロジェクト概要</h2>
          <div className="prose dark:prose-invert max-w-none">
            {project.fullDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-muted-foreground">
                {paragraph.trim()}
              </p>
            ))}
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">使用技術・スキル</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.map((skill) => (
              <Badge key={skill} className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">プロジェクト情報</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">完了日</p>
                    <p className="text-sm text-muted-foreground">{project.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Tag className="w-5 h-5 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">クライアント</p>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                </div>
                
                {project.website && (
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Webサイト</p>
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline inline-flex items-center"
                      >
                        サイトを訪問
                        <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
                
                {project.github && (
                  <div className="flex items-start">
                    <Github className="w-5 h-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">ソースコード</p>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline inline-flex items-center"
                      >
                        GitHub
                        <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {project.gallery && project.gallery.length > 0 && (
        <>
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-semibold mb-6">ギャラリー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <Image 
                  src={image} 
                  alt={`${project.title} ギャラリー画像 ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
} 