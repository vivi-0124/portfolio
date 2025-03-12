"use client";

import Image from "next/image";
import SectionTitle from "@/components/ui/section-title";

export default function About() {
  return (
    <>
      <section id="about" className="min-h-screen flex justify-center relative overflow-hidden">
        
        <div className="mx-auto max-w-screen-xl w-full relative z-10 px-4">
          <div className="max-w-screen-md mx-auto text-center">
            <div className="my-16 mx-auto">
            <SectionTitle gradient="blue-purple" className="text-center">About Me</SectionTitle>
            </div>
          </div>
             
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
            <div className="flex justify-center items-center">
              <div className="relative w-72 h-72 rounded-full border-4 border-purple-500/50 shadow-xl transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/meiofes31hero.png"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
              </div>
            </div>
            <div className="space-y-8 bg-gray-600/80 p-6 rounded-xl backdrop-blur-sm flex flex-col justify-center">
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