import { IoEarthOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react'
import './Home.css';

function Home() {
  const cities = ['Dallol', 'Fairbanks', 'Londres', 'Recife', 'Vancouver', 'Yakutsk']

  return (
    <Box className="App">
      <Box className="home">
        <Text className='mainName'> WEATHER</Text>
        <Text> select a city</Text>

        <IoEarthOutline size={110} />
        <Box className='cities'>
          {cities.map((city) => {
            return (
              <Link to={`/city/${city}`}>
                <Text className='cityName'>
                  {city}
                </Text>
              </Link>
            )

          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
