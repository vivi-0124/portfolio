'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCcw } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

/**
 * カスタムエラーバウンダリコンポーネント
 * 
 * 特定のコンポーネントをこのエラーバウンダリで囲むことで、
 * アプリ全体がクラッシュすることなく、エラーが発生した部分のみ
 * フォールバックUIを表示することができます。
 * 
 * 使用例:
 * <ErrorBoundary>
 *   <RiskyComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { 
      hasError: false,
      error: null
    }
  }

  static getDerivedStateFromError(error: Error): State {
    // エラーが発生したらステートを更新してフォールバックUIを表示する
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // エラーログを記録
    console.error('コンポーネントエラー:', error)
    console.error('エラー詳細:', errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: null })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // カスタムフォールバックがあればそれを使用
      if (this.props.fallback) {
        return this.props.fallback
      }

      // デフォルトのフォールバックUI
      return (
        <Alert variant="destructive" className="my-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>コンポーネントエラー</AlertTitle>
          <AlertDescription>
            <p className="mb-2 text-sm">
              コンポーネントの表示中にエラーが発生しました。
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <p className="text-xs font-mono bg-destructive/10 p-2 rounded">
                {this.state.error.message}
              </p>
            )}
            <Button 
              onClick={this.resetError}
              variant="outline"
              size="sm"
              className="mt-2 flex items-center gap-1"
            >
              <RefreshCcw className="h-3 w-3" />
              再読み込み
            </Button>
          </AlertDescription>
        </Alert>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 