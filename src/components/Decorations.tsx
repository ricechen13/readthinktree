// 滾動視差用的小裝飾：葉子、星星、小書、圓點圈

type DecoProps = { className?: string; color?: string };

export function Leaf({ className, color = "#a9c99b" }: DecoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path d="M8 40 C8 18 22 6 42 6 C42 26 30 40 8 40 Z" fill={color} />
      <path d="M10 38 Q24 26 36 12" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function Sparkle({ className, color = "#f8de8d" }: DecoProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M20 2 Q22 18 38 20 Q22 22 20 38 Q18 22 2 20 Q18 18 20 2 Z" fill={color} />
    </svg>
  );
}

export function Book({ className, color = "#aacde4" }: DecoProps) {
  return (
    <svg viewBox="0 0 56 44" className={className} aria-hidden>
      <rect x="2" y="2" width="52" height="40" rx="6" fill={color} />
      <line x1="28" y1="5" x2="28" y2="39" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <line x1="10" y1="14" x2="21" y2="14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <line x1="35" y1="14" x2="46" y2="14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function DotRing({ className, color = "#f6b8c5" }: DecoProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <circle cx="40" cy="40" r="34" fill="none" stroke={color} strokeWidth="5" strokeDasharray="2 11" strokeLinecap="round" />
    </svg>
  );
}

export function Blob({ className }: { className?: string }) {
  return <div className={`rounded-full blur-2xl ${className ?? ""}`} aria-hidden />;
}
