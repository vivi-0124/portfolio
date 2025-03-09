import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import PageNav from "@/components/layout/page-nav";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  adjustFontFallback: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ポートフォリオ",
  description: "大学生のWebサイト制作と動画制作のポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={geistSans.variable} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background font-sans">
          <div className="relative flex min-h-screen flex-col">
            <PageNav />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
      </body>
    </html>
  );
}
