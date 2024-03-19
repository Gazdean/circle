import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import Play from "./Screens/Play";
import Stats from "./Screens/Stats";
import NavBar from "./Components/NavBar";
import Results from "./Screens/Results";
import { useState } from "react";

function App() {
  // const [greenDiameter, setGreenDiameter] = useState(0); //delete
  // const [redDiameter, setRedDiameter] = useState(0); //delete
  // const [blueDiameter, setBlueDiameter] = useState(0); //delete

  const [gameDiameters, setGameDiameters] = useState({})

  const [playerGreenDiameter, setPlayerGreenDiameter] = useState(0);
  const [playerRedDiameter, setPlayerRedDiameter] = useState(0);
  const [playerBlueDiameter, setPlayerBlueDiameter] = useState(0);

  const [greenTotal, setGreenTotal] = useState(0);
  const [redTotal, setRedTotal] = useState(0);
  const [blueTotal, setBlueTotal] = useState(0);

  const [dailyPlay, setDailyPlay] = useState(false)

  return (
    <div className="d-flex flex-column justify-content:center">
      <NavBar setDailyPlay={setDailyPlay}/>
      <Routes>
        <Route path="/" element={<Home setDailyPlay={setDailyPlay}/>} />
        <Route
          path="/play"
          element={
            <Play
              // greenDiameter={greenDiameter} //delete
              // setGreenDiameter={setGreenDiameter} //delete
              // redDiameter={redDiameter} //delete
              // setRedDiameter={setRedDiameter} //delete
              // blueDiameter={blueDiameter} //delete
              // setBlueDiameter={setBlueDiameter} //delete

              gameDiameters={gameDiameters}
              setGameDiameters={setGameDiameters}

              playerGreenDiameter={playerGreenDiameter}
              setPlayerGreenDiameter={setPlayerGreenDiameter}
              playerRedDiameter={playerRedDiameter}
              setPlayerRedDiameter={setPlayerRedDiameter}
              playerBlueDiameter={playerBlueDiameter}
              setPlayerBlueDiameter={setPlayerBlueDiameter}
              dailyPlay={dailyPlay}
              setDailyPlay={setDailyPlay}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              // greenDiameter={greenDiameter}
              // setGreenDiameter={setGreenDiameter}
              // redDiameter={redDiameter}
              // setRedDiameter={setRedDiameter}
              // blueDiameter={blueDiameter}
              // setBlueDiameter={setBlueDiameter}

              gameDiameters={gameDiameters}
              setGameDiameters={setGameDiameters}

              playerGreenDiameter={playerGreenDiameter}
              setPlayerGreenDiameter={setPlayerGreenDiameter}
              playerRedDiameter={playerRedDiameter}
              setPlayerRedDiameter={setPlayerRedDiameter}
              playerBlueDiameter={playerBlueDiameter}
              setPlayerBlueDiameter={setPlayerBlueDiameter}
              greenTotal={greenTotal}
              setGreenTotal={setGreenTotal}
              redTotal={redTotal}
              setRedTotal={setRedTotal}
              blueTotal={blueTotal}
              setBlueTotal={setBlueTotal}
              dailyPlay={dailyPlay}
            />
          }
        />
        <Route
          path="/stats"
          element={
            <Stats
              greenTotal={greenTotal}
              setGreenTotal={setGreenTotal}
              redTotal={redTotal}
              setRedTotal={setRedTotal}
              blueTotal={blueTotal}
              setBlueTotal={setBlueTotal}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
