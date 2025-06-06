import AboutCard from "./AboutCard"
import Heading from "./Heading"
import { useTranslation } from "react-i18next";
   
function AboutSection() {

    const { t } = useTranslation();

    return (
        <section id="about" className="h-full lg:h-screen w-full flex flex-col text-charcoal bg-charcoal items-center justify-center font-sans px-4 lg:px-16">
          {/* Heading */}
          <Heading postion={"text-left pt-10 lg:pt-0"} color={"text-white"} section={t("about.section")} title={t("about.title")} subtitle={t("about.subtitle")} />
          {/* Content Cards */}
          <div className="flex flex-col md:flex-row items-center justify-center hyphens-auto w-full py-20"> 
            <AboutCard illustration="hc" title={t("about.box-title-hcai")} content={t("about.box-content-hcai")} />
            <AboutCard illustration="act" title={t("about.box-title-aiact")} content={t("about.box-content-aiact")} />
            <AboutCard illustration="sc" title={t("about.box-title-methods")} content={t("about.box-content-methods")} />
          </div>     
        </section>
    )
  }
  
  export default AboutSection