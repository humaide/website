

function IntroSection() {

    return (
      <>
        <section id="intro" className="h-screen bg-midnight-blue flex flex-col text-white items-center justify-center">
            <div className="h-[25%] text-center lg:-mt-16 xl:-mt-28 2xl:-mt-44">
                <h1 className="text-4xl lg:text-7xl 3xl:text-[9rem] 4xl:text-[14rem] font-normal">Welcome to</h1>
                <h2 className="text-5xl lg:text-8xl 3xl:text-[12rem] 4xl:text-[18rem] font-bold uppercase pt-2">Hum<span className="text-robin-blue">ai</span>de!</h2>
                <h3 className="text-xl lg:text-3xl 2xl:text-4xl 3xl:text-6xl 4xl:text-8xl text-center pt-2 lg:pt-6 font-sans font-extralight">Human Minds in Automation</h3>
                <h3 className="text-xl lg:text-3xl 2xl:text-4xl 3xl:text-6xl 4xl:text-8xl text-center italic font-sans font-extralight px-4">Integration Design for Empowerment</h3>                
            </div>
            <div className="h-[35%] text-center"></div>
        </section>
      </>
    )
  }
  
  export default IntroSection