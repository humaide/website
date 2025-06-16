import Heading from "./Heading"
import SolutionCard from "./SolutionCard"
import Evaluation from '../assets/icons/evaluation.svg'
import { useTranslation } from "react-i18next"
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import AccordionContentElement from "./AccordionContentElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SolutionsSection() {

    const { t, i18n } = useTranslation();

    return (
        <section id="solutions" className="h-full lg:min-h-screen relative w-full flex flex-col items-center justify-center bg-charcoal pt-28 pb-10 px-4 lg:px-16">
            {/* Heading */}
            <Heading postion={"text-left px-4"} color={"text-white"} section={t("solutions.section")} title={t("solutions.title")} subtitle={t("solutions.subtitle")} />
            {/* Content */}
            {/* <p className="text-lg text-white self-start p-4">Choose the path that fits your situation: </p> */}
            <Accordion collapseAll={true} className="w-full lg:px-4 border-0 mt-6">
              <AccordionPanel>
                <AccordionTitle className="border-b-white/25 bg-charcoal text-white focus:ring-0 ring-0 first:rounded-none hover:bg-soft-blue dark:hover:bg-soft-blue text-lg font-semibold">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon="code" size="xl" className="bg-gradient-to-b from-pastel-blue to-tangerine text-charcoal rounded-sm mr-6 px-2 py-3 lg:w-10 lg:h-10"/>
                    <div className="flex flex-col">
                      <h1 className=" text-lg lg:text-2xl">{t("solutions.devTitle")}</h1>
                      <p className="font-extralight">{t("solutions.devSub")}</p>
                    </div>                    
                  </div>
                </AccordionTitle>
                <AccordionContent className="bg-charcoal dark:bg-charcoal text-white">
                  <h1 className="font-semibold text-lg lg:text-2xl py-2">{t("solutions.devContentTitle")}</h1>
                  <AccordionContentElement title={"Human Integration Audits"} content={t("solutions.devContentAudit")} />
                  <AccordionContentElement title={i18n.language === "de" ? "AI Act Preparation" : "AI Act Readiness"} content={t("solutions.devContentAct")} />
                  <AccordionContentElement title={"Trust-by-Design Workshops"} content={t("solutions.devContentWorkshops")} />
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle className="border-b-white/25 bg-charcoal text-white focus:ring-0 ring-0 first:rounded-none hover:bg-soft-blue dark:hover:bg-soft-blue text-lg font-semibold">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon="user" size="xl" className="bg-gradient-to-b from-pastel-blue to-tangerine text-charcoal rounded-sm mr-6 px-2 py-3 lg:w-10 lg:h-10"/>
                    <div className="flex flex-col">
                      <h1 className=" text-lg lg:text-2xl">{t("solutions.useTitle")}</h1> 
                      <p className="font-extralight">{t("solutions.useSub")}</p>
                    </div>                    
                  </div>
                </AccordionTitle>
                <AccordionContent className="bg-charcoal dark:bg-charcoal text-white">
                  <h1 className="font-semibold  text-lg lg:text-2xl py-2">{t("solutions.useContentTitle")}</h1>
                  <AccordionContentElement title={i18n.language === "de" ? "KI Self-Check" : "AI Self-Check "} content={t("solutions.useContentCheck")} />
                  <AccordionContentElement title={i18n.language === "de" ? "Wirkungsevaluation" : "Impact Evaluation"} content={t("solutions.useContentEval")} />
                  <AccordionContentElement title={i18n.language === "de" ? "Onboarding & Befähigung" : "Onboarding & Enablement"} content={t("solutions.useContentOnboarding")} />
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle className="border-b-white/25 bg-charcoal text-white focus:ring-0 ring-0 first:rounded-none hover:bg-soft-blue dark:hover:bg-soft-blue text-lg font-semibold">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon="compass" size="xl" className="bg-gradient-to-b from-pastel-blue to-tangerine text-charcoal rounded-sm mr-6 px-2 py-3 lg:w-10 lg:h-10"/>
                    <div className="flex flex-col">
                      <h1 lang="en" className="hyphens-auto text-lg lg:text-2xl">{t("solutions.exploreTitle")}</h1>
                      <p className="font-extralight">{t("solutions.exploreSub")}</p>
                    </div>                    
                  </div>
                </AccordionTitle>                
                <AccordionContent className="bg-charcoal dark:bg-charcoal text-white">
                  <h1 className="font-semibold  text-lg lg:text-2xl py-2">{t("solutions.exploreContentTitle")}</h1>
                  <AccordionContentElement title={i18n.language === "de" ? "Self-Check-Startpaket " : "Self-Check Start Package "} content={t("solutions.exploreContentPackage")} />
                  <AccordionContentElement title={i18n.language === "de" ? "Strategieworkshop: Ist KI das Richtige für uns?" : "Strategy Session: Is AI Right for You?"} content={t("solutions.exploreContentStrategy")} />
                  <AccordionContentElement title={i18n.language === "de" ? "Erste-Schritte-Roadmap" : "First Steps Roadmap "} content={t("solutions.exploreContentRoadmap")} />
                </AccordionContent>
              </AccordionPanel>
              
              </Accordion>
                    

        </section>
    )
  }
  
  export default SolutionsSection

              {/* <div className="flex flex-col lg:flex-row items-center justify-center hyphens-auto pt-8">
              
              <SolutionCard icon={""} title={t("solutions.box-title-concept")} content={t("solutions.box-content-concept")} btn={t("solutions.box-btn-concept")} color={"bg-soft-blue hover:bg-soft-blue/80"} />

              <div className="w-full h-2/3 lg:1/3 flex flex-col justify-end text-base bg-cover my-12 lg:m-2 rounded-lg duration-500 transform relative text-white">            
                <div className="flex items-end pb-2">
                  <img src={Evaluation} alt="illustration" className="self-start h-12"/>
                  <h2 className="font-semibold px-3 text-2xl">{t("solutions.box-title-evaluation")}</h2>              
                </div>
                <p className="text-base lg:text-lg">{t("solutions.box-content-evaluation")}</p>
                <div className='flex item-center h-full pt-6 z-20'>
                  <button disabled className="lg:mb-4 text-base lg:text-lg inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full bg-pastel-blue text-white duration-300">
                    {t("solutions.box-btn-evaluation")}      
                  </button>
                  <div className="w-fit h-fit px-2 py-0.5 text-xs -mt-2 -ml-12 bg-tangerine text-charcoal rounded-xl justify-self-end">Coming soon</div>              
                </div>
              </div> 

              <SolutionCard icon={"onboarding"} title={t("solutions.box-title-onboarding")} content={t("solutions.box-content-onboarding")} btn={t("solutions.box-btn-onboarding")} color={"bg-soft-blue hover:bg-soft-blue/80"} /> 
          </div> */}
