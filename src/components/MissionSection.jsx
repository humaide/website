import Heading from "./Heading";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const MissionSection = () => {
  const { i18n, t } = useTranslation();

  const fadeInFromTop = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="bg-charcoal w-full h-full lg:h-screen text-white lg:py-24 px-4 lg:px-16 overflow-hidden">
      
      <Heading postion={"text-left pt-10 lg:pt-0"} color={"text-white"} section={t("about.section")} title={t("mission.title")} subtitle=""/>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:py-20 z-10">
        {/* Left text */}
        <motion.div className="lg:w-1/2 flex flex-col items-center justify-center px-4 lg:px-0 lg:pr-10 py-10" variants={fadeInFromTop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-4xl lg:text-5xl font-extralight leading-tight text-center lg:text-right lg:max-w-4xl">
            {t("mission.believe")}
          </h2>
        </motion.div>

        {/* Right text */}
        <motion.div className="lg:w-1/2 space-y-6 text-base lg:text-lg leading-relaxed px-4 lg:px-0" variants={fadeInFromBottom} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <p lang={i18n.language === "de" ? "de" : "en"} className="hyphens-auto mb-24 lg:mb-0">
            {t("mission.text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;