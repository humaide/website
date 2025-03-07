/* eslint-disable react/prop-types */
import BoxElementMidnight from "../assets/box-shine-big-midnight.svg"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShinyBoxElement({ title, description, icon }) {
    return (
        <>
            <motion.div transition={{ duration: 0.7, ease: "easeIn"}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} lang='en' className={`hyphens-auto flex justify-center items-center w-full lg:w-1/3 pb-24 min-[375px]:pb-36 min-[450px]:pb-32 min-[490px]:pb-44 min-[530px]:pb-56 sm:pb-32 md:pb-20 lg:pb-0 pt-8 lg:pt-12 xl:pt-8 min-[82.5rem]:pt-12 min-[90rem]:pt-14`}>
                <img src={BoxElementMidnight} alt="box element" className={`flex absolute w-4/5 min-[450px]:w-3/4 min-[550px]:w-2/3 sm:w-1/2 md:w-xs lg:w-xs xl:w-sm 2xl:w-2xl drop-shadow-xl shadow-black`}/>
                <div className={`flex flex-col justify-center items-center w-full h-full sm:w-3/4 lg:w-4/5 xl:w-5/6 max-[425px]:pt-11 min-[425px]:pt-16 px-10 lg:px-0 lg:pt-0 xl:px-12 z-1`}>
                    {/* <div className="h-36 w-80 bg-[url(/placeholder.jpg)] bg-cover px-0"></div> */}
                    <FontAwesomeIcon icon={icon} size="4x" className="text-midnight-blue pt-6 pb-2 xl:pb-0" />
                    <h1 className='font-semibold max-[425px]:text-xs min-[376px]:text-sm min-[425px]:text-base xl:text-xl 2xl:text-4xl px-2 min-[375px]:px-6 sm:px-16 lg:px-4 xl:px-0 pt-2 pb-2 sm:pb-0 text-wrap'>{title} </h1>
                    <p className='text-center max-[425px]:text-xs min-[425px]:text-base xl:text-xl 2xl:text-4xl px-6 min-[375px]:px-8 min-[450px]:px-14 min-[550px]:px-24 sm:px-20 md:px-32 min-[52.5rem]:px-40 lg:px-0 2xl:px-4 text-wrap'>{description}</p> 
                </div>
            </motion.div>
        </>
    );
  };
  
  export default ShinyBoxElement;