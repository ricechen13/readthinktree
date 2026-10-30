import SectionTitle from "@/components/SectionTitle";
import TreeIllustration from "@/components/TreeIllustration";
import Parallax from "@/components/Parallax";
import { Blob, Book, DotRing, Leaf, Sparkle } from "@/components/Decorations";

const steps = [
  { word: "讀", en: "READ", desc: "從繪本、文章到影像，打開多元文本", color: "bg-sakura" },
  { word: "思", en: "THINK", desc: "透過提問與討論，練習深入思考", color: "bg-butter" },
  { word: "寫", en: "WRITE", desc: "組織想法，用有邏輯的方式表達自己", color: "bg-sky" },
  { word: "用", en: "USE", desc: "把讀寫能力，用在生活與一輩子的學習", color: "bg-matcha" },
];

const courses = [
  {
    name: "閱讀與表達",
    grade: "一至三年級",
    price: 400,
    emoji: "🎨",
    tone: "bg-sakura/40",
    tag: "bg-sakura",
    desc: "以兼具趣味與啟發性的繪本為主題，邊讀邊預測情節、觀察人物情緒，再透過繪畫、手作、遊戲多元表達，讓閱讀更有趣！",
  },
  {
    name: "閱讀與理解",
    grade: "三至六年級",
    price: 500,
    emoji: "🔍",
    tone: "bg-butter/45",
    tag: "bg-butter",
    desc: "每堂課聚焦一個文本，包含故事、生活、影像閱讀與心智圖練習，透過學習單提問與全班討論，完成「聽、說、讀、寫」完整訓練。",
  },
  {
    name: "閱讀與寫作・初階",
    grade: "五至八年級",
    price: 600,
    emoji: "✏️",
    tone: "bg-sky/45",
    tag: "bg-sky",
    desc: "在老師引導下閱讀多元文本、引發真實感受，再透過思考練習組織想法，用有邏輯架構的方式寫出自己的想法。",
  },
  {
    name: "閱讀與寫作・進階",
    grade: "七至十二年級",
    price: 700,
    emoji: "📚",
    tone: "bg-matcha/45",
    tag: "bg-matcha",
    desc: "以國際時事、科普、現代與古典文學等議題為主軸，進行既深且廣的閱讀與討論，完成一篇完整寫作，寫出觀點。",
  },
];

const articles = [
  {
    title: "隨時開啟，解放孩子的閱讀理解＆自主學習力！",
    author: "喜閱樹負責人 梁虹瑩老師",
    excerpt: "這學期展開的【國中生閱讀素養自主學習課】，對我們來說也是一個全新實驗……",
    color: "bg-sakura",
  },
  {
    title: "跳脫「聽背考忘」的學習新路徑—讀、思、寫、用！",
    author: "喜閱樹負責人 梁虹瑩老師",
    excerpt: "傳統的學習方式就是一條路徑叫做—聽、背、考、忘！這件事究竟哪裡不對勁？",
    color: "bg-butter",
  },
  {
    title: "閱讀與表達：媽媽對我很溫柔的時候是粉色的",
    author: "喜閱樹專任閱讀老師 李謙",
    excerpt: "這週閱讀的是雷歐・里歐尼的經典繪本《自己的顏色》，先來一場顏色聯想力挑戰……",
    color: "bg-sky",
  },
  {
    title: "一堂以「圖片」為主的閱讀理解課",
    author: "喜閱樹專任閱讀與寫作教師 陳冠穎",
    excerpt: "在這樣的一張圖中，你看見什麼？「一隻熊」「是鴨子吧？」「是狗啦！」……",
    color: "bg-matcha",
  },
  {
    title: "我們想上一堂這樣的寫作課：以109會考作文為例",
    author: "喜閱樹專任教師 陳冠穎",
    excerpt: "某個星期天早晨，幾位老師嘴角帶著微笑，各自寫下他們想開的一間店……",
    color: "bg-sakura",
  },
  {
    title: "現場。用閱讀與世界對話",
    author: "喜閱樹閱讀老師 梁虹瑩",
    excerpt: "「請問你的夢想是什麼？」這是我在課堂上對學生提出的第一個問題……",
    color: "bg-butter",
  },
];

const faqs = [
  {
    q: "我的孩子適合上哪一門課？",
    a: "一、二年級歡迎加入「閱讀與表達」；三年級閱讀已有基礎可選「閱讀與理解」；五、六年級想加強寫作可選「寫作初階」；國高中生已有讀寫基礎，歡迎加入「寫作進階」。不確定的話，也歡迎直接與我們聊聊孩子的狀況！",
  },
  {
    q: "課程如何收費？",
    a: "每門課皆採單堂報名及收費：閱讀與表達 400 元、閱讀與理解 500 元、寫作初階 600 元、寫作進階 700 元，可用現金或 ATM 匯款繳費。",
  },
  {
    q: "有沒有優惠方案？",
    a: "有的！「買十送一」：從課表中任選十堂課，額外贈送一堂，等於購買一張 11 堂的堂卡，可以跨學期使用，並可線上刷卡。",
  },
  {
    q: "「閱讀與理解」課怎麼上？",
    a: "每堂課聚焦於單一文本（單篇文章或影片），透過學習單提問，訓練孩子從文本裡找答案；最後在全班討論中，每個孩子都有口頭發表的機會。",
  },
];

export default function Home() {
  return (
    <main>
      {/* 主視覺 */}
      <section className="relative overflow-hidden">
        {/* 視差背景層：越遠的東西動得越慢 */}
        <Parallax speed={-0.3} className="absolute -top-20 -left-20">
          <Blob className="size-72 bg-sakura/30" />
        </Parallax>
        <Parallax speed={0.25} className="absolute top-40 -right-16">
          <Blob className="size-72 bg-sky/30" />
        </Parallax>
        <Parallax speed={0.45} className="absolute top-24 left-[6%] hidden sm:block">
          <Leaf className="w-10 rotate-12" />
        </Parallax>
        <Parallax speed={-0.2} className="absolute bottom-10 left-[42%] hidden md:block">
          <Sparkle className="w-7" />
        </Parallax>
        <Parallax speed={0.6} className="absolute bottom-6 left-[8%]">
          <DotRing className="w-14 sm:w-20" />
        </Parallax>
        <Parallax speed={0.35} className="absolute top-10 right-[6%]">
          <Sparkle className="w-6 sm:w-8" color="#f6b8c5" />
        </Parallax>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16 lg:py-24 grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <Parallax speed={-0.08} className="text-center md:text-left">
            <p className="inline-block rounded-full bg-paper border-2 border-ink/10 px-4 py-1 text-sm text-ink-soft">
              🌸 喜閱樹讀寫教育機構
            </p>
            <h1 className="mt-5 sm:mt-6 text-[2.5rem] sm:text-5xl lg:text-6xl leading-tight">
              來到<span className="relative inline-block">
                <span className="relative z-10">喜閱樹</span>
                <span className="absolute left-0 right-0 bottom-1 h-4 bg-butter/80 rounded-full -z-0" aria-hidden />
              </span>
              <br />
              孩子愛閱讀
            </h1>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-ink-soft max-w-md mx-auto md:mx-0">
              國文科教育得教的，說來也很簡單，就是「閱讀與理解」——一種能有助學生全方位學習的基本能力。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-3 sm:gap-4">
              <a
                href="#courses"
                className="rounded-full bg-matcha-deep px-7 py-3 text-center text-white shadow-[0_5px_0_#567a4b] hover:translate-y-1 hover:shadow-[0_1px_0_#567a4b] transition-all"
              >
                看看課程 →
              </a>
              <a
                href="#faq"
                className="rounded-full bg-paper border-2 border-ink/15 px-7 py-3 text-center hover:border-sakura-deep hover:text-sakura-deep transition-colors"
              >
                適合哪堂課？
              </a>
            </div>
          </Parallax>

          {/* 手機版小樹放在標題上方，平板以上放右側 */}
          <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[300px] md:max-w-sm order-first md:order-none">
            <Parallax speed={0.12}>
              <div className="animate-float">
                <TreeIllustration />
              </div>
            </Parallax>
            <Parallax speed={0.3} className="absolute top-2 -left-6 sm:top-4 sm:-left-2">
              <span className="block rotate-[-8deg] rounded-xl bg-paper px-2.5 sm:px-3 py-1 text-xs sm:text-sm shadow-sm border border-ink/10 animate-float-slow">
                讀・思・寫・用 ✨
              </span>
            </Parallax>
            <Parallax speed={0.45} className="absolute bottom-10 -right-6 sm:bottom-16 sm:-right-2">
              <span className="block rotate-6 rounded-xl bg-sakura px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-white shadow-sm">
                一起長大吧！
              </span>
            </Parallax>
          </div>
        </div>
      </section>

      {/* 理念 */}
      <section id="philosophy" className="relative overflow-hidden scroll-mt-20 py-14 sm:py-20 px-4 sm:px-6">
        <Parallax speed={0.4} className="absolute top-16 left-[5%]">
          <Book className="w-12 sm:w-16 -rotate-12" />
        </Parallax>
        <Parallax speed={-0.25} className="absolute top-40 right-[4%]">
          <Leaf className="w-10 sm:w-14 -scale-x-100" color="#bcd8ae" />
        </Parallax>
        <Parallax speed={0.55} className="absolute bottom-24 right-[12%] hidden sm:block">
          <Sparkle className="w-8" />
        </Parallax>
        <div className="relative mx-auto max-w-5xl">
          <SectionTitle en="PHILOSOPHY" title="喜閱樹理念" />

          <div className="relative mx-auto max-w-3xl rounded-3xl bg-paper px-6 py-8 sm:p-12 text-center shadow-[0_8px_0_rgba(91,70,54,0.08)] border-2 border-ink/5">
            <span className="washi absolute -top-4 left-1/2 -translate-x-1/2 -rotate-2 h-8 w-32 rounded-sm bg-sakura/70" aria-hidden />
            <p className="text-xl sm:text-3xl leading-relaxed text-balance">
              「國文科教育得教對學生
              <br className="hidden sm:block" />
              未來一輩子都重要的事」
            </p>
            <p className="mt-6 text-sm sm:text-base text-ink-soft leading-relaxed">
              我把這樣的教育理念種成喜閱樹，幫助我們的孩子成長、茁壯。
            </p>
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {steps.map((s, i) => (
              <div
                key={s.word}
                className="rounded-3xl bg-paper p-4 sm:p-6 text-center border-2 border-ink/5 hover:-translate-y-1 transition-transform"
              >
                <div className={`mx-auto grid place-items-center size-12 sm:size-16 rounded-full ${s.color} text-2xl sm:text-3xl text-ink`}>
                  {s.word}
                </div>
                <p className="mt-3 font-round font-extrabold text-[0.65rem] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-ink-soft">
                  0{i + 1} · {s.en}
                </p>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 課程 */}
      <section id="courses" className="relative overflow-hidden scroll-mt-20 py-14 sm:py-20 px-4 sm:px-6 bg-paper/70">
        <Parallax speed={-0.35} className="absolute top-0 -right-24">
          <Blob className="size-80 bg-butter/40" />
        </Parallax>
        <Parallax speed={0.3} className="absolute bottom-0 -left-24">
          <Blob className="size-80 bg-sakura/25" />
        </Parallax>
        <Parallax speed={0.5} className="absolute top-20 left-[8%]">
          <DotRing className="w-12 sm:w-16" color="#a9c99b" />
        </Parallax>
        <Parallax speed={0.4} className="absolute top-28 right-[8%]">
          <Sparkle className="w-6 sm:w-8" color="#aacde4" />
        </Parallax>
        <div className="relative mx-auto max-w-6xl">
          <SectionTitle en="COURSES" title="讀寫課程" sub="依照不同年齡與學習狀況設計，陪孩子一步步長出讀寫力" />

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {courses.map((c) => (
              <article
                key={c.name}
                className={`group relative rounded-[1.75rem] sm:rounded-[2rem] ${c.tone} p-6 sm:p-8 border-2 border-white hover:-translate-y-1 transition-transform`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`inline-block rounded-full ${c.tag} px-3 py-0.5 text-sm`}>{c.grade}</span>
                    <h3 className="mt-3 text-xl sm:text-2xl">{c.name}</h3>
                  </div>
                  <span className="grid place-items-center size-12 sm:size-14 shrink-0 rounded-2xl bg-paper text-xl sm:text-2xl group-hover:rotate-12 transition-transform">
                    {c.emoji}
                  </span>
                </div>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft">{c.desc}</p>
                <p className="mt-6 border-t-2 border-dashed border-ink/15 pt-4">
                  單堂 <span className="font-round font-extrabold text-2xl">NT${c.price}</span>
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 mx-auto max-w-2xl rounded-3xl sm:rounded-full bg-butter/60 px-5 sm:px-6 py-4 text-center text-sm sm:text-base">
            🎁 <span className="text-sakura-deep">買十送一</span>
            ：任選十堂課加贈一堂，堂卡可跨學期使用！
          </div>
        </div>
      </section>

      {/* 焦點好文 */}
      <section id="articles" className="relative overflow-hidden scroll-mt-20 py-14 sm:py-20 px-4 sm:px-6">
        <Parallax speed={0.45} className="absolute top-14 right-[10%]">
          <Book className="w-12 sm:w-16 rotate-12" color="#f6b8c5" />
        </Parallax>
        <Parallax speed={-0.3} className="absolute top-24 left-[6%]">
          <Leaf className="w-9 sm:w-12" />
        </Parallax>
        <div className="relative mx-auto max-w-6xl">
          <SectionTitle en="ARTICLES" title="焦點好文" sub="老師們的課堂筆記與教育觀察" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-5 sm:gap-y-7 lg:gap-6">
            {articles.map((a, i) => (
              <a
                key={a.title}
                href="https://readthinktree.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block rounded-3xl bg-paper p-5 pt-7 sm:p-6 sm:pt-8 border-2 border-ink/5 hover:shadow-[0_8px_0_rgba(91,70,54,0.08)] hover:-translate-y-1 transition-all ${
                  i % 2 ? "sm:rotate-[0.6deg]" : "sm:-rotate-[0.6deg]"
                }`}
              >
                <span
                  className={`washi absolute -top-3 left-6 h-6 w-20 rounded-sm ${a.color} opacity-80 ${
                    i % 2 ? "rotate-3" : "-rotate-3"
                  }`}
                  aria-hidden
                />
                <h3 className="text-lg leading-snug">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.excerpt}</p>
                <p className="mt-5 text-xs text-ink-soft/80">✎ {a.author}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 常見問題 */}
      <section id="faq" className="relative overflow-hidden scroll-mt-20 py-14 sm:py-20 px-4 sm:px-6 bg-paper/70">
        <Parallax speed={0.5} className="absolute top-20 left-[10%] hidden sm:block">
          <Sparkle className="w-8" color="#f6b8c5" />
        </Parallax>
        <Parallax speed={-0.25} className="absolute bottom-16 right-[8%] hidden sm:block">
          <DotRing className="w-20" color="#f8de8d" />
        </Parallax>
        <div className="relative mx-auto max-w-3xl">
          <SectionTitle en="FAQ" title="常見問題" />
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-cream border-2 border-ink/5 px-4 sm:px-6 py-4 open:bg-paper"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span>
                    <span className="mr-2 text-sakura-deep font-round font-extrabold">Q.</span>
                    {f.q}
                  </span>
                  <span className="grid place-items-center size-7 shrink-0 rounded-full bg-sakura text-white transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-soft">
                  <span className="mr-2 text-matcha-deep font-round font-extrabold">A.</span>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 聯絡我們 */}
      <section id="contact" className="relative overflow-hidden scroll-mt-20 py-14 sm:py-20 px-4 sm:px-6">
        <Parallax speed={0.4} className="absolute top-6 left-[4%] z-10">
          <Leaf className="w-10 sm:w-14 -rotate-12" color="#6f9a62" />
        </Parallax>
        <Parallax speed={0.6} className="absolute bottom-10 right-[5%] z-10">
          <Sparkle className="w-7 sm:w-9" />
        </Parallax>
        <div className="relative mx-auto max-w-5xl rounded-[2rem] sm:rounded-[2.5rem] bg-matcha/40 px-4 py-10 sm:p-10 lg:p-14 border-2 border-white">
          <SectionTitle en="CONTACT" title="聯絡我們" sub="還有疑問或想了解更多，歡迎與我們聯絡 ♪" />
          {/* 手機一欄、平板兩欄（地址橫跨整列）、電腦三欄 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            <a href="tel:0229311340" className="rounded-3xl bg-paper p-6 text-center hover:-translate-y-1 transition-transform">
              <div className="text-3xl">☎️</div>
              <p className="mt-3">(02)2931-1340</p>
              <p className="mt-1 text-sm text-ink-soft">10:00 – 18:00</p>
            </a>
            <a
              href="mailto:readthinktree@gmail.com"
              className="rounded-3xl bg-paper p-6 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="text-3xl">💌</div>
              <p className="mt-3 break-words">readthinktree@gmail.com</p>
              <p className="mt-1 text-sm text-ink-soft">IG / FB：@readthinktree</p>
            </a>
            <div className="rounded-3xl bg-paper p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="text-3xl">🏠</div>
              <p className="mt-3">台北市文山區</p>
              <p className="mt-1 text-sm text-ink-soft">興隆路一段235號1樓</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
