import IndividualSquircle from "./IndivdualSquircle";
import SquircleContainer from "./SquircleContainer";

export default function GameCircles({greenDiameter, redDiameter, blueDiameter}) {
    return (
        <SquircleContainer>
            <IndividualSquircle diameter={greenDiameter} color={"green"} borderType={"solid"}/>      
            <IndividualSquircle diameter={redDiameter} color={"red"} borderType={"solid"}/>      
            <IndividualSquircle diameter={blueDiameter} color={"blue"} borderType={"solid"}/>
        </SquircleContainer>
    )
}