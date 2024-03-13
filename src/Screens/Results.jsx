import { useEffect, useState } from "react";
import SquircleContainer from "../Components/SquircleContainer";
import IndividualSquircle from "../Components/IndivdualSquircle";
import { red } from "@mui/material/colors";

export default function Results(
  {
  playerGreenDiameter,
  playerRedDiameter,
  playerBlueDiameter,
  greenDiameter,
  redDiameter,
  blueDiameter,
}
) {
  const [greenCounter, setGreenCounter] = useState(0);
  const [redCounter, setRedCounter] = useState(0);
  const [blueCounter, setBlueCounter] = useState(0);

  const [greenResultDiameter, setGreenResultDiameter] = useState(0);
  const [redResultDiameter, setRedResultDiameter] = useState(0);
  const [blueResultDiameter, setBlueResultDiameter] = useState(0);

  const [greenTotal, setGreenTotal] = useState(0);
  const [redTotal, setRedTotal] = useState(0);
  const [blueTotal, setBlueTotal] = useState(0);

  console.log(playerGreenDiameter, playerRedDiameter, playerBlueDiameter)
  console.log(greenDiameter, redDiameter, blueDiameter)

  useEffect(() => {
    if (greenCounter < playerGreenDiameter) {
      const timer = setInterval(
        () => setGreenCounter((prevCounter) => prevCounter + 1),
        10
      );
      setGreenResultDiameter(greenCounter);
      setGreenTotal(Math.abs(greenDiameter - greenCounter));
      return () => clearInterval(timer);
    }
    if (redCounter < playerRedDiameter) {
      const timer = setInterval(
        () => setRedCounter((prevCounter) => prevCounter + 1),
        10
      );
      setRedResultDiameter(redCounter);
      setRedTotal(Math.abs(redDiameter - redCounter));
      return () => clearInterval(timer);
    }
    if (blueCounter < playerBlueDiameter) {
      const timer = setInterval(
        () => setBlueCounter((prevCounter) => prevCounter + 1),
        10
      );
      setBlueResultDiameter(blueCounter);
      setBlueTotal(Math.abs(blueDiameter - blueCounter));
      return () => clearInterval(timer);
    }
  },[blueCounter,greenCounter,redCounter]);

  

  return (
    <>
      <SquircleContainer>
        <IndividualSquircle
          diameter={greenDiameter}
          color={"green"}
          borderType={"solid"}
        />
        <IndividualSquircle
          diameter={redDiameter}
          color={"red"}
          borderType={"solid"}
        />
        <IndividualSquircle
          diameter={blueDiameter}
          color={"blue"}
          borderType={"solid"}
        />

        <IndividualSquircle
          diameter={greenResultDiameter}
          color={"green"}
          borderType={"dashed"}
        />
        <IndividualSquircle
          diameter={redResultDiameter}
          color={"red"}
          borderType={"dashed"}
        />
        <IndividualSquircle
          diameter={blueResultDiameter}
          color={"blue"}
          borderType={"dashed"}
        />
      </SquircleContainer>
      <div className="container mt-4">
        <p className="btn btn-success btn-lg m-2 col-3">
         {greenTotal}
        </p>
        <p className="btn btn-danger btn-lg m-2 col-3">
          {redTotal}
        </p>
        <p className="btn btn-primary btn-lg m-2 col-3">
           {blueTotal}
        </p>
        <div className="btn btn-info btn-lg m-2 col-10 p-1"><p className="m-0">Your Score</p> <p className="m-0">{greenTotal + redTotal + blueTotal}</p></div>
      </div>
    </>
  );
}
