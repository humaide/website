import DottedWave from '../assets/dotted/dotted-wave-light.svg'
import { useTranslation } from "react-i18next";

function IntroSection() {

    const { t } = useTranslation();

    return (
        <section id="intro" className="min-h-screen lg:h-screen w-screen flex flex-col bg-pastel-blue text-charcoal items-center">
            <div className='w-full h-full flex items-center px-4 lg:px-16'>
              <div className="lg:w-1/2 z-120 text-left top-0 pt-10 lg:pt-0">
                  <h1 className='text-2xl lg:text-4xl font-medium pb-3'>{t("intro.title")}</h1>
                  <img src="logos/logo-text-dark-accent.svg" alt="Humaide Logo" className="w-3/4 lg:w-full place-self-start"/>
                  <p className='text-lg md:text-2xl font-light pt-6'>{t("intro.subtitle")}</p>
              </div>            
              <div className='lg:w-2/3 absolute z-100 lg:z-5 right-0 top-16 lg:top-auto self-center lg:pt-20'>
                <img src={DottedWave} alt="dotted wave illustration" className="w-full"/>
              </div>                      
            </div>
            <div className='w-full h-20 lg:h-1/3 absolute bg-[url(/bg/wave.svg)] bg-cover self-start justify-self-start scale-x-[-1] bottom-0'></div>
        </section>
    )}
  
  export default IntroSection