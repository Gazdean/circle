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
      setTotals({...totals, total: totals.green + totals.red + totals.blue})
      setResultsComplete(true)
    }
  }, [blueCounter, greenCounter, redCounter]);

  function handleSetStorage(colorString, colorTotal, colorLocalStorage) {
      if (colorTotal === 0 ) {
        !colorLocalStorage.zero ? colorLocalStorage.zero = 1 : colorLocalStorage.zero += 1
      } else if (colorTotal === 1 ) {
        !colorLocalStorage.one ? colorLocalStorage.one = 1 : colorLocalStorage.one += 1  
      } else if (colorTotal === 2 ) {
        !colorLocalStorage.two ? colorLocalStorage.two = 1 : colorLocalStorage.two += 1
      } else if (colorTotal === 3 ) {
        !colorLocalStorage.three ? colorLocalStorage.three = 1 : colorLocalStorage.three += 1
      } else if (colorTotal === 4 ) {
        !colorLocalStorage.four ? colorLocalStorage.four = 1 : colorLocalStorage.four += 1
      } else if (colorTotal === 5) {
        !colorLocalStorage.five ? colorLocalStorage.five = 1 : colorLocalStorage.five += 1
      } else if (colorTotal > 5 && colorTotal < 11) {
        !colorLocalStorage.tenUnder ? colorLocalStorage.tenUnder = 1 : colorLocalStorage.tenUnder += 1
      } else if (colorTotal > 10  && colorTotal < 21 ) {
        !colorLocalStorage.twentyUnder ? colorLocalStorage.twentyUnder= 1 : colorLocalStorage.twentyUnder += 1
      } else if (colorTotal > 20  && colorTotal < 31 ) {
        !colorLocalStorage.thirtyUnder ? colorLocalStorage.thirtyUnder= 1 : colorLocalStorage.thirtyUnder += 1
      } else if (colorTotal > 30  && colorTotal < 41 ) {
        !colorLocalStorage.fortyUnder ? colorLocalStorage.fortyUnder = 1 : colorLocalStorage.fortyUnder += 1
      } else if (colorTotal > 40  && colorTotal < 51 ) {
        !colorLocalStorage.fiftyUnder ? colorLocalStorage.fiftyUnder = 1: colorLocalStorage.fiftyUnder += 1     
      } else if (colorTotal > 51 && colorTotal <  76) {
        !colorLocalStorage.seventySixUnder ? colorLocalStorage.seventySixUnder = 1: colorLocalStorage.seventySixUnder += 1     
      } else if (colorTotal > 75 && colorTotal <  101) {
        !colorLocalStorage.hundredOneUnder ? colorLocalStorage.hundredOneUnder = 1: colorLocalStorage.hundredOneUnder += 1     
      } else if (colorTotal > 100 && colorTotal <  126) {
        !colorLocalStorage.hundredTwentySixUnder ? colorLocalStorage.hundredTwentySixUnder = 1: colorLocalStorage.hundredTwentySixUnder += 1     
      } else if (colorTotal > 125 && colorTotal <  151) {
        !colorLocalStorage.hundredFiftyUnder ? colorLocalStorage.hundredFiftyUnder = 1: colorLocalStorage.hundredFiftyUnder += 1     
      } else if (colorTotal > 150 ) {
        !colorLocalStorage.hundredFiftyOver ? colorLocalStorage.hundredFiftyOver = 1: colorLocalStorage.hundredFiftyOver += 1     
      }
      localStorage.setItem(colorString, JSON.stringify(colorLocalStorage))
    }

  useEffect(()=> {
    if(dailyPlay && resultsComplete) {
      if(!localStorage.green) {
        localStorage.setItem("green",JSON.stringify({}))
        localStorage.setItem("red",JSON.stringify({}))
        localStorage.setItem("blue",JSON.stringify({}))
        localStorage.setItem("total",JSON.stringify({}))
      }
      const greenLocalStorage = JSON.parse(localStorage.getItem("green"))
      const redLocalStorage = JSON.parse(localStorage.getItem("red"))
      const blueLocalStorage = JSON.parse(localStorage.getItem("blue"))
      const totalLocalStorage = JSON.parse(localStorage.getItem("total"))

       handleSetStorage("green", totals.green, greenLocalStorage)
       handleSetStorage("red", totals.red, redLocalStorage)
       handleSetStorage("blue", totals.blue, blueLocalStorage)
       handleSetStorage("total", totals.total, totalLocalStorage)

       localStorage.setItem("todaysScore", JSON.stringify(totals))
    }
  },[resultsComplete])

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
