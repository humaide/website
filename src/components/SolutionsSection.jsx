import Header from "./Header"
import ShinyBoxElement from "./ShinyBoxElement"

function SolutionSection() {

    return (
      <>
        <section id="solutions" className="hidden h-screen w-full bg-gray-100 flex flex-col text-midnight-blue items-center justify-center pt-28">
            <div className="w-full mb-34 -pt-12 flex justify-center items-center z-2">
                <Header subtitle={"our services"} title={"human-centered solutions"} description={"Empowering people - for more trust, efficiency and successful innovations."} position={"center"} color={"gray"}/> 
            </div>
            <div className="flex items-center justify-between pb-64">
                <ShinyBoxElement title={"Onboarding & Training"} 
                                description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}/>
                <ShinyBoxElement title={"Development"} 
                                    description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}/>
                <ShinyBoxElement title={"Optimization"} 
                                    description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}/>      
            </div>          
        </section>
      </>
    )
  }
  
  export default SolutionSection