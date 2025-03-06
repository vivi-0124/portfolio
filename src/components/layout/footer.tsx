'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  AlertCircle, 
  Github, 
  Twitter, 
  Facebook, 
  MessageSquare 
} from 'lucide-react';

function renderIcon(iconName: string, className: string) {
  const icons: Record<string, JSX.Element> = {
    github: <Github className={className} />,
    twitter: <Twitter className={className} />,
    facebook: <Facebook className={className} />,
    mail: <Mail className={className} />,
    alert: <AlertCircle className={className} />,
    message: <MessageSquare className={className} />,
  };
  return icons[iconName] || null;
}

/**
 * フッターコンポーネント
 * 
 * サイト全体の下部に表示され、サイトマップやSNSリンク、コピーライト情報を表示します。
 * レスポンシブデザインに対応し、モバイル・デスクトップ両方で適切に表示されます。
 * ニュースレター登録フォームとアニメーション効果を追加しています。
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubscribeStatus('error');
      setErrorMessage('有効なメールアドレスを入力してください');
      return;
    }
    
    // ここで実際のニュースレター登録処理を行う
    // 今回はモックとして成功を返す
    setSubscribeStatus('success');
    setEmail('');
    
    // 3秒後に状態をリセット
    setTimeout(() => {
      setSubscribeStatus('idle');
    }, 3000);
  };

  const footerLinks = [
    {
      title: "リソース",
      links: [
        { name: "プロジェクト", href: "/projects" },
        { name: "お問い合わせ", href: "/contact" }
      ]
    },
    {
      title: "フォローする",
      links: [
        { 
          name: "GitHub", 
          href: "https://github.com/", 
          iconName: "github",
          external: true
        },
        { 
          name: "Twitter", 
          href: "https://twitter.com/", 
          iconName: "twitter",
          external: true
        }
      ]
    },
  ];

  const navLinks = [
    { href: '#about', label: 'ABOUT' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900" suppressHydrationWarning>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="absolute h-full w-full bg-background [mask-image:radial-gradient(transparent,white)] opacity-25" />
      </div>
      <div className="relative mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10">
        {/* ナビゲーションリンク */}
        <nav className="flex justify-center space-x-12 mb-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-white/80 transition-colors text-sm tracking-[0.2em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* コピーライト */}
        <div className="text-center text-sm text-white/80 tracking-[0.2em]">
          © HIROTO TOUMON
        </div>
      </div>
    </footer>
  );
}