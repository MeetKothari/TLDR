import React, { useState } from 'react';
import './Help.css';

function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([
    // Your array of articles goes here
  ]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [gettingStartedOpen, setGettingStartedOpen] = useState(false);
  const [gettingWidgetError, setGettingWidgetError] = useState(false);
  const [gettingWidgetSaveError, setGettingWSE] = useState(false);
  const [gettingLagError, setLagError] = useState(false);
  const [gettingWidgetPOS, setWidgetPOS] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle ticket submission logic here
  }

  return (
    <div className="help-container">
      <div className="menu">
        <ul>
          <li className="menu-item" onClick={handleMenuClick}>
            FAQ and Error Handling:
            <i className="menu-item-icon">{menuOpen ? '-' : '+'}</i>
          </li>
          <ul className={`menu-sublist ${menuOpen ? 'open' : ''}`}>
            <li className="menu-subitem" onClick={() => setGettingStartedOpen(!gettingStartedOpen)}>
              Getting Started
              {gettingStartedOpen ? ':' : ':'}
              {gettingStartedOpen && (
                <div className="submenu-content">
                  <li className="menu-subsubitem"> New to TLDR? Start by navigating to the 'Settings' page to pick your theme. Once you've done that, start adding widgets as you please!</li>
                </div>
              )}
            </li>
             <li className="menu-subitem" onClick={() => setGettingWidgetError(!gettingWidgetError)}>
              Google Authentication not working
              {gettingWidgetError ? ':' : ':'}
              {gettingWidgetError && (
                <div className="submenu-content">
                  <li className="menu-subsubitem">If your Google authentication is not working, you may need to reset your browser cookies and cache. </li>
                </div>
              )}
            </li>
             <li className="menu-subitem" onClick={() => setGettingWSE(!gettingWidgetSaveError)}>
              Themes and widgets not saving 
              {gettingWidgetSaveError ? ':' : ':'}
              {gettingWidgetSaveError && (
                <div className="submenu-content">
                  <li className="menu-subsubitem"> We're still in the early stages of our public build, so our Mongo database may be experiencing some lag. Sorry about that! </li>
                </div>
              )}
            </li>
            <li className="menu-subitem" onClick={() => setLagError(!gettingLagError)}>
              Widgets being laggy
              {gettingLagError ? ':' : ':'}
              {gettingLagError && (
                <div className="submenu-content">
                  <li className="menu-subsubitem"> All of our widgets are powered using the Azure API suite. As such, some of services may be laggy. This is not an issue on your end, though, if it's ever taking too long, simply refresh the page.  </li>
                </div>
              )}
            </li>
            <li className="menu-subitem" onClick={() => setWidgetPOS(!gettingWidgetPOS)}>
              Widgets not moving
              {gettingWidgetPOS ? ':' : ':'}
              {gettingWidgetPOS && (
                <div className="submenu-content">
                  <li className="menu-subsubitem"> Some of our widgets (most actually) have draggable fields. You should be dragging the widgets from the bottom left or top right corners. If that doesn't work, the site may be lagging. Try restarting. </li>
                </div>
              )}
            </li>
          </ul>
        </ul>
      </div>
      <div className="content">
        <div className="Auth-container">
          <div className="Auth-content">
            <h1 className="Auth-title">Submit a ticket:</h1>
            <h2 className="Auth-subtitle">Have a problem you don't see here? Send us an email!</h2>
            <form className="Auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
                />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <div className="email-field-wrapper">
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                    />
                    </div>
                    </div>
                <div className="form-group">
                  <label htmlFor="issue">Issue</label>
                  <textarea
                  className="form-control"
                  id="issue"
                  placeholder="Please describe your issue here"
                  required
                  ></textarea>
                  </div>
                  <button type="submit" className="Auth-button">
                    Submit
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Help;
