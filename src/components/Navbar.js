import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-content">
        <p> We are Here to Serve you 24/7 </p>
      </div>

      <div className="right-content">
        <p> Login as: <a href="/">Individual</a> | <a href="/about">Employee</a> | <a href="/services">Company</a> | <a href="/contact">TPA</a></p>
        <div className="chat">
          <FontAwesomeIcon icon={faPhone} />
          <span> Chat with My Kiota</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
