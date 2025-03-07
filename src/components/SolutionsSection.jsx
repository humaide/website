import Header from "./Header"
import ShinyBoxElement from "./ShinyBoxElement"

function SolutionsSection() {

    return (
      <>
        <section id="solutions" className="h-full xl:h-screen w-full flex flex-col text-midnight-blue items-center justify-center -t-10 lg:-t-0">
            <div className="w-1 md:w-[0.3rem] h-[100dvh] lg:h-96 mb-64 bg-[#d3dbdf] absolute mx-auto rounded-full"></div>
            <div className="w-full -pt-6 flex justify-center items-center z-6">
                <Header subtitle={"our services"} title={"human-centered solutions"} description={"Consulting throughout all phases of development."} position={"center"} color={"gray"} style={"mb-0 lg:w-3/4 bg-gray-100 py-4"}/> 
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center pt-6 min-[375px]:pt-16 lg:pt-6 lg:pb-64 xl:pt-14">
            <div className="flex w-1 h-[160dvh] -mt-8 lg:mt-0 lg:h-1 lg:w-2/3 bg-midnight-blue/15 absolute mx-auto rounded-full lg:place-self-start"></div>
                <ShinyBoxElement title={"Onboarding & Training"} icon={"chalkboard-user"}
                                description={"Training, simulations and certifications. Our programs aim to ensure competence and confidence in interacting with intelligent systems to equip individuals with the necessary skills to use AI's full potential while minimizing risks."}/>
                <ShinyBoxElement title={"Conception"} icon={"gears"}
                                    description={"Analysis of information flows, specific tasks and required competencies of humans and AI. Our expertise in the field of explainable AI forms the foundation for the design of an integrated human-AI system."}/>
                <ShinyBoxElement title={"Development"} icon={"magnifying-glass-chart"}
                                    description={"Examination of existing systems with regard to human-centeredness and efficiency as well as support with regulatory requirements. Our analysis tools provide scientifically grounded assessments and suggestions for improvement."}/>      
            </div>          
        </section>
      </>
    )
  }
  
  export default SolutionsSection