'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  User, 
  Home,
  LayoutGrid, 
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ページ内ナビゲーションコンポーネント
 * 
 * LP用のサイドナビゲーションとテーマ切り替えボタンを提供します。
 * スクロール位置によってアクティブなセクションをハイライトします。
 */
export default function PageNav() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // スクロール検出とアクティブセクションの特定
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // スクロールトップボタンの表示/非表示
      if (scrollPosition > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
      
      // ページ最下部に達したかどうかをチェック
      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 50;
      if (isAtBottom) {
        console.log('ページ最下部に到達しました - contactセクションをアクティブに設定');
        setActiveSection('contact');
        return;
      }
      
      // デバッグ情報
      console.log(`スクロール位置: ${scrollPosition}, ウィンドウ高さ: ${windowHeight}, 文書高さ: ${documentHeight}`);
      console.log(`ページ最下部？: ${isAtBottom}`);
      
      // 現在のセクションを特定
      // 逆順でチェックすることで、後のセクションが優先される
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          const offsetHeight = element.offsetHeight;
          
          // セクションがビューポートに表示されているかをチェック
          const isSectionVisible = (
            // 上部が表示領域内にある場合 または 下部が表示領域内にある場合
            (rect.top >= 0 && rect.top < windowHeight) ||
            (rect.bottom > 0 && rect.bottom <= windowHeight) ||
            // セクション全体がビューポートを覆っている場合
            (rect.top <= 0 && rect.bottom >= windowHeight)
          );
          
          // デバッグ情報
          console.log(`${section}: top=${rect.top}, bottom=${rect.bottom}, visible=${isSectionVisible}`);
          
          if (isSectionVisible) {
            if (activeSection !== section) {
              console.log(`アクティブセクションを設定: ${section}`);
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    // 初期ロード時にもスクロールイベントを発火させる
    setTimeout(() => {
      handleScroll();
    }, 500);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // スクロールトップ関数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // セクションへのスクロール
  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      // セクションの位置を取得
      const rect = element.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top;
      
      console.log(`Scrolling to position: ${offsetTop - 20}`);
      
      window.scrollTo({
        top: offsetTop - 20,
        behavior: 'smooth',
      });
      
      // アクティブセクションを設定
      setActiveSection(sectionId);
    } else {
      console.error(`Section with ID '${sectionId}' not found`);
    }
  };

  const navItems = [
    { id: 'hero', label: 'ホーム', icon: Home },
    { id: 'about', label: '自己紹介', icon: User },
    { id: 'projects', label: '作品', icon: LayoutGrid },
  ];

  return (
    <>
      {/* サイドナビゲーション - デスクトップ */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col items-center space-y-4 bg-background/60 backdrop-blur-md p-3 rounded-full shadow-lg border border-border">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full relative transition-all duration-300 hover:bg-accent/80 ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
                title={item.label}
              >
                <Icon className="h-5 w-5 relative z-10" />
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10"
                    transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 blur-sm" />
                    <div className="absolute inset-0 rounded-full border border-blue-500/50 dark:border-blue-400/30" />
                  </motion.div>
                )}
              </Button>
            );
          })}
        </div>
      </div>

      {/* モバイル・タブレット用ボトムナビゲーション */}
      <div className="fixed bottom-[72px] left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
        <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-md px-3 py-2 rounded-full shadow-lg border border-border">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full relative transition-all duration-300 hover:bg-accent/80 ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
                title={item.label}
              >
                <Icon className="h-5 w-5 relative z-10" />
                {activeSection === item.id && (
                  <motion.div
                    layoutId="mobile-nav-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10"
                    transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 blur-sm" />
                    <div className="absolute inset-0 rounded-full border border-blue-500/50 dark:border-blue-400/30" />
                  </motion.div>
                )}
              </Button>
            );
          })}
        </div>
      </div>

      {/* スクロールトップボタン */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed right-4 bottom-[124px] lg:bottom-4 z-50 bg-primary text-primary-foreground p-2 rounded-full shadow-lg"
            aria-label="ページトップへスクロール"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
} 