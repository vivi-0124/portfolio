import { createClient } from 'microcms-js-sdk';

// microCMSのレスポンス型定義
export type MicroCMSProject = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  tags: string[];
  link: string;
};

export type MicroCMSResponse = {
  contents: MicroCMSProject[];
  totalCount: number;
  offset: number;
  limit: number;
};

// microCMSクライアント初期化
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error('NEXT_PUBLIC_MICROCMS_API_KEY is not defined');
}

const client = createClient({
  serviceDomain: 'vivi0124',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY
});

// microCMSからデータを取得する関数
export async function fetchProjects(): Promise<MicroCMSProject[]> {
  try {
    const data = await client.get<MicroCMSResponse>({
      endpoint: 'projects',
      queries: { limit: 100 },
    });
    
    return data.contents;
  } catch (error) {
    console.error('プロジェクトの取得に失敗しました:', error);
    return [];
  }
}