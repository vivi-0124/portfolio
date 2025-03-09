'use client';

import { motion } from "framer-motion";

/**
 * フッターコンポーネント
 * 
 * サイト全体の下部に表示され、コピーライト情報を表示します。
 * リンクは削除し、シンプルなデザインになっています。
 * 高さは固定で、contactセクションと合わせて画面いっぱいになるように設計されています。
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden  h-[68px] flex items-center" suppressHydrationWarning>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="absolute h-full w-full" />
      </div>
      <div className="relative mx-auto w-full max-w-screen-xl p-4 z-10">
        {/* コピーライト */}
        <div className="text-center text-sm text-white/80 tracking-[0.2em]">
          © HIROTO TOUMON
        </div>
      </div>
    </footer>
  );
}