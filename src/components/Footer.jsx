import { Link  } from "react-router-dom";
function Footer() {
    return (
      <footer className="flex flex-col text-white items-center justify-center w-full font-din flex-grow text-lg 2xl:text-xl 3xl:text-3xl 4xl:text-5xl ">

        <div className="w-full px-4 border-b-[0.25px] border-indigo-500 self-center rounded-xs"></div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between bg-[#0C0F1F] py-10 px-8">
                  
            <div className="w-fit flex flex-col lg:flex-row items-center p-4 text-white text-center font-light text-lg bg-[#0C0F1F]">
            <img src="logos/humaide-logo-default.svg" alt="Humaide Logo" className="h-8 w-8 mx-4"/> 
            <div className="flex">
              <img src="copyright-regular.svg" alt="copyright icon" className="w-4"/>
              <p className="font-light uppercase px-2 py-2 xl:py-6 2xl:py-10">2025 humaide</p>   
            </div> 
            </div>  
            <Link to="/contact" className="hover:text-sky-500 font-light duration-300 transform hover:scale-110">Legal Notice</Link >    
            <div className="w-fit flex flex-col lg:flex-row items-center p-4 text-white text-center font-light text-lg bg-[#0C0F1F]">
              <p>Funded within the accelerator program of</p>
              <img src="logos/GW49-logo-blue.svg" alt="gateway 49 Logo" className="w-20 self-center"/>  
            </div>    
        </div>
        
      </footer>
    );
  };
  
  export default Footer;