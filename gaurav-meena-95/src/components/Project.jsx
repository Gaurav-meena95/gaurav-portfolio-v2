import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState, useCallback } from 'react';

export function Projects() {
  const [showMore, setShowMore] = useState(false)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const username = 'Gaurav-meena95'
  const REQUEST_TIMEOUT = 8000
  const PER_PAGE = 60

  const fallbackProjects = [
    {
      title: 'portfolio-v2',
      description: 'My portfolio site (fallback)',
      tech: ['React', 'Vite', 'TailwindCSS'],
      image: 'https://opengraph.githubassets.com/1/Gaurav-meena95/gaurav-portfolio-v2',
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://gaurav-meena95.github.io/',
      repo: 'https://github.com/Gaurav-meena95/gaurav-portfolio-v2'
    },
    {
      title: 'DSA-practice',
      description: 'Coding practice (fallback)',
      tech: ['JavaScript'],
      image: 'https://opengraph.githubassets.com/1/Gaurav-meena95/DSA-practice',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://github.com/Gaurav-meena95/DSA-practice',
      repo: 'https://github.com/Gaurav-meena95/DSA-practice'
    },
    {
      title: 'mini-projects',
      description: 'Small experiments (fallback)',
      tech: ['HTML', 'CSS', 'JS'],
      image: 'https://opengraph.githubassets.com/1/Gaurav-meena95/mini-projects',
      gradient: 'from-green-500 to-emerald-500',
      link: 'https://github.com/Gaurav-meena95/mini-projects',
      repo: 'https://github.com/Gaurav-meena95/mini-projects'
    }
  ]
  const fetchWithTimeout = (url, options = {}, timeout = REQUEST_TIMEOUT) => {
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), timeout)
    return fetch(url, { ...options, signal: controller.signal })
      .finally(() => clearTimeout(id))
  }

  const fetchRepos = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const headers = { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }
      const token = import.meta?.env?.VITE_GITHUB_TOKEN
      if (token) headers.Authorization = `Bearer ${token}`

      const reposRes = await fetchWithTimeout(`https://api.github.com/users/${username}/repos?per_page=${PER_PAGE}&sort=updated`, { headers })
      if (!reposRes.ok) {
        if (reposRes.status === 403) {
          setProjects(fallbackProjects)
          throw new Error('GitHub repos: 403 (rate limit). Add VITE_GITHUB_TOKEN to .env and restart dev server')
        }
        throw new Error(`GitHub repos: ${reposRes.status}`)
      }
      const repos = await reposRes.json()

      const filtered = repos.filter(r => !r.fork && !r.archived && !r.disabled)

      const gradients = [
        'from-blue-500 to-cyan-500',
        'from-purple-500 to-pink-500',
        'from-cyan-500 to-blue-500',
        'from-green-500 to-emerald-500',
        'from-orange-500 to-red-500'
      ]

      const result = await Promise.all(filtered.map(async (r, idx) => {
        let langs = []
        try {
          if (idx < 3) {
            const langRes = await fetchWithTimeout(r.languages_url, { headers })
            if (langRes.ok) {
              const langObj = await langRes.json()
              langs = Object.keys(langObj).slice(0, 5)
            }
          }
        } catch (e) {
          console.error('[Projects] languages fetch failed', e)
        }

        return {
          title: r.name.replace(/[-_]/g, ' '),
          description: r.description || 'No description provided.',
          tech: langs.length ? langs : (r.language ? [r.language] : []),
          image: `https://opengraph.githubassets.com/1/${r.full_name}`,
          gradient: gradients[idx % gradients.length],
          link: r.homepage && r.homepage.trim() ? r.homepage : r.html_url,
          repo: r.html_url
        }
      }))

      setProjects(result)
    } catch (e) {
      setError(e.message || 'Failed to load projects')
    } finally {
      setLoading(false)
    }
  }, [username])

  useEffect(() => {
    fetchRepos()
  }, [fetchRepos])

  console.log(loading)
  console.log(error)


  const visibleProjects = showMore ? projects : projects.slice(0, 3);
  return (
    <section className="py-20 px-6 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-linear-to-r from-[#00A3FF] to-[#A855F7] bg-clip-text text-transparent">
            Projects Showcase
          </h2>
        </motion.div>

        {error && (
          <div className="mb-6 text-center text-red-400">
            Failed to load projects: {error}
            <button onClick={fetchRepos} className="ml-3 underline text-[#00A3FF]">Retry</button>
          </div>
        )}
        {loading && (
          <div className="mb-6 text-center text-gray-400 ">Loading projects...</div>
        )}
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
              <div className="absolute inset-0 md:-inset-0.5 bg-linear-to-r from-[#00A3FF] to-[#A855F7] rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>

              <div className="relative bg-[#161B22]/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-linear-to-r ${project.gradient} opacity-20`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col ">
                  <h3 className="text-xl mb-2 text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-[#00A3FF] group-hover:to-[#A855F7] group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 flex-1 my-2 flex gap-3">
                    {/* {project.description} */}
                    <div className="text-white bg-[#408ce8] p-2 rounded-lg w-1 h-1"></div>
                    <div className="text-white bg-[#c18df1] p-2 rounded-lg w-1 h-1"></div>
                    <div className="text-white bg-[#A855F7] p-2 rounded-lg w-1 h-1"></div>
                  </p>

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

                  <div className="flex gap-3">
                    <a size="sm" href={project.link} target="_blank" className="flex-1 bg-linear-to-r from-[#00A3FF] to-[#A855F7] hover:opacity-90 p-1 rounded-lg transition-all duration-300  text-center" > <FontAwesomeIcon className="mr-2 h-4 w-4" icon={faExternalLink} /> Live Demo</a  >
                    <a href={project.repo} target='_blank'><FontAwesomeIcon size='xl' className='mt-1' icon={faGithub} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
