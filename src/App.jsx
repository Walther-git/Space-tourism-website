import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home.jsx'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

function App() {

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </HashRouter>
  )
}

export default App
