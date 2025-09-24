import BartlettGame from "../components/interactive/BartlettGame"
import { useRef, useEffect, useState } from "react";

function GoSpecials() {
  const [progress, setProgress] = useState(0);  
  const gamesection = useRef(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 20); 
      return () => clearInterval(timer);
    }
  }, [progress]);


  return (
    <section ref={gamesection} className="flex flex-col-reverse md:flex-row items-center justify-center h-screen bg-white dark:bg-white py-12 sm:py-0">
      <BartlettGame /> 
    </section>
  )
}

export default GoSpecials