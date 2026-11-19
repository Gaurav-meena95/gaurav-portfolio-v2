import { motion } from 'framer-motion';
import { GitPullRequest, GitMerge, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { OPEN_SOURCE_SPOTLIGHT } from '../data/portfolioData';
import { sound } from '../utils/sound';

export function OpenSourceSpotlight() {
  const data = OPEN_SOURCE_SPOTLIGHT;

  return (
    <section id="opensource" className="py-20 px-6 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6366F1]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#818cf8] text-xs font-mono font-medium mb-3">
              <Zap className="w-3.5 h-3.5 text-[#818cf8]" />
              Y COMBINATOR S25 CONTRIBUTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Open Source Spotlight
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-1.5">
              <GitMerge className="w-3.5 h-3.5" />
              {data.mergedPRs}
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 font-mono text-xs">
              {data.totalPRs}
            </span>
          </div>
        </div>

        {/* Spotlight Main Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-[#090D18]/90 border border-[#6366F1]/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {/* Subtle logo watermark */}
          <div className="absolute -right-8 -bottom-8 w-64 h-64 opacity-5 pointer-events-none">
            <img src={data.logo} alt="" className="w-full h-full object-contain filter invert" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left summary */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center p-2 shrink-0">
                  <img src={data.logo} alt="TraceRoot.AI" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold font-display text-white">{data.company}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00A3FF]/20 text-[#00A3FF] border border-[#00A3FF]/30">
                      {data.batch}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#818cf8]">{data.role} · {data.period}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Authored product fixes, pricing architectures, and SDK integrations for TraceRoot.AI, an AI detection and agent security platform backed by Y Combinator.
              </p>

              <div className="p-4 rounded-xl bg-[#07090E] border border-[#6366F1]/20 space-y-2">
                <div className="text-xs font-mono font-semibold text-[#818cf8] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#818cf8]" />
                  Key Impact Summary
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  Reduced client detector creation failures to 0% by hardening backend responses and built cache-aware token pricing logic for custom model BYOK catalogs.
                </p>
              </div>

              <a
                href="https://github.com/traceroot-ai"
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#00A3FF] hover:underline transition-all pt-2"
              >
                <span>View TraceRoot.AI Organization</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right PR Breakdown Cards */}
            <div className="lg:col-span-7 space-y-3">
              {data.keyContributions.map((c, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#6366F1]/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <GitPullRequest className="w-4 h-4 text-[#00A3FF] shrink-0" />
                      {c.title}
                    </h4>
                    {c.prs && (
                      <div className="flex gap-1 shrink-0">
                        {c.prs.map((pr) => (
                          <span
                            key={pr}
                            className="px-2 py-0.5 rounded font-mono text-[10px] bg-[#6366F1]/20 text-[#818cf8] border border-[#6366F1]/30 font-bold"
                          >
                            {pr}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {c.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
