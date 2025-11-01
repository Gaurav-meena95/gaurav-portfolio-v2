import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted')
    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      message: ''
    })
  };

  const contactInfo = [
    {
      icon: faPhone,
      label: 'Phone',
      value: '+91 7724014495',
      link: 'tel:+917724014495',
    },
    {
      icon:  faEnvelope,
      label: 'Email',
      value: 'gaurav.meena2024@nst.rishihood.edu.in',
      link: 'mailto:gaurav.meena2024@nst.rishihood.edu.in',
    },
  ];

  const socialLinks = [
    { icon: faLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/gaurav-meena-3917b2323/', color: '#00A3FF' },
    { icon: faGithub, label: 'GitHub', link: 'https://github.com/Gaurav-meena95', color: '#A855F7' },
    { icon: faCode, label: 'LeetCode', link: 'https://leetcode.com/u/Gaurav_meena95/', color: '#00A3FF' },
    { icon: faCode, label: 'CodeChef', link: 'https://codechef.com/users/gaurav_meena95', color: '#A855F7' },
    { icon: faCode, label: 'Codeforces', link: 'https://codeforces.com/profile/G.meena', color: '#00A3FF' },
    { icon: faCode, label: 'codolio', link: 'https://codolio.com/profile/Gaurav_meena95', color: '#A855F7' },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-linear-to-r from-[#00A3FF] to-[#A855F7] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact details */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group block"
              >
                <div className="absolute -inset-0.5 bg-linear-to-r from-[#00A3FF] to-[#A855F7] rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
                
                <div className="relative bg-[#161B22]/60 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#00A3FF]/20 to-[#A855F7]/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,163,255,0.3)]">
                  <FontAwesomeIcon className="w-6 h-6 text-[#00A3FF]" icon={info.icon}/>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#00A3FF] to-[#A855F7] rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
              
              <div className="relative bg-[#161B22]/60 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <h3 className="text-lg mb-4 text-white">Find me on</h3>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-full aspect-square rounded-lg flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${social.color}20, ${social.color}10)`,
                        boxShadow: `0 0 15px ${social.color}20`,
                      }}
                    >
                        <FontAwesomeIcon className="w-5 h-5" style={{ color: social.color }}  icon={social.icon}/> 
                        <span className="text-xs ml-3 text-white/80">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-linear-to-r from-[#00A3FF] to-[#A855F7] rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-500"></div>
            
            <div className="relative bg-[#161B22]/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-gray-300">Name</label>
                  <br />
                  <input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 bg-[#0D1117]/80 border-white/10 focus:border-[#00A3FF] rounded-lg w-full placeholder:text-gray-500 text-white p-2"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-gray-300">Email</label>
                  <br />
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 bg-[#0D1117]/80 border-white/10 focus:border-[#00A3FF] rounded-lg w-full placeholder:text-gray-500 text-white p-2"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-gray-300">Message</label>
                  <br />
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 bg-[#0D1117]/80 border-white/10 focus:border-[#00A3FF] text-white min-h-[150px] rounded-lg w-full placeholder:text-gray-500 p-2"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-[#00A3FF] to-[#A855F7] hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.5)] hover:shadow-[0_0_30px_rgba(0,163,255,0.7)] rounded-lg"
                  size="lg"
                >
                  <span className="mr-2 h-5 w-5" />
                  Send Message 🚀
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#A855F7] rounded-full opacity-5 blur-[120px]"></div>
    </section>
  );
}
