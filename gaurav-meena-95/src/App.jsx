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
  return (
    <div className="min-h-screen bg-[#0D1117] text-white overflow-x-hidden">

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

    </div>

  );
}

export default App;
