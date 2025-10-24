import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLink, Github } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      title: 'Real Estate Bidding Platform',
      description: 'Filter houses easily by your preferences.',
      tech: ['React', 'Tailwind', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Password Generator',
      description: 'Custom password generator with numbers & special chars.',
      tech: ['React', 'CSS'],
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'My Portfolio',
      description: 'Personal portfolio showcasing skills and projects.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#00A3FF] to-[#A855F7] bg-clip-text text-transparent">
            Projects Showcase
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glowing border on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A3FF] to-[#A855F7] rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>

              <div className="relative bg-[#161B22]/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00A3FF] group-hover:to-[#A855F7] group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-[#0D1117]/60 border-[#00A3FF]/30 text-[#00A3FF] hover:border-[#00A3FF] transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-[#00A3FF] to-[#A855F7] hover:opacity-90 transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 hover:bg-white/5"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
