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
  fullDescription: string;
  imageUrl: string;
  category: 'web' | 'video';
  tags: string[];
  website: string | null;
}

/**
 * プロジェクトカードコンポーネント
 * 
 * 個別のプロジェクト情報を表示するカード
 */
function ProjectCard({ id, title, description, fullDescription, imageUrl, category, tags, website }: ProjectCardProps) {
  // ウェブサイトリンクがない場合のクリックを無効にするためのハンドラー
  const handleCardClick = (e: React.MouseEvent) => {
    if (!website) {
      e.preventDefault();
    }
  };
  
  return (
    <div className="group relative w-full">
      <Link 
        href={website || "#"} 
        className={`block w-full ${!website ? 'cursor-default' : ''}`} 
        target={website ? "_blank" : "_self"} 
        rel={website ? "noopener noreferrer" : ""}
        onClick={handleCardClick}
      >
        <Card className={`overflow-hidden w-full flex flex-row border rounded-lg transition-all duration-500 shadow-md relative h-[220px]
          ${website 
            ? 'border-white/20 hover:shadow-xl hover:shadow-white/5 hover:border-white/40' 
            : 'border-gray-700/50 opacity-80'}`}>
          
          {/* サムネイル画像部分（左側） - 幅を40%に固定 */}
          <div className="relative w-[40%] bg-white/5 overflow-hidden">
            <div className="aspect-video w-full h-full flex items-center justify-center p-3">
              <div className="relative w-full h-full">
                <Image
                  src={imageUrl}
                  alt={`${title}のサムネイル画像`}
                  aria-label="プロジェクトのサムネイル"
                  loading="lazy"
                  fill
                  sizes="40vw"
                  className={`object-contain transition-transform duration-700 ease-in-out 
                    ${website ? 'group-hover:scale-105' : 'filter grayscale-[30%]'}`}
                  onError={(e: any) => {
                    e.currentTarget.src = '/placeholder.png'
                  }}
                />
              </div>
            </div>
            
            {/* カテゴリバッジ */}
            <div className="absolute top-3 left-3 z-20">
              <Badge 
                variant={category === 'web' ? 'default' : 'secondary'}
                className={`
                  ${category === 'web' 
                    ? 'bg-blue-600 group-hover:bg-blue-700' 
                    : 'bg-purple-600 group-hover:bg-purple-700'} 
                  text-white font-medium px-2 py-0.5 shadow-lg backdrop-blur-sm text-xs
                `}
                aria-label={category === 'web' ? 'Webサイト' : '動画'}
              >
                {category === 'web' ? 'Web' : '動画'}
              </Badge>
            </div>
          </div>
          
          {/* 説明とタグ（右側） - 幅を60%に固定 */}
          <div className="w-[60%] bg-slate-800 text-white p-4 md:p-5 flex flex-col overflow-hidden">
            {/* タイトル */}
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-1 text-left">{title}</h3>
            
            {/* 説明文（fullDescription） */}
            <p className="text-gray-300 text-xs md:text-sm mb-3 line-clamp-4 text-left">{fullDescription}</p>
            
            {/* タグリスト */}
            <div className="flex flex-wrap gap-0.5 mt-auto pb-1 leading-tight">
              {tags.slice(0, 12).map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="bg-slate-700 text-gray-200 border-slate-600 hover:bg-slate-600 transition-colors duration-200 px-1 py-0 text-[9px] tracking-tight font-medium m-0.5"
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 12 && (
                <Badge 
                  key="more" 
                  variant="outline" 
                  className="bg-slate-700 text-gray-300 border-slate-600 px-1 py-0 text-[9px] font-medium m-0.5"
                >
                  +{tags.length - 12}
                </Badge>
              )}
            </div>
            
            {/* リンク利用可能アイコン */}
            {website && (
              <div className="absolute top-3 right-3">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </div>
            )}
          </div>
        </Card>
      </Link>
    </div>
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
      <div className="flex flex-col gap-4">
        {allProjects.map((project) => (
          <div key={project.id} className="transition-all duration-300">
            <ProjectCard 
              id={project.id}
              title={project.title}
              description={project.description}
              fullDescription={project.fullDescription}
              imageUrl={project.imageUrl}
              category={project.category}
              tags={project.tags}
              website={project.website}
            />
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