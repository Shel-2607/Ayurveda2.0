import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>AI-DASD</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/goals">Our Goals</Link></li>
          <li><Link to="/need">Vision</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/guide">Login</Link></li>
        </ul>
      </nav>
      <input type="text" placeholder="Search..." className="search-bar" />
    </header>
  );
};

export default Header;
