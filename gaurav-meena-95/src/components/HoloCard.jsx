import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Terminal, Cpu, Award, RefreshCw, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export function HoloCard({ onNavigate }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics springs
  const springConfig = { damping: 20, stiffness: 180, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

  // Holographic reflection coordinates
  const sheenX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggleFlip = (e) => {
    e?.stopPropagation();
    sound.playFlip();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      id="holo-card-container"
      className="perspective-1200 relative select-none w-full max-w-[420px] mx-auto py-4 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={toggleFlip}
    >
      {/* Outer ambient glow reacting to card position - Formal blue/indigo only */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#00A3FF]/20 via-[#6366F1]/20 to-[#00A3FF]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

      {/* 3D Motion Shell */}
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full aspect-[1/1.42] rounded-2xl shadow-2xl transition-shadow duration-300"
      >
        {/* ================= CARD FRONT ================= */}
        <div
          className={`absolute inset-0 rounded-2xl p-[2px] backface-hidden bg-gradient-to-br from-[#00A3FF]/40 via-[#6366F1]/30 to-[#00A3FF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${
            isFlipped ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
          style={{ transform: 'rotateY(0deg) translateZ(1px)' }}
        >
          {/* Card inner dark glass */}
          <div className="relative h-full w-full rounded-2xl bg-[#090D16]/95 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden border border-white/10">
            {/* Holographic light sheen overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none holo-gradient opacity-35 mix-blend-color-dodge"
              style={{
                backgroundPosition: `${sheenX} ${sheenY}`,
              }}
            />

            {/* Subtle cyber background grid */}
            <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

            {/* Card Header: Security Badge & ID */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#00A3FF]/10 border border-[#00A3FF]/30 flex items-center justify-center text-[#00A3FF]">
                  <Cpu className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[11px] font-bold tracking-widest text-[#00A3FF] uppercase">
                      ID: GM-AI-2028
                    </span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                    NEWTON SCHOOL OF TECH
                  </span>
                </div>
              </div>

              <div className="px-2.5 py-1 rounded-full bg-[#00A3FF]/10 border border-[#00A3FF]/30 text-[10px] font-mono font-medium text-[#00A3FF] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]" />
                ACTIVE AGENT
              </div>
            </div>

            {/* Middle Section: Avatar + Title */}
            <div className="relative z-10 my-auto py-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-2xl p-[2px] bg-gradient-to-tr from-[#00A3FF] to-[#6366F1] shrink-0 shadow-lg shadow-[#00A3FF]/20">
                  <div className="w-full h-full rounded-[14px] bg-[#0c1220] flex items-center justify-center font-display font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#818cf8]">
                    GM
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#090D16] flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-white tracking-tight flex items-center gap-2">
                    Gaurav Meena
                  </h3>
                  <p className="text-xs font-mono text-[#00A3FF]/90 tracking-wide mt-0.5">
                    AI & Full Stack Systems Builder
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#00A3FF]" />
                    TraceRoot.AI (YC S25) Contributor
                  </p>
                </div>
              </div>

              {/* Metrics Pill Matrix */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/5 bg-white/[0.02] rounded-xl px-2">
                <div className="text-center">
                  <div className="font-mono text-sm font-bold text-[#00A3FF]">12 PRs</div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-tight">YC Merged</div>
                </div>
                <div className="text-center border-x border-white/5">
                  <div className="font-mono text-sm font-bold text-[#818cf8]">533+</div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-tight">LeetCode</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-sm font-bold text-emerald-300">1M+</div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-tight">App Users</div>
                </div>
              </div>

              {/* Core capabilities pills */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {['LangGraph', 'Python', 'FastAPI', 'Flutter', 'React', 'ChromaDB'].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-white/5 text-slate-300 border border-white/5 hover:border-[#00A3FF]/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer: Interactive flip prompt */}
            <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1 text-[#00A3FF]/90 font-medium animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                Holographic Ver. 2.5
              </span>

              <button
                type="button"
                onClick={toggleFlip}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#00A3FF]/10 hover:bg-[#00A3FF]/20 text-[#00A3FF] border border-[#00A3FF]/30 transition-all text-[10px] font-mono cursor-pointer"
              >
                <RefreshCw className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
                Flip Card
              </button>
            </div>
          </div>
        </div>

        {/* ================= CARD BACK ================= */}
        <div
          className={`absolute inset-0 rounded-2xl p-[2px] backface-hidden bg-gradient-to-bl from-[#6366F1]/40 via-[#00A3FF]/30 to-[#6366F1]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${
            !isFlipped ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
          style={{ transform: 'rotateY(180deg) translateZ(1px)' }}
        >
          <div className="relative h-full w-full rounded-2xl bg-[#090D16]/95 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden border border-white/10">
            {/* Holographic light sheen overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none holo-gradient opacity-25 mix-blend-color-dodge"
              style={{
                backgroundPosition: `${sheenX} ${sheenY}`,
              }}
            />

            {/* Back Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#818cf8]" />
                <span className="font-mono text-xs font-bold tracking-wider text-[#818cf8] uppercase">
                  AGENTIC NEURAL CORE
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">STATUS: VERIFIED</span>
            </div>

            {/* Back Content: Highlights & Credentials */}
            <div className="relative z-10 my-auto py-2 space-y-3">
              {/* Highlight 1: YC TraceRoot */}
              <div className="p-2.5 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#818cf8]" />
                    TraceRoot.AI (YC S25)
                  </span>
                  <span className="text-[10px] font-mono text-[#818cf8] font-semibold">12 Merged PRs</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Built OpenAI BYOK model catalog, cache pricing, and detector reliability exception layer.
                </p>
              </div>

              {/* Highlight 2: LeetCode & Ratings */}
              <div className="p-2.5 rounded-xl bg-[#00A3FF]/10 border border-[#00A3FF]/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#00A3FF]" />
                    Competitive Programming
                  </span>
                  <span className="text-[10px] font-mono text-[#00A3FF] font-semibold">Peak: 1,459</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  533+ LeetCode solved across 51 contests · 10 Badges · Codeforces & CodeChef active.
                </p>
              </div>

              {/* Highlight 3: Hackathons & Grants */}
              <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00A3FF]" />
                    MumbaiHacks & IIT Delhi
                  </span>
                  <span className="text-[10px] font-mono text-emerald-300 font-semibold">Top 500 / ₹1L Grant</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Voice AI Soil Advisory for farmers (MumbaiHacks) & Samsung Solve for Tomorrow finalist.
                </p>
              </div>
            </div>

            {/* Quick Navigation Shortcuts */}
            <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick();
                  onNavigate?.('projects');
                }}
                className="flex-1 text-center py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono text-slate-200 border border-white/10 transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick();
                  onNavigate?.('experience');
                }}
                className="flex-1 text-center py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono text-slate-200 border border-white/10 transition-colors"
              >
                Experience
              </a>
              <button
                type="button"
                onClick={toggleFlip}
                className="px-2.5 py-1.5 rounded-lg bg-[#6366F1]/20 hover:bg-[#6366F1]/30 text-[#818cf8] border border-[#6366F1]/30 text-[11px] font-mono transition-colors"
              >
                Front ⟲
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
