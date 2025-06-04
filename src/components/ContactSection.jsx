import Heading from "./Heading";
import ContactCard from "./ContactCard";
import DottedHand from '../assets/dotted/dotted-hand-light.svg'


function ContactSection() {

    return (
        <section id="contact" className="h-full lg:h-full relative w-full flex flex-col items-center justify-center bg-pastel-blue pb-20">
          {/* Wave */}
          <div className='w-full h-20 lg:h-1/3 absolute bg-[url(/bg/wave-white.svg)] bg-cover self-start justify-self-start rotate-180 top-0 z-10'></div>
          {/* Heading */}
          <Heading postion={"text-center mt-20 lg:mt-72 mb-6 px-4 lg:px-16 z-10"} color={"text-charcoal"} section={"contact details"} title={"Get In Touch"} subtitle={"We are looking forward to hearing from you!"} />
          {/* Contact Boxes */}
          <div className="flex flex-col lg:flex-row items-center justify-center hyphens-auto w-full px-4 lg:px-16 z-10" lang="en"> 
            <ContactCard title={"Let's Have a Chat"} content={"Schedule a free 15-minute call with us! Just pick a time that works best for you."} icon={"headset"}
            btn={"Schedule your call"} link={"https://calendly.com/hello-humaide/30min"}/>
            <ContactCard title={"Email Us"} content={"Send us a message. We'll get right back to you!"} icon={"envelope"}
            btn={"Send a message"} link={"mailto:hello@humaide.com?subject=Kontaktanfrage"}/>
            <ContactCard title={"Visit our Socials"} content={"Stay connected and up to date with us through our channels."} icon={"hashtag"}
            btn={"View Youtube Channel"} link={"https://www.youtube.com/@HUMAIDE-Team"}/>          
          </div>
          <div className='w-2/5 absolute left-0 self-start pt-52'>
            <img src={DottedHand} alt="dotted wave illustration" className="w-full"/>
          </div>  
        </section>
    );
  };
  
  export default ContactSection;