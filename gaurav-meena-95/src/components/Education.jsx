import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export function Education() {
  const timeline = [
    {
      year: '2024 – 2028',
      degree: 'B.Tech (Artificial Intelligence)',
      institution: 'Newton School of Technology, Rishihood University',
      result: 'In Progress',
    },
    {
      year: '2022 – 2023',
      degree: 'Class XII',
      institution: 'Jawahar Navodaya Vidyalaya, Bhopal',
      result: '75%',
    },
    {
      year: '2020 – 2021',
      degree: 'Class X',
      institution: 'Jawahar Navodaya Vidyalaya, Bhopal',
      result: '93%',
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="education">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-linear-to-r from-[#00A3FF] to-[#A855F7] bg-clip-text text-transparent">
            Education Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#00A3FF] via-[#A855F7] to-[#00A3FF]"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-6 -translate-x-1/2">
                  <div className="w-5 h-5 rounded-full bg-linear-to-r from-[#00A3FF] to-[#A855F7] shadow-[0_0_20px_rgba(0,163,255,0.5)]"></div>
                </div>

                {/* Content card */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-linear-to-r from-[#00A3FF] to-[#A855F7] rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
                  
                  <div className="relative bg-[#161B22]/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#00A3FF]/20 to-[#A855F7]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,163,255,0.3)]">
                      <FontAwesomeIcon className="w-6 h-6 text-[#00A3FF]"  icon={faGraduationCap}/>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 rounded-full bg-[#00A3FF]/10 border border-[#00A3FF]/30 text-[#00A3FF] text-sm">
                            {item.year}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/30 text-[#A855F7] text-sm">
                            {item.result}
                          </span>
                        </div>
                        <h3 className="text-lg mb-1 text-white">{item.degree}</h3>
                        <p className="text-gray-400">{item.institution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00A3FF] rounded-full opacity-5 blur-[120px]"></div>
    </section>
  );
}
