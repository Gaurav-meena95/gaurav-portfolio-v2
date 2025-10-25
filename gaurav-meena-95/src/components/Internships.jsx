import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase, faAward, faExternalLink } from '@fortawesome/free-solid-svg-icons';

export function Internships() {
  const experiences = [
    {
      type: 'internship',
      icon: faBriefcase,
      title: 'Frontend Developer',
      company: 'Gistly AI',
      period: 'May – Jul 2025',
      description: 'Added multiple new features improving UX and performance.',
      link: '#',
    },
    {
      type: 'certification',
      icon: faAward,
      title: 'JavaScript Course',
      company: 'KnowledgeGate',
      period: 'Feb 2025',
      description: 'Score: 45/49',
      link: '#',
    },
    {
      type: 'certification',
      icon: faAward,
      title: 'Hacktoberfest 2024 Contributor',
      company: 'Holopin Badge',
      period: '2024',
      description: 'Open-source contributions recognized.',
      link: '#',
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="internships">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-linear-to-r from-[#00A3FF] to-[#A855F7] bg-clip-text text-transparent">
            Internships & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glowing effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A3FF] to-[#A855F7] rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>

              <div className="relative bg-[#161B22]/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A3FF]/20 to-[#A855F7]/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,163,255,0.3)]">
                  <FontAwesomeIcon className="w-6 h-6 text-[#00A3FF]" icon={exp.icon}/>
                  </div>
                  <button className="hover:bg-white/5"><FontAwesomeIcon className="h-4 w-4 text-gray-400" icon={faExternalLink}/></button>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg mb-1 text-white">{exp.title}</h3>
                  <p className="text-[#00A3FF] mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#A855F7] rounded-full opacity-5 blur-[120px]"></div>
    </section>
  );
}
