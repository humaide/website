/* eslint-disable react/prop-types */
import Heading from './Heading';
import timImage from '../assets/images/team-tim2.jpg';
import luisaImage from '../assets/images/team-luisa2.jpg';
import thomasImage from '../assets/images/team-thomas2.jpg';
import michelleImage from '../assets/images/team-michelle2.jpg';
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react";


function TeamSection() {

    const { i18n, t } = useTranslation();
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
        <section id="team" className="h-full lg:h-full w-full flex flex-col text-indigo items-center justify-center bg-white pt-40">
            <Heading postion={"text-right px-4 lg:px-16"} color={"text-charcoal"} section={t("team.section")} title={t("team.title")} subtitle={t("team.subtitle")} />


            <div className='px-4 lg:px-16 lg:pb-44 pt-10 hyphens-auto' lang={i18n.language === "de" ? "de" : "en"}>
                <div className='flex flex-col lg:flex-row w-full justify-evenly'>

                    <div className='lg:w-1/2 flex flex-col sm:flex-row'> 
                        <motion.div  className='flex flex-col mr-3 mb-4 w-full' custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                            <img className="object-cover" src={timImage} alt="Image Tim" />  
                            <p className='pt-4 font-semibold text-lg'>Dr. Tim Schrills</p>
                            {/* <p className='pb-4 font-light text-lg'>{t("team.tim-position")}</p>  */}
                            <p className='text-base text-charcoal/75'>{t("team.tim-description")}</p>  
                        </motion.div >

                        <motion.div  className='flex flex-col mr-3 mb-4 w-full' custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                            <img className="object-cover" src={luisaImage} alt="Image Luisa" />  
                            <p className='pt-4 font-semibold text-lg'>Luisa Winzer, M. Sc.</p>
                            {/* <p className='pb-4 font-light text-lg'>{t("team.luisa-position")}</p>  */}
                            <p className='text-base text-charcoal/75'>{t("team.luisa-description")}</p>  
                        </motion.div >
                    </div>

                    <div className='lg:w-1/2 flex flex-col sm:flex-row'>
                        <motion.div  className='flex flex-col mr-3 mb-4 w-full' custom={2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                            <img className="object-cover" src={thomasImage} alt="Image Thomas" />  
                            <p className='pt-4 font-semibold text-lg'>Prof. Dr. Thomas Franke</p>
                            {/* <p className='pb-4 font-light text-lg'>{t("team.thomas-position")}</p>  */}
                            <p className='text-base text-charcoal/75'>{t("team.thomas-description")}</p>  
                        </motion.div >

                        <motion.div  className='flex flex-col mr-3 mb-4 w-full' custom={3} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                            <img className="object-cover" src={michelleImage} alt="Image Michelle" />  
                            <p className='pt-4 font-semibold text-lg'>Michelle Wrage, B. Sc.</p>
                            {/* <p className='pb-4 font-light text-lg'>{t("team.michelle-position")}</p>  */}
                            <p className='text-base text-charcoal/75'>{t("team.michelle-description")}</p>  
                        </motion.div >
                    </div>
                </div> 
            </div>
        </section>
    );
  };
  
  export default TeamSection;