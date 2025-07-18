/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactCard({icon, title, content, btns}) {
    return (
        <div className={`w-full h-2/3 lg:h-1/3 flex flex-col items-center justify-center text-charcoal rounded-sm duration-500 transform relative`}> 
            <div className="bg-soft-blue/10 h-80 transition-all duration-300 backdrop-blur-xs w-[98%] my-1 p-6 rounded-lg flex flex-col justify-center items-center text-center">
                <FontAwesomeIcon icon={icon} size="3x" className="text-charcoal bg-linear-180 from-pastel-blue to-tangerine p-2"/>                
                <h2 className="font-semibold pt-4 pb-2 text-xl relative z-10">{title}</h2>                
                <p className="font-light text-base lg:text-lg z-10">{content}</p>
                <div className="w-full flex justify-center">
                    {btns.map((item, index) => (
                        <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pt-6 z-20 mx-1"
                        >
                        <button className="text-base lg:text-lg inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full bg-soft-blue hover:bg-soft-blue/80 text-white duration-300">
                            {item.label}
                            <FontAwesomeIcon icon="arrow-right-long" size="sm" className="text-white pl-2 pt-1.5" />
                        </button>
                        </a>
                    ))}                    
                </div>

            </div>
        </div> 
    );
  };
  
  export default ContactCard;