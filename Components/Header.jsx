import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="left-side">
          <div className="logo">
            <img 
              src={logo}
              alt="Logo" 
            />
            <span>Online Mobile Recharge</span>
          </div>
        </div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li> {/* Link to new Home route */}
          <li><Link to="/plans">Plans</Link></li>
          <li><Link to="/Offers">Offers</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>

        </ul>
        <div className="right-side">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-button">Search</button>
          </div>
          <Link to="/login">
            <button className="auth-button">Login/Register</button>
          </Link>
          <div className="account-dropdown">
            <button className="account-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/profile" onClick={closeDropdown}>Profile</Link>
                <Link to="/settings" onClick={closeDropdown}>Settings</Link>
                <Link to="/logout" onClick={closeDropdown}>Logout</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
