export default function GameCircles({greenDiameter, redDiameter, blueDiameter}) {
    return (
        <div id="circle-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent:"center", width: 345, height: 345, border: "3px solid black", borderRadius: 400 }}>
            <div style={{ position:"absolute", width:`${greenDiameter}px`, height:`${greenDiameter}px`, border: "3px solid green", borderRadius:400}}></div>      
            <div style={{ position:"absolute", width:`${redDiameter}px`, height:`${redDiameter}px`, border: "3px solid red", borderRadius:400}}></div>      
            <div style={{ position:"absolute", width:`${blueDiameter}px`, height:`${blueDiameter}px`, border: "3px solid blue", borderRadius:400}}></div>
        </div>
    )
}