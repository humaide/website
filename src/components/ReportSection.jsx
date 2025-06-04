/* eslint-disable react/prop-types */
import { motion } from "motion/react";

function ReportSection() {
    return (
        <section id='report' className='border-[#0A090C] px-20 h-full lg:h-screen flex flex-col lg:flex-row-reverse items-center justify-center'>
            {/* <div className='absolute w-[53%] h-104 animate-custom-pulse bg-linear-to-br from-fuchsia-400 to-robin-blue opacity-20 blur-2xl rounded-xl'></div>      */}
            <div className='lg:w-[55%] flex flex-col h-full lg:h-screen'>
            <h1 className='text-white font-bold text-2xl lg:text-[42px] text-center lg:text-left lg:pt-20 lg:px-20'><span className="relative bg-linear-to-r  from-indigo-500 to-blue-300 bg-clip-text text-transparent text-center select-auto text-shadow-xl">Human AI Integration Report</span></h1>
            <p className="text-lg lg:text-xl 2xl:text-4xl custom-font-3  lg:text-left lg:px-20 text-white">Insights into Human-AI Integration</p>
            <p className='text-white text-base lg:text-xl text-center lg:text-left pt-4 lg:pl-20 z-20 hyphens-auto' lang='en'>
                How well are humans and AI currently integrated? What is the state across different industries? We are currently working on 
                We are currently working on a report to answer exactly these questions and provide an overview of current areas on the topic 
                of humans and AI based on real data.</p>
            <div className='flex item-center h-fit pt-6 z-20 lg:self-end'>
              <button disabled className="lg:mb-4 text-base lg:text-lg inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full bg-blue-500/40 hover:bg-blue-500/40 text-white duration-300">
                Participate in study            
              </button>
              <div className="w-fit h-fit px-2 py-0.5 text-xs -mt-2 -ml-12 bg-red-400 text-white rounded-xl justify-self-end">Coming soon</div>              
            </div>
            </div>
            <div className='lg:w-1/3 lg:h-full flex items-center justify-center'>
                <div className="w-full h-1/2 bg-sky-800/40 "></div>
            </div> 
            {/* <div className="bg-[url(/bg-test5-dark.svg)] bg-contain w-full h-60 absolute self-end justify-self-end"></div>
            <div className="bg-linear-to-t from-transparent via-transparent to-[#0C0F1F] w-full h-80 absolute self-end justify-self-end"></div> */}
        </section>
    );
  };
  
  export default ReportSection;

          <section id="report" className="px-3 h-full lg:h-screen w-full flex flex-col text-midnight-blue items-center justify-center mt-28 sm:mt-32 md:mt-40 lg:mt-28 2xl:mt-64 bg-[#0C0F1F]">
            <div className="w-full -pt-6 flex justify-center items-center z-6">
              <motion.div transition={{ duration: 0.5, ease: "backIn"}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} lang='en'  className={` text-shadow-xl flex flex-col text-white items-center justify-center w-full lg:px-28 2xl:px-44 max-lg:text-center mt-4 mb-6`}>
                <h1 className="uppercase font-sans font-light max-[375px]:text-base xl:text-2xl 2xl:text-4xl custom-font-3">annual report</h1>
                <h2 className="uppercase font-bold text-2xl lg:text-[42px] 2xl:text-6xl py-1"><span className="relative bg-linear-to-r  from-indigo-500 to-sky-300 bg-clip-text text-transparent text-center select-auto custom-font-1">HAII - Human AI Integration Report</span></h2>
                <p className="text-lg lg:text-xl 2xl:text-4xl custom-font-2">Insights into Human-AI Integration</p>     
                </motion.div>
            </div>
            <div className="flex w-full px-20">
                <div className="w-80 h-80 bg-sky-800/40 my-20"></div>
            </div>
        </section>