import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import ic from '../../assets/icons/signup/ic.png';
import ico from '../../assets/icons/signup/ico.png';
import signin from '../../assets/icons/signup/icon.png';
import iot from '../../assets/icons/signup/iot.png';
import box from '../../assets/icons/signup/box.png';
import './navbar.css';

const Navbar = ({ notificationCount }) => {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  // Handler for the notification bell click
  const handleBellClick = () => {
    setIsDropdownVisible((prevVisible) => !prevVisible);
  };

  console.log("from navbar " + userRole);

  // Check if the current page is Dashboard
  const isDashboardPage = location.pathname === '/dashboard';

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
              {/* Only show Signup and Login options if not on the Dashboard page */}
              {!isDashboardPage && (
                  <>
                    <a href="/signup" className="nav-item">
                      <h3><img src={ico} alt="Sign Up Icon" className="icon" /> Sign Up</h3>
                    </a>
                    <a href="/login" className="nav-item">
                      <h3><img src={signin} alt="Sign In Icon" className="icon" /> Login</h3>
                    </a>
                  </>
              )}
            </div>
          </div>

          {/* Show Bell Icon only on the Dashboard page */}
          {isDashboardPage && (
              <div className="notification-container" onClick={handleBellClick}>
                <FontAwesomeIcon icon={faBell} className="bell-icon" />
                {notificationCount > 0 && (
                    <span className="notification-badge">{notificationCount}</span>
                )}
              </div>
          )}

          {/* Notification dropdown */}
          {isDashboardPage && isDropdownVisible && (
              <div className="notification-dropdown">
                <p>No new user.</p>
              </div>
          )}
        </div>
      </>
  );
};

export default Navbar;
