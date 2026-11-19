import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Internships } from './components/Internships';
import { Projects } from './components/Project';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-portfolio-bg font-sans text-portfolio-text antialiased selection:bg-white/15">
      {/* Top sticky navigation bar from portfolio_v1 */}
      <Navbar />

      {/* Main page content sections */}
      <main>
        <Hero />
        <Internships />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Minimal quiet footer */}
      <Footer />
    </div>
  );
}

export default App;
