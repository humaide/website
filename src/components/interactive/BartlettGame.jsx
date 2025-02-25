import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BartlettGame() {
    // game field setup
    const gridSize = 75;
    const totalPixels = gridSize * gridSize;

    const generatePixelGrid = () => {
      const greenCount = Math.floor(totalPixels / 2 + (Math.random() * 10 - 5)); // Slightly more green or blue
      const pixels = Array.from({ length: totalPixels }, (_, i) => (i < greenCount ? "green" : "blue"));
      pixels.sort(() => Math.random() - 0.5); // Shuffle pixels
      return { pixels, isGreenMajority: greenCount > totalPixels / 2 };
    };
    
    // ai hints
    const generateAIHint = (isGreenMajority) => {
      const correct = Math.random() < 0.8; // 80% chance of being correct
      return correct ? (isGreenMajority ? "Ich schlage grün vor." : "Ich schlage blau vor.") : (isGreenMajority ? "Ich schlage blau vor." : "Ich schlage grün vor.");
    };

    // game content
    const [pixelGrid, setPixelGrid] = useState(generatePixelGrid());
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState(0);
    const [aiHint, setAiHint] = useState(generateAIHint(pixelGrid.isGreenMajority));
    const [round, setRound] = useState(1);
    const [isDisabled, setIsDisabled] = useState(true);
    const [correctHints, setCorrectHints] = useState(0);
    // game start/end
    const [isStarted, setIsStarted] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    // timer
    const [seconds, setSeconds] = useState(0);
    const [isTimerActive, setTimerIsActive] = useState(false);
    const [savedRoundTimes, setSavedRoundTimes] = useState([]);
    const [averageTime, setAverageTime] = useState(0);   
    const [countdown, setCountdown] = useState(10);    
    
    // handle guess
    const handleGuess = (guess) => {
      // save time needed for answer and disable buttons for input
      saveRoundTime();
      setIsDisabled(true);
      setCountdown(10);
      // count correct guesses from the ai
      if ((aiHint.includes("grün") && pixelGrid.isGreenMajority) || (aiHint.includes("blau") && !pixelGrid.isGreenMajority)) {
        const updated = correctHints + 1
        setCorrectHints(updated);
      }
      // set new round
      incrementRounds(); 
      // check for end
      let newScore = score;
      if ((guess === "green" && pixelGrid.isGreenMajority) || (guess === "blue" && !pixelGrid.isGreenMajority)) {
        setFeedback("Richtig!");
        newScore += 1;
      } else if (guess === "none") {
        setFeedback("Zu spät!");
        newScore += 0;
      } else {
        setFeedback("Falsch!");
        newScore += 0; //newScore -= 1;
      }
      setScore(newScore);   

      // determine feedback and score   
      if (round >= 10) {
        handleGameEnd();
        return;
      } else {
        // reset for new round
        setTimeout(() => {          
          const newGrid = generatePixelGrid();
          setPixelGrid(newGrid);
          setAiHint(generateAIHint(newGrid.isGreenMajority));
          setFeedback(null);
          setIsDisabled(false);   
          setTimerIsActive(true);    
          if (round == 5) {
            setShowInfo(true);
            setTimerIsActive(false);
            setIsDisabled(true);
          }        
        }, 1000);  
        

      }
    };

    // update rounds
    const incrementRounds = () => {
        const updatedCount = round + 1;
        if (updatedCount <= 10) {
            setRound(updatedCount);
        }
    }

    // game start
    const handleStartGame = () => {
      setIsDisabled(false);
      setIsStarted(true);
      setTimerIsActive(true);
    }

    // game end
    const handleGameEnd = () => {
      //generateDetails();
      setTimeout(() => {
        setFeedback(null);
      }, 1000);
      setShowOverlay(true);
      setAverageTime(calculateAverage(savedRoundTimes));
    }

    // round timing
    const saveRoundTime = () => {
      setSavedRoundTimes([...savedRoundTimes, seconds]);
      setSeconds(0);
      setTimerIsActive(false);
    };

    // calculate average of values from an array
    const calculateAverage = (array) => {
      const sum = array.reduce((acc, value) => acc + value, 0);
      const average = sum / array.length;
      return average.toFixed(1);
    }

    const continueAfterInfo = () => {
      setShowInfo(false);
      setTimerIsActive(true);
      setIsDisabled(false);
    }

    // time handling
    useEffect(() => {
      let interval = null;
      if (isTimerActive && countdown > 0) {
        interval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
          setCountdown((prevTime) => prevTime - 1);
        }, 1000);
      } else if (!isTimerActive && seconds !== 0 && countdown > 0) {
        clearInterval(interval);
      } else if (countdown === 0) {
        handleGuess("none");
      }
      // cleanup
      return () => clearInterval(interval);
    }, [isTimerActive, seconds, countdown]);
  
    return (
      <div className="flex flex-col items-center justify-center h-full w-full bg-white text-white font-din">

        {/* Interactive Pixel Guessing Game */}
        <div className="flex flex-col items-center max-w-max rounded-md shadow-lg md:shadow-2xl shadow-gray-400">
          <div className="flex flex-col items-center p-6 bg-midnight-blue rounded-t-lg shadow-md">
            {/* Stats */}
            <div className="flex w-full justify-between items-center mb-4">
                <div className="flex items-center">
                    <FontAwesomeIcon icon="hashtag" size="lg" className="text-white pr-2"/>
                    <h2 className="text-xl 2xl:text-4xl font-semibold">{round} / 10</h2>                   
                </div>
                <div className={`flex items-center ${countdown <= 3 ? "text-bittersweet-red": "text-white"}`}>
                    <FontAwesomeIcon icon="hourglass" size="lg" className="pr-2"/>
                    <h2 className="text-xl 2xl:text-4xl font-semibold">{countdown}s</h2>                   
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon="star" size="lg" className="text-white pr-2"/>
                    <h2 className="text-xl 2xl:text-4xl font-semibold">{score}</h2>                  
                </div>                
            </div>
            {/* Gamefield */}
            <div className="grid grid-cols-75 gap-0 p-2 bg-white rounded-md w-64 h-64 2xl:w-96 2xl:h-96">
              {pixelGrid.pixels.map((color, index) => (
                <div key={index} className="w-[0.2rem] h-[0.2rem] 2xl:w-1 2xl:h-1" style={{ backgroundColor: color === "green" ? "#99FF65" : "#00D2D2" }}></div>
              ))}
              {/* Overlay game end */}
              {showOverlay && (
              <div className="flex flex-col w-64 h-64 self-center justify-self-center items-center justify-center bg-black/70 text-midnight-blue text-lg absolute">
                  <div className="flex w-72 flex-col p-2 items-center justify-center bg-slate-100 rounded-lg mx-2 shadow-2xl shadow-gray-800">
                    <p className="font-semibold text-xl p-2">Auswertung</p>
                    <div className="flex justify-evenly w-full py-2">
                      <p className="font-semibold text-lg">DU:</p>
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon="star" size="sm" className="text-yellow-500 pr-1"/>
                        <p className="font-semibold text-lg">{score}</p>                      
                      </div>
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon="check" size="sm" className="text-green-500 pr-1"/>
                        <p className="font-semibold text-lg">{((score / (round)) * 100).toFixed(0)}%</p>                         
                      </div>  
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon="hourglass" size="sm" className="text-bittersweet-red pr-1"/>
                        <p className="font-semibold text-lg">{averageTime}s*</p>                         
                      </div>                      
                    </div>
                    <div className="flex justify-evenly w-full pb-2">
                      <p className="font-semibold text-lg">KI:</p>
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon="star" size="sm" className="text-yellow-500 pr-2"/>
                        <p className="font-semibold text-lg">{correctHints}</p>                      
                      </div>
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon="check" size="sm" className="text-teal-500 pr-2"/>
                        <p className="font-semibold text-lg">{((correctHints / (round)) * 100).toFixed(0)}%</p>                         
                      </div>  
                      <div className="flex items-center justify-center">
{/*                         <FontAwesomeIcon icon="hourglass" size="sm" className="text-midnight-blue pr-2"/>
                        <p className="font-semibold text-xl">{averageTime}s*</p>    */}                      
                      </div>                      
                    </div>
                    <p className="text-center text-base px-4 font-semibold">Wir sind neugierig:</p> 
                    <p className="text-center text-base px-4">Hat der Hinweis in Runde 15 deine Entscheidungsstrategie beeinflusst?</p> 
{/*                     <div className="flex items-center justify-center w-full mt-2">
                      <input type="text" id="email" name="email" placeholder="example@email.com" className="w-5/6 px-4 py-2 bg-white border-2 border-midnight-blue rounded-lg text-base shadow-lg shadow-gray-600/60"></input>          
                      <button onClick={generateDetails} className="w-1/6 px-2 bg-midnight-blue border-2 border-midnight-blue hover:bg-robin-blue rounded-lg shadow-lg shadow-gray-600/60 ml-1">
                        <FontAwesomeIcon icon="arrow-right" size="lg" className="text-white duration-300 py-2"/>
                      </button>
                    </div> */}
                    <a href="mailto:hello@humaide.com?subject=Meet-Up%20Game&body=Hey%20liebes%20HUMAIDE%20Team,%0D%0A%0D%0Aich%20habe%20auf%20dem%20Meet-Up%20an%20eurem%20Spiel%20teilgenommen.%20Der%20Hinweis%20zur%20Reliabilität%20hatte%20einen/keinen%20Einfluss%20auf%20meine%20Strategie:%20(Erzähl%20uns%20gerne%20mehr%20von%20deiner%20Strategie,%20wenn%20du%20magst!)">
                      <button className="w-full my-1 px-3 py-2 rounded-md border-2 bg-robin-blue text-midnight-blue border-robin-blue hover:bg-robin-blue/20 hover:border-midnight-blue duration-300 shadow-md font-semibold text-base xl:text-lg 2xl:text-3xl 2xl:px-8 2xl:py-4">
                        <FontAwesomeIcon icon="envelope" size="sm" className="pr-2"/>
                        Erzähl uns davon!
                      </button>   
                    </a> 
                    <p className="text-xs py-2 italic">*Antwortzeit im Durchschnitt pro Runde</p>               
                  </div>
              </div>)}
              {/* Overlay game start */}
              {!isStarted && (
              <div className="flex flex-col w-64 h-64 self-center justify-self-center items-center justify-center bg-black/70 text-white text-lg absolute">
                <p className="text-center px-4 pt-2 font-semibold">Bist du bereit?</p> 
                <p className="text-center text-base italic px-4 pb-2">Tipp: Die KI hat eine ca. 80%-ige Wahrscheinlichkeit richtig zu liegen, d.h. ein Hinweis kann auch falsch sein.</p> 
                  <button onClick={handleStartGame} className="px-6 py-2 duration-300 hover:border-robin-blue hover:bg-midnight-blue hover:text-white border-2 border-midnight-blue bg-robin-blue text-midnight-blue rounded-lg shadow-lg shadow-gray-600/60 ml-1">
                    Start
                  </button>      
              </div>)}
              {/* Overlay game end */}
              {showInfo && (
              <div className="flex flex-col w-64 h-64 self-center justify-self-center items-center justify-center bg-black/70 text-midnight-blue text-lg absolute">
                  <div className="flex flex-col p-2 items-center justify-center bg-slate-100 rounded-lg mx-2 w-full">
                    <p className="font-semibold uppercase pt-2">Halbzeit!</p>
                    <p className="text-center pb-2">Noch 15 Runden. Zeit einmal durchzuatmen!</p>
                    <p className="text-center italic px-4">Tipp: Bisher lag die KI in {((correctHints / (round-1)) * 100).toFixed(0)}% der Runden richtig.</p> 
                    <button onClick={continueAfterInfo} className="px-4 py-2 text-white duration-300 bg-midnight-blue border-2 border-midnight-blue hover:bg-robin-blue rounded-lg shadow-lg shadow-gray-600/60 ml-1">
                        Weiter
                    </button>
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
              <div className={`z-50 mt-4 text-white absolute rounded-lg px-4 py-2 ${feedback == "Richtig!" ? "bg-teal-600" : "bg-bittersweet-red"}`}>
                <p className="text-xl font-bold">{feedback}
                </p>                
              </div>
            }
          </div>
          {/* AI Hint Section */}
          <div className="flex w-full bg-gradient-to-r from-robin-blue to-screaming-green rounded-b-md p-2">
            <FontAwesomeIcon icon="robot" size="xl" className="bg-midnight-blue border-2 border-white rounded-full self-center py-3 px-2 mr-2"/>            
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