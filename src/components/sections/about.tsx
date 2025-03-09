"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "@/components/ui/section-title";

export default function About() {
  return (
    <>
      <section id="about" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <div className="mx-auto max-w-screen-xl w-full relative z-10 px-4">
          <div className="max-w-screen-md mx-auto text-center mb-16">
            <SectionTitle gradient="blue-purple">About Me</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center w-full max-w-6xl mx-auto">
            <div className="relative w-72 h-72 mx-auto overflow-hidden rounded-full border-4 border-blue-400/30 shadow-2xl transform transition-all duration-300 hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                alt="プロフィール画像"
                loading="lazy"
                width={288}
                height={288}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-400/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-8 bg-black/40 p-6 rounded-xl backdrop-blur-sm">
              <div className="space-y-6">
                <p className="text-lg text-gray-100 leading-relaxed font-medium">
                Next.jsを活用したAI駆動開発に取り組みながら、UI/UXデザイン、SEO対策、パフォーマンス最適化にも力を入れています。
                </p>
                <p className="text-lg text-gray-100 leading-relaxed font-medium">
                現在、大学祭の公式サイトや企業のコーポレートサイトを制作しており、使いやすさと効果的なWeb体験の提供を目指しています。
                </p>
                <p className="text-lg text-gray-100 leading-relaxed font-medium">
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