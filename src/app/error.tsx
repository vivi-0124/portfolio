'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle, RefreshCcw } from 'lucide-react'

/**
 * エラーバウンダリコンポーネント
 * 
 * アプリケーション内で発生したエラーをキャッチし、ユーザーフレンドリーなエラー表示を行います。
 * ユーザーはリトライボタンをクリックしてページの再読み込みを行うことができます。
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // エラーをログに記録
    console.error('アプリケーションエラー:', error)
  }, [error])

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-4">
      <Alert variant="destructive" className="max-w-2xl mb-6">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle className="text-xl font-semibold mb-2">
          エラーが発生しました
        </AlertTitle>
        <AlertDescription className="text-base">
          <p className="mb-2">
            申し訳ありませんが、ページの読み込み中に問題が発生しました。
          </p>
          <p className="text-sm text-muted-foreground">
            エラーコード: {error.digest}
          </p>
          {process.env.NODE_ENV === 'development' && (
            <p className="mt-4 p-2 bg-destructive/10 rounded text-sm font-mono">
              {error.message}
            </p>
          )}
        </AlertDescription>
      </Alert>
      
      <div className="flex gap-4">
        <Button 
          onClick={() => reset()} 
          className="flex items-center gap-2"
        >
          <RefreshCcw className="h-4 w-4" />
          再試行する
        </Button>
        <Button 
          variant="outline" 
          onClick={() => window.location.href = '/'}
        >
          ホームに戻る
        </Button>
      </div>
    </div>
  )
} 