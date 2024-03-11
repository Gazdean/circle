import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import Play from "./Screens/Play";
import Stats from "./Screens/Stats";
import NavBar from "./Components/NavBar";
import HowToPlay from "./Screens/HowToPlay";

function App() {
  return (
    <div style={{maxWidth:800}}>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/howToPlay" element={<HowToPlay />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </div>
  );
}

export default App;
