import { useEffect, useState } from "react";
import SquircleContainer from "../Components/SquircleContainer";
import IndividualSquircle from "../Components/IndivdualSquircle";
import Totals from "../Components/Totals";

export default function Results({
  // greenDiameter, //delete
  // redDiameter, //delete
  // blueDiameter, //delete

  gameDiameters,
  setGameDiameters,

  playerGreenDiameter,
  playerRedDiameter,
  playerBlueDiameter,
  greenTotal,
  setGreenTotal,
  redTotal,
  setRedTotal,
  blueTotal,
  setBlueTotal,
  dailyPlay
}) {
  const [greenCounter, setGreenCounter] = useState(0);
  const [redCounter, setRedCounter] = useState(0);
  const [blueCounter, setBlueCounter] = useState(0);

  const [resultsComplete, setResultsComplete] = useState(false)

  useEffect(()=>{
    setGreenTotal(0)
    setRedTotal(0)
    setBlueTotal(0)
  },[])

  useEffect(() => {
    if (greenCounter <= playerGreenDiameter) {
      const timer = setInterval(
        () => setGreenCounter((prevCounter) => prevCounter + 1),
        10
      );
      setGreenTotal(Math.ceil((Math.abs(gameDiameters.green - greenCounter)/330) *100));
      return () => clearInterval(timer);
    }
    if (redCounter <= playerRedDiameter) {
      const timer = setInterval(
        () => setRedCounter((prevCounter) => prevCounter + 1),
        10
      );
      setRedTotal(Math.ceil((Math.abs(gameDiameters.red - redCounter)/330) *100));
      return () => clearInterval(timer);
    }
    if (blueCounter <= playerBlueDiameter) {
      const timer = setInterval(
        () => setBlueCounter((prevCounter) => prevCounter + 1),
        10
      );
      setBlueTotal(Math.ceil((Math.abs(gameDiameters.blue - blueCounter)/330) *100));
      return () => clearInterval(timer);
    }

    if (greenCounter > playerGreenDiameter && redCounter >playerRedDiameter && blueCounter > playerBlueDiameter) {
      setResultsComplete(true)
    }
  }, [blueCounter, greenCounter, redCounter]);

  useEffect(()=> {
    if(dailyPlay && resultsComplete) {
      if(localStorage.length === 1) {
        localStorage.setItem("green",(JSON.stringify({})))
        localStorage.setItem("red",JSON.stringify({}))
        localStorage.setItem("blue",JSON.stringify({}))
      }
        let greenLocalStorage = JSON.parse(localStorage.green)
        let redLocalStorage = JSON.parse(localStorage.red)
        let blueLocalStorage = JSON.parse(localStorage.blue)

       handleSetStorage("green", greenTotal, greenLocalStorage)
       handleSetStorage("red", redTotal, redLocalStorage)
       handleSetStorage("blue", blueTotal, blueLocalStorage)
    }
  },[resultsComplete])

  function handleSetStorage(colorString, colorTotal, colorLocalStorage) {
    if (colorTotal === 0 ) {
      !colorLocalStorage.zero ? colorLocalStorage.zero = 1 : colorLocalStorage.zero += 1
    } else if (colorTotal > 0  && colorTotal < 11 ) {
      !colorLocalStorage.ten ? colorLocalStorage.ten = 1 : colorLocalStorage.ten += 1  
    } else if (colorTotal > 10  && colorTotal < 21 ) {
      !colorLocalStorage.twenty ? colorLocalStorage.twenty = 1 : colorLocalStorage.twenty += 1
    } else if (colorTotal > 20  && colorTotal < 31 ) {
      !colorLocalStorage.thirty ? colorLocalStorage.thirty = 1 : colorLocalStorage.thirty += 1
    } else if (colorTotal > 30  && colorTotal < 41 ) {
      !colorLocalStorage.forty ? colorLocalStorage.forty = 1 : colorLocalStorage.forty += 1
    } else if (colorTotal > 40  && colorTotal < 51 ) {
      !colorLocalStorage.fifty ? colorLocalStorage.fifty = 1 : colorLocalStorage.fifty += 1
    } else if (colorTotal > 50  && colorTotal < 61 ) {
      !colorLocalStorage.sixty ? colorLocalStorage.sixty = 1 : colorLocalStorage.sixty += 1
    } else if (colorTotal > 60  && colorTotal < 71 ) {
      !colorLocalStorage.seventy ? colorLocalStorage.seventy= 1 : colorLocalStorage.seventy += 1
    } else if (colorTotal > 70  && colorTotal < 81 ) {
      !colorLocalStorage.eighty ? colorLocalStorage.eighty= 1 : colorLocalStorage.eighty += 1
    } else if (colorTotal > 80  && colorTotal < 91 ) {
      !colorLocalStorage.ninety ? colorLocalStorage.ninety = 1 : colorLocalStorage.ninety += 1
    } else if (colorTotal > 90  && colorTotal < 101 ) {
      !colorLocalStorage.hundred ? colorLocalStorage.hundred = 1: colorLocalStorage.hundred += 1     
    }
    localStorage.setItem(colorString, JSON.stringify(colorLocalStorage))
  }
  
  return (
    <div className="d-flex flex-column justify-content:center align-items-center pt-3">
      <h1 className="display-1 mt-2">Results</h1>
      <SquircleContainer>
        <IndividualSquircle
          diameter={gameDiameters.green}
          color={"green"}
          borderType={"solid"}
        />
        <IndividualSquircle
          diameter={gameDiameters.red}
          color={"red"}
          borderType={"solid"}
        />
        <IndividualSquircle
          diameter={gameDiameters.blue}
          color={"blue"}
          borderType={"solid"}
        />

        <IndividualSquircle
          diameter={greenCounter}
          color={"green"}
          borderType={"dashed"}
        />
        <IndividualSquircle
          diameter={redCounter}
          color={"red"}
          borderType={"dashed"}
        />
        <IndividualSquircle
          diameter={blueCounter}
          color={"blue"}
          borderType={"dashed"}
        />
      </SquircleContainer>
      <Totals greenTotal={greenTotal} redTotal={redTotal} blueTotal={blueTotal} dailyPlay={dailyPlay}/>
    </div>
  );
}
