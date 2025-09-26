import Heading from "./Heading";
import Marquee from "react-fast-marquee";

function Testimonials() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white w-full pt-28 pb-10 lg:pt-44">
        <Heading postion={"text-right px-16"} color={"text-charcoal"} section={"Network"} title={"Our Partners"} subtitle={"Shaping the future of human-centered AI — Together!"} />
        <Marquee gradient={true} className="max-md:pt-10">
            <img src="/partner/MPGruppe-logo.png" alt="Martens & Prahl Logo" className="h-8 sm:h-10 md:h-10 mx-8 sm:mx-20 md:mx-20" />
            <img src="/partner/GW49-logo-blue.svg" alt="Gateway49 Logo" className="h-10 sm:h-20 md:h-28 mx-8 sm:mx-20 md:mx-20" />
            <img src="/partner/UKSH-logo.svg" alt="Universitätsklinikum Schleswig Holstein Logo" className="h-10 sm:h-20 md:h-28 mx-8 sm:mx-20 md:mx-20" />
        </Marquee>
    </div>
  );
}

export default Testimonials;
