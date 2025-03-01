'use client';

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * スキルセクションコンポーネント
 * 
 * 技術スキルをカテゴリ別に表示します。
 * タブで切り替え可能なカード形式でスキルを表示し、進捗バーでスキルレベルを視覚化します。
 */
export function SkillsSection() {
  const skillCategories = [
    {
      id: "frontend",
      name: "フロントエンド",
      skills: [
        { name: "HTML/CSS", level: 90, tags: ["HTML5", "CSS3", "Responsive"] },
        { name: "JavaScript", level: 85, tags: ["ES6+", "DOM", "Web API"] },
        { name: "TypeScript", level: 80, tags: ["型安全", "インターフェース"] },
        { name: "React", level: 85, tags: ["Hooks", "Context", "Redux"] },
        { name: "Next.js", level: 80, tags: ["SSR", "SSG", "ISR"] },
        { name: "Tailwind CSS", level: 90, tags: ["ユーティリティファースト", "カスタマイズ"] },
      ]
    },
    {
      id: "backend",
      name: "バックエンド",
      skills: [
        { name: "Node.js", level: 75, tags: ["Express", "API設計"] },
        { name: "Python", level: 70, tags: ["Django", "Flask"] },
        { name: "データベース", level: 65, tags: ["PostgreSQL", "MongoDB"] },
        { name: "GraphQL", level: 60, tags: ["クエリ", "ミューテーション"] },
        { name: "REST API", level: 80, tags: ["設計", "実装", "ドキュメント"] },
        { name: "認証/認可", level: 70, tags: ["JWT", "OAuth", "RBAC"] },
      ]
    },
    {
      id: "design",
      name: "デザイン",
      skills: [
        { name: "UI/UXデザイン", level: 75, tags: ["ワイヤーフレーム", "プロトタイプ"] },
        { name: "Figma", level: 80, tags: ["コンポーネント", "オートレイアウト"] },
        { name: "Adobe XD", level: 70, tags: ["デザインシステム"] },
        { name: "Photoshop", level: 65, tags: ["画像編集", "合成"] },
        { name: "Illustrator", level: 60, tags: ["ベクターグラフィック"] },
        { name: "アニメーション", level: 70, tags: ["CSS", "GSAP", "Framer Motion"] },
      ]
    },
    {
      id: "other",
      name: "その他",
      skills: [
        { name: "Git/GitHub", level: 85, tags: ["バージョン管理", "CI/CD"] },
        { name: "Docker", level: 70, tags: ["コンテナ化", "開発環境"] },
        { name: "テスト", level: 75, tags: ["Jest", "React Testing Library"] },
        { name: "パフォーマンス最適化", level: 80, tags: ["Lighthouse", "Web Vitals"] },
        { name: "アクセシビリティ", level: 75, tags: ["WCAG", "スクリーンリーダー"] },
        { name: "SEO", level: 70, tags: ["メタタグ", "構造化データ"] },
      ]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            スキル
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            これまでに習得したスキルと技術を紹介します。常に新しい技術を学び、スキルを向上させることを心がけています。
          </motion.p>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader className="pb-2">
                        <CardTitle>{skill.name}</CardTitle>
                        <div className="text-sm text-muted-foreground">
                          <div className="flex flex-wrap gap-1 mt-2">
                            {skill.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">スキルレベル</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
} 