import { Link  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function Footer() {

    const { t } = useTranslation();

    return (
      <footer className="flex flex-col text-charcoal items-center justify-center w-full font-din grow text-lg 2xl:text-xl 3xl:text-3xl 4xl:text-5xl ">

        <div className="w-full flex flex-col md:flex-row items-center justify-between bg-pastel-blue py-10 px-16">
                  
            <div className="w-fit flex flex-col items-center lg:items-start p-4 font-light text-lg"> 
              <div className="flex">
                <FontAwesomeIcon icon="copyright" size="sm" className="text-charcoal pt-1.5"/>                
                <p className="font-light uppercase px-2">2025</p>   
              </div> 
              <img src="logos/logo-text-dark-accent.svg" alt="Humaide Logo" className="h-6"/>
            </div>  
            <Link to="/contact" className="hover:text-tangerine font-light duration-300 transform hover:scale-110">{t("footer.legal-notice")}</Link >    
            <div className="w-fit flex flex-col lg:flex-row items-center p-4 text-center font-light text-lg">
              <img src="partner/GW49-logo-blue.svg" alt="gateway 49 Logo" className="w-28 self-center"/>  
            </div>    
        </div>
        
      </footer>
    );
  };
  
  export default Footer;