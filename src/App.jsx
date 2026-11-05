import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import QALab from './pages/QALab'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/qa-lab" element={<QALab />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App;