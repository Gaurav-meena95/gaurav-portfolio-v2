import { useState } from 'react';
import { Container, GitHubIcon, LinkedInIcon, MailIcon } from './SiteUI';
import { PERSONAL_INFO } from '../data/portfolioData';

const LINKS = [
  { id: "hero", label: "home" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "achievements", label: "awards" },
  { id: "contact", label: "contact" },
];

export function Navbar({ onOpenCard }) {
  const [active, setActive] = useState("hero");

  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-portfolio-bg/80 backdrop-blur-md border-b border-portfolio-border/50">
      <nav className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-3">
          {onOpenCard && (
            <button
              onClick={onOpenCard}
              className="group flex items-center gap-1.5 text-xs font-mono text-portfolio-muted transition-colors hover:text-portfolio-text cursor-pointer px-2.5 py-1 rounded border border-portfolio-border bg-portfolio-card/80 hover:border-white/20"
              title="Return to the 3D card landing stage"
            >
              <span className="transition-transform group-hover:-translate-x-0.5 text-[#00A3FF]">◂</span>
              <span>card</span>
            </button>
          )}

          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
            className="group flex items-center gap-2 text-sm font-medium text-portfolio-text tracking-tight cursor-pointer"
          >
            <span className="font-mono text-xs text-[#00A3FF]">●</span>
            <span className="font-display font-semibold tracking-tight text-white">gaurav meena</span>
          </a>
        </div>

        <div className="hidden items-center gap-6 sm:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`relative text-sm transition-colors cursor-pointer ${
                active === l.id ? "text-portfolio-text" : "text-portfolio-muted hover:text-portfolio-text"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute -bottom-1.5 left-0 right-0 mx-auto h-1 w-1 rounded-full bg-portfolio-text" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-portfolio-border px-3 py-1.5 text-xs font-mono text-portfolio-text/80 transition-colors hover:border-white/25 hover:text-portfolio-text"
          >
            resume
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="rounded-md bg-portfolio-text px-3 py-1.5 text-xs font-medium text-portfolio-bg transition-colors hover:bg-portfolio-text/90"
          >
            contact
          </a>
        </div>
      </nav>
    </header>
  );
}
