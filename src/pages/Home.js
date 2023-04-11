import React, { useState, useEffect } from "react";
import WidgetPopup from "./WidgetPopup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ReactComponent as AddIcon } from "../components/add.svg";
import { ReactComponent as DarkIcon } from "../components/dark.svg";
import { ReactComponent as LightIcon } from "../components/light.svg";
import { ReactComponent as ProfileIcon } from "../components/profile.svg";
import { ReactComponent as SettingsIcon } from "../components/settings.svg";
import { ReactComponent as SportsIcon } from "../components/sports.svg";
import { ReactComponent as TrafficIcon } from "../components/traffic.svg";
import { ReactComponent as WeatherIcon } from "../components/weather.svg";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const isDarkModeSet = localStorage.getItem("dark-mode");
    setIsDarkMode(isDarkModeSet === "true");
  }, []);

  const handleToggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem("dark-mode", newIsDarkMode.toString());
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const themeColor = localStorage.getItem('backgroundColor');
    const body = document.body;
      body.style.backgroundColor = themeColor;
  }, []);

  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const [items, setItems] = useState([]);

  const handleAddClick = () => {
    setAddMenuOpen(!addMenuOpen);
  };

  const handleAddItem = (itemName) => {
    setItems([...items, itemName]);
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };
  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <div>
      <Navbar>
        <h1 className="logo">TLDR</h1>
        <AddItem icon={<AddIcon />} onClick={handleAddClick} />
        {/* <NavItem
          icon={isDarkMode ? <LightIcon /> : <DarkIcon />}
          onClick={handleToggleTheme}
        /> */}
        {/* <NavItem icon={<ProfileIcon />}>
          <Dropdown>
            <DropdownItem icon={<ProfileIcon />}>
              <Link to="/profile">Profile</Link>
              </DropdownItem>
              <DropdownItem icon={<SettingsIcon />}>
                <Link to="/settings">Settings</Link>
                </DropdownItem>
                </Dropdown>
        </NavItem> */}
        {/* <NavItem icon={<ProfileIcon />} onClick={handleProfileClick}>
          Profile
        </NavItem> */}
        <NavItem icon={<SettingsIcon/>} onClick={handleSettingsClick}>
          Settings
        </NavItem>
      </Navbar>
      <div className="widget-container"></div>
      <Home items={items} />
    </div>
  );
}

function Home(props) {
  return <div className="body">{props.items.map((item, index) => <Square key={index} />)}</div>;
}

function Square() {
  return <div className="square"></div>;
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function AddItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => {
          setOpen(!open);
          props.onClick && props.onClick();
        }}
      >
        {props.icon}
      </a>

      {open && (
        <div className="popup">
          <WidgetPopup />
        </div>
      )}
    </li>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let handler = (e)=> {
      if (e.target) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => {
          setOpen(!open);
          props.onClick && props.onClick();
        }}
      >
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function Dropdown(props) {
  return <div className="dropdown">{props.children}</div>;
}

function DropdownItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <a href="#" className="menu-item" onClick={props.onClick}>
      <span className="icon-button">{props.icon}</span>
      {props.children}
    </a>
  );
}
