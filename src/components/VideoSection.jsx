/* eslint-disable react/prop-types */
import Texture4 from '../assets/textures/texture-4.png'
import Texture9 from '../assets/textures/texture-9.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function VideoSection() {
    return (
        <section id='video' className='bg-charcoal px-4 lg:px-16 h-full lg:h-screen flex flex-col lg:flex-row-reverse items-center justify-between'>
            <div className='lg:w-1/3 flex flex-col h-full lg:h-screen text-white text-center lg:text-right lg:pl-8 pt-16'>
                <h2 className="font-bold text-2xl lg:text-6xl 2xl:text-6xl py-1">What's New?</h2>                
                <p className='text-base lg:text-xl text-center lg:text-right py-6 z-20 hyphens-auto' lang='en'>Explore the latest videos and social media content, offering insights into our work and informative perspectives on the evolving relationship between humans and artificial intelligence.</p>
                <a href="https://www.youtube.com/channel/UC92HAT4HI5KglkEDtIC0K5A" target="_blank" className='z-20 self-center lg:self-end'>
                    <button className="flex text-base lg:text-lg mt-4 mb-8 lg:mt-0 hover:cursor-pointer lg:mb-4 inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full bg-soft-blue hover:bg-soft-blue/80 text-white duration-300">
                        <p>Visit our Youtube-Channel</p>
                        <FontAwesomeIcon icon="arrow-right-long" size="sm" className="text-white pl-2 pt-1.5"/>                
                    </button>
                </a> 
            </div>



            <div className="text-white lg:w-[60%] h-full py-10 lg:py-32">

                    <div className="h-full w-full bg-cover">
                        <div className='flex items-center justify-start w-full h-full'>
                            <div className='bg-white flex items-center justify-center w-full h-full'>
                                <iframe
                                    className='w-full h-full duration-500'
                                    src="https://www.youtube.com/embed/Rv_mruCt0CM?si=bNjrrkChgyAWu2KI"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>  
                        </div> 
                    </div>


                {/* <div className="grid grid-cols-3 gap-2">
                
                    <div className="col-span-2 h-72 w-full bg-cover">
                        <div className='flex items-center justify-start w-full h-full'>
                            <div className='bg-white flex items-center justify-center w-full h-full'>
                                <iframe
                                    className='w-full h-full duration-500'
                                    src="https://www.youtube.com/embed/Rv_mruCt0CM?si=bNjrrkChgyAWu2KI"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>  
                        </div> 
                    </div>
                    
                    <div className="bg-tangerine h-72">
                        <img src={Texture4} alt="dotted wave illustration" className="w-full h-full object-cover"/>
                    </div>
                    
                    <div className="bg-soft-blue w-full h-72">
                        <img src={Texture9} alt="dotted wave illustration" className="w-full h-full object-cover"/>
                    </div>

                    <div className="col-span-2 h-72 w-full bg-cover">
                        <div className='flex items-center justify-start w-full h-full'>
                            <div className='bg-white flex items-center justify-center w-full h-full'>
                                <iframe
                                    className='w-full h-full duration-500'
                                    src="https://www.youtube.com/embed/Rv_mruCt0CM?si=bNjrrkChgyAWu2KI"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>  
                        </div> 
                    </div>

                </div> */}
            </div>
        </section>
    );
  };
  
  export default VideoSection;