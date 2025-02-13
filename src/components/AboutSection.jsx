function AboutSection() {

    return (
      <>
        <section id="about" className="h-screen bg-gray-100 flex flex-col text-midnight-blue items-center justify-center">
          	<img src="stopwatch-solid.svg" alt="half full hourglass icon" className="w-10 pb-4"/>
            <p className="font-semibold text-5xl pb-8 uppercase text-midnight-blue">coming soon...</p>

            <div className="flex w-full items-center justify-center px-8">

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
            </div>

            
        </section>
      </>
    )
  }
  
  export default AboutSection