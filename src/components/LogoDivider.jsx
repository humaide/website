
          

function LogoDivider() {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <div className="bg-[url(/bg-test5-dark.svg)] bg-contain w-full h-60 absolute self-start justify-self-start"></div>
            <div className="bg-gradient-to-b from-transparent via-transparent to-[#0C0F1F] w-full h-80 absolute self-start justify-self-start"></div>
            <div className="w-full h-36 lg:h-64 bg-transparent relative"></div>
            <div className="absolute flex flex-col w-full items-center justify-center -mt-52 lg:-mt-[15rem]">
            <div className="absolute w-[12.25rem] h-[12.25rem] lg:w-[20.25rem] lg:h-[20.25rem] bg-sky-100 opacity-100 rounded-full animate-custom-pulse"></div>
            <div className="absolute w-[12.25rem] h-[12.25rem] lg:w-[20.25rem] lg:h-[20.25rem] bg-sky-600 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className="absolute w-[11.5rem] h-[11.5rem] lg:w-[19.5rem] lg:h-[19.5rem] bg-sky-800 rounded-full opacity-45 animate-custom-pulse"></div>
            <div className="absolute w-[10.75rem] h-[10.75rem] lg:w-[18.75rem] lg:h-[18.75rem] bg-[#0c0f1f] rounded-full opacity-45 animate-custom-pulse"></div>
            <img src="/logos/humaide-logo-default1.svg" alt="Humaide Logo with shine effect" className="w-[10rem] lg:w-[18rem] 2xl:1/5 absolute z-50 rounded-full "/>    
        </div>
        </div>
    );
  };
  
  export default LogoDivider;