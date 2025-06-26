/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import IIPModel from '../assets/images/iip-model.png'
import AIAct from '../assets/illustrations/ai-act-charcoal.svg'
import ScientificMethods from '../assets/illustrations/sc-method-charcoal.svg'
import HumanCenteredAI from '../assets/illustrations/hc-ai-charcoal.svg'
import BartlettGame from "../components/interactive/BartlettGame"
import Reference from './Reference';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ContactSection from './ContactSection'

const AboutSubContent = ({ title, subtitle, mainContent, callToAction, ref, resourceTitle, resourceYear, resourceAuthors, resourceLink }) => {
  
  const { i18n, t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-start justify-start bg-pastel-blue text-left text-lg lg:text-2xl">

      <div className='flex flex-col h-screen w-full text-charcoal'>
        <div className='w-full h-full flex flex-col justify-center px-4 sm:px-16 text-left '>
          <img src={ref === "bartlett" ? HumanCenteredAI : ref === "kivo" ? AIAct : ScientificMethods} alt="dotted wave illustration" className="w-28" />            
          <h1 className="text-3xl md:text-4xl lg:text-7xl py-4 l:pb-0 font-bold">{title}</h1> 
          <h2 className="sm:w-3/4 lg:text-4xl font-extralight">{subtitle}</h2>   
        </div>
        <div className='w-full h-20 lg:h-1/3 lg:absolute bg-[url(/bg/wave.svg)] bg-cover self-start justify-self-start z-90 lg:-bottom-4'></div> 
      </div>

      <div className='pt-10 pb-20 lg:px-52 bg-charcoal text-white'>
        <div id='markdown-container' className='px-4 lg:px-0 hyphens-auto' lang={i18n.language === "de" ? "de" : "en"}>
          <Markdown Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>{mainContent.join('\n\n\n')}</Markdown>
        </div>
      </div>
      
      

      <div className='bg-white w-screen'>
        <div className='w-full h-20 lg:h-60 bg-[url(/bg/wave.svg)] bg-cover self-start justify-self-start rotate-180 scale-x-[-1] z-10'></div>
        {ref === "bartlett" ? 
          <div className='flex flex-col items-center text-center pb-10 lg:pb-20 px-4 lg:px-52 bg-white text-charcoal'>
            <p className="lg:text-3xl pb-10">{callToAction}</p> 
            <div className='flex flex-col lg:flex-row items-center w-full'>
              <div className='lg:w-2/3 hyphens-auto' lang={i18n.language === "de" ? "de" : "en"}>
                <h2 className="text-left font-semibold lg:mt-10 self-start">{t("bartlett-game.taskTitle")}</h2>
                <p className="text-left lg:pr-10 self-start">{t("bartlett-game.task")}</p>                
              </div>
              <BartlettGame />
            </div>
            <h2 className="font-bold mt-10 self-start">{t("nav.resources")}</h2>
            <Reference title={resourceTitle} year={resourceYear} authors={resourceAuthors} link={resourceLink} darkBg={false} />
          </div>
        : 
        ref === "kivo" ?
          <div className='flex flex-col w-full lg:h-screen pb-10 lg:pb-20 px-4 lg:px-52 bg-white text-charcoal'>
            <h2 className="font-bold text-3xl text-center pb-4 w-full self-start">KI-VO Tool</h2>
            <div className="h-full w-full">
              <div className='flex items-center justify-start w-full sm:h-full'>
                <div className='bg-white flex items-center justify-center w-full h-full'>
                  <iframe className='w-full h-full duration-500' src="https://www.youtube.com/embed/KVlDW5B_iKg?si=bxNsKHryPZg6qNVO" 
                  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>      
                  </iframe>
                </div>  
              </div> 
            </div>
            <h2 className="font-semibold mt-10 self-start">{t("nav.resources")}</h2>
            <Reference title={resourceTitle} year={resourceYear} authors={resourceAuthors} link={resourceLink} />
          </div>
          :
          <div className='w-full pb-10 lg:pb-20 px-4 lg:px-52'>
            <h2 className="font-bold text-3xl text-center self-start">Integrated Information Processing Model</h2>
            <img src={IIPModel} alt="IIP Model" className="w-full h-full object-cover my-4 rounded-lg" />
            <h2 className="font-bold mt-10 self-start">{t("nav.resources")}</h2>
            <Reference title={resourceTitle} year={resourceYear} authors={resourceAuthors} link={resourceLink} />
          </div>
        }
      </div>
      <ContactSection  section={t("contactSubpage.section")} title={t("contactSubpage.title")} subtitle={t("contactSubpage.subtitle")}/>
    </div>
  );
};

export default AboutSubContent;