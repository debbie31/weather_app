import React, { useContext } from 'react';
import Context from '../Context';
import WeatherToday from './WeatherToday';

const WeatherData = () => {
  const { weather, city } = useContext(Context);
  const { temp, humidity, pressure } = weather;
  return (
    <WeatherToday
      temp={temp}
      humidity={humidity}
      pressure={pressure}
      city={city}
    />
  );
};

export default WeatherData;
