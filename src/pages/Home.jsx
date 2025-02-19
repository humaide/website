import AboutSection from '../components/AboutSection'
import IntroSection from '../components/IntroSection'
import LogoDivider from '../components/LogoDivider'
import ContactSection from '../components/ContactSection'

function Home() {

  return (
    <div className='bg-gray-100 overflow-clip font-din'>
      <IntroSection/>
      <LogoDivider />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default Home