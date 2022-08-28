import { Box, Text } from '@chakra-ui/react'
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const convertTemp = (temp) => {
  return (temp - 273.15).toFixed();
}
function MainInfos(props) {
  const { temp, min, max } = props

  return (
    <Box style={{ display: '-webkit-inline-box' }}>
      <Box style={{ displey: 'flex' }}>
        <Text style={{ fontSize: '90px' }}>
          {convertTemp(temp)}
        </Text>
      </Box>


      <Box style={{
        display: 'table-caption',
      }}>
        <Text style={{ marginTop: '30px' }}> °C</Text>
        <Box style={{ display: 'inline-flex' }}>
          <BsArrowUp style={{ marginTop: '3px' }} />
          <Text style={{}}>
            {`${convertTemp(max)}°`}
          </Text>
        </Box>
        <Box style={{ display: 'inline-flex' }}>
          <BsArrowDown style={{ marginTop: '3px' }} />
          <Text style={{}}>
            {`${convertTemp(min)}°`}
          </Text>
        </Box>

      </Box>

    </Box>
  );
}

export default MainInfos;
