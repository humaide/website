function LogoDivider() {
    return (
        <div className="flex flex-col w-full items-center justify-center -mt-24">
            <div className="w-full h-64 bg-gray-200 relative">
                {/* <div className="w-full h-72 bg-gray-200"></div> */}
                <img src="/placeholder.jpg" alt="Humaide Logo with shine effect" className="w-full h-72 bg-cover"/>
                <div className="w-full h-16 bg-robin-blue transform rotate-180 absolute -top-16" style={{ clipPath: 'polygon(0 0, 100% 0%, 0 100%)' }}></div>
                <div className="w-full h-16 bg-robin-blue transform rotate-0 absolute -bottom-24" style={{ clipPath: 'polygon(0 0, 100% 0%, 0 100%)' }}></div>
            </div>
            <img src="logos/humaide-logo-shine.svg" alt="Humaide Logo with shine effect" className="w-1/3 absolute -mt-20"/>
        </div>
    );
  };
  
  export default LogoDivider;