import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Briefcase, Code, Award, Sparkles } from 'lucide-react';

export function About() {
  const quickFacts = [
    { icon: <GraduationCap className="w-4 h-4 text-[#00A3FF]" />, label: "Education", value: "B.Tech AI @ NST, Rishihood" },
    { icon: <MapPin className="w-4 h-4 text-[#818cf8]" />, label: "Location", value: "India (Open for Remote)" },
    { icon: <Briefcase className="w-4 h-4 text-emerald-400" />, label: "Availability", value: "Summer '27 / Internships" },
    { icon: <Award className="w-4 h-4 text-amber-400" />, label: "YC Contributions", value: "TraceRoot.AI (12 PRs)" },
    { icon: <Code className="w-4 h-4 text-[#00A3FF]" />, label: "Problem Solving", value: "533+ LeetCode (1,459 Peak)" },
    { icon: <Sparkles className="w-4 h-4 text-[#818cf8]" />, label: "Real User Reach", value: "1,000,000+ Downloads" },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00A3FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A3FF]/10 border border-[#00A3FF]/30 text-[#00A3FF] text-xs font-mono font-medium">
              <User className="w-3.5 h-3.5 text-[#00A3FF]" />
              ENGINEERING IDENTITY
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
              Driven by pragmatic systems, agentic autonomy, and relentless execution.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am an Artificial Intelligence undergraduate at <strong className="text-white">Newton School of Technology</strong> (Rishihood University), building at the intersection of agentic AI frameworks, robust full-stack web platforms, and mobile apps.
              </p>
              <p>
                As an active open-source contributor to <strong className="text-[#00A3FF]">TraceRoot.AI (Y Combinator S25)</strong>, I have merged 12 core pull requests spanning OpenAI BYOK pricing engines, detector reliability layers, and SDK documentation. On mobile, I engineered flight-booking pipelines in Flutter serving over <strong className="text-[#818cf8]">1 million real users</strong>.
              </p>
              <p>
                When I’m not shipping code, I solve algorithmic challenges on <strong className="text-white">LeetCode</strong> (530+ solved, contest peak rating 1,459), compete in hackathons (Top 500 at MumbaiHacks Agentic AI), and train with athletic discipline (former National Cricket & Wrestling competitor).
              </p>
            </div>
          </motion.div>

          {/* Right: Quick Facts Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-6 rounded-2xl bg-[#090D18]/90 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400 pb-3 border-b border-white/5">
                Quick Intelligence File
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {quickFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#00A3FF]/20 transition-all flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      {fact.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">{fact.label}</div>
                      <div className="text-xs font-semibold text-slate-200">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
