import IndividualSquircle from "./IndivdualSquircle";
import SquircleContainer from "./SquircleContainer";

export default function GameCircles({/*greenDiameter, redDiameter, blueDiameter,*/ gameDiameters}) {
    return (
        <SquircleContainer>
            <IndividualSquircle diameter={/*greenDiameter*/gameDiameters.green} color={"green"} borderType={"solid"}/>      
            <IndividualSquircle diameter={/*redDiameter*/gameDiameters.red} color={"red"} borderType={"solid"}/>      
            <IndividualSquircle diameter={/*blueDiameter*/gameDiameters.blue} color={"blue"} borderType={"solid"}/>
        </SquircleContainer>
    )
}