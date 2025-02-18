/* eslint-disable react/prop-types */
import BoxImgLong from '../assets/shiny-box-long-neuron-top.svg'
import BoxImgLongNeuron from '../assets/shiny-box-long-neuron.svg'

function ShinyTextBoxLong({ title, description, position }) {
    return (
        <>
            <div className={`flex justify-center items-center w-full lg:w-[38rem] md:justify-center lg:items-center max-[425px]:pb-40 pb-52 lg:mx-16 2xl:mx-64 ${position == "right" ? "lg:-translate-x-1/2 lg:pl-[3.25rem]" : "lg:translate-x-1/2 lg:pr-[3.25rem]"}`}>
               <img src={BoxImgLongNeuron} alt="box element" className={`hidden lg:flex absolute h-36 lg:h-44 xl:h-52 2xl:h-80 ${position == "right" ? "rotate-180" : ""}`}/>
               <img src={BoxImgLong} alt="box element" className="flex lg:hidden absolute h-36 min-[425px]:h-48 md:h-52 lg:h-52 xl:h-52 2xl:h-80"/> 
               <div className={`flex items-center justify-center absolute h-24 sm:h-44 max-[425px]:w-full max-lg:w-3/4 lg:w-[38rem] xl:w-[40rem] 2xl:w-[44rem] text-center ${position == "right" ? "text-center lg:text-right" : "text-center lg:text-left"}`}>
                    <div className={`w-full min-[500px]:w-4/5 sm:w-3/4 lg:w-full max-[425px]:pt-11 min-[425px]:pt-16 lg:pt-0 ${position == "right" ? "lg:pr-16" : "lg:pl-16"}`}>
                        <h1 className='max-sm:text-base text-lg lg:text-xl xl:text-2xl 2xl:text-5xl max-sm:px-2 max-[500px]:px-10 px-6 sm:px-16 2xl:px-0 font-semibold'>{title}</h1>
                        <p className='max-sm:text-xs min-[425px]:text-base lg:text-lg xl:text-xl 2xl:text-4xl max-sm:px-2 px-6 sm:px-16 2xl:px-0 text-wrap'>{description}</p> 
                    </div>
                </div>
            </div>
        </>
    );
  };
  
  export default ShinyTextBoxLong;