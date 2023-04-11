import React, { useState } from "react";
import "../App.css";
import mySVG from "../components/sitting-reading.svg";
import mySVG1 from "../components/coffee.svg";
import { Link, useNavigate } from "react-router-dom";

function Settings() {
  const [theme, setTheme] = useState("Default");
  const themes = [
    { name: "Default", color: "#e6e6e6", fontColor: "black" },
    { name: "Dark", color: "#394048", fontColor: "white" },
    { name: "Light", color: "#faf7ee", fontColor: "black" },
    { name: "Waves", color: "#244b68", fontColor: "white" },
    { name: "Harbor", color: "#33677d", fontColor: "white" },
    { name: "Sandstone", color: "#b0ac8f", fontColor: "white" }
  ];

  const handleChangeTheme = (themeName) => {
    localStorage.setItem('backgroundColor', themeName)
  };

  const navigate = useNavigate();

  const handleLogout = () => {
      // perform logout logic here
      navigate("/");
  };

  return (
    <div className="Auth-container">
      <a href="/home">
        <img src={mySVG1} className="coffeehome" alt="Home" />
      </a>
      <div className="wrapper">
        <img src={mySVG} className="readingsit" alt="My SVG" />
        <div className="Auth-content settings-content">
          <h1 className="Auth-title">Settings</h1>
          <div className="Auth-subtitle settings-flair">
            <p>Change your account settings here.</p>
          </div>
          <div className="form-group">
            <h2 className="Auth-subtitle">Personal Information</h2>
            <div className="form-control">
              <label htmlFor="email">
                Your current nickname is:{" Guest"}
              </label>
              <input type="email" id="email" />
            </div>
            <p className="Auth-forgot-password">
              Want to change your nickname?{" "}
              <Link to="/change-nickname">Change it!</Link>
            </p>
            <p className="Auth-forgot-password">
              Forgot password?{" "}
              <Link to="/forgot-password">Reset here!</Link>
            </p>
          </div>
          <div className="themes-section">
            <h1 className="Auth-title">Themes</h1>
            <div className="Auth-subtitle settings-flair">
              <p>Change your account theme here.</p>
            </div>
            <div className="themes-list">
              {themes.map((item) => (
                <div
                  key={item.name}
                  className="theme-tile"
                  style={{
                    backgroundColor: item.color,
                    color: item.fontColor,
                    border: item.name === theme ? "2px solid black" : "none"
                  }}
                  onClick={() => handleChangeTheme(item.color)}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <button type="submit" className="Auth-button" onClick={handleLogout}> Log Out </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
