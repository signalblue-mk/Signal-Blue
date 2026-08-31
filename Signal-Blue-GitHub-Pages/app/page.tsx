"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, AtSign, Mail, Menu, Phone } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const services = [
  {
    number: "01",
    title: "Brand-first web design",
    description: "A visual system shaped around your business—not a template dressed in your colours.",
    tags: ["Direction", "UX / UI", "Responsive design"],
  },
  {
    number: "02",
    title: "Development",
    description: "Clean, responsive builds engineered to feel immediate on every screen.",
    tags: ["Frontend", "Performance", "CMS-ready"],
  },
  {
    number: "03",
    title: "Motion & interaction",
    description: "Purposeful movement that guides attention, adds character and makes the experience memorable.",
    tags: ["GSAP", "Scroll narratives", "Micro-interactions"],
  },
  {
    number: "04",
    title: "Launch & support",
    description: "A careful final pass, a confident launch and reliable help after your site goes live.",
    tags: ["QA", "Deployment", "Ongoing care"],
  },
];

const process = [
  { number: "01", title: "Discover", copy: "We clarify the audience, offer and one action your site must make easy." },
  { number: "02", title: "Direct", copy: "We shape a distinct visual idea and the content structure that carries it." },
  { number: "03", title: "Build", copy: "Design, development and motion become one responsive, coherent experience." },
  { number: "04", title: "Launch", copy: "We refine the details, test the important paths and put the work live." },
];

const mkServices = [
  { number: "01", title: "Веб дизајн со бренд на прво место", description: "Визуелен систем создаден околу вашиот бизнис — не шаблон облечен во ваши бои.", tags: ["Насока", "UX / UI", "Responsive дизајн"] },
  { number: "02", title: "Развој", description: "Чисти, responsive веб-страници што работат одлично на секој екран.", tags: ["Frontend", "Перформанси", "CMS-ready"] },
  { number: "03", title: "Движење и интеракција", description: "Наменско движење што го води вниманието и го прави искуството незаборавно.", tags: ["GSAP", "Scroll приказни", "Микроинтеракции"] },
  { number: "04", title: "Лансирање и поддршка", description: "Внимателна финална проверка, сигурно лансирање и поддршка откако страницата е во живо.", tags: ["QA", "Објавување", "Постојана грижа"] },
];

const mkProcess = [
  { number: "01", title: "Откриваме", copy: "Ја разјаснуваме публиката, понудата и најважната акција на вашата страница." },
  { number: "02", title: "Насочуваме", copy: "Создаваме јасна визуелна идеја и структура што ја носи." },
  { number: "03", title: "Градиме", copy: "Дизајнот, развојот и движењето стануваат едно responsive искуство." },
  { number: "04", title: "Лансираме", copy: "Ги проверуваме деталите, ги тестираме патеките и објавуваме." },
];

const gmailCompose = "https://mail.google.com/mail/?view=cm&fs=1&to=contact.signalblue@gmail.com&su=New%20project%20enquiry";

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="Signal Blue home">
      <span className="brand-mark" aria-hidden="true">
        <img src="brand/signal-blue-symbol.webp" alt="" width="704" height="532" decoding="async" />
      </span>
      {!compact && <span className="brand-name">SIGNAL <b>BLUE</b></span>}
    </a>
  );
}

function ContactPanel({ compact = false, language }: { compact?: boolean; language: "en" | "mk" }) {
  const mk = language === "mk";
  return (
    <Sheet>
      <SheetTrigger asChild>
        {compact ? (
          <Button className="nav-icon" size="icon" aria-label={mk ? "Отвори контакти" : "Open contact panel"}><Menu /></Button>
        ) : (
          <Button className="nav-contact">{mk ? "Започни проект" : "Start a project"} <ArrowUpRight /></Button>
        )}
      </SheetTrigger>
      <SheetContent className="contact-sheet" aria-describedby="contact-description">
        <SheetHeader className="contact-sheet__header">
          <p className="eyebrow eyebrow--dark">{mk ? "Подготвени кога и да сте" : "Ready when you are"}</p>
          <SheetTitle className="contact-sheet__title">{mk ? "Ајде да го истакнеме вашиот бизнис." : "Let’s make your business impossible to overlook."}</SheetTitle>
          <SheetDescription id="contact-description" className="contact-sheet__description">
            {mk ? "Кажете ни што градите, што не функционира или каде сакате да одите понатаму." : "Tell us what you are building, what is not working, or simply where you want to go next."}
          </SheetDescription>
        </SheetHeader>
        <div className="contact-sheet__links">
          <a href={gmailCompose} target="_blank" rel="noreferrer">
            <span><Mail /> {mk ? "Е-пошта" : "Email"}</span><strong>contact.signalblue@gmail.com</strong><ArrowUpRight />
          </a>
          <a href="https://www.instagram.com/signalblue.mk/" target="_blank" rel="noreferrer">
            <span><AtSign /> Instagram</span><strong>@signalblue.mk</strong><ArrowUpRight />
          </a>
        </div>
        <div className="contact-sheet__people">
          <p className="eyebrow eyebrow--dark">{mk ? "Јавете се директно" : "Call directly"}</p>
          <a href="tel:+38971974305"><span>Димитар Коцевски</span><strong>+389 71 974 305</strong></a>
          <a href="tel:+38971269364"><span>Михаил Петров</span><strong>+389 71 269 364</strong></a>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function LanguageToggle({ language, onChange }: { language: "en" | "mk"; onChange: (language: "en" | "mk") => void }) {
  return <div className="language-toggle" aria-label="Language selector">
    <button className={language === "mk" ? "is-active" : ""} onClick={() => onChange("mk")} aria-label="Македонски">🇲🇰</button>
    <button className={language === "en" ? "is-active" : ""} onClick={() => onChange("en")} aria-label="English">🇬🇧</button>
  </div>;
}

export default function Home() {
  const page = useRef<HTMLElement>(null);
  const [language, setLanguage] = useState<"en" | "mk">("en");
  const mk = language === "mk";
  const currentServices = mk ? mkServices : services;
  const currentProcess = mk ? mkProcess : process;

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => window.cancelAnimationFrame(refreshFrame);
  }, [language]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let removePointerListener: (() => void) | undefined;

    const context = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(".loader", { display: "none" });
        gsap.set("[data-reveal]", { opacity: 1, y: 0 });
        return;
      }

      gsap.timeline({ defaults: { ease: "power4.out" } })
        .to(".loader-line__fill", { scaleX: 1, duration: 0.8, ease: "power2.inOut" })
        .to(".loader", { yPercent: -100, duration: 0.9, ease: "power4.inOut" })
        .from(".site-header", { y: -30, opacity: 0, duration: 0.65 }, "-=0.35")
        .from(".hero-word", { yPercent: 115, rotate: 3, duration: 1.1, stagger: 0.08 }, "-=0.5")
        .from(".hero-meta > *", { y: 24, opacity: 0, duration: 0.75, stagger: 0.08 }, "-=0.8")
        .from(".hero-orbit", { scale: 0.72, opacity: 0, duration: 1.2 }, "-=1");

      gsap.to(".hero-orbit", {
        yPercent: 18,
        rotate: 7,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 54, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>(".statement-line").forEach((line) => {
        gsap.fromTo(line, { backgroundPositionX: "100%" }, {
          backgroundPositionX: "0%",
          ease: "none",
          scrollTrigger: { trigger: line, start: "top 82%", end: "top 45%", scrub: 0.7 },
        });
      });

      const glow = document.querySelector<HTMLElement>(".cursor-glow");
      if (glow && window.matchMedia("(hover: hover)").matches) {
        const moveX = gsap.quickTo(glow, "x", { duration: 0.7, ease: "power3" });
        const moveY = gsap.quickTo(glow, "y", { duration: 0.7, ease: "power3" });
        const onPointerMove = (event: PointerEvent) => { moveX(event.clientX); moveY(event.clientY); };
        window.addEventListener("pointermove", onPointerMove);
        removePointerListener = () => window.removeEventListener("pointermove", onPointerMove);
      }
    }, page);

    return () => { removePointerListener?.(); context.revert(); };
  }, []);

  return (
    <main ref={page} id="top" className="site-shell" data-language={language}>
      <div className="loader" aria-hidden="true">
        <div className="loader-word">SIGNAL / BLUE</div>
        <div className="loader-line"><span className="loader-line__fill" /></div>
        <span className="loader-index">01 — 25</span>
      </div>
      <div className="cursor-glow" aria-hidden="true" />

      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label={mk ? "Главна навигација" : "Primary navigation"}>
          <a href="#expertise">{mk ? "Услуги" : "Expertise"}</a><a href="#approach">{mk ? "Процес" : "Approach"}</a><a href="#contact">{mk ? "Контакт" : "Contact"}</a>
        </nav>
        <div className="desktop-contact"><LanguageToggle language={language} onChange={setLanguage} /><ContactPanel language={language} /></div>
        <div className="mobile-contact"><LanguageToggle language={language} onChange={setLanguage} /><ContactPanel compact language={language} /></div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">{mk ? "Независно дигитално студио — Скопје" : "Independent digital studio — Skopje"}</p>
          <h1 id="hero-title">
            <span className="hero-line"><span className="hero-word">{mk ? "Вашиот бизнис" : "Your business"}</span></span>
            <span className="hero-line"><span className={`hero-word ${mk ? "hero-word--mk-fit" : ""}`}>{mk ? "заслужува да" : "deserves to"}</span></span>
            <span className="hero-line hero-line--accent"><span className="hero-word">{mk ? "се истакне." : "stand out."}</span></span>
          </h1>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring orbit-ring--one" /><div className="orbit-ring orbit-ring--two" />
          <img className="hero-sculpture" src="brand/signal-blue-waveform.webp" alt="" width="1536" height="1024" decoding="async" fetchPriority="high" />
        </div>
        <div className="hero-meta">
          <p>{mk ? "Дизајнираме и градиме дигитални искуства што првиот впечаток го претвораат во траен." : "We design and build digital experiences that turn a first impression into a lasting one."}</p>
          <a href="#expertise" className="text-link">{mk ? "Истражи ја нашата работа" : "Explore our craft"} <ArrowDown /></a>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><div className="marquee-track">
        <span>STRATEGY</span><i /><span>DESIGN</span><i /><span>DEVELOPMENT</span><i /><span>MOTION</span><i />
        <span>STRATEGY</span><i /><span>DESIGN</span><i /><span>DEVELOPMENT</span><i /><span>MOTION</span><i />
        <span>STRATEGY</span><i /><span>DESIGN</span><i /><span>DEVELOPMENT</span><i /><span>MOTION</span><i />
        <span>STRATEGY</span><i /><span>DESIGN</span><i /><span>DEVELOPMENT</span><i /><span>MOTION</span><i />
      </div></div>

      <section className="statement section-pad" aria-label={mk ? "Нашето гледиште" : "Our point of view"}>
        <p className="section-kicker" data-reveal>{mk ? "Нашето гледиште" : "Our point of view"}</p>
        <div className="statement-copy">
          <span className="statement-line">{mk ? "Повеќето страници објаснуваат." : "Most websites explain."}</span>
          <span className="statement-line statement-line--serif">{mk ? "Најдобрите прават" : "The best ones make"}</span>
          <span className="statement-line">{mk ? "да почувствувате нешто." : "you feel something."}</span>
        </div>
        <p className="statement-note" data-reveal>{mk ? "Премиум не значи повеќе декорација. Тоа е посилна идеја, подобра воздржаност и секој детал во иста насока." : "Premium is not more decoration. It is a stronger idea, better restraint and every detail moving in the same direction."}</p>
      </section>

      <section id="expertise" className="services section-pad">
        <div className="section-heading" data-reveal>
          <div><p className="section-kicker">{mk ? "Што правиме" : "What we do"}</p><h2>{mk ? <>Од прва идеја<br />до <em>целосен сигнал.</em></> : <>From blank page<br />to <em>full signal.</em></>}</h2></div>
          <p>{mk ? "Еден фокусиран тим за целото искуство — од првата насока до финалната интеракција." : "One focused team across the entire experience—from first direction to final interaction."}</p>
        </div>
        <div className="service-list">
          {currentServices.map((service) => (
            <article className="service-row" key={service.number} data-reveal>
              <span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p>
              <ul aria-label={mk ? `${service.title} вклучува` : `${service.title} includes`}>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="process section-pad">
        <div className="process-intro" data-reveal>
          <p className="section-kicker section-kicker--light">{mk ? "Како работиме" : "How we work"}</p>
          <h2>{mk ? <>Јасен процес.<br /><em>Неочекуван резултат.</em></> : <>Clear process.<br /><em>Unexpected result.</em></>}</h2>
          <p>{mk ? "Без театар и без слоеви на менаџмент. Разговарате директно со луѓето што ја создаваат работата." : "No theatre, no layers of account management. You speak directly with the people shaping and building the work."}</p>
        </div>
        <ol className="process-grid">
          {currentProcess.map((step) => <li key={step.number} data-reveal><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}
        </ol>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="contact-section__top" data-reveal>
          <p className="section-kicker">{mk ? "Имате проект на ум?" : "Have a project in mind?"}</p><span>{mk ? "Достапни за избрани нови проекти" : "Available for select new projects"}</span>
        </div>
        <div className="contact-section__main" data-reveal>
          <h2>{mk ? <>Да создадеме нешто<br /><em>што луѓето го паметат.</em></> : <>Let’s build something<br /><em>people remember.</em></>}</h2><ContactPanel language={language} />
        </div>
        <div className="contact-section__direct" data-reveal>
          <a href={gmailCompose} target="_blank" rel="noreferrer"><Mail /> contact.signalblue@gmail.com</a>
          <a href="https://www.instagram.com/signalblue.mk/" target="_blank" rel="noreferrer"><AtSign /> @signalblue.mk</a>
          <a href="tel:+38971974305"><Phone /> +389 71 974 305</a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-lockup" href="#top" aria-label="Signal Blue home">
          <img src="brand/signal-blue-lockup.webp" alt="Signal Blue" width="820" height="850" loading="lazy" decoding="async" />
        </a>
        <p>{mk ? <>Премиум веб дизајн и развој<br />од Скопје, Северна Македонија.</> : <>Premium web design & development<br />from Skopje, North Macedonia.</>}</p>
        <div><a href="#top">{mk ? "Назад кон врвот" : "Back to top"} <ArrowUpRight /></a><span>© {new Date().getFullYear()} Signal Blue</span></div>
      </footer>
    </main>
  );
}
