import IndividualSquircle from "./IndivdualSquircle";
import SquircleContainer from "./SquircleContainer";

export default function GameCircles({ gameDiameters}) {
    return (
        <SquircleContainer>
            <IndividualSquircle diameter={gameDiameters.green} color={"green"} borderType={"solid"}/>      
            <IndividualSquircle diameter={gameDiameters.red} color={"red"} borderType={"solid"}/>      
            <IndividualSquircle diameter={gameDiameters.blue} color={"blue"} borderType={"solid"}/>
        </SquircleContainer>
    )
}