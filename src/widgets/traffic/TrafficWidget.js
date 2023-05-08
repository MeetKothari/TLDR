import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './traffic.css';

import { ReactComponent as SettingsIcon } from "../../components/settings.svg";
import * as atlas from 'azure-maps-control';

const TrafficWidget = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mapHovered, setMapHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [coordinates, setCoordinates] = useState([-71.308, 42.644]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsFlipped(false);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { lat, lon } = data.results[0].position;
        setCoordinates([lon, lat]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadMap = () => {
    const map = new atlas.Map("map", {
      center: coordinates,
      zoom: 12,
      view: "Auto",
      language: "en-US",
      authOptions: {
        authType: 
        subscriptionKey: 
      }
    });

    map.events.add('ready', function () {
      map.setTraffic({
        incidents: true,
        flow: 'absolute'
      });

      map.getCanvasContainer().addEventListener('mouseenter', () => {
        setMapHovered(true);
      });

      map.getCanvasContainer().addEventListener('mouseleave', () => {
        setMapHovered(false);
      });
    });
  };

  useEffect(() => {
    loadMap();
  }, [coordinates]);
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
    <Draggable bounds={bounds}  grid={[25, 25]} defaultPosition={{x: -50, y: 220}} disabled={mapHovered}>
      <div className={`traffic-widget ${isFlipped ? 'flipped' : ''}`}>
        <div className="widget-handle">
          <div className="widget-handle-bar"></div>
          <div className="widget-handle-bar"></div>
          <div className="widget-handle-bar"></div>
        </div>
        <div className="widget-content">
          <div className="front">
            <div id="map"></div>
            <SettingsButton icon={<SettingsIcon/>} onClick={() => setIsFlipped(true)} />
          </div>
          <div className="back">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter location" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <button type="submit">Submit</button>
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

export default TrafficWidget;
