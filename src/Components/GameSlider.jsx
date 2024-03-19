import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function GameSlider({sliderColor, setPlayerDiameter}) {

  const handleChange = (event, newValue) => {
    setPlayerDiameter(newValue);
  };

  return (
    <div className="d-flex flex-column justify-content:center align-items-center pt-3 me-3">
      <Box sx={{ width: "80vw", maxWidth:"400px"}}>
        <Slider size ={"medium"} defaultValue={0} onChange={handleChange} max={330} color={sliderColor} className="m-0 p-2"/>
      </Box>
    </div>
  );
}