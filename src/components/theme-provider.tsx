"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * テーマプロバイダーコンポーネント
 * 
 * アプリケーション全体のテーマ（ライト/ダーク）を管理します。
 * next-themesライブラリを使用して、ユーザーの設定やシステム設定に基づいたテーマ切り替えを提供します。
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}