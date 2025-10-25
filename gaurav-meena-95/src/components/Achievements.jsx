import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBullseye, faMedal, faShield, faTrophy, faZap } from '@fortawesome/free-solid-svg-icons';


export function Achievements() {
  const achievements = [
    {
      icon: faTrophy,
      title: '2× National Cricket Player',
      year: '2018, 2019',
      color: '#00A3FF',
    },
    {
      icon: faMedal,
      title: 'National Wrestling',
      year: '2023',
      color: '#A855F7',
    },
    {
      icon: faBullseye,
      title: 'Regional Basketball',
      year: '2023',
      color: '#00A3FF',
    },
    {
      icon: faAward,
      title: '2× Regional Math Olympiad',
      year: '2018, 2019',
      color: '#A855F7',
    },
    {
      icon: faShield,
      title: 'NCC Cadet',
      year: 'Active',
      color: '#00A3FF',
    },
    {
      icon: faZap,
      title: 'Samsung Bootcamp @ IIT Delhi',
      year: '2023',
      color: '#A855F7',
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="achievements">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#00A3FF] to-[#A855F7] bg-clip-text text-transparent">
            Achievements & Extra-Curriculars
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Glowing effect */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-40 blur transition duration-500"
                style={{
                  background: `linear-gradient(135deg, ${achievement.color}, ${achievement.color}80)`,
                }}
              ></div>

              <div className="relative bg-[#161B22]/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                  style={{
                    background: `linear-gradient(135deg, ${achievement.color}30, ${achievement.color}10)`,
                    boxShadow: `0 0 30px ${achievement.color}40`,
                  }}
                >
                    <FontAwesomeIcon className="w-8 h-8" style={{ color: achievement.color }} icon={achievement.icon} />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg mb-2 text-white leading-tight">
                    {achievement.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: achievement.color }}
                  >
                    {achievement.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00A3FF] rounded-full opacity-5 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A855F7] rounded-full opacity-5 blur-[120px]"></div>
    </section>
  );
}
