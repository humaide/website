import { useState } from "react";
import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import Heading from "./Heading"
import AccordionContentElement from "./AccordionContentElement";
import TargetGroupButton from "./TargetGroupButton";


function SolutionsSection() {

    const { t, i18n } = useTranslation();
    const [activeTarget, setActiveTarget] = useState(0);

    const handleTargetClick = (index) => {
      setActiveTarget(index); // setzt den aktiven Button
    };

    return (
        <section id="solutions" className="h-full lg:min-h-screen relative w-full flex flex-col items-center justify-center bg-charcoal pt-28 pb-10 px-4 lg:px-16">
            {/* Heading */}
            <Heading postion={"text-left px-4"} color={"text-white"} section={t("solutions.section")} title={t("solutions.title")} subtitle={t("solutions.subtitle")} />
            {/* Content - Desktop */}
            <div className="hidden lg:flex w-full">  

              <div className="w-2/5 mt-10 text-white text-xl">
                <button className="w-full" onClick={() => handleTargetClick(0)}>
                  <TargetGroupButton icon={"code"} title={t("solutions.devTitle")} subtitle={t("solutions.devSub")} bottomBorder={true} active={activeTarget === 0} />
                </button>
                <button className="w-full" onClick={() => handleTargetClick(1)}>
                  <TargetGroupButton icon={"user"} title={t("solutions.useTitle")} subtitle={t("solutions.useSub")} bottomBorder={true} active={activeTarget === 1} />
                </button>
                <button className="w-full" onClick={() => handleTargetClick(2)}>
                  <TargetGroupButton icon={"compass"} title={t("solutions.exploreTitle")} subtitle={t("solutions.exploreSub")} bottomBorder={false}  active={activeTarget === 2}/>
                </button>
              </div>

              <div className="w-2/3 mt-4 h-20 text-white px-4 py-4">

              {activeTarget === 0 ? (
                <div>
                  <h1 className="font-semibold text-lg lg:text-xl py-2">{t("solutions.devContentTitle")}</h1>
                  <div>
                    <AccordionContentElement title={"Human Integration Audits"} content={t("solutions.devContentAudit")} />
                    <AccordionContentElement title={i18n.language === "de" ? "AI Act Preparation" : "AI Act Readiness"} content={t("solutions.devContentAct")} />
                    <AccordionContentElement title={"Trust-by-Design Workshops"} content={t("solutions.devContentWorkshops")} />                      
                  </div>
            
                </div>
              ) : activeTarget === 1 ? (
                <div>
                  <h1 className="font-semibold  text-lg lg:text-xl py-2">{t("solutions.useContentTitle")}</h1>
                  <AccordionContentElement title={i18n.language === "de" ? "KI Self-Check" : "AI Self-Check "} content={t("solutions.useContentCheck")} />
                  <AccordionContentElement title={i18n.language === "de" ? "Wirkungsevaluation" : "Impact Evaluation"} content={t("solutions.useContentEval")} />
                  <AccordionContentElement title={i18n.language === "de" ? "Onboarding & Befähigung" : "Onboarding & Enablement"} content={t("solutions.useContentOnboarding")} />
                </div>
              ) : (
                <div>
                  <h1 className="font-semibold  text-lg lg:text-xl py-2">{t("solutions.exploreContentTitle")}</h1>
                  <AccordionContentElement title={i18n.language === "de" ? "Self-Check-Startpaket " : "Self-Check Start Package "} content={t("solutions.exploreContentPackage")} />
                  <AccordionContentElement title={i18n.language === "de" ? "Strategieworkshop: Ist KI das Richtige für uns?" : "Strategy Session: Is AI Right for You?"} content={t("solutions.exploreContentStrategy")} />
                  <AccordionContentElement title={i18n.language === "de" ? "Erste-Schritte-Roadmap" : "First Steps Roadmap "} content={t("solutions.exploreContentRoadmap")} />
                </div>

              )}

              </div>

            </div>




            {/* Content - Mobile */}
            <Accordion collapseAll={true} className="w-full lg:px-4 border-0 mt-6 lg:hidden">
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