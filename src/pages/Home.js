import React, { useState, useEffect } from "react";
import CalendarWidget from '../widgets/calendar/CalendarWidget';
import WeatherWidget from "../widgets/weather/WeatherWidget";
import TrafficWidget from '../widgets/traffic/TrafficWidget'
import TodoWidget from '../widgets/todo/TodoWidget'
import StickyNoteWidget from '../widgets/stickyNote/StickyNoteWidget'
import Clock from '../components/Clock';

import "../App.css";
import mySVG from '../components/readingcross.svg';
import mySVG1 from '../components/runningwoman.svg';
import mySVG2 from '../components/ipd.svg';
import mySVG3 from '../components/zombie.svg';

import { Link, Navigate, useNavigate } from "react-router-dom";
import { ReactComponent as AddIcon } from "../components/add.svg";
import { ReactComponent as SettingsIcon } from "../components/settings.svg";
import { ReactComponent as LogoutIcon } from "../components/logout.svg";
import { ReactComponent as CloseIcon } from "../components/close.svg";
import { ReactComponent as HelpIcon } from "../components/help.svg";
import Draggable from "react-draggable";

export default function App(props) {
  const navigate = useNavigate();
  const [widgets, setWidgets] = useState([]);

  const handleLogout = () => {
    // perform logout logic here
    navigate("/");
  };

  const handleHelp = () => {
    // perform logout logic here
    navigate("/help");
  };

  useEffect(() => {
    const themeColor = localStorage.getItem('backgroundColor');
    const body = document.body;
      body.style.backgroundColor = themeColor;
  }, []);

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <div>
      <img src={mySVG} className="readingcross" alt="My SVG1" />
      <img src={mySVG1} className="runningwoman" alt="My SVG1" />
      <img src={mySVG2} className="ipd" alt="My SVG1" />
      <img src={mySVG3} className="zmb" alt="My SVG1" />
      <Navbar>
          <Clock /> {/* insert clock component */}
          <AddItem icon={<AddIcon></AddIcon>} onWidgetAdd={widget => setWidgets([...widgets, widget])} />
          <NavItem icon={<SettingsIcon/>} onClick={handleSettingsClick} />
          <NavItem icon={<HelpIcon/>} onClick={handleHelp} />
          <NavItem icon={<LogoutIcon/>} onClick={handleLogout} />
      </Navbar>
      <div className="widgets-container">
        {widgets.map((widget, index) => (
          <Draggable key={index} bounds={{left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight}}>
            <div className="widget">  
              {widget}
              <button className="delete-button" onClick={() => {
                const newWidgets = [...widgets];
                newWidgets.splice(index, 1);
                setWidgets(newWidgets);
              }}>
                <CloseIcon />
              </button> 
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <h1>TLDR</h1>
        </li>
        {props.children}
      </ul>
    </nav>
  );
}

function AddItem(props) {
  const [open, setOpen] = useState(false);

  const handleWeatherAdd = () => {
    setOpen(false);
    props.onWidgetAdd(<WeatherWidget />);
  };

  const handleTrafficAdd = () => {
    setOpen(false);
    props.onWidgetAdd(<TrafficWidget />);
  };

  const handleCalendarAdd = () => {
    setOpen(false);
    props.onWidgetAdd(<CalendarWidget />);
  };

  const handleTODOAdd = () => {
    setOpen(false);
    props.onWidgetAdd(<TodoWidget />);
  };
  
  const handleStickyAdd = () => {
    setOpen(false);
    props.onWidgetAdd(<StickyNoteWidget />);
  };

  const handlePopupClose = () => {
    setOpen(false);
  };

  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={(props) => {
          setOpen(true);
          props.onClick && props.onClick();
        }}
      >
        {props.icon}
      </a>

      {open && (
        <div className="popup">
          <div className="popup-container">
            <button className="close-button" onClick={handlePopupClose}>
              Close
            </button>
            <button className="Auth-button" onClick={handleCalendarAdd}>
              Add Calendar Widget
            </button>
            <button className="Auth-button" onClick={handleWeatherAdd}>
              Add Weather Widget
            </button>
            <button className="Auth-button" onClick={handleTrafficAdd}>
              Add Traffic Widget
            </button>
            <button className="Auth-button" onClick={handleTODOAdd}>
              Add TODO Widget
            </button>
            <button className="Auth-button" onClick={handleStickyAdd}>
              Add Sticky Note Widget
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

function NavItem(props) {

  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => {
          props.onClick && props.onClick();
        }}
      >
        {props.icon}
      </a>
    </li>
  );
}