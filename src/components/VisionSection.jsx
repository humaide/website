/* eslint-disable react/prop-types */
import Integration from '../assets/illustrations/integration.svg'
import { useTranslation } from 'react-i18next';

function VisionSection() {

  const { t } = useTranslation();

  return (
    <section className="bg-charcoal relative animated-background w-screen h-full lg:h-screen text-center p-4 lg:p-16 flex justify-center items-center bg-radial from-pastel-blue to-charcoal via-35% to-70%">
        <h1 className="absolute text-white top-0 bg-charcoal border border-white/25 px-4 py-2 lg:mt-12 z-10 uppercase rounded-full text-base font-extralight">{t("about.vision")}</h1>
        <div className="flex flex-col items-center justify-center text-white bg-charcoal/80 backdrop-blur-2xl border w-full h-full border-white/25 px-4 py-20 lg:py-0">
            <img src={Integration} alt="illustration" className="h-28 mb-8"/>
            <h3 className="text-xl lg:text-5xl 2xl:text-4xl 3xl:text-6xl 4xl:text-8xl lg:pb-4 lg:pt-6 font-sans font-extralight">Human Minds in Automation</h3>
            <h3 className="text-xl lg:text-5xl 2xl:text-4xl 3xl:text-6xl 4xl:text-8xl font-sans font-extralight">Integration Design for Empowerment</h3>   
        </div>
    </section>
  )
}

export default VisionSection