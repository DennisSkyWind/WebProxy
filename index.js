import { useState } from 'react';
import axios from 'axios';

export async function getStaticProps() {
  return {
    props: { title: 'Weather Page' },
  };
}

export default function WeatherPage() {
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
