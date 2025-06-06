/* eslint-disable react/prop-types */
import HumanCenteredAI from '../assets/illustrations/hc-ai.svg'
import AIAct from '../assets/illustrations/ai-act.svg'
import ScientificMethod from '../assets/illustrations/sc-method.svg'
import { useTranslation } from "react-i18next";

function AboutCard({illustration, title, content}) {

    const { i18n } = useTranslation();

    return (
        <div className={`w-full lg:h-80 flex flex-col items-center justify-center text-white rounded-sm duration-500 transform relative`}> 
            <div className="border border-white/25 transition-all duration-300 backdrop-blur-lg w-[98%] my-1 p-6 rounded-xs flex flex-col justify-end">
                <img src={illustration === "hc" ? HumanCenteredAI : illustration === "act" ? AIAct : ScientificMethod } alt="illustration" className="self-start h-20"/>
                <h2 className="font-semibold pt-4 pb-2 text-xl relative z-10">{title}</h2>                
                <p className="text-base lg:text-lg z-10" lang={i18n.language === "de" ? "de" : "en"}>{content}</p>
            </div>
        </div> 
    );
  };
  
  export default AboutCard;