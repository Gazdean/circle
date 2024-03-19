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

  const [gameDiameters, setGameDiameters] = useState({green: 0, red: 0, blue: 0})

  // const [playerGreenDiameter, setPlayerGreenDiameter] = useState(0); //delete
  // const [playerRedDiameter, setPlayerRedDiameter] = useState(0); //delete
  // const [playerBlueDiameter, setPlayerBlueDiameter] = useState(0); //delete

  const [playerDiameters, setPlayerDiameters] = useState({green: 0, red: 0, blue: 0})

  // const [greenTotal, setGreenTotal] = useState(0); //delete
  // const [redTotal, setRedTotal] = useState(0); //delete
  // const [blueTotal, setBlueTotal] = useState(0); //delete

  const [totals , setTotals] = useState({green: 0, red: 0, blue: 0})

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

              // playerGreenDiameter={playerGreenDiameter} //delete
              // setPlayerGreenDiameter={setPlayerGreenDiameter} //delete
              // playerRedDiameter={playerRedDiameter} //delete
              // setPlayerRedDiameter={setPlayerRedDiameter} //delete
              // playerBlueDiameter={playerBlueDiameter} //delete
              // setPlayerBlueDiameter={setPlayerBlueDiameter} //delete

              playerDiameters={playerDiameters}
              setPlayerDiameters={setPlayerDiameters}

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
              // setGameDiameters={setGameDiameters}

              // playerGreenDiameter={playerGreenDiameter} //delete
              // // setPlayerGreenDiameter={setPlayerGreenDiameter} //delete
              // playerRedDiameter={playerRedDiameter} //delete
              // // setPlayerRedDiameter={setPlayerRedDiameter} //delete
              // playerBlueDiameter={playerBlueDiameter} //delete
              // // setPlayerBlueDiameter={setPlayerBlueDiameter} //delete

              playerDiameters={playerDiameters}
              setPlayerDiameters={setPlayerDiameters}

              // greenTotal={greenTotal} //delete
              // setGreenTotal={setGreenTotal} //delete
              // redTotal={redTotal} //delete
              // setRedTotal={setRedTotal} //delete
              // blueTotal={blueTotal} //delete
              // setBlueTotal={setBlueTotal} //delete

              totals={totals}
              setTotals={setTotals}

              dailyPlay={dailyPlay}
            />
          }
        />
        <Route
          path="/stats"
          element={
            <Stats
              // greenTotal={greenTotal} //delete
              // setGreenTotal={setGreenTotal} //delete
              // redTotal={redTotal} //delete
              // setRedTotal={setRedTotal} //delete
              // blueTotal={blueTotal} //delete
              // setBlueTotal={setBlueTotal} //delete

              totals={totals}
              setTotals={setTotals}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
