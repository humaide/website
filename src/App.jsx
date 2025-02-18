import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Contact from './pages/Contact';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function App() {

  library.add(faBars, faXmark)

  return (
    <>
        
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />        
    </BrowserRouter>
    </>
  )
}

export default App
