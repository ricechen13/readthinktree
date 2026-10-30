export default function TreeIllustration() {
  return (
    <svg viewBox="0 0 360 380" className="w-full h-auto" role="img" aria-label="笑咪咪的喜閱樹插畫">
      {/* 地面 */}
      <ellipse cx="180" cy="352" rx="140" ry="18" fill="#a9c99b" opacity="0.45" />
      {/* 樹幹 */}
      <path d="M160 240 Q156 300 146 350 L214 350 Q204 300 200 240 Z" fill="#c99b74" />
      <path d="M176 270 q8 6 0 14" stroke="#a87b56" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* 樹冠 */}
      <circle cx="110" cy="170" r="62" fill="#a9c99b" />
      <circle cx="250" cy="170" r="62" fill="#a9c99b" />
      <circle cx="180" cy="120" r="88" fill="#bcd8ae" />
      <circle cx="180" cy="200" r="70" fill="#bcd8ae" />
      {/* 臉 */}
      <circle cx="152" cy="160" r="7" fill="#5b4636" />
      <circle cx="208" cy="160" r="7" fill="#5b4636" />
      <circle cx="155" cy="157" r="2.2" fill="#fff" />
      <circle cx="211" cy="157" r="2.2" fill="#fff" />
      <path d="M168 178 q12 12 24 0" stroke="#5b4636" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="134" cy="182" rx="13" ry="8" fill="#f6b8c5" />
      <ellipse cx="226" cy="182" rx="13" ry="8" fill="#f6b8c5" />
      {/* 樹上的小書本 */}
      <g transform="translate(80 120) rotate(-14)">
        <rect width="38" height="28" rx="4" fill="#aacde4" />
        <line x1="19" y1="2" x2="19" y2="26" stroke="#fff" strokeWidth="3" />
      </g>
      <g transform="translate(244 108) rotate(12)">
        <rect width="38" height="28" rx="4" fill="#f8de8d" />
        <line x1="19" y1="2" x2="19" y2="26" stroke="#fff" strokeWidth="3" />
      </g>
      <g transform="translate(232 214) rotate(-8)">
        <rect width="32" height="24" rx="4" fill="#f6b8c5" />
        <line x1="16" y1="2" x2="16" y2="22" stroke="#fff" strokeWidth="3" />
      </g>
      {/* 小花 */}
      <g fill="#fff">
        <circle cx="120" cy="226" r="6" />
        <circle cx="180" cy="52" r="6" />
        <circle cx="290" cy="196" r="5" />
      </g>
      <g fill="#f8de8d">
        <circle cx="120" cy="226" r="2.5" />
        <circle cx="180" cy="52" r="2.5" />
        <circle cx="290" cy="196" r="2" />
      </g>
    </svg>
  );
}
