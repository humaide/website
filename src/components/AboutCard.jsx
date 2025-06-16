/* eslint-disable react/prop-types */
import HumanCenteredAI from '../assets/illustrations/hc-ai.svg'
import AIAct from '../assets/illustrations/ai-act.svg'
import ScientificMethod from '../assets/illustrations/sc-method.svg'
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function AboutCard({illustration, title, content, subpageID}) {

    const { i18n } = useTranslation();

    return (
        <div className={`w-full lg:h-80 flex flex-col items-center justify-center text-white rounded-sm duration-500 transform relative`}> 
            <div className="border border-white/25 transition-all duration-300 backdrop-blur-lg w-[98%] my-1 p-6 rounded-xs flex flex-col justify-end">
                <img src={illustration === "hc" ? HumanCenteredAI : illustration === "act" ? AIAct : ScientificMethod } alt="illustration" className="self-start h-20"/>
                <h2 className="font-semibold pt-4 pb-2 text-xl relative z-10">{title}</h2>                
                <p className="text-base lg:text-lg z-10" lang={i18n.language === "de" ? "de" : "en"}>{content}</p>
                {/* <Link key={subpageID} to={`/${subpageID}`} className="text-blue-600 hover:underline">
                    <button className="w-fit self-end flex text-base lg:text-lg mt-2 hover:cursor-pointer lg:mb-4 inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full bg-soft-blue hover:bg-soft-blue/80 text-white duration-300">
                        <p>Link to subpage</p>
                        <FontAwesomeIcon icon="arrow-right-long" size="sm" className="text-white pl-2 pt-1.5"/>                
                    </button>
                </Link> */}
            </div>
        </div> 
    );
  };
  
  export default AboutCard;