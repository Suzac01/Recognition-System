import React from 'react';
import styles from './navbar.module.css';
import icon from '../../../assets/icons/bell.png';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>Dashboard</div>

      <div className={styles.navbarRight}>
        {/* Search Input */}
        <div className={styles.navbarSearch}>
          <input style={{color:'white'}}
            type="text" 
            placeholder="Search..." 
            aria-label="Search" 
          />  
        </div>

        <div className={styles.navbarIcon}>
          <img src={icon}/> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
