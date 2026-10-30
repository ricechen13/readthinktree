import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

// 首頁區塊用 "/#..."，從其他分頁點也能跳回首頁對應位置
export const navItems = [
  { href: "/about", label: "關於我們" },
  { href: "/#courses", label: "課程" },
  { href: "/#articles", label: "焦點好文" },
  { href: "/#faq", label: "常見問題" },
  { href: "/#contact", label: "聯絡我們" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 bg-cream/85 backdrop-blur border-b-2 border-dashed border-ink/10">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="grid place-items-center size-9 sm:size-10 rounded-full bg-matcha text-lg sm:text-xl">🌳</span>
          <span className="text-lg sm:text-xl">喜閱樹</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-ink-soft">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-sakura-deep transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="rounded-full bg-sakura-deep px-4 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base text-white shadow-[0_4px_0_#c96b82] hover:translate-y-0.5 hover:shadow-[0_2px_0_#c96b82] transition-all"
          >
            預約諮詢
          </Link>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
