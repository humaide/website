/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import IIPModel from '../assets/images/iip-model.png'
import AIAct from '../assets/illustrations/ai-act.svg'
import ScientificMethods from '../assets/illustrations/sc-method.svg'
import HumanCenteredAI from '../assets/illustrations/hc-ai.svg'
import BartlettGame from "../components/interactive/BartlettGame"
import Reference from './Reference';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const AboutSubContent = ({ title, subtitle, mainContent, callToAction, ref, resourceTitle, resourceYear, resourceAuthors, resourceLink }) => {
  
  const { i18n, t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-start justify-start bg-pastel-blue text-left lg:px-52 text-lg lg:text-2xl">

      <div className='bg-charcoal w-full h-full flex flex-col lg:flex-row items-center justify-center mt-20'>
        <img src={ref === "bartlett" ? HumanCenteredAI : ref === "kivo" ? AIAct : ScientificMethods} alt="dotted wave illustration" className="w-3/4 lg:w-1/3 p-4 lg:p-10" />    
        <h1 className="text-2xl md:text-4xl lg:text-7xl pb-4 l:pb-0 font-bold text-pastel-blue uppercase">{title}</h1>    
      </div>

            <h2 className="lg:text-4xl text-center font-extralight mt-10 px-6 lg:px-0">{subtitle}</h2>
      <h2 className="lg:text-4xl text-center font-extralight mt-4 self-center">...</h2>
      
      <div id='markdown-container' className='px-4 lg:px-0 hyphens-auto' lang={i18n.language === "de" ? "de" : "en"}>
        <Markdown Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>{mainContent.join('\n\n\n')}</Markdown>
      </div>
      

      {ref === "bartlett" ? 
        <div className='flex flex-col lg:flex-row items-center mt-10 px-4 lg:px-0'>
          <div className='lg:pr-6'>
            <p className="">{callToAction}</p>            
              <h2 className="font-bold mt-10 self-start">{t("nav.resources")}</h2>
              <Reference title={resourceTitle} year={resourceYear} authors={resourceAuthors} link={resourceLink} />
          </div>
          <BartlettGame />
        </div>
       : 
       ref === "kivo" ?
        <div className='flex flex-col text-charcoal w-full lg:h-screen pt-4 lg:pt-6 px-4 lg:px-0'>
          <div className="h-full lg:h-[88%] w-full">
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
        <div className='w-full px-4 lg:px-0'>
          <img src={IIPModel} alt="IIP Model" className="w-full h-full object-cover my-4 rounded-lg" />
          <h2 className="font-bold mt-10 self-start">{t("nav.resources")}</h2>
          <Reference title={resourceTitle} year={resourceYear} authors={resourceAuthors} link={resourceLink} />
        </div>
       }
    </div>
  );
};

export default AboutSubContent;