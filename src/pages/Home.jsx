import AboutSection from '../components/AboutSection'
import IntroSection from '../components/IntroSection'
import LogoDivider from '../components/LogoDivider'
import ContactSection from '../components/ContactSection'
import SolutionsSection from '../components/SolutionsSection'
import { motion } from 'motion/react'

function Home() {
  //bg-gray-100
  return (
    <div className='bg-[#0C0F1F] overflow-clip custom-font-2'>
      <IntroSection/>
      <LogoDivider />
      <AboutSection />
      {/** shadow-[0px_0px_130px_rgba(1,210,210,0.55)]*/}
      <section id='video' className='border-[#0A090C] px-4 h-full lg:h-screen flex flex-col lg:flex-row items-center justify-center'>
        {/* <div className='absolute w-[53%] h-[26rem] animate-custom-pulse bg-gradient-to-br from-fuchsia-400 to-robin-blue opacity-20 blur-2xl rounded-xl'></div>      */}
        <div className='lg:w-1/3 flex flex-col h-full lg:h-screen'>
          <h1 className='text-white font-bold text-2xl lg:text-[42px] text-center lg:text-left lg:pt-36 lg:px-20'><span className="relative bg-gradient-to-r  from-indigo-500 to-blue-300 bg-clip-text text-transparent text-center select-auto text-shadow-xl">WHAT'S NEW?</span></h1>
          <p className='text-white text-base lg:text-xl text-center lg:text-left pt-4 lg:pl-20 z-20 hyphens-auto' lang='en'>Explore the latest videos and social media content, offering insights into our work and informative perspectives on the evolving relationship between humans and artificial intelligence.</p>
          <a href="https://www.youtube.com/channel/UC92HAT4HI5KglkEDtIC0K5A" target="_blank" className='lg:pl-20 pt-6 z-20 self-center lg:self-start'>
            <button className="text-base lg:text-lg mt-4 mb-8 lg:mt-0 hover:cursor-pointer lg:mb-4 inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full border-sky-600 bg-sky-500/70 hover:bg-sky-500/40 text-white duration-300">
                Visit our Youtube-Channel
            </button>
          </a> 
        </div>
        <div className='lg:w-2/3 lg:h-screen flex items-center justify-center'>
          <div className="hidden lg:block absolute lg:w-[49rem] h-[27rem] bg-[#0c0f1f] opacity-100 rounded-xl z-50"></div>
          <div className="hidden lg:block absolute lg:w-[49rem] h-[27rem] bg-sky-800 rounded-xl opacity-45 animate-pulse z-50"></div>
          <div className="hidden lg:block absolute lg:w-[48rem] h-[26rem] bg-sky-700 rounded-xl opacity-45 animate-pulse z-50"></div>
          <div className="hidden lg:block absolute lg:w-[47rem] h-[25rem] bg-sky-400 rounded-xl opacity-45 animate-pulse z-50"></div>
          <div className='lg:absolute bg-white lg:w-[46rem] lg:h-96 z-100 flex items-center justify-center rounded-xl mb-20 lg:mb-0'>
            <iframe className='w-full h-full rounded-xl duration-500' src="https://www.youtube.com/embed/Rv_mruCt0CM?si=bNjrrkChgyAWu2KI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>  
        </div> 
        <div className="bg-[url(/bg-test4-dark.svg)] bg-contain w-full h-60 absolute self-end justify-self-end"></div>
        <div className="bg-gradient-to-t from-transparent via-transparent to-[#0C0F1F] w-full h-80 absolute self-end justify-self-end"></div>
      </section>

      <SolutionsSection />
      


      <section id="solutions" className="hidden pt-20 h-full xl:h-screen w-full flex flex-col text-indigo items-center justify-center -t-10 lg:-t-0 bg-white">

      <motion.div transition={{ duration: 0.5, ease: "backIn"}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} lang='en'  className={`flex flex-col text-raisin items-center justify-center w-full max-md:px-4 max-lg:px-0 lg:px-28 2xl:px-44 max-lg:text-center mb-6`}>
              <h1 className="uppercase font-sans font-light max-[375px]:text-base xl:text-2xl 2xl:text-4xl">Our team</h1>
              <h2 className="uppercase font-bold max-[375px]:text-lg text-2xl lg:text-4xl 2xl:text-6xlpt-2"><span className="relative bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent text-center select-auto">Meet the Founder</span></h2>
              <p className=" max-[375px]:text-base text-lg lg:text-xl 2xl:text-4xl"></p>     
      </motion.div>

      <div className='pb-44 pt-10 mx-24 z-100 text-raisin hyphens-auto' lang='en'>
        <div className='flex w-full justify-evenly'>
          <div className='w-1/5 text-center flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center'>
            <div className="absolute lg:w-[9.5rem] h-[9.5rem] bg-sky-100 opacity-100 rounded-full"></div>
            <div className="absolute lg:w-[9.5rem] h-[9.5rem] bg-sky-200 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className="absolute lg:w-[9rem] h-[9rem] bg-sky-300 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className="absolute lg:w-[8.5rem] h-[8.5rem] bg-sky-400 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className='w-[8rem] h-[8rem] bg-sky-200 rounded-full'></div>            
          </div>

            <p className='pt-4 font-semibold text-lg'>Tim Schrills</p>
            <p className='pb-4 font-light text-lg'>Strategy & Regulation</p>
            <p className=' text-lg'>Psychologist and doctoral researcher in human-centered explainable AI. Experienced in regulatory advising, strategy consulting, and model development in engineering psychology. Leads financials, legal, and project strategy. </p>
          </div>
          <div className='w-1/5 text-center flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center'>
            <div className="absolute lg:w-[9.5rem] h-[9.5rem] bg-sky-100 opacity-100 rounded-full"></div>
            <div className="absolute lg:w-[9.5rem] h-[9.5rem] bg-sky-200 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className="absolute lg:w-[9rem] h-[9rem] bg-sky-300 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className="absolute lg:w-[8.5rem] h-[8.5rem] bg-sky-400 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className='w-[8rem] h-[8rem] bg-sky-200 rounded-full'></div>            
          </div>
            <p className='pt-4 font-semibold text-lg'>Luisa Winzer</p>
            <p className='pb-4 font-light text-lg'>Operations & Sales</p>
            <p className=' text-lg'>Psychologist with a background in cognitive systems. Specialized in human oversight and capability analysis in high-risk applications like medical AI. Leads operations, outreach, and communication. </p>          </div>
          <div className='w-1/5 text-center flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center'>
            <div className="absolute lg:w-[9.5rem] h-[9.5rem] bg-sky-100 opacity-100 rounded-full"></div>
            <div className="absolute lg:w-[9.5rem] h-[9.5rem] bg-sky-200 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className="absolute lg:w-[9rem] h-[9rem] bg-sky-300 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className="absolute lg:w-[8.5rem] h-[8.5rem] bg-sky-400 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className='w-[8rem] h-[8rem] bg-sky-200 rounded-full'></div>            
          </div>
            <p className='pt-4 font-semibold text-lg'>Thomas Franke</p>
            <p className='pb-4 font-light text-lg'>Science & Ecosystem</p>
            <p className=' text-lg'>Professor for Engineering Psychology and Cognitive Ergonomics. Expert in mental models, usability, and user diversity. Leads scientific supervision, partnership building, and ecosystem strategy. </p>          </div>
          <div className='w-1/5 text-center flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center'>
            <div className="absolute lg:w-[9.5rem] h-[9.5rem] bg-sky-100 opacity-100 rounded-full"></div>
            <div className="absolute lg:w-[9.5rem] h-[9.5rem] bg-sky-200 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className="absolute lg:w-[9rem] h-[9rem] bg-sky-300 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className="absolute lg:w-[8.5rem] h-[8.5rem] bg-sky-400 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className='w-[8rem] h-[8rem] bg-sky-200 rounded-full'></div>            
          </div>
            <p className='pt-4 font-semibold text-lg'>Michelle Wrage</p>
            <p className='pb-4 font-light text-lg'>Technology & Product</p>
            <p className=' text-lg'>Media informatics specialist with a focus on HCI and explainability in mobility systems. Leads technical development, platform design, and implementation of AI-based prototypes.  </p>          </div>

        </div>
        
        
      </div>
        <div className="bg-[url(/bg-test4-white.svg)] w-full h-80 absolute self-end justify-self-end"></div>
        <div className="bg-gradient-to-t from-transparent to-white w-full h-80 absolute self-end justify-self-end"></div>
      </section>

      <ContactSection />
    </div>
  )
}

export default Home