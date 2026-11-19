import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { sound } from '../utils/sound';
import { PERSONAL_INFO } from '../data/portfolioData';

const COMMANDS = {
  help: 'Available commands: about, skills, projects, experience, contact, hire, stats, clear, exit',
  about: `Gaurav Meena — AI & Full-Stack Systems Engineer.\nStudying Artificial Intelligence at Newton School of Technology (NST).\nOpen-source contributor to TraceRoot.AI (YC S25) with 12 merged PRs.\n530+ LeetCode problems solved, contest rating peak 1,459.`,
  stats: `METRICS BREAKDOWN:\n- YC Merged PRs: 12 (TraceRoot.AI S25)\n- Real-World Reach: 1,000,000+ Downloads (Travel Buddy App)\n- LeetCode Solved: 533+ across 51 Contests (Rating: 1,459)\n- Hackathons: Top 500 / 3000+ (MumbaiHacks Agentic AI)\n- Grants: ₹1 Lakh funding recipient (Samsung Solve for Tomorrow @ IIT Delhi)`,
  skills: `TECH STACK MATRIX:\n- AI / Agents: LangGraph, ChromaDB, Llama 3.3, RAG, LangChain, PyTorch, NumPy\n- Frontend & Mobile: React, Next.js, Flutter, React Native, TypeScript, Tailwind CSS\n- Backend & Systems: FastAPI, Node.js, Express.js, Docker, Prisma, REST APIs\n- Databases: PostgreSQL, Supabase, MongoDB, Redis, MySQL`,
  projects: `FEATURED PROJECTS:\n1. CodeRelay: Manifest V3 Chrome Extension syncing LeetCode to GitHub automatically.\n2. Form Filling Agent: LangGraph + Llama 3.3 70B browser form autonomous agent with ChromaDB RAG.\n3. JewelTrack: Full-stack jewellery ERP & inventory system with JWT security.\n(Plus all repositories live fetched from GitHub: github.com/Gaurav-meena95)`,
  experience: `WORK EXPERIENCE RECORD:\n1. TraceRoot.AI (YC S25) - Open Source Contributor (Jun 2026 - Present)\n2. Travel Buddy - Full Stack Developer (Jun - Sep 2026)\n3. Carmaacarcare - Web Developer (Mar - May 2026)`,
  contact: `GET IN TOUCH:\n- Email: ${PERSONAL_INFO.email}\n- Phone: ${PERSONAL_INFO.phone}\n- LinkedIn: ${PERSONAL_INFO.socials.linkedin}\n- GitHub: ${PERSONAL_INFO.socials.github}`,
  hire: `Looking for a high-velocity AI & Full-Stack Engineer who can build production agents and resilient web/mobile apps?\nDrop an email right away to: ${PERSONAL_INFO.email}`,
};

export function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'GM-OS v2.6.0 (x86_64-darwin)' },
    { type: 'system', text: 'Type "help" to list commands, or click the quick pills below.' },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    sound.playBeep(850);

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }
    if (trimmed === 'exit') {
      onClose();
      return;
    }

    const output = COMMANDS[trimmed] || `Command not found: "${trimmed}". Type "help" for a list of commands.`;

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `$ ${cmd}` },
      { type: 'output', text: output },
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl rounded-2xl bg-[#090D16] border border-[#00A3FF]/30 shadow-[0_0_50px_rgba(0,163,255,0.15)] overflow-hidden flex flex-col h-[520px]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-slate-300">
                <TerminalIcon className="w-3.5 h-3.5 text-[#00A3FF]" />
                <span>gaurav@neural-core: ~</span>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick command pills */}
          <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/5 bg-white/[0.01] overflow-x-auto text-[11px] font-mono">
            <span className="text-slate-500 mr-1 shrink-0">Suggestions:</span>
            {['help', 'stats', 'projects', 'skills', 'experience', 'contact', 'clear'].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => handleCommand(c)}
                className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-[#00A3FF]/10 text-slate-300 hover:text-[#00A3FF] border border-white/5 hover:border-[#00A3FF]/30 transition-colors shrink-0"
              >
                {c}
              </button>
            ))}
          </div>

          {/* Terminal output console */}
          <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-slate-300 space-y-2 select-text">
            {history.map((h, i) => (
              <div key={i} className="whitespace-pre-wrap leading-relaxed">
                {h.type === 'system' && (
                  <span className="text-[#00A3FF] font-semibold">{h.text}</span>
                )}
                {h.type === 'user' && (
                  <span className="text-[#818cf8] font-bold">{h.text}</span>
                )}
                {h.type === 'output' && (
                  <span className="text-slate-300">{h.text}</span>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input line */}
          <form onSubmit={onSubmit} className="p-3 border-t border-white/10 bg-black/40 flex items-center gap-2">
            <span className="text-[#00A3FF] font-mono text-xs font-bold pl-1">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type a command (e.g. stats, projects, hire)..."
              className="flex-1 bg-transparent font-mono text-xs text-white focus:outline-none placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-[#00A3FF]/10 hover:bg-[#00A3FF]/20 text-[#00A3FF] border border-[#00A3FF]/30 transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
