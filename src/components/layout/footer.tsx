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
        { name: "スキル", href: "/skills" },
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

  return (
    <footer className="bg-background border-t" suppressHydrationWarning>
      <LayoutGroup>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          
          <div className="md:flex md:justify-between">
            <motion.div 
              layoutId="footer-links-section"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 md:mb-0"
            >
              <Link href="/" className="flex items-center group">
                <div className="flex items-center space-x-2">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    layoutId="logo-svg"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </motion.svg>
                  <span className="self-center text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 transition-transform group-hover:scale-105">Portfolio</span>
                </div>
              </Link>
              <p className="mt-3 text-sm text-muted-foreground max-w-xs">
                Webサイト制作と動画編集のポートフォリオサイトです。クリエイティブな作品とスキルを紹介しています。
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              {footerLinks.map((category, index) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 * (index + 1),
                    type: "spring",
                    stiffness: 50,
                    damping: 10
                  }}
                  style={{
                    willChange: "opacity, transform"
                  }}
                >
                  <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">{category.title}</h2>
                  <ul className="text-muted-foreground font-medium">
                    {category.links.map((link, linkIndex) => (
                      <li key={link.name} className={linkIndex !== category.links.length - 1 ? "mb-4" : ""}>
                        {'external' in link ? (
                          <a 
                            href={link.href} 
                            className="hover:text-primary transition-colors flex items-center" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {'iconName' in link && <span className="mr-2">{renderIcon(link.iconName, "w-4 h-4")}</span>}
                            {link.name}
                          </a>
                        ) : (
                          <Link 
                            href={link.href} 
                            className="hover:text-primary transition-colors flex items-center"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <motion.div 
              layoutId="social-links"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex mt-4 space-x-5 sm:justify-center sm:mt-0"
            >
            </motion.div>
          </div>
        </div>
      </LayoutGroup>
    </footer>
  );
}