import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import { FaUserPlus, FaSignInAlt, FaTachometerAlt } from 'react-icons/fa';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const location = useLocation(); // Hook to access the current location
  const [activePage, setActivePage] = useState('');

  // Define isActive function to check the current path
  const isActive = (path) => location.pathname === path;

  return (
    <div className={styles["sidebar-container"]}>
      <h2 className={styles["sidebar-title"]}><FaTachometerAlt /> IOT</h2><br/><br/>

      <ul className={styles['nav-list']}>
        <li className={`${styles['nav-item']} ${isActive('/dashboard') ? styles['active'] : ''}`}>
          <Link to="/dashboard" className={styles['nav-link']}>
            <FaTachometerAlt className={styles['nav-item-icon']} />
            Dashboard
          </Link>
        </li><br/>

        <li className={`${styles['nav-item']} ${isActive('/signup') ? styles['active'] : ''}`}>
          <Link to="/signup" className={styles['nav-link']}>
            <FaUserPlus className={styles['nav-item-icon']} />
            Sign Up
          </Link>
        </li><br/>

        <li className={`${styles['nav-item']} ${isActive('/signin') ? styles['active'] : ''}`}>
          <Link to="/signin" className={styles['nav-link']}>
            <FaSignInAlt className={styles['nav-item-icon']} />
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
