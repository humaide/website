/* eslint-disable react/prop-types */
import Evaluation from '../assets/icons/evaluation.svg'
import Onboarding from '../assets/icons/onboarding.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SolutionCard({ icon, color, title, content, btn }) {
  return (
        <div className="w-full h-2/3 lg:h-1/3 flex flex-col justify-end lg:p-6 text-charcoal text-sm bg-cover lg:m-2 rounded-lg duration-500 transform relative">            
            <div className="flex items-end pb-2">
                <img src={icon === "evaluation" ? Evaluation : icon === "onboarding" ? Onboarding : Onboarding } alt="illustration" className="self-start h-12"/>
                <h2 className="font-semibold px-3 text-2xl">{title}</h2>              
            </div>
            <p className="text-base lg:text-lg">{content}</p>
            <a href="https://calendly.com/hello-humaide/30min" target="_blank" className='pt-6 z-20 self-start'>
                <button className={`lg:mb-4 text-base lg:text-lg inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full ${color} text-white duration-300`}>
                    {btn}
                    <FontAwesomeIcon icon="arrow-right-long" size="sm" className="text-white pl-2 pt-1.5"/>                
                </button>
            </a> 
        </div> 
  )
}

export default SolutionCard
