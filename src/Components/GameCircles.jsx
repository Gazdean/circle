import IndividualSquircle from "./IndivdualSquircle";
import SquircleContainer from "./SquircleContainer";

export default function GameCircles({ gameDiameters, setTouching}) {
    return (
        <SquircleContainer  ontouchstart={()=>setTouching(true)}
        ontouchend={()=>setTouching(false)}>
            <IndividualSquircle diameter={gameDiameters.green} color={"green"} borderType={"solid"}/>      
            <IndividualSquircle diameter={gameDiameters.red} color={"red"} borderType={"solid"}/>      
            <IndividualSquircle diameter={gameDiameters.blue} color={"blue"} borderType={"solid"}/>
        </SquircleContainer>
    )
}