/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TargetGroupButton({ icon, title, subtitle, active }) {

    return (
        <div className={`flex w-fit items-center p-2 text-left rounded-full md:border md:border-pastel-blue/25 hover:cursor-pointer ${active ? "bg-soft-blue text-white" : "text-pastel-blue hover:bg-pastel-blue/25 duration-300"}`}>
            <FontAwesomeIcon icon={icon} size="lg" className={`${active ? 'text-white' : 'text-pastel-blue'} rounded-sm px-2 py-3 lg:w-10 lg:h-10`}/>
            <div className="pr-6">
                <p className="text-base lg:text-lg font-semibold">{title}</p>
                <p className="text-sm lg:text-base font-extralight">{subtitle}</p>                  
            </div>
        </div>
    )
}

export default TargetGroupButton