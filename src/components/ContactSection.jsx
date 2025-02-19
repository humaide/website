import Header from "./Header"

function ContactSection() {

    return (
      <>
        <div id="contact" className="h-screen flex flex-col items-center justify-center px-8 text-white bg-midnight-blue font-din">
            <div className="w-full my-8 -pt-12 pb-4 max-lg:pb-8 xl:pt-32 flex justify-center items-center z-2">
                <Header subtitle={"contact details"} title={"get in touch"} description={"We are looking forward to hearing from you!"} position={"center"} color={"green"}/> 
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg lg:text-xl text-center xl:text-4xl 2xl:text-4xl">
                  <strong>E-Mail: </strong><br/>
                  <a href="mailto:hello@humaide.com">hello@humaide.com</a>
              </p>
              <p className="py-4 text-silver-grey xl:text-xl 2xl:text-2xl">OR</p>
              <a href="mailto:hello@humaide.com?subject=Kontaktanfrage&body=Hallo%20liebes%20HUMAIDE%20Team,%0D%0A%0D%0Aich%20bin%20auf%20eure%20Website%20gestoßen%20und%20würde%20mich%20sehr%20über%20eine%20Nachricht%20von%20euch%20freuen!%20">
                  <button className="px-4 py-2 rounded-md border-2 border-white hover:bg-robin-blue hover:text-midnight-blue hover:border-robin-blue duration-300 shadow-md font-semibold xl:text-xl 2xl:text-4xl xl:px-8 xl:py-4">Send a message!</button>   
              </a>                
            </div>
            
        </div>
      </>
    );
  };
  
  export default ContactSection;