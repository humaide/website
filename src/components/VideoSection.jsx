/* eslint-disable react/prop-types */

function VideoSection() {
    return (
        <>
        <section id='video' className='border-[#0A090C] px-4 h-full lg:h-screen flex flex-col lg:flex-row items-center justify-center'>
            {/* <div className='absolute w-[53%] h-[26rem] animate-custom-pulse bg-gradient-to-br from-fuchsia-400 to-robin-blue opacity-20 blur-2xl rounded-xl'></div>      */}
            <div className='lg:w-1/3 flex flex-col h-full lg:h-screen'>
            <h1 className='text-white font-bold text-2xl lg:text-[42px] text-center lg:text-left lg:pt-36 lg:px-20'><span className="relative bg-gradient-to-r  from-indigo-500 to-blue-300 bg-clip-text text-transparent text-center select-auto text-shadow-xl">WHAT'S NEW?</span></h1>
            <p className='text-white text-base lg:text-xl text-center lg:text-left pt-4 lg:pl-20 z-20 hyphens-auto' lang='en'>Explore the latest videos and social media content, offering insights into our work and informative perspectives on the evolving relationship between humans and artificial intelligence.</p>
            <a href="https://www.youtube.com/channel/UC92HAT4HI5KglkEDtIC0K5A" target="_blank" className='lg:pl-20 pt-6 z-20 self-center lg:self-start'>
                <button className="text-base lg:text-lg mt-4 mb-8 lg:mt-0 hover:cursor-pointer lg:mb-4 inter-500 px-4 py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-full border-sky-600 bg-sky-500/70 hover:bg-sky-500/40 text-white duration-300">
                    Visit our Youtube-Channel
                </button>
            </a> 
            </div>
            <div className='lg:w-2/3 lg:h-screen flex items-center justify-center'>
            <div className="hidden lg:block absolute lg:w-[49rem] h-[27rem] bg-[#0c0f1f] opacity-100 rounded-xl z-50"></div>
            <div className="hidden lg:block absolute lg:w-[49rem] h-[27rem] bg-sky-800 rounded-xl opacity-45 animate-pulse z-50"></div>
            <div className="hidden lg:block absolute lg:w-[48rem] h-[26rem] bg-sky-700 rounded-xl opacity-45 animate-pulse z-50"></div>
            <div className="hidden lg:block absolute lg:w-[47rem] h-[25rem] bg-sky-400 rounded-xl opacity-45 animate-pulse z-50"></div>
            <div className='lg:absolute bg-white lg:w-[46rem] lg:h-96 z-100 flex items-center justify-center rounded-xl mb-20 lg:mb-0'>
                <iframe className='w-full h-full rounded-xl duration-500' src="https://www.youtube.com/embed/Rv_mruCt0CM?si=bNjrrkChgyAWu2KI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>  
            </div> 
            {/* <div className="bg-[url(/bg-test5-dark.svg)] bg-contain w-full h-60 absolute self-end justify-self-end"></div>
            <div className="bg-gradient-to-t from-transparent via-transparent to-[#0C0F1F] w-full h-80 absolute self-end justify-self-end"></div> */}
        </section>
        </>
    );
  };
  
  export default VideoSection;