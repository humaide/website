/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function Reference({title, authors, year, link}) {

    const { i18n } = useTranslation();

    return (
        <a href={link} target="_blank"  className='w-full flex items-center justify-between bg-charcoal/10 hover:bg-charcoal/20 text-charcoal duration-300 mt-2'> 
            <div>
                <h3 className="px-4 pt-3 font-semibold">{title} ({year})</h3>
                <p className="px-4 pb-3 text-xl">{authors}</p>            
            </div>
            <FontAwesomeIcon icon="arrow-right-long" size="sm" className="pr-4 pt-1.5"/>                
        </a> 
    );
  };
  
  export default Reference;