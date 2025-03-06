import { allProjects } from '@/data/projects';
import ProjectCard from './project-card';

export function ProjectGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {allProjects.map((project) => (
          <div key={project.id} className="bg-card shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
} 