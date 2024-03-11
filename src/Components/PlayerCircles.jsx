export default function PlayerCircles({playerGreenDiameter, playerRedDiameter, playerBlueDiameter}) {
    return (
        <div id="player-go-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent:"center", width: 345, height: 345, border: "3px solid black", borderRadius: 400 }}>
            <div style={{ position:"absolute", width:`${playerGreenDiameter}px`, height:`${playerGreenDiameter}px`, border: "3px dashed green", borderRadius:400}}></div>      
            <div style={{ position:"absolute", width:`${playerRedDiameter}px`, height:`${playerRedDiameter}px`, border: "3px dashed red", borderRadius:400}}></div>      
            <div style={{ position:"absolute", width:`${playerBlueDiameter}px`, height:`${playerBlueDiameter}px`, border: "3px dashed blue", borderRadius:400}}></div>
        </div>
    )
}