/* eslint-disable react/prop-types */
import Heading from "./Heading";
import ContactCard from "./ContactCard";
import DottedHand from '../assets/dotted/dotted-hand-light.svg'
import { useTranslation } from "react-i18next";

function ContactSection({ section, title, subtitle }) {

    const { t } = useTranslation();

    return (
        <section id="contact" className="h-full lg:h-full relative w-full flex flex-col items-center justify-center bg-pastel-blue pb-20">
          {/* Wave */}
          <div className='w-full h-20 lg:h-1/3 absolute bg-[url(/bg/wave-white.svg)] bg-cover self-start justify-self-start rotate-180 top-0 z-10'></div>
          {/* Heading */}
          <Heading postion={"text-center mt-20 lg:mt-72 mb-6 px-4 lg:px-16 z-10"} color={"text-charcoal"} section={section} title={title} subtitle={subtitle} />
          {/* Contact Boxes */}
          <div className="flex flex-col lg:flex-row items-center justify-center hyphens-auto w-full px-4 lg:px-16 z-10" lang="en"> 
            <ContactCard title={t("contact.box-title-call")} content={t("contact.box-content-call")} icon={"headset"}
            btn={t("contact.box-btn-call")} link={"https://calendly.com/hello-humaide/30min"}/>
            <ContactCard title={t("contact.box-title-email")} content={t("contact.box-content-email")} icon={"envelope"}
            btn={t("contact.box-btn-email")}  link={"mailto:hello@humaide.com?subject=Kontaktanfrage"}/>
            <ContactCard title={t("contact.box-title-socials")} content={t("contact.box-content-socials")} icon={"hashtag"}
            btn={t("contact.box-btn-socials")} link={"https://www.youtube.com/@HUMAIDE-Team"}/>          
          </div>
          <div className='w-2/5 absolute left-0 self-start pt-52'>
            <img src={DottedHand} alt="dotted wave illustration" className="w-full"/>
          </div>  
        </section>
    );
  };
  
  export default ContactSection;