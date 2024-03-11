import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function GameSlider({sliderColor, setPlayerDiameter}) {

  const handleChange = (event, newValue) => {
    setPlayerDiameter(newValue);
  };

  return (
    <Box sx={{ width: 345 }}>
      <Slider size ={"medium"} defaultValue={0} onChange={handleChange} max={345} color={sliderColor}/>
    </Box>
  );
}