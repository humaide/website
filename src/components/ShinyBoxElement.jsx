/* eslint-disable react/prop-types */
import BoxElement from "../assets/box-shine-big.svg"
import { motion } from "motion/react"

function ShinyBoxElement({ title, description }) {
    return (
        <>
            <motion.div transition={{ duration: 0.7, ease: "easeIn"}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} lang='en' className={`hyphens-auto flex justify-center items-center w-full lg:w-1/3`}>
                <img src={BoxElement} alt="box element" className={`flex absolute w-full lg:w-1/4`}/>
                <div className={`w-full min-[500px]:w-4/5 sm:w-3/4 lg:w-full max-[425px]:pt-11 min-[425px]:pt-16 lg:pt-0 z-1`}>
                    <h1 className='font-semibold max-sm:text-sm min-[425px]:text-base lg:text-lg xl:text-xl 2xl:text-4xl px-2 min-[380px]:px-6 sm:px-16 2xl:px-0 text-wrap'>{title} </h1>
                    <p className='max-sm:text-sm min-[425px]:text-base lg:text-lg xl:text-xl 2xl:text-4xl px-2 min-[380px]:px-6 sm:px-16 2xl:px-0 text-wrap'>{description}</p> 
                </div>
            </motion.div>
        </>
    );
  };
  
  export default ShinyBoxElement;