import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Internships } from './components/Internships';
import { Projects } from './components/Project';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LandingStage } from './components/LandingStage';

function App() {
  const [view, setView] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#card') {
      return 'stage';
    }
    return 'portfolio';
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#card') {
        setView('stage');
      } else if (window.location.hash === '#portfolio') {
        setView('portfolio');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenCard = () => {
    window.location.hash = 'card';
    setView('stage');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnterPortfolio = (sectionId = 'hero') => {
    window.location.hash = 'portfolio';
    setView('portfolio');
    if (sectionId && sectionId !== 'hero') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (view === 'stage') {
    return <LandingStage onEnterPortfolio={handleEnterPortfolio} />;
  }

  return (
    <div className="min-h-screen bg-portfolio-bg font-sans text-portfolio-text antialiased selection:bg-white/15">
      {/* Top sticky navigation bar from portfolio_v1 */}
      <Navbar onOpenCard={handleOpenCard} />

      {/* Main page content sections */}
      <main>
        <Hero onOpenCardStage={handleOpenCard} />
        <Internships />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Minimal quiet footer */}
      <Footer onOpenCard={handleOpenCard} />
    </div>
  );
}

export default App;
