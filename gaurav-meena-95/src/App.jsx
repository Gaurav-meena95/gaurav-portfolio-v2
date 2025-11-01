import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Project';
import { Internships } from './components/Internships';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const initial = stored === 'light' || stored === 'dark' ? stored : 'dark';
    setTheme(initial);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`app-root min-h-screen overflow-x-hidden ${theme === 'light' ? 'bg-white text-slate-900' : 'bg-[#0D1117] text-white'}`}>

      <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </>

      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={`fixed bottom-4 right-4 z-50 rounded-full px-4 py-2 shadow hover:opacity-90 transition md:bottom-6 md:right-6 border ${theme === 'light' ? 'bg-white text-slate-900 border-black/10' : 'bg-[#161B22]/80 text-white border-white/20'}`}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

    </div>

  );
}

export default App;
