import type { Metadata } from "next";
import { Huninn, M_PLUS_Rounded_1c } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

// 粉圓體：圓潤可愛的繁體中文字型
const huninn = Huninn({
  variable: "--font-huninn",
  weight: "400",
  subsets: ["latin"],
  adjustFontFallback: false,
});

// 英文小標用的日系圓體
const mplusRounded = M_PLUS_Rounded_1c({
  variable: "--font-mplus-rounded",
  weight: ["500", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 分頁標題會套成「關於我們｜喜閱樹讀寫教育機構」
  title: {
    default: "喜閱樹讀寫教育機構",
    template: "%s｜喜閱樹讀寫教育機構",
  },
  description:
    "來到喜閱樹，孩子愛閱讀。國文科教育得教的，就是「閱讀與理解」——一種能有助學生全方位學習的基本能力。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${huninn.variable} ${mplusRounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grid">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
