import React, { useState } from 'react';
import axios from 'axios';
import Context from '../../Context';
import Content from '../Content';
import DateTime from '../DateTime';
import Error from '../Error';
import Title from './Title/Index';
import WeatherSearch from '../WeatherSearch';
import WeatherData from '../WeatherData';
import style from './style.module.css';

const API_KEY = '9fc63206d560646d110d35702c4781ca';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState();
  const [error, setError] = useState();

  const apiRequest = async (e) => {
    e.preventDefault();
    const cityName = e.target.elements.city.value;
    if (!cityName) {
      return setError('Please enter the City'), setWeather(null);
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    const request = axios.get(url);
    const response = await request;
    
    setError(null);
    setWeather(response.data.main);
    setCity(response.data.name);
  };

  return (
    <div className={style.main}>
      <Title />
      <Content>
        <Context.Provider value={{ apiRequest, weather, city }}>
          <DateTime />
          <WeatherSearch />
          {error !== null && <p>{<Error error={error} />}</p>}
          {weather !== null && <WeatherData />}
        </Context.Provider>
      </Content>
    </div>
  );
};

export default Weather;
