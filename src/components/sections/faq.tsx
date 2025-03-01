'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

/**
 * よくある質問（FAQ）セクションコンポーネント
 * 
 * アコーディオン形式でよくある質問と回答を表示します。
 * ユーザーが質問をクリックすると回答が展開される仕組みです。
 */
export function FaqSection() {
  const faqItems = [
    {
      question: "どのようなサービスを提供していますか？",
      answer: "Webサイト制作、動画編集、グラフィックデザインなど、デジタルコンテンツ制作に関する幅広いサービスを提供しています。クライアントのニーズに合わせたカスタムソリューションを心がけています。"
    },
    {
      question: "制作期間はどのくらいかかりますか？",
      answer: "プロジェクトの規模や複雑さによって異なりますが、一般的な企業サイトであれば4〜6週間、ECサイトやより複雑なウェブアプリケーションの場合は8〜12週間程度を目安としています。具体的な納期については、プロジェクトの詳細をお伺いした上でご相談させていただきます。"
    },
    {
      question: "料金体系はどのようになっていますか？",
      answer: "プロジェクトの規模や要件に応じて料金が変動します。基本的には機能やページ数、デザインの複雑さなどを考慮した見積もりを作成しています。まずはお気軽にご相談ください。無料でお見積りを提供しています。"
    },
    {
      question: "使用している技術スタックは何ですか？",
      answer: "フロントエンドではReact、Next.js、TypeScript、Tailwind CSSを主に使用しています。バックエンドではNode.js、Express、PostgreSQLなどを活用しています。プロジェクトの要件に応じて最適な技術を選択しています。"
    },
    {
      question: "制作後のサポートはありますか？",
      answer: "はい、制作後のサポートプランをご用意しています。ウェブサイトの保守、コンテンツ更新、セキュリティアップデート、パフォーマンス最適化などを含むサポートサービスを提供しています。サポート期間や内容はプロジェクトに応じてカスタマイズ可能です。"
    },
    {
      question: "どのような支払い方法がありますか？",
      answer: "銀行振込、クレジットカード、PayPalに対応しています。プロジェクトの規模によっては、着手金、中間支払い、完了時支払いの分割払いも可能です。詳細はプロジェクト開始前にご相談させていただきます。"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold tracking-tight mb-4 relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">よくある質問</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            お客様からよくいただくご質問をまとめました。その他のご質問はお問い合わせフォームからお気軽にどうぞ。
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 