import GameSlider from "./GameSlider"

export default function ShowSliders({setPlayerGreenDiameter, setPlayerRedDiameter, setPlayerBlueDiameter}) {
    
    return(
        <div id="sliders-container" className="d-flex flex-column justify-content:center align-items-center pt-3">
            <GameSlider sliderColor={"success"} setPlayerDiameter={setPlayerGreenDiameter}/>
            <GameSlider sliderColor={"error"} setPlayerDiameter={setPlayerRedDiameter} />
            <GameSlider sliderColor={"primary"} setPlayerDiameter={setPlayerBlueDiameter} />
        </div>
    )
}