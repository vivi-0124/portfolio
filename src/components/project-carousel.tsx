'use client';

import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ProjectCard from './project-card';
import { type Project } from '@/data/projects';

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') scrollPrev();
    if (e.key === 'ArrowRight') scrollNext();
  }, [scrollPrev, scrollNext]);

  return (
    <div className="relative max-w-7xl mx-auto px-4" onKeyDown={handleKeyDown}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 py-4">
          {projects.map((project) => (
            <div key={project.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full left-0 px-4 pointer-events-none">
        <Button
          variant="secondary"
          size="icon"
          className={`rounded-full shadow-lg pointer-events-auto transition-opacity ${
            !prevBtnEnabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-background/80'
          }`}
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className={`rounded-full shadow-lg pointer-events-auto transition-opacity ${
            !nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-background/80'
          }`}
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
} 