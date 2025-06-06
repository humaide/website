import Heading from "./Heading"
import SolutionCard from "./SolutionCard"
import Evaluation from '../assets/icons/evaluation.svg'
import { useTranslation } from "react-i18next"

function SolutionsSection() {

    const { t } = useTranslation();

    return (
        <section id="solutions" className="h-full relative w-full flex flex-col items-center justify-center bg-white pt-40 px-4 lg:px-16">
            {/* Heading */}
            <Heading postion={"text-left px-4"} color={"text-charcoal"} section={t("solutions.section")} title={t("solutions.title")} subtitle={t("solutions.subtitle")} />
            {/* Content */}
            <div className="flex flex-col lg:flex-row items-center justify-center hyphens-auto pt-8">
              
              <SolutionCard icon={""} title={t("solutions.box-title-concept")} content={t("solutions.box-content-concept")} btn={t("solutions.box-btn-concept")} color={"bg-soft-blue hover:bg-soft-blue/80"} />

              <div className="w-full h-2/3 lg:1/3 flex flex-col justify-end text-base bg-cover my-12 lg:m-2 rounded-lg duration-500 transform relative">            
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
          </div>

        </section>
    )
  }
  
  export default SolutionsSection