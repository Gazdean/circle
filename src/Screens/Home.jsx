import { Link } from "react-router-dom"
import HowToModal from "../Components/HowToModal"
import { useEffect, useState } from "react"
import AlreadyPlayedModal from "../Components/AlreadyPlayedModal"

export default function Home({setDailyPlay, setGameId, gameId}) {

    const [disableDailyPlay, setDisableDailyPlay] = useState(null)

    useEffect(()=>{ 
        if(!gameId){
            const date = new Date()
            const month = date.getMonth() + 1
            const day = date.getDate()
            const id = month.toString() + day.toString()
            setGameId(id)
        }
        if(gameId) {
            const localStorageGameId = JSON.parse(localStorage.getItem("gameId"))
            gameId.toString() === localStorageGameId ? setDisableDailyPlay(true) : null
        }
    },[gameId])

    function handleDailyPlay() {
        setDailyPlay(true)
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">  
            <h2 id="welcome-home" className="display-5 m-3">Welcome to</h2>
            <h1 id="title-home" className="display-1 text-decoration-underline fw-bold text-danger">SQUIRCLES!</h1>
            <h3 className="h6 m-4 fst-italic">A short term spatial memory game</h3>
            <div id="button-container-home" className="d-flex flex-column justify-content:center">
                <Link>
                    <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#howToModal">
                        How To Play
                    </button>
                </Link>
                <Link to={disableDailyPlay ? "" : "/play"}>
                    <button className={`btn ${disableDailyPlay ? "bg-primary-subtle" : "btn-primary" } btn-lg m-2`} onClick={handleDailyPlay} data-bs-toggle={disableDailyPlay ? "modal" : ""} data-bs-target="#alreadyPlayedModal">
                        Play Daily Game!
                    </button>
                </Link>           
            </div>
            <HowToModal/>
            <AlreadyPlayedModal />
        </div>
    )
}