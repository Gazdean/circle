// import GameSlider from "./GameSlider"

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function ShowSliders({playerDiameters, setPlayerDiameters}) {
    
  function handleGreenChange (event, newValue) {
    setPlayerDiameters({...playerDiameters, green: newValue});
  };
  function handleRedChange (event, newValue) {
    setPlayerDiameters({...playerDiameters, red: newValue});
  };
  function handleBlueChange (event, newValue) {
    setPlayerDiameters({...playerDiameters, blue: newValue});
  };

  return(
    <div className="d-flex flex-column justify-content:center align-items-center pt-3 me-3">
      <Box sx={{ width: "80vw", maxWidth:"400px"}}>
        <Slider size ={"medium"} defaultValue={0} onChange={handleGreenChange} max={330} color={"success"} className="m-0 p-2"/>
        <Slider size ={"medium"} defaultValue={0} onChange={handleRedChange} max={330} color={"error"} className="m-0 p-2"/>
        <Slider size ={"medium"} defaultValue={0} onChange={handleBlueChange} max={330} color={"primary"} className="m-0 p-2"/>
      </Box>
    </div>
  )
}