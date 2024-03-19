import { useEffect, useState } from "react";
import GameCircles from "../Components/GameCircles";
import Sliders from "../Components/Sliders";
import PlayerCircles from "../Components/PlayerCircles";
import { Link } from "react-router-dom";

export default function Play(
  {
    gameDiameters, setGameDiameters,
    playerDiameters, setPlayerDiameters,
    dailyPlay, 
  }
){
  const [counter, setCounter] = useState(6);
  const [sliderVisibility, setSliderVisibility] = useState(true);
  const [gameId, setGameId] =useState(null)

  useEffect(() => {
    
    if(!dailyPlay) {
      let newGreenDiameter = (Math.ceil(Math.random() * (330 - 40) + 40));
      let newRedDiameter = (Math.ceil(Math.random() * (330 - 40) + 40));
      let newBlueDiameter = (Math.ceil(Math.random() * (330 - 40) + 40));

      if ( newRedDiameter > newGreenDiameter - 8 && newRedDiameter < newGreenDiameter + 8 )  newRedDiameter -= 15
      if ( newBlueDiameter > newRedDiameter - 8 && newBlueDiameter < newRedDiameter + 8  ||  newBlueDiameter > newGreenDiameter - 8 && newBlueDiameter < newGreenDiameter + 8)  newBlueDiameter -= 22

      setGameDiameters({
        green: newGreenDiameter,
        red: newRedDiameter,
        blue: newBlueDiameter
    });
    } else {
      setGameDiameters({ green: 20, red: 30, blue: 40})
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
    const date = new Date()
    const day = date.getDate()
    setGameId(day)
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
