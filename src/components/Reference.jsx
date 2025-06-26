/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Reference({title, authors, year, link, darkBg}) {
    return (
        <a href={link} target="_blank"  className={`w-full flex items-center justify-between text-left max-md:text-base ${darkBg ? "bg-white/10 hover:bg-white/20 text-white" : "bg-charcoal/10 hover:bg-charcoal/20 text-charcoal"}  duration-300 mt-2`}> 
            <div>
                <h3 className="px-4 pt-3 font-semibold">{title} ({year})</h3>
                <p className="px-4 pb-3 max-md:text-base text-xl">{authors}</p>            
            </div>
            <FontAwesomeIcon icon="arrow-right-long" size="sm" className="pr-4 pt-1.5"/>                
        </a> 
    );
  };
  
  export default Reference;