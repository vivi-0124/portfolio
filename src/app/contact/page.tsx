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
                    <p className="text-muted-foreground">contact@example.com</p>
                    <p className="text-sm text-muted-foreground mt-1">平日9:00〜18:00にご返信いたします</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">電話</h3>
                    <p className="text-muted-foreground">03-1234-5678</p>
                    <p className="text-sm text-muted-foreground mt-1">平日10:00〜17:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">SNS</h3>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.504.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.16 22 16.42 22 12c0-5.523-4.477-10-10-10z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 3.75c0 1.036-.84 1.875-1.875 1.875S3.75 4.786 3.75 3.75 4.59 1.875 5.625 1.875 7.5 2.714 7.5 3.75zM3.75 21v-14h3.75v14h-3.75zM22 21h.008v.008H22v-.008zm-5.25-15.75c-2.486 0-4.5 2.014-4.5 4.5V21H7.5v-14h3.75v2.703c.844-1.272 2.262-2.03 3.75-2.03 3.31 0 6 2.69 6 6V21h-4.25v-7.5c0-1.49-1.261-3-3-3z"></path>
                        </svg>
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">SNSでも情報発信しています</p>
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
              <h3 className="text-xl font-bold mb-3">お見積りは無料ですか？</h3>
              <p className="text-muted-foreground">
                はい、お見積りは無料で行っております。プロジェクトの詳細をお知らせいただければ、具体的なお見積りをご提示いたします。
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-3">納期はどのくらいかかりますか？</h3>
              <p className="text-muted-foreground">
                プロジェクトの規模や複雑さによって異なりますが、一般的なWebサイト制作の場合は2〜4週間、動画編集は1〜2週間を目安としています。具体的な納期はプロジェクトの詳細をお伺いした上でご相談させていただきます。
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-3">修正回数に制限はありますか？</h3>
              <p className="text-muted-foreground">
                基本的な修正は納品までに2回まで無料で対応しております。大幅な変更や追加要件については別途お見積りとなる場合がございます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 