import HumidityIcon from './HumidityIcon/Index';
import PressureIcon from './PressureIcon/Index';
import TemperatureIcon from './TemperatureIcon/Index';

const WeatherToday = ({ city, temp, humidity, pressure }) => {
  return (
    <div>
      <h2>
        Today's weather for <span>{city}</span>
      </h2>
      <span>
        <h4>Temperature</h4>
        <TemperatureIcon />
        <p>{temp} °C</p>
      </span>
      <span>
        <h4>Humidity</h4>
        <HumidityIcon />
        <p>{humidity} %</p>
      </span>
      <span>
        <h4>Pressure</h4>
        <PressureIcon />
        <p>{pressure} hPa</p>
      </span>
    </div>
  );
};

export default WeatherToday;
