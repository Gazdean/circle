import GameSlider from "./GameSlider"

export default function ShowSliders({setPlayerGreenDiameter, setPlayerRedDiameter, setPlayerBlueDiameter}) {
    
    return(
        <div id="sliders-container">
            <GameSlider sliderColor={"success"} setPlayerDiameter={setPlayerGreenDiameter}/>
            <GameSlider sliderColor={"error"} setPlayerDiameter={setPlayerRedDiameter} />
            <GameSlider sliderColor={"primary"} setPlayerDiameter={setPlayerBlueDiameter} />
        </div>
    )
}