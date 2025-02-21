import BartlettGame from "../components/interactive/BartlettGame"
import WaveBottom from "../assets/wave.svg"
import EMI from "../assets/Welcome_EMI.png"
import MeetUpBg from "../assets/meetup_bg.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react"

function GoSpecials() {
  const [progress, setProgress] = useState(0);  
  const gamesection = useRef(0);
  const scrollToGame = () => {
    if (gamesection.current) {
      gamesection.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 20); 
      return () => clearInterval(timer);
    }
  }, [progress]);


  return (
    <div className='font-din text-white  bg-cover hyphens-auto' lang="de" style={{backgroundImage: `url(${MeetUpBg})`}}>
        
        {/*bg-[url(/meetup_highres_bg.png)] 
        <motion.div className="fixed top-0 left-0 w-full h-screen bg-[url(/meetup_highres_bg.png)] flex flex-col justify-center items-center z-10"
            initial={{ opacity: 1, scale: 1 }} animate={{ opacity: 0}} transition={{ duration: 1, delay: 4 }}>
          <div className="text-4xl text-center font-bold pb-20 px-8">
            {text.map((el, i) => (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: i / 3, }} key={i}>
                {el}{" "}
              </motion.span>
            ))}
          </div>
          <div className="w-64 h-2 bg-gray-300 rounded-full">
            <motion.div className="h-full bg-robin-blue rounded-full"
              style={{ width: `${progress}%` }} initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div> */}

        {/* Intro section */}
        <section className="h-fill w-full">
          <motion.div className="flex flex-col md:flex-row items-center justify-center md:h-96" initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1}} transition={{ duration: 2, delay: 0.5 }}>
            <div className="flex flex-col items-end md:w-3/4 lg:w-1/2 text-center md:text-right pt-16 2xl:pt-28 px-8 md:px-0">
               <h1 className="text-lg lg:text-xl 2xl:text-3xl pb-4 mx-auto md:mx-0 font-sans font-light">HUMAIDE gratuliert zu</h1>
               <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold uppercase mx-auto md:mx-0 md:pl-4">10 Jahre<br/>Meet-Up der Medieninformatik!</h1>
               <p className="text-lg lg:text-xl 2xl:text-3xl md:pl-6 lg:pl-0 pt-4 lg:w-2/3 2xl:w-5/6 pb-8 font-sans font-light">
               Wir freuen uns, gemeinsam mit euch feiern zu können! Anlässlich des Jubiläums haben wir mit EMI zusammen ein kleines Spiel 
               vorbereitet. Seid ihr bereit für eine Challenge?
               </p>
               <button onClick={scrollToGame} className="self-center md:self-end border-2 border-white shadow-2xl hover:bg-robin-blue animate-bounce duration-300 shadow-black rounded-full">
                  <FontAwesomeIcon icon="angles-down" size="xl" className="text-white py-2 px-3 "/>
               </button>       
            </div>
            <div className="w-full self-start lg:self-center flex item-center justify-center lg:justify-start md:w-1/2">
              <img src={EMI} className="hrink lg:mx-10 w-3/4 min-[425px]:w-1/2 md:w-fit py-8 md:py-0 px-10 md:px-0 md:h-1/2 lg:h-5/6 md:top-28 lg:bottom-0 md:absolute" />              
            </div>
          </motion.div>
          <img src={WaveBottom} className="h-1/5 object-fill bottom-0" />
        </section>

        {/* Game section */}
        <section ref={gamesection} className="flex flex-col-reverse md:flex-row md:h-screen bg-white dark:bg-white py-12 sm:py-0">
        
          <div className="md:w-1/2 pt-4 sm:pt-6">
            <BartlettGame />             
          </div>
          <div className="h-full lg:h-screen md:w-3/5 lg:w-2/3 flex flex-col items-start justify-center sm:justify-start md:justify-center px-4 min-[360px]:px-8 md:px-4 lg:px-0 md:pr-4 lg:pr-10 xl:mr-16 pt-4 md:pt-10 text-midnight-blue text-sm lg:text-lg 2xl:text-2xl">
            <h1 className="text-base md:text-lg lg:text-2xl 2xl:text-4xl text-wrap font-semibold uppercase pb-2 2xl:pb-4 bg-gradient-to-r from-robin-blue to-green-600 inline-block text-transparent bg-clip-text">Gemeinsam besser!</h1>
            <p className="">
              EMI möchte auch in Zukunft die tollen Leistungen feiern, die ihr über das Semester gemeinsam erarbeitet!
              <strong> Gemeinsam</strong> ist für ihn dabei ein besonders wichtiges Stichwort, denn nur so können Events wie das Meet-Up und
              die hier vorgestellten Projekte überhaupt möglich gemacht werden.
            </p>
            <p className="pt-2 2xl:pt-4">
            Wie wichtig gute Zusammearbeit ist, zeigt auch die KI-Forschung: Allein schneidet KI in Aufgaben zwar teilweise besser ab als wir oder mit uns, aber gemeinsam 
            mit KI sind wir besser als ohne! <em>Mensch und KI können gemeinsam mehr erreichen als alleine – wenn sie integriert arbeiten.</em> EMI möchte das mit einem Spiel testen:
            </p>
            <h1 className="pt-2 2xl:py-4 text-base md:text-lg lg:text-xl 2xl:text-4xl text-wrap font-semibold uppercase bg-gradient-to-r from-robin-blue to-green-600 inline-block text-transparent bg-clip-text">Welchen Score erreichst du?</h1>
            <ul className="list-disc px-4">
              <li>Auf dem Spielfeld befinden sich <strong>100 Kästchen.</strong> <strong>Ziel</strong> ist, über Buttons anzugeben, 
              ob mehr blaue oder grüne Kästchen vorhanden sind.</li>
              <li>Die <strong>Anzahl</strong> an blauen und grünen Kästchen wechselt jede Runde.</li>
              <li>Eine KI gibt dir pro Runde <strong>einen Hinweis</strong>, aber am Ende entscheidest du!</li>
              <li>Am Ende kannst du detaillierte <strong>Auswertung</strong> erhalten!</li>
            </ul>
            <p className="pt-2 2xl:pt-4 sm:pt-2 lg:pt-0 self-center text-midnight-blue text-xs 2xl:text-lg">Quelle & Spielgrundlage: <a href="https://doi.org/10.1177/0018720817700258" target="_blank">
                Bartlett, M. L., & McCarley, J. S. (2017). Benchmarking Aided Decision Making in a Signal Detection Task. <em>Human factors, 59</em>(6), 881–900. https://doi.org/10.1177/0018720817700258
                </a>
          </p>  
          </div>    
       
        </section>

        {/* Lower bound */}
        <section id="mail" className="h-full bg-cover" style={{backgroundImage: `url(${MeetUpBg})`}}>
        <img src={WaveBottom} className="h-1/5 object-fill rotate-180 bottom-0" />
        <div className="flex items-center justify-center h-full w-full pt-10">
          <div className="bg-white dark:bg-white xl:w-3/5 flex flex-col items-center justify-center text-midnight-blue mx-2 min-[425px]:mx-6 lg:mx-20 2xl:mx-96 py-4 mb-40 xl:mx-48 p-2 md:p-8 rounded-lg shadow-2xl shadow-gray-800">
            <h2 className="w-full mx-auto text-center px-4 md:px-8 py-2 text-base md:text-lg lg:text-xl 2xl:text-3xl text-wrap font-semibold uppercase">Mensch-KI-Integration<br/>für mehr Vertrauen, Effizienz & erfolgreiche Innovation</h2>
            <p className="w-full mx-auto text-center px-2 md:px-8 text-sm lg:text-lg 2xl:text-3xl">Genau das ist die Vision unseres StartUps! Hast du auch Lust deine Ideen und Visonen in die Tat umzusetzen? 
                Dann sprich uns einfach an oder schick uns eine Nachricht! Egal ob du mit uns übers Gründen oder HUMAIDE selbst 
                sprechen möchtest - Wir freuen uns sehr, von dir zu hören!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center py-6">
                <p className="text-base lg:text-lg text-center xl:text-4xl 2xl:text-3xl">
                    <strong>E-Mail: </strong><br/>
                    <a href="mailto:hello@humaide.com">hello@humaide.com</a>
                </p>
                <p className="px-4 py-2 text-silver-grey xl:text-xl 2xl:text-2xl">OR</p>
                <a href="mailto:hello@humaide.com?subject=Kontaktanfrage&body=Hallo%20liebes%20HUMAIDE%20Team,%0D%0A%0D%0Aich%20bin%20auf%20eure%20Website%20gestoßen%20und%20würde%20mich%20sehr%20über%20eine%20Nachricht%20von%20euch%20freuen!%20">
                    <button className="px-3 py-2 rounded-md border-2 bg-robin-blue border-robin-blue hover:border-midnight-blue hover:bg-robin-blue/20 hover:text-midnight-blue duration-300 shadow-md font-semibold text-base lg:text-lg xl:text-xl 2xl:text-3xl xl:px-8 xl:py-4">Send a message!</button>   
                </a>                
              </div>
          </div>            
          </div>
        </section>
    </div>
  )
}

export default GoSpecials