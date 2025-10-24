import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Project'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-[#0D1117] text-white overflow-x-hidden'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      
    </div>
  )
}

export default App
