import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Draggable from 'react-draggable';
import './weather.css';
//import { ReactComponent as SettingsIcon } from "./components/settings.svg";

const WeatherWidget = () => {
  const [location, setLocation] = useState('Lowell');
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [conditions, setConditions] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const getWeatherData = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=56fa77af4a1c5b3e00bd7d5e224fd862&units=imperial`
      );
      setCity(response.data.name);
      setTemperature(Math.round(response.data.main.temp));
      setConditions(response.data.weather[0].description);
    };

    if (location !== '') {
      getWeatherData();
    }
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFlipped(false);
  };

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className={`weather-widget ${isFlipped ? 'flipped' : ''}`}>
      <div className="front">
        <h2 id='city'>{city}</h2>
        <h2 id='temperature'>{temperature}&#176; F</h2>
        <p id='conditions'>{conditions}</p>
        <button onClick={() => setIsFlipped(true)}>Settings</button>
      </div>
      <div className="back">
        <form onSubmit={handleSubmit}>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WeatherWidget;
