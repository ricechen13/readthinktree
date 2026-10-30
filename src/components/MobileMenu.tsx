"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = { href: string; label: string };

// 手機與小平板用的漢堡選單（md 以上改用頁首的橫向導覽）
export default function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "關閉選單" : "開啟選單"}
        className="grid place-items-center size-10 rounded-full bg-paper border-2 border-ink/10"
      >
        <span className="relative block h-3.5 w-4.5">
          <span
            className={`absolute left-0 h-0.5 w-full rounded-full bg-ink transition-all ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-ink transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-full rounded-full bg-ink transition-all ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b-2 border-dashed border-ink/10 bg-cream shadow-[0_12px_24px_-12px_rgba(91,70,54,0.25)]"
        >
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-lg hover:bg-sakura/30"
                >
                  <span className="size-2 rounded-full bg-sakura-deep" aria-hidden />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
