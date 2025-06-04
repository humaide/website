import AboutCard from "./AboutCard"
import Heading from "./Heading"
   
function AboutSection() {

    return (
        <section id="about" className="h-full lg:h-screen w-full flex flex-col text-charcoal bg-charcoal items-center justify-center font-sans px-4 lg:px-16">
          {/* Heading */}
          <Heading postion={"text-left pt-10 lg:pt-0"} color={"text-white"} section={"about us"} title={"What We Offer"} subtitle={"Empowering humans – for more trust, controllability and successful collaboration."} />
          {/* Content Cards */}
          <div className="flex flex-col md:flex-row items-center justify-center hyphens-auto w-full my-20" lang="en"> 
            <AboutCard illustration="hc" title="Human-Centered AI" content="We help organizations create, integrate or use AI systems that serve humans in their task – not the other way around. We help to conceptualize and design AI systems  – addressing trust, controllability, and collaboration for AI that empowers people." />
            <AboutCard illustration="act" title="AI Act Readiness" content="We support organizations in preparing for the European AI Act – proactively, practically, and human-centered. Using in-house tools and ISO/DIN-based criteria, we assess, e.g., measures for human oversight, transparency, and documentation to support audit readiness." />
            <AboutCard illustration="sc" title="Scientific Methods" content="We translate research into practice – with validated methods from cognitive science and HCI such as the Integrated Information Processing model, we help organizations design AI, train users, and build systems that fit real work environments." />
          </div>     
        </section>
    )
  }
  
  export default AboutSection