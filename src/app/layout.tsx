import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "こだいら自由遊びの会 | 自分の責任で自由に遊ぶ",
  description: "子どもが伸びやかな環境で育ち、創造力を育むためのプレーパーク（冒険遊び場）を小平で開催しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-secondary text-white py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <h3 className="text-white text-xl mb-4">こだいら自由遊びの会</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  「自分の責任で自由に遊ぶ」をモットーに、自然の中での遊び場づくりを続けています。
                </p>
              </div>
              <div className="flex gap-8">
                <div>
                  <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-500">リンク</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/about" className="hover:text-primary">プレーパークとは</Link></li>
                    <li><Link href="/gallery" className="hover:text-primary">作品ギャラリー</Link></li>
                    <li><Link href="/volunteer" className="hover:text-primary">ボランティア</Link></li>
                    <li><Link href="/access" className="hover:text-primary">アクセス</Link></li>
                    <li><Link href="/contact" className="hover:text-primary">お問い合わせ</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} こだいら自由遊びの会. All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
