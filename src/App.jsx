import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Languages from './components/Languages'
import Resume from './components/Resume'
import Experience from './components/Experience'

function App() {

  return (
      <div className='bg-gradient-to-b from-black to-gray-900'>
        <Sidenav />
        <Main />
        <Languages />
        <Experience />
        <Projects />
        <Timeline />
        {/* <Resume />  */}
      </div>
  )
}

export default App
