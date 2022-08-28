
import { Box, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ExtraInfos from '../../components/ExtraInfos'
import MainInfos from '../../components/MainInfos'
import { Link } from 'react-router-dom';
import { BsArrow90DegLeft } from "react-icons/bs";

import {
  WiDayCloudyHigh, WiCloudy,
  WiRainMix, WiRain, WiSnowflakeCold, WiDaySunny
} from "react-icons/wi";

const conditionMap = {
  'clear': <WiDaySunny size={110} />,
  'clouds': <WiDayCloudyHigh size={110} />,
  'drizzle': <WiCloudy size={110} />,
  'rain': <WiRainMix size={110} />,
  'thunderstorm': <WiRain size={110} />,
  'snow': <WiSnowflakeCold size={110} />,
}

const conditionStyleMap = {
  'clear': { backgroundImage: 'linear-gradient(#57CBDB, #3BA0B4)', color: 'white' },
  'clouds': { backgroundImage: 'linear-gradient(#57CBDB, #3BA0B4)', color: 'white' },
  'drizzle': { backgroundImage: 'linear-gradient(#57CBDB, #3BA0B4)', color: 'white' },
  'rain': { backgroundImage: 'linear-gradient(#616978, #3B4150)', color: 'white' },
  'thunderstorm': { backgroundImage: 'linear-gradient(#616978, #3B4150)', color: 'white' },
  'snow': { backgroundImage: 'linear-gradient( #E0E0E0, #A3A3A3)', color: 'black' },
}

function City() {
  const { cityName } = useParams();
  const [weatherValues, setWeatherValues] = useState(null)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeatherValues(data);
        setLoading(false)
      })
  }, [cityName]);

  return (
    <Box >
      {
        loading ?
          <Box style={{ color: '#4BB9CB', textAlign: 'center' }}> Carregando </Box>
          :
          <Box style={{ ...{ minHeight: '100vh' }, ...conditionStyleMap[weatherValues?.weather[0].main.toLowerCase()] }} className="App" >
            <Box style={{
              width: '10px',
              marginLeft: '20px',
              paddingTop: '20px'
            }}>
              <Link to={`/`}>
                <BsArrow90DegLeft />
              </Link>
            </Box>
            <Box style={{ marginTop: '55px', textAlign: '-webkit-center' }}>

              <Text style={{ fontSize: '30px' }}> {weatherValues?.name.toUpperCase()} </Text>
              <Text style={{ fontSize: '20px' }}> {weatherValues?.weather[0].main}</Text>

              <MainInfos min={weatherValues?.main.temp_min} max={weatherValues?.main.temp_max} temp={weatherValues?.main.temp} />

              {conditionMap[weatherValues?.weather[0].main.toLowerCase()]}

              <ExtraInfos
                sunset={weatherValues?.sys.sunset}
                sunrise={weatherValues?.sys.sunrise}
                humidity={weatherValues?.main.humidity}
                wind={weatherValues?.wind.speed}
              />

            </Box>
          </Box >
      }
    </Box>
  );
}

export default City;
