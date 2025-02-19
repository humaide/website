import ShinyTextBoxLong from "./ShinyTextBoxLong"
import Header from "./Header"

function AboutSection() {

    return (
      <>
        <section id="about" className=" h-full 2xl:h-screen w-full bg-gray-100 flex flex-col text-midnight-blue items-center justify-center mt-28 sm:mt-32 md:mt-40 lg:mt-28 2xl:mt-64">
          <div className="w-2 h-dvh lg:h-dvw bg-midnight-blue/15 absolute mx-auto -mt-14 -md:mt-32 rounded-full"></div>
          <div className="w-full pb-12 min-[425px]:pb-20 lg:pb-4 xl:pt-32 2xl:pt-44 flex items-center justify-center lg:justify-start z-2">
            <Header subtitle={"about us"} title={"what we offer"} description={"Empowering people - for more trust, efficiency and successful innovations."} position={"left"} color={"gray"}/> 
          </div>
          <div className="flex flex-col w-full h-full items-center">
            <ShinyTextBoxLong title={"Human-centered approaches"} position={"left"}
                              description={"considering cognitive as well as affective challenges and needs in human-AI-interaction."}/>
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