import { Link  } from "react-router-dom";
import { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink } from 'react-router-hash-link';

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="flex flex-col bg-midnight-blue w-full font-din">
        {/* mobile nav icon */}
        <div className="flex lg:hidden self-end justify-between items-center w-full px-4 py-2">
            <div className="flex items-center">
                <img src="logos/humaide-logo-default.svg" alt="Humaide Logo" className="h-10 w-10"/>
            </div>
            <h1 className="text-3xl font-semibold uppercase text-white">Hum<span className="text-robin-blue">ai</span>de</h1>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                <FontAwesomeIcon icon="bars" size="2xl" className="text-white" />
            </button>
        </div>
        {/* divider (mobile) */}
        <div className="lg:hidden w-full border-b-[0.25px] border-robin-blue self-center rounded-xs"></div>
        {/* nav content */}
        <div className={`w-3/4 lg:w-full bg-cyan-800 lg:bg-transparent self-end h-full lg:h-fit absolute lg:relative flex flex-col lg:flex lg:justify-between items-center text-white flex-grow xl:text-lg 2xl:text-xl 3xl:text-3xl 4xl:text-5xl ${isOpen ? "flex" : "hidden"}`} >
            <div className="w-full flex flex-col lg:flex-row lg:justify-between text-white items-center">
                {/* logo (desktop) */}
                <div className="items-center hidden lg:flex">
                    <img src="logos/humaide-logo-default.svg" alt="Humaide Logo" className="mx-4 h-10 w-10 my-2 2xl:h-14 2xl:w-14 2xl:my-3 3xl:h-20 3xl:w-20 3xl:my-4 4xl:h-28 4xl:w-28 4xl:my-6"/>
                </div>
                {/* closing button (mobile) */}
                <button onClick={() => setIsOpen(!isOpen)} className="flex lg:hidden w-full px-3 py-2 rounded text-black-500 hover:text-black-400 bg-cyan-900">
                    <FontAwesomeIcon icon="xmark" size="2xl" className="text-white ml-auto py-2 px-4" />
                </button>
                {/* menu items */}
                <div className="flex flex-col lg:flex-row lg:justify-between text-white items-center w-full lg:w-fit">
                    <Link onClick={() => setIsOpen(!isOpen)} to="/" className="hover:text-robin-blue duration-300 transform lg:hover:scale-110 py-4 lg:py-2 lg:px-4 border-b-2 lg:border-b-0 border-midnight-blue w-full lg:w-fit text-center"> Home</Link>
                    <HashLink to="/#about" onClick={() => setIsOpen(!isOpen)} className="hover:text-robin-blue duration-300 transform lg:hover:scale-110 py-4 lg:py-2 lg:px-4 border-b-2 lg:border-b-0 border-midnight-blue w-full lg:w-fit text-center">About</HashLink>
                    <HashLink to="/#about" onClick={() => setIsOpen(!isOpen)} className="hover:text-robin-blue duration-300 transform lg:hover:scale-110 py-4 lg:py-2 lg:px-4 border-b-2 lg:border-b-0 border-midnight-blue w-full lg:w-fit text-center">Solutions</HashLink>
                    <HashLink to="/#about" onClick={() => setIsOpen(!isOpen)} className="hover:text-robin-blue duration-300 transform lg:hover:scale-110 py-4 lg:py-2 lg:px-4 border-b-2 lg:border-b-0 border-midnight-blue w-full lg:w-fit text-center" >Team</HashLink>
                    <HashLink to="/#about" onClick={() => setIsOpen(!isOpen)} className="hover:text-robin-blue duration-300 transform lg:hover:scale-110 py-4 lg:py-2 lg:px-4 border-b-2 lg:border-b-0 border-midnight-blue w-full lg:w-fit text-center">Resources</HashLink>                    
                </div>
                <div className="mx-4 my-1 2xl:mx-6 2xl:my-3 4xl:mx-8 4xl:my-5 py-2">
                    <HashLink to="/#contact" className="hover:text-robin-blue duration-300 transform hover:scale-110">
                        <button className="bg-robin-blue text-midnight-blue font-semibold px-4 py-1 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-5 rounded-md hover:bg-midnight-blue hover:text-robin-blue duration-300 border-2 border-robin-blue">
                            Contact us
                        </button>
                    </HashLink>
                </div>
            </div> 
        </div>
        {/* divider (desktop) */}
        <div className="hidden lg:flex w-full border-b-[0.25px] border-robin-blue self-center rounded-xs"></div> 
      </nav>
    );
  };
  
  export default NavBar;