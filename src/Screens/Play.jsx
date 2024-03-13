import { useEffect, useState } from "react";
import GameCircles from "../Components/GameCircles";
import Sliders from "../Components/Sliders";
import PlayerCircles from "../Components/PlayerCircles";
import { Link } from "react-router-dom";

export default function Play(
  {
    greenDiameter, setGreenDiameter,
    redDiameter, setRedDiameter,
    blueDiameter, setBlueDiameter,
    playerGreenDiameter, setPlayerGreenDiameter,
    playerRedDiameter, setPlayerRedDiameter,
    playerBlueDiameter, setPlayerBlueDiameter
  }
){
  const [counter, setCounter] = useState(7);
  const [sliderVisibility, setSliderVisibility] = useState(true);

  useEffect(() => {
    setGreenDiameter(Math.ceil(Math.random() * (370 - 40) + 40));
    setRedDiameter(Math.ceil(Math.random() * (370 - 40) + 40));
    setBlueDiameter(Math.ceil(Math.random() * (370 - 40) + 40));

    setPlayerGreenDiameter(0)
    setPlayerRedDiameter(0)
    setPlayerBlueDiameter(0)
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

  console.log(playerGreenDiameter, playerRedDiameter, playerBlueDiameter)
  console.log(greenDiameter, redDiameter, blueDiameter)

  return (
    <>
      <h1 className="display-1">
        {counter > 5 ? "Lets Play" : counter ? counter : "Go"}
      </h1>

      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {counter < 6 && counter > 0 ? (
          <GameCircles
            greenDiameter={greenDiameter}
            redDiameter={redDiameter}
            blueDiameter={blueDiameter}
          />
        ) : (
          <>
            <PlayerCircles
              playerGreenDiameter={playerGreenDiameter}
              playerRedDiameter={playerRedDiameter}
              playerBlueDiameter={playerBlueDiameter}
            />
          </>
        )}
        <div style={{ visibility: sliderVisibility ? "hidden" : "visible" }}>
          <Sliders
            setPlayerGreenDiameter={setPlayerGreenDiameter}
            setPlayerRedDiameter={setPlayerRedDiameter}
            setPlayerBlueDiameter={setPlayerBlueDiameter}
          />
          <Link
            to={{
              pathname: "/results"
            }}
          >
            <button
              className="btn btn-primary btn-lg"
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
