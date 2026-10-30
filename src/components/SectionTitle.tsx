export default function SectionTitle({ en, title, sub }: { en: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <p className="font-round font-extrabold tracking-[0.3em] text-sakura-deep text-xs sm:text-sm">{en}</p>
      <h2 className="mt-2 text-[1.75rem] sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 flex justify-center gap-2" aria-hidden>
        <span className="size-2 rounded-full bg-sakura" />
        <span className="size-2 rounded-full bg-butter" />
        <span className="size-2 rounded-full bg-matcha" />
      </div>
      {sub && <p className="mt-4 text-sm sm:text-base text-ink-soft text-balance">{sub}</p>}
    </div>
  );
}
