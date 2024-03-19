import { useEffect, useState } from "react";
import GameCircles from "../Components/GameCircles";
import Sliders from "../Components/Sliders";
import PlayerCircles from "../Components/PlayerCircles";
import { Link } from "react-router-dom";

export default function Play(
  {
    // greenDiameter, setGreenDiameter, //delete
    // redDiameter, setRedDiameter, //delete
    // blueDiameter, setBlueDiameter, //delete

    gameDiameters, setGameDiameters,

    // playerGreenDiameter, setPlayerGreenDiameter, //delete
    // playerRedDiameter, setPlayerRedDiameter, //delete
    // playerBlueDiameter, setPlayerBlueDiameter, //delete

    playerDiameters, setPlayerDiameters,

    dailyPlay, setDailyPlay
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
    
      // setGreenDiameter(newGreenDiameter); //delete
      // setRedDiameter(newRedDiameter); //delete
      // setBlueDiameter(newBlueDiameter); //delete

      setGameDiameters({
        green: newGreenDiameter,
        red: newRedDiameter,
        blue: newBlueDiameter
    });

    } else {
      // setGreenDiameter(20); //delete
      // setRedDiameter(30); //delete
      // setBlueDiameter(40); //delete

      setGameDiameters({ green: 20, red: 30, blue: 40})
    }
    // setPlayerGreenDiameter(0) //delete
    // setPlayerRedDiameter(0) //delete
    // setPlayerBlueDiameter(0) //delete
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
            // greenDiameter={greenDiameter} //delete
            // redDiameter={redDiameter} //delete
            // blueDiameter={blueDiameter} //delete

            gameDiameters={gameDiameters}

          />
        ) : (
          <>
            <PlayerCircles
              // playerGreenDiameter={playerGreenDiameter} //delete
              // playerRedDiameter={playerRedDiameter} //delete
              // playerBlueDiameter={playerBlueDiameter} //delete

              playerDiameters={playerDiameters}
            />
          </>
        )}
        <div style={{ visibility: sliderVisibility ? "hidden" : "visible" }}>
          <Sliders
            // setPlayerGreenDiameter={setPlayerGreenDiameter} //delete
            // setPlayerRedDiameter={setPlayerRedDiameter} //delete
            // setPlayerBlueDiameter={setPlayerBlueDiameter} //delete

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
