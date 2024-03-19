import { useEffect, useState } from "react";
import SquircleContainer from "../Components/SquircleContainer";
import IndividualSquircle from "../Components/IndivdualSquircle";
import Totals from "../Components/Totals";

export default function Results({
  gameDiameters,
  playerDiameters,
  setPlayerDiameters,
  totals,
  setTotals,

  dailyPlay
}) {
  const [greenCounter, setGreenCounter] = useState(0);
  const [redCounter, setRedCounter] = useState(0);
  const [blueCounter, setBlueCounter] = useState(0);

  const [resultsComplete, setResultsComplete] = useState(false)

  useEffect(()=>{
    setTotals({})
  },[])

  useEffect(() => {
    if (greenCounter <= playerDiameters.green) {
      const timer = setInterval(
        () => setGreenCounter((prevCounter) => prevCounter + 1),
        10
      );
      setTotals({...totals, green: Math.ceil((Math.abs(gameDiameters.green - greenCounter)/330) *100)});
      return () => clearInterval(timer);
    }
    if (redCounter <= playerDiameters.red) {
      const timer = setInterval(
        () => setRedCounter((prevCounter) => prevCounter + 1),
        10
      );
      setTotals({...totals, red: Math.ceil((Math.abs(gameDiameters.red - redCounter)/330) *100)});
      return () => clearInterval(timer);
    }
    if (blueCounter <= playerDiameters.blue) {
      const timer = setInterval(
        () => setBlueCounter((prevCounter) => prevCounter + 1),
        10
      );
      setTotals({...totals, blue: Math.ceil((Math.abs(gameDiameters.blue - blueCounter)/330) *100)});
      return () => clearInterval(timer);
    }

    if (greenCounter > playerDiameters.green && redCounter >playerDiameters.red && blueCounter > playerDiameters.blue) {
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

       handleSetStorage("green", totals.green, greenLocalStorage)
       handleSetStorage("red", totals.red, redLocalStorage)
       handleSetStorage("blue", totals.blue, blueLocalStorage)
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
      <Totals setPlayerDiameters={setPlayerDiameters} totals={totals} dailyPlay={dailyPlay}/>
    </div>
  );
}
