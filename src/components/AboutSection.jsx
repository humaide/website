import AboutCard from "./AboutCard"
import Heading from "./Heading"
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
   
function AboutSection() {

    const { t } = useTranslation();
    const cardVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.2,
          duration: 0.6,
          ease: "easeOut",
        },
      }),
    };

  return (
    <section id="about" className="h-full lg:h-screen w-full flex flex-col text-charcoal bg-charcoal items-center justify-center font-sans px-4 lg:px-16">
      {/* Heading */}
      <Heading postion={"text-left pt-10 lg:pt-0"} color={"text-white"} section={t("about.section")} title={t("about.title")} subtitle={t("about.subtitle")}/>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center w-full py-20">
        <motion.div  className="w-full lg:w-1/3 px-2 flex" custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <AboutCard illustration="hc" title={t("about.box-title-hcai")} content={t("about.box-content-hcai")} subpageID={0}/>
        </motion.div>

        <motion.div  className="w-full lg:w-1/3 px-2 flex" custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <AboutCard illustration="act" title={t("about.box-title-aiact")} content={t("about.box-content-aiact")} subpageID={1}/>
        </motion.div>

        <motion.div  className="w-full lg:w-1/3 px-2 flex" custom={2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <AboutCard illustration="sc" title={t("about.box-title-methods")} content={t("about.box-content-methods")} subpageID={2}/>
        </motion.div>
      </div>
    </section>
  );
}
  
  export default AboutSection