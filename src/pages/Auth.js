/* artwork credit: https://www.opendoodles.com/*/

import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSVG } from 'react-svg';
import jwtDecode from 'jwt-decode';

import "../App.css";
import mySVG from '../components/coffee.svg';
import mySVG1 from '../components/laying.svg';
import mySVG2 from '../components/swinging.svg';
import mySVG3 from '../components/ReadingSideDoodle.svg'
import mySVG4 from '../components/plant.svg'
import mySVG5 from '../components/dog.svg'


export default function AuthForm(props) {
  const [authMode, setAuthMode] = useState("signin");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "#f8f8f8";
  }, []);

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleGuestLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  }

  //THIS IS EVERYTHING THAT RAUL ADDED

  const [user, setUser] = useState({}); 
  
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    navigate('/home');
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;

    //IM GUESSING THAT RIGHT HERE YOU WOULD ROUTE US BACK TO THE SIGN IN PAGE
  }

  useEffect(() => {
    /* global google */
      google.accounts.id.initialize({
      client_id: "302376557489-k2pvc9bspmjumepa3vddsng7v7o422pa.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );
    
    google.accounts.id.prompt();
  }, [])


  //THIS IS THE END OF WHAT RAUL ADDED


  return (
    <div className="Auth-container">
      <div className="wrapper">
        <div className="Auth-intro">
          {/* <h1 className="Auth-intro-words"> Traffic. Weather. Sports. </h1>
          <h1 className="Auth-intro-words"> Your morning- simplified. </h1> */}
        </div>
        <img src={mySVG} className="coffee" alt="My SVG" />
        <img src={mySVG3} className="reading" alt="My SVG1" />
      </div>
      <div className="Auth-content">
        <h1 className="Auth-title">Welcome to TL;DR. </h1>
        <h2 className="Auth-subtitle">Please sign in or create an account.</h2>
        <form className="Auth-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            < div className = "email-field-wrapper" >
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
            <img src={mySVG1} className="woman" alt="My SVG1" />
            <img src={mySVG2} className="swings" alt="My SVG1" />
            <img src={mySVG4} className="plant" alt="My SVG4" />
             <img src={mySVG5} className="dog" alt="My SVG5" />
          </div>
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
            Forgot password? <Link to="/forgot-password">Reset here!</Link>
          </p>
        </form>
        
        {/* THIS IS EVERYTHING THAT RAUL ADDED*/}
        <div className='App'>
        <div id='signInDiv'></div>

        {/* RIGHT HERE IS WHERE YOU WOULD ROUTE US TO THE HOME PAGE*/}
        
        { Object.keys(user).length != 0 && 
          <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
        }

        { user && 
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
          </div> 
        }
      </div>
      {/* THIS IS THE END OF EVERYTHING THAT RAUL ADDED*/}



      </div>
    </div>
  );
}