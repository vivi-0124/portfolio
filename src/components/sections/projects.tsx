"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SectionTitle from "@/components/ui/section-title";
import { allProjects } from '@/data/projects';

/**
 * プロジェクトカードのProps
 */
interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'web' | 'video';
  tags: string[];
}

/**
 * プロジェクトカードコンポーネント
 * 
 * 個別のプロジェクト情報を表示するカード
 */
function ProjectCard({ id, title, imageUrl, category, tags }: ProjectCardProps) {
  return (
    <Link href={`/${id}`} className="block h-full group">
      <Card className="overflow-hidden h-full flex flex-col border border-white/20 rounded-lg transition-all duration-500 shadow-md hover:shadow-xl hover:shadow-white/5 hover:border-white/40 relative">
        {/* サムネイル画像部分 */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${title}のサムネイル画像`}
            aria-label="プロジェクトのサムネイル"
            loading="lazy"
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
            onError={(e: any) => {
              e.currentTarget.src = '/placeholder.png'
            }}
          />
          
          {/* カテゴリバッジ */}
          <div className="absolute top-3 left-3 z-20">
            <Badge 
              variant={category === 'web' ? 'default' : 'secondary'}
              className={`
                ${category === 'web' 
                  ? 'bg-blue-600 group-hover:bg-blue-700' 
                  : 'bg-purple-600 group-hover:bg-purple-700'} 
                text-white font-medium px-3 py-1 shadow-lg backdrop-blur-sm text-sm
              `}
              aria-label={category === 'web' ? 'Webサイト' : '動画'}
            >
              {category === 'web' ? (
                <span className="flex items-center">
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                  Webサイト
                </span>
              ) : (
                <span className="flex items-center">
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  動画
                </span>
              )}
            </Badge>
          </div>
        </div>
        
        {/* 説明とタグ */}
        <div className="bg-slate-800 text-white p-4 flex-grow flex flex-col">
          {/* タイトル */}
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-1">{title}</h3>
          
          {/* タグリスト */}
          <div className="flex flex-wrap gap-1.5 mb-3 justify-center">
            {tags.slice(0, 3).map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="bg-slate-700 text-gray-200 border-slate-600 hover:bg-slate-600 transition-colors duration-200 px-2 py-0.5 text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge 
                variant="outline" 
                className="bg-slate-700 text-gray-300 border-slate-600 px-2 py-0.5 text-xs font-medium"
              >
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}

/**
 * プロジェクトグリッドコンポーネント
 * 
 * プロジェクトカードをグリッドレイアウトで表示
 */
function ProjectGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {allProjects.map((project) => (
          <div key={project.id} className="transition-all duration-300">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * プロジェクトセクションコンポーネント
 * 
 * プロジェクトセクション全体を管理するメインコンポーネント
 */
export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="relative px-4 mx-auto max-w-screen-xl text-center w-full z-10">
        <div className="my-16 mx-auto">
          <SectionTitle gradient="blue-purple" className="text-center">Projects</SectionTitle>
        </div>
        
        <ProjectGrid />
      </div>
    </section>
  );
} 