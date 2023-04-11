import React from "react";
import '../App.css';
import mySVG from '../components/sitting-reading.svg';
import { Link, useNavigate } from "react-router-dom";

function Settings() {
  return (
    <div className="Auth-container">
        <div className="wrapper">
            <img src={mySVG} className="readingsit" alt="My SVG" />
            <div className="Auth-content settings-content">
                <h1 className="Auth-title">Settings</h1>
                <div className="Auth-subtitle settings-flair">
                    <p>Change your account settings here.</p>
                </div>
            <div className="form-group">
            <h2 className="Auth-subtitle">Personal Information</h2>
            {/* <div className="form-control">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div> */}
            <div className="form-control">
              <label htmlFor="email">Your current nickname is: </label>
              <input type="email" id="email" />
            </div>
             <p className="Auth-forgot-password">
            Want to change your nickname? <Link to="/change-nickname">Change it!</Link>
          </p>
            <p className="Auth-forgot-password">
            Forgot password? <Link to="/forgot-password">Reset here</Link>
          </p>
          </div>
          <div className="form-group">
            <h2 className="Auth-subtitle">Notifications</h2>
            <div className="form-control">
              <label htmlFor="email-notifications">Email Notifications</label>
              <input type="checkbox" id="email-notifications" />
            </div>
            <div className="form-control">
              <label htmlFor="push-notifications">Push Notifications</label>
              <input type="checkbox" id="push-notifications" />
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Settings;
