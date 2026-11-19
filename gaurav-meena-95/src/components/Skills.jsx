import { Section, SectionHeading, Reveal, TechTag } from './SiteUI';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading title="skills & tools" />

      <div className="flex flex-col gap-5">
        {SKILL_CATEGORIES.map((group, gi) => (
          <Reveal key={group.name} delay={gi * 0.04}>
            <div className="grid gap-2 sm:grid-cols-[140px_1fr] sm:items-start">
              <span className="pt-1 text-[12px] font-medium text-portfolio-muted font-mono">
                {group.name.toLowerCase()}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <TechTag key={s.name} k={s.logo} label={s.name} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
