import Link from 'next/link';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SectionTitle from "@/components/ui/section-title";
import { MicroCMSProject, fetchProjects } from '@/libs/projects';
import { ExternalLink } from 'lucide-react';

/**
 * プロジェクトカードのProps
 */
type ProjectCardProps = Pick<MicroCMSProject, 'title' | 'description' | 'image' | 'tags' | 'link'>;

/**
 * プロジェクトカードコンポーネント
 */
function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Link 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full group"
    >
      <Card className="relative overflow-hidden border-0 bg-[#1a1f2e] h-[220px]">
        <div className="flex h-full">
          {/* 画像部分 */}
          <div className="relative w-[40%] bg-black/20">
            <Image
              src={image.url}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 400px"
            />
          </div>

          {/* コンテンツ部分 */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-white pr-8">{title}</h3>
                <ExternalLink className="w-5 h-5 text-blue-400 flex-shrink-0 transform transition-transform group-hover:scale-110" />
              </div>
              <p className="text-gray-400 text-sm line-clamp-2 whitespace-pre-line">
                {description}
              </p>
            </div>
            
            {/* タグ */}
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge 
                  key={tag}
                  variant="secondary"
                  className="bg-[#4b5563]/30 hover:bg-[#4b5563]/40 text-gray-300 text-[11px] px-2 py-0.5 font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

/**
 * プロジェクトグリッドコンポーネント
 */
function ProjectGrid({ projects }: { projects: MicroCMSProject[] }) {
  if (projects.length === 0) {
    return (
      <div className="w-full text-center py-20">
        <p className="text-gray-400">プロジェクトがありません</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-6xl mx-auto">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          tags={project.tags}
          link={project.link}
        />
      ))}
    </div>
  );
}

/**
 * プロジェクトセクションコンポーネント
 */
export default async function Projects() {
  // ビルド時にデータを取得
  const projects = await fetchProjects();
  // 古い順に並び替え
  const sortedProjects = [...projects].reverse();

  return (
    <section id="projects" className="min-h-screen flex justify-center relative overflow-hidden">
      <div className="mx-auto max-w-screen-xl w-full relative z-10 px-4">
        <div className="my-16 mx-auto text-center">
          <SectionTitle gradient="blue-purple" className="">
            Projects
          </SectionTitle>
        </div>
        <ProjectGrid projects={sortedProjects} />
      </div>
    </section>
  );
} 
