/* artwork credit: https://www.opendoodles.com/*/

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSVG } from 'react-svg';

import "../App.css";
import mySVG from '../components/coffee.svg';
import mySVG1 from '../components/laying.svg';
import mySVG2 from '../components/swinging.svg';
import mySVG3 from '../components/ReadingSideDoodle.svg'


export default function AuthForm(props) {
  const [authMode, setAuthMode] = useState("signin");
  const navigate = useNavigate();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleGuestLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  }

  return (
    <div className="Auth-container">
      <div className="wrapper">
        <img src={mySVG1} className="woman" alt="My SVG1" />
        <div className="Auth-intro">
          {/* <h1 className="Auth-intro-words"> Traffic. Weather. Sports. </h1>
          <h1 className="Auth-intro-words"> Your morning- simplified. </h1> */}
        </div>
        <img src={mySVG} className="coffee" alt="My SVG" />
        <img src={mySVG2} className="swings" alt="My SVG1" />
        <img src={mySVG3} className="reading" alt="My SVG1" />
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
          {authMode === "signin" ? (
            <>
              <button type="submit" className="Auth-button">
                Sign In
              </button>
              <button
                type="button"
                className="Auth-button"
                onClick={handleGuestLogin}
              >
                Login as guest
              </button>
            </>
          ) : (
            <button type="submit" className="Auth-button">
              Sign Up
            </button>
          )}
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
