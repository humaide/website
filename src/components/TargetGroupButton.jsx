/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TargetGroupButton({ icon, title, subtitle, bottomBorder, active }) {

    return (
        <div className={`flex w-full items-center pr-2 py-6 text-left md:border-r md:border-r-pastel-blue/25 ${bottomBorder ? "md:border-b md:border-b-pastel-blue/25" : ""} ${active ? "bg-pastel-blue/20" : ""}`}>
            <FontAwesomeIcon icon={icon} size="lg" className="bg-gradient-to-b from-pastel-blue to-tangerine text-charcoal rounded-sm mx-3 px-2 py-3 lg:w-10 lg:h-10"/>
            <div>
                <p className="font-semibold">{title}</p>
                <p className="font-extralight">{subtitle}</p>                  
            </div>
        </div>
    )
}

export default TargetGroupButton