import { Suspense } from "react";
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Contact from './pages/Contact';
import GoSpecials from './pages/GoSpecials';
import AISystemRecommendation from "./pages/AISystemRecommendation"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark, faHashtag, faAnglesDown, faArrowRight, faHourglass, faStar, faCheck, faEnvelope, faRobot, faChalkboardUser, faMagnifyingGlassChart, faGears, faPlay, faUsersViewfinder, faScrewdriverWrench, faCheckDouble, faHeadset, faCopyright, faArrowRightLong, faCode, faUser, faCompass } from '@fortawesome/free-solid-svg-icons'
import AboutSubContent from "./components/AboutSubContent";
import { useTranslation } from "react-i18next";
import subpages_EN from "./content/about/en/subpages";
import subpages_DE from "./content/about/de/subpages";

const DynamicPage = () => {
  const { pageId } = useParams();
  const { i18n } = useTranslation();
  let content;
  if (i18n.language === "de") {
    content = subpages_DE[pageId];
  } else {
    content = subpages_EN[pageId];
  }

  if (!content) return <div>Seite nicht gefunden</div>;

  return <AboutSubContent {...content} />;
};


function App() {

  library.add(faBars, faXmark, faHashtag, faAnglesDown, faArrowRight, faHourglass, faStar, faCheck, faEnvelope, faRobot, faChalkboardUser, faMagnifyingGlassChart, faGears, faPlay, faUsersViewfinder, faScrewdriverWrench, faCheckDouble, faHeadset, faCopyright, faArrowRightLong, faCode, faUser, faCompass)

  return (
    <Suspense fallback="loading">
      <HashRouter basename=''>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/go" element={<GoSpecials />} />
            <Route path="/ai-system-recommendation" element={<AISystemRecommendation />} />
            <Route path="/:pageId" element={<DynamicPage />} />
        </Routes>
        <Footer />        
      </HashRouter>
    </Suspense>
  )
}

export default App
