import AboutSection from '../components/AboutSection'
import IntroSection from '../components/IntroSection'
import ContactSection from '../components/ContactSection'
import SolutionsSection from '../components/SolutionsSection'
import VideoSection from '../components/VideoSection'
import TeamSection from '../components/TeamSection'
import VisionSection from '../components/VisionSection'
import MissionSection from '../components/MissionSection'
import { ThemeConfig } from "flowbite-react";
import { useTranslation } from "react-i18next";


function Home() {
  const { i18n } = useTranslation();
  return (
    <div className='bg-pastel-blue overflow-clip font-sans hyphens-auto' lang={i18n.language === "de" ? "de" : "en"} >
      <ThemeConfig dark={false} />
      <IntroSection/>
      {/* <BartlettGame /> */}
      <MissionSection />
      <AboutSection />  
      <VisionSection />
      <SolutionsSection /> 
      {/* Wave */}
      <div className='w-full h-20 lg:h-1/3 absolute bg-[url(/bg/wave.svg)] bg-cover self-end justify-self-end rotate-180 z-90'></div>             
      <VideoSection />     
      {/* <ReportSection /> */}
      {/* <Testimonials />       */}
      <TeamSection />
      <ContactSection />
    </div>
  )
}

export default Home