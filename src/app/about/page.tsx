import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import TreeIllustration from "@/components/TreeIllustration";
import Parallax from "@/components/Parallax";
import { Blob, Book, DotRing, Leaf, Sparkle } from "@/components/Decorations";

export const metadata: Metadata = {
  title: "關於我們",
  description: "「國文科教育得教對學生未來一輩子都重要的事」——認識喜閱樹的理念、使命與團隊。",
};

const beliefs = [
  {
    tag: "會考成績",
    color: "bg-sakura",
    text: "國文科教育，要能把時間心力用在刀口上，幫助學生提升會考成績。",
  },
  {
    tag: "學習能力",
    color: "bg-butter",
    text: "國文科教育，要發展學生閱讀與思考的能力，讓他們面對任何科目的學習、報告、考試，都有堅實的能力基礎。",
  },
  {
    tag: "未來發展",
    color: "bg-sky",
    text: "國文科教育，要為學生未來的工作、專業發展作準備，讓他們擅長閱讀、快速理解、綜合資訊、思考判斷，成為擅於快速學習各種新知的跨領域人才。",
  },
];

const missions = [
  { emoji: "📖", title: "閱讀技巧", desc: "提升抓重點、歸納理解能力", tone: "bg-sakura/40" },
  { emoji: "💡", title: "理解能力", desc: "強化分析解讀、演繹詮釋能力", tone: "bg-butter/50" },
  { emoji: "🧗", title: "掌控學習", desc: "挑戰困難知識、消化吸收的能力", tone: "bg-sky/45" },
  { emoji: "📝", title: "國文會考", desc: "熟悉國文科會考題型，表現進步", tone: "bg-matcha/45" },
  { emoji: "🌏", title: "全面科目", desc: "獨立閱讀資料，學習所有科目內容", tone: "bg-sakura/40" },
];

const story = [
  {
    step: "STEP 01",
    title: "種下一棵喜閱樹",
    text: "秉持「國文科教育得教對學生未來一輩子都重要的事」的理念，梁老師創辦了喜閱樹教育機構。",
    color: "bg-matcha",
  },
  {
    step: "STEP 02",
    title: "三年、三百堂課",
    text: "創立三年後，透過超過三百堂的閱讀相關課程和營隊，為許多孩子打下良好的閱讀基底。",
    color: "bg-butter",
  },
  {
    step: "STEP 03",
    title: "從閱讀走向寫作",
    text: "梁老師發覺，「寫作」是閱讀後理解、歸納、分析、重整，並闡述自身感受的最好輸出——課程不能只停在閱讀理解。",
    color: "bg-sky",
  },
  {
    step: "STEP 04",
    title: "開發「閱讀與寫作」課程",
    text: "藉由初階班和進階班素養導向式的寫作訓練，讓孩子無論是否喜愛寫作，都能把「寫作」當作一種學習方式。",
    color: "bg-sakura",
  },
];

const team = [
  {
    initial: "梁",
    name: "梁虹瑩",
    role: "喜閱樹負責人",
    avatar: "bg-sakura",
    background:
      "政治大學中文系畢業，曾任北政國中、景興國中國文老師，現任喜閱樹負責人，同為康軒文教事業國文科閱讀策略顧問暨講師。",
    quote: "真正的好老師不是『得天下英才而教之』，而是『教天下孩子成英才』。",
    belief: [
      "這樣的理念讓我始終關注許多學習弱勢者，渴望能找到更好的學習方式，創造一個更適合各種孩子學習的天堂。",
      "喜閱樹是我實現教育夢想的基地，一個以愛與信任為核心的語文學習中心，希望進來的孩子們無論在哪個階段、具備哪種能力，都能在這裡找到學習的樂趣與自信心！",
    ],
  },
  {
    initial: "陳",
    name: "陳冠穎",
    role: "喜閱樹專任教師",
    avatar: "bg-matcha",
    photo: "/ricekuan.png",
    background:
      "中央大學中文系畢業，國立台北教育大學語文與創作學系碩士。曾任北政國中國文老師，現為喜閱樹專任讀寫教師。",
    quote: "孩子所需要的，不是責罵、獎勵、比較……，而是堅定指引，溫柔陪伴。",
    belief: [
      "學習路上，我從來不是教室中最快樂、最耀眼的存在，因此我明白，學習總會遇到困難與挫折。",
      "我決定努力成為那個看見每個孩子的人，並和他們一起看見自己身上有光。我們一起，慢慢讀字，輕輕寫字，探索廣闊世界，也望向心中小小宇宙。",
    ],
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* 頁首主視覺 */}
      <section className="relative overflow-hidden">
        <Parallax speed={-0.3} className="absolute -top-24 -right-20">
          <Blob className="size-80 bg-matcha/30" />
        </Parallax>
        <Parallax speed={0.25} className="absolute top-32 -left-24">
          <Blob className="size-72 bg-sakura/30" />
        </Parallax>
        <Parallax speed={0.5} className="absolute top-16 left-[8%]">
          <Sparkle className="w-6 sm:w-8" />
        </Parallax>
        <Parallax speed={0.4} className="absolute bottom-10 right-[10%] hidden sm:block">
          <Book className="w-14 rotate-12" color="#f6b8c5" />
        </Parallax>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
          <Parallax speed={-0.08} className="text-center md:text-left">
            <p className="font-round font-extrabold tracking-[0.3em] text-sakura-deep text-xs sm:text-sm">ABOUT US</p>
            <h1 className="mt-3 text-[2.5rem] sm:text-5xl lg:text-6xl leading-tight">關於喜閱樹</h1>
            <p className="mt-6 text-xl sm:text-2xl leading-relaxed text-balance">
              「國文科教育得教對學生
              <br className="hidden sm:block" />
              未來一輩子都重要的事」
            </p>
            <p className="mt-4 text-sm sm:text-base text-ink-soft leading-relaxed">
              我把這樣的教育理念種成喜閱樹，幫助我們的孩子成長、茁壯。
            </p>
          </Parallax>
          <Parallax speed={0.12} className="mx-auto w-full max-w-[200px] sm:max-w-[240px] md:w-[260px] md:max-w-none order-first md:order-none">
            <div className="animate-float">
              <TreeIllustration />
            </div>
          </Parallax>
        </div>
      </section>

      {/* 理念及目標 */}
      <section className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 bg-paper/70">
        <Parallax speed={0.45} className="absolute top-20 right-[6%]">
          <Leaf className="w-10 sm:w-14 -scale-x-100" />
        </Parallax>
        <Parallax speed={-0.25} className="absolute bottom-16 left-[5%] hidden sm:block">
          <DotRing className="w-20" color="#f8de8d" />
        </Parallax>
        <div className="relative mx-auto max-w-6xl">
          <SectionTitle en="OUR BELIEF" title="理念及目標" sub="我們的三個堅持" />
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {beliefs.map((b, i) => (
              <div
                key={b.tag}
                className="relative rounded-3xl bg-paper p-6 sm:p-8 pt-9 sm:pt-10 border-2 border-ink/5 shadow-[0_8px_0_rgba(91,70,54,0.06)]"
              >
                <span
                  className={`washi absolute -top-3 left-6 h-6 w-20 rounded-sm ${b.color} opacity-80 ${
                    i % 2 ? "rotate-3" : "-rotate-3"
                  }`}
                  aria-hidden
                />
                <p className="font-round font-extrabold text-4xl text-ink/15">0{i + 1}</p>
                <span className={`mt-2 inline-block rounded-full ${b.color} px-3 py-0.5 text-sm`}>{b.tag}</span>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使命 */}
      <section className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6">
        <Parallax speed={0.4} className="absolute top-24 left-[6%]">
          <Sparkle className="w-6 sm:w-8" color="#f6b8c5" />
        </Parallax>
        <Parallax speed={-0.3} className="absolute top-10 -right-24">
          <Blob className="size-72 bg-sky/30" />
        </Parallax>
        <div className="relative mx-auto max-w-6xl">
          <SectionTitle en="MISSION" title="喜閱樹的使命" />

          <div className="mx-auto max-w-3xl text-center space-y-4 text-sm sm:text-base leading-relaxed text-ink-soft">
            <p>
              國文科教育，不能是教「國文老師覺得重要的」。國文科教育得教升學考試上重要的、對學生學習能力重要的、以及對學生未來一輩子的工作都重要的。
            </p>
            <p>說來也很簡單，就是一種能有助學生全方位學習的基本能力——</p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              ["閱讀", "bg-sakura"],
              ["深思", "bg-butter"],
              ["書寫", "bg-sky"],
              ["活用", "bg-matcha"],
            ].map(([word, color]) => (
              <span key={word} className={`rounded-full ${color} px-4 sm:px-5 py-1.5 sm:py-2 text-base sm:text-lg`}>
                {word}
              </span>
            ))}
          </div>

          <p className="mt-10 sm:mt-12 text-center text-sm sm:text-base text-ink-soft">
            因此，喜閱樹將培養以下五種能力，作為我們的使命：
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            {missions.map((m, i) => (
              <div
                key={m.title}
                className={`rounded-3xl ${m.tone} p-5 sm:p-6 text-center border-2 border-white hover:-translate-y-1 transition-transform ${
                  i === missions.length - 1 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="mx-auto grid place-items-center size-12 sm:size-14 rounded-2xl bg-paper text-2xl">{m.emoji}</div>
                <h3 className="mt-3 text-lg sm:text-xl">{m.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-soft">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 我們的故事 */}
      <section className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 bg-paper/70">
        <Parallax speed={0.5} className="absolute top-32 right-[8%] hidden sm:block">
          <Book className="w-14 -rotate-12" />
        </Parallax>
        <Parallax speed={-0.2} className="absolute bottom-24 left-[6%] hidden sm:block">
          <Leaf className="w-12" color="#bcd8ae" />
        </Parallax>
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle en="OUR STORY" title="喜閱樹的成長故事" sub="從表達至理解，自理解到寫作" />

          <ol className="relative space-y-6 sm:space-y-8 before:absolute before:left-[1.1rem] sm:before:left-6 before:top-2 before:bottom-2 before:border-l-2 before:border-dashed before:border-ink/20">
            {story.map((s) => (
              <li key={s.step} className="relative flex gap-4 sm:gap-6">
                <span
                  className={`relative z-10 grid place-items-center size-9 sm:size-12 shrink-0 rounded-full ${s.color} border-4 border-cream text-sm sm:text-lg`}
                  aria-hidden
                >
                  🌱
                </span>
                <div className="flex-1 rounded-3xl bg-paper p-5 sm:p-6 border-2 border-ink/5">
                  <p className="font-round font-extrabold text-xs tracking-[0.2em] text-sakura-deep">{s.step}</p>
                  <h3 className="mt-1 text-lg sm:text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <blockquote className="mt-10 sm:mt-12 rounded-3xl bg-butter/50 px-6 py-6 sm:px-10 sm:py-8 text-center leading-relaxed text-sm sm:text-base">
            我們期盼，藉由完整、多元的課程，擺脫「聽背考忘」的無效學習路徑，引導孩子們養成
            <span className="whitespace-nowrap">
              「<span className="text-sakura-deep">讀思寫用</span>」
            </span>
            的學習新習慣，體驗國語文學習的更多可能性！
          </blockquote>
        </div>
      </section>

      {/* 團隊介紹 */}
      <section className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6">
        <Parallax speed={0.45} className="absolute top-16 left-[8%]">
          <Sparkle className="w-6 sm:w-8" color="#aacde4" />
        </Parallax>
        <Parallax speed={-0.3} className="absolute top-1/3 -right-24">
          <Blob className="size-80 bg-sakura/25" />
        </Parallax>
        <Parallax speed={0.35} className="absolute bottom-20 -left-20">
          <Blob className="size-72 bg-butter/35" />
        </Parallax>
        <div className="relative mx-auto max-w-5xl">
          <SectionTitle en="OUR TEAM" title="團隊介紹" sub="陪孩子一起讀字、寫字、長大的大人們" />

          <div className="space-y-5 sm:space-y-8">
            {team.map((m) => (
              <article
                key={m.name}
                className="rounded-[2rem] bg-paper p-6 sm:p-10 border-2 border-ink/5 shadow-[0_8px_0_rgba(91,70,54,0.06)] md:flex md:gap-10"
              >
                <div className="flex md:flex-col items-center gap-4 md:w-40 md:shrink-0 md:text-center">
                  <div
                    className={`relative overflow-hidden grid place-items-center size-20 sm:size-28 shrink-0 rounded-full ${m.avatar} text-3xl sm:text-5xl text-ink border-4 border-white shadow-[0_6px_0_rgba(91,70,54,0.08)]`}
                    aria-hidden={!m.photo}
                  >
                    {m.photo ? (
                      // 照片本身外圈有米色框，稍微放大把它裁掉
                      <Image
                        src={m.photo}
                        alt={`${m.name}老師`}
                        fill
                        sizes="(min-width: 640px) 112px, 80px"
                        className="object-cover scale-[1.12]"
                      />
                    ) : (
                      m.initial
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-ink-soft">{m.role}</p>
                    <h3 className="mt-1 text-2xl">{m.name}</h3>
                  </div>
                </div>

                <div className="mt-6 md:mt-0 flex-1">
                  <p className="font-round font-extrabold text-xs tracking-[0.2em] text-matcha-deep">PROFILE · 學經歷</p>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-ink-soft">{m.background}</p>

                  {m.quote && (
                    <p className="mt-5 rounded-2xl bg-sakura/25 px-5 py-4 leading-relaxed">「{m.quote}」</p>
                  )}

                  <div className="mt-5 space-y-3 text-sm sm:text-base leading-relaxed text-ink-soft">
                    {m.belief.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 行動呼籲 */}
      <section className="px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="relative overflow-hidden mx-auto max-w-4xl rounded-[2rem] sm:rounded-[2.5rem] bg-matcha/40 border-2 border-white px-6 py-10 sm:p-14 text-center">
          <Parallax speed={0.3} className="absolute top-6 right-[8%]">
            <Sparkle className="w-7" />
          </Parallax>
          <h2 className="text-2xl sm:text-3xl">想讓孩子也愛上閱讀嗎？</h2>
          <p className="mt-3 text-sm sm:text-base text-ink-soft">歡迎看看我們的課程，或直接與我們聊聊孩子的狀況 ♪</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/#courses"
              className="rounded-full bg-matcha-deep px-7 py-3 text-white shadow-[0_5px_0_#567a4b] hover:translate-y-1 hover:shadow-[0_1px_0_#567a4b] transition-all"
            >
              看看課程 →
            </Link>
            <Link
              href="/#contact"
              className="rounded-full bg-paper border-2 border-ink/15 px-7 py-3 hover:border-sakura-deep hover:text-sakura-deep transition-colors"
            >
              聯絡我們
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
