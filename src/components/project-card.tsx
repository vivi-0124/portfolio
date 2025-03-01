import Link from 'next/link';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border-opacity-70 hover:border-primary/50 group flex flex-col h-full">
      <div className="relative h-52 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
          src={imageUrl}
          alt={title}
          loading="lazy"
          width={600}
          height={400}
          className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20">
          <Badge 
            variant={category === 'web' ? 'default' : 'secondary'}
            className={`
              ${category === 'web' 
                ? 'bg-blue-500 hover:bg-blue-600' 
                : 'bg-purple-500 hover:bg-purple-600'} 
              text-white font-medium px-3 py-1 shadow-md
            `}
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
      <CardHeader className="p-5 pb-0">
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-3 flex-grow flex flex-col">
        <CardDescription className="text-muted-foreground line-clamp-3 min-h-[4.5rem]">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4 mb-auto">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-muted/50 text-muted-foreground border-muted-foreground/20 hover:bg-muted transition-colors duration-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 mt-auto">
        <Button 
          asChild 
          variant="default" 
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Link href={`/projects/${id}`} className="flex items-center justify-center">
            詳細を見る
            <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 