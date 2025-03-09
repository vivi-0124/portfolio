import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";

/**
 * ホームページコンポーネント
 * 
 * ポートフォリオサイトのLP風メインページを表示します。
 * ヒーローセクション、自己紹介、主な作品、CTAセクションを含みます。
 * 各セクションからそれぞれのページに遷移できるようになっています。
 */
export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <Hero />

      {/* 自己紹介セクション */}
      <About />

      {/* 主な作品セクション */}
      <Projects />
    </>
  );
}
