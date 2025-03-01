import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * コンテナコンポーネント
 * 
 * コンテンツの最大幅を制限し、中央揃えにするためのコンポーネントです。
 * レスポンシブデザインに対応し、画面サイズに応じて適切な余白を提供します。
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 md:px-6", className)}>
      {children}
    </div>
  );
} 