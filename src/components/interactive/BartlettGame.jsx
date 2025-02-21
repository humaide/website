import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BartlettGame() {
    const gridSize = 10; // Creates a 10x10 square grid
    const totalPixels = gridSize * gridSize;
  
    const generatePixelGrid = () => {
      const greenCount = Math.floor(totalPixels / 2 + (Math.random() * 10 - 5)); // Slightly more green or blue
      const pixels = Array.from({ length: totalPixels }, (_, i) => (i < greenCount ? "green" : "blue"));
      pixels.sort(() => Math.random() - 0.5); // Shuffle pixels
      return { pixels, isGreenMajority: greenCount > totalPixels / 2 };
    };
  
    const generateAIHint = (isGreenMajority) => {
      const correct = Math.random() < 0.8; // 80% chance of being correct
      return correct ? (isGreenMajority ? "Ich schlage grün vor." : "Ich schlage blau vor.") : (isGreenMajority ? "Ich schlage blau vor." : "Ich schlage grün vor.");
    };
  
    const [pixelGrid, setPixelGrid] = useState(generatePixelGrid());
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState(0);
    const [aiHint, setAiHint] = useState(generateAIHint(pixelGrid.isGreenMajority));
    const [round, setRound] = useState(1);
    const [totalRounds, setTotalRound] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
  
    const handleGuess = (guess) => {
      setIsDisabled(true);   
      incrementRounds() 
      console.log(round)
      console.log(totalRounds)
      if (round >= 10) {
        setShowOverlay(true);
        return;
      } else {
        let newScore = score;
        if ((guess === "green" && pixelGrid.isGreenMajority) || (guess === "blue" && !pixelGrid.isGreenMajority)) {
          setFeedback("Richtig!");
          newScore += 1;
        } else {
          setFeedback("Falsch!");
          newScore -= 1;
        }
        setScore(newScore);
        setTimeout(() => {
          const newGrid = generatePixelGrid();
          setPixelGrid(newGrid);
          setAiHint(generateAIHint(newGrid.isGreenMajority));
          setFeedback(null);
          setIsDisabled(false);       
        }, 1000);
      //incrementRounds();          
      }
    };

    const incrementRounds = () => {
        const updatedCount = round + 1;
        setTotalRound(updatedCount);
        if (updatedCount <= 10) {
            setRound(updatedCount);
        }
    }
  
    return (
      <div className="flex flex-col items-center justify-center h-full w-full bg-white text-white font-din">

        {/* Interactive Pixel Guessing Game */}
        <div className="flex flex-col items-center max-w-max rounded-md shadow-lg md:shadow-2xl shadow-gray-400">
          <div className="flex flex-col items-center p-6 bg-midnight-blue rounded-t-lg shadow-md">
            {/* Stats */}
            <div className="flex w-full justify-between items-center mb-4">
                <div className="flex items-center">
                    <FontAwesomeIcon i icon="hashtag" size="lg" className="text-white pr-2"/>
                    <h2 className="text-xl 2xl:text-4xl font-semibold">{round} / 10</h2>                    
                </div>
                <h2 className="text-xl 2xl:text-4xl font-semibold">Score: {score}</h2>                
            </div>
            {/* Gamefield */}
            <div className="grid grid-cols-10 gap-0.5 p-2 bg-white rounded-md w-64 h-64 2xl:w-96 2xl:h-96">
              {pixelGrid.pixels.map((color, index) => (
                <div key={index} className="w-5 h-5 2xl:w-8 2xl:h-8" style={{ backgroundColor: color === "green" ? "#99FF65" : "#00D2D2" }}></div>
              ))}
              {/* Overlay game end */}
              {showOverlay && (
              <div className="flex flex-col w-64 h-64 self-center justify-self-center items-center justify-center bg-black/70 text-midnight-blue text-lg absolute">
                  <div className="flex flex-col p-2 items-center justify-center bg-robin-blue rounded-lg mx-2 w-full">
                    <p className="font-semibold uppercase pt-4">Dein Score:</p>
                    <p className="font-semibold text-3xl">{score}</p>
                    <p className="text-center px-4">Willst du noch mehr erfahren?</p> 
                    <form className="flex items-center justify-center w-full mt-2">
                      <input type="text" id="email" name="email" placeholder="example@email.com" className="w-5/6 px-4 py-2 bg-white border-2 border-midnight-blue rounded-lg text-base shadow-lg shadow-gray-600/60"></input>          
                      <button className="w-1/6 px-2 bg-midnight-blue border-2 border-midnight-blue hover:bg-robin-blue rounded-lg shadow-lg shadow-gray-600/60 ml-1">
                        <FontAwesomeIcon icon="arrow-right" size="lg" className="text-white duration-300 py-2"/>
                      </button>
                    </form>               
                  </div>
              </div>)}
            </div>
            {/* Buttons */}
            <div className="flex justify-between mt-4 space-x-4 w-full 2xl:text-2xl">
              <button disabled={isDisabled} className="w-full px-7 py-2 bg-screaming-green hover:bg-screaming-green/75 hover:text-white duration-300 text-[#0A4A5F] rounded-md shadow-md" onClick={() => handleGuess("green")}>Grün</button>
              <button disabled={isDisabled} className="w-full px-7 py-2 bg-robin-blue hover:bg-robin-blue/75 hover:text-white duration-300 text-[#0A4A5F] rounded-md shadow-md" onClick={() => handleGuess("blue")}>Blau</button>
            </div>
            {/* Feedback */}
            {feedback && 
              <div className={`mt-4 text-white absolute rounded-lg px-4 py-2 ${feedback == "Richtig!" ? "bg-teal-600" : "bg-bittersweet-red"}`}>
                <p className="text-xl font-bold">{feedback}
                </p>                
              </div>
            }
          </div>
          {/* AI Hint Section */}
          <div className="flex w-full bg-gradient-to-r from-robin-blue to-screaming-green rounded-b-md p-2">
            <img src="logos/humaide-logo-default.svg" className="w-12 h-12 mr-2" />
            <div className="px-4 py-2 bg-white text-midnight-blue rounded-tl-none rounded-lg shadow-md w-full text-left">
                <h3 className="text-sm 2xl:text-2xl font-semibold">KI HINWEIS</h3>
                <p className="text-md 2xl:text-2xl font-medium">{aiHint}</p>
            </div>            
          </div>

        </div> 
      </div>
    );  
  };
  
  export default BartlettGame;