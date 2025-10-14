import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import Linkspage from './pages/Linkspage'
import Messagepage from './pages/Messagepage'
import Projectspage from './pages/Projectspage'
import Skillspage from './pages/Skillspage'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div className='app-body'>
      <div className="main">
        <div className="bg-black">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/links' element={<Linkspage/>}/>
          <Route path='/message' element={<Messagepage/>}/>
          <Route path='/projects' element={<Projectspage/>}/>
          <Route path='/skills' element={<Skillspage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App