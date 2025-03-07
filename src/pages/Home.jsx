import AboutSection from '../components/AboutSection'
import IntroSection from '../components/IntroSection'
import LogoDivider from '../components/LogoDivider'
import ContactSection from '../components/ContactSection'
import SolutionsSection from '../components/SolutionsSection'

function Home() {
  //bg-gray-100
  return (
    <div className='bg-[url(/bg-neurons-gray-long.svg)] bg-contain overflow-clip font-din'>
      <IntroSection/>
      <LogoDivider />
      <AboutSection />
      <SolutionsSection />
      <ContactSection />
    </div>
  )
}

export default Home