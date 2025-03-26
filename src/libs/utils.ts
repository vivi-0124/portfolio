import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * クラス名を結合するユーティリティ関数
 * 
 * clsxとtailwind-mergeを組み合わせて、クラス名を効率的に結合します。
 * 条件付きクラスの適用や、Tailwindのクラス名の衝突を解決するのに役立ちます。
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
