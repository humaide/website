import { Link  } from "react-router-dom";
function Footer() {
    return (
      <footer className="flex flex-col text-white items-center justify-center w-full font-din flex-grow xl:text-lg 2xl:text-xl 3xl:text-3xl 4xl:text-5xl ">

        <div className="w-full px-4 border-b-[0.25px] border-robin-blue self-center rounded-xs"></div>
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between bg-midnight-blue px-8">
            
            <div className="flex">
              <img src="copyright-regular.svg" alt="copyright icon" className="w-4"/>
              <p className="font-light uppercase px-2 py-2 xl:py-6 2xl:py-10">2025 humaide</p>              
            </div>       
            <img src="logos/humaide-logo-default.svg" alt="Humaide Logo" className="h-8 w-8 my-4 hidden md:block"/>        
            <Link to="/contact" className="hover:text-robin-blue duration-300 transform hover:scale-110">Legal Notice</Link >
            <img src="logos/humaide-logo-default.svg" alt="Humaide Logo" className="h-8 w-8 my-4 block md:hidden"/>
        </div>

      </footer>
    );
  };
  
  export default Footer;