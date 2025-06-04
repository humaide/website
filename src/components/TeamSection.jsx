/* eslint-disable react/prop-types */
import Heading from './Heading';
import timImage from '../assets/images/team-tim2.jpg';
import luisaImage from '../assets/images/team-luisa2.jpg';
import thomasImage from '../assets/images/team-thomas2.jpg';
import michelleImage from '../assets/images/team-michelle2.jpg';

function TeamSection() {
    return (
        <>
        <section id="team" className="h-full lg:h-full w-full flex flex-col text-indigo items-center justify-center bg-white pt-40">
            <Heading postion={"text-right px-4 lg:px-16"} color={"text-charcoal"} section={"our team"} title={"Meet The Founder"} subtitle={"Strong support through interdisciplinary expertise."} />


            <div className='px-4 lg:px-16 lg:pb-44 pt-10 hyphens-auto' lang='en'>
                <div className='flex flex-col lg:flex-row w-full justify-evenly'>

                    <div className='lg:w-1/2 flex flex-col sm:flex-row'>
                        <div className='flex flex-col mr-3 mb-4 w-full'>
                            <img className="object-cover" src={timImage} alt="Image Tim" />  
                            <p className='pt-4 font-semibold text-lg'>Tim Schrills</p>
                            <p className='pb-4 font-light text-lg'>Strategy & Regulation</p> 
                            <p className='text-base text-charcoal/75'>Psychologist and post-doc in human-centered XAI. Experienced in questions surrounding the AI act and creator of the integrated information processing model.</p>  
                        </div>

                        <div className='flex flex-col mr-3 mb-4 w-full'>
                            <img className="object-cover" src={luisaImage} alt="Image Tim" />  
                            <p className='pt-4 font-semibold text-lg'>Luisa Winzer</p>
                            <p className='pb-4 font-light text-lg'>Operations & Sales</p>   
                            <p className='text-base text-charcoal/75'>Psychologist with a background in cognitive systems. Experienced in human oversight for high-risk AI-systems and trained in capability analyses and operator training.</p>
                        </div>
                    </div>

                    <div className='lg:w-1/2 flex flex-col sm:flex-row'>
                        <div className='flex flex-col mr-3 mb-4 w-full'>
                            <img className="object-cover" src={thomasImage} alt="Image Tim" />  
                            <p className='pt-4 font-semibold text-lg'>Thomas Franke</p>
                            <p className='pb-4 font-light text-lg'>Science & Ecosystem</p>   
                            <p className='text-base text-charcoal/75'>Professor for Engineering Psychology and Cognitive Ergonomics. Expert in mental models, usability, and user diversity.</p>
                        </div>

                        <div className='flex flex-col mr-3 mb-4 w-full'>
                            <img className="object-cover" src={michelleImage} alt="Image Tim" />  
                            <p className='pt-4 font-semibold text-lg'>Michelle Wrage</p>
                            <p className='pb-4 font-light text-lg'>Technology & Product</p>
                            <p className='text-base text-charcoal/75'>Media informatics specialist with a focus on HCI and UX. Experienced in the design and development of interactive and human-centered systems.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </section>

        </>
    );
  };
  
  export default TeamSection;