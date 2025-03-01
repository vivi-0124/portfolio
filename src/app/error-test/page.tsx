/**
 * エラーテスト用ページ
 * 
 * このページにアクセスすると意図的にエラーを発生させ、エラーバウンダリをテストすることができます。
 * 開発環境でのみ使用してください。
 */
export default function ErrorTestPage() {
  // サーバーコンポーネント内でエラーを投げる
  if (process.env.NODE_ENV === 'development') {
    throw new Error('これはテスト用のエラーです。エラーハンドリングが正常に機能しています。')
  }

  // 本番環境では安全に表示するコンテンツ
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">エラーテストページ</h1>
      <p className="text-gray-600 mb-8">
        このページは本番環境では表示されます。エラーテストは開発環境でのみ動作します。
      </p>
    </div>
  )
} 