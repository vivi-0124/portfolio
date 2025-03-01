import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ErrorBoundaryDemo from '@/components/error-boundary-demo'

/**
 * エラーハンドリングデモページ
 * 
 * 様々なエラーハンドリング機能を試すことができるデモページです。
 * 1. クライアントコンポーネントでのエラー処理
 * 2. サーバーコンポーネントでのエラー処理
 */
export default function ErrorDemoPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-2">エラーハンドリングデモ</h1>
      <p className="text-muted-foreground mb-8">
        Next.jsアプリケーションにおけるエラーハンドリングの様々な実装例を示しています。
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>クライアントコンポーネントのエラーハンドリング</CardTitle>
            <CardDescription>
              ErrorBoundaryを使用してクライアントコンポーネントで発生するエラーを捕捉します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ErrorBoundaryDemo />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>サーバーコンポーネントのエラーハンドリング</CardTitle>
            <CardDescription>
              Next.jsのApp Routerにおけるサーバーコンポーネントのエラーハンドリングをテストします。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              以下のリンクをクリックすると、意図的にエラーを発生させるページに移動します。
              error.tsxによってキャッチされ、エラーUIが表示されます。
            </p>
            <Button asChild>
              <Link href="/error-test">エラーテストページへ</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 