import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

/**
 * スキル情報
 * 
 * カテゴリごとのスキルと習熟度を定義
 */
const skillsData = {
  webDevelopment: [
    { name: "HTML/CSS", level: 95, description: "セマンティックなマークアップとモダンCSSの活用" },
    { name: "JavaScript", level: 90, description: "ES6+の機能を活用した効率的な実装" },
    { name: "React", level: 85, description: "コンポーネント設計とステート管理" },
    { name: "Next.js", level: 80, description: "SSRとSSGを活用したパフォーマンス最適化" },
    { name: "TypeScript", level: 80, description: "型安全なコードの実装" },
    { name: "Tailwind CSS", level: 90, description: "ユーティリティファーストのスタイリング" },
  ],
  videoEditing: [
    { name: "Adobe Premiere Pro", level: 90, description: "動画編集と効果の適用" },
    { name: "After Effects", level: 80, description: "モーショングラフィックスとVFX" },
    { name: "DaVinci Resolve", level: 75, description: "カラーグレーディングと編集" },
    { name: "動画撮影", level: 85, description: "構図と照明技術" },
    { name: "ストーリーボード", level: 80, description: "視覚的なストーリーテリング" },
  ],
  design: [
    { name: "Adobe Photoshop", level: 85, description: "画像編集と合成" },
    { name: "Adobe Illustrator", level: 80, description: "ベクターグラフィックスの作成" },
    { name: "Figma", level: 85, description: "UI/UXデザインとプロトタイピング" },
    { name: "デザイン原則", level: 90, description: "色彩理論、タイポグラフィ、レイアウト" },
    { name: "レスポンシブデザイン", level: 85, description: "さまざまなデバイスサイズに対応するデザイン" },
  ]
}

/**
 * スキルレベルを表示するコンポーネント
 */
function SkillLevel({ name, level, description }: { name: string, level: number, description: string }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-medium">{name}</span>
        <span className="text-sm font-medium">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

/**
 * スキルページコンポーネント
 * 
 * Web開発、動画編集、デザインの3つのカテゴリでスキルを表示します。
 * 各スキルの習熟度をプログレスバーで視覚化します。
 */
export default function SkillsPage() {
  return (
    <div className="bg-background">
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            スキル＆専門知識
          </h1>
          <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
            デジタルクリエイティブの各分野で培ったスキルをご紹介します
          </p>
        </div>
      </section>

      {/* スキル概要セクション */}
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground">
            技術スキル概要
          </h2>
          <p className="text-muted-foreground">
            私は常に新しい技術やツールの習得に励んでいます。Web開発、動画編集、グラフィックデザインの各分野で実践的なスキルを身につけ、それらを組み合わせることで総合的なデジタルクリエイティブのソリューションを提供しています。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Web開発スキル */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Web開発</CardTitle>
                <Badge>フロントエンド</Badge>
              </div>
              <CardDescription>
                モダンなWeb技術を活用したサイト制作
              </CardDescription>
            </CardHeader>
            <CardContent>
              {skillsData.webDevelopment.map((skill) => (
                <SkillLevel
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  description={skill.description}
                />
              ))}
            </CardContent>
          </Card>

          {/* 動画編集スキル */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>動画編集</CardTitle>
                <Badge variant="secondary">映像制作</Badge>
              </div>
              <CardDescription>
                魅力的な映像コンテンツの制作
              </CardDescription>
            </CardHeader>
            <CardContent>
              {skillsData.videoEditing.map((skill) => (
                <SkillLevel
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  description={skill.description}
                />
              ))}
            </CardContent>
          </Card>

          {/* デザインスキル */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>デザイン</CardTitle>
                <Badge variant="outline">グラフィック</Badge>
              </div>
              <CardDescription>
                視覚的に魅力的なデザイン制作
              </CardDescription>
            </CardHeader>
            <CardContent>
              {skillsData.design.map((skill) => (
                <SkillLevel
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  description={skill.description}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 活用事例セクション */}
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-muted">
        <div className="max-w-screen-md mx-auto text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground">
            スキル活用事例
          </h2>
          <p className="text-muted-foreground sm:text-xl">
            これらのスキルを活用した実際のプロジェクト例
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-bold mb-3">多面的スキルの融合</h3>
            <p className="text-muted-foreground mb-4">
              企業サイトのリブランディングプロジェクトでは、Webデザイン・開発スキルとグラフィックデザインスキルを組み合わせて、統一感のあるブランドイメージを構築。Reactを用いたインタラクティブな要素とAfter Effectsで作成したアニメーションを組み込んだ、没入感のあるWebサイトを制作しました。
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-bold mb-3">技術的挑戦への取り組み</h3>
            <p className="text-muted-foreground mb-4">
              新規ECサイト開発では、Next.jsとTypeScriptを活用したパフォーマンス最適化に挑戦。SSRとSSGを適切に使い分け、Lighthouse scoreで90以上を達成。同時に、商品プロモーション動画をPremiere ProとAfter Effectsで制作し、統合的なマーケティングソリューションを提供しました。
            </p>
          </div>
        </div>
      </section>

      {/* 継続的な学習セクション */}
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground">
            継続的な学習と成長
          </h2>
          <p className="text-muted-foreground mb-6">
            デジタルクリエイティブの世界は常に進化しています。私は以下のような方法で知識とスキルの更新を続けています:
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <svg className="mr-2 w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>オンラインコースやワークショップへの定期的な参加</span>
            </li>
            <li className="flex items-start">
              <svg className="mr-2 w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>業界のトレンドや最新技術に関する記事やブログのフォロー</span>
            </li>
            <li className="flex items-start">
              <svg className="mr-2 w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>個人プロジェクトでの新技術の実験的導入</span>
            </li>
            <li className="flex items-start">
              <svg className="mr-2 w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>クリエイティブコミュニティでの交流と知見の共有</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
} 