import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Calendar } from 'lucide-react';
import { GithubIcon } from './Icons';
import { TechLogo } from './TechLogo';
import { sound } from '../utils/sound';

export function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0B0F19] border border-cyan-500/30 p-6 md:p-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {project.badge}
            </span>
            <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {project.date}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight mb-2">
            {project.title}
          </h2>

          <p className="text-sm md:text-base text-cyan-300/90 font-medium leading-relaxed mb-6">
            {project.tagline}
          </p>

          {/* Extended Description */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6 text-sm text-slate-300 leading-relaxed">
            {project.description}
          </div>

          {/* Architecture Diagram Box */}
          {project.architecture && (
            <div className="mb-6 p-4 rounded-xl bg-[#07090E] border border-cyan-500/20">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 mb-2">
                <Cpu className="w-4 h-4" />
                SYSTEM ARCHITECTURE & PIPELINE
              </div>
              <div className="font-mono text-xs text-slate-300 bg-black/40 p-3 rounded-lg border border-white/5 overflow-x-auto whitespace-nowrap">
                {project.architecture}
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && (
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips with Real Logos */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <div
                  key={t}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                >
                  <TechLogo name={t} className="w-3.5 h-3.5" />
                  <span className="capitalize">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-mono font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                View Source Repository
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-95 text-white font-medium text-xs font-mono transition-opacity shadow-lg shadow-cyan-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo / Details
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
