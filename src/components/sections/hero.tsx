"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <section id="hero" className="relative overflow-hidden min-h-screen flex justify-center pt-32">
        <div className="text-center z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4 text-white animate-fade-in">
            <span>HIROTO</span><br/>
            <span>TOUMON</span><br/>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
              PORTFOLIO
            </span>
          </h1>
          <div className="relative h-0.5 w-40 sm:w-60 mx-auto mb-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 animate-slide-right"></div>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 opacity-30 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
} 