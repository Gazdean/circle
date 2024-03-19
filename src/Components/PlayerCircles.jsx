import IndividualSquircle from "./IndivdualSquircle"
import SquircleContainer from "./SquircleContainer"

export default function PlayerCircles({/*playerGreenDiameter, playerRedDiameter, playerBlueDiameter,*/ playerDiameters}) {
    
    return (
        <SquircleContainer>
            <IndividualSquircle diameter={/*playerGreenDiameter*/ playerDiameters.green} color={"green"} borderType={"dashed"}/>      
            <IndividualSquircle diameter={/*playerRedDiameter*/ playerDiameters.red} color={"red"} borderType={"dashed"}/>      
            <IndividualSquircle diameter={/*playerBlueDiameter*/ playerDiameters.blue} color={"blue"} borderType={"dashed"}/>
        </SquircleContainer>
    )
}