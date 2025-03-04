import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, Globe, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { use } from 'react';
import { allProjects } from "@/data/projects";

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