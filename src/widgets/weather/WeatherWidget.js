import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Draggable from 'react-draggable';
import './weather.css';

import { ReactComponent as SettingsIcon } from "../../components/settings.svg";

const WeatherWidget = () => {
  const [location, setLocation] = useState('Lowell');
  const [latitude, setLatitude] = useState('42.645')
  const [longitude, setLongitude] = useState('-72.307')
  const [city, setCity] = useState('Lowell, MA');
  const [temperature, setTemperature] = useState('');
  const [conditions, setConditions] = useState('');
  const [humidity, setHumidity] = useState('');
  const [photoUrl, setConditionsPhotoUrl] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const getLocationData = async () => {
      setLatitude(locationResponse.data.results[0].position.lat);
      setLongitude(locationResponse.data.results[0].position.lon);
      setCity(locationResponse.data.results[0].address.freeformAddress);
    }

    const getWeatherData = async () => {
      setCity(weatherResponse.data.name);
      setTemperature(Math.round(weatherResponse.data.results[0].temperature.value));
      setConditions(weatherResponse.data.results[0].phrase);
      setHumidity(weatherResponse.data.results[0].relativeHumidity);
      setConditionsPhotoUrl(`${process.env.PUBLIC_URL}/conditions/${weatherResponse.data.results[0].iconCode}.png`);
    };

    if (location !== '') {
      getLocationData();
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

  // Calculate screen size and set bounds accordingly
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bounds = {
    top: height * 0.05,
    left: width * -0.4,
    right: width * 0.0001,
    bottom: height * 0.6,
  };

  return (
    <Draggable bounds={bounds} grid={[25, 25]} defaultPosition={{x: -50, y: 220}}>
      <div className={`weather-widget ${isFlipped ? 'flipped' : ''}`}>
        <div className="widget-handle">
          <div className="widget-handle-bar"></div>
          <div className="widget-handle-bar"></div>
          <div className="widget-handle-bar"></div>
        </div>
        <div className="widget-content">
          <div className="front">
            <h2 id='city'>{city}</h2>
            <div className='conditionsImageCircle'>
            <img id='conditionsImage' src={process.env.PUBLIC_URL + photoUrl} />
            </div>
            <h2 id='temperature'>{temperature}&#176; F</h2>
            <p id='conditions'>{conditions}</p>
            <p id='humidity'>Humidity: {humidity}%</p>
            <SettingsButton icon={<SettingsIcon/>} onClick={() => setIsFlipped(true)} />
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
              <button className="weather-widget-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

function SettingsButton(props) {

  return (
    <li className="settings-button-holder">
      <a
        href="#"
        className="settings-button"
        onClick={() => {
          props.onClick && props.onClick();
        }}
      >
        {props.icon}
      </a>
    </li>
  );
}

export default WeatherWidget;
