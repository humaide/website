import ShinyTextBoxLong from "./ShinyTextBoxLong"
import Header from "./Header"

function AboutSection() {

    return (
      <>
        <section id="" className=" hidden h-full 2xl:h-screen w-full bg-gray-100 flex flex-col text-midnight-blue items-center justify-center mt-24 md:mt-40 lg:mt-24">
          <div className="w-2 h-5/6 bg-midnight-blue/15 absolute mx-auto -mt-14 -md:mt-32 rounded-full"></div>
          <div className="w-full my-8 -pt-12 pb-4 max-lg:pb-8 lg:pb-4 xl:pt-32 flex items-center justify-center lg:justify-start z-2">
            <Header subtitle={"about us"} title={"what we offer"} description={"Interdisciplinary expertise for optimal integration of humans and AI."} position={"left"} color={"gray"}/> 
          </div>
          <div className="flex flex-col w-full h-full items-center">
            <ShinyTextBoxLong title={"Human-centered approaches."} position={"left"}
                              description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."}/>
            <ShinyTextBoxLong title={"Interdisciplinary expertise."} position={"right"}
                              description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."}/>
            <ShinyTextBoxLong title={"Scientific methods."} position={"left"}
                              description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."}/>
          </div>
          
{/*             <div className="flex w-full items-center justify-center px-8">

              <div className=" flex flex-col items-center w-1/2">
                <p className="text-2xl py-4 text-center"><strong>Interested? Send us a message in the meantime!</strong><br/>We look forward to hearing from you!</p>
                <p className="text-2xl">
                    <strong>E-Mail: </strong>
                    <a href="mailto:hello@humaide.com">hello@humaide.com</a>
                </p>
                <p className="py-4 text-silver-grey">OR</p>
                <a href="mailto:hello@humaide.com?subject=Kontaktanfrage?body=Hallo%20liebes%20HUMAIDE%20Team,%0D%0A%0D%0Aich%20bin%20auf%20eure%20Website%20gestoßen%20und%20würde%20mich%20sehr%20über%20eine%20Nachricht%20von%20euch%20freuen!%20">
                <button className="px-4 py-2 rounded-md border-2 border-midnight-blue hover:bg-midnight-blue hover:text-white duration-300 shadow-md font-semibold">Send a message!</button>   
                </a>              
              </div>
            </div> */}

            
        </section>
      </>
    )
  }
  
  export default AboutSection