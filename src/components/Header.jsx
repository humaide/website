/* eslint-disable react/prop-types */
import { motion } from "motion/react"

function Header({ subtitle, title, description, position, color, style }) {
    return (
      <>
      <motion.div transition={{ duration: 0.5, ease: "backIn"}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} lang='en'  className={`flex flex-col items-center justify-center w-full md:w-[55%] max-md:px-4 max-lg:px-0 lg:px-28 2xl:px-44 max-lg:text-center mt-4 mb-6 ${style} ${color == "green" ? "" : ""} ${position == "right" ? "lg:text-left lg:items-start " : position == "left" ? "lg:items-end lg:text-right" : "lg:items-center lg:text-center"}`}>
        <h1 className="uppercase font-sans font-light max-[375px]:text-base xl:text-2xl 2xl:text-4xl">{subtitle}</h1>
        <h2 className="uppercase font-bold max-[375px]:text-lg text-2xl lg:text-4xl 2xl:text-6xl">{title}</h2>
        <p className=" max-[375px]:text-base text-lg lg:text-xl 2xl:text-4xl">{description}</p>        
      </motion.div>
      </>
    );
  };
  
  export default Header;