import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg';

import "../App.css";
import mySVG from '../components/coffee.svg';

export default function AuthForm(props) {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <div className="Auth-container">
     <div className="wrapper">
      <div className="Auth-intro">
        <h1 className="Auth-intro-words"> Traffic. Weather. Sports. </h1>
        <h1 className="Auth-intro-words"> Your morning- simplified. </h1>
        </div>
        <img src={mySVG} className="coffee" alt="My SVG" />
        </div>
      <div className="Auth-content">
        <h1 className="Auth-title">Welcome to TL;DR. </h1>
        <h2 className="Auth-subtitle">Please sign in or create an account.</h2>
        <form className="Auth-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          {authMode === "signup" && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm password"
              />
            </div>
          )}
          <button type="submit" className="Auth-button">
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </button>
          <div className="Auth-switch">
            {authMode === "signin" ? (
              <>
                <span>Don't have an account yet?</span>
                <button
                  type="button"
                  className="Auth-switch-button"
                  onClick={changeAuthMode}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <span>Already have an account?</span>
                <button
                  type="button"
                  className="Auth-switch-button"
                  onClick={changeAuthMode}
                >
                  Sign In
                </button>
              </>
            )}
          </div>
          <p className="Auth-forgot-password">
            Forgot password? <Link to="/forgot-password">Reset here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
