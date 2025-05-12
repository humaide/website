import AboutSection from '../components/AboutSection'
import IntroSection from '../components/IntroSection'
import LogoDivider from '../components/LogoDivider'
import ContactSection from '../components/ContactSection'
import SolutionsSection from '../components/SolutionsSection'
import VideoSection from '../components/VideoSection'
import TeamSection from '../components/TeamSection'
import ReportSection from '../components/ReportSection'

function Home() {
  //bg-gray-100
  return (
    <div className='bg-[#0C0F1F] overflow-clip custom-font-2'>
      <IntroSection/>
      <LogoDivider />
      <AboutSection />
      <VideoSection />
      {/* <ReportSection /> */}
      <SolutionsSection />
      <TeamSection />
      <ContactSection />
    </div>
  )
}

export default Home