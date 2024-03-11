import { useEffect, useState } from "react"

export default function Play() {
    const [diameter, setDiameter] = useState()

    useEffect(()=>{
        setDiameter(Math.ceil(Math.random()* (350 - 40) + 40))
    },[])

    console.log(diameter)

    return (
        <>
            <h1>Play Screen</h1>
            <div className="container my-5">
                <div className="col-3">        
                    {diameter ? <div className="card" style={{display:"flex", justifyContent:"center", width:`${diameter}px`, height:`${diameter}px`, backgroundColor:"green", borderRadius:400}}>
                    </div> : null}       
                </div>
            </div> 
        </>
    )
}