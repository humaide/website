/* eslint-disable react/prop-types */
import { motion } from "motion/react"

function Heading({ postion, color, section, title, subtitle }) {
  return (
    <div className={`w-full flex justify-center ${postion}`}>
        <motion.div transition={{ duration: 0.5, ease: "backIn"}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} lang='en'  className={`${color} flex flex-col justify-center w-full max-lg:text-center`}>
            <h1 className="uppercase font-extralight text-base 2xl:text-4xl">{section}</h1>
            <h2 className="font-bold text-2xl lg:text-6xl 2xl:text-6xl py-1"><span className="relative text-center select-auto">{title}</span></h2>
            <p className="font-extralight text-lg lg:text-xl 2xl:text-4xl">{subtitle}</p>     
        </motion.div>
    </div>
  )
}

export default Heading
