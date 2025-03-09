"use client";

import { Badge } from "@/components/ui/badge";
import SectionTitle from "@/components/ui/section-title";

export default function About() {
  return (
    <>
      <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0"></div>
        
        <div className="mx-auto max-w-screen-xl w-full relative z-10 px-4">
          <div className="max-w-screen-md mx-auto text-center mb-16">
            <SectionTitle gradient="blue-purple">About Me</SectionTitle>
          </div>
          <div className="absolute bottom-[15%] left-[0%] z-20">
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-blue-500 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute bg-transparent rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8 w-full max-w-6xl mx-auto mt-24 mb-80">
            <div className="mx-auto w-full md:w-3/4 lg:w-2/3 space-y-8 bg-black/40 p-6 rounded-xl backdrop-blur-sm text-center">
              <div className="space-y-4">
                <p className="text-lg text-gray-100 leading-relaxed font-medium tracking-wide">
                Next.jsを活用したAI駆動開発に取り組みながら、UI/UXデザイン、SEO対策、パフォーマンス最適化にも力を入れています。
                </p>
                <p className="text-lg text-gray-100 leading-relaxed font-medium tracking-wide">
                現在、大学祭の公式サイトや企業のコーポレートサイトを制作しており、使いやすさと効果的なWeb体験の提供を目指しています。
                </p>
                <p className="text-lg text-gray-100 leading-relaxed font-medium tracking-wide">
                今後は、AIを活用した開発の知見を深めるとともに、コーディングスキルを磨き、より幅広い技術を身につけていきたいと考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 