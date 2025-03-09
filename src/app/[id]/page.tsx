import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allProjects } from "@/data/projects";

// この関数は静的に生成するページのパスを定義します
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return allProjects
    .filter(project => project.id.startsWith('web') || project.id.startsWith('video'))
    .map((project) => ({
      id: project.id,
    }));
}

// パラメータ型の定義
interface Params {
  id: string;
}

// ページコンポーネント
export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const project = allProjects.find((p) => p.id === id);
  
  if (!project) {
    notFound();
  }

  // fullDescriptionを段落に分割
  const paragraphs = project.fullDescription
    .split('\n')
    .map(p => p.trim())
    .filter(p => p.length > 0);

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container max-w-5xl py-10 px-4 mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-6 text-gray-300 hover:text-white hover:bg-gray-800/50">
            <Link href="/#projects" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              トップページに戻る
            </Link>
          </Button>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="capitalize bg-blue-900/30 text-blue-200 hover:bg-blue-800/40">
              {project.category}
            </Badge>
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-gray-300 border-gray-700 hover:bg-gray-800/50">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden border border-gray-800 aspect-video relative mb-8">
          <Image 
            src={project.imageUrl} 
            alt={project.title} 
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 space-y-4 text-gray-300">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4 text-white">使用技術・スキル</h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge key={skill} className="bg-purple-900/30 text-purple-200 border-purple-800 hover:bg-purple-800/40">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-900/80 p-6 rounded-lg border border-gray-800 sticky top-6">
              <h2 className="text-xl font-semibold mb-4 text-white">プロジェクト情報</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-200">完了日</p>
                    <p className="text-sm text-gray-400">{project.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-200">クライアント</p>
                    <p className="text-sm text-gray-400">{project.client}</p>
                  </div>
                </div>
                
                {project.website && (
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 mr-3 text-blue-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-200">Webサイト</p>
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        サイトを訪問
                      </a>
                    </div>
                  </div>
                )}
                
                {project.github && project.github.length > 0 && (
                  <div className="flex items-start">
                    <Github className="w-5 h-5 mr-3 text-blue-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-200">ソースコード</p>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-white">ギャラリー</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-gray-800 aspect-video relative group">
                  <Image 
                    src={image} 
                    alt={`${project.title} ギャラリー画像 ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 