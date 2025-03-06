import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { allProjects } from "@/data/projects";
import { ProjectGrid } from "@/components/project-grid";
import PageNav from "@/components/page-nav";

/**
 * サンプルプロジェクトデータ
 * 
 * ポートフォリオで表示するプロジェクト情報のサンプルデータ
 */

/**
 * ホームページコンポーネント
 * 
 * ポートフォリオサイトのLP風メインページを表示します。
 * ヒーローセクション、自己紹介、主な作品、CTAセクションを含みます。
 * 各セクションからそれぞれのページに遷移できるようになっています。
 */
export default function Home() {
  return (
    <div className="bg-background">
      {/* ページ内ナビゲーション */}
      <PageNav />
      
      {/* ヒーローセクション */}
      <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
          <div className="absolute h-full w-full bg-background [mask-image:radial-gradient(transparent,white)] opacity-25" />
          <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse" />
        </div>
        <div className="relative px-4 mx-auto max-w-screen-xl text-center w-full z-10">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl animate-fade-in">
            HIROTO TOUMON<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200 animate-gradient-x">PORTFOLIO</span>
          </h1>
          <p className="mb-10 text-lg font-normal text-white/90 lg:text-xl sm:px-16 xl:px-48 animate-fade-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Webサイト制作と動画編集で、あなたのビジョンを現実に
          </p>
          <div className="hidden sm:flex justify-center mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <svg className="animate-bounce w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* 自己紹介セクション */}
      <section id="about" className="min-h-screen flex items-center bg-background px-4 py-8">
        <div className="mx-auto max-w-screen-xl w-full">
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
        </div>
      </section>

      <Separator className="max-w-screen-xl mx-auto" />

      {/* 主な作品セクション */}
      <section id="projects" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
          <div className="absolute h-full w-full bg-background [mask-image:radial-gradient(transparent,white)] opacity-25" />
        </div>
        <div className="relative px-4 mx-auto max-w-screen-xl text-center w-full z-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">注目のプロジェクト</h2>
          
          <ProjectGrid />
        </div>
      </section>

      <Separator className="max-w-screen-xl mx-auto" />

      {/* CTA（お問い合わせ）セクション - フッターと合わせて画面いっぱい */}
      <section id="contact" className="flex items-center justify-center bg-background px-4 py-8" style={{ minHeight: 'calc(100vh - 68px)' }}>
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground">
            一緒に素晴らしいプロジェクトを<br className="md:hidden" />作りませんか？
          </h2>
          <p className="mb-10 font-light text-muted-foreground sm:text-xl">
            ご質問やお仕事のご依頼など、お気軽にお問い合わせください
          </p>
          <Button asChild size="lg" variant="default" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link href="/contact">
              お問い合わせはこちら
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
