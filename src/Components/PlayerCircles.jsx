import IndividualSquircle from "./IndivdualSquircle"
import SquircleContainer from "./SquircleContainer"

export default function PlayerCircles({playerDiameters}) {
    
    return (
        <SquircleContainer>
            <IndividualSquircle diameter={playerDiameters.green} color={"green"} borderType={"dashed"}/>      
            <IndividualSquircle diameter={playerDiameters.red} color={"red"} borderType={"dashed"}/>      
            <IndividualSquircle diameter={playerDiameters.blue} color={"blue"} borderType={"dashed"}/>
        </SquircleContainer>
    )
}