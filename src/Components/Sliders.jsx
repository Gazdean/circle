
import GameSlider from "./GameSlider"

export default function ShowSliders({buttonDisabled, setPlayerGreenDiameter, setPlayerRedDiameter, setPlayerBlueDiameter, handleSubmit}) {
    
    return(
        <div id="sliders-container">
            <GameSlider sliderColor={"success"} setPlayerDiameter={setPlayerGreenDiameter}/>
            <GameSlider sliderColor={"error"} setPlayerDiameter={setPlayerRedDiameter} />
            <GameSlider sliderColor={"primary"} setPlayerDiameter={setPlayerBlueDiameter} />
        </div>
    )
}