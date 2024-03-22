import { useEffect, useState } from "react";
import ShareModal from "../Components/ShareModal";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Stats({totals}) {
  const [greenDataArray, setGreenDataArray] = useState([]);
  const [redDataArray, setRedDataArray] = useState([]);
  const [blueDataArray, setBlueDataArray] = useState([]);
  const [totalDataArray, setTotalDataArray] = useState([]);
  const [showGreen, setShowGreen] = useState(false)
  const [showRed, setShowRed] = useState(false)
  const [showBlue, setShowBlue] = useState(false)
  const [showTotal, setShowTotal] = useState(true)

  const shareIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-share-fill"
      viewBox="0 0 16 16"
    >
      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
    </svg>
  );

  function handleDataArrays(stats) {
    const dataArray = new Array(13).fill(0);
    if (stats)
      for (const key in stats) {
        if (key === "zero") dataArray[0] = stats[key];
        if (key === "one") dataArray[1] = stats[key];
        if (key === "two") dataArray[2] = stats[key];
        if (key === "three") dataArray[3] = stats[key];
        if (key === "four") dataArray[4] = stats[key];
        if (key === "five") dataArray[5] = stats[key];
        if (key === "tenUnder") dataArray[6] = stats[key];
        if (key === "twentyUnder") dataArray[7] = stats[key];
        if (key === "thirtyUnder") dataArray[8] = stats[key];
        if (key === "fortyUnder") dataArray[9] = stats[key];
        if (key === "fiftyUnder") dataArray[10] = stats[key];
        if (key === "seventySixUnder") dataArray[11] = stats[key];
        if (key === "overSeventyFive") dataArray[12] = stats[key];
      }
    return dataArray;
  }

  useEffect(() => {
    const greenStats = JSON.parse(localStorage.getItem("green"));
    const redStats = JSON.parse(localStorage.getItem("red"));
    const blueStats = JSON.parse(localStorage.getItem("blue"));
    const totalStats = JSON.parse(localStorage.getItem("total"));

    setGreenDataArray(handleDataArrays(greenStats)); 
    setRedDataArray(handleDataArrays(redStats));
    setBlueDataArray(handleDataArrays(blueStats));
    setTotalDataArray(handleDataArrays(totalStats));
  }, []);

  function handleSetDataSeries(color) {
    if (color === "green") {
        setShowGreen(!showGreen)
    } else if (color === "red") {
        setShowRed(!showRed)
    } else if (color === "blue") {
        setShowBlue(!showBlue)
    } else if (color === "total") {
        setShowTotal(!showTotal)
    }
  }

  return (
    <div className="d-flex flex-column justify-content:center align-items-center p-0 mt-4">
      <h1>Your Daily Game Stats</h1>
      <button
        className="btn btn-success btn-lg col-6 mt-2"
        data-bs-toggle="modal"
        data-bs-target="#shareModal"
      >
        Share {shareIcon}
      </button>
      {greenDataArray.length &&
      redDataArray.length &&
      blueDataArray.length &&
      totalDataArray.length ? (
        <BarChart
          yAxis={[
            {
              scaleType: "band",
              categoryGapRatio: 0.05,
              barGapRatio: 0.2,
              data: [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6-10",
                " 11-20",
                "21-30",
                "31-40",
                "41-50",
                "51-75",
                "76+"
              ],
            },
          ]}
          xAxis={[{
            label: "Games",
            tickMinStep: 1
          }
          ]}
          series={[
            { data: showGreen ? greenDataArray : []},
            { data: showRed ? redDataArray : [] },
            { data: showBlue ? blueDataArray  : []},
            { data: showTotal ? totalDataArray : []},
            { data: [0]}
          ]}
          width={300}
          height={440}
          layout="horizontal"
          colors={["green", "red", "blue", "grey"]}
        />
      ) : null}
    <div className="d-flex flex-row justify-content:center align-items-center">
      <button
        style={{width: 60}}
        className="btn btn-success btn-sm col-3 me-1"
        onClick={()=>handleSetDataSeries('green')}
      >
        {showGreen ? "Hide" : "Show"}
      </button>
      <button
        style={{width: 60}}
        className="btn btn-danger btn-sm col-3 me-1"
        onClick={()=>handleSetDataSeries('red')}
      >
        {showRed ? "Hide" : "Show"}
      </button>
      <button
        style={{width: 60}}
        className="btn btn-primary btn-sm col-3 me-1"
        onClick={()=>handleSetDataSeries('blue')}
      >
        {showBlue ? "Hide" : "Show"}
      </button>
      <button
        style={{width: 60}}
        className="btn btn-secondary btn-sm col-3"
        onClick={()=>handleSetDataSeries('total')}
      >
        {showTotal ? "Hide" : "Show"}
      </button>
    </div>
      <ShareModal totals={totals}/>
    </div>
  );
}
