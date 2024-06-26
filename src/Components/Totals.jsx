import { Link } from "react-router-dom";

export default function Totals({ setPlayerDiameters, totals, dailyPlay}) {

    

    return (
        <div className="container mt-2" style={{ width: "360px" }}>
            <p className="btn btn-success btn-md m-2 col-3">{totals.green}</p>
            <p className="btn btn-danger btn-md m-2 col-3">{totals.red}</p>
            <p className="btn btn-primary btn-md m-2 col-3">{totals.blue}</p>
            <button className="btn btn-info btn-md m-2 col-10 p-1">
                <p className="m-0">Your Score</p>
                <p className="m-0" >{totals.green + totals.red + totals.blue}</p> 
            </button>
            <Link to={dailyPlay ? "/stats" : "/play"}>
                <button className="btn btn-secondary btn-md m-2 col-10 p-1" onClick={()=>{setPlayerDiameters({green:0, red:0, blue: 0})}}>
                 {dailyPlay ? "Stats and Share" : "Play Again"}
                </button>
            </Link>         
        </div>
        )
}
