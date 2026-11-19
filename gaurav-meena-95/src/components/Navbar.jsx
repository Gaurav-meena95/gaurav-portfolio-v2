import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowIcon } from './SiteUI';
import { PERSONAL_INFO } from '../data/portfolioData';

const LINKS = [
  { id: "hero", label: "home" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "achievements", label: "awards" },
];

export function Navbar({ onOpenCard }) {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close mobile drawer on escape key
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-portfolio-bg/85 backdrop-blur-md border-b border-portfolio-border/60">
      <nav className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Left: Card stage button & Brand Name (single line, no wrapping) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {onOpenCard && (
            <button
              onClick={onOpenCard}
              className="group inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono text-portfolio-muted transition-colors hover:text-portfolio-text cursor-pointer px-2 sm:px-2.5 py-1 rounded border border-portfolio-border bg-portfolio-card/90 hover:border-white/20 whitespace-nowrap"
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
            className="group flex items-center gap-1.5 text-sm font-medium tracking-tight cursor-pointer whitespace-nowrap"
          >
            <span className="font-mono text-xs text-[#00A3FF]">●</span>
            <span className="font-display font-semibold tracking-tight text-white">
              gaurav meena
            </span>
          </a>
        </div>

        {/* Center: Quiet Desktop Nav Links (hidden below 768px to prevent ANY collision) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`relative text-[13px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                active === l.id ? "text-portfolio-text font-semibold" : "text-portfolio-muted hover:text-portfolio-text"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute -bottom-1.5 left-0 right-0 mx-auto h-1 w-1 rounded-full bg-portfolio-text" />
              )}
            </button>
          ))}
        </div>

        {/* Right: Actions (Resume + Contact + Mobile Hamburger) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Resume link (Desktop only to save mobile space) */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 rounded-md border border-portfolio-border px-2.5 py-1.5 text-[12px] font-mono text-portfolio-muted transition-colors hover:border-white/25 hover:text-portfolio-text whitespace-nowrap"
          >
            <span>resume</span>
            <ArrowIcon className="h-3 w-3" />
          </a>

          {/* Contact button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="rounded-md bg-portfolio-text px-3 py-1.5 text-[12px] font-medium text-portfolio-bg transition-colors hover:bg-portfolio-text/90 whitespace-nowrap cursor-pointer"
          >
            contact
          </a>

          {/* Mobile hamburger toggle (visible only on < 768px) */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-portfolio-border text-portfolio-muted transition-colors hover:border-white/25 hover:text-portfolio-text md:hidden cursor-pointer"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[1.5px] w-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-[1.5px] w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-portfolio-border/70 bg-portfolio-bg/95 backdrop-blur-xl px-4 py-3 md:hidden"
          >
            <div className="mx-auto flex max-w-3xl flex-col gap-1">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => scrollTo(l.id)}
                  className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors cursor-pointer ${
                    active === l.id
                      ? "bg-portfolio-border/40 text-portfolio-text font-semibold"
                      : "text-portfolio-muted hover:bg-portfolio-border/20 hover:text-portfolio-text"
                  }`}
                >
                  {l.label}
                </button>
              ))}

              <div className="pt-2 mt-1 border-t border-portfolio-border/40 flex items-center justify-between gap-2 px-1">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-portfolio-muted hover:text-portfolio-text py-1"
                >
                  <span>download resume</span>
                  <ArrowIcon className="h-3 w-3" />
                </a>

                {onOpenCard && (
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenCard();
                    }}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#00A3FF] hover:underline py-1 cursor-pointer"
                  >
                    <span>✦ open 3d card</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
