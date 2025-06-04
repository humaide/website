import AboutSection from '../components/AboutSection'
import IntroSection from '../components/IntroSection'
import ContactSection from '../components/ContactSection'
import SolutionsSection from '../components/SolutionsSection'
import VideoSection from '../components/VideoSection'
import TeamSection from '../components/TeamSection'
import ReportSection from '../components/ReportSection'
import VisionSection from '../components/VisionSection'
import Testimonials from '../components/Testimonials'
import BartlettGame from "../components/interactive/BartlettGame"


function Home() {
  return (
    <div className='bg-pastel-blue overflow-clip font-sans'>
      <IntroSection/>
      {/* <BartlettGame /> */}
      <AboutSection />
      <VisionSection />
      <VideoSection />     
              {/* Wave */}
          <div className='w-full h-20 lg:h-1/3 absolute bg-[url(/bg/wave.svg)] bg-cover self-end justify-self-end rotate-180 z-90'></div>   
      {/* <ReportSection /> */}
      <SolutionsSection />
      {/* <Testimonials />       */}
      <TeamSection />
      <ContactSection />
    </div>
  )
}

export default Home