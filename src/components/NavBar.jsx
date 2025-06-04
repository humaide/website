import { Link  } from "react-router-dom";
import { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink } from 'react-router-hash-link';
import { LANGUAGES } from "../constants";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";


function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const { i18n, t } = useTranslation();

    // switch language
    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
    <nav className="flex flex-col bg-pastel-blue text-charcoal w-full font-sans  z-150 lg:z-100 fixed">
        {/* mobile nav icon */}
        <div className="flex lg:hidden self-end justify-between items-center w-full px-4 py-2 z-150">
            <div className="flex items-center">
                <img src="logos/logo-dark-accent.svg" alt="Humaide Logo" className="h-10 w-10 z-150"/>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                <FontAwesomeIcon icon="bars" size="2xl" className="text-charcoal" />
            </button>
        </div>
        {/* nav content */}
        <div className={`w-3/4 z-100 lg:w-full bg-charcoal sm:bg-pastel-blue self-end h-full lg:h-fit absolute lg:relative flex flex-col lg:flex lg:justify-between items-center text-white sm:text-charcoal grow xl:text-lg 2xl:text-xl 3xl:text-3xl 4xl:text-5xl ${isOpen ? "flex" : "hidden"}`} >
            <div className="w-full flex flex-col lg:flex-row lg:justify-between text-white sm:text-charcoal items-center bg-charcoal sm:bg-pastel-blue">
                {/* logo (desktop) */}
                <div className="lg:w-1/3 items-center hidden lg:flex">
                    <img src="logos/logo-dark-accent.svg" alt="Humaide Logo" className="mx-4 h-10 w-10 my-1"/>
                </div>
                {/* closing button (mobile) */}
                <button onClick={() => setIsOpen(!isOpen)} className="flex lg:hidden w-full px-3 py-2 rounded text-black-500 hover:text-black-400">
                    <FontAwesomeIcon icon="xmark" size="2xl" className="text-white ml-auto py-2 px-4" />
                </button>
                {/* menu items */}
                <div className="lg:w-2/5 flex flex-col lg:flex-row lg:justify-between text-white sm:text-charcoal items-center w-full">
                    <Link onClick={() => setIsOpen(!isOpen)} to="/" className="hover:text-tangerine duration-300 transform lg:hover:scale-110 py-4 lg:py-2 lg:px-4 border-y lg:border-y-0 border-y border-y-soft-blue w-full lg:w-fit text-center">Home</Link> {/**{t("nav.home")} */}
                    <HashLink to="/#about" onClick={() => setIsOpen(!isOpen)} className="hover:text-tangerine duration-300 transform lg:hover:scale-110 py-4 lg:py-2 lg:px-4 border-b lg:border-b-0 border-soft-blue w-full lg:w-fit text-center">About</HashLink> {/**{t("nav.about")} */}
                    <HashLink to="/#video" onClick={() => setIsOpen(!isOpen)} className="hover:text-tangerine duration-300 transform lg:hover:scale-110 py-4 lg:py-2 lg:px-4 border-b lg:border-b-0 border-soft-blue  w-full lg:w-fit text-center">Resources</HashLink>  {/**{t("nav.resources")} */}
                    <HashLink to="/#solutions" onClick={() => setIsOpen(!isOpen)} className="hover:text-tangerine duration-300 transform lg:hover:scale-110 py-4 lg:py-2 lg:px-4 border-b lg:border-b-0 border-soft-blue  w-full lg:w-fit text-center">Solutions</HashLink> {/**{t("nav.solutions")} */}            
                    <HashLink to="/#team" onClick={() => setIsOpen(!isOpen)} className="hover:text-tangerine duration-300 transform lg:hover:scale-110 py-4 lg:py-2 lg:px-4 border-b lg:border-b-0 border-soft-blue  w-full lg:w-fit text-center">Team</HashLink> {/**{t("nav.team")} */}  

                </div>
                <div className="lg:w-1/3 flex flex-row-reverse mx-4 my-1 2xl:mx-6 2xl:my-3 4xl:mx-8 4xl:my-5 py-2">
                    <HashLink to="/#contact" className="hover:text-robin-blue duration-300 transform hover:scale-110">
                        <button className="hover:cursor-pointer font-semibold px-4 py-1 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full bg-tangerine hover:bg-tangerine/80 text-charcoal duration-300">
                            Contact us{/* {t("nav.contact")} */}
                        </button>
                    </HashLink>
                    {/* Language Switcher */}
                    {/* <div className="flex items-center space-x-2 mr-4 text-base text-charcoal ">
                        <Flag code={i18n.language === "de" ? "de" : "us"} className="w-6" />
                        <select defaultValue={i18n.language} onChange={onChangeLang}>
                            {LANGUAGES.map(({ code, label }) => (
                            <option key={code} value={code}>
                                <p className="px-4 py-2">{label}</p>
                            </option>
                            ))}
                        </select>
                    </div> */}
                </div>
            </div> 
        </div>
    </nav>
    );
  };
  
  export default NavBar;