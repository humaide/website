/* eslint-disable react/prop-types */
import Texture4 from '../assets/textures/texture-4.png'
import Texture9 from '../assets/textures/texture-9.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";

function VideoSection() {

    const { t } = useTranslation();

    return (
        <section id='video' className='bg-white px-4 lg:px-16 h-full flex flex-col items-center justify-center'>
            <div className='flex flex-col text-charcoal text-center pt-16 lg:pt-40'>
                <h2 className="font-bold text-2xl lg:text-6xl 2xl:text-6xl py-1">{t("video.title")}</h2>                
                <p className='text-base lg:text-xl text-center lg:px-16 py-2 z-20 hyphens-auto' lang='en'>{t("video.content")}</p>
                <a href="https://www.youtube.com/channel/UC92HAT4HI5KglkEDtIC0K5A" target="_blank" className='z-20 self-center'>
                    <button className="flex text-base lg:text-lg mt-4 mb-8 lg:mt-0 hover:cursor-pointer lg:mb-4 inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full bg-soft-blue hover:bg-soft-blue/80 text-white duration-300">
                        <p>{t("video.btn-youtube")}</p>
                        <FontAwesomeIcon icon="arrow-right-long" size="sm" className="text-white pl-2 pt-1.5"/>                
                    </button>
                </a> 
            </div>



            <div className="text-white w-11/12 sm:h-[80vh]">

                    <div className="h-full w-full bg-cover">
                        <div className='flex items-center justify-start w-full sm:h-full'>
                            <div className='bg-white flex items-center justify-center w-full h-full'>
                                <iframe
                                    className='w-full h-full duration-500'
                                    src="https://www.youtube.com/embed/KVlDW5B_iKg?si=bxNsKHryPZg6qNVO" 
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