import { Suspense } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Contact from './pages/Contact';
import GoSpecials from './pages/GoSpecials';
import AISystemRecommendation from "./pages/AISystemRecommendation"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark, faHashtag, faAnglesDown, faArrowRight, faHourglass, faStar, faCheck, faEnvelope, faRobot, faChalkboardUser, faMagnifyingGlassChart, faGears, faPlay, faUsersViewfinder, faScrewdriverWrench, faCheckDouble, faHeadset, faCopyright, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function App() {

  library.add(faBars, faXmark, faHashtag, faAnglesDown, faArrowRight, faHourglass, faStar, faCheck, faEnvelope, faRobot, faChalkboardUser, faMagnifyingGlassChart, faGears, faPlay, faUsersViewfinder, faScrewdriverWrench, faCheckDouble, faHeadset, faCopyright, faArrowRightLong)

  return (
    <Suspense fallback="loading">
      <HashRouter basename=''>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/go" element={<GoSpecials />} />
            <Route path="/ai-system-recommendation" element={<AISystemRecommendation />} />
        </Routes>
        <Footer />        
      </HashRouter>
    </Suspense>
  )
}

export default App
