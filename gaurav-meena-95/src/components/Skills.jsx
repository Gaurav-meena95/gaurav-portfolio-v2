import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faServer, faWrench } from '@fortawesome/free-solid-svg-icons';

export function Skills() {
  const skillCategories = [
    {
      icon: faCode,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Next.js'],
      color: '#00A3FF',
    },
    {
      icon: faServer,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Prisma ORM'],
      color: '#A855F7',
    },
    {
      icon: faDatabase,
      title: 'Database',
      skills: ['MySQL', 'MongoDB'],
      color: '#00A3FF',
    },
    {
      icon: faWrench,
      title: 'Other Tools',
      skills: ['Git', 'Figma', 'Photoshop'],
      color: '#A855F7',
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-linear-to-r from-[#00A3FF] to-[#A855F7] bg-clip-text text-transparent">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glowing border on hover */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-40 blur transition duration-500"
                style={{
                  background: `linear-gradient(135deg, ${category.color}, ${category.color}80)`,
                }}
              ></div>

              <div className="relative bg-[#161B22]/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                    boxShadow: `0 0 20px ${category.color}30`,
                  }}
                >
                    <FontAwesomeIcon icon={category.icon} className="w-6 h-6" style={{ color: category.color }} />
                </div>

                <h3 className="text-xl mb-4 text-white">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg text-sm bg-[#0D1117]/80 text-gray-300 border border-white/5 hover:border-white/20 transition-all duration-300"
                      style={{
                        boxShadow: `0 0 10px ${category.color}20`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A855F7] rounded-full opacity-5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00A3FF] rounded-full opacity-5 blur-[120px]"></div>
    </section>
  );
}
