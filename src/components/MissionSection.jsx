import Heading from "./Heading";
import { useTranslation } from "react-i18next";

const MissionSection = () => {
  const { i18n, t } = useTranslation();
  return (
    <section id="about" className="bg-charcoal w-full h-full lg:h-screen text-white lg:py-24 px-4 lg:px-16 overflow-hidden">

        <Heading postion={"text-left pt-10 lg:pt-0"} color={"text-white"} section={t("about.section")} title={t("mission.title")} subtitle="" />


      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:py-20 z-10">
        <div className="lg:w-1/2 flex flex-col items-center justify-center px-4 lg:px-0 lg:pr-10 py-10">
            {/* <div className="w-1/2 h-[1px] bg-pastel-blue/20 self-center my-2"></div> */}
            <h2 className="text-4xl lg:text-5xl font-extralight leading-tight text-center lg:text-right lg:max-w-4xl">
            {t("mission.believe")}
            </h2>
            {/* <div className="w-1/4 h-[1px] bg-pastel-blue/20 self-center my-2"></div>             */}
        </div>


        <div className="lg:w-1/2 space-y-6 text-base lg:text-lg leading-relaxed px-4 lg:px-0">
          <p lang={i18n.language === "de" ? "de" : "en"} className="hyphens-auto opacity-0 animate-fade-in motion-safe:animate-fade-in transition-opacity duration-1000 ease-out opacity-100 mb-24 lg:mb-0">
            {t("mission.text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
