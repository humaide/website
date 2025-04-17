/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ContactElement( {title, content, link, icon} ) {
    return (
        <>
        <a href={link} target="_blank">
            <div className="flex items-center w-5/6 md:w-3/4 mb-2 mx-auto my-auto border-2 border-sky-500/40 hover:bg-sky-500/35 duration-500 transform text-white text-lg rounded-sm 2xl:text-4xl">
                <FontAwesomeIcon icon={icon} size="lg" className="pl-4"/>
                <div className="flex flex-col">
                    <h2 className="px-4 pt-2 2xl:pt-6 font-semibold">{title}</h2>
                    <p className="px-4 pb-2 2xl:pb-6">{content}</p>                    
                </div>
                {/* <div className="w-8 h-8 rounded-full absolute z-10 bg-midnight-blue pr-8"></div> */}
            </div>
        </a>    
        </>
    );
  };
  
  export default ContactElement;