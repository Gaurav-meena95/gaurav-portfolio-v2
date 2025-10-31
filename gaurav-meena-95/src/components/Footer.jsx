import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';

export function Footer() {
  const socialLinks = [
    { icon: faLinkedinIn, link: '#', label: 'LinkedIn' },
    { icon: faGithub, link: '#', label: 'GitHub' },
    { icon: faCode, link: '#', label: 'LeetCode' },
  ];

  return (
    <footer className="py-12 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 flex items-center gap-2"
          >
            © 2025 Gaurav Meena — Designed & Built with
            <FontAwesomeIcon className="w-4 h-4 text-red-500 fill-red-500 animate-pulse"  icon={faHeart} />
            using React + Tailwind
          </motion.p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[#161B22]/60 backdrop-blur-xl border border-white/10 hover:border-[#00A3FF] flex items-center justify-center transition-all duration-300 group"
                style={{
                  boxShadow: '0 0 0 rgba(0,163,255,0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,163,255,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(0,163,255,0)';
                }}
              >
                <FontAwesomeIcon className="w-5 h-5 text-gray-400 group-hover:text-[#00A3FF] transition-colors"  icon={social.icon} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll to top hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8"
        >
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-[#00A3FF] transition-colors inline-flex items-center gap-2"
          >
            Back to top
            <span className="text-[#00A3FF]">↑</span>
          </a>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent opacity-20"></div>
    </footer>
  );
}
