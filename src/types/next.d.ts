// Next.js モジュールの型定義
declare module 'next/navigation' {
  export function notFound(): never;
  export function redirect(url: string): never;
  export function permanentRedirect(url: string): never;
} 