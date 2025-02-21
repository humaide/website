import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Contact from './pages/Contact';
import GoSpecials from './pages/GoSpecials';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark, faHashtag, faAnglesDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function App() {

  library.add(faBars, faXmark, faHashtag, faAnglesDown, faArrowRight)

  return (
    <>
        
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/go" element={<GoSpecials />} />
        </Routes>
        <Footer />        
    </BrowserRouter>
    </>
  )
}

export default App
