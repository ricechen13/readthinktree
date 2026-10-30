"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  // 移動速度：正數比捲動更快往上（前景感），負數較慢（遠景感），0 為不動
  speed: number;
  className?: string;
  children: ReactNode;
};

// 依元素與畫面中心的距離做位移，外層負責定位與量測，內層負責移動，
// 避免量到自己被位移後的位置而抖動
export default function Parallax({ speed, className, children }: ParallaxProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = outer.getBoundingClientRect();
      // 不在畫面附近就不用算
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      const distance = rect.top + rect.height / 2 - window.innerHeight / 2;
      // 往下捲時 distance 變小，乘上正的 speed 會再多往上移 → 看起來比較快
      inner.style.transform = `translate3d(0, ${(distance * speed).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={outerRef} className={className}>
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
