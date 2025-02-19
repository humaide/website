/* eslint-disable react/prop-types */
import BoxImgLong from '../assets/shiny-box-long-neuron-top.svg'
import BoxImgLongNeuron from '../assets/shiny-box-long-neuron.svg'
import { motion } from "motion/react"

function ShinyTextBoxLong({ title, description, position }) {
    return (
        <>
            <motion.div transition={{ duration: 0.7, ease: "easeIn"}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} lang='en' className={`hyphens-auto flex justify-center items-center w-full lg:w-[38rem] 2xl:w-[60rem] md:justify-center lg:items-center max-[425px]:pb-40 pb-56 2xl:pb-72 lg:mx-16 2xl:mx-64 ${position == "right" ? "lg:-translate-x-[40%] lg:pl-6 xl:-translate-x-1/2 xl:pl-[3.25rem] 2xl:-translate-x-1/2 2xl:pl-20" : "lg:translate-x-[40%] lg:pr-6 xl:translate-x-1/2 xl:pr-[3.25rem] 2xl:translate-x-1/2 2xl:pr-20"}`}>
               <img src={BoxImgLongNeuron} alt="box element" className={`hidden lg:flex absolute h-36 lg:h-40 xl:h-52 2xl:h-[28rem] ${position == "right" ? "rotate-180" : ""}`}/>
               <img src={BoxImgLong} alt="box element" className="flex lg:hidden absolute h-36 min-[425px]:h-48 md:h-52 lg:h-52 xl:h-52 2xl:h-80"/> 
               <div className={`flex items-center justify-center absolute h-24 sm:h-44 max-[425px]:w-full max-lg:w-3/4 lg:w-[36rem] xl:w-[40rem] 2xl:w-[44rem] text-center ${position == "right" ? "text-center lg:text-right" : "text-center lg:text-left"}`}>
                    <div className={`w-full min-[500px]:w-4/5 sm:w-3/4 lg:w-full max-[425px]:pt-11 min-[425px]:pt-16 lg:pt-0 ${position == "right" ? "lg:pr-24" : "lg:pl-24"}`}>
                        <p className='max-sm:text-sm min-[425px]:text-base lg:text-lg xl:text-xl 2xl:text-4xl px-2 min-[380px]:px-6 sm:px-16 2xl:px-0 text-wrap'><span className='font-semibold max-sm:text-sm min-[425px]:text-base lg:text-lg xl:text-xl 2xl:text-4xl text-wrap'>{title} </span>{description}</p> 
                    </div>
                </div>
            </motion.div>
        </>
    );
  };
  
  export default ShinyTextBoxLong;