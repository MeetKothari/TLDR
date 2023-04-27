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
    { name: "Sandstone", color: "#b0ac8f", fontColor: "white" },
    { name: "Cotton Candy", color: "#FFDACC", fontColor: "white"},
    { name: "Sunrise Red", color: "#E77577", fontColor: "white"},
    { name: "Gatorade Green", color: "#CFF800", fontColor: "black"},
    { name: "Royalty", color: "#7d3cff", fontColor: "white"},
    { name: "Night Blue Shadow", color: "#12343b", fontColor: "white"},
    { name: "Gingerbread", color:"#5E2C04", fontColor:"white"},
    { name: "Sleuth Orange", color: "#feb300", fontColor:"black"},
    { name: "Blue Popsicle", color: "#1dbab4", fontColor: "white"},
    { name: "Goldilocks", color:"#FFDC6A", fontColor:"white"},
    { name: "Fire Truck Red", color:"#E62739", fontColor:"white"},
    { name: "Toffee", color: "#c9af98", fontColor:"white"},
    { name: "The Blackest Night", color: "#000000", fontColor:"white"},
    { name: "Minty Fresh", color: "#4cb69f", fontColor:"white"},
    { name: "Deep in the Forest", color: "#235347", fontColor:"white"},
    { name: "Moose Tracks", color:"#432616", fontColor:"white"},
    { name: "Cinnamon", color: "#652A0E", fontColor:"white"},
  ];

  const handleChangeTheme = (themeName) => {
    localStorage.setItem('backgroundColor', themeName)
  };

  const navigate = useNavigate();

  return (
    <div className="Suth-content-container">
      <div className="Suth-container settings">
        <a href="/home">
          <img src={mySVG1} className="coffeehome" alt="Home" />
        </a>
        <div className="swrapper">
          <img src={mySVG} className="readingsit" alt="My SVG" />
          <div className="Suth-content settings-content">
            <h1 className="Suth-title">Settings</h1>
            <div className="Suth-subtitle settings-flair">
              <p>Change your account settings here.</p>
            </div>
            <div className="form-group">
              <h2 className="Suth-subtitle">Personal Information</h2>
              <div className="sform-control">
                <label htmlFor="email">
                  Your current nickname is:{" Guest"}
                </label>
                <input type="email" id="email" />
              </div>
              <p className="Suth-forgot-password">
                Want to change your nickname?{" "}
                <Link to="/change-nickname">Change it!</Link>
              </p>
              <p className="Suth-forgot-password">
                Forgot password?{" "}
                <Link to="/forgot-password">Reset here!</Link>
              </p>
            </div>
            <div className="themes-section">
              <h1 className="Suth-title">Themes</h1>
              <div className="Suth-subtitle settings-flair">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
