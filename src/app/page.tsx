import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { FaqSection } from "@/components/sections/faq";
import { SkillsSection } from "@/components/sections/skills";
import { featuredProjects } from "@/data/projects";

/**
 * サンプルプロジェクトデータ
 * 
 * ポートフォリオで表示するプロジェクト情報のサンプルデータ
 */

/**
 * ホームページコンポーネント
 * 
 * ポートフォリオサイトのメインページを表示します。
 * ヒーローセクション、自己紹介、主な作品、スキル、CTAセクションを含みます。
 */
export default function Home() {
  return (
    <div className="bg-background">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
          <div className="absolute h-full w-full bg-background [mask-image:radial-gradient(transparent,white)] opacity-25" />
        </div>
        <div className="relative py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12 z-10">
          <Badge className="inline-flex items-center px-5 py-2.5 mb-6 text-sm font-medium rounded-full bg-white/10 text-white">
            <span className="w-2 h-2 mr-1 bg-blue-400 rounded-full"></span>
            ポートフォリオ 2024
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            デジタルクリエイティブの<br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">世界へようこそ</span>
          </h1>
          <p className="mb-10 text-lg font-normal text-white/90 lg:text-xl sm:px-16 xl:px-48 animate-fade-in">
            Webサイト制作と動画編集で、あなたのビジョンを現実に
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" variant="default" className="bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link href="/projects">
                作品を見る
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300">
              <Link href="/contact">
                お問い合わせ
              </Link>
            </Button>
          </div>
          <div className="hidden sm:flex justify-center mt-8">
            <svg className="animate-bounce w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* 自己紹介セクション */}
      <section className="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto text-center mb-12 lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">About Me</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
          </h2>
          <p className="mb-5 text-muted-foreground sm:text-xl">
            はじめまして。大学でデザインと映像制作を学んでいます。Webサイト制作と動画編集を得意としており、クリエイティブな視点でプロジェクトに取り組んでいます。
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="relative w-64 h-64 overflow-hidden rounded-full border-4 border-blue-500 shadow-xl transform transition-all duration-300 hover:scale-105">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
              alt="プロフィール画像"
              loading="lazy"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="max-w-lg">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                私は現在、大学でデジタルメディアを専攻している学生です。Webデザインと動画制作の両方に情熱を持ち、技術とクリエイティビティを組み合わせた作品作りを心がけています。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                HTMLやCSS、JavaScriptなどのフロントエンド技術に加え、React、Next.jsなどのモダンなフレームワークを使用したWebサイト制作を行っています。また、Adobe PremiereやAfter Effectsを用いた動画編集も得意としています。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                常に新しい技術やトレンドをキャッチアップし、クライアントのニーズに合わせた最適なソリューションを提供することを目指しています。
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200">Web開発</Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200">UI/UXデザイン</Badge>
              <Badge variant="outline" className="bg-green-500/10 text-green-700 dark:text-green-300 border-green-200">動画編集</Badge>
              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border-yellow-200">グラフィックデザイン</Badge>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-screen-xl mx-auto" />

      {/* 主な作品セクション */}
      <section id="projects" className="py-12 bg-muted/30 rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">注目のプロジェクト</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            最近手がけた代表的なプロジェクトをご紹介します。
            Webサイト制作から動画編集まで幅広いスキルを活かした作品です。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Button asChild size="lg" className="mr-4">
              <Link href="/projects">
                すべてのプロジェクトを見る
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="max-w-screen-xl mx-auto" />

      {/* スキルセクション */}
      <SkillsSection />

      <Separator className="max-w-screen-xl mx-auto" />

      {/* CTA（お問い合わせ）セクション */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
          <div className="absolute h-full w-full bg-background [mask-image:radial-gradient(transparent,white)] opacity-25" />
        </div>
        <div className="relative py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6 z-10">
          <div className="max-w-screen-md mx-auto text-center">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white">
              一緒に素晴らしいプロジェクトを<br className="md:hidden" />作りませんか？
            </h2>
            <p className="mb-10 font-light text-white/90 sm:text-xl">
              ご質問やお仕事のご依頼など、お気軽にお問い合わせください
            </p>
            <Button asChild size="lg" variant="default" className="bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link href="/contact">
                お問い合わせはこちら
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <FaqSection />
    </div>
  );
}
