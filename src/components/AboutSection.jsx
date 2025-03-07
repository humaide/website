import ShinyTextBoxLong from "./ShinyTextBoxLong"
import Header from "./Header"

function AboutSection() {

    return (
      <>
        <section id="about" className=" h-full 2xl:h-screen w-full flex flex-col text-midnight-blue items-center justify-center mt-28 sm:mt-32 md:mt-40 lg:mt-28 2xl:mt-64">
          <div className="w-1 md:w-[0.3rem] h-[160dvh] sm:h-[180dvh] md:h-[200dvh] mt-28 lg:mt-0 lg:pt-0 bg-[#d3dbdf] absolute mx-auto rounded-full"></div>
          <div className="w-full pb-12 min-[425px]:pb-20 lg:pb-4 xl:pt-32 2xl:pt-44 flex items-center justify-center lg:justify-start z-2">
            <Header subtitle={"about us"} title={"what we offer"} description={"Empowering humans - for more trust, efficiency and successful innovations."} position={"left"} color={"gray"} style={"w-1/3 lg:bg-transparent"}/> 
          </div>
          <div className="flex flex-col w-full h-full items-center">
            <ShinyTextBoxLong title={"Human-centered approaches"} position={"left"}
                              description={"considering cognitive and affective challenges as well as needs in human-AI-interaction."}/>
            <ShinyTextBoxLong title={"Interdisciplinary expertise"} position={"right"}
                              description={"from fields such as human-computer interaction or engineering- and cognitive psychology."}/>
            <ShinyTextBoxLong title={"Scientifically validated methods and models"} position={"left"}
                              description={"for optimal integration of humans and AI as the foundation of our services."}/>
          </div>            
        </section>
      </>
    )
  }
  
  export default AboutSection