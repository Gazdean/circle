import { Link } from "react-router-dom"
import HowToModal from "../Components/HowToModal"

export default function Home() {
    
    return (
        <div className="container">  
            <h2 id="welcome-home" className="display-5 m-3">Welcome to</h2>
            <h1 id="title-home" className="display-1 text-decoration-underline fw-bold text-danger">SQUIRCLES!</h1>
            <h3 className="h6 m-4 fst-italic">A short term memory game</h3>
            <div id="button-container-home" className="col col-lg-2 row">
            <div><button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#howToModal">
                How To Play
            </button></div>
                <Link to="/play"><button className="btn btn-primary btn-lg m-2">Play Daily Game!</button></Link>           
            </div>
            <HowToModal/>
        </div>
    )
}