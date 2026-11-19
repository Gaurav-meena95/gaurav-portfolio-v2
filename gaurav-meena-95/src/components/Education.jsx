import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export function Education() {
  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden bg-black/20">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#818cf8] text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#818cf8]" />
            ACADEMIC FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Education Timeline
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#090D18]/90 border border-white/10 hover:border-[#6366F1]/40 backdrop-blur-xl transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                <div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#6366F1]/20 text-[#818cf8] border border-[#6366F1]/30">
                    {edu.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-[#00A3FF] mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end justify-between gap-1 shrink-0">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {edu.grade}
                  </span>
                </div>
              </div>

              {edu.details && (
                <ul className="mt-3 pt-3 border-t border-white/5 space-y-1">
                  {edu.details.map((d, dIdx) => (
                    <li key={dIdx} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8] shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
