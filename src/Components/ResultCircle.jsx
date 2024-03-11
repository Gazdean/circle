import { useEffect, useState } from "react"

export default function ResultCircle({playerGreenDiameter, playerRedDiameter, playerBlueDiameter, greenDiameter, redDiameter, blueDiameter}) {
    const [greenCounter, setGreenCounter] = useState(0)
    const [redCounter, setRedCounter] = useState(0)
    const [blueCounter, setBlueCounter] = useState(0)

    const [greenResultCircle, setGreenResultCircle] = useState(0)
    const [redResultCircle, setRedResultCircle] = useState(0)
    const [blueResultCircle, setBlueResultCircle] = useState(0)

    const [greenTotal, setGreenTotal] = useState(0)
    const [redTotal, setRedTotal] = useState(0)
    const [blueTotal, setBlueTotal] = useState(0)

    console.log(playerGreenDiameter, typeof playerGreenDiameter)

    useEffect(()=> {
            if (greenCounter < playerGreenDiameter) {
              const timer = setInterval(
                
                () => setGreenCounter((prevCounter) => prevCounter + 1),
                5
              ); 
              setGreenResultCircle(greenCounter)
              setGreenTotal(Math.abs(greenDiameter - greenCounter))
              return () => clearInterval(timer);

            }
            if (redCounter < playerRedDiameter) {
              const timer = setInterval(
                
                () => setRedCounter((prevCounter) => prevCounter + 1),
                5
              ); 
              setRedResultCircle(redCounter)
              setRedTotal(Math.abs(redDiameter - redCounter))
              return () => clearInterval(timer);

            }
            if (blueCounter < playerBlueDiameter) {
              const timer = setInterval(
                
                () => setBlueCounter((prevCounter) => prevCounter + 1),
                5
              ); 
              setBlueResultCircle(blueCounter)
              setBlueTotal(Math.abs(blueDiameter - blueCounter))
              return () => clearInterval(timer);

            }
           
    })



    return (
        <>
            <div id="result-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent:"center", width: 345, height: 345, border: "3px solid black", borderRadius: 400 }}>
                <div style={{ position:"absolute", width:`${greenDiameter}px`, height:`${greenDiameter}px`, border: "3px solid green", borderRadius:400}}></div>      
                <div style={{ position:"absolute", width:`${redDiameter}px`, height:`${redDiameter}px`, border: "3px solid red", borderRadius:400}}></div>      
                <div style={{ position:"absolute", width:`${blueDiameter}px`, height:`${blueDiameter}px`, border: "3px solid blue", borderRadius:400}}></div>
                    
                <div style={{ position:"absolute", width:`${greenResultCircle}px`, height:`${greenResultCircle}px`, border: "3px dashed green", borderRadius:400}}></div>      
                <div style={{ position:"absolute", width:`${redResultCircle}px`, height:`${redResultCircle}px`, border: "3px dashed red", borderRadius:400}}></div>      
                <div style={{ position:"absolute", width:`${blueResultCircle}px`, height:`${blueResultCircle}px`, border: "3px dashed blue", borderRadius:400}}></div>
            </div>
            <div>
                <p>Green score = {greenTotal}</p>
                <p>Red score = {redTotal}</p>
                <p>Blue score = {blueTotal}</p>
                <p>Total = {greenTotal + redTotal + blueTotal}</p>
            </div>
        </>
    )
}