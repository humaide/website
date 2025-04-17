import ShinyTextBoxLong from "./ShinyTextBoxLong"
import Header from "./Header"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react'
   
function AboutSection() {

    const [showDetails1, setShowDetails1] = useState(false)
    const [showDetails2, setShowDetails2] = useState(false)
    const [showDetails3, setShowDetails3] = useState(false)

    return (
      <>
        <section id="about" className="px-3 h-full lg:h-screen w-full flex flex-col text-midnight-blue items-center justify-center mt-28 sm:mt-32 md:mt-40 lg:mt-28 2xl:mt-64 bg-[#0C0F1F]">
          
          <div className="w-full -pt-6 flex justify-center items-center z-6">
              <motion.div transition={{ duration: 0.5, ease: "backIn"}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} lang='en'  className={` text-shadow-xl flex flex-col text-white items-center justify-center w-full lg:px-28 2xl:px-44 max-lg:text-center mt-4 mb-6`}>
              <h1 className="uppercase font-sans font-light max-[375px]:text-base xl:text-2xl 2xl:text-4xl custom-font-3">about us</h1>
              <h2 className="uppercase font-bold text-2xl lg:text-[42px] 2xl:text-6xl py-1"><span className="relative bg-gradient-to-r  from-indigo-500 to-sky-300 bg-clip-text text-transparent text-center select-auto custom-font-1">what we offer</span></h2>
              <p className="text-lg lg:text-xl 2xl:text-4xl custom-font-2">Empowering humans - for more trust, efficiency and successful innovations.</p>     
            </motion.div>
            </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center hyphens-auto w-full my-20" lang="en">
          
          <div className={` custom-font-2 w-full h-2/3 lg:w-[24rem] lg:h-[20rem] hover:scale-110 flex flex-col items-center justify-center text-white bg-cover m-4 rounded-lg duration-500 transform bg-gradient-to-r from-indigo-900 to-sky-900 relative shadow-2xl shadow-black`}> 
           <div className="bg-[#101128] w-[98%] my-1 lg:w-[23.75rem] lg:h-[19.75rem] p-6 rounded-lg flex flex-col justify-end">
              <>
              <div className="flex items-center justify-start py-4">
                <FontAwesomeIcon icon="users-viewfinder" size="xl" className=" text-sky-500"/>
                <h2 className="font-semibold pl-3 text-xl relative z-10"><span>Human-Centered AI</span></h2>                
              </div>

              <p className="text-base lg:text-lg z-10">We help organizations develop, implement or use AI systems that adapt to humans – not the other way around. We help design and implement AI systems  – addressing trust, controllability, and collaboration for AI that empowers people.</p>
              {/* <div className="flex z-10 pt-2 text-sm font-light self-end text-white/40">
                <p>Find out more</p>
                <FontAwesomeIcon icon="arrow-right" size="xs" className="self-center pl-2 pt-0.5 text-white/40"/>
              </div> */}
              </>

          </div>
          </div>           

     
          <div className={` custom-font-2 w-full h-2/3 lg:w-[24rem] lg:h-[20rem] hover:scale-110 flex flex-col items-center justify-center text-white bg-cover m-4 rounded-lg duration-500 transform bg-gradient-to-r from-indigo-900 to-sky-900 relative shadow-2xl shadow-black`}> 
           <div className="bg-[#101128] w-[98%] my-1 lg:w-[23.75rem] lg:h-[19.75rem] p-6 rounded-lg flex flex-col justify-end">
              <>
              <div className="flex items-center justify-start py-4">
                <FontAwesomeIcon icon="screwdriver-wrench" size="xl" className=" text-sky-500"/>
                <h2 className="font-semibold pl-3 text-xl relative z-10">AI Act Readieness</h2>                
              </div>

              {/* <FontAwesomeIcon icon="screwdriver-wrench" size="2x" className="self-start pb-4 text-white/40"/>
              <h2 className="font-semibold pb-2 text-xl relative z-10">AI Act Ready & Assessment Tools</h2> */}
              <p className="text-base lg:text-lg z-10">We support organizations in preparing for the European AI Act – proactively, practically, and human-centered. Using in-house tools and ISO-based criteria, we assess, e.g., human oversight, and transparency to support audit readiness.</p>
              {/* <div className="flex z-10 pt-2 text-sm font-light self-end text-white/40">
                <p>Find out more</p>
                <FontAwesomeIcon icon="arrow-right" size="xs" className="self-center pl-2 pt-0.5 text-white/40"/>
              </div> */}
              </>
              </div>
          </div> 

          <div className={` custom-font-2 w-full h-2/3 lg:w-[24rem] lg:h-[20rem] hover:scale-110 flex flex-col items-center justify-center text-white bg-cover m-4 rounded-lg duration-500 transform bg-gradient-to-r from-indigo-900 to-sky-900 relative shadow-2xl shadow-black`}> 
           <div className="bg-[#101128] w-[98%] my-1 lg:w-[23.75rem] lg:h-[19.75rem] p-6 rounded-lg flex flex-col justify-end">
              <>
              <div className="flex items-center justify-start py-4">
                <FontAwesomeIcon icon="check-double" size="xl" className=" text-sky-500"/>
                <h2 className="font-semibold pl-3 text-xl relative z-10">Scientific Methods</h2>                
              </div>

              {/* <FontAwesomeIcon icon="check-double" size="2x" className="self-start pb-4 text-white/40"/>
              <h2 className="font-semibold pb-2 text-xl relative z-10">Scientific Methods Applied to Industry</h2> */}
              <p className="text-base lg:text-lg z-10">We translate research into practice – for better decisions, better systems, and better training. With validated methods from cognitive science and HCI, we help organizations design AI, train users, and build systems that fit real work environments.</p>
              {/* <div className="flex z-10 pt-2 text-sm font-light self-end text-white/40">
                <p>Find out more</p>
                <FontAwesomeIcon icon="arrow-right" size="xs" className="self-center pl-2 pt-0.5 text-white/40"/>
              </div> */}
              </>
              </div>
          </div> 
                  
          </div>     
        </section>
      </>
    )
  }
  
  export default AboutSection