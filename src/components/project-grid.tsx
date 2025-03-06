import { allProjects } from '@/data/projects';
import ProjectCard from './project-card';

export function ProjectGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((project) => (
          <div key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
} 