import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Section, SectionHeading, BrandTile, Reveal } from './SiteUI';
import { WORK_EXPERIENCE, EDUCATION } from '../data/portfolioData';

const TABS = [
  { id: "work", label: "work" },
  { id: "education", label: "education" },
];

function WorkList({ rows }) {
  return (
    <ul className="flex flex-col">
      {rows.map((r, i) => (
        <Reveal key={`${r.role}-${r.company}`} delay={i * 0.05}>
          <li className="flex items-start gap-4 border-t border-portfolio-border/70 py-5 first:border-t-0">
            <BrandTile k={r.company.toLowerCase().includes('traceroot') ? 'ycombinator' : r.company.toLowerCase().includes('travel') ? 'flutter' : 'react'} size={36} />

            <div className="min-w-0 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3">
                <h3 className="text-[15px] font-semibold text-portfolio-text">
                  {r.role} <span className="text-portfolio-muted">· {r.company}</span>
                </h3>
                <span className="shrink-0 font-mono text-[11px] text-portfolio-muted">{r.period}</span>
              </div>

              <div className="mt-1 flex items-center gap-2">
                <span className="inline-block rounded border border-portfolio-border bg-portfolio-border/30 px-2 py-0.5 font-mono text-[10px] text-portfolio-muted">
                  {r.badge}
                </span>
                <span className="font-mono text-[11px] text-portfolio-muted">{r.location}</span>
              </div>

              {r.points && (
                <ul className="mt-2.5 flex flex-col gap-1.5">
                  {r.points.map((b, bIdx) => (
                    <li key={bIdx} className="flex gap-2 text-[13px] leading-relaxed text-portfolio-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-portfolio-muted/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

function EducationList({ rows }) {
  return (
    <ul className="flex flex-col">
      {rows.map((r, i) => (
        <Reveal key={`${r.degree}-${r.institution}`} delay={i * 0.05}>
          <li className="flex items-start gap-4 border-t border-portfolio-border/70 py-5 first:border-t-0">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-portfolio-border bg-black text-xs font-mono text-portfolio-muted">
              🎓
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3">
                <h3 className="text-[15px] font-semibold text-portfolio-text">
                  {r.degree}
                </h3>
                <span className="shrink-0 font-mono text-[11px] text-portfolio-muted">{r.period}</span>
              </div>

              <p className="mt-0.5 text-[13px] text-portfolio-muted font-mono">{r.institution}</p>

              <div className="mt-2">
                <span className="inline-block rounded border border-portfolio-border bg-portfolio-border/30 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                  {r.grade}
                </span>
              </div>
            </div>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

export function Internships() {
  const [tab, setTab] = useState("work");

  return (
    <Section id="experience">
      <SectionHeading title="the journey so far" />

      {/* Tabs matching portfolio_v1 */}
      <div className="mb-4 flex items-center gap-1 self-start rounded-lg border border-portfolio-border bg-portfolio-border/40 p-1 w-fit">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-md px-3 py-1 text-[12px] font-medium capitalize transition-colors cursor-pointer ${
              tab === t.id
                ? "bg-portfolio-bg text-portfolio-text"
                : "text-portfolio-muted hover:text-portfolio-text"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {tab === "work" && <WorkList rows={WORK_EXPERIENCE} />}
            {tab === "education" && <EducationList rows={EDUCATION} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
