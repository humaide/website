function LogoDivider() {
    return (
        <div className="flex flex-col w-full items-center justify-center -mt-36 lg:-mt-24">
            <div className="w-full h-36 lg:h-64 bg-gray-200 relative">
                <img src="/placeholder.jpg" alt="Humaide Logo with shine effect" className="w-full h-36 lg:h-72 xl:h-96 bg-cover"/>
                <div className="w-full h-16 bg-robin-blue transform rotate-180 absolute -top-16" style={{ clipPath: 'polygon(0 0, 100% 0%, 0 100%)' }}></div>
                <div className="w-full h-16 bg-robin-blue transform rotate-0 absolute lg:-bottom-24 xl:-bottom-48 z-2" style={{ clipPath: 'polygon(0 0, 100% 0%, 0 100%)' }}></div>
            </div>
            <img src="/logos/humaide-logo-shine.svg" alt="Humaide Logo with shine effect" className="w-3/4 min-[450px]:w-3/5 sm:w-1/2 lg:w-2/5 2xl:1/4 absolute z-50"/>    
        </div>
    );
  };
  
  export default LogoDivider;