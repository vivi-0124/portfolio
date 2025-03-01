'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import ErrorBoundary from '@/components/error-boundary'

/**
 * エラーを発生させるコンポーネント
 * ボタンをクリックするとランダムに例外をスローします
 */
function BuggyCounter() {
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(prevCounter => {
      // カウンターが5の倍数になったらエラーを発生させる
      if ((prevCounter + 1) % 5 === 0) {
        throw new Error(`カウント ${prevCounter + 1} でエラーが発生しました！`)
      }
      return prevCounter + 1
    })
  }

  return (
    <div className="p-4 border rounded-md mb-4">
      <p className="mb-2">カウント: {counter}</p>
      <p className="text-sm text-muted-foreground mb-4">
        カウントが5の倍数になるとエラーが発生します
      </p>
      <Button onClick={handleClick}>
        増加させる
      </Button>
    </div>
  )
}

/**
 * エラーバウンダリデモコンポーネント
 * エラーバウンダリの使用例を示します
 */
export default function ErrorBoundaryDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">エラーバウンダリで保護されたコンポーネント</h3>
        <p className="text-sm text-muted-foreground mb-4">
          このコンポーネントでエラーが発生しても、アプリ全体はクラッシュしません
        </p>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">エラーバウンダリがないコンポーネント</h3>
        <p className="text-sm text-muted-foreground mb-4">
          このコンポーネントでエラーが発生すると、ページレベルのエラーバウンダリがキャッチするため、
          ページ全体がエラーUIに置き換わります
        </p>
        <BuggyCounter />
      </div>
    </div>
  )
} 