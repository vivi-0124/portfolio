import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * お問い合わせページコンポーネント
 * 
 * 問い合わせフォームと連絡先情報を表示します。
 * フォームにはバリデーションが組み込まれており、正しい入力を促します。
 */
export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            お問い合わせ
          </h1>
          <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
            ご質問やお仕事のご依頼など、お気軽にお問い合わせください
          </p>
        </div>
      </section>

      {/* お問い合わせタブセクション */}
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <Tabs defaultValue="form" className="w-full max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="form">お問い合わせフォーム</TabsTrigger>
              <TabsTrigger value="info">連絡先情報</TabsTrigger>
            </TabsList>
          </div>

          {/* お問い合わせフォーム */}
          <TabsContent value="form">
            <Card>
              <CardHeader>
                <CardTitle>メッセージを送信</CardTitle>
                <CardDescription>
                  以下のフォームに必要事項をご記入の上、送信ボタンを押してください。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前</Label>
                      <Input id="name" placeholder="山田 太郎" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス</Label>
                      <Input id="email" type="email" placeholder="your-email@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">件名</Label>
                    <Input id="subject" placeholder="お問い合わせの件名" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">メッセージ</Label>
                    <Textarea 
                      id="message" 
                      placeholder="お問い合わせの内容を入力してください" 
                      rows={6} 
                      required 
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" size="lg">
                      送信する
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 連絡先情報 */}
          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>連絡先情報</CardTitle>
                <CardDescription>
                  その他の連絡方法はこちらをご利用ください。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">Eメール</h3>
                    <p className="text-muted-foreground">myemail@example.com</p>
                    <p className="text-sm text-muted-foreground mt-1">平日9:00〜18:00にご返信いたします</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">電話</h3>
                    <p className="text-muted-foreground">090-1234-5678</p>
                    <p className="text-sm text-muted-foreground mt-1">平日10:00〜17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* よくある質問セクション */}
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-muted">
        <div className="max-w-screen-md mx-auto">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-foreground text-center">
            よくある質問
          </h2>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-3">自己紹介について</h3>
              <p className="text-muted-foreground">
                私は大学でデザインと映像制作を学んでおり、Webサイト制作と動画編集を得意としています。
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-3">志望動機</h3>
              <p className="text-muted-foreground">
                貴社のプロジェクトに参加し、クリエイティブな視点で貢献したいと考えています。
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-3">スキルセット</h3>
              <p className="text-muted-foreground">
                HTML、CSS、JavaScript、React、Next.js、Adobe Premiere、After Effectsを使用したプロジェクト経験があります。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 