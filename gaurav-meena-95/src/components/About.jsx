import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGraduationCap, faMapPin, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export function About() {
  const quickInfo = [
    {
      icon: faGraduationCap,
      label: 'Education',
      value: 'B.Tech (AI) @ NST',
    },
    {
      icon: faMapPin,
      label: 'Location',
      value: 'India',
    },
    {
      icon: faBriefcase,
      label: 'Availability',
      value: 'Open for Internships',
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#00A3FF] to-[#A855F7] bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 italic">
            Turning ideas into interactive experiences.
          </p>
        </motion.div>

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Glowing border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A3FF] to-[#A855F7] rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
          
          <div className="relative bg-[#161B22]/60 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Aspiring Full-Stack Developer with multiple projects, 
              <span className="text-[#00A3FF]"> 300+ questions solved on LeetCode</span> and 
              <span className="text-[#A855F7]"> Codeforces rating of 500+</span>.
            </p>

            {/* Quick info grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {quickInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="relative group/card"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A3FF] to-[#A855F7] rounded-xl opacity-0 group-hover/card:opacity-20 blur transition duration-300"></div>
                  
                  <div className="relative bg-[#0D1117]/80 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300">
                    <FontAwesomeIcon icon={item.icon} className="w-8 h-8 text-[#00A3FF] mb-3" /> 
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00A3FF] rounded-full opacity-5 blur-[100px]"></div>
    </section>
  );
}

