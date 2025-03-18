import { HashRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Contact from './pages/Contact';
import GoSpecials from './pages/GoSpecials';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark, faHashtag, faAnglesDown, faArrowRight, faHourglass, faStar, faCheck, faEnvelope, faRobot, faChalkboardUser, faMagnifyingGlassChart, faGears, faPlay } from '@fortawesome/free-solid-svg-icons'

function App() {

  library.add(faBars, faXmark, faHashtag, faAnglesDown, faArrowRight, faHourglass, faStar, faCheck, faEnvelope, faRobot, faChalkboardUser, faMagnifyingGlassChart, faGears, faPlay)

  return (
    <>
        
      <HashRouter basename=''>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/go" element={<GoSpecials />} />
        </Routes>
        <Footer />        
    </HashRouter>
    </>
  )
}

export default App
