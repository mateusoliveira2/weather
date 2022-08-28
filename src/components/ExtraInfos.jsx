import { Box, Text } from '@chakra-ui/react'

const getTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  var minutes = "0" + date.getMinutes();
  var formattedTime = date.getHours() + ':' + minutes.substr(-2);

  return formattedTime;
}
const Info = (props) => {
  const { name, value } = props
  return (
    <Box style={{ margin: '5px' }}>
      <Text>
        {name}
      </Text>
      <Text>
        {value}
      </Text>
    </Box>
  )
}

function ExtraInfos(props) {
  const { sunset, sunrise, humidity, wind } = props

  return (
    <Box style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
      <Info name="wind" value={wind + ' m/s'} />
      <Box style={{
        borderLeft: '1px solid',
        height: '20px',
        marginTop: '20px'
      }} />
      <Info name="sunrise" value={getTime(sunrise)} />
      <Box style={{
        borderLeft: '1px solid',
        height: '20px',
        marginTop: '20px'
      }} />
      <Info name="sunset" value={getTime(sunset)} />
      <Box style={{
        borderLeft: '1px solid',
        height: '20px',
        marginTop: '20px'
      }} />
      <Info name="humidity" value={humidity + ' %'} />
    </Box>
  );
}

export default ExtraInfos;
