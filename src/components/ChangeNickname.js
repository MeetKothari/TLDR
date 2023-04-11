import React, { useState } from "react";
import axios from "axios";

import "../App.css";
import mySVG from './selfie.svg';
import mySVG1 from './loving.svg';
import mySVG2 from './bikini.svg';
import mySVG3 from './ballet.svg';
import mySVG4 from './coffee.svg';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = async (e) => {
  };

  return (
    <div className="Auth-form-container">
    <a href="/home"><img src={mySVG4} className="coffeehome" alt="Home" /></a>
      <img src={mySVG} className="messy" alt="My SVG1" />
      <img src={mySVG1} className="heart" alt="My SVG1" />
      <img src={mySVG2} className="bikini" alt="My SVG2"/>
      <img src={mySVG3} className="ballet" alt="My SVG2"/>

      <form className="Auth-container">
        <div className="Auth-content">
          <h3 className="Auth-title">What do you want to be called?</h3>
          <div className="form-group mt-3">
            <label>Enter your desired nickname: </label>
            <input
              type="email"
              className="form-group"
              placeholder="Guest"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="Auth-button" onClick={handleSendCode}>
              Change it!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
