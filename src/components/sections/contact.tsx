"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SectionTitle from "@/components/ui/section-title";

export default function Contact() {
  return (
    <>
      <Separator className="max-w-screen-xl mx-auto opacity-20" />
      
      <section id="contact" className="relative flex items-center justify-center px-4 py-16 min-h-[50vh]">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <div className="max-w-screen-md mx-auto text-center relative z-10">
          <SectionTitle gradient="blue-purple" className="whitespace-nowrap text-2xl md:text-3xl max-w-full overflow-hidden">
            一緒に素晴らしいプロジェクトを作りませんか？
          </SectionTitle>
          <div className="flex justify-center mt-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg border-2 border-white/20"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                お問い合わせはこちら
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 