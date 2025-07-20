import DottedWave from '../assets/dotted/dotted-wave-light.svg';
import { useTranslation } from "react-i18next";
import { motion } from 'motion/react';

function IntroSection() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <section id="intro" className="h-screen w-screen flex flex-col bg-pastel-blue text-charcoal items-center overflow-hidden">
      <div className='w-full h-full flex items-center px-4 lg:px-16'>
        <motion.div className="lg:w-1/2 z-80 text-left top-0 pt-10 lg:pt-0" variants={containerVariants} initial="hidden" animate="show">
          <motion.h1 className='text-2xl lg:text-4xl font-medium pb-3' variants={itemVariants}>
            {t("intro.title")}
          </motion.h1>
          <motion.img src="logos/logo-text-dark-accent.svg" alt="Humaide Logo" className="w-3/4 lg:w-full place-self-start" variants={itemVariants}/>
          <motion.p className='text-lg md:text-2xl font-light pt-6' variants={itemVariants}>
            {t("intro.subtitle")}
          </motion.p>
        </motion.div>

        {/* Dotted Wave Animation */}
        <motion.div className='lg:w-2/3 absolute z-80 lg:z-5 right-0 top-16 lg:top-auto self-center lg:pt-20'
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.5, 0.25, 1] }}>
          <img src={DottedWave} alt="dotted wave illustration" className="w-full" />
        </motion.div>
      </div>

      {/* Wave (bottom) */}
      <div className='w-full h-20 lg:h-1/3 lg:absolute bg-[url(/bg/wave.svg)] bg-cover self-start justify-self-start z-80 lg:bottom-0'></div>
    </section>
  );
}

export default IntroSection;
