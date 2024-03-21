import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import Play from "./Screens/Play";
import Stats from "./Screens/Stats";
import NavBar from "./Components/NavBar";
import Results from "./Screens/Results";
import { useState } from "react";

function App() {

  const [gameDiameters, setGameDiameters] = useState({green: 0, red: 0, blue: 0})
  const [playerDiameters, setPlayerDiameters] = useState({green: 0, red: 0, blue: 0})
  const [totals , setTotals] = useState({green: 0, red: 0, blue: 0, total: 0})
  const [dailyPlay, setDailyPlay] = useState(false)
  const [gameId, setGameId] = useState(null)

  return (
    <div className="d-flex flex-column justify-content:center">
      <NavBar setDailyPlay={setDailyPlay}/>
      <Routes>
        <Route path="/" element={<Home setDailyPlay={setDailyPlay} setGameId={setGameId} gameId={gameId}/>} />
        <Route
          path="/play"
          element={
            <Play
              gameDiameters={gameDiameters}
              setGameDiameters={setGameDiameters}

              playerDiameters={playerDiameters}
              setPlayerDiameters={setPlayerDiameters}

              dailyPlay={dailyPlay}
              setDailyPlay={setDailyPlay}

              gameId={gameId}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              gameDiameters={gameDiameters}
             
              playerDiameters={playerDiameters}
              setPlayerDiameters={setPlayerDiameters}

              totals={totals}
              setTotals={setTotals}

              dailyPlay={dailyPlay}
            />
          }
        />
        <Route
          path="/stats"
          element={
            <Stats />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
