import { useState } from 'react';
import { useRouteData } from 'react-static';
import axios from 'axios';

function WeatherPage() {
  const [weather, setWeather] = useState();

  async function handleClick() {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Kunming&appid=YOUR_APPID');
    setWeather(response.data.weather[0].description);
  }

  return (
    <div>
      <h1>Weather Page</h1>
      <button onClick={handleClick}>Get Kunming Weather</button>
      {weather && <p>Today's weather in Kunming: {weather}</p>}
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: { title: 'Weather Page' },
  };
};

export default WeatherPage;
