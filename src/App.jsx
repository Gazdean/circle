import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import Play from "./Screens/Play";
import Result from "./Screens/Result";
import Stats from "./Screens/Stats";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div styles={{maxWidth:800}}>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/result" element={<Result />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </div>
  );
}

export default App;
