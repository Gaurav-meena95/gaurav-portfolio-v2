import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

export function Projects() {
  const [showMore, setShowMore] = useState(false)
  const projects = [
    {
      title: 'Real Estate Bidding Platform',
      description: 'Filter houses easily by your preferences.',
      tech: ['React', 'Tailwind', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://wap-capstone-2-dihq.vercel.app/',
      repo: 'https://github.com/Gaurav-meena95/WAP-capstone-2'
    },
    {
      title: 'Password Generator',
      description: 'Custom password generator with numbers & special chars.',
      tech: ['React', 'CSS','JavaScript'],
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://gaurav-meena95.github.io/password_Genrator/',
      repo: 'https://github.com/Gaurav-meena95/password_Genrator'
    },
    {
      title: 'My Portfolio',
      description: 'Personal portfolio showcasing skills and projects.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      gradient: 'from-cyan-500 to-blue-500',
      link: 'https://wap-capstone-2-dihq.vercel.app/',
      repo: 'https://github.com/Gaurav-meena95/portfolio'
    },
    {
      title: 'E-Commerce Store',
      description: 'Full-featured store with cart and checkout.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1515165562835-c4c4c0b7b43e?w=800&q=80',
      gradient: 'from-green-500 to-emerald-500',
      link: 'https://wap-capstone-2-dihq.vercel.app/',
      repo: 'https://github.com/Gaurav-meena95/ecommerce-store'
    },
    {
      title: 'E-Commerce Store',
      description: 'Full-featured store with cart and checkout.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1515165562835-c4c4c0b7b43e?w=800&q=80',
      gradient: 'from-green-500 to-emerald-500',
      link: 'https://wap-capstone-2-dihq.vercel.app/',
      repo: 'https://github.com/Gaurav-meena95/ecommerce-store-2'
    },
    {
      title: "Capstone 1",
      description: "Full-featured store with cart and checkout.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1515165562835-c4c4c0b7b43e?w=800&q=80",
      gradient: "from-green-500 to-emerald-500",
      link: "https://s-w-capstone-project-gaurav-meena-pif7.vercel.app/",
      repo: "https://github.com/Gaurav-meena95/S-W-Capstone-Project-Gaurav-Meena"
    },
    {
      title: 'Chat App',
      description: 'Real-time messaging using Socket.io.',
      tech: ['React', 'Express', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&q=80',
      gradient: 'from-orange-500 to-red-500',
      link: 'https://wap-capstone-2-dihq.vercel.app/',
      repo: 'https://github.com/Gaurav-meena95/chat-app'
    }
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 3);
  return (
    <section className="py-20 px-6 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-linear-to-r from-[#00A3FF] to-[#A855F7] bg-clip-text text-transparent">
            Projects Showcase
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glowing border on hover */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#00A3FF] to-[#A855F7] rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>

              <div className="relative bg-[#161B22]/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-linear-to-r ${project.gradient} opacity-20`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl mb-2 text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-[#00A3FF] group-hover:to-[#A855F7] group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-lg text-sm bg-[#0D1117]/60 border-[#00A3FF]/30 text-[#00A3FF] hover:border-[#00A3FF] border transition-all duration-300"
                        style={{
                          boxShadow: `0 0 10px ${tech.color}20`,
                        }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a size="sm" href={project.link} target="_blank" className="flex-1 bg-linear-to-r from-[#00A3FF] to-[#A855F7] hover:opacity-90 p-1 rounded-lg transition-all duration-300  text-center" > <FontAwesomeIcon className="mr-2 h-4 w-4" icon={faExternalLink} /> Live Demo</a  >
                    <a href={project.repo} target='_blank'><FontAwesomeIcon  size='xl' className='mt-1' icon={faGithub} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Show More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-linear-to-r from-[#00A3FF] to-[#A855F7] px-6 py-2 rounded-lg text-white hover:opacity-90 transition-all duration-300"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
}
