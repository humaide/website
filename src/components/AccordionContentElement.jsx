/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AccordionContentElement({ title, content }) {
  return (
    <>
    <div className="flex">
        <FontAwesomeIcon icon="arrow-right-long" size="sm" className="text-white pr-2 pt-1.5 w-4"/>
        <h2 className="text-lg font-semibold">{title}</h2>                      
    </div>
    <p className="pb-2 pl-6">{content}</p>            
    </>
  )
}

export default AccordionContentElement