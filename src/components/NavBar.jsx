import { Link  } from "react-router-dom";
function NavBar() {
    return (
      <nav className="py-2 px-4 flex flex-col bg-midnight-blue w-full">

        <div className="flex justify-between items-center">
            <div className="flex items-center">
            <img src="logos/humaide-logo.svg" alt="Humaide Logo" className="h-10 w-10"/>
            </div>
    
            <div className="flex space-x-8 text-white">
            <Link  to="/" className="hover:text-robin-blue duration-300 transform hover:scale-110"> Home</Link>
            <a href="#about" className="hover:text-robin-blue duration-300 transform hover:scale-110">
                About
            </a>
            <a href="#about" className="hover:text-robin-blue duration-300 transform hover:scale-110">
                Solutions
            </a>
            <a href="#about" className="hover:text-robin-blue duration-300 transform hover:scale-110">
                Team
            </a>
            <a href="#about" className="hover:text-robin-blue duration-300 transform hover:scale-110">
                Resources
            </a>
            </div>
    
            <div>
            <a href="mailto:hello@humaide.com?subject=Kontaktanfrage?body=Hallo%20liebes%20HUMAIDE%20Team,%0D%0A%0D%0Aich%20bin%20auf%20eure%20Website%20gestoßen%20und%20würde%20mich%20sehr%20über%20eine%20Nachricht%20von%20euch%20freuen!%20" className="hover:text-robin-blue duration-300 transform hover:scale-110">
                <button className="bg-robin-blue text-midnight-blue font-semibold px-4 py-1 rounded-md hover:bg-midnight-blue hover:text-robin-blue duration-300 hover:border-2 hover:border-robin-blue">
                    Contact us
                </button>
            </a>
            </div>            
        </div>

        <div className="w-full border-b-[0.25px] border-robin-blue self-center pt-2 rounded-xs"></div>
        
      </nav>
    );
  };
  
  export default NavBar;