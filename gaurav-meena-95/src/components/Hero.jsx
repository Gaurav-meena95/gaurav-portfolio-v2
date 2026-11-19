import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon, Reveal } from './SiteUI';
import { HoloCard } from './HoloCard';
import { PERSONAL_INFO } from '../data/portfolioData';

const fade = {
  initial: { opacity: 0, y: 12, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const social =
  "flex h-9 w-9 items-center justify-center rounded-md border border-portfolio-border text-portfolio-muted transition-colors hover:border-white/25 hover:text-portfolio-text";

export function Hero({ onOpenCardStage }) {
  const [showCard, setShowCard] = useState(false);

  return (
    <section id="hero" className="scroll-mt-24 pt-10 pb-12 sm:pt-14">
      <Container>
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          <div className="min-w-0 flex-1">
            {/* Status Pill matching portfolio_v1 */}
            <motion.div
              {...fade}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-portfolio-border bg-portfolio-border/30 px-3 py-1 font-mono text-[11px] text-portfolio-muted"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              open to opportunities
            </motion.div>

            {/* Title matching portfolio_v1 */}
            <motion.h1
              {...fade}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl font-semibold leading-tight tracking-tight text-portfolio-text sm:text-[2.7rem]"
            >
              hey, i&apos;m gaurav. <span className="inline-block">👋</span>
            </motion.h1>

            {/* Role & Location */}
            <motion.p
              {...fade}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 font-mono text-[13px] text-portfolio-muted"
            >
              open-source contributor · full-stack developer · india
            </motion.p>

            {/* Intro text */}
            <motion.p
              {...fade}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-lg text-[15px] leading-relaxed text-portfolio-muted"
            >
              undergrad in artificial intelligence at newton school of technology (rishihood university). open source contributor to traceroot.ai (yc s25) with 12 merged prs, author of flight-booking workflows reaching 1m+ real users, and 533 leetcode problems solved.
            </motion.p>

            {/* Action buttons matching portfolio_v1 */}
            <motion.div
              {...fade}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-wrap items-center gap-2.5"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-portfolio-text px-4 py-2 text-[13px] font-medium text-portfolio-bg transition-colors hover:bg-portfolio-text/90 cursor-pointer"
              >
                <MailIcon className="h-4 w-4" /> get in touch
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-portfolio-border px-3.5 py-2 text-[13px] font-medium text-portfolio-text transition-colors hover:border-white/25 hover:text-white"
              >
                resume <ArrowIcon className="h-3 w-3" />
              </a>

              <button
                type="button"
                onClick={onOpenCardStage || (() => setShowCard(!showCard))}
                className="inline-flex items-center gap-1.5 rounded-md border border-portfolio-border px-3.5 py-2 text-[13px] font-mono text-portfolio-muted transition-colors hover:border-white/25 hover:text-portfolio-text cursor-pointer"
              >
                <span>3D card stage ✦</span>
              </button>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={social}
              >
                <GitHubIcon className="h-[18px] w-[18px]" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={social}
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Optional 3D Card drawer if user toggles */}
        {showCard && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 pt-6 border-t border-portfolio-border/70 flex justify-center"
          >
            <div className="w-full max-w-sm">
              <HoloCard />
            </div>
          </motion.div>
        )}

        {/* Bio summary paragraphs directly from resume */}
        <motion.div
          {...fade}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 space-y-3 border-t border-portfolio-border/70 pt-6"
        >
          <p className="max-w-2xl text-[14px] leading-relaxed text-portfolio-muted">
            i build full-stack systems and agentic ai workflows. recently contributed 12 merged pull requests to traceroot.ai (yc s25) across openai byok model pricing, detector reliability, and dashboard alert metrics.
          </p>
          <p className="max-w-2xl text-[14px] leading-relaxed text-portfolio-muted">
            at travel buddy, i architected 7 flight booking workflows in flutter for 1m+ real users with razorpay, biometrics, and firebase. on leetcode, i've solved 533 problems with a 1,459 peak contest rating.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
