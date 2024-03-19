import { Link } from "react-router-dom"
import HowToModal from "../Components/HowToModal"
import { useState, useEffect} from "react"

export default function Home({setDailyPlay}) {

    const [gameId, setGameId] = useState(null)

    useEffect(()=>{
        const date = new Date()
        const day = date.getDate()
        setGameId(day)
    },[])

    useEffect(()=>{
        localStorage.setItem("gameId",(JSON.stringify(gameId)))
        console.log(localStorage)
    }, [gameId])
   

    return (
        <div className="d-flex flex-column justify-content:center align-items-center">  
            <h2 id="welcome-home" className="display-5 m-3">Welcome to</h2>
            <h1 id="title-home" className="display-1 text-decoration-underline fw-bold text-danger">SQUIRCLES!</h1>
            <h3 className="h6 m-4 fst-italic">A short term memory game</h3>
            <div id="button-container-home" className="d-flex flex-column justify-content:center">
                <Link>
                    <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#howToModal">
                        How To Play
                    </button></Link>
                <Link to="/play">
                    <button className="btn btn-primary btn-lg m-2" onClick={()=>{setDailyPlay(true)}}>
                        Play Daily Game!
                    </button>
                </Link>           
            </div>
            <HowToModal/>
        </div>
    )
}