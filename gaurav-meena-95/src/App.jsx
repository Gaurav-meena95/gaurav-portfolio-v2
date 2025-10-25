import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Project'
import { Internships } from './components/Internships'


function App() {


  return (
    <div className='min-h-screen bg-[#0D1117] text-white overflow-x-hidden'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Internships/>
      
    </div>
  )
}

export default App
