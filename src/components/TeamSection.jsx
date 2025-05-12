/* eslint-disable react/prop-types */
import { motion } from 'motion/react'
import timImage from '../assets/images/team-tim.jpg';
import luisaImage from '../assets/images/team-luisa.jpg';
import thomasImage from '../assets/images/team-thomas.jpg';
import michelleImage from '../assets/images/team-michelle.jpg';

function TeamSection() {
    return (
        <>
        <section id="team" className="pt-20 h-full xl:h-screen w-full flex flex-col text-indigo items-center justify-center -t-10 lg:-t-0 bg-white">
            
            <motion.div transition={{ duration: 0.5, ease: "backIn"}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} lang='en'  className={` text-shadow-xl flex flex-col items-center justify-center w-full lg:px-28 2xl:px-44 max-lg:text-center mt-4 mb-6`}>
              <h1 className="uppercase font-sans font-light max-[375px]:text-base xl:text-2xl 2xl:text-4xl custom-font-3">our team</h1>
              <h2 className="uppercase font-bold text-2xl lg:text-[42px] 2xl:text-6xl py-1"><span className="relative bg-gradient-to-r  from-indigo-500 to-sky-300 bg-clip-text text-transparent text-center select-auto custom-font-1">meet the founder</span></h2>
            </motion.div>

            <div className='pb-44 pt-10 mx-4 xl:mx-24 z-100 text-raisin hyphens-auto' lang='en'>
                <div className='flex flex-col lg:flex-row w-full justify-evenly'>
                
                <div className='lg:w-[22%] text-center flex flex-col sm:flex-row lg:flex-col items-center justify-center pb-12 lg:pb-0'>
                    <div className='flex items-center justify-center'>
                        <img className="w-44 h-44 object-cover rounded-full" src={timImage} alt="Image Tim" />           
                    </div>
                    <div className='w-full flex flex-col sm:items-start lg:items-center sm:w-2/3 lg:w-full sm:pl-4 lg:pl-0'>    
                        <p className='pt-4 font-semibold text-lg'>Tim Schrills</p>
                        <p className='pb-4 font-light text-lg'>Strategy & Regulation</p>                        
                        <p className='sm:text-left lg:text-center text-lg'>Psychologist and post-doc in human-centered XAI. Experienced in questions surrounding the AI act and creator of the integrated information processing model.</p>
                    </div>
                </div>

                <div className='lg:w-[22%] text-center flex flex-col sm:flex-row lg:flex-col items-center justify-center pb-12 lg:pb-0'>
                    <div className='flex items-center justify-center'>
                        <img className="w-44 h-44 object-cover rounded-full" src={luisaImage} alt="Image Tim" />           
                    </div>
                    <div className='w-full flex flex-col sm:items-start lg:items-center sm:w-2/3 lg:w-full sm:pl-4 lg:pl-0'>    
                        <p className='pt-4 font-semibold text-lg'>Luisa Winzer</p>
                        <p className='pb-4 font-light text-lg'>Operations & Sales</p>                        
                        <p className='sm:text-left lg:text-center text-lg'>Psychologist with a background in cognitive systems. Experienced in human oversight for high-risk AI-systems and trained in capability analyses and operator training.</p>
                    </div>
                </div>

                <div className='lg:w-[22%] text-center flex flex-col sm:flex-row lg:flex-col items-center justify-center pb-12 lg:pb-0'>
                    <div className='flex items-center justify-center'>
                        <img className="w-44 h-44 object-cover rounded-full" src={thomasImage} alt="Image Tim" />           
                    </div>
                    <div className='w-full flex flex-col sm:items-start lg:items-center sm:w-2/3 lg:w-full sm:pl-4 lg:pl-0'>    
                        <p className='pt-4 font-semibold text-lg'>Thomas Franke</p>
                        <p className='pb-4 font-light text-lg'>Science & Ecosystem</p>                     
                        <p className='sm:text-left lg:text-center text-lg'>Professor for Engineering Psychology and Cognitive Ergonomics. Expert in mental models, usability, and user diversity.</p>
                    </div>
                </div>

                <div className='lg:w-[22%] text-center flex flex-col sm:flex-row lg:flex-col items-center justify-center pb-12 lg:pb-0'>
                    <div className='flex items-center justify-center'>
                        <img className="w-44 h-44 object-cover rounded-full" src={michelleImage} alt="Image Tim" />           
                    </div>
                    <div className='w-full flex flex-col sm:items-start lg:items-center sm:w-2/3 lg:w-full sm:pl-4 lg:pl-0'>    
                        <p className='pt-4 font-semibold text-lg'>Michelle Wrage</p>
                        <p className='pb-4 font-light text-lg'>Technology & Product</p>                     
                        <p className='sm:text-left lg:text-center text-lg'>Media informatics specialist with a focus on HCI and UX. Experienced in the design and development of interactive and human-centered systems.</p>
                    </div>
                </div>

                </div>
                
                
            </div>
            {/* <div className="bg-[url(/bg-test5-white.svg)] w-full h-80 absolute self-end justify-self-end"></div>
            <div className="bg-gradient-to-t from-transparent to-white w-full h-80 absolute self-end justify-self-end"></div> */}
        </section>

        </>
    );
  };
  
  export default TeamSection;