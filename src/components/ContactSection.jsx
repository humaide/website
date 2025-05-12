import ContactElement from "./ContactElement";
import { motion } from "motion/react";

function ContactSection() {

    return (
      <>
        <div id="contact" className="h-full md:h-screen flex flex-col items-center justify-center px-4 lg:px-8 text-white bg-[#0C0F1F] font-din">
            <div className="w-full mb-2 flex justify-center items-center z-2">
            <div className="bg-[url(/bg-test5-dark.svg)] bg-contain w-full h-60 absolute self-start justify-self-start"></div>
            <div className="bg-gradient-to-b from-transparent via-transparent to-[#0C0F1F] w-full h-80 absolute self-start justify-self-start"></div>
            <motion.div transition={{ duration: 0.5, ease: "backIn"}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} lang='en'  className={` text-shadow-xl flex flex-col text-white items-center justify-center w-full lg:px-28 2xl:px-44 max-lg:text-center my-16 z-50`}>
              <h1 className="uppercase font-sans font-light max-[375px]:text-base xl:text-2xl 2xl:text-4xl">contact details</h1>
              <h2 className="uppercase font-bold text-2xl lg:text-[42px] 2xl:text-6xl py-1"><span className="relative bg-gradient-to-r  from-indigo-500 to-blue-300 bg-clip-text text-transparent text-center select-auto">get in touch</span></h2>
              <p className="text-lg lg:text-xl 2xl:text-4xl">We are looking forward to hearing from you!</p>     
            </motion.div>   
            </div>

            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center pb-10 md:mb-40 text-sm sm:text-base z-20">
              <div className="flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/2 h-full bg-sky-900/10 border-2 mx-4  mb-4 lg:mb-0 border-sky-500/40 rounded-lg drop-shadow-2xl shadow-black p-6 ">
                <p className="text-lg text-center xl:text-2xl 2xl:text-4xl text-white pt-8 lg:pb-4 uppercase">
                  <strong>Interested? Let's have a chat!</strong>
                </p>
                <p className="text-white text-base lg:text-lg py-4 lg:px-12 text-center">
                  Curious about what we can build together? Schedule a free 15-minute call with us! We’ll dive into your vision and see how we can help make it real.
                </p>
                <p className="text-white text-base lg:text-lg font-semibold pb-8 lg:px-8 text-center">Click below to pick a time that works for you!</p>
                <a href="https://calendly.com/hello-humaide/30min" target="_blank">
                <button type="button" className="hover:cursor-pointer mb-4 font-semibold px-8 lg:px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full border-sky-600 bg-sky-500/70 hover:bg-sky-500/40 text-white text-base lg:text-lg duration-300">
                  Schedule your free 15-minute call
                </button>
                </a>
              </div>
              
              <div className="w-full md:w-[40%] lg:w-1/4 h-full bg-sky-500/10 drop-shadow-2xl border-2 border-sky-500/40 rounded-lg shadow-black flex flex-col item-center justify-center py-6">
                <h2 className="text-lg lg:text-xl 2xl:text-4xl uppercase py-4 font-semibold text-center text-white">Our channels</h2>
                <div className="w-full">
                  <ContactElement title="E-Mail" content="hello@humaide.com" link="mailto:hello@humaide.com?subject=Kontaktanfrage" icon="envelope"/>
                  <ContactElement title="Youtube" content="HUMAIDE-Team" link="https://www.youtube.com/@HUMAIDE-Team" icon="play"/>                
                </div>
              </div>               
            </div>
        </div>
      </>
    );
  };
  
  export default ContactSection;