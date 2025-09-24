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

      while (checkColorCloseness(pixels)) {
        pixels.sort(() => Math.random() - 0.5); // Nochmal mischen
      }

      return { pixels, isGreenMajority: greenCount > totalPixels / 2 };
    };

    // restrain pixels of same color next to each other to 10 
    function checkColorCloseness(pixels) {
      let count = 1;
      for (let i = 1; i < pixels.length; i++) {
        if (pixels[i] === pixels[i - 1]) {
          count++;
          if (count > 10) return true;
        } else {
          count = 1;
        }
      }
      return false;
    }

    const [round, setRound] = useState(1);

    // ai hints
    const generateAIHint = (isGreenMajority) => {
      const correct = Math.random() < 0.8; // 80% chance of being correct
      //return correct ? (isGreenMajority ? "Ich schlage grün vor." : "Ich schlage blau vor.") : (isGreenMajority ? "Ich schlage blau vor." : "Ich schlage grün vor.");

      return correct ? (round <= 2 ? "Du bist zuerst dran!" : isGreenMajority ? "Ich schlage gelb vor." : "Ich schlage blau vor.") : (round <= 2 ?  "Du bist zuerst dran!" : isGreenMajority ? "Ich schlage blau vor." : "Ich schlage gelb vor.");
    };

    // game content
    const [pixelGrid, setPixelGrid] = useState(generatePixelGrid());
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState(0);
    const [aiHint, setAiHint] = useState(generateAIHint(pixelGrid.isGreenMajority));
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
      if (round >= 3 && ((aiHint.includes("gelb") && pixelGrid.isGreenMajority) || (aiHint.includes("blau") && !pixelGrid.isGreenMajority))) {
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
      if (round >= 6) {
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
          if (round == 3) {
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
        if (updatedCount <= 6) {
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
      <div className="flex flex-col text-charcoal font-din mx-auto">

        {/* Interactive Pixel Guessing Game */}
        <div className="flex flex-col items-center max-w-max rounded-md shadow-lg md:shadow-2xl shadow-gray-400 mt-4 lg:mt-0">
          <div className="flex flex-col items-center p-4 sm:p-6 bg-charcoal rounded-t-lg shadow-md">
            {/* Stats */}
            <div className="flex w-full justify-between items-center mb-4 text-white">
                <div className="flex items-center">
                    <FontAwesomeIcon icon="hashtag" size="lg" className="text-white pr-2"/>
                    <h2 className="text-xl 2xl:text-4xl font-light">{round} / 6</h2>                   
                </div>
                <div className={`flex items-center ${countdown <= 3 ? "text-red-500": "text-white"}`}>
                    <FontAwesomeIcon icon="hourglass" size="lg" className="pr-2"/>
                    <h2 className="text-xl 2xl:text-4xl font-light">{countdown}s</h2>                   
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon="star" size="lg" className="text-white pr-2"/>
                    <h2 className="text-xl 2xl:text-4xl font-light">{score}</h2>                  
                </div>                
            </div>
            {/* Gamefield */}
            <div className="grid grid-cols-75 gap-0 p-2 bg-white rounded-md w-72 h-72 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96">
              {pixelGrid.pixels.map((color, index) => (
                <div key={index} className="w-[0.2rem] h-[0.2rem] lg:w-[0.255rem] lg:h-[0.255rem] 2xl:w-1 2xl:h-1" style={{ backgroundColor: color === "green" ? "#FCFF35" : "#4D48E2" }}></div>
              ))}
              {/* Overlay game end */}
              {showOverlay && (
              <div className="flex flex-col w-64 h-64 self-center justify-self-center items-center justify-center bg-black/70 text-lg absolute rounded-md">
                  <div className="flex w-72 flex-col p-2 items-center justify-center bg-slate-100 rounded-lg mx-2 shadow-2xl shadow-gray-800">
                    <p className="font-semibold text-xl p-2">Auswertung</p>
                    <div className="flex justify-evenly w-full py-2 font-light">
                      <p className="font-semibold text-lg">DU:</p>
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon="star" size="sm" className="text-yellow-500 pr-1"/>
                        <p className="font-semibold text-lg">{score} / 6</p>                      
                      </div>
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon="check" size="sm" className="text-green-500 pr-1"/>
                        <p className="font-semibold text-lg">{((score / (round)) * 100).toFixed(0)}%</p>                         
                      </div>  
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon="hourglass" size="sm" className="text-red-500 pr-1"/>
                        <p className="font-semibold text-lg">{averageTime}s*</p>                         
                      </div>                      
                    </div>
                    <div className="flex justify-evenly w-full pb-2">
                      <p className="font-semibold text-lg">KI:</p>
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon="star" size="sm" className="text-yellow-500 pr-2"/>
                        <p className="font-semibold text-lg">{correctHints} / 3</p>                      
                      </div>
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon="check" size="sm" className="text-teal-500 pr-2"/>
                        <p className="font-semibold text-lg">{((correctHints / (round/2)) * 100).toFixed(0)}%</p>                         
                      </div>  
                      <div className="flex items-center justify-center">                     
                      </div>                      
                    </div>
                    <p className="text-center text-base px-4 font-semibold">Wir sind neugierig:</p> 
                    <p className="text-center text-sm px-4 pb-2">Hat der Hinweis darauf, wie oft die KI in den ersten Runden richtig lag, deine Entscheidungsstrategie beeinflusst?</p> 
                    {/* <a href="mailto:hello@humaide.com?subject=Meet-Up%20Game&body=Hey%20liebes%20HUMAIDE%20Team,%0D%0A%0D%0Aich%20habe%20auf%20dem%20Meet-Up%20an%20eurem%20Spiel%20teilgenommen.%20Der%20Hinweis%20zur%20Reliabilität%20hatte%20einen/keinen%20Einfluss%20auf%20meine%20Strategie:%20(Erzähl%20uns%20gerne%20mehr%20von%20deiner%20Strategie,%20wenn%20du%20magst!)">
                      <button className="w-full my-1 px-3 py-2 rounded-md border-2 bg-robin-blue border-robin-blue hover:bg-robin-blue/20 hover:border-charcoal duration-300 shadow-md font-semibold text-base xl:text-lg 2xl:text-3xl 2xl:px-8 2xl:py-4">
                        <FontAwesomeIcon icon="envelope" size="sm" className="pr-2"/>
                        Erzähl uns davon!
                      </button>   
                    </a>  */}
                    <button onClick={() => window.location.reload()}  className="pl-4 py-2 pr-3 duration-300 bg-pastel-blue hover:bg-pastel-blue/75 text-charcoal rounded-full shadow-md shadow-gray-400/60">
                      <span className="text-base">Nochmal</span>
                      <FontAwesomeIcon icon="play" size="sm" className="text-charcoal pl-2 pr-1"/>
                    </button> 
                    <p className="text-xs py-2 italic">*Antwortzeit im Durchschnitt pro Runde</p>               
                  </div>
              </div>)}
              {/* Overlay game start */}
              {!isStarted && (
              <div className="flex flex-col w-72 h-72 sm:w-80 sm:h-80 self-center justify-self-center items-center justify-center bg-black/70 text-charcoal text-lg absolute rounded-md">
                <div className="flex flex-col p-2 items-center justify-center bg-white rounded-lg w-[90%] h-[90%] sm:w-[95%] sm:h-[95%]">
                    <p className="text-center px-4 py-2 font-semibold">Bist du bereit?</p> 
                    <p className="text-center text-sm font-light px-4 pb-2">Tipp: Die KI hat eine ca. 80%-ige Wahrscheinlichkeit richtig zu liegen, d.h. ein Hinweis kann auch falsch sein.</p> 
                    <button onClick={handleStartGame} className="pl-4 py-2 pr-3 duration-300 bg-pastel-blue hover:bg-pastel-blue/75 text-charcoal rounded-full shadow-md shadow-gray-400/60">
                      <FontAwesomeIcon icon="play" size="sm" className="text-charcoal pr-1"/>
                    </button>   
                </div> 
              </div>)}
              {/* Overlay game middle */}
              {showInfo && (
              <div className="flex flex-col w-64 h-64 self-center justify-self-center items-center justify-center bg-black/70 text-midnight-blue text-lg absolute rounded-md">
                  <div className="flex flex-col p-2 items-center justify-center bg-white rounded-lg w-[95%] h-[95%]">
                    <p className="font-semibold py-2">Halbzeit!</p>
                    <p className="text-center text-sm font-light pb-2 px-3">Tipp: Für die letzten 3 Runden erhältst du zusätzlich einen KI Hinweis.</p> 
                    <button onClick={continueAfterInfo} className="pl-4 py-2 pr-3 duration-300 bg-pastel-blue hover:bg-pastel-blue/75 text-charcoal rounded-full shadow-md shadow-gray-400/60">
                      <FontAwesomeIcon icon="play" size="sm" className="text-charcoal pr-1"/>
                    </button> 
                  </div>
              </div>)}

            </div>
            {/* Buttons */}
            <div className="flex justify-between mt-4 space-x-4 w-full 2xl:text-2xl">
              <button disabled={isDisabled} className="w-full px-7 py-2 bg-tangerine hover:bg-tangerine/75 duration-300 rounded-md shadow-md" onClick={() => handleGuess("green")}>Gelb</button>
              <button disabled={isDisabled} className="w-full px-7 py-2 bg-soft-blue hover:bg-soft-blue/75 hover:text-white duration-300 rounded-md shadow-md" onClick={() => handleGuess("blue")}>Blau</button>
            </div>
            {/* Feedback */}
            {feedback && 
              <div className={`z-50 mt-4 text-white absolute rounded-lg px-4 py-2 ${feedback == "Richtig!" ? "bg-teal-600" : "bg-red-500"}`}>
                <p className="text-xl font-bold">{feedback}
                </p>                
              </div>
            }
          </div>
          {/* AI Hint Section */}
          <div className="flex w-full bg-pastel-blue border border-charcoal rounded-b-md p-2">
            <FontAwesomeIcon icon="robot" size="xl" className="bg-charcoal/15 border-2 border-charcoal rounded-full self-center py-3 px-2 mr-2"/>            
            <div className="px-4 py-2 bg-white text-midnight-blue rounded-tl-none rounded-lg shadow-md w-full text-left">
                <h3 className="text-sm 2xl:text-2xl font-semibold">KI HINWEIS</h3>
                <p className="text-md 2xl:text-2xl font-light">{aiHint}</p>
            </div>            
          </div>

        </div> 
      </div>
    );  
  };
  
  export default BartlettGame;