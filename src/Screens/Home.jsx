import { useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
 
    return (
        <div className="container">  
            <h2>Welcome to</h2>
            <h1 >CIRCLE!</h1>
            <h2>the game</h2>
            <Link to="/play"><button className="btn btn-primary btn-lg">Play Now!</button></Link>
        </div>
    )
}