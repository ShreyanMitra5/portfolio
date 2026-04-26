import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight, Bot, Leaf, Cpu, Wind, Trophy, Users, Calendar } from 'lucide-react';

/* ─── Theme tokens ──────────────────────────────────────────────── */
const INK   = '#1a0f07';  // primary dark brown
const CREAM = '#f6f1e8';  // page background
const SIENNA = '#7c5530'; // accent warm brown

/* ─── Types ────────────────────────────────────────────────────── */
interface Stat {
  Icon: React.ElementType;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

interface FeaturedProject {
  title: string;
  image: string;
  description: string;
  link: string;
  status: string;
  tech: string[];
  stats?: Stat[];
}

interface OtherProject {
  title: string;
  description: string;
  link: string;
  status: string;
  tech: string[];
}

/* ─── Animation constants ───────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

const FADE_UP = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/* ─── Scroll progress bar ───────────────────────────────────────── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
      style={{ scaleX, background: `linear-gradient(90deg, ${SIENNA}99 0%, ${SIENNA}44 100%)` }}
    />
  );
}

/* ─── Fade-in on scroll ─────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section label ─────────────────────────────────────────────── */
function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-5 mb-14">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase tabular-nums" style={{ color: `${INK}33` }}>
          {index}
        </span>
        <div className="w-5 h-px" style={{ background: `${INK}20` }} />
        <span className="text-[10px] font-bold tracking-[0.28em] uppercase" style={{ color: `${INK}33` }}>
          {title}
        </span>
        <div className="flex-1 h-px" style={{ background: `${INK}10` }} />
      </div>
    </FadeIn>
  );
}

/* ─── Animated counter ──────────────────────────────────────────── */
function CountUp({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const dur = 1500;
    const tick = () => {
      const t = Math.min((Date.now() - start) / dur, 1);
      setDisplay(Math.round((1 - Math.pow(1 - t, 3)) * value));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

/* ─── Abstract decorative SVG ───────────────────────────────────── */
function OrbitalRings({ opacity = 0.045 }: { opacity?: number }) {
  return (
    <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      <circle cx="260" cy="260" r="258" stroke={INK} strokeWidth="0.75" />
      <circle cx="260" cy="260" r="200" stroke={INK} strokeWidth="0.5" strokeDasharray="3 9" />
      <circle cx="260" cy="260" r="142" stroke={INK} strokeWidth="0.75" />
      <circle cx="260" cy="260" r="84"  stroke={INK} strokeWidth="0.5" strokeDasharray="1.5 6" />
      <line x1="260" y1="2"   x2="260" y2="518" stroke={INK} strokeWidth="0.4" strokeDasharray="2 10" />
      <line x1="2"   y1="260" x2="518" y2="260" stroke={INK} strokeWidth="0.4" strokeDasharray="2 10" />
    </svg>
  );
}

/* ─── Data ──────────────────────────────────────────────────────── */
const interests = [
  { Icon: Bot,  label: 'AI / Machine Learning' },
  { Icon: Leaf, label: 'Agricultural Technology' },
  { Icon: Cpu,  label: 'Electronics & Hardware' },
  { Icon: Wind, label: 'UAV / Drones' },
];

const featuredProjects: FeaturedProject[] = [
  {
    title: 'Clubly',
    image: '/proj/clubly.png',
    description: 'All-in-one platform helping student leaders organize, communicate, and grow their clubs — planning, communication, and leadership tools in one place.',
    link: 'https://clubly.space/',
    status: 'Testing',
    tech: ['Python', 'PyTorch', 'Groq', 'MongoDB', 'React', 'AWS', 'Supabase'],
  },
  {
    title: 'CodeWithPurpose',
    image: '/proj/cwp.png',
    description: 'Co-founded an accessible coding education platform reaching 900+ students globally via Udemy, with earnings donated to charitable causes.',
    link: 'https://codewithpurpose.org/',
    status: 'Live',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Grizzly Hacks',
    image: '/proj/gh.png',
    description: 'Student-run hackathon I help lead — bringing builders together each year to create, learn, and grow as a community.',
    link: 'https://grizzlyhacks.com/',
    status: 'Live',
    tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
    stats: [
      { Icon: Trophy,   label: 'in prizes', value: 90,  suffix: 'k+', prefix: '$' },
      { Icon: Users,    label: 'hackers',   value: 550, suffix: '+'               },
      { Icon: Calendar, label: 'years',     value: 4,   suffix: '+'               },
    ],
  },
];

const otherProjects: OtherProject[] = [
  {
    title: 'Verofy',
    description: 'Chrome extension + Flask API detecting fake news via fine-tuned BERT. Real-time credibility scores for any article.',
    link: 'https://www.verofy.us/',
    status: 'Live',
    tech: ['Python', 'Flask', 'BERT', 'JavaScript', 'Chrome Extension'],
  },
  {
    title: 'Anasa AI',
    description: 'Emotion detection via NLP and facial recognition for real-time digital wellbeing support.',
    link: 'https://v0-cool-website-statistics.vercel.app/',
    status: 'Live',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
  },
  {
    title: 'VetPy',
    description: 'Teaching veterans Python fundamentals for tech careers, with posts on Data Science and Game Development.',
    link: 'https://shreyanmitra5.github.io/VetPy/',
    status: 'Live',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Sonar',
    description: 'NLP code-detection in text using RoBERTa and DeBERTa-v3, plus a music streaming UI.',
    link: 'https://v0-recreate-ui-screenshot-eta-ten.vercel.app/',
    status: 'Live',
    tech: ['Python', 'PyTorch', 'RoBERTa', 'DeBERTa-v3'],
  },
];

const NAV_ITEMS = ['about', 'work', 'contact'];

/* ─── App ───────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div
      className="min-h-screen selection:bg-amber-200 selection:text-amber-900"
      style={{ background: CREAM, color: INK }}
    >
      <ScrollProgress />

      {/* Subtle dot-grid texture */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${INK}09 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* ── Floating nav ── */}
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-5 inset-x-0 z-50 flex justify-center"
      >
        <div
          className="flex items-center gap-0.5 px-2 py-1.5 rounded-full backdrop-blur-xl"
          style={{
            border: `1px solid ${INK}12`,
            background: `${CREAM}cc`,
            boxShadow: `0 8px 32px -8px ${INK}18`,
          }}
        >
          <span
            className="px-3 py-1 text-[11px] font-black tracking-[0.2em] uppercase select-none"
            style={{ color: `${INK}30` }}
          >
            SM
          </span>
          <div className="w-px h-3.5 mx-1" style={{ background: `${INK}12` }} />
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="px-4 py-1.5 text-[13px] rounded-full capitalize transition-all duration-200"
              style={{ color: `${INK}55` }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = INK; (e.target as HTMLElement).style.background = `${INK}07`; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = `${INK}55`; (e.target as HTMLElement).style.background = 'transparent'; }}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center px-6 md:px-14 py-32 relative overflow-hidden">

        {/* Orbital rings — abstract decoration, top-right */}
        <div className="absolute -top-32 -right-32 w-[560px] h-[560px] pointer-events-none select-none">
          <OrbitalRings opacity={0.05} />
        </div>
        {/* Small cross marker — abstract detail */}
        <div className="absolute bottom-16 left-12 pointer-events-none select-none opacity-[0.08]">
          <svg width="24" height="24" viewBox="0 0 24 24"><line x1="12" y1="0" x2="12" y2="24" stroke={INK} strokeWidth="1"/><line x1="0" y1="12" x2="24" y2="12" stroke={INK} strokeWidth="1"/></svg>
        </div>
        <div className="absolute top-32 left-1/3 pointer-events-none select-none opacity-[0.06]">
          <svg width="16" height="16" viewBox="0 0 16 16"><line x1="8" y1="0" x2="8" y2="16" stroke={INK} strokeWidth="0.75"/><line x1="0" y1="8" x2="16" y2="8" stroke={INK} strokeWidth="0.75"/></svg>
        </div>

        <div className="max-w-[1100px] mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-14 md:gap-20">

            {/* ── Text column ── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="flex-1 min-w-0"
            >
              {/* Location */}
              <motion.div variants={FADE_UP} className="flex items-center gap-2 mb-10" style={{ color: `${INK}40` }}>
                <MapPin size={11} />
                <span className="text-[12px] tracking-wide">San Ramon, CA</span>
                <span className="mx-1" style={{ color: `${INK}20` }}>·</span>
                <span className="text-[12px] tracking-wide" style={{ color: SIENNA + '99' }}>
                  Open to research
                </span>
              </motion.div>

              {/* Name — Cormorant Garamond, italic, very large */}
              <motion.h1
                variants={FADE_UP}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(72px, 14vw, 124px)',
                  letterSpacing: '-0.02em',
                  lineHeight: 0.88,
                  color: INK,
                }}
                className="mb-8"
              >
                Shreyan<br />Mitra
              </motion.h1>

              {/* Role — small caps, warm brown */}
              <motion.p
                variants={FADE_UP}
                className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-6"
                style={{ color: SIENNA + 'aa' }}
              >
                Aspiring Research Scientist
              </motion.p>

              {/* Tagline */}
              <motion.p
                variants={FADE_UP}
                className="text-[15px] leading-[1.95] max-w-[390px] mb-11"
                style={{ color: `${INK}55` }}
              >
                Building at the frontier of AI/ML, agricultural technology, and autonomous systems. Rising junior who makes things that matter.
              </motion.p>

              {/* Social links */}
              <motion.div variants={FADE_UP} className="flex items-center gap-6">
                {[
                  { Icon: Github,   label: 'GitHub',  href: 'https://github.com/ShreyanMitra5' },
                  { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreyan-m-8910172b7/' },
                  { Icon: Mail,     label: 'Email',    href: 'mailto:shreyan.mitra09@gmail.com' },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[13px] transition-colors duration-200"
                    style={{ color: `${INK}38` }}
                    onMouseEnter={e => (e.currentTarget.style.color = INK)}
                    onMouseLeave={e => (e.currentTarget.style.color = `${INK}38`)}
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Photo column — clean, no overlay ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
              className="relative shrink-0 md:w-[340px] w-full max-w-[300px] mx-auto md:mx-0"
            >
              {/* Warm paper shadow behind photo */}
              <div
                className="absolute inset-0 rounded-3xl translate-x-3 translate-y-3"
                style={{ background: `${SIENNA}18` }}
              />
              <img
                src="/shrey.jpeg"
                alt="Shreyan Mitra"
                className="relative w-full rounded-3xl object-cover object-top"
                style={{
                  height: 'clamp(300px, 46vw, 450px)',
                  boxShadow: `0 0 0 1px ${INK}10, 0 20px 60px -12px ${INK}22`,
                }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════════════ */}
      <section id="about" className="py-28 px-6 md:px-14">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel index="01" title="About" />

          <div className="grid md:grid-cols-[1fr_auto] gap-14 md:gap-20 items-start">
            <div className="space-y-5 max-w-[520px]">
              <FadeIn delay={0.04}>
                <p className="text-[15px] leading-[1.95]" style={{ color: `${INK}60` }}>
                  Hey — I'm a junior in high school in San Ramon, CA who loves to build things. I aspire to become a research scientist, working at the intersection of AI/ML, agricultural technology, electronics, and autonomous aerial systems.
                </p>
              </FadeIn>
              <FadeIn delay={0.09}>
                <p className="text-[15px] leading-[1.95]" style={{ color: `${INK}60` }}>
                  When I'm not coding, you'll find me on the basketball court or with a guitar in hand. Currently growing Clubly into the definitive platform for student-led organizations.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.13}>
              <div className="grid grid-cols-2 gap-3 w-full md:w-[260px]">
                {interests.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-3 p-4 rounded-2xl transition-all duration-300 cursor-default"
                    style={{ border: `1px solid ${INK}0d`, background: `${INK}03` }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${INK}18`; (e.currentTarget as HTMLElement).style.background = `${INK}06`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${INK}0d`; (e.currentTarget as HTMLElement).style.background = `${INK}03`; }}
                  >
                    <Icon size={17} style={{ color: SIENNA + '88' }} />
                    <span className="text-[11px] leading-snug" style={{ color: `${INK}55` }}>{label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WORK
      ══════════════════════════════════════════════════════════ */}
      <section id="work" className="py-28 px-6 md:px-14">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel index="02" title="Work" />

          {/* Featured project cards with screenshots */}
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {featuredProjects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.09}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300"
                  style={{ border: `1px solid ${INK}0d`, background: `${INK}02` }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${INK}18`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${INK}0d`; }}
                >
                  {/* Screenshot */}
                  <div className="relative overflow-hidden h-[185px] shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, ${CREAM} 0%, ${CREAM}44 30%, transparent 100%)` }}
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <h3 className="font-semibold text-[15px] leading-tight transition-colors" style={{ color: `${INK}cc` }}>
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 mt-0.5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ color: `${INK}25` }}
                      />
                    </div>

                    <p className="text-[12px] leading-relaxed mb-4 flex-1" style={{ color: `${INK}50` }}>
                      {project.description}
                    </p>

                    {/* GrizzlyHacks stats */}
                    {project.stats && (
                      <div
                        className="grid grid-cols-3 gap-2 mb-4 px-3 py-3 rounded-xl"
                        style={{ background: `${INK}05`, border: `1px solid ${INK}08` }}
                      >
                        {project.stats.map(({ label, value, suffix, prefix }) => (
                          <div key={label} className="flex flex-col items-center text-center gap-0.5">
                            <span
                              className="text-[16px] font-bold leading-none tabular-nums"
                              style={{ color: `${INK}cc`, fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                            >
                              <CountUp value={value} suffix={suffix} prefix={prefix} />
                            </span>
                            <span className="text-[9px] uppercase tracking-wide leading-tight" style={{ color: `${INK}35` }}>
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded font-mono"
                          style={{ background: `${INK}07`, color: `${INK}45` }}
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span
                          className="text-[10px] px-2 py-0.5 rounded font-mono"
                          style={{ background: `${INK}05`, color: `${INK}30` }}
                        >
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Other projects — list */}
          <FadeIn delay={0.1}>
            <p
              className="text-[9px] font-bold tracking-[0.28em] uppercase mb-5"
              style={{ color: `${INK}28` }}
            >
              More projects
            </p>
            <div>
              {otherProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 py-4 transition-colors duration-200"
                  style={{ borderBottom: `1px solid ${INK}0a` }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderBottom = `1px solid ${INK}18`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderBottom = `1px solid ${INK}0a`; }}
                >
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-semibold text-[14px] mb-1.5 transition-colors"
                      style={{ color: `${INK}88` }}
                    >
                      {project.title}
                    </p>
                    <p className="text-[12px] leading-relaxed mb-2" style={{ color: `${INK}45` }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-1.5 py-0.5 rounded font-mono"
                          style={{ background: `${INK}06`, color: `${INK}38` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="shrink-0 mt-0.5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: `${INK}22` }}
                  />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-28 px-6 md:px-14 relative overflow-hidden">
        {/* Abstract orbital — partial, bottom-right corner */}
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] pointer-events-none select-none">
          <OrbitalRings opacity={0.04} />
        </div>

        <div className="max-w-[1100px] mx-auto relative">
          <SectionLabel index="03" title="Contact" />

          <div className="max-w-[500px]">
            <FadeIn delay={0.04}>
              <h2
                className="mb-7"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(44px, 8vw, 76px)',
                  letterSpacing: '-0.02em',
                  lineHeight: 0.9,
                  color: INK,
                }}
              >
                Let's work<br />together.
              </h2>
            </FadeIn>

            <FadeIn delay={0.09}>
              <p className="text-[15px] leading-[1.9] mb-10" style={{ color: `${INK}52` }}>
                Open to research opportunities, interesting projects, and conversations about AI, agriculture, UAVs, or anything at the edge of what's possible.
              </p>
            </FadeIn>

            <FadeIn delay={0.14}>
              <a
                href="mailto:shreyan.mitra09@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[13px] transition-all duration-200"
                style={{ border: `1px solid ${INK}18`, background: `${INK}05`, color: `${INK}70` }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = INK; el.style.border = `1px solid ${INK}30`; el.style.background = `${INK}09`; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = `${INK}70`; el.style.border = `1px solid ${INK}18`; el.style.background = `${INK}05`; }}
              >
                <Mail size={14} />
                shreyan.mitra09@gmail.com
                <ArrowUpRight size={13} />
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-14" style={{ borderTop: `1px solid ${INK}08` }}>
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <p className="text-[11px]" style={{ color: `${INK}28` }}>© 2025 Shreyan Mitra</p>
          <p
            className="text-[11px]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              color: `${INK}28`,
            }}
          >
            San Ramon, CA
          </p>
        </div>
      </footer>
    </div>
  );
}