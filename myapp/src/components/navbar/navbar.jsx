import React from 'react';
import ic from '../../assets/icons/signup/ic.png';
import ico from '../../assets/icons/signup/ico.png';
import signin from '../../assets/icons/signup/icon.png';
import iot from '../../assets/icons/signup/iot.png';
import box from '../../assets/icons/signup/box.png';
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <a href="/" className="logo-link">
          <img style={{ marginLeft: '50px' }} src={iot} alt="IoT Icon" className="icon" /> IoT
          <span className="logo-separator">|</span>
        </a>
      </div>
      
      <div className="center-nav-items">
        <div className="nav-items">
          <a href="/dashboard" className="nav-item">
            <h3><img src={box} alt="Dashboard Icon" className="icon" /> Dashboard</h3>
          </a>
          <a href="/profile" className="nav-item">
            <h3><img src={ic} alt="Profile Icon" className="icon" /> Profile</h3>
          </a>
          <a href="/signup" className="nav-item">
            <h3><img src={ico} alt="Sign Up Icon" className="icon" /> Sign Up</h3>
          </a>
          <a href="/login" className="nav-item">
            <h3><img src={signin} alt="Sign In Icon" className="icon" /> Login</h3>
          </a>
        </div>
      </div>
      
      <a href="/download" className="download-btn-link">
        <button className="download-btn">FREE DOWNLOAD</button>
      </a>
    </div>


      {/* This must be sent to the background component */}
     

    </>
  );
}

export default Navbar;
