import React, { useState } from "react";
import axios from "axios";

import "../App.css";
import mySVG from './MessyDoodle.svg';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = async (e) => {
    e.preventDefault();
    setIsCodeSent(true);
  };

  return (
    <div className="Auth-form-container">
      <img src={mySVG} className="messy" alt="My SVG1" />
      <form className="Auth-container">
        <div className="Auth-content">
          <h3 className="Auth-title">Forgot your password?</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-group"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="Auth-button" onClick={handleSendCode}>
              Send Verification Code
            </button>
          </div>
          {isCodeSent && (
            <div className="form-group mt-3">
              <label>Verification Code</label>
              <div className="d-flex justify-content-between">
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
