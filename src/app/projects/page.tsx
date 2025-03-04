"use client";

import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allProjects } from "@/data/projects";

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