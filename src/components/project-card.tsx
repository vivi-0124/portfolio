'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * プロジェクトカードコンポーネント
 * 
 * プロジェクト情報を表示するためのカードコンポーネント。
 * プロジェクトのサムネイル画像、タイトル、説明文、カテゴリ、タグ、詳細ページへのリンクを含みます。
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
 * プロジェクトカードを表示するコンポーネント
 * 
 * @param id - プロジェクトID
 * @param title - プロジェクトタイトル
 * @param description - プロジェクト説明
 * @param imageUrl - プロジェクトサムネイル画像URL
 * @param category - プロジェクトカテゴリ('web'または'video')
 * @param tags - プロジェクトに関連するタグ配列
 */
export default function ProjectCard({ id, title, description, imageUrl, category, tags }: ProjectCardProps) {
  return (
    <Link href={`/${id}`} className="block h-full group">
      <Card className="overflow-hidden transition-all duration-300 border-border/10 hover:border-primary/20 group flex flex-col h-[250px] cursor-pointer bg-card">
        <div className="relative h-40 w-full overflow-hidden border-b border-border/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={imageUrl}
            alt={`${title}のサムネイル画像`}
            aria-label="プロジェクトのサムネイル"
            loading="lazy"
            width={600}
            height={400}
            className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            onError={(e: any) => {
              e.currentTarget.src = '/placeholder.png'
            }}
          />
          <div className="absolute top-3 left-3 z-20">
            <Badge 
              variant={category === 'web' ? 'default' : 'secondary'}
              className={`
                ${category === 'web' 
                  ? 'bg-blue-500/90 hover:bg-blue-600' 
                  : 'bg-purple-500/90 hover:bg-purple-600'} 
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
        <div className="flex flex-col flex-grow">
          <CardHeader className="p-4 pb-2 flex-none">
            <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-1 flex-grow flex flex-col justify-end">
            <div className="flex items-center gap-1.5 justify-center overflow-hidden whitespace-nowrap">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="bg-muted/30 text-muted-foreground border-muted-foreground/20 hover:bg-muted/50 transition-colors duration-200 px-2 py-0.5 text-sm shrink-0"
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge 
                  variant="outline" 
                  className="bg-muted/20 text-muted-foreground/70 border-muted-foreground/10 px-2 py-0.5 text-sm shrink-0"
                >
                  +{tags.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
} 