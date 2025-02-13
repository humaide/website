import { Link  } from "react-router-dom";
function Footer() {
    return (
      <footer className="flex flex-col text-white items-center justify-center w-full">

        <div className="w-full px-4 border-b-[0.25px] border-robin-blue self-center rounded-xs"></div>
        <div className="w-full flex items-center justify-between bg-midnight-blue px-8">
            
            <div className="flex">
              <img src="copyright-regular.svg" alt="copyright icon" className="w-4"/>
              <p className="font-light uppercase px-2 py-2">2025 humaide</p>              
            </div>               
            <Link  to="/contact" className="hover:text-robin-blue duration-300 transform hover:scale-110 font-semibold">Legal Notice</Link >
            <img src="logos/humaide-logo.svg" alt="Humaide Logo" className="h-8 w-8 my-4"/>
        </div>

      </footer>
    );
  };
  
  export default Footer;