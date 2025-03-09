"use client";

import { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
  gradient?: "blue-purple" | "yellow-pink";
  align?: "left" | "center" | "right";
};

/**
 * セクションタイトルコンポーネント
 * 
 * 各セクションで使用する共通のタイトルスタイルを提供します。
 * グラデーションカラーとアライメントをカスタマイズできます。
 */
export default function SectionTitle({
  children,
  className = "",
  gradient = "blue-purple",
  align = "center",
}: SectionTitleProps) {
  const gradientClasses = {
    "blue-purple": "from-blue-400 to-purple-400",
    "yellow-pink": "from-yellow-200 to-pink-200",
  };
  
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  
  return (
    <h2 className={`mb-4 text-4xl font-extrabold tracking-tight relative inline-block ${alignClasses[align]} ${className}`}>
      <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradientClasses[gradient]}`}>
        {children}
      </span>
      <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r ${gradientClasses[gradient]}`}></span>
    </h2>
  );
} 