import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import Play from "./Screens/Play";
import Stats from "./Screens/Stats";
import NavBar from "./Components/NavBar";
import Results from "./Screens/Results";
import { useState } from "react";

function App() {

  const [greenDiameter, setGreenDiameter] = useState(0);
  const [redDiameter, setRedDiameter] = useState(0);
  const [blueDiameter, setBlueDiameter] = useState(0);
 
  const [playerGreenDiameter, setPlayerGreenDiameter] = useState(0);
  const [playerRedDiameter, setPlayerRedDiameter] = useState(0);
  const [playerBlueDiameter, setPlayerBlueDiameter] = useState(0);

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play greenDiameter={greenDiameter} setGreenDiameter={setGreenDiameter} redDiameter={redDiameter} setRedDiameter={setRedDiameter} blueDiameter={blueDiameter} setBlueDiameter={setBlueDiameter} playerGreenDiameter={playerGreenDiameter} setPlayerGreenDiameter={setPlayerGreenDiameter}  playerRedDiameter={playerRedDiameter} setPlayerRedDiameter={setPlayerRedDiameter} playerBlueDiameter={playerBlueDiameter} setPlayerBlueDiameter={setPlayerBlueDiameter} />} />
        <Route path="/results" element={<Results greenDiameter={greenDiameter} setGreenDiameter={setGreenDiameter} redDiameter={redDiameter} setRedDiameter={setRedDiameter} blueDiameter={blueDiameter} setBlueDiameter={setBlueDiameter} playerGreenDiameter={playerGreenDiameter} setPlayerGreenDiameter={setPlayerGreenDiameter}  playerRedDiameter={playerRedDiameter} setPlayerRedDiameter={setPlayerRedDiameter} playerBlueDiameter={playerBlueDiameter} setPlayerBlueDiameter={setPlayerBlueDiameter}/>} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </>
  );
}

export default App;
