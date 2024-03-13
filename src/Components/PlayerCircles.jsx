import IndividualSquircle from "./IndivdualSquircle"
import SquircleContainer from "./SquircleContainer"

export default function PlayerCircles({playerGreenDiameter, playerRedDiameter, playerBlueDiameter}) {
    
    return (
        <SquircleContainer>
            <IndividualSquircle diameter={playerGreenDiameter} color={"green"} borderType={"dashed"}/>      
            <IndividualSquircle diameter={playerRedDiameter} color={"red"} borderType={"dashed"}/>      
            <IndividualSquircle diameter={playerBlueDiameter} color={"blue"} borderType={"dashed"}/>
        </SquircleContainer>
    )
}