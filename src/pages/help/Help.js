import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import './Help.css';

function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([
    // Your array of articles goes here
  ]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [gettingStartedOpen, setGettingStartedOpen] = useState(false);

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
                  <li className="menu-subsubitem">Some text about getting started</li>
                </div>
              )}
            </li>
            <li className="menu-subitem">Account Settings</li>
            <li className="menu-subitem">Billing and Payments</li>
          </ul>
        </ul>
      </div>
      <div className="content">
        {/* Your content goes here */}
        {/* For example, a search bar and a list of articles */}
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search articles"
        />
        {articles
          .filter((article) =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
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
