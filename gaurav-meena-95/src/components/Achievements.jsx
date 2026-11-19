import { Section, SectionHeading, Reveal } from './SiteUI';
import { ACHIEVEMENTS } from '../data/portfolioData';

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading title="selected awards & recognition" />

      <ul className="flex flex-col">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <li className="group flex items-start gap-4 border-t border-portfolio-border/70 py-4 first:border-t-0">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-portfolio-border bg-portfolio-card text-base font-mono">
                {a.icon === "git" ? "✦" : a.icon === "code" ? "⌘" : a.icon === "zap" ? "⚡" : "◈"}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[15px] font-semibold text-portfolio-text">
                    {a.title}
                  </h3>
                  <span className="shrink-0 font-mono text-[11px] text-portfolio-muted">{a.date}</span>
                </div>

                <p className="mt-0.5 text-[12px] text-portfolio-muted/80 font-mono">{a.category}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-portfolio-muted">{a.desc}</p>

                <div className="mt-2.5 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md border border-portfolio-border bg-portfolio-border/40 px-2 py-0.5 font-mono text-[10px] text-portfolio-text/80">
                    <span className="text-portfolio-muted">verified:</span> {a.highlight}
                  </span>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
