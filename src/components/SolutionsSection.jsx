import Heading from "./Heading"
import SolutionCard from "./SolutionCard"
import Evaluation from '../assets/icons/evaluation.svg'


function SolutionsSection() {

    return (
        <section id="solutions" className="h-full relative w-full flex flex-col items-center justify-center bg-white pt-40 px-4 lg:px-16">
            {/* Heading */}
            <Heading postion={"text-left px-4"} color={"text-charcoal"} section={"our services"} title={"Human-Centered Solutions"} subtitle={"Consulting throughout all phases of integration."} />
            {/* Content */}
            <div className="flex flex-col lg:flex-row items-center justify-center hyphens-auto pt-8" lang="en">
              
              <SolutionCard icon={""} title={"Process Conception"} btn={"Book a call"} color={"bg-soft-blue hover:bg-soft-blue/80"}
              content={"We initalise our clients’ AI journey by understanding where and which AI systems are needed. We analyze information flows, user tasks, and the required competencies of both humans and AI. Our expertise in explainable AI supports the design of integrated, trustworthy AI systems from the ground up, ensuring transparency and human-centeredness."} />

              <div className="w-full h-2/3 lg:1/3 flex flex-col justify-end text-base bg-cover my-12 lg:m-2 rounded-lg duration-500 transform relative">            
                <div className="flex items-end pb-2">
                  <img src={Evaluation} alt="illustration" className="self-start h-12"/>
                  <h2 className="font-semibold px-3 text-2xl">Impact Evaluation</h2>              
                </div>
                <p className="text-base lg:text-lg">We evaluate existing or recently introduced systems for human-centeredness, transparency, and effectiveness – and offer practical advice for improvement. We collaborate with all stakeholders, e.g., digitalization officers or union representatives. We also support organizations in aligning with the requirements of the European AI Act.</p>
                <div className='flex item-center h-full pt-6 z-20'>
                  <button disabled className="lg:mb-4 text-base lg:text-lg inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full bg-pastel-blue text-white duration-300">
                    View our Report            
                  </button>
                  <div className="w-fit h-fit px-2 py-0.5 text-xs -mt-2 -ml-12 bg-tangerine text-charcoal rounded-xl justify-self-end">Coming soon</div>              
                </div>
              </div> 

              <SolutionCard icon={"onboarding"} title={"Operator On-boarding"} btn={"Request material"} color={"bg-soft-blue hover:bg-soft-blue/80"}
              content={"Future AI operators may still experience insecurity or a fear of being obsolete. Readiness makes navigating change easier. Our programs ensure that individuals and teams have the competence and confidence to work with intelligent systems. We equip users with the skills needed to use AI effectively, safely, and in compliance with regulatory expectations."} /> 
          </div>

        </section>
    )
  }
  
  export default SolutionsSection