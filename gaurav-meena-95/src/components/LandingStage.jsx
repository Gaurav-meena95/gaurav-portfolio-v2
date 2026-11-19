import { useState } from 'react';
import { motion } from 'framer-motion';
import { HoloCard } from './HoloCard';
import { sound } from '../utils/sound';
import { ArrowRight, Volume2, VolumeX, Sparkles, Code2, Briefcase, Mail } from 'lucide-react';

const BG_ACCENTS = [
  { name: 'Dark Void', bg: '#030712', accent: '#00A3FF' },
  { name: 'Deep Indigo', bg: '#060818', accent: '#6366F1' },
  { name: 'Cyber Emerald', bg: '#02120e', accent: '#10B981' },
  { name: 'Obsidian Violet', bg: '#0b0614', accent: '#8B5CF6' },
];

export function LandingStage({ onEnterPortfolio }) {
  const [accentIdx, setAccentIdx] = useState(0);
  const [soundOn, setSoundOn] = useState(true);

  const activeTheme = BG_ACCENTS[accentIdx];

  const cycleTheme = () => {
    sound.playClick();
    setAccentIdx((prev) => (prev + 1) % BG_ACCENTS.length);
  };

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    sound.setSoundEnabled(nextState);
    if (nextState) {
      sound.playSuccess();
    }
  };

  const handleEnter = (sectionId = 'hero') => {
    sound.playClick();
    onEnterPortfolio(sectionId);
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-between p-4 sm:p-6 overflow-hidden transition-colors duration-500 select-none"
      style={{ backgroundColor: activeTheme.bg }}
    >
      {/* Scanline & ambient overlay matching portfolio_v1 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,163,255,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Top Header / Escape Hatch (PortfolioEscape from portfolio_v1) */}
      <header className="w-full max-w-5xl flex items-center justify-between z-20 pt-2 sm:pt-4">
        {/* Brand identity */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#00A3FF]">●</span>
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            gaurav meena
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-portfolio-muted px-2 py-0.5 rounded border border-portfolio-border bg-portfolio-card">
            interactive card stage
          </span>
        </div>

        {/* Enter Portfolio Button (exact escape hatch from portfolio_v1) */}
        <div className="flex flex-col items-end gap-1">
          <button
            onClick={() => handleEnter('hero')}
            className="group inline-flex items-center gap-2 rounded-lg bg-portfolio-text px-4 py-2 text-xs sm:text-[13px] font-medium text-portfolio-bg transition-all hover:bg-white hover:scale-102 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
          >
            <span>enter main portfolio</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
          <span className="hidden sm:block font-mono text-[11px] text-portfolio-muted">
            not a fan of 3D cards? go to my main portfolio :)
          </span>
        </div>
      </header>

      {/* Central 3D Card Stage */}
      <main className="w-full flex-1 flex flex-col items-center justify-center my-auto z-10 py-4 max-w-lg">
        {/* Interactive hint above card */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-portfolio-border bg-portfolio-card/90 px-3 py-1 font-mono text-[11px] text-portfolio-muted shadow-sm backdrop-blur-sm"
        >
          <Sparkles className="w-3 h-3 text-[#00A3FF] animate-pulse" />
          <span>click card to flip · hover corners to tilt in 3D</span>
        </motion.div>

        {/* 3D Holo Developer Card */}
        <div className="w-full max-w-[400px]">
          <HoloCard onNavigate={handleEnter} />
        </div>

        {/* Quick jump navigation buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            onClick={() => handleEnter('projects')}
            className="inline-flex items-center gap-1.5 rounded-md border border-portfolio-border bg-portfolio-card/80 px-3 py-1.5 text-xs font-mono text-portfolio-text transition-colors hover:border-white/25 hover:bg-white/5 cursor-pointer"
          >
            <Code2 className="w-3 h-3 text-[#00A3FF]" />
            <span>view all projects</span>
          </button>
          <button
            onClick={() => handleEnter('experience')}
            className="inline-flex items-center gap-1.5 rounded-md border border-portfolio-border bg-portfolio-card/80 px-3 py-1.5 text-xs font-mono text-portfolio-text transition-colors hover:border-white/25 hover:bg-white/5 cursor-pointer"
          >
            <Briefcase className="w-3 h-3 text-emerald-400" />
            <span>the journey so far</span>
          </button>
          <button
            onClick={() => handleEnter('contact')}
            className="inline-flex items-center gap-1.5 rounded-md border border-portfolio-border bg-portfolio-card/80 px-3 py-1.5 text-xs font-mono text-portfolio-text transition-colors hover:border-white/25 hover:bg-white/5 cursor-pointer"
          >
            <Mail className="w-3 h-3 text-[#818cf8]" />
            <span>get in touch</span>
          </button>
        </motion.div>
      </main>

      {/* Bottom Retro HUD Controls matching portfolio_v1 */}
      <footer className="w-full max-w-5xl flex items-center justify-between z-20 pb-2 sm:pb-4 border-t border-portfolio-border/40 pt-3">
        {/* Left HUD: Theme cycle & Sound */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={cycleTheme}
            className="inline-flex items-center gap-1.5 rounded-md border border-portfolio-border bg-portfolio-card px-2.5 py-1.5 text-[11px] font-mono text-portfolio-muted transition-colors hover:border-white/25 hover:text-white cursor-pointer"
            title="Cycle background theme"
          >
            <span
              className="w-2.5 h-2.5 rounded-full border border-white/20"
              style={{ backgroundColor: activeTheme.accent }}
            />
            <span className="hidden sm:inline">THEME:</span> {activeTheme.name.toUpperCase()}
          </button>

          <button
            onClick={toggleSound}
            className="inline-flex items-center gap-1.5 rounded-md border border-portfolio-border bg-portfolio-card px-2.5 py-1.5 text-[11px] font-mono text-portfolio-muted transition-colors hover:border-white/25 hover:text-white cursor-pointer"
            title={soundOn ? 'Mute audio' : 'Enable audio'}
          >
            {soundOn ? (
              <>
                <Volume2 className="w-3 h-3 text-emerald-400" />
                <span className="hidden sm:inline">AUDIO: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3 h-3 text-red-400" />
                <span className="hidden sm:inline">AUDIO: OFF</span>
              </>
            )}
          </button>
        </div>

        {/* Right HUD: Status & Location */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-portfolio-muted">
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>OPEN TO OPPORTUNITIES</span>
          </span>
          <span className="text-portfolio-muted/60">IST · INDIA</span>
        </div>
      </footer>
    </div>
  );
}
