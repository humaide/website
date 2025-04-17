import Header from "./Header"
import ShinyBoxElement from "./ShinyBoxElement"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react'

function SolutionsSection() {

      const [showDetails1, setShowDetails1] = useState(false)
      const [showDetails2, setShowDetails2] = useState(false)
      const [showDetails3, setShowDetails3] = useState(false)

    return (
      <>
        <div className="bg-[url(/bg-test4-white.svg)] w-full h-80 absolute self-start justify-self-start"></div>
        <div className="bg-gradient-to-b from-transparent to-white w-full h-80 absolute self-start justify-self-start"></div>
        <section id="solutions" className="h-full lg:screen w-full px-4 flex flex-col text-indigo items-center justify-center -t-10 lg:-t-0 bg-white my-20">
            <div className="w-1 md:w-[0.3rem] h-[100dvh] lg:h-96 mb-64 absolute mx-auto rounded-full"></div>

            <div className="w-full flex justify-center items-center z-50">
            <motion.div transition={{ duration: 0.5, ease: "backIn"}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} lang='en'  className={` text-shadow-xl flex flex-col text-raisin items-center justify-center w-full lg:px-28 2xl:px-44 max-lg:text-center my-16`}>
              <h1 className="uppercase font-sans font-light max-[375px]:text-base xl:text-2xl 2xl:text-4xl">Our services</h1>
              <h2 className="uppercase font-bold text-2xl lg:text-[42px] 2xl:text-6xl py-1"><span className="relative bg-gradient-to-r  from-indigo-500 to-sky-400 bg-clip-text text-transparent text-center select-auto">human-centered solutions</span></h2>
              <p className="text-lg lg:text-xl 2xl:text-4xl">Consulting throughout all phases of development.</p>     
            </motion.div>
            </div>

          {/* 

          <div className="flex flex-col lg:flex-row items-center justify-center hyphens-auto lg:pb-24" lang="en">

          <div className="w-full h-2/3 lg:w-[24rem] lg:h-[23rem] flex flex-col justify-end p-6 text-raisin bg-cover m-8 rounded-lg duration-500 transform border-2 bg-indigo-800/10 border-indigo-600/60 hover:scale-110 hover:border-indigo-600 relative shadow-2xl shadow-zinc-500">            
            <FontAwesomeIcon icon="chalkboard-user" size="2x" className="self-start pb-4 text-indigo-500/60"/>
            <h2 className="font-semibold pb-2 text-xl">Onboarding & Training</h2>
            <p className="text-lg">Our programs ensure that individuals and teams have the competence and confidence to work with intelligent systems. We equip users with the skills needed to use AI effectively, safely, and in compliance with regulatory expectations.</p>

            </div> 

            <div className="w-full h-2/3 lg:w-[24rem] lg:h-[23rem] flex flex-col justify-end p-6 text-raisin bg-cover m-8 rounded-lg duration-500 transform border-2 bg-sky-100 border-sky-600/60 hover:scale-110 hover:border-robin-blue/40 relative shadow-2xl shadow-zinc-500">            
            <FontAwesomeIcon icon="gears" size="2x" className="self-start pb-4 text-sky-500/60"/>
            <h2 className="font-semibold pb-2 text-xl">Conception</h2>
            <p className="text-lg">Our programs ensure that individuals and teams have the competence and confidence to work with intelligent systems. We equip users with the skills needed to use AI effectively, safely, and in compliance with regulatory expectations.</p>

            </div> 

            <div className="w-full h-2/3 lg:w-[24rem] lg:h-[23rem] flex flex-col justify-end p-6 text-raisin bg-cover m-8 rounded-lg duration-500 transform hover:scale-110 relative">            
            <FontAwesomeIcon icon="magnifying-glass-chart" size="2x" className="self-start pb-4 text-sky-500/60"/>
            <h2 className="font-semibold pb-2 text-xl">Development</h2>
            <p className="text-lg">We evaluate existing systems for human-centeredness, transparency, and effectiveness – and offer practical recommendations for improvement. We also support organizations in aligning with the requirements of the European AI Act using our assessment tools.</p>

            </div> 

          </div> 

           */}




          {/* START */}

          <div className="flex flex-col lg:flex-row items-center justify-center hyphens-auto lg:pb-24" lang="en">

          <div className="custom-font-2 w-full h-2/3 lg:w-[24rem] lg:h-[23rem] flex flex-col justify-end p-6 text-raisin bg-cover m-8 rounded-lg duration-500 transform relative">            
            <div className="flex items-center">
              <FontAwesomeIcon icon="chalkboard-user" size="2x" className="self-start pb-4 text-indigo-400"/>
              <h2 className="font-semibold pb-2 px-3 text-xl">Onboarding & Training</h2>              
            </div>

            <p className="text-base lg:text-lg">Our programs ensure that individuals and teams have the competence and confidence to work with intelligent systems. We equip users with the skills needed to use AI effectively, safely, and in compliance with regulatory expectations.</p>
              {/* <div className="flex z-10 pt-2 text-sm font-light self-end text-sky-800/60">
                <p>Find out more</p>
                <FontAwesomeIcon icon="arrow-right" size="xs" className="self-center pl-2 pt-0.5 text-sky-800/60"/>
              </div> */}
            <a href="https://calendly.com/hello-humaide/30min" target="_blank" className='pt-6 z-20 self-start'>
            <button className="lg:mb-4 text-base lg:text-lg inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full bg-indigo-400 hover:bg-indigo-500 text-white duration-300">
              Book a call 
            </button>
          </a> 
            </div> 

            <div className="w-full h-2/3 lg:w-[24rem] lg:h-[23rem] flex flex-col justify-end p-6 text-raisin bg-cover m-8 rounded-lg duration-500 transform relative">            
            <div className="flex items-center">
              <FontAwesomeIcon icon="gears" size="2x" className="self-start pb-4 text-blue-400"/>
              <h2 className="font-semibold pb-2 px-3 text-xl">Conception</h2>              
            </div>

            <p className="text-base lg:text-lg">Our programs ensure that individuals and teams have the competence and confidence to work with intelligent systems. We equip users with the skills needed to use AI effectively, safely, and in compliance with regulatory expectations.</p>
              {/* <div className="flex z-10 pt-2 text-sm font-light self-end text-sky-800/60">
                <p>Find out more</p>
                <FontAwesomeIcon icon="arrow-right" size="xs" className="self-center pl-2 pt-0.5 text-sky-800/60"/>
              </div> */}
                            <a href="https://calendly.com/hello-humaide/30min" target="_blank" className='pt-6 z-20 self-start'>
            <button className="lg:mb-4 text-base lg:text-lg inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full bg-blue-400 hover:bg-blue-500 text-white duration-300">
              Book a call            
            </button>
          </a> 
            </div> 

            <div className="custom-font-2 w-full h-2/3 lg:w-[24rem] lg:h-[23rem] flex flex-col justify-end p-6 text-raisin bg-cover m-8 rounded-lg duration-500 transform relative">            
            <div className="flex items-center">
              <FontAwesomeIcon icon="magnifying-glass-chart" size="2x" className="self-start pb-4 text-sky-400"/>
              <h2 className="font-semibold pb-2 px-3 text-xl">Development</h2>              
            </div>

            <p className="text-base lg:text-lg">We evaluate existing systems for human-centeredness, transparency, and effectiveness – and offer practical recommendations for improvement. We also support organizations in aligning with the requirements of the European AI Act using our assessment tools.</p>
              {/* <div className="flex z-10 pt-2 text-sm font-light self-end text-sky-800/60">
                <p>Find out more</p>
                <FontAwesomeIcon icon="arrow-right" size="xs" className="self-center pl-2 pt-0.5 text-sky-800/60"/>
              </div> */}
              <a href="https://calendly.com/hello-humaide/30min" target="_blank" className='pt-6 z-20 self-start'>
            <button className="lg:mb-4 text-base lg:text-lg inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full bg-sky-400 hover:bg-sky-500 text-white duration-300">
              Book a call            
            </button>
          </a> 
            </div> 
          </div> 
          {/* <div className="bg-[url(/bg-test4-white.svg)] self-end w-full h-80 absolute justify-self-end"></div>
          <div className="bg-gradient-to-t from-transparent to-white w-full h-80 absolute self-end justify-self-end"></div> */}
        </section>
      </>
    )
  }
  
  export default SolutionsSection