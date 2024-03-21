import { useEffect, useState } from "react";
import GameCircles from "../Components/GameCircles";
import Sliders from "../Components/Sliders";
import PlayerCircles from "../Components/PlayerCircles";
import { Link } from "react-router-dom";
import {monthlyNumberArray} from "../utils/dailyGame"

export default function Play({ gameDiameters, setGameDiameters, playerDiameters, setPlayerDiameters, dailyPlay, gameId })
{
  const [counter, setCounter] = useState(6);
  const [sliderVisibility, setSliderVisibility] = useState(true);
 
  useEffect(() => {
    setPlayerDiameters({green:0, red:0, blue: 0})
    if(!dailyPlay) {
      let newGreenDiameter = (Math.ceil(Math.random() * (330 - 30) + 30));
      let newRedDiameter = (Math.ceil(Math.random() * (330 - 30) + 30));
      let newBlueDiameter = (Math.ceil(Math.random() * (330 - 30) + 30));

      if ( newRedDiameter > newGreenDiameter - 8 && newRedDiameter < newGreenDiameter + 8 )  newRedDiameter -= 15
      if ( newBlueDiameter > newRedDiameter - 8 && newBlueDiameter < newRedDiameter + 8  ||  newBlueDiameter > newGreenDiameter - 8 && newBlueDiameter < newGreenDiameter + 8)  newBlueDiameter -= 22
      setGameDiameters({
        green: newGreenDiameter,
        red: newRedDiameter,
        blue: newBlueDiameter
      });
    } else {
      const dailyDiameters = monthlyNumberArray.filter((dailyObj)=>{
          return Object.keys(dailyObj)[0] === gameId
      })
      setGameDiameters(dailyDiameters[0][gameId])
    }
  }, []);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(
        () => setCounter((prevCounter) => prevCounter - 1),
        1000
      );
      setSliderVisibility(true);
      return () => clearInterval(timer);
    } else {
      setSliderVisibility(false);
    }
  }, [counter]);

  function handleDailyPlay() {
    if(dailyPlay) {   
      localStorage.setItem("gameId",(JSON.stringify(gameId)))
      console.log(localStorage)
    }
  } 

  return (
    <div className="d-flex flex-column justify-content:center align-items-center p-0 mt-4">
      <h1 className="display-1 mt-3">
        {counter > 5 ? "Lets Play" : counter ? counter : "Go"}
      </h1>

      <div className="d-flex flex-column justify-content:center align-items-center p-0 m-0">
        {counter < 6 && counter > 0 ? (
          <GameCircles
            gameDiameters={gameDiameters}
          />
        ) : (
          <>
            <PlayerCircles
              playerDiameters={playerDiameters}
            />
          </>
        )}
        <div style={{ visibility: sliderVisibility ? "hidden" : "visible" }}>
          <Sliders
            playerDiameters={playerDiameters}
            setPlayerDiameters={setPlayerDiameters}
          />
          <Link
            to={{
              pathname: "/results"
            }}
          >
            <button
              className="btn btn-primary btn-lg" onClick={handleDailyPlay}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
