import Header from "./Header"
import ContactElement from "./ContactElement";

function ContactSection() {

    return (
      <>
        <div id="contact" className="h-full md:h-screen flex flex-col items-center justify-center px-8 text-white bg-midnight-blue font-din">
            <div className="w-full mb-2 mt-12 md:-pt-12 xl:pt-32 flex justify-center items-center z-2">
                <Header subtitle={"contact details"} title={"get in touch"} description={"We are looking forward to hearing from you!"} position={"center"} color={"green"}/> 
            </div>

            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center pb-10 md:mb-40 text-sm sm:text-base">
              <div className="flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/2 h-full bg-gray-100 drop-shadow-2xl shadow-black p-6 ">
                {/* <ContactForm/> */}
                <p className="text-base md:text-lg text-center xl:text-2xl 2xl:text-4xl text-midnight-blue pt-4 2xl:pb-4 uppercase">
                  <strong>Message us directly!</strong>
                </p>
                <p className="text-midnight-blue pb-4 2xl:pb-8 xl:px-32 text-center 2xl:text-4xl">Your request will be answered as quickly as possible. We look forward to an exciting exchange!</p>
                <a href="mailto:hello@humaide.com?subject=Kontaktanfrage&body=Hallo%20liebes%20HUMAIDE%20Team,%0D%0A%0D%0Aich%20bin%20auf%20eure%20Website%20gestoßen%20und%20würde%20mich%20sehr%20über%20eine%20Nachricht%20von%20euch%20freuen!%20">
                  <button className="px-4 py-2 rounded-md border-2 bg-midnight-blue border-midnight-blue hover:bg-robin-blue hover:text-midnight-blue hover:border-robin-blue duration-300 shadow-md font-semibold xl:text-lg 2xl:text-4xl xl:px-8 xl:py-4">Send a message!</button>   
                </a> 
              </div>
              
              <div className="w-full md:w-[40%] lg:w-1/4 h-full bg-robin-blue drop-shadow-2xl shadow-black flex flex-col item-center justify-center py-6">
                <h2 className="text-base md:text-lg lg:text-xl 2xl:text-4xl uppercase py-4 font-semibold text-center text-midnight-blue">Our channels</h2>
                <div className="w-full">
                  <ContactElement title="E-Mail" content="hello@humaide.com" link="mailto:hello@humaide.com?subject=Kontaktanfrage" icon="envelope"/>
                  <ContactElement title="Youtube" content="HUMAIDE-Team" link="https://www.youtube.com/@HUMAIDE-Team" icon="play"/>                
                </div>
              </div>               
            </div>
        </div>
      </>
    );
  };
  
  export default ContactSection;