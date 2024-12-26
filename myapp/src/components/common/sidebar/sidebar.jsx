import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserPlus, FaSignInAlt, FaTachometerAlt, FaCamera } from 'react-icons/fa';
import styles from './sidebar.module.css';

const Sidebar = ({ onUsersClick, onDashboardClick, onMonitorClick }) => {
    const location = useLocation();
    const userRole = localStorage.getItem('userRole'); // Get the user role from localStorage

    const isActive = (path) => location.pathname === path;

    return (
        <div className={styles["sidebar-container"]}>
            <h2 className={styles["sidebar-title"]}><FaTachometerAlt /> IOT</h2><br /><br />

            <ul className={styles['nav-list']}>
                <li className={`${styles['nav-item']} ${isActive('/dashboard') ? styles['active'] : ''}`}>
                    <Link
                        to="/dashboard"
                        className={styles['nav-link']}
                        onClick={(e) => {
                            e.preventDefault();
                            onDashboardClick();
                        }}
                    >
                        <FaTachometerAlt className={styles['nav-item-icon']} />
                        Dashboard
                    </Link>
                </li>
                <br />

                <li className={`${styles['nav-item']} ${isActive('/main') ? styles['active'] : ''}`}>
                    <Link
                        to="/main"
                        className={styles['nav-link']}
                        onClick={(e) => {
                            e.preventDefault();
                            onUsersClick();
                        }}
                    >
                        <FaSignInAlt className={styles['nav-item-icon']} />
                        Users
                    </Link>
                </li>
                <br />

                {/* Conditionally show Monitor only for admin */}
                {userRole === 'admin' && (
                    <li className={`${styles['nav-item']} ${isActive('/monitor') ? styles['active'] : ''}`}>
                        <Link
                            to="/monitor"
                            className={styles['nav-link']}
                            onClick={(e) => {
                                e.preventDefault();
                                onMonitorClick();
                            }}
                        >
                            <FaCamera className={styles['nav-item-icon']} />
                            Monitor
                        </Link>
                    </li>
                )}
                <br />

                <li className={`${styles['nav-item']} ${isActive('/signup') ? styles['active'] : ''}`}>
                    <Link to="/signup" className={styles['nav-link']}>
                        <FaUserPlus className={styles['nav-item-icon']} />
                        Sign Up
                    </Link>
                </li>
                <br /><br /><br /><br /><br /><br />

                <li className={`${styles['nav-item']} ${isActive('/logout') ? styles['active'] : ''}`}>
                    <Link to="/logout" className={styles['nav-link']}>
                        <FaUserPlus className={styles['nav-item-icon']} />
                        Log out
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
