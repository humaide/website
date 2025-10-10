import Integration from '../assets/illustrations/integration.svg';
import IntegrationIcon from '../assets/icons/solid/light/integration.svg'
import HumanCenteredIcon from '../assets/icons/solid/light/human-centered.svg'
import { ChevronsRight } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { motion } from 'motion/react';
import Silk from './Silk';
import { HashLink } from 'react-router-hash-link';


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
    <section id="intro" data-bg="dark" className="h-screen w-full flex flex-col bg-charcoal text-white items-center overflow-hidden">
    <Silk speed={5} scale={1} color="#4D48E2" noiseIntensity={1.5} rotation={0}/>
    <div className='bg-gradient-to-b from-transparent to-charcoal h-screen w-full absolute'></div>
      <div className='w-full h-full flex items-center px-4 lg:px-16 absolute'>
        <motion.div className="lg:w-1/2 z-80 text-left top-0 pt-10 lg:pt-0" variants={containerVariants} initial="hidden" animate="show">
          <motion.h1 className='text-2xl lg:text-4xl font-medium pb-3' variants={itemVariants}>
            {t("intro.title")}
          </motion.h1>
          <motion.img src="logos/logo-text-light-accent.svg" alt="Humaide Logo" className="w-3/4 lg:w-full place-self-start" variants={itemVariants}/>
          <motion.p className='text-lg md:text-2xl font-light pt-6' variants={itemVariants}>
            {t("intro.subtitle")}
          </motion.p>
        </motion.div>
        <div className='hidden lg:flex lg:flex-col lg:w-1/4 mx-auto'>
          <div className='border-3 border-white rounded-full p-1.5 lg:w-1/5 opacity-40 translate-y-24 translate-x-64'>
            <img src={HumanCenteredIcon} alt="integration icon"/> 
          </div>
          <div className='border-3 border-white rounded-full p-4 lg:w-1/3 opacity-40 translate-x-1/3 -translate-y-10'>
            <img src={IntegrationIcon} alt="integration icon"/> 
          </div>
          <img src={Integration} alt="integration illustration" className="lg:w-full mx-auto opacity-40" /> 
          <HashLink  to="/#about"  className='flex bottom-0 px-4 py-2 text-charcoal rounded-full bg-tangerine hover:opacity-80 hover:cursor-pointer duration-300 absolute -translate-x-16 -translate-y-36 font-medium'>
            Find out more
            <ChevronsRight />
          </HashLink >
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
