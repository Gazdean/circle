import { useEffect, useState } from "react";
import GameCircles from "../Components/GameCircles";
import Sliders from "../Components/Sliders";
import PlayerCircles from "../Components/PlayerCircles";
import ResultCircle from "../Components/ResultCircle";

export default function Play() {
  const [greenDiameter, setGreenDiameter] = useState(0);
  const [redDiameter, setRedDiameter] = useState(0);
  const [blueDiameter, setBlueDiameter] = useState(0);
  const [counter, setCounter] = useState(5);

  const [playerGreenDiameter, setPlayerGreenDiameter] = useState(0);
  const [playerRedDiameter, setPlayerRedDiameter] = useState(0);
  const [playerBlueDiameter, setPlayerBlueDiameter] = useState(0);

  const [greenDifference, setGreenDifference] = useState(0);
  const [redDifference, setRedDifference] = useState(0);
  const [blueDifference, setBlueDifference] = useState(0);

  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    setGreenDiameter(Math.ceil(Math.random() * (340 - 40) + 40));
    setRedDiameter(Math.ceil(Math.random() * (340 - 40) + 40));
    setBlueDiameter(Math.ceil(Math.random() * (340 - 40) + 40));
  }, []);

  function handleSubmit() {
    setGreenDifference(playerGreenDiameter);
    setRedDifference(playerRedDiameter);
    setBlueDifference(playerBlueDiameter);

    setButtonDisabled(true);
  }

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(
        () => setCounter((prevCounter) => prevCounter - 1),
        1000
      );
      return () => clearInterval(timer);
    }
  }, [counter]);

  console.log(counter)

  return (
    <>
      <h1 style={{ fontSize: 40 }}>Lets Play</h1>
      <div>
        <p style={{ fontSize: 40 }}>
          {counter !== 0 ? counter : !buttonDisabled ? "Go" : "Results"}
        </p>
      </div>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {counter !== 0 ? (
          <GameCircles
            greenDiameter={greenDiameter}
            redDiameter={redDiameter}
            blueDiameter={blueDiameter}
          />
        ) : !buttonDisabled ? (
          <>
            <PlayerCircles
              playerGreenDiameter={playerGreenDiameter}
              playerRedDiameter={playerRedDiameter}
              playerBlueDiameter={playerBlueDiameter}
            />
            <Sliders
              setPlayerGreenDiameter={setPlayerGreenDiameter}
              setPlayerRedDiameter={setPlayerRedDiameter}
              setPlayerBlueDiameter={setPlayerBlueDiameter}
            />
            <button
              className="btn btn-primary btn-lg"
              onClick={handleSubmit}
              disabled={buttonDisabled}
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <ResultCircle
              playerGreenDiameter={playerGreenDiameter}
              playerRedDiameter={playerRedDiameter}
              playerBlueDiameter={playerBlueDiameter}
              greenDiameter={greenDiameter}
              redDiameter={redDiameter}
              blueDiameter={blueDiameter}
            />

          </>
        )}
      </div>
    </>
  );
}
